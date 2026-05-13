<svelte:head>
	<title>Funções (nx_*) - Nexorix Framework</title>
</svelte:head>

<h1>Funções (nx_*)</h1>

<p>
	Todas as funções nativas do Nexorix são prefixadas com <code>nx_</code>. Elas fornecem acesso direto 
	à funcionalidade do servidor a partir do Lua.
</p>

<h2>Funções de Player</h2>

<h3>Posição & Movimento</h3>

<table>
	<thead>
		<tr>
			<th>Função</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>nx_SetPlayerPos(playerid, x, y, z)</code></td>
			<td>Define a posição de um player no mundo</td>
		</tr>
		<tr>
			<td><code>nx_GetPlayerPos(playerid)</code></td>
			<td>Retorna as coordenadas x, y, z do player</td>
		</tr>
		<tr>
			<td><code>nx_SetPlayerFacingAngle(playerid, angle)</code></td>
			<td>Define a direção que o player está olhando</td>
		</tr>
		<tr>
			<td><code>nx_SetPlayerInterior(playerid, interiorid)</code></td>
			<td>Define o interior do player</td>
		</tr>
		<tr>
			<td><code>nx_SetPlayerVirtualWorld(playerid, worldid)</code></td>
			<td>Define o mundo virtual do player</td>
		</tr>
	</tbody>
</table>

<div class="code-block">
	<pre><code>{`-- Teleportar um player para uma localização
local x, y, z = nx_GetPlayerPos(playerid)
nx_SetPlayerPos(playerid, 1500.0, -1700.0, 13.5)
nx_SetPlayerFacingAngle(playerid, 90.0)
nx_SetPlayerInterior(playerid, 0)`}</code></pre>
</div>

<h3>Vida & Colete</h3>

<table>
	<thead>
		<tr>
			<th>Função</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>nx_SetPlayerHealth(playerid, health)</code></td>
			<td>Define a vida do player (0.0 - 100.0)</td>
		</tr>
		<tr>
			<td><code>nx_GetPlayerHealth(playerid)</code></td>
			<td>Retorna a vida atual do player</td>
		</tr>
		<tr>
			<td><code>nx_SetPlayerArmour(playerid, armour)</code></td>
			<td>Define o colete do player (0.0 - 100.0)</td>
		</tr>
		<tr>
			<td><code>nx_GetPlayerArmour(playerid)</code></td>
			<td>Retorna o colete atual do player</td>
		</tr>
	</tbody>
</table>

<h3>Armas</h3>

<table>
	<thead>
		<tr>
			<th>Função</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>nx_GivePlayerWeapon(playerid, weaponid, ammo)</code></td>
			<td>Dá uma arma a um player</td>
		</tr>
		<tr>
			<td><code>nx_ResetPlayerWeapons(playerid)</code></td>
			<td>Remove todas as armas de um player</td>
		</tr>
		<tr>
			<td><code>nx_GetPlayerWeapon(playerid)</code></td>
			<td>Obtém o ID da arma que o player está segurando</td>
		</tr>
	</tbody>
</table>

<div class="code-block">
	<pre><code>{`-- Dar um kit de armas ao player
nx_GivePlayerWeapon(playerid, 24, 100)  -- Desert Eagle
nx_GivePlayerWeapon(playerid, 31, 500)  -- M4
nx_GivePlayerWeapon(playerid, 34, 20)   -- Sniper Rifle`}</code></pre>
</div>

<h3>Mensagens</h3>

<table>
	<thead>
		<tr>
			<th>Função</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>nx_SendClientMessage(playerid, color, message)</code></td>
			<td>Envia uma mensagem de chat para um player específico</td>
		</tr>
		<tr>
			<td><code>nx_SendClientMessageToAll(color, message)</code></td>
			<td>Envia uma mensagem de chat para todos os players</td>
		</tr>
		<tr>
			<td><code>nx_ShowPlayerDialog(playerid, dialogid, style, title, body, btn1, btn2)</code></td>
			<td>Mostra uma caixa de diálogo para um player</td>
		</tr>
		<tr>
			<td><code>nx_GameTextForPlayer(playerid, text, time, style)</code></td>
			<td>Mostra texto na tela do player</td>
		</tr>
	</tbody>
</table>

<div class="code-block">
	<pre><code>{`-- Enviar mensagens coloridas
nx_SendClientMessage(playerid, NX.COLOR.RED, "[Error] Something went wrong!")
nx_SendClientMessage(playerid, NX.COLOR.GREEN, "[Success] Action completed!")

-- Mostrar um diálogo
nx_ShowPlayerDialog(playerid, 1, 0, "Welcome",
    "Welcome to the server!\\nPlease read the rules.",
    "Accept", "Decline")`}</code></pre>
</div>

<h3>Informações do Player</h3>

<table>
	<thead>
		<tr>
			<th>Função</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>nx_GetPlayerName(playerid)</code></td>
			<td>Retorna o nome do player como string</td>
		</tr>
		<tr>
			<td><code>nx_IsPlayerConnected(playerid)</code></td>
			<td>Verifica se um player ID está conectado</td>
		</tr>
		<tr>
			<td><code>nx_GetPlayerScore(playerid)</code></td>
			<td>Obtém o score do player</td>
		</tr>
		<tr>
			<td><code>nx_SetPlayerScore(playerid, score)</code></td>
			<td>Define o score do player</td>
		</tr>
		<tr>
			<td><code>nx_GetPlayerPing(playerid)</code></td>
			<td>Obtém o ping de rede do player</td>
		</tr>
		<tr>
			<td><code>nx_GetPlayerIP(playerid)</code></td>
			<td>Obtém o endereço IP do player</td>
		</tr>
		<tr>
			<td><code>nx_Kick(playerid)</code></td>
			<td>Expulsa um player do servidor</td>
		</tr>
		<tr>
			<td><code>nx_Ban(playerid)</code></td>
			<td>Bane um player do servidor</td>
		</tr>
	</tbody>
</table>

<h2>Funções de Veículo</h2>

<table>
	<thead>
		<tr>
			<th>Função</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>nx_CreateVehicle(modelid, x, y, z, rotation, color1, color2, respawn_delay)</code></td>
			<td>Cria um veículo no mundo</td>
		</tr>
		<tr>
			<td><code>nx_DestroyVehicle(vehicleid)</code></td>
			<td>Destrói um veículo</td>
		</tr>
		<tr>
			<td><code>nx_PutPlayerInVehicle(playerid, vehicleid, seatid)</code></td>
			<td>Coloca um player dentro de um veículo</td>
		</tr>
		<tr>
			<td><code>nx_GetPlayerVehicleID(playerid)</code></td>
			<td>Obtém o ID do veículo em que o player está</td>
		</tr>
		<tr>
			<td><code>nx_SetVehicleHealth(vehicleid, health)</code></td>
			<td>Define a vida do veículo</td>
		</tr>
		<tr>
			<td><code>nx_RepairVehicle(vehicleid)</code></td>
			<td>Repara completamente um veículo</td>
		</tr>
	</tbody>
</table>

<div class="code-block">
	<pre><code>{`-- Criar um veículo e colocar o player dentro
local veh = nx_CreateVehicle(411, 1500.0, -1700.0, 13.5, 90.0, 0, 0, 300)
nx_PutPlayerInVehicle(playerid, veh, 0)  -- assento 0 = motorista`}</code></pre>
</div>

<h2>Funções do Mundo</h2>

<table>
	<thead>
		<tr>
			<th>Função</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>nx_SetWorldTime(hour)</code></td>
			<td>Define o horário do mundo (0-23)</td>
		</tr>
		<tr>
			<td><code>nx_SetWeather(weatherid)</code></td>
			<td>Define o clima do mundo</td>
		</tr>
		<tr>
			<td><code>nx_SetGravity(gravity)</code></td>
			<td>Define a gravidade do mundo (padrão: 0.008)</td>
		</tr>
		<tr>
			<td><code>nx_SetNameTagDrawDistance(distance)</code></td>
			<td>Define a distância de exibição das nametags</td>
		</tr>
		<tr>
			<td><code>nx_ShowNameTags(show)</code></td>
			<td>Ativa/desativa nametags globalmente</td>
		</tr>
	</tbody>
</table>

<h2>Funções de Timer</h2>

<table>
	<thead>
		<tr>
			<th>Função</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>nx_SetTimer(callback, interval, repeating)</code></td>
			<td>Cria um timer. Retorna o ID do timer</td>
		</tr>
		<tr>
			<td><code>nx_KillTimer(timerid)</code></td>
			<td>Para e destrói um timer</td>
		</tr>
	</tbody>
</table>

<div class="code-block">
	<pre><code>{`-- Criar um timer repetitivo (a cada 1000ms)
local timer = nx_SetTimer(function()
    nx_SendClientMessageToAll(NX.COLOR.GREY, "[Auto] Server save...")
end, 60000, true)

-- Timer de disparo único (5 segundos)
nx_SetTimer(function()
    nx_Kick(playerid)
end, 5000, false)

-- Destruir um timer
nx_KillTimer(timer)`}</code></pre>
</div>
