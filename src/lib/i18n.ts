import { writable } from 'svelte/store';

export type Locale = 'pt' | 'en';

// Default to Portuguese
export const locale = writable<Locale>('pt');

export function toggleLocale() {
    locale.update(l => l === 'pt' ? 'en' : 'pt');
}

export const t: Record<Locale, Record<string, string>> = {
    pt: {
        // Nav
        'nav.home': 'Início',
        'nav.docs': 'Documentação',
        'nav.api': 'API',
        'nav.github': 'GitHub',
        'nav.getstarted': 'Começar',

        // Hero
        'hero.tagline': 'Framework Lua 5.4 para Game Servers',
        'hero.description': 'Construa servidores poderosos com scripting Lua moderno. Hot-reload, voz, banco de dados, Discord — tudo em um framework.',
        'hero.btn.start': 'Começar',
        'hero.btn.api': 'Referência API',
        'hero.version': 'v1.0 Lançado',

        // Features
        'features.title': 'Tudo que você precisa',
        'features.subtitle': 'Um framework completo com baterias incluídas. Foque no seu gamemode, não em boilerplate.',
        'feat.lua': 'Lua 5.4',
        'feat.lua.desc': 'Scripting moderno com Lua 5.4 — coroutines, inteiros, operações bitwise.',
        'feat.reload': 'Hot-Reload',
        'feat.reload.desc': 'Recarregue scripts instantaneamente com /reload — sem reiniciar o servidor.',
        'feat.voice': 'Sistema de Voz',
        'feat.voice.desc': 'Streams de voz por proximidade, global e rádio com processamento de efeitos.',
        'feat.db': 'Banco de Dados',
        'feat.db.desc': 'API SQLite nativa com prepared statements e zero configuração.',
        'feat.discord': 'Discord',
        'feat.discord.desc': 'Envie mensagens, registre comandos e conecte seu servidor ao Discord.',
        'feat.admin': 'Sistema Admin',
        'feat.admin.desc': 'Sistema de permissões com 6 níveis e comandos prontos.',
        'feat.textdraw': 'TextDraw API',
        'feat.textdraw.desc': 'Criação e gerenciamento de TextDraws com suporte global e por player.',
        'feat.cross': 'Cross-Platform',
        'feat.cross.desc': 'Roda em Windows e Linux. Deploy em qualquer lugar com o mesmo código.',

        // Quick Start
        'quick.title': 'Rodando em minutos',
        'quick.desc': 'API simples e expressiva. Hooks de eventos, comandos e interação com players usando Lua limpo.',
        'quick.feat1': 'Orientado a eventos com',
        'quick.feat2': 'Sistema de comandos com permissões',
        'quick.feat3': 'Funções nativas com prefixo',
        'quick.feat4': 'Arquitetura modular com',
        'quick.btn': 'Ler a documentação →',

        // Docs CTA
        'docs.title': 'Documentação Completa',
        'docs.subtitle': 'Do início ao sistema de voz avançado — tudo documentado com exemplos.',

        // Sidebar
        'sidebar.intro': 'Introdução',
        'sidebar.core': 'API Core',
        'sidebar.systems': 'Sistemas',
        'sidebar.getting-started': 'Começando',
        'sidebar.hot-reload': 'Hot-Reload',
        'sidebar.constants': 'Constantes',
        'sidebar.functions': 'Funções (nx_*)',
        'sidebar.hooks': 'Hooks & Callbacks',
        'sidebar.commands': 'Comandos',
        'sidebar.database': 'Banco de Dados',
        'sidebar.voice': 'Sistema de Voz',
        'sidebar.textdraws': 'TextDraws',
        'sidebar.discord': 'Discord Bot',
        'sidebar.admin': 'Sistema Admin',

        // References
        'sidebar.references': 'Referências',
        'sidebar.references.catalog': 'Armas & Skins',

        // Footer
        'footer.docs': 'Documentação',
    },
    en: {
        // Nav
        'nav.home': 'Home',
        'nav.docs': 'Docs',
        'nav.api': 'API',
        'nav.github': 'GitHub',
        'nav.getstarted': 'Get Started',

        // Hero
        'hero.tagline': 'Lua 5.4 Game Server Framework',
        'hero.description': 'Build powerful game servers with modern Lua scripting. Hot-reload, voice chat, database, Discord bots — everything you need in one framework.',
        'hero.btn.start': 'Get Started',
        'hero.btn.api': 'API Reference',
        'hero.version': 'v1.0 Released',

        // Features
        'features.title': 'Everything you need to build',
        'features.subtitle': 'A complete framework with batteries included. Focus on your gamemode, not boilerplate.',
        'feat.lua': 'Lua 5.4 Powered',
        'feat.lua.desc': 'Modern Lua 5.4 scripting with full coroutine support, integers, and bitwise operations.',
        'feat.reload': 'Hot-Reload',
        'feat.reload.desc': 'Reload scripts instantly with /reload — no server restart needed.',
        'feat.voice': 'Voice System',
        'feat.voice.desc': 'Built-in proximity, global, and radio voice streams with effects processing.',
        'feat.db': 'SQLite Database',
        'feat.db.desc': 'Native SQLite API with prepared statements, transactions, and zero configuration.',
        'feat.discord': 'Discord Integration',
        'feat.discord.desc': 'Send messages, register commands, and bridge your server with Discord.',
        'feat.admin': 'Admin System',
        'feat.admin.desc': '6-level permission system with built-in commands and extensible architecture.',
        'feat.textdraw': 'TextDraw API',
        'feat.textdraw.desc': 'Full TextDraw creation and management with per-player and global support.',
        'feat.cross': 'Cross-Platform',
        'feat.cross.desc': 'Runs on Windows and Linux. Deploy anywhere with the same codebase.',

        // Quick Start
        'quick.title': 'Get running in minutes',
        'quick.desc': 'Simple, expressive API that feels natural. Hook into events, register commands, and interact with players using clean Lua syntax.',
        'quick.feat1': 'Event-driven with',
        'quick.feat2': 'Command system with permission levels',
        'quick.feat3': 'Native functions prefixed with',
        'quick.feat4': 'Modular architecture with',
        'quick.btn': 'Read the docs →',

        // Docs CTA
        'docs.title': 'Comprehensive Documentation',
        'docs.subtitle': 'From getting started to advanced voice systems — everything is documented with examples.',

        // Sidebar
        'sidebar.intro': 'Introduction',
        'sidebar.core': 'Core API',
        'sidebar.systems': 'Systems',
        'sidebar.getting-started': 'Getting Started',
        'sidebar.hot-reload': 'Hot-Reload',
        'sidebar.constants': 'Constants',
        'sidebar.functions': 'Functions (nx_*)',
        'sidebar.hooks': 'Hooks & Callbacks',
        'sidebar.commands': 'Commands',
        'sidebar.database': 'Database (SQLite)',
        'sidebar.voice': 'Voice System',
        'sidebar.textdraws': 'TextDraws',
        'sidebar.discord': 'Discord Bot',
        'sidebar.admin': 'Admin System',

        // References
        'sidebar.references': 'References',
        'sidebar.references.catalog': 'Weapons & Skins',

        // Footer
        'footer.docs': 'Documentation',
    }
};
