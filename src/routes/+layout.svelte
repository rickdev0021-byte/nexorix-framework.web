<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { locale, t } from '$lib/i18n';
	import LangSwitch from '$lib/LangSwitch.svelte';

	let { children } = $props();

	const navLinks = [
		{ href: '/', labelKey: 'nav.home' },
		{ href: '/docs/getting-started', labelKey: 'nav.docs' },
		{ href: '/docs/functions', labelKey: 'nav.api' },
		{ href: 'https://github.com/NexorixGroup', labelKey: 'nav.github' }
	];

	let mobileMenuOpen = $state(false);
</script>

<div class="min-h-screen flex flex-col">
	<!-- Navigation -->
	<nav class="fixed top-0 w-full z-50 bg-surface-dark/80 backdrop-blur-xl border-b border-white/5">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<a href="/" class="flex items-center gap-3">
					<img src="/logo_web.png" alt="Nexorix" class="w-8 h-8 rounded-lg" />
					<span class="font-semibold text-white text-lg">Nexorix</span>
				</a>

				<!-- Desktop nav -->
				<div class="hidden md:flex items-center gap-8">
					{#each navLinks as link}
						{#if link.href.startsWith('http')}
							<a href={link.href} target="_blank" rel="noopener noreferrer" class="nav-link">
								{t[$locale][link.labelKey]}
							</a>
						{:else}
							<a href={link.href} class="nav-link" class:text-white={$page.url.pathname === link.href || $page.url.pathname.startsWith(link.href + '/')}>
								{t[$locale][link.labelKey]}
							</a>
						{/if}
					{/each}
					<LangSwitch />
					<a href="/docs/getting-started" class="btn-primary text-sm !px-4 !py-2">
						{t[$locale]['nav.getstarted']}
					</a>
				</div>

				<!-- Mobile menu button -->
				<button
					class="md:hidden text-slate-400 hover:text-white"
					onclick={() => mobileMenuOpen = !mobileMenuOpen}
					aria-label="Toggle menu"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						{#if mobileMenuOpen}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						{:else}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						{/if}
					</svg>
				</button>
			</div>
		</div>

		<!-- Mobile menu -->
		{#if mobileMenuOpen}
			<div class="md:hidden border-t border-white/5 bg-surface-dark/95 backdrop-blur-xl">
				<div class="px-4 py-4 space-y-2">
					{#each navLinks as link}
						<a href={link.href} class="block px-3 py-2 text-slate-300 hover:text-white rounded-md" onclick={() => mobileMenuOpen = false}>
							{t[$locale][link.labelKey]}
						</a>
					{/each}
					<div class="px-3 pt-2">
						<LangSwitch />
					</div>
				</div>
			</div>
		{/if}
	</nav>

	<!-- Main content -->
	<main class="flex-1 pt-16">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="border-t border-white/5 bg-surface-dark">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<div class="flex flex-col md:flex-row items-center justify-between gap-4">
				<div class="flex items-center gap-3">
					<img src="/logo_web.png" alt="Nexorix" class="w-6 h-6 rounded" />
					<span class="text-slate-400 text-sm">Nexorix Framework &copy; {new Date().getFullYear()} — Desenvolvido por <a href="https://github.com/rickcosta-dev" target="_blank" rel="noopener noreferrer" class="text-primary-light hover:text-white transition-colors">RickZin021</a></span>
				</div>
				<div class="flex items-center gap-6 text-sm text-slate-500">
					<a href="/docs/getting-started" class="hover:text-slate-300 transition-colors">{t[$locale]['footer.docs']}</a>
					<a href="https://github.com/NexorixGroup" target="_blank" rel="noopener noreferrer" class="hover:text-slate-300 transition-colors">GitHub</a>
					<a href="https://discord.gg/rdKXWeQjKf" target="_blank" rel="noopener noreferrer" class="hover:text-slate-300 transition-colors">Discord</a>
				</div>
			</div>
		</div>
	</footer>
</div>
