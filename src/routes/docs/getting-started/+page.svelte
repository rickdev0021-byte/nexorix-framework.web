<svelte:head>
	<title>Começando - Nexorix Framework</title>
</svelte:head>

<h1>Começando</h1>

<p>
	Nexorix Framework é um framework de scripting Lua 5.4 para servidores de jogo. 
	Ele fornece uma arquitetura moderna orientada a eventos com suporte a hot-reload, chat de voz integrado, 
	acesso a banco de dados e muito mais.
</p>

<h2>Requisitos</h2>

<ul>
	<li>Nexorix Server (Windows ou Linux)</li>
	<li>Lua 5.4 (incluído com o servidor)</li>
</ul>

<h2>Instalação</h2>

<h3>1. Clone o repositório</h3>

<div class="code-block">
	<pre><code>git clone https://github.com/NexorixGroup/nexorix-framework-gm.linux
cd nexorix-framework-gm.linux</code></pre>
</div>

<h3>2. Estrutura do servidor</h3>

<div class="code-block">
	<pre><code>Nexorix-Server/
├── nx-server              (executável)
├── config.json            (configuração)
├── start.sh               (Linux)
├── NexorixPlugins/
│   └── Lua.so / Lua.dll
└── lua/
    ├── include/
    │   ├── nexorix.luac
    │   └── nexorix_voice.luac
    └── gamemode/
        ├── main.lua          ← Ponto de entrada
        └── modulos/
            ├── commands.lua
            ├── database.lua
            ├── voice.lua
            └── ...</code></pre>
</div>

<h3>3. Configure o config.json</h3>

<p>O arquivo <code>config.json</code> controla as configurações do servidor:</p>

<div class="code-block">
	<pre><code>{`{
    "name": "Meu Servidor",
    "max_players": 100,
    "network": {
        "bind": "0.0.0.0",
        "port": 7777
    },
    "lua": {
        "entry": "lua/gamemode"
    },
    "discord": {
        "enabled": false,
        "token": "SEU_TOKEN_AQUI",
        "prefix": "!",
        "channel_id": "SEU_CHANNEL_ID"
    },
    "voice": {
        "enabled": true,
        "host": "0.0.0.0",
        "port": 2020
    }
}`}</code></pre>
</div>

<h3>4. Ponto de Entrada (main.lua)</h3>

<p>Seu gamemode começa no <code>main.lua</code>. É aqui que você carrega os includes e seus módulos:</p>

<div class="code-block">
	<pre><code>{`require("include/nexorix")
require("include/nexorix_voice")

-- Carregar módulos
require("gamemode/modulos/commands")
require("gamemode/modulos/database")
require("gamemode/modulos/voice")

NX.Hook("OnGameModeInit", function()
    nx_SetGameModeText("Meu Servidor")
    nx_print("[Server] Iniciado com sucesso!")
end)

NX.Hook("OnPlayerConnect", function(playerid)
    local name = nx_GetPlayerName(playerid)
    nx_SendClientMessage(playerid, NX.COLOR.GREEN, "Bem-vindo, " .. name .. "!")
end)`}</code></pre>
</div>

<h2>Próximos Passos</h2>

<ul>
	<li><a href="/docs/functions">Explore as funções nativas (nx_*)</a></li>
	<li><a href="/docs/hooks">Aprenda sobre hooks e callbacks</a></li>
	<li><a href="/docs/commands">Registre comandos personalizados</a></li>
	<li><a href="/docs/hot-reload">Configure o hot-reload para desenvolvimento</a></li>
</ul>
