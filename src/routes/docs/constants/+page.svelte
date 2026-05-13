<svelte:head>
	<title>Constantes - Nexorix Framework</title>
</svelte:head>

<h1>Constantes</h1>

<p>
	Nexorix fornece constantes predefinidas através da tabela <code>NX</code> para cores, 
	IDs de armas, teclas e outros valores comumente usados.
</p>

<h2>Cores (NX.COLOR)</h2>

<p>Todas as cores estão no formato hex RGBA para uso com <code>nx_SendClientMessage</code> e TextDraws.</p>

<table>
	<thead>
		<tr>
			<th>Constante</th>
			<th>Valor</th>
			<th>Prévia</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>NX.COLOR.WHITE</code></td>
			<td><code>0xFFFFFFFF</code></td>
			<td><span class="inline-block w-4 h-4 rounded" style="background: #FFFFFF"></span></td>
		</tr>
		<tr>
			<td><code>NX.COLOR.BLACK</code></td>
			<td><code>0x000000FF</code></td>
			<td><span class="inline-block w-4 h-4 rounded" style="background: #000000"></span></td>
		</tr>
		<tr>
			<td><code>NX.COLOR.RED</code></td>
			<td><code>0xFF0000FF</code></td>
			<td><span class="inline-block w-4 h-4 rounded" style="background: #FF0000"></span></td>
		</tr>
		<tr>
			<td><code>NX.COLOR.GREEN</code></td>
			<td><code>0x00FF00FF</code></td>
			<td><span class="inline-block w-4 h-4 rounded" style="background: #00FF00"></span></td>
		</tr>
		<tr>
			<td><code>NX.COLOR.BLUE</code></td>
			<td><code>0x0000FFFF</code></td>
			<td><span class="inline-block w-4 h-4 rounded" style="background: #0000FF"></span></td>
		</tr>
		<tr>
			<td><code>NX.COLOR.YELLOW</code></td>
			<td><code>0xFFFF00FF</code></td>
			<td><span class="inline-block w-4 h-4 rounded" style="background: #FFFF00"></span></td>
		</tr>
		<tr>
			<td><code>NX.COLOR.PURPLE</code></td>
			<td><code>0x7C3AEDFF</code></td>
			<td><span class="inline-block w-4 h-4 rounded" style="background: #7C3AED"></span></td>
		</tr>
		<tr>
			<td><code>NX.COLOR.ORANGE</code></td>
			<td><code>0xFF8C00FF</code></td>
			<td><span class="inline-block w-4 h-4 rounded" style="background: #FF8C00"></span></td>
		</tr>
		<tr>
			<td><code>NX.COLOR.GREY</code></td>
			<td><code>0xAAAAAAFF</code></td>
			<td><span class="inline-block w-4 h-4 rounded" style="background: #AAAAAA"></span></td>
		</tr>
		<tr>
			<td><code>NX.COLOR.DISCORD_BLUE</code></td>
			<td><code>0x5865F2FF</code></td>
			<td><span class="inline-block w-4 h-4 rounded" style="background: #5865F2"></span></td>
		</tr>
	</tbody>
</table>

<h2>IDs de Armas</h2>

<table>
	<thead>
		<tr>
			<th>ID</th>
			<th>Arma</th>
			<th>ID</th>
			<th>Arma</th>
		</tr>
	</thead>
	<tbody>
		<tr><td>0</td><td>Fist</td><td>22</td><td>Colt 45</td></tr>
		<tr><td>1</td><td>Brass Knuckles</td><td>23</td><td>Silenced Pistol</td></tr>
		<tr><td>2</td><td>Golf Club</td><td>24</td><td>Desert Eagle</td></tr>
		<tr><td>3</td><td>Nightstick</td><td>25</td><td>Shotgun</td></tr>
		<tr><td>4</td><td>Knife</td><td>26</td><td>Sawn-off Shotgun</td></tr>
		<tr><td>5</td><td>Baseball Bat</td><td>27</td><td>Combat Shotgun</td></tr>
		<tr><td>6</td><td>Shovel</td><td>28</td><td>Micro SMG</td></tr>
		<tr><td>7</td><td>Pool Cue</td><td>29</td><td>MP5</td></tr>
		<tr><td>8</td><td>Katana</td><td>30</td><td>AK-47</td></tr>
		<tr><td>9</td><td>Chainsaw</td><td>31</td><td>M4</td></tr>
		<tr><td>16</td><td>Grenade</td><td>33</td><td>Country Rifle</td></tr>
		<tr><td>17</td><td>Tear Gas</td><td>34</td><td>Sniper Rifle</td></tr>
		<tr><td>18</td><td>Molotov</td><td>35</td><td>RPG</td></tr>
		<tr><td>37</td><td>Flamethrower</td><td>38</td><td>Minigun</td></tr>
		<tr><td>41</td><td>Spray Can</td><td>42</td><td>Fire Extinguisher</td></tr>
		<tr><td>46</td><td>Parachute</td><td>-</td><td>-</td></tr>
	</tbody>
</table>

<h2>Teclas (NX.KEYS)</h2>

<table>
	<thead>
		<tr>
			<th>Constante</th>
			<th>Valor</th>
			<th>Tecla</th>
		</tr>
	</thead>
	<tbody>
		<tr><td><code>NX.KEYS.KEY_ACTION</code></td><td>1</td><td>TAB (a pé)</td></tr>
		<tr><td><code>NX.KEYS.KEY_CROUCH</code></td><td>2</td><td>C</td></tr>
		<tr><td><code>NX.KEYS.KEY_FIRE</code></td><td>4</td><td>LMB / Left CTRL</td></tr>
		<tr><td><code>NX.KEYS.KEY_SPRINT</code></td><td>8</td><td>SPACE</td></tr>
		<tr><td><code>NX.KEYS.KEY_SECONDARY_ATTACK</code></td><td>16</td><td>ENTER</td></tr>
		<tr><td><code>NX.KEYS.KEY_JUMP</code></td><td>32</td><td>Left SHIFT</td></tr>
		<tr><td><code>NX.KEYS.KEY_LOOK_RIGHT</code></td><td>64</td><td>-</td></tr>
		<tr><td><code>NX.KEYS.KEY_HANDBRAKE</code></td><td>128</td><td>RMB</td></tr>
		<tr><td><code>NX.KEYS.KEY_LOOK_LEFT</code></td><td>256</td><td>-</td></tr>
		<tr><td><code>NX.KEYS.KEY_SUBMISSION</code></td><td>512</td><td>NUM+ / 2</td></tr>
		<tr><td><code>NX.KEYS.KEY_WALK</code></td><td>1024</td><td>Left ALT</td></tr>
		<tr><td><code>NX.KEYS.KEY_ANALOG_UP</code></td><td>2048</td><td>NUM 8</td></tr>
		<tr><td><code>NX.KEYS.KEY_ANALOG_DOWN</code></td><td>4096</td><td>NUM 2</td></tr>
		<tr><td><code>NX.KEYS.KEY_ANALOG_LEFT</code></td><td>8192</td><td>NUM 4</td></tr>
		<tr><td><code>NX.KEYS.KEY_ANALOG_RIGHT</code></td><td>16384</td><td>NUM 6</td></tr>
		<tr><td><code>NX.KEYS.KEY_YES</code></td><td>65536</td><td>Y</td></tr>
		<tr><td><code>NX.KEYS.KEY_NO</code></td><td>131072</td><td>N</td></tr>
	</tbody>
</table>

<h2>Exemplo de Uso</h2>

<div class="code-block">
	<pre><code>{`-- Detectar pressionamento de tecla
NX.Hook("OnPlayerKeyStateChange", function(playerid, newkeys, oldkeys)
    -- Verificar se o player pressionou a tecla Y
    if (newkeys & NX.KEYS.KEY_YES) ~= 0 and (oldkeys & NX.KEYS.KEY_YES) == 0 then
        nx_SendClientMessage(playerid, NX.COLOR.GREEN, "You pressed Y!")
    end
    
    -- Verificar se o player pressionou a tecla N (push-to-talk)
    if (newkeys & NX.KEYS.KEY_NO) ~= 0 then
        -- Player está segurando N
    end
end)`}</code></pre>
</div>

<h2>Estilos de Diálogo</h2>

<table>
	<thead>
		<tr>
			<th>Constante</th>
			<th>Valor</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr><td><code>DIALOG_STYLE_MSGBOX</code></td><td>0</td><td>Caixa de mensagem simples</td></tr>
		<tr><td><code>DIALOG_STYLE_INPUT</code></td><td>1</td><td>Campo de entrada de texto</td></tr>
		<tr><td><code>DIALOG_STYLE_LIST</code></td><td>2</td><td>Lista selecionável</td></tr>
		<tr><td><code>DIALOG_STYLE_PASSWORD</code></td><td>3</td><td>Entrada de senha (mascarada)</td></tr>
		<tr><td><code>DIALOG_STYLE_TABLIST</code></td><td>4</td><td>Lista com abas</td></tr>
		<tr><td><code>DIALOG_STYLE_TABLIST_HEADERS</code></td><td>5</td><td>Lista com abas e cabeçalhos de coluna</td></tr>
	</tbody>
</table>

<h2>Motivos de Desconexão</h2>

<table>
	<thead>
		<tr>
			<th>Valor</th>
			<th>Motivo</th>
		</tr>
	</thead>
	<tbody>
		<tr><td>0</td><td>Timeout / Crash</td></tr>
		<tr><td>1</td><td>Saiu (player saiu voluntariamente)</td></tr>
		<tr><td>2</td><td>Kick / Ban</td></tr>
	</tbody>
</table>
