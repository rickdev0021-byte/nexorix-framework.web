<svelte:head>
	<title>Hot-Reload - Nexorix Framework</title>
</svelte:head>

<h1>Hot-Reload</h1>

<p>
	Nexorix suporta hot-reload de scripts Lua sem reiniciar o servidor. 
	Isso acelera drasticamente o desenvolvimento — altere o código, recarregue e veja os resultados instantaneamente.
</p>

<h2>Uso</h2>

<p>Use o comando <code>/reload</code> no jogo (requer nível de admin 5):</p>

<div class="code-block">
	<pre><code>{`/reload`}</code></pre>
</div>

<p>Isso recarrega todos os scripts Lua do disco, re-registra hooks e comandos, e preserva o estado dos players conectados.</p>

<h2>Configuração</h2>

<p>Ative o hot-reload no <code>config.json</code>:</p>

<div class="code-block">
	<pre><code>{`{
    "hot_reload": true
}`}</code></pre>
</div>

<h2>Como Funciona</h2>

<ul>
	<li>Todo o estado Lua é limpo (hooks, comandos, timers)</li>
	<li>O script de entrada (<code>main.lua</code>) é re-executado</li>
	<li>Todas as chamadas <code>require()</code> recarregam do disco (cache de módulos é limpo)</li>
	<li><code>OnGameModeInit</code> dispara novamente após o reload</li>
	<li>Conexões dos players são preservadas — ninguém é desconectado</li>
</ul>

<h2>O Que é Recarregado</h2>

<table>
	<thead>
		<tr>
			<th>Recarregado</th>
			<th>Preservado</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Todos os scripts Lua</td>
			<td>Conexões dos players</td>
		</tr>
		<tr>
			<td>Registros de hooks</td>
			<td>Veículos spawnados</td>
		</tr>
		<tr>
			<td>Registros de comandos</td>
			<td>Conexões com banco de dados</td>
		</tr>
		<tr>
			<td>Registros de timers</td>
			<td>TextDraws (já exibidos)</td>
		</tr>
		<tr>
			<td>Cache de módulos</td>
			<td>Posições/estado dos players</td>
		</tr>
	</tbody>
</table>

<h2>Boas Práticas</h2>

<div class="code-block">
	<pre><code>{`-- Usar OnGameModeInit para re-inicializar após reload
NX.Hook("OnGameModeInit", function()
    -- Isso executa na primeira inicialização E após cada /reload
    print("[Nexorix] Scripts loaded!")
    
    -- Re-abrir conexão com banco de dados
    db = nx_db_open("server.db")
    
    -- Re-criar TextDraws
    CreateHUDElements()
    
    -- Mostrar TextDraws para players já conectados
    for i = 0, nx_GetMaxPlayers() - 1 do
        if nx_IsPlayerConnected(i) then
            ShowHUDForPlayer(i)
        end
    end
end)

-- Evite armazenar estado crítico em variáveis globais Lua
-- Use o banco de dados para dados persistentes
-- Use propriedades do player que sobrevivem ao reload`}</code></pre>
</div>

<h2>Fluxo de Desenvolvimento</h2>

<ul>
	<li>Edite seus arquivos Lua no seu editor</li>
	<li>Mude para o jogo e digite <code>/reload</code></li>
	<li>As alterações entram em vigor imediatamente</li>
	<li>Se houver um erro de sintaxe, o servidor registra no log e mantém o código antigo rodando</li>
</ul>

<div class="code-block">
	<pre><code>{`-- Tratamento de erros durante reload
-- Se main.lua tiver um erro de sintaxe:
-- [Nexorix] Reload failed: main.lua:15: unexpected symbol near 'end'
-- [Nexorix] Keeping previous state.

-- O servidor continua rodando com o último código funcional.`}</code></pre>
</div>
