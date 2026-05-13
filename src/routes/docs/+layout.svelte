<script lang="ts">
	import { page } from '$app/stores';
	import { locale, t } from '$lib/i18n';

	let { children } = $props();

	const sections = [
		{
			titleKey: 'sidebar.intro',
			links: [
				{ href: '/docs/getting-started', labelKey: 'sidebar.getting-started' },
				{ href: '/docs/hot-reload', labelKey: 'sidebar.hot-reload' },
				{ href: '/docs/constants', labelKey: 'sidebar.constants' }
			]
		},
		{
			titleKey: 'sidebar.core',
			links: [
				{ href: '/docs/functions', labelKey: 'sidebar.functions' },
				{ href: '/docs/hooks', labelKey: 'sidebar.hooks' },
				{ href: '/docs/commands', labelKey: 'sidebar.commands' }
			]
		},
		{
			titleKey: 'sidebar.systems',
			links: [
				{ href: '/docs/database', labelKey: 'sidebar.database' },
				{ href: '/docs/voice', labelKey: 'sidebar.voice' },
				{ href: '/docs/textdraws', labelKey: 'sidebar.textdraws' },
				{ href: '/docs/discord', labelKey: 'sidebar.discord' }
			]
		},
		{
			titleKey: 'sidebar.references',
			links: [
				{ href: '/docs/references', labelKey: 'sidebar.references.catalog' }
			]
		}
	];

	let sidebarOpen = $state(false);
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
	<div class="lg:grid lg:grid-cols-[250px_1fr] lg:gap-8">
		<!-- Mobile sidebar toggle -->
		<button
			class="lg:hidden mb-4 flex items-center gap-2 text-slate-400 hover:text-white"
			onclick={() => sidebarOpen = !sidebarOpen}
		>
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
			Documentation Menu
		</button>

		<!-- Sidebar -->
		<aside class="lg:block {sidebarOpen ? 'block' : 'hidden'} mb-8 lg:mb-0">
			<nav class="sticky top-24 space-y-6 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4">
				{#each sections as section}
					<div>
						<h4 class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3">
							{t[$locale][section.titleKey]}
						</h4>
						<ul class="space-y-1">
							{#each section.links as link}
								<li>
									<a
										href={link.href}
										class="sidebar-link"
										class:active={$page.url.pathname === link.href}
									>
										{t[$locale][link.labelKey]}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</nav>
		</aside>

		<!-- Content -->
		<div class="prose-docs min-w-0">
			{@render children()}
		</div>
	</div>
</div>
