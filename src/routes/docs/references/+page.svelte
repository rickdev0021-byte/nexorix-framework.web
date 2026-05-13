<script lang="ts">
	import { locale } from '$lib/i18n';

	// Armas com ID, nome e arquivo de imagem
	const weapons = [
		{ id: 0, name: 'Fist (Punho)', img: null },
		{ id: 1, name: 'Brass Knuckles', img: 'Brass knuckles.png' },
		{ id: 2, name: 'Golf Club', img: 'Golf club.png' },
		{ id: 3, name: 'Nite Stick', img: 'Nite stick.png' },
		{ id: 4, name: 'Knife', img: 'Knife.png' },
		{ id: 5, name: 'Baseball Bat', img: 'Baseball bat.png' },
		{ id: 6, name: 'Shovel', img: 'Shovel.png' },
		{ id: 7, name: 'Pool Cue', img: 'Pool cue.png' },
		{ id: 8, name: 'Katana', img: 'Kantana.png' },
		{ id: 9, name: 'Chainsaw', img: 'Chainsaw.png' },
		{ id: 10, name: 'Purple Dildo', img: 'Purple dildo.png' },
		{ id: 11, name: 'White Dildo', img: 'White dildo.png' },
		{ id: 12, name: 'Long Vibrator', img: 'Long vibrator.png' },
		{ id: 13, name: 'Short Vibrator', img: 'Short vibrator.png' },
		{ id: 14, name: 'Flowers', img: 'Flowers.png' },
		{ id: 15, name: 'Cane', img: 'Cane.png' },
		{ id: 16, name: 'Grenades', img: 'Grenades.png' },
		{ id: 17, name: 'Tear Gas', img: 'Tear gas.png' },
		{ id: 18, name: 'Molotov Cocktail', img: 'Molotov cocktail.png' },
		{ id: 22, name: '9mm Pistol', img: '9mm Pistol.png' },
		{ id: 23, name: 'Silenced Pistol', img: 'Silenced pistol.png' },
		{ id: 24, name: 'Desert Eagle', img: 'Desert eagle.png' },
		{ id: 25, name: 'Shotgun', img: 'Shotgun.png' },
		{ id: 26, name: 'Sawn-off Shotgun', img: 'Sawn-off shotgun.png' },
		{ id: 27, name: 'Combat Shotgun', img: 'Combat shotgun.png' },
		{ id: 28, name: 'Micro Uzi', img: 'Micro Uzi.png' },
		{ id: 29, name: 'MP5', img: 'Mp5.png' },
		{ id: 30, name: 'AK-47', img: 'Ak47.png' },
		{ id: 31, name: 'M4', img: 'M4.png' },
		{ id: 32, name: 'Tec-9', img: 'Tec 9.png' },
		{ id: 33, name: 'Country Rifle', img: 'Country rifle.png' },
		{ id: 34, name: 'Sniper Rifle', img: 'Sniper rifle.png' },
		{ id: 35, name: 'RPG', img: 'Rpg.png' },
		{ id: 36, name: 'Heat Seeking Rocket', img: 'Heat seeking rocket.png' },
		{ id: 37, name: 'Flame-thrower', img: 'Flame-thrower.png' },
		{ id: 38, name: 'Minigun', img: 'Mini gun.png' },
		{ id: 39, name: 'Satchel Charges', img: 'Satchel charges.png' },
		{ id: 40, name: 'Detonator', img: 'Detonator.png' },
		{ id: 41, name: 'Spray Can', img: 'Spray can.png' },
		{ id: 42, name: 'Fire Extinguisher', img: 'Fire extinguisher.png' },
		{ id: 43, name: 'Camera', img: 'Camera.png' },
		{ id: 44, name: 'Night Vision', img: 'Night vision.png' },
		{ id: 45, name: 'Thermal Goggles', img: 'Thermal goggles.png' },
		{ id: 46, name: 'Parachute', img: 'Parachute.png' },
	];

	// Skins - Lista completa (IDs 0-311)
	const skins = [
		{ id: 0, name: 'CJ (Carl Johnson)' },
		{ id: 1, name: 'Truth' },
		{ id: 2, name: 'Maccer' },
		{ id: 3, name: 'Andre' },
		{ id: 4, name: 'Barry "Big Bear" [Thin]' },
		{ id: 5, name: 'Barry "Big Bear" [Big]' },
		{ id: 6, name: 'Emmet' },
		{ id: 7, name: 'Taxi Driver' },
		{ id: 8, name: 'Janitor' },
		{ id: 9, name: 'Normal Ped (F)' },
		{ id: 10, name: 'Old Woman' },
		{ id: 11, name: 'Casino Croupier (F)' },
		{ id: 12, name: 'Rich Woman' },
		{ id: 13, name: 'Street Girl' },
		{ id: 14, name: 'Normal Ped (M)' },
		{ id: 15, name: 'Mr.Whittaker' },
		{ id: 16, name: 'Airport Worker' },
		{ id: 17, name: 'Businessman' },
		{ id: 18, name: 'Beach Visitor (M)' },
		{ id: 19, name: 'DJ' },
		{ id: 20, name: 'Rich Guy' },
		{ id: 21, name: 'Normal Ped (M)' },
		{ id: 22, name: 'Normal Ped (M)' },
		{ id: 23, name: 'BMXer' },
		{ id: 24, name: 'Madd Dogg Bodyguard' },
		{ id: 25, name: 'Madd Dogg Bodyguard' },
		{ id: 26, name: 'Backpacker' },
		{ id: 27, name: 'Construction Worker' },
		{ id: 28, name: 'Drug Dealer (LS)' },
		{ id: 29, name: 'Drug Dealer (SF)' },
		{ id: 30, name: 'Drug Dealer (LV)' },
		{ id: 31, name: 'Farm Inhabitant (F)' },
		{ id: 32, name: 'Farm Inhabitant (M)' },
		{ id: 33, name: 'Farm Inhabitant (M)' },
		{ id: 34, name: 'Farm Inhabitant (M)' },
		{ id: 35, name: 'Gardener' },
		{ id: 36, name: 'Golfer' },
		{ id: 37, name: 'Golfer' },
		{ id: 38, name: 'Normal Ped (F)' },
		{ id: 39, name: 'Normal Ped (F)' },
		{ id: 40, name: 'Normal Ped (F)' },
		{ id: 41, name: 'Normal Ped (F)' },
		{ id: 42, name: 'Jethro' },
		{ id: 43, name: 'Normal Ped (M)' },
		{ id: 44, name: 'Normal Ped (M)' },
		{ id: 45, name: 'Beach Visitor (M)' },
		{ id: 46, name: 'Normal Ped (M)' },
		{ id: 47, name: 'Normal Ped (M)' },
		{ id: 48, name: 'Normal Ped (M)' },
		{ id: 49, name: 'Snakehead (Da Nang)' },
		{ id: 50, name: 'Mechanic' },
		{ id: 51, name: 'Mountain Biker' },
		{ id: 52, name: 'Mountain Biker' },
		{ id: 53, name: 'Unknown (F)' },
		{ id: 54, name: 'Normal Ped (F)' },
		{ id: 55, name: 'Normal Ped (F)' },
		{ id: 56, name: 'Normal Ped (F)' },
		{ id: 57, name: 'Oriental Ped (M)' },
		{ id: 58, name: 'Oriental Ped (M)' },
		{ id: 59, name: 'Normal Ped (M)' },
		{ id: 60, name: 'Normal Ped (M)' },
		{ id: 61, name: 'Pilot' },
		{ id: 62, name: 'Colonel Fuhrberger' },
		{ id: 63, name: 'Prostitute (F)' },
		{ id: 64, name: 'Prostitute (F)' },
		{ id: 65, name: 'Kendl Johnson' },
		{ id: 66, name: 'Pool Player' },
		{ id: 67, name: 'Pool Player' },
		{ id: 68, name: 'Priest' },
		{ id: 69, name: 'Normal Ped (F)' },
		{ id: 70, name: 'Scientist' },
		{ id: 71, name: 'Security Guard' },
		{ id: 72, name: 'Hippy' },
		{ id: 73, name: 'Hippy' },
		{ id: 75, name: 'Prostitute (F)' },
		{ id: 76, name: 'Stewardess' },
		{ id: 77, name: 'Homeless (F)' },
		{ id: 78, name: 'Homeless (M)' },
		{ id: 79, name: 'Homeless (M)' },
		{ id: 80, name: 'Boxer' },
		{ id: 81, name: 'Boxer' },
		{ id: 82, name: 'Black Elvis' },
		{ id: 83, name: 'White Elvis' },
		{ id: 84, name: 'Blue Elvis' },
		{ id: 85, name: 'Prostitute (F)' },
		{ id: 86, name: 'Ryder (Masked)' },
		{ id: 87, name: 'Stripper (F)' },
		{ id: 88, name: 'Normal Ped (F)' },
		{ id: 89, name: 'Normal Ped (F)' },
		{ id: 90, name: 'Jogger (F)' },
		{ id: 91, name: 'Rich Woman' },
		{ id: 92, name: 'Rollerskater (F)' },
		{ id: 93, name: 'Normal Ped (F)' },
		{ id: 94, name: 'Normal Ped (M)' },
		{ id: 95, name: 'Normal Ped (M)' },
		{ id: 96, name: 'Jogger (M)' },
		{ id: 97, name: 'Lifeguard (M)' },
		{ id: 98, name: 'Normal Ped (M)' },
		{ id: 99, name: 'Rollerskater (M)' },
		{ id: 100, name: 'Biker' },
		{ id: 101, name: 'Normal Ped (M)' },
		{ id: 102, name: 'Balla' },
		{ id: 103, name: 'Balla' },
		{ id: 104, name: 'Balla' },
		{ id: 105, name: 'Grove Street' },
		{ id: 106, name: 'Grove Street' },
		{ id: 107, name: 'Grove Street' },
		{ id: 108, name: 'Los Santos Vagos' },
		{ id: 109, name: 'Los Santos Vagos' },
		{ id: 110, name: 'Los Santos Vagos' },
		{ id: 111, name: 'Russian Mafia' },
		{ id: 112, name: 'Russian Mafia' },
		{ id: 113, name: 'Russian Mafia Boss' },
		{ id: 114, name: 'Varios Los Aztecas' },
		{ id: 115, name: 'Varios Los Aztecas' },
		{ id: 116, name: 'Varios Los Aztecas' },
		{ id: 117, name: 'Triad' },
		{ id: 118, name: 'Triad' },
		{ id: 119, name: 'Johnny Sindacco' },
		{ id: 120, name: 'Triad Boss' },
		{ id: 121, name: 'Da Nang Boy' },
		{ id: 122, name: 'Da Nang Boy' },
		{ id: 123, name: 'Da Nang Boy' },
		{ id: 124, name: 'Mafia (LV)' },
		{ id: 125, name: 'Mafia (LV)' },
		{ id: 126, name: 'Mafia (LV)' },
		{ id: 127, name: 'Mafia (LV)' },
		{ id: 128, name: 'Farm Inhabitant (M)' },
		{ id: 129, name: 'Farm Inhabitant (F)' },
		{ id: 130, name: 'Farm Inhabitant (F)' },
		{ id: 131, name: 'Farm Inhabitant (F)' },
		{ id: 132, name: 'Farm Inhabitant (M)' },
		{ id: 133, name: 'Farm Inhabitant (M)' },
		{ id: 134, name: 'Homeless (M)' },
		{ id: 135, name: 'Homeless (M)' },
		{ id: 136, name: 'Normal Ped (M)' },
		{ id: 137, name: 'Homeless (M)' },
		{ id: 138, name: 'Beach Visitor (F)' },
		{ id: 139, name: 'Beach Visitor (F)' },
		{ id: 140, name: 'Beach Visitor (F)' },
		{ id: 141, name: 'Businesswoman' },
		{ id: 142, name: 'Taxi Driver' },
		{ id: 143, name: 'Crack Maker (M)' },
		{ id: 144, name: 'Crack Maker (M)' },
		{ id: 145, name: 'Crack Maker (F)' },
		{ id: 146, name: 'Crack Maker (M)' },
		{ id: 147, name: 'Businessman' },
		{ id: 148, name: 'Businesswoman' },
		{ id: 149, name: 'Big Smoke (Armored)' },
		{ id: 150, name: 'Businesswoman' },
		{ id: 151, name: 'Normal Ped (F)' },
		{ id: 152, name: 'Prostitute (F)' },
		{ id: 153, name: 'Construction Worker' },
		{ id: 154, name: 'Beach Visitor (M)' },
		{ id: 155, name: 'Pizza Worker' },
		{ id: 156, name: 'Barber' },
		{ id: 157, name: 'Hillbilly (F)' },
		{ id: 158, name: 'Farmer (M)' },
		{ id: 159, name: 'Hillbilly (M)' },
		{ id: 160, name: 'Hillbilly (M)' },
		{ id: 161, name: 'Farmer (M)' },
		{ id: 162, name: 'Hillbilly (M)' },
		{ id: 163, name: 'Black Bouncer' },
		{ id: 164, name: 'White Bouncer' },
		{ id: 165, name: 'White MIB Agent' },
		{ id: 166, name: 'Black MIB Agent' },
		{ id: 167, name: "Cluckin' Bell Worker" },
		{ id: 168, name: 'Hotdog Vendor' },
		{ id: 169, name: 'Normal Ped (F)' },
		{ id: 170, name: 'Normal Ped (M)' },
		{ id: 171, name: 'Blackjack Dealer' },
		{ id: 172, name: 'Casino Croupier (F)' },
		{ id: 173, name: 'San Fierro Rifa' },
		{ id: 174, name: 'San Fierro Rifa' },
		{ id: 175, name: 'San Fierro Rifa' },
		{ id: 176, name: 'Barber' },
		{ id: 177, name: 'Barber' },
		{ id: 178, name: 'Whore (F)' },
		{ id: 179, name: 'Ammunation Salesman' },
		{ id: 180, name: 'Tattoo Artist' },
		{ id: 181, name: 'Punk' },
		{ id: 182, name: 'Cab Driver' },
		{ id: 183, name: 'Normal Ped (M)' },
		{ id: 184, name: 'Normal Ped (M)' },
		{ id: 185, name: 'Normal Ped (M)' },
		{ id: 186, name: 'Normal Ped (M)' },
		{ id: 187, name: 'Businessman' },
		{ id: 188, name: 'Normal Ped (M)' },
		{ id: 189, name: 'Valet' },
		{ id: 190, name: 'Barbara Schternvart' },
		{ id: 191, name: 'Helena Wankstein' },
		{ id: 192, name: 'Michelle Cannes' },
		{ id: 193, name: 'Katie Zhan' },
		{ id: 194, name: 'Millie Perkins' },
		{ id: 195, name: 'Denise Robinson' },
		{ id: 196, name: 'Farm Inhabitant (F)' },
		{ id: 197, name: 'Hillbilly (F)' },
		{ id: 198, name: 'Farm Inhabitant (F)' },
		{ id: 199, name: 'Farm Inhabitant (F)' },
		{ id: 200, name: 'Hillbilly (M)' },
		{ id: 201, name: 'Farmer (F)' },
		{ id: 202, name: 'Farmer (M)' },
		{ id: 203, name: 'Karate Teacher' },
		{ id: 204, name: 'Karate Teacher' },
		{ id: 205, name: 'Burger Shot Cashier' },
		{ id: 206, name: 'Cab Driver' },
		{ id: 207, name: 'Prostitute (F)' },
		{ id: 208, name: 'Su Xi Mu (Suzie)' },
		{ id: 209, name: 'Noodle Vendor' },
		{ id: 210, name: 'Boating Instructor' },
		{ id: 211, name: 'Clothes Shop Staff (F)' },
		{ id: 212, name: 'Homeless (M)' },
		{ id: 213, name: 'Weird Old Man' },
		{ id: 214, name: 'Waitress' },
		{ id: 215, name: 'Normal Ped (F)' },
		{ id: 216, name: 'Normal Ped (F)' },
		{ id: 217, name: 'Clothes Shop Staff (M)' },
		{ id: 218, name: 'Normal Ped (F)' },
		{ id: 219, name: 'Rich Woman' },
		{ id: 220, name: 'Cab Driver' },
		{ id: 221, name: 'Normal Ped (M)' },
		{ id: 222, name: 'Normal Ped (M)' },
		{ id: 223, name: 'Normal Ped (M)' },
		{ id: 224, name: 'Normal Ped (F)' },
		{ id: 225, name: 'Normal Ped (F)' },
		{ id: 226, name: 'Normal Ped (F)' },
		{ id: 227, name: 'Oriental Businessman' },
		{ id: 228, name: 'Oriental Ped (M)' },
		{ id: 229, name: 'Oriental Ped (M)' },
		{ id: 230, name: 'Homeless (M)' },
		{ id: 231, name: 'Normal Ped (F)' },
		{ id: 232, name: 'Normal Ped (F)' },
		{ id: 233, name: 'Normal Ped (F)' },
		{ id: 234, name: 'Cab Driver' },
		{ id: 235, name: 'Normal Ped (M)' },
		{ id: 236, name: 'Normal Ped (M)' },
		{ id: 237, name: 'Prostitute (F)' },
		{ id: 238, name: 'Prostitute (F)' },
		{ id: 239, name: 'Homeless (M)' },
		{ id: 240, name: 'The D.A.' },
		{ id: 241, name: 'Afro-American' },
		{ id: 242, name: 'Mexican' },
		{ id: 243, name: 'Prostitute (F)' },
		{ id: 244, name: 'Stripper (F)' },
		{ id: 245, name: 'Prostitute (F)' },
		{ id: 246, name: 'Stripper (F)' },
		{ id: 247, name: 'Biker' },
		{ id: 248, name: 'Biker' },
		{ id: 249, name: 'Pimp' },
		{ id: 250, name: 'Normal Ped (M)' },
		{ id: 251, name: 'Lifeguard (F)' },
		{ id: 252, name: 'Naked Valet' },
		{ id: 253, name: 'Bus Driver' },
		{ id: 254, name: 'Biker Drug Dealer' },
		{ id: 255, name: 'Chauffeur' },
		{ id: 256, name: 'Stripper (F)' },
		{ id: 257, name: 'Stripper (F)' },
		{ id: 258, name: 'Heckler' },
		{ id: 259, name: 'Heckler' },
		{ id: 260, name: 'Construction Worker' },
		{ id: 261, name: 'Cab Driver' },
		{ id: 262, name: 'Cab Driver' },
		{ id: 263, name: 'Normal Ped (F)' },
		{ id: 264, name: 'Clown (Ice-cream)' },
		{ id: 265, name: 'Tenpenny' },
		{ id: 266, name: 'Pulaski' },
		{ id: 267, name: 'Hernandez' },
		{ id: 268, name: 'Dwayne' },
		{ id: 269, name: 'Big Smoke' },
		{ id: 270, name: 'Sweet' },
		{ id: 271, name: 'Ryder' },
		{ id: 272, name: 'Mafia Boss (Forelli)' },
		{ id: 273, name: 'T-Bone Mendez' },
		{ id: 274, name: 'Paramedic (LS)' },
		{ id: 275, name: 'Paramedic (LV)' },
		{ id: 276, name: 'Paramedic (SF)' },
		{ id: 277, name: 'Firefighter (LS)' },
		{ id: 278, name: 'Firefighter (LV)' },
		{ id: 279, name: 'Firefighter (SF)' },
		{ id: 280, name: 'LSPD Officer' },
		{ id: 281, name: 'SFPD Officer' },
		{ id: 282, name: 'LVPD Officer' },
		{ id: 283, name: 'County Sheriff' },
		{ id: 284, name: 'LSPD Motorbike Cop' },
		{ id: 285, name: 'S.W.A.T.' },
		{ id: 286, name: 'FBI Agent' },
		{ id: 287, name: 'Army Soldier' },
		{ id: 288, name: 'Desert Sheriff' },
		{ id: 289, name: 'Zero' },
		{ id: 290, name: 'Ken Rosenberg' },
		{ id: 291, name: 'Kent Paul' },
		{ id: 292, name: 'Cesar Vialpando' },
		{ id: 293, name: 'OG Loc' },
		{ id: 294, name: 'Wuzi Mu (Woozie)' },
		{ id: 295, name: 'Michael Toreno' },
		{ id: 296, name: 'Jizzy B.' },
		{ id: 297, name: 'Madd Dogg' },
		{ id: 298, name: 'Catalina' },
		{ id: 299, name: 'Claude Speed' },
		{ id: 300, name: 'LSPD (No Holster)' },
		{ id: 301, name: 'SFPD (No Holster)' },
		{ id: 302, name: 'LVPD (No Holster)' },
		{ id: 303, name: 'LSPD (No Uniform)' },
		{ id: 304, name: 'LSPD (No Uniform)' },
		{ id: 305, name: 'LVPD (No Uniform)' },
		{ id: 306, name: 'LSPD Officer (F)' },
		{ id: 307, name: 'SFPD Officer (F)' },
		{ id: 308, name: 'SF Paramedic (F)' },
		{ id: 309, name: 'LVPD Officer (F)' },
		{ id: 310, name: 'County Sheriff (No Hat)' },
		{ id: 311, name: 'Desert Sheriff (No Hat)' },
	];

	// Filtro de busca
	let weaponSearch = $state('');
	let skinSearch = $state('');
	let activeTab: 'weapons' | 'skins' = $state('weapons');

	const filteredWeapons = $derived(
		weapons.filter(w => 
			w.name.toLowerCase().includes(weaponSearch.toLowerCase()) ||
			w.id.toString().includes(weaponSearch)
		)
	);

	const filteredSkins = $derived(
		skins.filter(s => 
			s.name.toLowerCase().includes(skinSearch.toLowerCase()) ||
			s.id.toString().includes(skinSearch)
		)
	);
</script>

<svelte:head>
	<title>Referências - Nexorix Framework</title>
</svelte:head>

<h1>{$locale === 'pt' ? 'Referências' : 'References'}</h1>

<p>
	{#if $locale === 'pt'}
		Catálogo completo de IDs de armas e skins para uso com funções como 
		<code>nx_GivePlayerWeapon(pid, weaponid, ammo)</code> e <code>nx_SetPlayerSkin(pid, skinid)</code>.
	{:else}
		Complete catalog of weapon and skin IDs for use with functions like 
		<code>nx_GivePlayerWeapon(pid, weaponid, ammo)</code> and <code>nx_SetPlayerSkin(pid, skinid)</code>.
	{/if}
</p>

<!-- Tabs -->
<div class="tabs">
	<button class="tab" class:active={activeTab === 'weapons'} onclick={() => activeTab = 'weapons'}>
		🔫 {$locale === 'pt' ? 'Armas' : 'Weapons'} ({weapons.length})
	</button>
	<button class="tab" class:active={activeTab === 'skins'} onclick={() => activeTab = 'skins'}>
		👤 Skins ({skins.length})
	</button>
</div>

<!-- Weapons Tab -->
{#if activeTab === 'weapons'}
	<div class="search-box">
		<input 
			type="text" 
			bind:value={weaponSearch} 
			placeholder={$locale === 'pt' ? '🔍 Buscar por nome ou ID...' : '🔍 Search by name or ID...'}
		/>
	</div>

	<div class="grid-weapons">
		{#each filteredWeapons as weapon}
			<div class="weapon-card">
				{#if weapon.img}
					<img src="/armas/{weapon.img}" alt={weapon.name} class="weapon-img" />
				{:else}
					<div class="weapon-img placeholder">👊</div>
				{/if}
				<div class="weapon-info">
					<span class="weapon-id">ID: {weapon.id}</span>
					<span class="weapon-name">{weapon.name}</span>
				</div>
			</div>
		{/each}
	</div>

	<h3>{$locale === 'pt' ? 'Exemplo de uso' : 'Usage example'}</h3>
	<div class="code-block">
		<pre><code>{`-- Dar AK-47 com 500 munições ao player
nx_GivePlayerWeapon(pid, 30, 500)

-- Dar Desert Eagle com 100 munições
nx_GivePlayerWeapon(pid, 24, 100)

-- Resetar armas do player
nx_ResetPlayerWeapons(pid)`}</code></pre>
	</div>
{/if}

<!-- Skins Tab -->
{#if activeTab === 'skins'}
	<div class="search-box">
		<input 
			type="text" 
			bind:value={skinSearch} 
			placeholder={$locale === 'pt' ? '🔍 Buscar por nome ou ID...' : '🔍 Search by name or ID...'}
		/>
	</div>

	<div class="grid-skins">
		{#each filteredSkins as skin}
			<div class="skin-card">
				<img src="/skins/{skin.id}.png" alt={skin.name} class="skin-img" loading="lazy" />
				<div class="skin-info">
					<span class="skin-id">ID: {skin.id}</span>
					<span class="skin-name">{skin.name}</span>
				</div>
			</div>
		{/each}
	</div>

	<h3>{$locale === 'pt' ? 'Exemplo de uso' : 'Usage example'}</h3>
	<div class="code-block">
		<pre><code>{`-- Mudar skin do player para CJ (ID 0)
nx_SetPlayerSkin(pid, 0)

-- Mudar skin para SWAT
nx_SetPlayerSkin(pid, 285)

-- Obter skin atual do player
local skin = nx_GetPlayerSkin(pid)`}</code></pre>
	</div>
{/if}

<style>
	.tabs {
		display: flex;
		gap: 0.5rem;
		margin: 1.5rem 0 1rem;
		border-bottom: 1px solid rgba(255,255,255,0.1);
		padding-bottom: 0.5rem;
	}
	.tab {
		padding: 0.5rem 1.25rem;
		border-radius: 0.5rem 0.5rem 0 0;
		background: transparent;
		color: #94a3b8;
		border: 1px solid transparent;
		cursor: pointer;
		font-size: 0.95rem;
		transition: all 0.2s;
	}
	.tab:hover {
		color: #e2e8f0;
		background: rgba(124, 58, 237, 0.1);
	}
	.tab.active {
		color: #c4b5fd;
		background: rgba(124, 58, 237, 0.15);
		border-color: rgba(124, 58, 237, 0.3);
	}

	.search-box {
		margin: 1rem 0;
	}
	.search-box input {
		width: 100%;
		padding: 0.75rem 1rem;
		border-radius: 0.5rem;
		background: rgba(15, 15, 15, 0.8);
		border: 1px solid rgba(255,255,255,0.1);
		color: #e2e8f0;
		font-size: 0.9rem;
		outline: none;
		transition: border-color 0.2s;
	}
	.search-box input:focus {
		border-color: rgba(124, 58, 237, 0.5);
	}
	.search-box input::placeholder {
		color: #64748b;
	}

	.grid-weapons {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
		gap: 0.75rem;
		margin: 1rem 0 2rem;
	}

	.weapon-card {
		background: rgba(15, 15, 15, 0.6);
		border: 1px solid rgba(255,255,255,0.08);
		border-radius: 0.5rem;
		padding: 0.75rem;
		text-align: center;
		transition: border-color 0.2s, transform 0.2s;
	}
	.weapon-card:hover {
		border-color: rgba(124, 58, 237, 0.4);
		transform: translateY(-2px);
	}

	.weapon-img {
		width: 64px;
		height: 64px;
		object-fit: contain;
		margin: 0 auto 0.5rem;
		display: block;
		filter: brightness(1.1);
	}
	.weapon-img.placeholder {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2rem;
		background: rgba(124, 58, 237, 0.1);
		border-radius: 0.25rem;
	}

	.weapon-info {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
	}
	.weapon-id {
		font-size: 0.7rem;
		color: #7c3aed;
		font-weight: 600;
		font-family: monospace;
	}
	.weapon-name {
		font-size: 0.75rem;
		color: #cbd5e1;
		line-height: 1.2;
	}

	.grid-skins {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
		gap: 0.6rem;
		margin: 1rem 0 2rem;
	}

	.skin-card {
		background: rgba(15, 15, 15, 0.6);
		border: 1px solid rgba(255,255,255,0.08);
		border-radius: 0.5rem;
		padding: 0.5rem;
		text-align: center;
		transition: all 0.2s;
	}
	.skin-card:hover {
		border-color: rgba(124, 58, 237, 0.5);
		transform: translateY(-2px);
	}

	.skin-img {
		width: 60px;
		height: 100px;
		object-fit: contain;
		margin: 0 auto 0.4rem;
		display: block;
	}

	.skin-info {
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
	}

	.skin-id {
		font-size: 0.7rem;
		color: #7c3aed;
		font-weight: 600;
		font-family: monospace;
		white-space: nowrap;
	}
	.skin-name {
		font-size: 0.7rem;
		color: #cbd5e1;
		line-height: 1.2;
	}
</style>
