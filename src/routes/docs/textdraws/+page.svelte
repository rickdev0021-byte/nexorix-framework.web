<svelte:head>
	<title>TextDraws - Nexorix Framework</title>
</svelte:head>

<h1>TextDraws</h1>

<p>
	TextDraws são elementos de HUD exibidos na tela do player. Nexorix fornece a API completa 
	<code>nx_TextDraw*</code> para criar e gerenciar TextDraws globais e por player.
</p>

<h2>TextDraws Globais</h2>

<p>TextDraws globais são criados uma vez e podem ser mostrados/ocultados para players individuais.</p>

<table>
	<thead>
		<tr>
			<th>Função</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>nx_TextDrawCreate(x, y, text)</code></td>
			<td>Cria um TextDraw na posição da tela. Retorna o ID do TextDraw.</td>
		</tr>
		<tr>
			<td><code>nx_TextDrawDestroy(textdrawid)</code></td>
			<td>Destrói um TextDraw</td>
		</tr>
		<tr>
			<td><code>nx_TextDrawShowForPlayer(playerid, textdrawid)</code></td>
			<td>Mostra um TextDraw para um player específico</td>
		</tr>
		<tr>
			<td><code>nx_TextDrawHideForPlayer(playerid, textdrawid)</code></td>
			<td>Oculta um TextDraw de um player específico</td>
		</tr>
		<tr>
			<td><code>nx_TextDrawShowForAll(textdrawid)</code></td>
			<td>Mostra um TextDraw para todos os players</td>
		</tr>
		<tr>
			<td><code>nx_TextDrawHideForAll(textdrawid)</code></td>
			<td>Oculta um TextDraw de todos os players</td>
		</tr>
	</tbody>
</table>

<h2>Estilização de TextDraw</h2>

<table>
	<thead>
		<tr>
			<th>Função</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>nx_TextDrawFont(textdrawid, font)</code></td>
			<td>Define a fonte (0-3)</td>
		</tr>
		<tr>
			<td><code>nx_TextDrawLetterSize(textdrawid, width, height)</code></td>
			<td>Define as dimensões das letras</td>
		</tr>
		<tr>
			<td><code>nx_TextDrawTextSize(textdrawid, width, height)</code></td>
			<td>Define o tamanho da caixa do TextDraw</td>
		</tr>
		<tr>
			<td><code>nx_TextDrawColor(textdrawid, color)</code></td>
			<td>Define a cor do texto (hex RGBA)</td>
		</tr>
		<tr>
			<td><code>nx_TextDrawBackgroundColor(textdrawid, color)</code></td>
			<td>Define a cor de fundo</td>
		</tr>
		<tr>
			<td><code>nx_TextDrawBoxColor(textdrawid, color)</code></td>
			<td>Define a cor da caixa</td>
		</tr>
		<tr>
			<td><code>nx_TextDrawUseBox(textdrawid, use)</code></td>
			<td>Ativa/desativa a caixa de fundo</td>
		</tr>
		<tr>
			<td><code>nx_TextDrawSetOutline(textdrawid, size)</code></td>
			<td>Define o tamanho do contorno do texto</td>
		</tr>
		<tr>
			<td><code>nx_TextDrawSetShadow(textdrawid, size)</code></td>
			<td>Define o tamanho da sombra do texto</td>
		</tr>
		<tr>
			<td><code>nx_TextDrawAlignment(textdrawid, alignment)</code></td>
			<td>Define o alinhamento (1=esquerda, 2=centro, 3=direita)</td>
		</tr>
		<tr>
			<td><code>nx_TextDrawSetString(textdrawid, text)</code></td>
			<td>Atualiza o texto do TextDraw</td>
		</tr>
		<tr>
			<td><code>nx_TextDrawSetSelectable(textdrawid, selectable)</code></td>
			<td>Torna o TextDraw clicável</td>
		</tr>
	</tbody>
</table>

<h2>Exemplo: Display HUD</h2>

<div class="code-block">
	<pre><code>{`-- Criar um cabeçalho com nome do servidor
local serverName = nx_TextDrawCreate(320.0, 5.0, "~p~Nexorix ~w~Server")
nx_TextDrawFont(serverName, 2)
nx_TextDrawLetterSize(serverName, 0.4, 1.5)
nx_TextDrawColor(serverName, 0xFFFFFFFF)
nx_TextDrawSetOutline(serverName, 1)
nx_TextDrawAlignment(serverName, 2)  -- Centro

-- Criar um display de dinheiro com caixa
local moneyBox = nx_TextDrawCreate(500.0, 100.0, "$0")
nx_TextDrawFont(moneyBox, 3)
nx_TextDrawLetterSize(moneyBox, 0.5, 2.0)
nx_TextDrawColor(moneyBox, 0x00FF00FF)
nx_TextDrawUseBox(moneyBox, true)
nx_TextDrawBoxColor(moneyBox, 0x00000080)
nx_TextDrawTextSize(moneyBox, 600.0, 0.0)

-- Mostrar para o player ao spawnar
NX.Hook("OnPlayerSpawn", function(playerid)
    nx_TextDrawShowForPlayer(playerid, serverName)
    nx_TextDrawShowForPlayer(playerid, moneyBox)
end)

-- Atualizar display de dinheiro
function UpdateMoneyDisplay(playerid, amount)
    nx_TextDrawSetString(moneyBox, "$" .. tostring(amount))
    nx_TextDrawShowForPlayer(playerid, moneyBox)
end`}</code></pre>
</div>

<h2>TextDraws por Player</h2>

<table>
	<thead>
		<tr>
			<th>Função</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>nx_CreatePlayerTextDraw(playerid, x, y, text)</code></td>
			<td>Cria um TextDraw visível apenas para um player</td>
		</tr>
		<tr>
			<td><code>nx_PlayerTextDrawShow(playerid, textdrawid)</code></td>
			<td>Mostra o TextDraw por player</td>
		</tr>
		<tr>
			<td><code>nx_PlayerTextDrawHide(playerid, textdrawid)</code></td>
			<td>Oculta o TextDraw por player</td>
		</tr>
		<tr>
			<td><code>nx_PlayerTextDrawDestroy(playerid, textdrawid)</code></td>
			<td>Destrói um TextDraw por player</td>
		</tr>
		<tr>
			<td><code>nx_PlayerTextDrawSetString(playerid, textdrawid, text)</code></td>
			<td>Atualiza o texto do TextDraw por player</td>
		</tr>
	</tbody>
</table>

<div class="code-block">
	<pre><code>{`-- Velocímetro por player
local speedometers = {}

NX.Hook("OnPlayerSpawn", function(playerid)
    speedometers[playerid] = nx_CreatePlayerTextDraw(playerid, 550.0, 380.0, "0 km/h")
    nx_PlayerTextDrawFont(playerid, speedometers[playerid], 2)
    nx_PlayerTextDrawLetterSize(playerid, speedometers[playerid], 0.4, 1.8)
    nx_PlayerTextDrawColor(playerid, speedometers[playerid], 0xFFFFFFFF)
end)

-- Atualizar velocidade a cada 200ms
nx_SetTimer(function()
    for i = 0, nx_GetMaxPlayers() - 1 do
        if nx_IsPlayerConnected(i) and nx_IsPlayerInAnyVehicle(i) then
            local speed = GetPlayerSpeed(i)  -- sua função
            nx_PlayerTextDrawSetString(i, speedometers[i], 
                tostring(math.floor(speed)) .. " km/h")
            nx_PlayerTextDrawShow(i, speedometers[i])
        end
    end
end, 200, true)`}</code></pre>
</div>

<h2>Dynamic Objects (Streamer)</h2>

<p>Objetos do mundo com streaming automático. Substitui o plugin Streamer do SA-MP.</p>

<table>
	<thead>
		<tr>
			<th>Função</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>nx_CreateDynamicObject(model, x, y, z, rx, ry, rz, world, interior, player, streamdist, drawdist)</code></td>
			<td>Cria objeto com streaming. Retorna objectid.</td>
		</tr>
		<tr>
			<td><code>nx_DestroyDynamicObject(objectid)</code></td>
			<td>Destrói o objeto</td>
		</tr>
		<tr>
			<td><code>nx_IsValidDynamicObject(objectid)</code></td>
			<td>Verifica se o objeto existe</td>
		</tr>
		<tr>
			<td><code>nx_GetDynamicObjectPos(objectid)</code></td>
			<td>Retorna x, y, z</td>
		</tr>
		<tr>
			<td><code>nx_SetDynamicObjectPos(objectid, x, y, z)</code></td>
			<td>Define posição</td>
		</tr>
		<tr>
			<td><code>nx_GetDynamicObjectRot(objectid)</code></td>
			<td>Retorna rx, ry, rz</td>
		</tr>
		<tr>
			<td><code>nx_SetDynamicObjectRot(objectid, rx, ry, rz)</code></td>
			<td>Define rotação</td>
		</tr>
		<tr>
			<td><code>nx_MoveDynamicObject(objectid, x, y, z, speed, rx, ry, rz)</code></td>
			<td>Move o objeto para uma posição</td>
		</tr>
		<tr>
			<td><code>nx_StopDynamicObject(objectid)</code></td>
			<td>Para o movimento</td>
		</tr>
		<tr>
			<td><code>nx_IsDynamicObjectMoving(objectid)</code></td>
			<td>Verifica se está em movimento</td>
		</tr>
		<tr>
			<td><code>nx_SetDynamicObjectMaterial(objectid, index, model, txd, texture, color)</code></td>
			<td>Aplica textura ao objeto</td>
		</tr>
		<tr>
			<td><code>nx_SetDynamicObjectMaterialText(objectid, index, text, size, font, fontsize, bold, fontcolor, bgcolor, align)</code></td>
			<td>Aplica texto como material</td>
		</tr>
		<tr>
			<td><code>nx_RemoveBuildingForPlayer(playerid, model, x, y, z, radius)</code></td>
			<td>Remove um building do mapa para o player</td>
		</tr>
	</tbody>
</table>

<h3>Exemplo: Placa com texto</h3>

<div class="code-block">
	<pre><code>{`NX.Hook("OnGameModeInit", function()
    -- Remover building original
    -- (feito no OnPlayerConnect para cada player)

    -- Criar placa com texto roxo
    local placa = nx_CreateDynamicObject(13759, 1405.0, -812.9, 75.9,
        90.0, 0.0, 1.1, -1, -1, -1, 300.0, 300.0)
    nx_SetDynamicObjectMaterialText(placa, 0, "{9B59B6}NEXORIX",
        130, "Arial", 100, true, 0x00000000, 0x00000000, 1)
end)

NX.Hook("OnPlayerConnect", function(playerid)
    nx_RemoveBuildingForPlayer(playerid, 13759, 1413.4, -804.7, 83.4, 0.25)
end)`}</code></pre>
</div>

<h3>Exemplo: Portão automático</h3>

<div class="code-block">
	<pre><code>{`local portao = nil

NX.Hook("OnGameModeInit", function()
    portao = nx_CreateDynamicObject(980, 1000.0, 2000.0, 15.0,
        0.0, 0.0, 0.0, -1, -1, -1, 100.0, 100.0)
end)

NX.RegisterCommand("abrir", function(pid)
    nx_MoveDynamicObject(portao, 1000.0, 2000.0, 20.0, 2.0)
    nx_SendClientMessage(pid, NX.COLOR.GREEN, ">> Portao aberto!")
end)

NX.RegisterCommand("fechar", function(pid)
    nx_MoveDynamicObject(portao, 1000.0, 2000.0, 15.0, 2.0)
    nx_SendClientMessage(pid, NX.COLOR.GREEN, ">> Portao fechado!")
end)`}</code></pre>
</div>

<h2>NX.UI — Framework Declarativo</h2>

<p>Wrapper de alto nível que cria TextDraws automaticamente. Ideal para HUDs rápidas sem gerenciar IDs manualmente.</p>

<h3>NX.UI.Bar — Barra de Progresso</h3>

<div class="code-block">
	<pre><code>{`local vida_bar = NX.UI.Bar(playerid, {
    x = 500, y = 400,
    width = 100, height = 8,
    color = 0xFF0000FF,      -- vermelho
    bg_color = 0x333333FF,   -- cinza escuro
    value = 100              -- 0 a 100
})

-- Atualizar valor
vida_bar:SetValue(75)

-- Destruir
vida_bar:Destroy()`}</code></pre>
</div>

<h3>NX.UI.Text — Elemento de Texto</h3>

<div class="code-block">
	<pre><code>{`local titulo = NX.UI.Text(playerid, {
    x = 320, y = 10,
    text = "Nexorix Server",
    color = 0x9B59B6FF,
    font = 2,
    size = 1.2
})

-- Atualizar texto
titulo:SetText("Novo Titulo")

-- Destruir
titulo:Destroy()`}</code></pre>
</div>

<h3>NX.UI.Box — Caixa/Painel</h3>

<div class="code-block">
	<pre><code>{`local painel = NX.UI.Box(playerid, {
    x = 10, y = 300,
    width = 200, height = 100,
    color = 0x000000AA   -- preto semi-transparente
})

painel:Destroy()`}</code></pre>
</div>

<h3>Exemplo Completo: HUD de Status</h3>

<div class="code-block">
	<pre><code>{`NX.Hook("OnPlayerSpawn", function(pid)
    -- Painel de fundo
    NX.UI.Box(pid, {x=490, y=395, width=120, height=50, color=0x00000066})

    -- Barra de vida
    local hp = NX.UI.Bar(pid, {x=500, y=400, width=100, height=6, color=0xFF0000FF, value=100})

    -- Barra de colete
    local arm = NX.UI.Bar(pid, {x=500, y=412, width=100, height=6, color=0x4488FFFF, value=0})

    -- Label
    NX.UI.Text(pid, {x=500, y=420, text="HP / Colete", color=0xAAAAAAFF, font=1, size=0.8})

    -- Salvar referências para atualizar depois
    PlayerData[pid].hud_hp = hp
    PlayerData[pid].hud_arm = arm
end)`}</code></pre>
</div>
