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
