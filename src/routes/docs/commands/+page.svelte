<svelte:head>
	<title>Comandos - Nexorix Framework</title>
</svelte:head>

<h1>Comandos</h1>

<p>
	O sistema de comandos do Nexorix permite registrar comandos com <code>NX.RegisterCommand</code>.
	Quando o player digita <code>/comando params</code>, a função registrada é chamada automaticamente.
</p>

<h2>O que é <code>pid</code> (playerid)?</h2>

<p>
	<code>pid</code> é a abreviação de <strong>playerid</strong> — o identificador numérico único de cada player conectado ao servidor.
	Toda vez que um player se conecta, o servidor atribui um ID (começando em 0). Esse ID é usado em praticamente todas as funções <code>nx_*</code> para identificar qual player será afetado.
</p>

<div class="code-block">
	<pre><code>{`-- pid é passado automaticamente pelo sistema de comandos e hooks
-- Exemplos de uso:
nx_GetPlayerName(pid)         -- Retorna o nome do player
nx_SetPlayerHealth(pid, 100)  -- Seta a vida do player
nx_SendClientMessage(pid, NX.COLOR.GREEN, "Olá!")  -- Envia mensagem ao player
nx_GetPlayerPos(pid)          -- Retorna x, y, z do player
nx_IsPlayerConnected(pid)     -- Verifica se o player está online`}</code></pre>
</div>

<p>
	Nos comandos, <code>pid</code> é sempre o <strong>primeiro parâmetro</strong> da função — representa quem digitou o comando.
	Nos hooks como <code>OnPlayerConnect</code>, <code>OnPlayerDeath</code>, etc., o <code>playerid</code> também é passado automaticamente.
</p>

<h2>Registrando Comandos</h2>

<div class="code-block">
	<pre><code>{`NX.RegisterCommand("nome", function(pid, params)
    -- pid = ID do player que digitou o comando
    -- params = texto após o comando (string)
end)`}</code></pre>
</div>

<h2>Exemplos Práticos</h2>

<h3>/ls — Teleportar para o spawn</h3>

<div class="code-block">
	<pre><code>{`NX.RegisterCommand("ls", function(pid)
    nx_SetPlayerPos(pid, 1481.1, -1750.1, 15.5)
    nx_SetPlayerFacingAngle(pid, 0)
    nx_SendClientMessage(pid, NX.COLOR.GREEN, ">> Teleportado para o spawn.")
end)`}</code></pre>
</div>

<h3>/vida — Setar vida do player</h3>

<div class="code-block">
	<pre><code>{`NX.RegisterCommand("vida", function(pid, params)
    local val = tonumber(params) or 100
    val = math.max(0, math.min(100, val))
    nx_SetPlayerHealth(pid, val)
    nx_SendClientMessage(pid, NX.COLOR.GREEN, ">> Vida setada para " .. val)
end)`}</code></pre>
</div>

<h3>/colete — Setar colete do player</h3>

<div class="code-block">
	<pre><code>{`NX.RegisterCommand("colete", function(pid, params)
    local val = tonumber(params) or 100
    val = math.max(0, math.min(100, val))
    nx_SetPlayerArmour(pid, val)
    nx_SendClientMessage(pid, NX.COLOR.GREEN, ">> Colete setado para " .. val)
end)`}</code></pre>
</div>

<h3>/skin — Mudar skin do player</h3>

<div class="code-block">
	<pre><code>{`NX.RegisterCommand("skin", function(pid, params)
    local skin = tonumber(params)
    if not skin or skin < 0 or skin > 311 then
        return nx_SendClientMessage(pid, NX.COLOR.RED, "Use: /skin [0-311]")
    end
    nx_SetPlayerSkin(pid, skin)
    nx_SendClientMessage(pid, NX.COLOR.GREEN, ">> Skin alterada para " .. skin)
end)`}</code></pre>
</div>

<h3>/veh — Criar veículo e entrar nele</h3>

<div class="code-block">
	<pre><code>{`NX.RegisterCommand("veh", function(pid, params)
    local model = tonumber(params)
    if not model or model < 400 or model > 611 then
        return nx_SendClientMessage(pid, NX.COLOR.RED, "Use: /veh [400-611]")
    end

    local x, y, z = nx_GetPlayerPos(pid)
    local a = nx_GetPlayerFacingAngle(pid)
    local veh = nx_CreateVehicle(model, x + 3, y, z, a, -1, -1, -1)

    -- Colocar player dentro
    nx_PutPlayerInVehicle(pid, veh, 0)

    nx_SendClientMessage(pid, NX.COLOR.GREEN, ">> Veiculo " .. model .. " criado!")
end)`}</code></pre>
</div>

<h3>Veículo que some quando o player sai</h3>

<div class="code-block">
	<pre><code>{`-- Armazenar veículos temporários
local tempVehicles = {}

NX.RegisterCommand("tempveh", function(pid, params)
    local model = tonumber(params) or 411
    local x, y, z = nx_GetPlayerPos(pid)
    local a = nx_GetPlayerFacingAngle(pid)
    local veh = nx_CreateVehicle(model, x + 3, y, z, a, -1, -1, -1)

    nx_PutPlayerInVehicle(pid, veh, 0)
    tempVehicles[pid] = veh

    nx_SendClientMessage(pid, NX.COLOR.GREEN, ">> Veiculo temporario criado!")
end)

-- Quando o player sai do veículo, destruir
NX.Hook("OnPlayerExitVehicle", function(playerid, vehicleid)
    if tempVehicles[playerid] and tempVehicles[playerid] == vehicleid then
        nx_DestroyVehicle(vehicleid)
        tempVehicles[playerid] = nil
        nx_SendClientMessage(playerid, NX.COLOR.YELLOW, ">> Veiculo temporario destruido.")
    end
end)`}</code></pre>
</div>

<h3>/m4 — Dar arma com munição</h3>

<div class="code-block">
	<pre><code>{`NX.RegisterCommand("m4", function(pid)
    nx_GivePlayerWeapon(pid, 31, 500)
    nx_SendClientMessage(pid, NX.COLOR.GREEN, ">> M4 com 500 municoes!")
end)`}</code></pre>
</div>

<h2>Tratamento de Erros</h2>

<p>Sempre valide os parâmetros antes de usar:</p>

<div class="code-block">
	<pre><code>{`NX.RegisterCommand("dar", function(pid, params)
    local targetid = tonumber(params:match("^(%d+)"))
    local valor = tonumber(params:match("^%d+%s+(%d+)"))

    if not targetid or not valor then
        return nx_SendClientMessage(pid, NX.COLOR.RED, "Use: /dar [id] [valor]")
    end

    if not nx_IsPlayerConnected(targetid) then
        return nx_SendClientMessage(pid, NX.COLOR.RED, "Player nao conectado.")
    end

    nx_GivePlayerMoney(targetid, valor)
    nx_SendClientMessage(pid, NX.COLOR.GREEN, ">> $" .. valor .. " enviado!")
end)`}</code></pre>
</div>
