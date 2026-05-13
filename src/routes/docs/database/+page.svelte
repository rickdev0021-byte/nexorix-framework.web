<svelte:head>
	<title>Banco de Dados (SQLite) - Nexorix Framework</title>
</svelte:head>

<h1>Banco de Dados (SQLite)</h1>

<p>
	Nexorix inclui uma API nativa de banco de dados SQLite através das funções <code>nx_db_*</code>. 
	Sem dependências externas — o banco de dados é armazenado como um arquivo local.
</p>

<h2>Conexão</h2>

<table>
	<thead>
		<tr>
			<th>Função</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>nx_db_open(path)</code></td>
			<td>Abre ou cria um arquivo de banco de dados. Retorna um handle do banco.</td>
		</tr>
		<tr>
			<td><code>nx_db_close(db)</code></td>
			<td>Fecha uma conexão com o banco de dados.</td>
		</tr>
	</tbody>
</table>

<div class="code-block">
	<pre><code>{`-- Abrir banco de dados (cria o arquivo se não existir)
local db = nx_db_open("server.db")

-- Fechar quando terminar
nx_db_close(db)`}</code></pre>
</div>

<h2>Consultas Simples</h2>

<table>
	<thead>
		<tr>
			<th>Função</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>nx_db_exec(db, sql)</code></td>
			<td>Executa uma instrução SQL (sem resultados retornados)</td>
		</tr>
		<tr>
			<td><code>nx_db_query(db, sql)</code></td>
			<td>Executa uma consulta e retorna resultados como tabela de linhas</td>
		</tr>
		<tr>
			<td><code>nx_db_last_insert_id(db)</code></td>
			<td>Obtém o último ID auto-incrementado após um INSERT</td>
		</tr>
		<tr>
			<td><code>nx_db_changes(db)</code></td>
			<td>Obtém o número de linhas afetadas pela última instrução</td>
		</tr>
	</tbody>
</table>

<div class="code-block">
	<pre><code>{`local db = nx_db_open("server.db")

-- Criar tabelas
nx_db_exec(db, [[
    CREATE TABLE IF NOT EXISTS players (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        score INTEGER DEFAULT 0,
        admin_level INTEGER DEFAULT 0,
        last_login TEXT,
        ip TEXT
    )
]])

-- Inserir dados
nx_db_exec(db, string.format(
    "INSERT OR IGNORE INTO players (name, ip) VALUES ('%s', '%s')",
    nx_GetPlayerName(playerid), nx_GetPlayerIP(playerid)
))

-- Consultar dados
local rows = nx_db_query(db, string.format(
    "SELECT * FROM players WHERE name = '%s'",
    nx_GetPlayerName(playerid)
))

if rows and #rows > 0 then
    local player = rows[1]
    print("Score: " .. player.score)
    print("Admin Level: " .. player.admin_level)
end`}</code></pre>
</div>

<h2>Prepared Statements</h2>

<p>
	Para melhor performance e segurança (previne SQL injection), use prepared statements:
</p>

<table>
	<thead>
		<tr>
			<th>Função</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>nx_db_prepare(db, sql)</code></td>
			<td>Prepara uma instrução SQL. Retorna um handle do statement.</td>
		</tr>
		<tr>
			<td><code>nx_db_bind(stmt, index, value)</code></td>
			<td>Vincula um valor a um parâmetro (índice começa em 1)</td>
		</tr>
		<tr>
			<td><code>nx_db_step(stmt)</code></td>
			<td>Executa um passo. Retorna true se há uma linha disponível.</td>
		</tr>
		<tr>
			<td><code>nx_db_column(stmt, index)</code></td>
			<td>Obtém o valor de uma coluna da linha atual (índice começa em 0)</td>
		</tr>
		<tr>
			<td><code>nx_db_reset(stmt)</code></td>
			<td>Reseta um statement para reutilização com novos bindings</td>
		</tr>
		<tr>
			<td><code>nx_db_finalize(stmt)</code></td>
			<td>Destrói um prepared statement e libera recursos</td>
		</tr>
	</tbody>
</table>

<div class="code-block">
	<pre><code>{`-- Exemplo de prepared statement (seguro contra SQL injection)
local stmt = nx_db_prepare(db, "SELECT * FROM players WHERE name = ?")
nx_db_bind(stmt, 1, nx_GetPlayerName(playerid))

if nx_db_step(stmt) then
    local id = nx_db_column(stmt, 0)
    local name = nx_db_column(stmt, 1)
    local score = nx_db_column(stmt, 2)
    print(string.format("Player %s (ID: %d) - Score: %d", name, id, score))
end

nx_db_finalize(stmt)

-- Inserir com prepared statement
local insert = nx_db_prepare(db, "INSERT INTO players (name, ip) VALUES (?, ?)")
nx_db_bind(insert, 1, nx_GetPlayerName(playerid))
nx_db_bind(insert, 2, nx_GetPlayerIP(playerid))
nx_db_step(insert)
nx_db_finalize(insert)

local new_id = nx_db_last_insert_id(db)
print("New player ID: " .. new_id)`}</code></pre>
</div>

<h2>Transações</h2>

<div class="code-block">
	<pre><code>{`-- Usar transações para operações em lote
nx_db_exec(db, "BEGIN TRANSACTION")

for i = 0, nx_GetMaxPlayers() - 1 do
    if nx_IsPlayerConnected(i) then
        nx_db_exec(db, string.format(
            "UPDATE players SET score = %d WHERE name = '%s'",
            nx_GetPlayerScore(i), nx_GetPlayerName(i)
        ))
    end
end

nx_db_exec(db, "COMMIT")
-- Se algo falhar, use: nx_db_exec(db, "ROLLBACK")`}</code></pre>
</div>

<h2>Boas Práticas</h2>

<ul>
	<li>Abra o banco de dados uma vez no <code>OnGameModeInit</code> e feche no <code>OnGameModeExit</code></li>
	<li>Use prepared statements para dados fornecidos pelo usuário para prevenir SQL injection</li>
	<li>Use transações para operações em lote (muito mais rápido que consultas individuais)</li>
	<li>Crie índices em colunas consultadas frequentemente</li>
	<li>Armazene o handle do banco em uma variável de nível de módulo para reutilização</li>
</ul>
