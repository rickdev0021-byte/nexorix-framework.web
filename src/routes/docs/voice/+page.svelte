<svelte:head>
	<title>Sistema de Voz - Nexorix Framework</title>
</svelte:head>

<h1>Sistema de Voz</h1>

<p>
	Nexorix inclui um sistema de chat de voz integrado através da API <code>NX.Voice</code>. 
	Suporta chat por proximidade, streams globais, canais de rádio e efeitos de áudio.
</p>

<h2>Configuração</h2>

<p>Ative a voz no seu <code>config.json</code>:</p>

<div class="code-block">
	<pre><code>{`{
    "voice": {
        "enabled": true,
        "port": 7777
    }
}`}</code></pre>
</div>

<h2>Criação de Streams</h2>

<table>
	<thead>
		<tr>
			<th>Função</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>NX.Voice.CreateStream(name)</code></td>
			<td>Cria um stream de voz básico</td>
		</tr>
		<tr>
			<td><code>NX.Voice.CreateProximityStream(distance)</code></td>
			<td>Cria um stream baseado em proximidade (áudio posicional 3D)</td>
		</tr>
		<tr>
			<td><code>NX.Voice.CreateGlobalStream(name)</code></td>
			<td>Cria um stream que todos os players podem ouvir</td>
		</tr>
	</tbody>
</table>

<div class="code-block">
	<pre><code>{`-- Criar voz por proximidade (players ouvem uns aos outros dentro de 25 unidades)
local proxStream = NX.Voice.CreateProximityStream(25.0)

-- Criar um stream global de anúncios
local globalStream = NX.Voice.CreateGlobalStream("announcements")

-- Criar um stream personalizado
local teamStream = NX.Voice.CreateStream("team_alpha")`}</code></pre>
</div>

<h2>Métodos de Stream</h2>

<table>
	<thead>
		<tr>
			<th>Método</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>stream:AddPlayer(playerid)</code></td>
			<td>Adiciona um player ao stream (pode ouvir e falar)</td>
		</tr>
		<tr>
			<td><code>stream:RemovePlayer(playerid)</code></td>
			<td>Remove um player do stream</td>
		</tr>
		<tr>
			<td><code>stream:SetVolume(volume)</code></td>
			<td>Define o volume do stream (0.0 - 1.0)</td>
		</tr>
		<tr>
			<td><code>stream:SetPosition(x, y, z)</code></td>
			<td>Define a posição 3D do stream</td>
		</tr>
		<tr>
			<td><code>stream:AttachToPlayer(playerid)</code></td>
			<td>Anexa a posição do stream a um player (segue ele)</td>
		</tr>
		<tr>
			<td><code>stream:Destroy()</code></td>
			<td>Destrói o stream</td>
		</tr>
	</tbody>
</table>

<div class="code-block">
	<pre><code>{`-- Exemplo de chat de voz por equipe
local teams = {}

function CreateTeamVoice(teamName)
    local stream = NX.Voice.CreateStream(teamName)
    teams[teamName] = stream
    return stream
end

function JoinTeamVoice(playerid, teamName)
    if teams[teamName] then
        teams[teamName]:AddPlayer(playerid)
    end
end

-- Uso
CreateTeamVoice("police")
CreateTeamVoice("criminals")

NX.Hook("OnPlayerSpawn", function(playerid)
    local team = GetPlayerTeam(playerid)  -- sua função
    JoinTeamVoice(playerid, team)
end)`}</code></pre>
</div>

<h2>Canais & Efeitos</h2>

<table>
	<thead>
		<tr>
			<th>Função</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>NX.Voice.CreateChannel(name)</code></td>
			<td>Cria um canal de voz (como uma frequência de rádio)</td>
		</tr>
		<tr>
			<td><code>NX.Voice.CreateEffect(type)</code></td>
			<td>Cria um efeito de áudio</td>
		</tr>
		<tr>
			<td><code>NX.Voice.CreateRadioEffect()</code></td>
			<td>Cria um efeito de estática/chiado de rádio</td>
		</tr>
		<tr>
			<td><code>NX.Voice.CreatePhoneEffect()</code></td>
			<td>Cria um efeito de áudio de ligação telefônica</td>
		</tr>
	</tbody>
</table>

<div class="code-block">
	<pre><code>{`-- Sistema de rádio com efeitos
local radioChannels = {}

function CreateRadioChannel(frequency)
    local channel = NX.Voice.CreateChannel("radio_" .. frequency)
    local effect = NX.Voice.CreateRadioEffect()
    radioChannels[frequency] = { channel = channel, effect = effect }
    return channel
end

-- Sistema de ligação telefônica
function StartPhoneCall(caller, receiver)
    local stream = NX.Voice.CreateStream("call_" .. caller .. "_" .. receiver)
    local effect = NX.Voice.CreatePhoneEffect()
    stream:AddPlayer(caller)
    stream:AddPlayer(receiver)
    return stream
end`}</code></pre>
</div>

<h2>Controles de Voz do Player</h2>

<table>
	<thead>
		<tr>
			<th>Função</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>NX.Voice.SetPlayerMuted(playerid, muted)</code></td>
			<td>Muta/desmuta o microfone de um player</td>
		</tr>
		<tr>
			<td><code>NX.Voice.SetPushToTalkKey(playerid, key)</code></td>
			<td>Define a tecla push-to-talk para um player</td>
		</tr>
		<tr>
			<td><code>NX.Voice.IsPlayerMuted(playerid)</code></td>
			<td>Verifica se um player está mutado</td>
		</tr>
	</tbody>
</table>

<div class="code-block">
	<pre><code>{`-- Mutar um player
NX.Voice.SetPlayerMuted(playerid, true)

-- Definir tecla push-to-talk (KEY_YES = tecla N)
NX.Voice.SetPushToTalkKey(playerid, NX.KEYS.KEY_YES)

-- Eventos de voz
NX.Hook("OnPlayerVoiceConnect", function(playerid)
    print(nx_GetPlayerName(playerid) .. " voice connected")
end)

NX.Hook("OnPlayerVoiceStart", function(playerid)
    -- Player começou a falar - mostrar indicador
end)

NX.Hook("OnPlayerVoiceStop", function(playerid)
    -- Player parou de falar - esconder indicador
end)`}</code></pre>
</div>

<h2>Configuração de Chat por Proximidade</h2>

<p>A configuração de voz mais comum — players ouvem outros por perto:</p>

<div class="code-block">
	<pre><code>{`-- Configuração típica de voz por proximidade
local voiceStream = NX.Voice.CreateProximityStream(20.0)

NX.Hook("OnPlayerVoiceConnect", function(playerid)
    voiceStream:AddPlayer(playerid)
    nx_SendClientMessage(playerid, NX.COLOR.GREEN, 
        "[Voice] Connected! Press N to talk.")
end)

NX.Hook("OnPlayerDisconnect", function(playerid, reason)
    voiceStream:RemovePlayer(playerid)
end)`}</code></pre>
</div>
