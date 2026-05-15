<script lang="ts">
	import { onMount } from 'svelte';
	import { locale, t } from '$lib/i18n';

	const features = [
		{ icon: '⚡', titleKey: 'feat.lua', descKey: 'feat.lua.desc' },
		{ icon: '🔄', titleKey: 'feat.reload', descKey: 'feat.reload.desc' },
		{ icon: '🎤', titleKey: 'feat.voice', descKey: 'feat.voice.desc' },
		{ icon: '🗄️', titleKey: 'feat.db', descKey: 'feat.db.desc' },
		{ icon: '🤖', titleKey: 'feat.discord', descKey: 'feat.discord.desc' },
		{ icon: '🛡️', titleKey: 'feat.admin', descKey: 'feat.admin.desc' },
		{ icon: '🎨', titleKey: 'feat.textdraw', descKey: 'feat.textdraw.desc' },
		{ icon: '🔌', titleKey: 'feat.cross', descKey: 'feat.cross.desc' },
	];

	const quickStartCode = `-- main.lua - Ponto de entrada
require("include/nexorix")

NX.Hook("OnGameModeInit", function()
    nx_SendClientMessageToAll(NX.COLOR.PURPLE,
        "[Server] Nexorix Framework carregado!")
    nx_SetWorldTime(12)
    nx_SetWeather(1)
end)

NX.Hook("OnPlayerConnect", function(playerid)
    local name = nx_GetPlayerName(playerid)
    nx_SendClientMessage(playerid, NX.COLOR.WHITE,
        "Bem-vindo ao servidor, " .. name .. "!")
end)

NX.RegisterCommand("curar", function(playerid, params)
    nx_SetPlayerHealth(playerid, 100.0)
    nx_SendClientMessage(playerid, NX.COLOR.GREEN,
        "Voce foi curado!")
end)`;

	// Animação de digitação
	let displayedCode = $state('');
	let typingDone = $state(false);

	// Animação de digitação do comando git clone
	const gitCommand = 'git clone https://github.com/NexorixGroup/nexorix-framework-gm.windows';
	let displayedCommand = $state('');
	let commandDone = $state(false);

	// Banner de atualização
	let showUpdate = $state(false);
	const UPDATE_KEY = 'nx_update_v1.0.1';

	onMount(() => {
		// Verificar se já viu a atualização
		if (!localStorage.getItem(UPDATE_KEY)) {
			showUpdate = true;
		}

		// Animação do código
		let i = 0;
		const speed = 18;
		function typeChar() {
			if (i < quickStartCode.length) {
				displayedCode += quickStartCode[i];
				i++;
				setTimeout(typeChar, speed);
			} else {
				typingDone = true;
			}
		}
		setTimeout(typeChar, 500);

		// Animação do comando git
		let j = 0;
		const cmdSpeed = 35;
		function typeCmdChar() {
			if (j < gitCommand.length) {
				displayedCommand += gitCommand[j];
				j++;
				setTimeout(typeCmdChar, cmdSpeed);
			} else {
				commandDone = true;
			}
		}
		setTimeout(typeCmdChar, 300);
	});

	function dismissUpdate() {
		showUpdate = false;
		localStorage.setItem(UPDATE_KEY, 'true');
	}
</script>

<svelte:head>
	<title>Nexorix Framework - Lua 5.4 Game Server Framework</title>
	<meta name="description" content="A modern Lua 5.4 framework for game servers. Hot-reload, voice system, database, Discord integration, and more." />
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden">

	<!-- Update Toast -->
	{#if showUpdate}
	<div class="fixed top-4 right-4 z-50 max-w-sm animate-slide-in">
		<div class="bg-surface border border-primary/30 rounded-lg shadow-lg shadow-primary/5 overflow-hidden">
			<div class="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
				<span class="text-xs font-mono text-primary-light">v1.0.1</span>
				<button onclick={dismissUpdate} class="text-slate-500 hover:text-white transition-colors text-sm">&times;</button>
			</div>
			<div class="px-4 py-3 max-h-60 overflow-y-auto text-xs text-slate-400 space-y-1">
				<p class="text-white text-sm font-medium mb-2">Novas natives no runtime</p>
				<p>• nx_CreateDynamicObject / Destroy / IsValid</p>
				<p>• nx_MoveDynamicObject / Stop / IsMoving</p>
				<p>• nx_Get/SetDynamicObjectPos</p>
				<p>• nx_Get/SetDynamicObjectRot</p>
				<p>• nx_SetDynamicObjectMaterial / MaterialText</p>
				<p>• nx_SetObjectMaterialText</p>
				<p>• nx_RemoveBuildingForPlayer</p>
				<p>• nx_InterpolateCameraPos / LookAt</p>
				<p>• nx_AttachCameraToObject</p>
				<p>• nx_DisableRemoteVehicleCollisions</p>
				<p>• nx_Set/ClearPlayerWorldBounds</p>
				<p>• nx_GetPlayerCount</p>
				<p class="text-white text-sm font-medium mt-3 mb-1">Config</p>
				<p>• game.use_entry_exit_markers</p>
				<p>• game.use_stunt_bonuses</p>
			</div>
		</div>
	</div>
	{/if}
	<!-- Background gradient -->
	<div class="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>
	<div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>

	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
		<div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm mb-8">
			<span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
			{t[$locale]['hero.version']}
		</div>

		<h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
			Nexorix <span class="text-gradient">Framework</span>
		</h1>

		<p class="text-xl sm:text-2xl text-slate-400 mb-4 font-light">
			{t[$locale]['hero.tagline']}
		</p>

		<p class="text-lg text-slate-500 max-w-2xl mx-auto mb-10">
			{t[$locale]['hero.description']}
		</p>

		<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
			<a href="/docs/getting-started" class="btn-primary text-lg !px-8 !py-4">
				{t[$locale]['hero.btn.start']}
			</a>
			<a href="/docs/functions" class="btn-secondary text-lg !px-8 !py-4">
				{t[$locale]['hero.btn.api']}
			</a>
		</div>

		<!-- Install command -->
		<div class="mt-12 inline-flex items-center gap-3 bg-surface border border-white/10 rounded-lg px-5 py-3">
			<span class="text-slate-500 text-sm">$</span>
			<code class="text-slate-300 text-sm font-mono">{displayedCommand}{#if !commandDone}<span class="cursor">▌</span>{/if}</code>
		</div>
	</div>
</section>

<!-- Features Section removed -->

<!-- Quick Start Section -->
<section class="py-20 border-t border-white/5 bg-surface/30">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
					{t[$locale]['quick.title']}
				</h2>
				<p class="text-lg text-slate-400 mb-6">
					{t[$locale]['quick.desc']}
				</p>
				<ul class="space-y-3 text-slate-300">
					<li class="flex items-center gap-3">
						<span class="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary-light text-xs">✓</span>
						{t[$locale]['quick.feat1']} <code class="text-primary-light">NX.Hook</code>
					</li>
					<li class="flex items-center gap-3">
						<span class="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary-light text-xs">✓</span>
						{t[$locale]['quick.feat2']}
					</li>
					<li class="flex items-center gap-3">
						<span class="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary-light text-xs">✓</span>
						{t[$locale]['quick.feat3']} <code class="text-primary-light">nx_*</code>
					</li>
					<li class="flex items-center gap-3">
						<span class="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary-light text-xs">✓</span>
						{t[$locale]['quick.feat4']} <code class="text-primary-light">require()</code>
					</li>
				</ul>
				<div class="mt-8">
					<a href="/docs/getting-started" class="btn-primary">
						{t[$locale]['quick.btn']}
					</a>
				</div>
			</div>

			<div class="code-block glow-purple">
				<div class="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
					<div class="w-3 h-3 rounded-full bg-red-500/60"></div>
					<div class="w-3 h-3 rounded-full bg-yellow-500/60"></div>
					<div class="w-3 h-3 rounded-full bg-green-500/60"></div>
					<span class="ml-2 text-xs text-slate-500">main.lua</span>
				</div>
				<pre class="text-sm leading-relaxed"><code class="text-slate-300">{displayedCode}{#if !typingDone}<span class="cursor">▌</span>{/if}</code></pre>
			</div>
		</div>
	</div>
</section>

<!-- Docs Section -->
<section class="py-20 border-t border-white/5">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
			{t[$locale]['docs.title']}
		</h2>
		<p class="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
			{t[$locale]['docs.subtitle']}
		</p>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
			{#each [
				{ href: '/docs/getting-started', title: 'Getting Started', desc: 'Installation & setup' },
				{ href: '/docs/functions', title: 'Functions', desc: 'nx_* native API' },
				{ href: '/docs/hooks', title: 'Hooks & Callbacks', desc: 'Event system' },
				{ href: '/docs/commands', title: 'Commands', desc: 'Command registration' },
				{ href: '/docs/database', title: 'Database', desc: 'SQLite API' },
				{ href: '/docs/voice', title: 'Voice System', desc: 'Voice chat API' },
				{ href: '/docs/textdraws', title: 'TextDraws', desc: 'HUD elements' },
				{ href: '/docs/discord', title: 'Discord Bot', desc: 'Discord integration' },
				{ href: '/docs/references', title: 'Referências', desc: 'Armas & Skins IDs' }
			] as item}
				<a href={item.href} class="card text-left group">
					<h3 class="font-medium text-white group-hover:text-primary-light transition-colors">{item.title}</h3>
					<p class="text-sm text-slate-500 mt-1">{item.desc}</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.cursor {
		color: #7c3aed;
		animation: blink 0.8s infinite;
	}

	@keyframes blink {
		0%, 50% { opacity: 1; }
		51%, 100% { opacity: 0; }
	}

	@keyframes slide-in {
		from { transform: translateX(100%); opacity: 0; }
		to { transform: translateX(0); opacity: 1; }
	}

	.animate-slide-in {
		animation: slide-in 0.3s ease-out;
	}
</style>
