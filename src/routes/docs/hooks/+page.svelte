<svelte:head>
	<title>Hooks & Callbacks - Nexorix Framework</title>
</svelte:head>

<h1>Hooks & Callbacks</h1>

<p>
	O sistema <code>NX.Hook</code> permite registrar callbacks para eventos do servidor. 
	Múltiplos hooks podem ser registrados para o mesmo evento — eles executam na ordem de registro.
</p>

<h2>Uso</h2>

<div class="code-block">
	<pre><code>{`local NX = require("nexorix")

-- Registrar um hook
NX.Hook("EventName", function(...)
    -- Seu código aqui
end)

-- Múltiplos hooks para o mesmo evento
NX.Hook("OnPlayerConnect", function(playerid)
    print("Player connected: " .. playerid)
end)

NX.Hook("OnPlayerConnect", function(playerid)
    nx_SendClientMessage(playerid, NX.COLOR.WHITE, "Welcome!")
end)`}</code></pre>
</div>

<h2>Eventos do Servidor</h2>

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
			<td><code>OnGameModeInit</code></td>
			<td><em>nenhum</em></td>
			<td>Chamado quando o gamemode inicia</td>
		</tr>
		<tr>
			<td><code>OnGameModeExit</code></td>
			<td><em>nenhum</em></td>
			<td>Chamado quando o gamemode encerra</td>
		</tr>
		<tr>
			<td><code>OnTick</code></td>
			<td><em>nenhum</em></td>
			<td>Chamado a cada tick do servidor (~50ms)</td>
		</tr>
	</tbody>
</table>

<h2>Eventos de Player</h2>

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
			<td><code>OnPlayerConnect</code></td>
			<td><code>playerid</code></td>
			<td>Player conectou ao servidor</td>
		</tr>
		<tr>
			<td><code>OnPlayerDisconnect</code></td>
			<td><code>playerid, reason</code></td>
			<td>Player desconectou (0=timeout, 1=saiu, 2=kick)</td>
		</tr>
		<tr>
			<td><code>OnPlayerSpawn</code></td>
			<td><code>playerid</code></td>
			<td>Player spawnou no mundo</td>
		</tr>
		<tr>
			<td><code>OnPlayerDeath</code></td>
			<td><code>playerid, killerid, reason</code></td>
			<td>Player morreu ou foi morto</td>
		</tr>
		<tr>
			<td><code>OnPlayerText</code></td>
			<td><code>playerid, text</code></td>
			<td>Player enviou uma mensagem no chat</td>
		</tr>
		<tr>
			<td><code>OnPlayerCommand</code></td>
			<td><code>playerid, cmdtext</code></td>
			<td>Player digitou um comando (antes do NX.RegisterCommand)</td>
		</tr>
		<tr>
			<td><code>OnPlayerRequestClass</code></td>
			<td><code>playerid, classid</code></td>
			<td>Player está na seleção de classe</td>
		</tr>
		<tr>
			<td><code>OnPlayerEnterVehicle</code></td>
			<td><code>playerid, vehicleid, ispassenger</code></td>
			<td>Player começou a entrar em um veículo</td>
		</tr>
		<tr>
			<td><code>OnPlayerExitVehicle</code></td>
			<td><code>playerid, vehicleid</code></td>
			<td>Player começou a sair de um veículo</td>
		</tr>
		<tr>
			<td><code>OnPlayerKeyStateChange</code></td>
			<td><code>playerid, newkeys, oldkeys</code></td>
			<td>Player pressionou ou soltou uma tecla</td>
		</tr>
	</tbody>
</table>

<h2>Eventos de Diálogo</h2>

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
			<td><code>OnDialogResponse</code></td>
			<td><code>playerid, dialogid, response, listitem, inputtext</code></td>
			<td>Player respondeu a um diálogo</td>
		</tr>
	</tbody>
</table>

<div class="code-block">
	<pre><code>{`NX.Hook("OnDialogResponse", function(playerid, dialogid, response, listitem, inputtext)
    if dialogid == 1 then
        if response == 1 then  -- Botão "Aceitar"
            nx_SendClientMessage(playerid, NX.COLOR.GREEN, "Rules accepted!")
            nx_SpawnPlayer(playerid)
        else
            nx_Kick(playerid)
        end
    end
end)`}</code></pre>
</div>

<h2>Eventos de Voz</h2>

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
			<td><code>OnPlayerVoiceConnect</code></td>
			<td><code>playerid</code></td>
			<td>Cliente de voz do player conectou</td>
		</tr>
		<tr>
			<td><code>OnPlayerVoiceStart</code></td>
			<td><code>playerid</code></td>
			<td>Player começou a transmitir voz</td>
		</tr>
		<tr>
			<td><code>OnPlayerVoiceStop</code></td>
			<td><code>playerid</code></td>
			<td>Player parou de transmitir voz</td>
		</tr>
	</tbody>
</table>

<h2>Valores de Retorno</h2>

<p>
	Alguns hooks suportam valores de retorno para controlar o comportamento:
</p>

<div class="code-block">
	<pre><code>{`-- Retornar false para bloquear o comportamento padrão
NX.Hook("OnPlayerText", function(playerid, text)
    -- Bloquear mensagens contendo palavrões
    if string.find(text, "badword") then
        nx_SendClientMessage(playerid, NX.COLOR.RED, "Watch your language!")
        return false  -- Mensagem não será enviada no chat
    end
end)

-- Retornar false para bloquear o processamento de comandos
NX.Hook("OnPlayerCommand", function(playerid, cmdtext)
    if not nx_IsPlayerLoggedIn(playerid) then
        nx_SendClientMessage(playerid, NX.COLOR.RED, "Please login first!")
        return false
    end
end)`}</code></pre>
</div>
