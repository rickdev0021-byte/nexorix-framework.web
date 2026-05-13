<script lang="ts">
    import { locale, toggleLocale } from './i18n';
</script>

<button
    onclick={toggleLocale}
    class="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm text-slate-300 hover:text-white"
    aria-label="Toggle language"
>
    {#if $locale === 'pt'}
        <span class="text-xs">🇧🇷</span> PT
    {:else}
        <span class="text-xs">🇺🇸</span> EN
    {/if}
</button>
