<svelte:head>
	<title>Bot Discord - Nexorix Framework</title>
</svelte:head>

<h1>Bot Discord</h1>

<p>
	Nexorix inclui integração com Discord embutida para conectar seu servidor de jogo com o Discord. 
	Envie mensagens, registre slash commands e sincronize eventos entre plataformas.
</p>

<h2>Configuração</h2>

<p>Ative o Discord no seu <code>config.json</code>:</p>

<div class="code-block">
	<pre><code>{`{
    "discord": {
        "enabled": true,
        "token": "YOUR_BOT_TOKEN",
        "channel_id": "YOUR_CHANNEL_ID",
        "guild_id": "YOUR_GUILD_ID"
    }
}`}</code></pre>
</div>

<h2>Enviando Mensagens</h2>

<table>
	<thead>
		<tr>
			<th>Função</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>Discord_SendMessage(channel_id, message)</code></td>
			<td>Envia uma mensagem de texto para um canal do Discord</td>
		</tr>
		<tr>
			<td><code>Discord_SendEmbed(channel_id, title, description, color)</code></td>
			<td>Envia uma mensagem embed</td>
		</tr>
	</tbody>
</table>

<div class="code-block">
	<pre><code>{`-- Enviar uma mensagem simples
Discord_SendMessage(config.discord.channel_id, 
    "🟢 Server is now online!")

-- Enviar chat do player para o Discord
NX.Hook("OnPlayerText", function(playerid, text)
    local name = nx_GetPlayerName(playerid)
    Discord_SendMessage(config.discord.channel_id, 
        "**" .. name .. ":** " .. text)
end)

-- Notificar quando player conecta/desconecta
NX.Hook("OnPlayerConnect", function(playerid)
    local name = nx_GetPlayerName(playerid)
    Discord_SendMessage(config.discord.channel_id, 
        "📥 " .. name .. " joined the server")
end)

NX.Hook("OnPlayerDisconnect", function(playerid, reason)
    local name = nx_GetPlayerName(playerid)
    Discord_SendMessage(config.discord.channel_id, 
        "📤 " .. name .. " left the server")
end)`}</code></pre>
</div>

<h2>Slash Commands</h2>

<table>
	<thead>
		<tr>
			<th>Função</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>Discord_RegisterCommand(name, description, callback)</code></td>
			<td>Registra um slash command do Discord</td>
		</tr>
		<tr>
			<td><code>Discord_ReplyToInteraction(interaction, message)</code></td>
			<td>Responde a uma interação de slash command</td>
		</tr>
	</tbody>
</table>

<div class="code-block">
	<pre><code>{`-- Registrar comando /players
Discord_RegisterCommand("players", "Show online players", function(interaction)
    local count = 0
    local names = {}
    
    for i = 0, nx_GetMaxPlayers() - 1 do
        if nx_IsPlayerConnected(i) then
            count = count + 1
            table.insert(names, nx_GetPlayerName(i))
        end
    end
    
    local msg = string.format("**Online Players (%d):**\\n%s", 
        count, table.concat(names, ", "))
    Discord_ReplyToInteraction(interaction, msg)
end)

-- Registrar comando /status
Discord_RegisterCommand("status", "Show server status", function(interaction)
    local players = GetOnlineCount()
    local uptime = os.time() - serverStartTime
    local hours = math.floor(uptime / 3600)
    local mins = math.floor((uptime % 3600) / 60)
    
    Discord_ReplyToInteraction(interaction, string.format(
        "🖥️ **Server Status**\\nPlayers: %d/%d\\nUptime: %dh %dm",
        players, nx_GetMaxPlayers(), hours, mins
    ))
end)`}</code></pre>
</div>

<h2>Embeds</h2>

<div class="code-block">
	<pre><code>{`-- Enviar um embed quando player morre
NX.Hook("OnPlayerDeath", function(playerid, killerid, reason)
    if killerid ~= 255 then  -- 255 = sem assassino
        local victim = nx_GetPlayerName(playerid)
        local killer = nx_GetPlayerName(killerid)
        
        Discord_SendEmbed(config.discord.channel_id,
            "☠️ Kill Feed",
            killer .. " killed " .. victim,
            0xFF0000  -- Red color
        )
    end
end)

-- Embed de inicialização do servidor
NX.Hook("OnGameModeInit", function()
    Discord_SendEmbed(config.discord.channel_id,
        "🚀 Server Started",
        "Nexorix Framework is now online and accepting connections.",
        0x7C3AED  -- Purple color
    )
end)`}</code></pre>
</div>

<h2>Eventos do Discord</h2>

<table>
	<thead>
		<tr>
			<th>Hook</th>
			<th>Parâmetros</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>OnDiscordMessage</code></td>
			<td><code>author, message, channel_id</code></td>
			<td>Uma mensagem foi enviada em um canal monitorado</td>
		</tr>
		<tr>
			<td><code>OnDiscordReady</code></td>
			<td><em>nenhum</em></td>
			<td>Bot do Discord conectou com sucesso</td>
		</tr>
	</tbody>
</table>

<div class="code-block">
	<pre><code>{`-- Enviar mensagens do Discord para o chat do jogo
NX.Hook("OnDiscordMessage", function(author, message, channel_id)
    if channel_id == config.discord.channel_id then
        nx_SendClientMessageToAll(NX.COLOR.DISCORD_BLUE,
            "[Discord] " .. author .. ": " .. message)
    end
end)`}</code></pre>
</div>
