'use strict';

/**@type {{[k: string]: ItemData}} */
let BattleItems = {
	"abomasite": {
		id: "abomasite",
		name: "Abomasite",
		spritenum: 575,
		megaStone: "Abomasnow-Mega",
		megaEvolves: "Abomasnow",
		itemUser: ["Abomasnow"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by an Abomasnow, this item allows it to Mega Evolve in battle.",
	},
	"absolite": {
		id: "absolite",
		name: "Absolite",
		spritenum: 576,
		megaStone: "Absol-Mega",
		megaEvolves: "Absol",
		itemUser: ["Absol"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 677,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by an Absol, this item allows it to Mega Evolve in battle.",
	},
	"absorbbulb": {
		id: "absorbbulb",
		name: "Absorb Bulb",
		spritenum: 2,
		fling: {
			basePower: 30,
		},
		onAfterDamage(damage, target, source, move) {
			if (move.type === 'Water' && target.useItem()) {
				this.boost({spa: 1});
			}
		},
		num: 545,
		gen: 5,
		desc: "Raises holder's Sp. Atk by 1 stage if hit by a Water-type attack. Single use.",
	},
	"adamantorb": {
		id: "adamantorb",
		name: "Adamant Orb",
		spritenum: 4,
		fling: {
			basePower: 60,
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move && user.baseTemplate.species === 'Dialga' && (move.type === 'Steel' || move.type === 'Dragon')) {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		itemUser: ["Dialga"],
		num: 135,
		gen: 4,
		desc: "If held by a Dialga, its Steel- and Dragon-type attacks have 1.2x power.",
	},
	"adrenalineorb": {
		id: "adrenalineorb",
		name: "Adrenaline Orb",
		spritenum: 660,
		fling: {
			basePower: 30,
		},
		onAfterBoost(boost, target, source, effect) {
			if (effect.id === 'intimidate' && target.useItem()) {
				this.boost({spe: 1});
			}
		},
		num: 846,
		gen: 7,
		desc: "Raises holder's Speed by 1 stage if it gets affected by Intimidate. Single use.",
	},
	"aerodactylite": {
		id: "aerodactylite",
		name: "Aerodactylite",
		spritenum: 577,
		megaStone: "Aerodactyl-Mega",
		megaEvolves: "Aerodactyl",
		itemUser: ["Aerodactyl"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 672,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by an Aerodactyl, this item allows it to Mega Evolve in battle.",
	},
	"aggronite": {
		id: "aggronite",
		name: "Aggronite",
		spritenum: 578,
		megaStone: "Aggron-Mega",
		megaEvolves: "Aggron",
		itemUser: ["Aggron"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 667,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by an Aggron, this item allows it to Mega Evolve in battle.",
	},
	"aguavberry": {
		id: "aguavberry",
		name: "Aguav Berry",
		spritenum: 5,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Dragon",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 && pokemon.hasAbility('gluttony'))) {
				pokemon.eatItem();
			}
		},
		onTryEatItem(item, pokemon) {
			if (!this.runEvent('TryHeal', pokemon)) return false;
		},
		onEat(pokemon) {
			this.heal(pokemon.maxhp * 0.33);
			if (pokemon.getNature().minus === 'spd') {
				pokemon.addVolatile('confusion');
			}
		},
		num: 162,
		gen: 3,
		desc: "Restores 33% max HP at 1/4 max HP or less; confuses if -SpD Nature. Single use.",
	},
	"airballoon": {
		id: "airballoon",
		name: "Air Balloon",
		spritenum: 6,
		fling: {
			basePower: 10,
		},
		onStart(target) {
			if (!target.ignoringItem() && !this.field.getPseudoWeather('gravity')) {
				this.add('-item', target, 'Air Balloon');
			}
		},
		// airborneness implemented in sim/pokemon.js:Pokemon#isGrounded
		onAfterDamage(damage, target, source, effect) {
			this.debug('effect: ' + effect.id);
			if (effect.effectType === 'Move' && effect.id !== 'confused') {
				this.add('-enditem', target, 'Air Balloon');
				target.item = '';
				target.itemData = {id: '', target};
				this.runEvent('AfterUseItem', target, null, null, this.dex.getItem('airballoon'));
			}
		},
		onAfterSubDamage(damage, target, source, effect) {
			this.debug('effect: ' + effect.id);
			if (effect.effectType === 'Move' && effect.id !== 'confused') {
				this.add('-enditem', target, 'Air Balloon');
				target.item = '';
				target.itemData = {id: '', target};
				this.runEvent('AfterUseItem', target, null, null, this.dex.getItem('airballoon'));
			}
		},
		num: 541,
		gen: 5,
		desc: "Holder is immune to Ground-type attacks. Pops when holder is hit.",
	},
	"alakazite": {
		id: "alakazite",
		name: "Alakazite",
		spritenum: 579,
		megaStone: "Alakazam-Mega",
		megaEvolves: "Alakazam",
		itemUser: ["Alakazam"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 679,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by an Alakazam, this item allows it to Mega Evolve in battle.",
	},
	"aloraichiumz": {
		id: "aloraichiumz",
		name: "Aloraichium Z",
		spritenum: 655,
		onTakeItem: false,
		zMove: "Stoked Sparksurfer",
		zMoveFrom: "Thunderbolt",
		itemUser: ["Raichu-Alola"],
		num: 803,
		gen: 7,
		isNonstandard: "Past",
		desc: "If held by an Alolan Raichu with Thunderbolt, it can use Stoked Sparksurfer.",
	},
	"altarianite": {
		id: "altarianite",
		name: "Altarianite",
		spritenum: 615,
		megaStone: "Altaria-Mega",
		megaEvolves: "Altaria",
		itemUser: ["Altaria"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 755,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by an Altaria, this item allows it to Mega Evolve in battle.",
	},
	"ampharosite": {
		id: "ampharosite",
		name: "Ampharosite",
		spritenum: 580,
		megaStone: "Ampharos-Mega",
		megaEvolves: "Ampharos",
		itemUser: ["Ampharos"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 658,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by an Ampharos, this item allows it to Mega Evolve in battle.",
	},
	"apicotberry": {
		id: "apicotberry",
		name: "Apicot Berry",
		spritenum: 10,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Ground",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 && pokemon.hasAbility('gluttony'))) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.boost({spd: 1});
		},
		num: 205,
		gen: 3,
		desc: "Raises holder's Sp. Def by 1 stage when at 1/4 max HP or less. Single use.",
	},
	"armorfossil": {
		id: "armorfossil",
		name: "Armor Fossil",
		spritenum: 12,
		fling: {
			basePower: 100,
		},
		num: 104,
		gen: 4,
		desc: "Can be revived into Shieldon.",
	},
	"aspearberry": {
		id: "aspearberry",
		name: "Aspear Berry",
		spritenum: 13,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ice",
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'frz') {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			if (pokemon.status === 'frz') {
				pokemon.cureStatus();
			}
		},
		num: 153,
		gen: 3,
		desc: "Holder is cured if it is frozen. Single use.",
	},
	"assaultvest": {
		id: "assaultvest",
		name: "Assault Vest",
		spritenum: 581,
		fling: {
			basePower: 80,
		},
		onModifySpDPriority: 1,
		onModifySpD(spd) {
			return this.chainModify(1.5);
		},
		onDisableMove(pokemon) {
			for (const moveSlot of pokemon.moveSlots) {
				if (this.dex.getMove(moveSlot.move).category === 'Status') {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
		num: 640,
		gen: 6,
		desc: "Holder's Sp. Def is 1.5x, but it can only select damaging moves.",
	},
	"audinite": {
		id: "audinite",
		name: "Audinite",
		spritenum: 617,
		megaStone: "Audino-Mega",
		megaEvolves: "Audino",
		itemUser: ["Audino"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 757,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by an Audino, this item allows it to Mega Evolve in battle.",
	},
	"babiriberry": {
		id: "babiriberry",
		name: "Babiri Berry",
		spritenum: 17,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Steel",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Steel' && target.getMoveHitData(move).typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 199,
		gen: 4,
		desc: "Halves damage taken from a supereffective Steel-type attack. Single use.",
	},
	"banettite": {
		id: "banettite",
		name: "Banettite",
		spritenum: 582,
		megaStone: "Banette-Mega",
		megaEvolves: "Banette",
		itemUser: ["Banette"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 668,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Banette, this item allows it to Mega Evolve in battle.",
	},
	"beastball": {
		id: "beastball",
		name: "Beast Ball",
		spritenum: 661,
		num: 851,
		gen: 7,
		isPokeball: true,
		desc: "A special Poke Ball designed to catch Ultra Beasts.",
	},
	"beedrillite": {
		id: "beedrillite",
		name: "Beedrillite",
		spritenum: 628,
		megaStone: "Beedrill-Mega",
		megaEvolves: "Beedrill",
		itemUser: ["Beedrill"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 770,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Beedrill, this item allows it to Mega Evolve in battle.",
	},
	"belueberry": {
		id: "belueberry",
		name: "Belue Berry",
		isUnreleased: true,
		spritenum: 21,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Electric",
		},
		onEat: false,
		num: 183,
		gen: 3,
		desc: "Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.",
	},
	"berryjuice": {
		id: "berryjuice",
		name: "Berry Juice",
		spritenum: 22,
		fling: {
			basePower: 30,
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				if (this.runEvent('TryHeal', pokemon) && pokemon.useItem()) {
					this.heal(20);
				}
			}
		},
		num: 43,
		gen: 2,
		desc: "Restores 20 HP when at 1/2 max HP or less. Single use.",
	},
	"berrysweet": {
		id: "berrysweet",
		name: "Berry Sweet",
		spritenum: 0,
		fling: {
			basePower: 10,
		},
		num: 1111,
		gen: 8,
		desc: "Evolves Milcery into Alcremie when held and spun around.",
	},
	"bigroot": {
		id: "bigroot",
		name: "Big Root",
		spritenum: 29,
		fling: {
			basePower: 10,
		},
		onTryHealPriority: 1,
		onTryHeal(damage, target, source, effect) {
			/**@type {{[k: string]: number}} */
			let heals = {drain: 1, leechseed: 1, ingrain: 1, aquaring: 1, strengthsap: 1};
			if (heals[effect.id]) {
				return this.chainModify([0x14CC, 0x1000]);
			}
		},
		num: 296,
		gen: 4,
		desc: "Holder gains 1.3x HP from draining/Aqua Ring/Ingrain/Leech Seed/Strength Sap.",
	},
	"bindingband": {
		id: "bindingband",
		name: "Binding Band",
		spritenum: 31,
		fling: {
			basePower: 30,
		},
		// implemented in statuses
		num: 544,
		gen: 5,
		desc: "Holder's partial-trapping moves deal 1/6 max HP per turn instead of 1/8.",
	},
	"bisharpite": {
		id: "bisharpite",
		name: "Bisharpite",
		spritenum: 709,
		megaStone: "Bisharp-Mega",
		megaEvolves: "Bisharp",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 937,
		gen: 7,
		desc: "If held by a Bisharp, this item allows it to Mega Evolve in battle.",
	},
	"blackbelt": {
		id: "blackbelt",
		name: "Black Belt",
		spritenum: 32,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fighting') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: 241,
		gen: 2,
		desc: "Holder's Fighting-type attacks have 1.2x power.",
	},
	"blacksludge": {
		id: "blacksludge",
		name: "Black Sludge",
		spritenum: 34,
		fling: {
			basePower: 30,
		},
		onResidualOrder: 5,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (this.field.isTerrain('grassyterrain')) return;
			if (pokemon.hasType('Poison')) {
				this.heal(pokemon.baseMaxhp / 16);
			} else {
				this.damage(pokemon.baseMaxhp / 8);
			}
		},
		onTerrain(pokemon) {
			if (!this.field.isTerrain('grassyterrain')) return;
			if (pokemon.hasType('Poison')) {
				this.heal(pokemon.baseMaxhp / 16);
			} else {
				this.damage(pokemon.baseMaxhp / 8);
			}
		},
		num: 281,
		gen: 4,
		desc: "Each turn, if holder is a Poison type, restores 1/16 max HP; loses 1/8 if not.",
	},
	"blackglasses": {
		id: "blackglasses",
		name: "Black Glasses",
		spritenum: 35,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Dark') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: 240,
		gen: 2,
		desc: "Holder's Dark-type attacks have 1.2x power.",
	},
	"blastoisinite": {
		id: "blastoisinite",
		name: "Blastoisinite",
		spritenum: 583,
		megaStone: "Blastoise-Mega",
		megaEvolves: "Blastoise",
		itemUser: ["Blastoise"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 661,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Blastoise, this item allows it to Mega Evolve in battle.",
	},
	"blazikenite": {
		id: "blazikenite",
		name: "Blazikenite",
		spritenum: 584,
		megaStone: "Blaziken-Mega",
		megaEvolves: "Blaziken",
		itemUser: ["Blaziken"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 664,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Blaziken, this item allows it to Mega Evolve in battle.",
	},
	"blueorb": {
		id: "blueorb",
		name: "Blue Orb",
		spritenum: 41,
		onSwitchIn(pokemon) {
			if (pokemon.isActive && pokemon.baseTemplate.species === 'Kyogre') {
				this.insertQueue({pokemon: pokemon, choice: 'runPrimal'});
			}
		},
		onPrimal(pokemon) {
			pokemon.formeChange('Kyogre-Primal', this.effect, true);
		},
		onTakeItem(item, source) {
			if (source.baseTemplate.baseSpecies === 'Kyogre') return false;
			return true;
		},
		itemUser: ["Kyogre"],
		num: 535,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Kyogre, this item triggers its Primal Reversion in battle.",
	},
	"blukberry": {
		id: "blukberry",
		name: "Bluk Berry",
		spritenum: 44,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Fire",
		},
		onEat: false,
		num: 165,
		gen: 3,
		desc: "Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.",
	},
	"blunderpolicy": {
		id: "blunderpolicy",
		name: "Blunder Policy",
		spritenum: 0,
		fling: {
			basePower: 80,
		},
		// Item activation located in scripts.js
		num: 1121,
		gen: 8,
		desc: "If the holder misses because of accuracy, it raises Speed by 2 stages. Single use.",
	},
	"bottlecap": {
		id: "bottlecap",
		name: "Bottle Cap",
		spritenum: 696,
		fling: {
			basePower: 30,
		},
		num: 795,
		gen: 7,
		desc: "Used for Hyper Training. One of a Pokemon's stats is calculated with an IV of 31.",
	},
	"brightpowder": {
		id: "brightpowder",
		name: "Bright Powder",
		spritenum: 51,
		fling: {
			basePower: 10,
		},
		onModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('brightpowder - decreasing accuracy');
			return accuracy * 0.9;
		},
		num: 213,
		gen: 2,
		desc: "The accuracy of attacks against the holder is 0.9x.",
	},
	"buggem": {
		id: "buggem",
		name: "Bug Gem",
		spritenum: 53,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Bug') {
				if (source.useItem()) {
					this.add('-enditem', source, 'Bug Gem', '[from] gem', '[move] ' + move.name);
					source.addVolatile('gem');
				}
			}
		},
		num: 558,
		gen: 5,
		isNonstandard: 'Past',
		desc: "Holder's first successful Bug-type attack will have 1.3x power. Single use.",
	},
	"bugmemory": {
		id: "bugmemory",
		name: "Bug Memory",
		spritenum: 673,
		onMemory: 'Bug',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 773) || pokemon.baseTemplate.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Bug",
		itemUser: ["Silvally-Bug"],
		num: 909,
		gen: 7,
		desc: "Holder's Multi-Attack is Bug type.",
	},
	"buginiumz": {
		id: "buginiumz",
		name: "Buginium Z",
		spritenum: 642,
		onPlate: 'Bug',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Bug",
		forcedForme: "Arceus-Bug",
		num: 787,
		gen: 7,
		isNonstandard: "Past",
		desc: "If holder has a Bug move, this item allows it to use a Bug Z-Move.",
	},
	"burndrive": {
		id: "burndrive",
		name: "Burn Drive",
		spritenum: 54,
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 649) || pokemon.baseTemplate.num === 649) {
				return false;
			}
			return true;
		},
		onDrive: 'Fire',
		forcedForme: "Genesect-Burn",
		itemUser: ["Genesect-Burn"],
		num: 118,
		gen: 5,
		desc: "Holder's Techno Blast is Fire type.",
	},
	"cacturnite": {
		id: "cacturnite",
		name: "Cacturnite",
		spritenum: 710,
		megaStone: "Cacturne-Mega",
		megaEvolves: "Cacturne",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 938,
		gen: 7,
		desc: "If held by a Cacturne, this item allows it to Mega Evolve in battle.",
	},
	"cameruptite": {
		id: "cameruptite",
		name: "Cameruptite",
		spritenum: 625,
		megaStone: "Camerupt-Mega",
		megaEvolves: "Camerupt",
		itemUser: ["Camerupt"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 767,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Camerupt, this item allows it to Mega Evolve in battle.",
	},
	"cellbattery": {
		id: "cellbattery",
		name: "Cell Battery",
		spritenum: 60,
		fling: {
			basePower: 30,
		},
		onAfterDamage(damage, target, source, move) {
			if (move.type === 'Electric' && target.useItem()) {
				this.boost({atk: 1});
			}
		},
		num: 546,
		gen: 5,
		desc: "Raises holder's Attack by 1 if hit by an Electric-type attack. Single use.",
	},
	"charcoal": {
		id: "charcoal",
		name: "Charcoal",
		spritenum: 61,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fire') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: 249,
		gen: 2,
		desc: "Holder's Fire-type attacks have 1.2x power.",
	},
	"charizarditex": {
		id: "charizarditex",
		name: "Charizardite X",
		spritenum: 585,
		megaStone: "Charizard-Mega-X",
		megaEvolves: "Charizard",
		itemUser: ["Charizard"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 660,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Charizard, this item allows it to Mega Evolve in battle.",
	},
	"charizarditey": {
		id: "charizarditey",
		name: "Charizardite Y",
		spritenum: 586,
		megaStone: "Charizard-Mega-Y",
		megaEvolves: "Charizard",
		itemUser: ["Charizard"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 678,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Charizard, this item allows it to Mega Evolve in battle.",
	},
	"chartiberry": {
		id: "chartiberry",
		name: "Charti Berry",
		spritenum: 62,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Rock",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Rock' && target.getMoveHitData(move).typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 195,
		gen: 4,
		desc: "Halves damage taken from a supereffective Rock-type attack. Single use.",
	},
	"chatotite": {
		id: "chatotite",
		name: "Chatotite",
		spritenum: 711,
		megaStone: "Chatot-Mega",
		megaEvolves: "Chatot",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 939,
		gen: 7,
		desc: "If held by a Chatot, this item allows it to Mega Evolve in battle.",
	},
	"cheriberry": {
		id: "cheriberry",
		name: "Cheri Berry",
		spritenum: 63,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Fire",
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'par') {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			if (pokemon.status === 'par') {
				pokemon.cureStatus();
			}
		},
		num: 149,
		gen: 3,
		desc: "Holder cures itself if it is paralyzed. Single use.",
	},
	"cherishball": {
		id: "cherishball",
		name: "Cherish Ball",
		spritenum: 64,
		num: 16,
		gen: 4,
		isPokeball: true,
		desc: "A rare Poke Ball that has been crafted to commemorate an occasion.",
	},
	"chestoberry": {
		id: "chestoberry",
		name: "Chesto Berry",
		spritenum: 65,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Water",
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'slp') {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			if (pokemon.status === 'slp') {
				pokemon.cureStatus();
			}
		},
		num: 150,
		gen: 3,
		desc: "Holder wakes up if it is asleep. Single use.",
	},
	"chilanberry": {
		id: "chilanberry",
		name: "Chilan Berry",
		spritenum: 66,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Normal",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Normal' && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 200,
		gen: 4,
		desc: "Halves damage taken from a Normal-type attack. Single use.",
	},
	"chilldrive": {
		id: "chilldrive",
		name: "Chill Drive",
		spritenum: 67,
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 649) || pokemon.baseTemplate.num === 649) {
				return false;
			}
			return true;
		},
		onDrive: 'Ice',
		forcedForme: "Genesect-Chill",
		itemUser: ["Genesect-Chill"],
		num: 119,
		gen: 5,
		desc: "Holder's Techno Blast is Ice type.",
	},
	"chippedpot": {
		id: "chippedpot",
		name: "Chipped Pot",
		spritenum: 0,
		fling: {
			basePower: 80,
		},
		num: 1254,
		gen: 8,
		desc: "Evolves Sinistea into Polteageist when used.",
	},
	"choiceband": {
		id: "choiceband",
		name: "Choice Band",
		spritenum: 68,
		fling: {
			basePower: 10,
		},
		onStart(pokemon) {
			if (pokemon.volatiles['choicelock']) {
				this.debug('removing choicelock: ' + pokemon.volatiles.choicelock);
			}
			pokemon.removeVolatile('choicelock');
		},
		onModifyMove(move, pokemon) {
			pokemon.addVolatile('choicelock');
		},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			return this.chainModify(1.5);
		},
		isChoice: true,
		num: 220,
		gen: 3,
		desc: "Holder's Attack is 1.5x, but it can only select the first move it executes.",
	},
	"choicescarf": {
		id: "choicescarf",
		name: "Choice Scarf",
		spritenum: 69,
		fling: {
			basePower: 10,
		},
		onStart(pokemon) {
			if (pokemon.volatiles['choicelock']) {
				this.debug('removing choicelock: ' + pokemon.volatiles.choicelock);
			}
			pokemon.removeVolatile('choicelock');
		},
		onModifyMove(move, pokemon) {
			pokemon.addVolatile('choicelock');
		},
		onModifySpe(spe, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			return this.chainModify(1.5);
		},
		isChoice: true,
		num: 287,
		gen: 4,
		desc: "Holder's Speed is 1.5x, but it can only select the first move it executes.",
	},
	"choicespecs": {
		id: "choicespecs",
		name: "Choice Specs",
		spritenum: 70,
		fling: {
			basePower: 10,
		},
		onStart(pokemon) {
			if (pokemon.volatiles['choicelock']) {
				this.debug('removing choicelock: ' + pokemon.volatiles.choicelock);
			}
			pokemon.removeVolatile('choicelock');
		},
		onModifyMove(move, pokemon) {
			pokemon.addVolatile('choicelock');
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			return this.chainModify(1.5);
		},
		isChoice: true,
		num: 297,
		gen: 4,
		desc: "Holder's Sp. Atk is 1.5x, but it can only select the first move it executes.",
	},
	"chopleberry": {
		id: "chopleberry",
		name: "Chople Berry",
		spritenum: 71,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Fighting",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Fighting' && target.getMoveHitData(move).typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 189,
		gen: 4,
		desc: "Halves damage taken from a supereffective Fighting-type attack. Single use.",
	},
	"clawfossil": {
		id: "clawfossil",
		name: "Claw Fossil",
		spritenum: 72,
		fling: {
			basePower: 100,
		},
		num: 100,
		gen: 3,
		desc: "Can be revived into Anorith.",
	},
	"cloversweet": {
		id: "cloversweet",
		name: "Clover Sweet",
		spritenum: 0,
		fling: {
			basePower: 10,
		},
		num: 1112,
		gen: 8,
		desc: "Evolves Milcery into Alcremie when held and spun around.",
	},
	"cobaberry": {
		id: "cobaberry",
		name: "Coba Berry",
		spritenum: 76,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Flying",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Flying' && target.getMoveHitData(move).typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 192,
		gen: 4,
		desc: "Halves damage taken from a supereffective Flying-type attack. Single use.",
	},
	"colburberry": {
		id: "colburberry",
		name: "Colbur Berry",
		spritenum: 78,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Dark",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Dark' && target.getMoveHitData(move).typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 198,
		gen: 4,
		desc: "Halves damage taken from a supereffective Dark-type attack. Single use.",
	},
	"cornnberry": {
		id: "cornnberry",
		name: "Cornn Berry",
		isUnreleased: true,
		spritenum: 81,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Bug",
		},
		onEat: false,
		num: 175,
		gen: 3,
		desc: "Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.",
	},
	"coverfossil": {
		id: "coverfossil",
		name: "Cover Fossil",
		spritenum: 85,
		fling: {
			basePower: 100,
		},
		num: 572,
		gen: 5,
		desc: "Can be revived into Tirtouga.",
	},
	"crackedpot": {
		id: "crackedpot",
		name: "Cracked Pot",
		spritenum: 0,
		fling: {
			basePower: 80,
		},
		num: 1253,
		gen: 8,
		desc: "Evolves Sinistea into Polteageist when used.",
	},
	"crawdite": {
		id: "crawdite",
		name: "Crawdite",
		spritenum: 712,
		megaStone: "Crawdaunt-Mega",
		megaEvolves: "Crawdaunt",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 940,
		gen: 7,
		desc: "If held by a Crawdaunt, this item allows it to Mega Evolve in battle.",
	},
	"cryogonite": {
		id: "cryogonite",
		name: "Cryogonite",
		spritenum: 713,
		megaStone: "Cryogonal-Mega",
		megaEvolves: "Cryogonal",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 941,
		gen: 7,
		desc: "If held by a Cryogonal, this item allows it to Mega Evolve in battle.",
	},
	"crystalpiecearceus": {
		id: "crystalpiecearceus",
		name: "Crystal Piece Arceus",
		spritenum: 702,
		onSwitchIn(pokemon) {
			if (pokemon.isActive && pokemon.baseTemplate.species === 'Arceus') {
				this.insertQueue({pokemon: pokemon, choice: 'runPrimal'});
			}
		},
		onPrimal(pokemon) {
			pokemon.formeChange('Arceus-Primal', this.effect, true);
		},
		onTakeItem(item, source) {
			if (source.baseTemplate.baseSpecies === 'Arceus') return false;
			return true;
		},
		num: 929,
		gen: 7,
		desc: "If held by an Arceus this item triggers its Primal Reversion in battle.",
	},
	"crystalpiecegiratina": {
		id: "crystalpiecegiratina",
		name: "Crystal Piece Giratina",
		spritenum: 702,
		onSwitchIn(pokemon) {
			if (pokemon.isActive && pokemon.baseTemplate.species === 'Giratina') {
				this.insertQueue({pokemon: pokemon, choice: 'runPrimal'});
			}
		},
		onPrimal(pokemon) {
			pokemon.formeChange('Giratina-Primal', this.effect, true);
		},
		onTakeItem(item, source) {
			if (source.baseTemplate.baseSpecies === 'Giratina') return false;
			return true;
		},
		num: 930,
		gen: 7,
		desc: "If held by a Giratina this item triggers its Primal Reversion in battle.",
	},
	"crystalpieceregigigas": {
		id: "crystalpieceregigigas",
		name: "Crystal Piece Regigigas",
		spritenum: 702,
		onSwitchIn(pokemon) {
			if (pokemon.isActive && pokemon.baseTemplate.species === 'Regigigas') {
				this.insertQueue({pokemon: pokemon, choice: 'runPrimal'});
			}
		},
		onPrimal(pokemon) {
			pokemon.formeChange('Regigigas-Primal', this.effect, true);
		},
		onTakeItem(item, source) {
			if (source.baseTemplate.baseSpecies === 'Regigigas') return false;
			return true;
		},
		num: 930,
		gen: 7,
		desc: "If held by a Regigigas this item triggers its Primal Reversion in battle.",
	},
	"custapberry": {
		id: "custapberry",
		name: "Custap Berry",
		spritenum: 86,
		isBerry: true,
		isUnreleased: true,
		naturalGift: {
			basePower: 100,
			type: "Ghost",
		},
		onBeforeTurn(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 && pokemon.hasAbility('gluttony'))) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.add('-activate', pokemon, 'item: Custap Berry', '[consumed]');
			pokemon.addVolatile('custapberry');
		},
		effect: {
			onModifyPriorityPriority: -1,
			onModifyPriority(priority, pokemon) {
				return Math.round(priority) + 0.1;
			},
			duration: 1,
		},
		num: 210,
		gen: 4,
		desc: "Holder moves first in its priority bracket when at 1/4 max HP or less. Single use.",
	},
	"volcaronadeltaarmor": {
		id: "volcaronadeltaarmor",
		name: "Volcarona-Delta Armor",
		spritenum: 707,
		onSwitchIn(pokemon) {
			if (pokemon.isActive && pokemon.baseTemplate.species === 'Volcarona-Delta') {
				this.insertQueue({pokemon: pokemon, choice: 'runPrimal'});
			}
		},
		onPrimal(pokemon) {
			pokemon.formeChange('Volcarona-Delta-Armor', this.effect, true);
		},
		onTakeItem(item, source) {
			if (source.baseTemplate.baseSpecies === 'Volcarona-Delta') return false;
			return true;
		},
		num: 935,
		gen: 7,
		desc: "If held by a Volcarona-Delta this item triggers its Armor in battle.",
	},
	"damprock": {
		id: "damprock",
		name: "Damp Rock",
		spritenum: 88,
		fling: {
			basePower: 60,
		},
		num: 285,
		gen: 4,
		desc: "Holder's use of Rain Dance lasts 8 turns instead of 5.",
	},
	"darkgem": {
		id: "darkgem",
		name: "Dark Gem",
		spritenum: 89,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Dark') {
				if (source.useItem()) {
					this.add('-enditem', source, 'Dark Gem', '[from] gem', '[move] ' + move.name);
					source.addVolatile('gem');
				}
			}
		},
		num: 562,
		gen: 5,
		isNonstandard: 'Past',
		desc: "Holder's first successful Dark-type attack will have 1.3x power. Single use.",
	},
	"darkmemory": {
		id: "darkmemory",
		name: "Dark Memory",
		spritenum: 683,
		onMemory: 'Dark',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 773) || pokemon.baseTemplate.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Dark",
		itemUser: ["Silvally-Dark"],
		num: 919,
		gen: 7,
		desc: "Holder's Multi-Attack is Dark type.",
	},
	"darkiniumz": {
		id: "darkiniumz",
		name: "Darkinium Z",
		spritenum: 646,
		onPlate: 'Dark',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Dark",
		forcedForme: "Arceus-Dark",
		num: 791,
		gen: 7,
		isNonstandard: "Past",
		desc: "If holder has a Dark move, this item allows it to use a Dark Z-Move.",
	},
	"darkrock": {
		id: "darkrock",
		name: "Dark Rock",
		spritenum: 700,
		fling: {
			basePower: 60,
		},
		num: 927,
		gen: 7,
		desc: "Holder's use of New Moon lasts 8 turns instead of 5.",
	},
	"dawnstone": {
		id: "dawnstone",
		name: "Dawn Stone",
		spritenum: 92,
		fling: {
			basePower: 80,
		},
		num: 109,
		gen: 4,
		desc: "Evolves male Kirlia into Gallade and female Snorunt into Froslass when used.",
		shortDesc: "Evolves certain species of Pokemon when used.",
	},
	"decidiumz": {
		id: "decidiumz",
		name: "Decidium Z",
		spritenum: 650,
		onTakeItem: false,
		zMove: "Sinister Arrow Raid",
		zMoveFrom: "Spirit Shackle",
		itemUser: ["Decidueye"],
		num: 798,
		gen: 7,
		isNonstandard: "Past",
		desc: "If held by a Decidueye with Spirit Shackle, it can use Sinister Arrow Raid.",
	},
	"deepseascale": {
		id: "deepseascale",
		name: "Deep Sea Scale",
		spritenum: 93,
		fling: {
			basePower: 30,
		},
		onModifySpDPriority: 2,
		onModifySpD(spd, pokemon) {
			if (pokemon.baseTemplate.species === 'Clamperl' || pokemon.baseTemplate.species === 'Clamperl-Delta') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Clamperl"],
		num: 227,
		gen: 3,
		desc: "If held by a Clamperl, its Sp. Def is doubled. Evolves Clamperl into Gorebyss when traded.",
		shortDesc: "If held by a Clamperl, its Sp. Def is doubled.",
	},
	"deepseatooth": {
		id: "deepseatooth",
		name: "Deep Sea Tooth",
		spritenum: 94,
		fling: {
			basePower: 90,
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.baseTemplate.species === 'Clamperl' || pokemon.baseTemplate.species === 'Clamperl-Delta') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Clamperl"],
		num: 226,
		gen: 3,
		desc: "If held by a Clamperl, its Sp. Atk is doubled. Evolves Clamperl into Huntail when traded.",
		shortDesc: "If held by a Clamperl, its Sp. Atk is doubled.",
	},
	"deltabisharpite": {
		id: "deltabisharpite",
		name: "Delta Bisharpite",
		spritenum: 741,
		megaStone: "Bisharp-Delta-Mega",
		megaEvolves: "Bisharp-Delta",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 969,
		gen: 7,
		desc: "If held by a Bisharp-Delta, this item allows it to Mega Evolve in battle.",
	},
	"deltablastoisinite": {
		id: "deltablastoisinite",
		name: "Delta Blastoisinite",
		spritenum: 742,
		megaStone: "Blastoise-Delta-Mega",
		megaEvolves: "Blastoise-Delta",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 970,
		gen: 7,
		desc: "If held by a Blastoise-Delta, this item allows it to Mega Evolve in battle.",
	},
	"deltacameruptite": {
		id: "deltacameruptite",
		name: "Delta Cameruptite",
		spritenum: 743,
		megaStone: "Camerupt-Delta-Mega",
		megaEvolves: "Camerupt-Delta",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 971,
		gen: 7,
		desc: "If held by a Camerupt-Delta, this item allows it to Mega Evolve in battle.",
	},
	"deltacharizardite": {
		id: "deltacharizardite",
		name: "Delta Charizardite",
		spritenum: 744,
		megaStone: "Charizard-Delta-Mega",
		megaEvolves: "Charizard-Delta",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 972,
		gen: 7,
		desc: "If held by a Charizard-Delta, this item allows it to Mega Evolve in battle.",
	},
	"deltaetigirafarigite": {
		id: "deltaetigirafarigite",
		name: "Delta Etigirafarigite",
		spritenum: 745,
		megaStone: "Girafarig-Delta-Mega",
		megaEvolves: "Girafarig-Delta",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 973,
		gen: 7,
		desc: "If held by a Girafarig-Delta, this item allows it to Mega Evolve in battle.",
	},
	"deltafroslassite": {
		id: "deltafroslassite",
		name: "Delta Froslassite",
		spritenum: 746,
		megaStone: "Froslass-Delta-Mega",
		megaEvolves: "Froslass-Delta",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 974,
		gen: 7,
		desc: "If held by a Froslass-Delta, this item allows it to Mega Evolve in battle.",
	},
	"deltagalladite": {
		id: "deltagalladite",
		name: "Delta Galladite",
		spritenum: 747,
		megaStone: "Gallade-Delta-Mega",
		megaEvolves: "Gallade-Delta",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 975,
		gen: 7,
		desc: "If held by a Gallade-Delta, this item allows it to Mega Evolve in battle.",
	},
	"deltagardevoirite": {
		id: "deltagardevoirite",
		name: "Delta Gardevoirite",
		spritenum: 748,
		megaStone: "Gardevoir-Delta-Mega",
		megaEvolves: "Gardevoir-Delta",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 976,
		gen: 7,
		desc: "If held by a Gardevoir-Delta, this item allows it to Mega Evolve in battle.",
	},
	"deltaglalitite": {
		id: "deltaglalitite",
		name: "Delta Glalitite",
		spritenum: 749,
		megaStone: "Glalie-Delta-Mega",
		megaEvolves: "Glalie-Delta",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 977,
		gen: 7,
		desc: "If held by a Glalie-Delta, this item allows it to Mega Evolve in battle.",
	},
	"deltalopunnite": {
		id: "deltalopunnite",
		name: "Delta Lopunnite",
		spritenum: 750,
		megaStone: "Lopunny-Delta-Mega",
		megaEvolves: "Lopunny-Delta",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 978,
		gen: 7,
		desc: "If held by a Lopunny-Delta, this item allows it to Mega Evolve in battle.",
	},
	"deltalucarionite": {
		id: "deltalucarionite",
		name: "Delta Lucarionite",
		spritenum: 751,
		megaStone: "Lucario-Delta-Mega",
		megaEvolves: "Lucario-Delta",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 979,
		gen: 7,
		desc: "If held by a Lucario-Delta, this item allows it to Mega Evolve in battle.",
	},
	"deltamawilite": {
		id: "deltamawilite",
		name: "Delta Mawilite",
		spritenum: 752,
		megaStone: "Mawile-Delta-Mega",
		megaEvolves: "Mawile-Delta",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 980,
		gen: 7,
		desc: "If held by a Mawile-Delta, this item allows it to Mega Evolve in battle.",
	},
	"deltamedichamite": {
		id: "deltamedichamite",
		name: "Delta Medichamite",
		spritenum: 753,
		megaStone: "Medicham-Delta-Mega",
		megaEvolves: "Medicham-Delta",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 981,
		gen: 7,
		desc: "If held by a Medicham-Delta, this item allows it to Mega Evolve in battle.",
	},
	"deltametagrossiteruin": {
		id: "deltametagrossiteruin",
		name: "Delta Metagrossite Ruin",
		spritenum: 754,
		megaStone: "Metagross-Delta-R-Mega",
		megaEvolves: "Metagross-Delta-R",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 982,
		gen: 7,
		desc: "If held by a Metagross-Delta-Ruin, this item allows it to Mega Evolve in battle.",
	},
	"deltametagrossitespider": {
		id: "deltametagrossitespider",
		name: "Delta Metagrossite Spider",
		spritenum: 755,
		megaStone: "Metagross-Delta-S-Mega",
		megaEvolves: "Metagross-Delta-S",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 983,
		gen: 7,
		desc: "If held by a Metagross-Delta-Spider, this item allows it to Mega Evolve in battle.",
	},
	"deltamilotite": {
		id: "deltamilotite",
		name: "Delta Milotite",
		spritenum: 756,
		megaStone: "Milotic-Delta-Mega",
		megaEvolves: "Milotic-Delta",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 984,
		gen: 7,
		desc: "If held by a Milotic-Delta, this item allows it to Mega Evolve in battle.",
	},
	"deltapidgeotite": {
		id: "deltapidgeotite",
		name: "Delta Pidgeotite",
		spritenum: 757,
		megaStone: "Pidgeot-Delta-Mega",
		megaEvolves: "Pidgeot-Delta",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 985,
		gen: 7,
		desc: "If held by a Pidgeot-Delta, this item allows it to Mega Evolve in battle.",
	},
	"deltasablenite": {
		id: "deltasablenite",
		name: "Delta Sablenite",
		spritenum: 758,
		megaStone: "Sableye-Delta-Mega",
		megaEvolves: "Sableye-Delta",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 986,
		gen: 7,
		desc: "If held by a Sableye-Delta, this item allows it to Mega Evolve in battle.",
	},
	"deltascizorite": {
		id: "deltascizorite",
		name: "Delta Scizorite",
		spritenum: 759,
		megaStone: "Scizor-Delta-Mega",
		megaEvolves: "Scizor-Delta",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 987,
		gen: 7,
		desc: "If held by a Scizor-Delta, this item allows it to Mega Evolve in battle.",
	},
	"deltasunflorite": {
		id: "deltasunflorite",
		name: "Delta Sunflorite",
		spritenum: 760,
		megaStone: "Sunflora-Delta-Mega",
		megaEvolves: "Sunflora-Delta",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 988,
		gen: 7,
		desc: "If held by a Sunflora-Delta, this item allows it to Mega Evolve in battle.",
	},
	"deltatyphlosionite": {
		id: "deltatyphlosionite",
		name: "Delta Typhlosionite",
		spritenum: 761,
		megaStone: "Typhlosion-Delta-Mega",
		megaEvolves: "Typhlosion-Delta",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 989,
		gen: 7,
		desc: "If held by a Typhlosion-Delta, this item allows it to Mega Evolve in battle.",
	},
	"deltavenusaurite": {
		id: "deltavenusaurite",
		name: "Delta Venusaurite",
		spritenum: 762,
		megaStone: "Venusaur-Delta-Mega",
		megaEvolves: "Venusaur-Delta",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 990,
		gen: 7,
		desc: "If held by a Venusaur-Delta, this item allows it to Mega Evolve in battle.",
	},
	"destinyknot": {
		id: "destinyknot",
		name: "Destiny Knot",
		spritenum: 95,
		fling: {
			basePower: 10,
		},
		onAttractPriority: -100,
		onAttract(target, source) {
			this.debug('attract intercepted: ' + target + ' from ' + source);
			if (!source || source === target) return;
			if (!source.volatiles.attract) source.addVolatile('attract', target);
		},
		num: 280,
		gen: 4,
		desc: "If holder becomes infatuated, the other Pokemon also becomes infatuated.",
	},
	"diancite": {
		id: "diancite",
		name: "Diancite",
		spritenum: 624,
		megaStone: "Diancie-Mega",
		megaEvolves: "Diancie",
		itemUser: ["Diancie"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 764,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Diancie, this item allows it to Mega Evolve in battle.",
	},
	"diveball": {
		id: "diveball",
		name: "Dive Ball",
		spritenum: 101,
		num: 7,
		gen: 3,
		isPokeball: true,
		desc: "A Poke Ball that works especially well on Pokemon that live underwater.",
	},
	"domefossil": {
		id: "domefossil",
		name: "Dome Fossil",
		spritenum: 102,
		fling: {
			basePower: 100,
		},
		num: 102,
		gen: 3,
		desc: "Can be revived into Kabuto.",
	},
	"donphanite": {
		id: "donphanite",
		name: "Donphanite",
		spritenum: 714,
		megaStone: "Donphan-Mega",
		megaEvolves: "Donphan",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 942,
		gen: 7,
		desc: "If held by a Donphan, this item allows it to Mega Evolve in battle.",
	},
	"dousedrive": {
		id: "dousedrive",
		name: "Douse Drive",
		spritenum: 103,
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 649) || pokemon.baseTemplate.num === 649) {
				return false;
			}
			return true;
		},
		onDrive: 'Water',
		forcedForme: "Genesect-Douse",
		itemUser: ["Genesect-Douse"],
		num: 116,
		gen: 5,
		desc: "Holder's Techno Blast is Water type.",
	},
	"dracoplate": {
		id: "dracoplate",
		name: "Draco Plate",
		spritenum: 105,
		onPlate: 'Dragon',
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Dragon') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Dragon",
		num: 311,
		gen: 4,
		desc: "Holder's Dragon-type attacks have 1.2x power. Judgment is Dragon type.",
	},
	"dragonfang": {
		id: "dragonfang",
		name: "Dragon Fang",
		spritenum: 106,
		fling: {
			basePower: 70,
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Dragon') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: 250,
		gen: 2,
		desc: "Holder's Dragon-type attacks have 1.2x power.",
	},
	"dragongem": {
		id: "dragongem",
		name: "Dragon Gem",
		spritenum: 107,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Dragon') {
				if (source.useItem()) {
					this.add('-enditem', source, 'Dragon Gem', '[from] gem', '[move] ' + move.name);
					source.addVolatile('gem');
				}
			}
		},
		num: 561,
		gen: 5,
		isNonstandard: 'Past',
		desc: "Holder's first successful Dragon-type attack will have 1.3x power. Single use.",
	},
	"dragonmemory": {
		id: "dragonmemory",
		name: "Dragon Memory",
		spritenum: 682,
		onMemory: 'Dragon',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 773) || pokemon.baseTemplate.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Dragon",
		itemUser: ["Silvally-Dragon"],
		num: 918,
		gen: 7,
		desc: "Holder's Multi-Attack is Dragon type.",
	},
	"dragonscale": {
		id: "dragonscale",
		name: "Dragon Scale",
		spritenum: 108,
		fling: {
			basePower: 30,
		},
		num: 250,
		gen: 2,
		desc: "Evolves Seadra into Kingdra when traded.",
	},
	"dragoniumz": {
		id: "dragoniumz",
		name: "Dragonium Z",
		spritenum: 645,
		onPlate: 'Dragon',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Dragon",
		forcedForme: "Arceus-Dragon",
		num: 790,
		gen: 7,
		isNonstandard: "Past",
		desc: "If holder has a Dragon move, this item allows it to use a Dragon Z-Move.",
	},
	"dreadplate": {
		id: "dreadplate",
		name: "Dread Plate",
		spritenum: 110,
		onPlate: 'Dark',
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Dark') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Dark",
		num: 312,
		gen: 4,
		desc: "Holder's Dark-type attacks have 1.2x power. Judgment is Dark type.",
	},
	"dreamball": {
		id: "dreamball",
		name: "Dream Ball",
		spritenum: 111,
		num: 576,
		gen: 5,
		isPokeball: true,
		desc: "A special Poke Ball that appears out of nowhere in a bag at the Entree Forest.",
	},
	"dubiousdisc": {
		id: "dubiousdisc",
		name: "Dubious Disc",
		spritenum: 113,
		fling: {
			basePower: 50,
		},
		num: 324,
		gen: 4,
		desc: "Evolves Porygon2 into Porygon-Z when traded.",
	},
	"durinberry": {
		id: "durinberry",
		name: "Durin Berry",
		isUnreleased: true,
		spritenum: 114,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Water",
		},
		onEat: false,
		num: 182,
		gen: 3,
		desc: "Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.",
	},
	"duskball": {
		id: "duskball",
		name: "Dusk Ball",
		spritenum: 115,
		num: 13,
		gen: 4,
		isPokeball: true,
		desc: "A Poke Ball that makes it easier to catch wild Pokemon at night or in caves.",
	},
	"duskstone": {
		id: "duskstone",
		name: "Dusk Stone",
		spritenum: 116,
		fling: {
			basePower: 80,
		},
		num: 108,
		gen: 4,
		desc: "Evolves Murkrow into Honchkrow, Misdreavus into Mismagius, Lampent into Chandelure, and Doublade into Aegislash when used.",
		shortDesc: "Evolves certain species of Pokemon when used.",
	},
	"earthplate": {
		id: "earthplate",
		name: "Earth Plate",
		spritenum: 117,
		onPlate: 'Ground',
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Ground') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Ground",
		num: 305,
		gen: 4,
		desc: "Holder's Ground-type attacks have 1.2x power. Judgment is Ground type.",
	},
	"eeviumz": {
		id: "eeviumz",
		name: "Eevium Z",
		spritenum: 657,
		onTakeItem: false,
		zMove: "Extreme Evoboost",
		zMoveFrom: "Last Resort",
		itemUser: ["Eevee"],
		num: 805,
		gen: 7,
		isNonstandard: "Past",
		desc: "If held by an Eevee with Last Resort, it can use Extreme Evoboost.",
	},
	"ejectbutton": {
		id: "ejectbutton",
		name: "Eject Button",
		spritenum: 118,
		fling: {
			basePower: 30,
		},
		onAfterMoveSecondaryPriority: 2,
		onAfterMoveSecondary(target, source, move) {
			if (source && source !== target && target.hp && move && move.category !== 'Status') {
				if (!this.canSwitch(target.side) || target.forceSwitchFlag) return;
				for (const pokemon of this.getAllActive()) {
					if (pokemon.switchFlag === true) return;
				}
				if (target.useItem()) {
					target.switchFlag = true;
					source.switchFlag = false;
				}
			}
		},
		num: 547,
		gen: 5,
		desc: "If holder survives a hit, it immediately switches out to a chosen ally. Single use.",
	},
	"ejectpack": {
		id: "ejectpack",
		name: "Eject Pack",
		spritenum: 0,
		fling: {
			basePower: 50,
		},
		onAfterBoost(boost, target, source, effect) {
			let eject = false;
			for (let i in boost) {
				// @ts-ignore
				if (boost[i] < 0) {
					eject = true;
				}
			}
			if (eject) {
				if (source && target.hp) {
					if (!this.canSwitch(target.side)) return;
					for (const pokemon of this.getAllActive()) {
						if (pokemon.switchFlag === true) return;
					}
					if (target.useItem()) target.switchFlag = true;
				}
			}
		},
		num: 1119,
		gen: 8,
		desc: "When the holder's stats are lowered, it will be switched out of battle.",
	},
	"electirizer": {
		id: "electirizer",
		name: "Electirizer",
		spritenum: 119,
		fling: {
			basePower: 80,
		},
		num: 322,
		gen: 4,
		desc: "Evolves Electabuzz into Electivire when traded.",
	},
	"electricgem": {
		id: "electricgem",
		name: "Electric Gem",
		spritenum: 120,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || ['firepledge', 'grasspledge', 'waterpledge'].includes(move.id)) return;
			if (move.type === 'Electric') {
				if (source.useItem()) {
					this.add('-enditem', source, 'Electric Gem', '[from] gem', '[move] ' + move.name);
					source.addVolatile('gem');
				}
			}
		},
		num: 550,
		gen: 5,
		isNonstandard: 'Past',
		desc: "Holder's first successful Electric-type attack will have 1.3x power. Single use.",
	},
	"electricmemory": {
		id: "electricmemory",
		name: "Electric Memory",
		spritenum: 679,
		onMemory: 'Electric',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 773) || pokemon.baseTemplate.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Electric",
		itemUser: ["Silvally-Electric"],
		num: 915,
		gen: 7,
		desc: "Holder's Multi-Attack is Electric type.",
	},
	"electricseed": {
		id: "electricseed",
		name: "Electric Seed",
		spritenum: 664,
		fling: {
			basePower: 10,
		},
		onStart(pokemon) {
			if (!pokemon.ignoringItem() && this.field.isTerrain('electricterrain') && pokemon.useItem()) {
				this.boost({def: 1});
			}
		},
		onAnyTerrainStart() {
			const pokemon = this.effectData.target;
			if (this.field.isTerrain('electricterrain') && pokemon.useItem()) {
				this.boost({def: 1}, pokemon);
			}
		},
		num: 881,
		gen: 7,
		desc: "If the terrain is Electric Terrain, raises holder's Defense by 1 stage. Single use.",
	},
	"electriumz": {
		id: "electriumz",
		name: "Electrium Z",
		spritenum: 634,
		onPlate: 'Electric',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Electric",
		forcedForme: "Arceus-Electric",
		num: 779,
		gen: 7,
		isNonstandard: "Past",
		desc: "If holder has an Electric move, this item allows it to use an Electric Z-Move.",
	},
	"energypowder": {
		id: "energypowder",
		name: "Energy Powder",
		spritenum: 123,
		fling: {
			basePower: 30,
		},
		num: 34,
		gen: 2,
		desc: "Restores 50 HP to one Pokemon but lowers Happiness.",
	},
	"enigmaberry": {
		id: "enigmaberry",
		name: "Enigma Berry",
		spritenum: 124,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Bug",
		},
		onHit(target, source, move) {
			if (move && target.getMoveHitData(move).typeMod > 0) {
				if (target.eatItem()) {
					this.heal(target.baseMaxhp / 4);
				}
			}
		},
		onTryEatItem(item, pokemon) {
			if (!this.runEvent('TryHeal', pokemon)) return false;
		},
		onEat() { },
		num: 208,
		gen: 3,
		desc: "Restores 1/4 max HP after holder is hit by a supereffective move. Single use.",
	},
	"etigirafarigite": {
		id: "etigirafarigite",
		name: "Etigirafarigite",
		spritenum: 716,
		megaStone: "Girafarig-Mega",
		megaEvolves: "Girafarig",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 944,
		gen: 7,
		desc: "If held by a Girafarig, this item allows it to Mega Evolve in battle.",
	},
	"eviolite": {
		id: "eviolite",
		name: "Eviolite",
		spritenum: 130,
		fling: {
			basePower: 40,
		},
		onModifyDefPriority: 2,
		onModifyDef(def, pokemon) {
			if (pokemon.baseTemplate.nfe) {
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 2,
		onModifySpD(spd, pokemon) {
			if (pokemon.baseTemplate.nfe) {
				return this.chainModify(1.5);
			}
		},
		num: 538,
		gen: 5,
		desc: "If holder's species can evolve, its Defense and Sp. Def are 1.5x.",
	},
	"expertbelt": {
		id: "expertbelt",
		name: "Expert Belt",
		spritenum: 132,
		fling: {
			basePower: 10,
		},
		onModifyDamage(damage, source, target, move) {
			if (move && target.getMoveHitData(move).typeMod > 0) {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: 268,
		gen: 4,
		desc: "Holder's attacks that are super effective against the target do 1.2x damage.",
	},
	"fairiumz": {
		id: "fairiumz",
		name: "Fairium Z",
		spritenum: 648,
		onPlate: 'Fairy',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Fairy",
		forcedForme: "Arceus-Fairy",
		num: 793,
		gen: 7,
		isNonstandard: "Past",
		desc: "If holder has a Fairy move, this item allows it to use a Fairy Z-Move.",
	},
	"fairygem": {
		id: "fairygem",
		name: "Fairy Gem",
		spritenum: 611,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Fairy') {
				if (source.useItem()) {
					this.add('-enditem', source, 'Fairy Gem', '[from] gem', '[move] ' + move.name);
					source.addVolatile('gem');
				}
			}
		},
		num: 715,
		gen: 6,
		isNonstandard: 'Past',
		desc: "Holder's first successful Fairy-type attack will have 1.3x power. Single use.",
	},
	"fairymemory": {
		id: "fairymemory",
		name: "Fairy Memory",
		spritenum: 684,
		onMemory: 'Fairy',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 773) || pokemon.baseTemplate.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Fairy",
		itemUser: ["Silvally-Fairy"],
		num: 920,
		gen: 7,
		desc: "Holder's Multi-Attack is Fairy type.",
	},
	"fastball": {
		id: "fastball",
		name: "Fast Ball",
		spritenum: 137,
		num: 492,
		gen: 2,
		isPokeball: true,
		desc: "A Poke Ball that makes it easier to catch Pokemon which are quick to run away.",
	},
	"feraligatite": {
		id: "feraligatite",
		name: "Feraligatite",
		spritenum: 717,
		megaStone: "Feraligatr-Mega",
		megaEvolves: "Feraligatr",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 945,
		gen: 7,
		desc: "If held by a Feraligatr, this item allows it to Mega Evolve in battle.",
	},
	"fightinggem": {
		id: "fightinggem",
		name: "Fighting Gem",
		spritenum: 139,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Fighting') {
				if (source.useItem()) {
					this.add('-enditem', source, 'Fighting Gem', '[from] gem', '[move] ' + move.name);
					source.addVolatile('gem');
				}
			}
		},
		num: 553,
		gen: 5,
		isNonstandard: 'Past',
		desc: "Holder's first successful Fighting-type attack will have 1.3x power. Single use.",
	},
	"fightingmemory": {
		id: "fightingmemory",
		name: "Fighting Memory",
		spritenum: 668,
		onMemory: 'Fighting',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 773) || pokemon.baseTemplate.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Fighting",
		itemUser: ["Silvally-Fighting"],
		num: 904,
		gen: 7,
		desc: "Holder's Multi-Attack is Fighting type.",
	},
	"fightiniumz": {
		id: "fightiniumz",
		name: "Fightinium Z",
		spritenum: 637,
		onPlate: 'Fighting',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Fighting",
		forcedForme: "Arceus-Fighting",
		num: 782,
		gen: 7,
		isNonstandard: "Past",
		desc: "If holder has a Fighting move, this item allows it to use a Fighting Z-Move.",
	},
	"figyberry": {
		id: "figyberry",
		name: "Figy Berry",
		spritenum: 140,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Bug",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 && pokemon.hasAbility('gluttony'))) {
				pokemon.eatItem();
			}
		},
		onTryEatItem(item, pokemon) {
			if (!this.runEvent('TryHeal', pokemon)) return false;
		},
		onEat(pokemon) {
			this.heal(pokemon.maxhp * 0.33);
			if (pokemon.getNature().minus === 'atk') {
				pokemon.addVolatile('confusion');
			}
		},
		num: 159,
		gen: 3,
		desc: "Restores 33% max HP at 1/4 max HP or less; confuses if -Atk Nature. Single use.",
	},
	"firegem": {
		id: "firegem",
		name: "Fire Gem",
		spritenum: 141,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || ['firepledge', 'grasspledge', 'waterpledge'].includes(move.id)) return;
			if (move.type === 'Fire') {
				if (source.useItem()) {
					this.add('-enditem', source, 'Fire Gem', '[from] gem', '[move] ' + move.name);
					source.addVolatile('gem');
				}
			}
		},
		num: 548,
		gen: 5,
		isNonstandard: 'Past',
		desc: "Holder's first successful Fire-type attack will have 1.3x power. Single use.",
	},
	"firememory": {
		id: "firememory",
		name: "Fire Memory",
		spritenum: 676,
		onMemory: 'Fire',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 773) || pokemon.baseTemplate.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Fire",
		itemUser: ["Silvally-Fire"],
		num: 912,
		gen: 7,
		desc: "Holder's Multi-Attack is Fire type.",
	},
	"firestone": {
		id: "firestone",
		name: "Fire Stone",
		spritenum: 142,
		fling: {
			basePower: 30,
		},
		num: 82,
		gen: 1,
		desc: "Evolves Vulpix into Ninetales, Growlithe into Arcanine, Eevee into Flareon, and Pansear into Simisear when used.",
		shortDesc: "Evolves certain species of Pokemon when used.",
	},
	"firiumz": {
		id: "firiumz",
		name: "Firium Z",
		spritenum: 632,
		onPlate: 'Fire',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Fire",
		forcedForme: "Arceus-Fire",
		num: 777,
		gen: 7,
		isNonstandard: "Past",
		desc: "If holder has a Fire move, this item allows it to use a Fire Z-Move.",
	},
	"fistplate": {
		id: "fistplate",
		name: "Fist Plate",
		spritenum: 143,
		onPlate: 'Fighting',
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fighting') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Fighting",
		num: 303,
		gen: 4,
		desc: "Holder's Fighting-type attacks have 1.2x power. Judgment is Fighting type.",
	},
	"flameorb": {
		id: "flameorb",
		name: "Flame Orb",
		spritenum: 145,
		fling: {
			basePower: 30,
			status: 'brn',
		},
		onResidualOrder: 26,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			pokemon.trySetStatus('brn', pokemon);
		},
		num: 273,
		gen: 4,
		desc: "At the end of every turn, this item attempts to burn the holder.",
	},
	"flameplate": {
		id: "flameplate",
		name: "Flame Plate",
		spritenum: 146,
		onPlate: 'Fire',
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fire') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Fire",
		num: 298,
		gen: 4,
		desc: "Holder's Fire-type attacks have 1.2x power. Judgment is Fire type.",
	},
	"floatstone": {
		id: "floatstone",
		name: "Float Stone",
		spritenum: 147,
		fling: {
			basePower: 30,
		},
		onModifyWeight(weighthg) {
			return this.trunc(weighthg / 2);
		},
		num: 539,
		gen: 5,
		desc: "Holder's weight is halved.",
	},
	"flowersweet": {
		id: "flowersweet",
		name: "Flower Sweet",
		spritenum: 10,
		fling: {
			basePower: 0,
		},
		num: 1113,
		gen: 8,
		desc: "Evolves Milcery into Alcremie when held and spun around.",
	},
	"flygonarmor": {
		id: "flygonarmor",
		name: "Flygon Armor",
		spritenum: 704,
		onSwitchIn(pokemon) {
			if (pokemon.isActive && pokemon.baseTemplate.species === 'Flygon') {
				this.insertQueue({pokemon: pokemon, choice: 'runPrimal'});
			}
		},
		onPrimal(pokemon) {
			pokemon.formeChange('Flygon-Armor', this.effect, true);
		},
		onTakeItem(item, source) {
			if (source.baseTemplate.baseSpecies === 'Flygon') return false;
			return true;
		},
		num: 932,
		gen: 7,
		desc: "If held by a Flygon this item triggers its Armor in battle.",
	},
	"flygonite": {
		id: "flygonite",
		name: "Flygonite",
		spritenum: 718,
		megaStone: "Flygon-Mega",
		megaEvolves: "Flygon",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 946,
		gen: 7,
		desc: "If held by a Flygon, this item allows it to Mega Evolve in battle.",
	},
	"flyinggem": {
		id: "flyinggem",
		name: "Flying Gem",
		spritenum: 149,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Flying') {
				if (source.useItem()) {
					this.add('-enditem', source, 'Flying Gem', '[from] gem', '[move] ' + move.name);
					source.addVolatile('gem');
				}
			}
		},
		num: 556,
		gen: 5,
		isNonstandard: 'Past',
		desc: "Holder's first successful Flying-type attack will have 1.3x power. Single use.",
	},
	"flyingmemory": {
		id: "flyingmemory",
		name: "Flying Memory",
		spritenum: 669,
		onMemory: 'Flying',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 773) || pokemon.baseTemplate.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Flying",
		itemUser: ["Silvally-Flying"],
		num: 905,
		gen: 7,
		desc: "Holder's Multi-Attack is Flying type.",
	},
	"flyiniumz": {
		id: "flyiniumz",
		name: "Flyinium Z",
		spritenum: 640,
		onPlate: 'Flying',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Flying",
		forcedForme: "Arceus-Flying",
		num: 785,
		gen: 7,
		isNonstandard: "Past",
		desc: "If holder has a Flying move, this item allows it to use a Flying Z-Move.",
	},
	"focusband": {
		id: "focusband",
		name: "Focus Band",
		spritenum: 150,
		fling: {
			basePower: 10,
		},
		onDamage(damage, target, source, effect) {
			if (this.randomChance(1, 10) && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add("-activate", target, "item: Focus Band");
				return target.hp - 1;
			}
		},
		num: 230,
		gen: 2,
		desc: "Holder has a 10% chance to survive an attack that would KO it with 1 HP.",
	},
	"focussash": {
		id: "focussash",
		name: "Focus Sash",
		spritenum: 151,
		fling: {
			basePower: 10,
		},
		onDamage(damage, target, source, effect) {
			if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
				if (target.useItem()) {
					return target.hp - 1;
				}
			}
		},
		num: 275,
		gen: 4,
		desc: "If holder's HP is full, will survive an attack that would KO it with 1 HP. Single use.",
	},
	"fossilizedbird": {
		id: "fossilizedbird",
		name: "Fossilized Bird",
		spritenum: 0,
		fling: {
			basePower: 100,
		},
		num: 1105,
		gen: 8,
		desc: "Can be revived into Arctovish with Fossilized Fish or Arctozolt with Fossilized Dino.",
		shortDesc: "Can be combined with certain fossils.",
	},
	"fossilizeddino": {
		id: "fossilizeddino",
		name: "Fossilized Dino",
		spritenum: 0,
		fling: {
			basePower: 100,
		},
		num: 1108,
		gen: 8,
		desc: "Can be revived into Dracozolt with Fossilized Drake or Arctozolt with Fossilized Bird.",
		shortDesc: "Can be combined with certain fossils.",
	},
	"fossilizeddrake": {
		id: "fossilizeddrake",
		name: "Fossilized Drake",
		spritenum: 0,
		fling: {
			basePower: 100,
		},
		num: 1107,
		gen: 8,
		desc: "Can be revived into Dracozolt with Fossilized Dino or Dracovish with Fossilized Fish.",
		shortDesc: "Can be combined with certain fossils.",
	},
	"fossilizedfish": {
		id: "fossilizedfish",
		name: "Fossilized Fish",
		spritenum: 0,
		fling: {
			basePower: 100,
		},
		num: 1106,
		gen: 8,
		desc: "Can be revived into Dracovish with Fossilized Drake or Arctovish with Fossilized Bird.",
		shortDesc: "Can be combined with certain fossils.",
	},
	"friendball": {
		id: "friendball",
		name: "Friend Ball",
		spritenum: 153,
		num: 497,
		gen: 2,
		isPokeball: true,
		desc: "A Poke Ball that makes caught Pokemon more friendly.",
	},
	"frosslassite": {
		id: "froslassite",
		name: "Froslassite",
		spritenum: 719,
		megaStone: "Froslass-Mega",
		megaEvolves: "Froslass",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 947,
		gen: 7,
		desc: "If held by a Froslass, this item allows it to Mega Evolve in battle.",
	},
	"fullincense": {
		id: "fullincense",
		name: "Full Incense",
		spritenum: 155,
		fling: {
			basePower: 10,
		},
		onModifyPriority(priority, pokemon) {
			return Math.round(priority) - 0.1;
		},
		num: 316,
		gen: 4,
		desc: "Holder moves last in its priority bracket.",
	},
	"galladite": {
		id: "galladite",
		name: "Galladite",
		spritenum: 616,
		megaStone: "Gallade-Mega",
		megaEvolves: "Gallade",
		itemUser: ["Gallade"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 756,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Gallade, this item allows it to Mega Evolve in battle.",
	},
	"ganlonberry": {
		id: "ganlonberry",
		name: "Ganlon Berry",
		spritenum: 158,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Ice",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 && pokemon.hasAbility('gluttony'))) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.boost({def: 1});
		},
		num: 202,
		gen: 3,
		desc: "Raises holder's Defense by 1 stage when at 1/4 max HP or less. Single use.",
	},
	"garchompite": {
		id: "garchompite",
		name: "Garchompite",
		spritenum: 589,
		megaStone: "Garchomp-Mega",
		megaEvolves: "Garchomp",
		itemUser: ["Garchomp"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 683,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Garchomp, this item allows it to Mega Evolve in battle.",
	},
	"gardevoirite": {
		id: "gardevoirite",
		name: "Gardevoirite",
		spritenum: 587,
		megaStone: "Gardevoir-Mega",
		megaEvolves: "Gardevoir",
		itemUser: ["Gardevoir"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 657,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Gardevoir, this item allows it to Mega Evolve in battle.",
	},
	"gengarite": {
		id: "gengarite",
		name: "Gengarite",
		spritenum: 588,
		megaStone: "Gengar-Mega",
		megaEvolves: "Gengar",
		itemUser: ["Gengar"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 656,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Gengar, this item allows it to Mega Evolve in battle.",
	},
	"ghostgem": {
		id: "ghostgem",
		name: "Ghost Gem",
		spritenum: 161,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Ghost') {
				if (source.useItem()) {
					this.add('-enditem', source, 'Ghost Gem', '[from] gem', '[move] ' + move.name);
					source.addVolatile('gem');
				}
			}
		},
		num: 560,
		gen: 5,
		isNonstandard: 'Past',
		desc: "Holder's first successful Ghost-type attack will have 1.3x power. Single use.",
	},
	"ghostmemory": {
		id: "ghostmemory",
		name: "Ghost Memory",
		spritenum: 674,
		onMemory: 'Ghost',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 773) || pokemon.baseTemplate.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Ghost",
		itemUser: ["Silvally-Ghost"],
		num: 910,
		gen: 7,
		desc: "Holder's Multi-Attack is Ghost type.",
	},
	"ghostiumz": {
		id: "ghostiumz",
		name: "Ghostium Z",
		spritenum: 644,
		onPlate: 'Ghost',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Ghost",
		forcedForme: "Arceus-Ghost",
		num: 789,
		gen: 7,
		isNonstandard: "Past",
		desc: "If holder has a Ghost move, this item allows it to use a Ghost Z-Move.",
	},
	"glalitite": {
		id: "glalitite",
		name: "Glalitite",
		spritenum: 623,
		megaStone: "Glalie-Mega",
		megaEvolves: "Glalie",
		itemUser: ["Glalie"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 763,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Glalie, this item allows it to Mega Evolve in battle.",
	},
	"goldbottlecap": {
		id: "goldbottlecap",
		name: "Gold Bottle Cap",
		spritenum: 697,
		fling: {
			basePower: 30,
		},
		num: 796,
		gen: 7,
		desc: "Used for Hyper Training. All of a Pokemon's stats are calculated with an IV of 31.",
	},
		"gothitite": {
			id: "gothitite",
			name: "Gothitite",
			spritenum: 720,
			megaStone: "Gothitelle-Mega",
			megaEvolves: "Gothitelle",
			onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
			},
			num: 948,
			gen: 7,
			desc: "If held by a Gothitelle, this item allows it to Mega Evolve in battle.",
		},
	"grassgem": {
		id: "grassgem",
		name: "Grass Gem",
		spritenum: 172,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || ['firepledge', 'grasspledge', 'waterpledge'].includes(move.id)) return;
			if (move.type === 'Grass') {
				if (source.useItem()) {
					this.add('-enditem', source, 'Grass Gem', '[from] gem', '[move] ' + move.name);
					source.addVolatile('gem');
				}
			}
		},
		num: 551,
		gen: 5,
		isNonstandard: 'Past',
		desc: "Holder's first successful Grass-type attack will have 1.3x power. Single use.",
	},
	"grassmemory": {
		id: "grassmemory",
		name: "Grass Memory",
		spritenum: 678,
		onMemory: 'Grass',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 773) || pokemon.baseTemplate.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Grass",
		itemUser: ["Silvally-Grass"],
		num: 914,
		gen: 7,
		desc: "Holder's Multi-Attack is Grass type.",
	},
	"grassiumz": {
		id: "grassiumz",
		name: "Grassium Z",
		spritenum: 635,
		onPlate: 'Grass',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Grass",
		forcedForme: "Arceus-Grass",
		num: 780,
		gen: 7,
		isNonstandard: "Past",
		desc: "If holder has a Grass move, this item allows it to use a Grass Z-Move.",
	},
	"grassyseed": {
		id: "grassyseed",
		name: "Grassy Seed",
		spritenum: 667,
		fling: {
			basePower: 10,
		},
		onStart(pokemon) {
			if (!pokemon.ignoringItem() && this.field.isTerrain('grassyterrain') && pokemon.useItem()) {
				this.boost({def: 1});
			}
		},
		onAnyTerrainStart() {
			const pokemon = this.effectData.target;
			if (this.field.isTerrain('grassyterrain') && pokemon.useItem()) {
				this.boost({def: 1}, pokemon);
			}
		},
		num: 884,
		gen: 7,
		desc: "If the terrain is Grassy Terrain, raises holder's Defense by 1 stage. Single use.",
	},
	"greatball": {
		id: "greatball",
		name: "Great Ball",
		spritenum: 174,
		num: 3,
		gen: 1,
		isPokeball: true,
		desc: "A high-performance Ball that provides a higher catch rate than a Poke Ball.",
	},
	"grepaberry": {
		id: "grepaberry",
		name: "Grepa Berry",
		spritenum: 178,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Flying",
		},
		onEat: false,
		num: 173,
		gen: 3,
		desc: "Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.",
	},
	"gripclaw": {
		id: "gripclaw",
		name: "Grip Claw",
		spritenum: 179,
		fling: {
			basePower: 90,
		},
		// implemented in statuses
		num: 286,
		gen: 4,
		desc: "Holder's partial-trapping moves always last 7 turns.",
	},
	"griseousorb": {
		id: "griseousorb",
		name: "Griseous Orb",
		spritenum: 180,
		fling: {
			basePower: 60,
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (user.baseTemplate.num === 487 && (move.type === 'Ghost' || move.type === 'Dragon')) {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 487) || pokemon.baseTemplate.num === 487) {
				return false;
			}
			return true;
		},
		forcedForme: "Giratina-Origin",
		itemUser: ["Giratina-Origin"],
		num: 112,
		gen: 4,
		desc: "If held by a Giratina, its Ghost- and Dragon-type attacks have 1.2x power.",
	},
	"groundgem": {
		id: "groundgem",
		name: "Ground Gem",
		spritenum: 182,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Ground') {
				if (source.useItem()) {
					this.add('-enditem', source, 'Ground Gem', '[from] gem', '[move] ' + move.name);
					source.addVolatile('gem');
				}
			}
		},
		num: 555,
		gen: 5,
		isNonstandard: 'Past',
		desc: "Holder's first successful Ground-type attack will have 1.3x power. Single use.",
	},
	"groundmemory": {
		id: "groundmemory",
		name: "Ground Memory",
		spritenum: 671,
		onMemory: 'Ground',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 773) || pokemon.baseTemplate.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Ground",
		itemUser: ["Silvally-Ground"],
		num: 907,
		gen: 7,
		desc: "Holder's Multi-Attack is Ground type.",
	},
	"groundiumz": {
		id: "groundiumz",
		name: "Groundium Z",
		spritenum: 639,
		onPlate: 'Ground',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Ground",
		forcedForme: "Arceus-Ground",
		num: 784,
		gen: 7,
		isNonstandard: "Past",
		desc: "If holder has a Ground move, this item allows it to use a Ground Z-Move.",
	},
	"gyaradosite": {
		id: "gyaradosite",
		name: "Gyaradosite",
		spritenum: 589,
		megaStone: "Gyarados-Mega",
		megaEvolves: "Gyarados",
		itemUser: ["Gyarados"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 676,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Gyarados, this item allows it to Mega Evolve in battle.",
	},
	"habanberry": {
		id: "habanberry",
		name: "Haban Berry",
		spritenum: 185,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Dragon",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Dragon' && target.getMoveHitData(move).typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 197,
		gen: 4,
		desc: "Halves damage taken from a supereffective Dragon-type attack. Single use.",
	},
	"hardstone": {
		id: "hardstone",
		name: "Hard Stone",
		spritenum: 187,
		fling: {
			basePower: 100,
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Rock') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: 238,
		gen: 2,
		desc: "Holder's Rock-type attacks have 1.2x power.",
	},
	"haxorite": {
		id: "haxorite",
		name: "Haxorite",
		spritenum: 721,
		megaStone: "Haxorus-Mega",
		megaEvolves: "Haxorus",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 949,
		gen: 7,
		desc: "If held by a Haxorus, this item allows it to Mega Evolve in battle.",
	},
	"healball": {
		id: "healball",
		name: "Heal Ball",
		spritenum: 188,
		num: 14,
		gen: 4,
		isPokeball: true,
		desc: "A remedial Poke Ball that restores the caught Pokemon's HP and status problem.",
	},
	"heatrock": {
		id: "heatrock",
		name: "Heat Rock",
		spritenum: 193,
		fling: {
			basePower: 60,
		},
		num: 284,
		gen: 4,
		desc: "Holder's use of Sunny Day lasts 8 turns instead of 5.",
	},
	"heavyball": {
		id: "heavyball",
		name: "Heavy Ball",
		spritenum: 194,
		num: 495,
		gen: 2,
		isPokeball: true,
		desc: "A Poke Ball for catching very heavy Pokemon.",
	},
	"heavydutyboots": {
		id: "heavydutyboots",
		name: "Heavy-Duty Boots",
		spritenum: 0,
		fling: {
			basePower: 80,
		},
		num: 1120,
		gen: 8,
		desc: "Prevents the effects of traps set on the battlefield.",
		// Hazard Immunity implemented in moves.js
	},
	"helixfossil": {
		id: "helixfossil",
		name: "Helix Fossil",
		spritenum: 195,
		fling: {
			basePower: 100,
		},
		num: 101,
		gen: 3,
		desc: "Can be revived into Omanyte.",
	},
	"heracronite": {
		id: "heracronite",
		name: "Heracronite",
		spritenum: 590,
		megaStone: "Heracross-Mega",
		megaEvolves: "Heracross",
		itemUser: ["Heracross"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 680,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Heracross, this item allows it to Mega Evolve in battle.",
	},
	"hondewberry": {
		id: "hondewberry",
		name: "Hondew Berry",
		spritenum: 213,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Ground",
		},
		onEat: false,
		num: 172,
		gen: 3,
		desc: "Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.",
	},
	"houndoominite": {
		id: "houndoominite",
		name: "Houndoominite",
		spritenum: 591,
		megaStone: "Houndoom-Mega",
		megaEvolves: "Houndoom",
		itemUser: ["Houndoom"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 666,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Houndoom, this item allows it to Mega Evolve in battle.",
	},
	"hydreigonite": {
		id: "hydreigonite",
		name: "Hydreigonite",
		spritenum: 722,
		megaStone: "Hydreigon-Mega",
		megaEvolves: "Hydreigon",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 950,
		gen: 7,
		desc: "If held by a Hydreigon, this item allows it to Mega Evolve in battle.",
	},
	"iapapaberry": {
		id: "iapapaberry",
		name: "Iapapa Berry",
		spritenum: 217,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Dark",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 && pokemon.hasAbility('gluttony'))) {
				pokemon.eatItem();
			}
		},
		onTryEatItem(item, pokemon) {
			if (!this.runEvent('TryHeal', pokemon)) return false;
		},
		onEat(pokemon) {
			this.heal(pokemon.maxhp * 0.33);
			if (pokemon.getNature().minus === 'def') {
				pokemon.addVolatile('confusion');
			}
		},
		num: 163,
		gen: 3,
		desc: "Restores 33% max HP at 1/4 max HP or less; confuses if -Def Nature. Single use.",
	},
	"icegem": {
		id: "icegem",
		name: "Ice Gem",
		spritenum: 218,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Ice') {
				if (source.useItem()) {
					this.add('-enditem', source, 'Ice Gem', '[from] gem', '[move] ' + move.name);
					source.addVolatile('gem');
				}
			}
		},
		num: 552,
		gen: 5,
		isNonstandard: 'Past',
		desc: "Holder's first successful Ice-type attack will have 1.3x power. Single use.",
	},
	"icememory": {
		id: "icememory",
		name: "Ice Memory",
		spritenum: 681,
		onMemory: 'Ice',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 773) || pokemon.baseTemplate.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Ice",
		itemUser: ["Silvally-Ice"],
		num: 917,
		gen: 7,
		desc: "Holder's Multi-Attack is Ice type.",
	},
	"icestone": {
		id: "icestone",
		name: "Ice Stone",
		spritenum: 693,
		fling: {
			basePower: 30,
		},
		num: 849,
		gen: 7,
		desc: "Evolves Alolan Sandshrew into Alolan Sandslash, Alolan Vulpix into Alolan Ninetales, Eevee into Glaceon, and Galarian Darumaka into Galarian Darmanitan when used.",
		shortDesc: "Evolves certain species of Pokemon when used.",
	},
	"icicleplate": {
		id: "icicleplate",
		name: "Icicle Plate",
		spritenum: 220,
		onPlate: 'Ice',
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Ice') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Ice",
		num: 302,
		gen: 4,
		desc: "Holder's Ice-type attacks have 1.2x power. Judgment is Ice type.",
	},
	"iciumz": {
		id: "iciumz",
		name: "Icium Z",
		spritenum: 636,
		onPlate: 'Ice',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Ice",
		forcedForme: "Arceus-Ice",
		num: 781,
		gen: 7,
		isNonstandard: "Past",
		desc: "If holder has an Ice move, this item allows it to use an Ice Z-Move.",
	},
	"icyrock": {
		id: "icyrock",
		name: "Icy Rock",
		spritenum: 221,
		fling: {
			basePower: 40,
		},
		num: 282,
		gen: 4,
		desc: "Holder's use of Hail lasts 8 turns instead of 5.",
	},
	"inciniumz": {
		id: "inciniumz",
		name: "Incinium Z",
		spritenum: 651,
		onTakeItem: false,
		zMove: "Malicious Moonsault",
		zMoveFrom: "Darkest Lariat",
		itemUser: ["Incineroar"],
		num: 799,
		gen: 7,
		isNonstandard: "Past",
		desc: "If held by an Incineroar with Darkest Lariat, it can use Malicious Moonsault.",
	},
	"insectplate": {
		id: "insectplate",
		name: "Insect Plate",
		spritenum: 223,
		onPlate: 'Bug',
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Bug') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Bug",
		num: 308,
		gen: 4,
		desc: "Holder's Bug-type attacks have 1.2x power. Judgment is Bug type.",
	},
	"ironball": {
		id: "ironball",
		name: "Iron Ball",
		spritenum: 224,
		fling: {
			basePower: 130,
		},
		onEffectiveness(typeMod, target, type, move) {
			if (!target) return;
			if (target.volatiles['ingrain'] || target.volatiles['smackdown'] || this.field.getPseudoWeather('gravity')) return;
			if (move.type === 'Ground' && target.hasType('Flying')) return 0;
		},
		// airborneness negation implemented in sim/pokemon.js:Pokemon#isGrounded
		onModifySpe(spe) {
			return this.chainModify(0.5);
		},
		num: 278,
		gen: 4,
		desc: "Holder is grounded, Speed halved. If Flying type, takes neutral Ground damage.",
	},
	"ironplate": {
		id: "ironplate",
		name: "Iron Plate",
		spritenum: 225,
		onPlate: 'Steel',
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Steel') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Steel",
		num: 313,
		gen: 4,
		desc: "Holder's Steel-type attacks have 1.2x power. Judgment is Steel type.",
	},
	"jabocaberry": {
		id: "jabocaberry",
		name: "Jaboca Berry",
		spritenum: 230,
		isBerry: true,
		isUnreleased: true,
		naturalGift: {
			basePower: 100,
			type: "Dragon",
		},
		onAfterDamage(damage, target, source, move) {
			if (source && source.hp && source !== target && move && move.category === 'Physical') {
				if (target.eatItem()) {
					this.damage(source.baseMaxhp / 8, source, target);
				}
			}
		},
		onEat() { },
		num: 211,
		gen: 4,
		desc: "If holder is hit by a physical move, attacker loses 1/8 of its max HP. Single use.",
	},
	"jawfossil": {
		id: "jawfossil",
		name: "Jaw Fossil",
		spritenum: 694,
		fling: {
			basePower: 100,
		},
		num: 710,
		gen: 6,
		desc: "Can be revived into Tyrunt.",
	},
	"jirachite": {
		id: "jirachite",
		name: "Jirachite",
		spritenum: 723,
		megaStone: "Jirachi-Mega",
		megaEvolves: "Jirachi",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 951,
		gen: 7,
		desc: "If held by a Jirachi, this item allows it to Mega Evolve in battle.",
	},
	"kasibberry": {
		id: "kasibberry",
		name: "Kasib Berry",
		spritenum: 233,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ghost",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Ghost' && target.getMoveHitData(move).typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 196,
		gen: 4,
		desc: "Halves damage taken from a supereffective Ghost-type attack. Single use.",
	},
	"kebiaberry": {
		id: "kebiaberry",
		name: "Kebia Berry",
		spritenum: 234,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Poison",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Poison' && target.getMoveHitData(move).typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 190,
		gen: 4,
		desc: "Halves damage taken from a supereffective Poison-type attack. Single use.",
	},
	"keeberry": {
		id: "keeberry",
		name: "Kee Berry",
		spritenum: 593,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Fairy",
		},
		onAfterMoveSecondary(target, source, move) {
			if (move.category === 'Physical') {
				target.eatItem();
			}
		},
		onEat(pokemon) {
			this.boost({def: 1});
		},
		num: 687,
		gen: 6,
		desc: "Raises holder's Defense by 1 stage after it is hit by a physical attack. Single use.",
	},
	"kelpsyberry": {
		id: "kelpsyberry",
		name: "Kelpsy Berry",
		spritenum: 235,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Fighting",
		},
		onEat: false,
		num: 170,
		gen: 3,
		desc: "Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.",
	},
	"kangaskhanite": {
		id: "kangaskhanite",
		name: "Kangaskhanite",
		spritenum: 592,
		megaStone: "Kangaskhan-Mega",
		megaEvolves: "Kangaskhan",
		itemUser: ["Kangaskhan"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 675,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Kangaskhan, this item allows it to Mega Evolve in battle.",
	},
	"kingsrock": {
		id: "kingsrock",
		name: "King's Rock",
		spritenum: 236,
		fling: {
			basePower: 30,
			volatileStatus: 'flinch',
		},
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.category !== "Status") {
				if (!move.secondaries) move.secondaries = [];
				for (const secondary of move.secondaries) {
					if (secondary.volatileStatus === 'flinch') return;
				}
				move.secondaries.push({
					chance: 10,
					volatileStatus: 'flinch',
				});
			}
		},
		num: 221,
		gen: 2,
		desc: "Holder's attacks without a chance to flinch gain a 10% chance to flinch. Evolves Poliwhirl into Politoed and Slowpoke into Slowking when traded.",
		shortDesc: "Holder's attacks without a chance to flinch gain a 10% chance to flinch.",
	},
	"kommoniumz": {
		id: "kommoniumz",
		name: "Kommonium Z",
		spritenum: 690,
		onTakeItem: false,
		zMove: "Clangorous Soulblaze",
		zMoveFrom: "Clanging Scales",
		itemUser: ["Kommo-o", "Kommo-o-Totem"],
		num: 926,
		gen: 7,
		isNonstandard: "Past",
		desc: "If held by a Kommo-o with Clanging Scales, it can use Clangorous Soulblaze.",
	},
	"laggingtail": {
		id: "laggingtail",
		name: "Lagging Tail",
		spritenum: 237,
		fling: {
			basePower: 10,
		},
		onModifyPriority(priority, pokemon) {
			return Math.round(priority) - 0.1;
		},
		num: 279,
		gen: 4,
		desc: "Holder moves last in its priority bracket.",
	},
	"lansatberry": {
		id: "lansatberry",
		name: "Lansat Berry",
		spritenum: 238,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Flying",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 && pokemon.hasAbility('gluttony'))) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			pokemon.addVolatile('focusenergy');
		},
		num: 206,
		gen: 3,
		desc: "Holder gains the Focus Energy effect when at 1/4 max HP or less. Single use.",
	},
	"latiasite": {
		id: "latiasite",
		name: "Latiasite",
		spritenum: 629,
		megaStone: "Latias-Mega",
		megaEvolves: "Latias",
		itemUser: ["Latias"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 684,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Latias, this item allows it to Mega Evolve in battle.",
	},
	"latiosite": {
		id: "latiosite",
		name: "Latiosite",
		spritenum: 630,
		megaStone: "Latios-Mega",
		megaEvolves: "Latios",
		itemUser: ["Latios"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 685,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Latios, this item allows it to Mega Evolve in battle.",
	},
	"laxincense": {
		id: "laxincense",
		name: "Lax Incense",
		spritenum: 240,
		fling: {
			basePower: 10,
		},
		onModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('lax incense - decreasing accuracy');
			return accuracy * 0.9;
		},
		num: 255,
		gen: 3,
		desc: "The accuracy of attacks against the holder is 0.9x.",
	},
	"leafstone": {
		id: "leafstone",
		name: "Leaf Stone",
		spritenum: 241,
		fling: {
			basePower: 30,
		},
		num: 85,
		gen: 1,
		desc: "Evolves Gloom into Vileplume, Weepinbell into Victreebel, Exeggcute into Exeggutor or Alolan Exeggutor, Eevee into Leafeon, Nuzleaf into Shiftry, and Pansage into Simisage when used.",
		shortDesc: "Evolves certain species of Pokemon when used.",
	},
	"leavannyarmor": {
		id: "leavannyarmor",
		name: "Leavanny Armor",
		spritenum: 705,
		onSwitchIn(pokemon) {
			if (pokemon.isActive && pokemon.baseTemplate.species === 'Leavanny') {
				this.insertQueue({pokemon: pokemon, choice: 'runPrimal'});
			}
		},
		onPrimal(pokemon) {
			pokemon.formeChange('Leavanny-Armor', this.effect, true);
		},
		onTakeItem(item, source) {
			if (source.baseTemplate.baseSpecies === 'Leavanny') return false;
			return true;
		},
		num: 933,
		gen: 7,
		desc: "If held by a Leavanny this item triggers its Armor in battle.",
	},
	"leek": {
		id: "leek",
		name: "Leek",
		fling: {
			basePower: 60,
		},
		spritenum: 475,
		onModifyCritRatio(critRatio, user) {
			if (["Farfetch'd", "Sirfetch'd"].includes(user.baseTemplate.baseSpecies)) {
				return critRatio + 2;
			}
		},
		itemUser: ["Farfetch'd", "Sirfetch'd"],
		num: 259,
		gen: 8,
		desc: "If held by a Farfetch'd or Sirfetch'd, its critical hit ratio is raised by 2 stages.",
	},
	"leftovers": {
		id: "leftovers",
		name: "Leftovers",
		spritenum: 242,
		fling: {
			basePower: 10,
		},
		onResidualOrder: 5,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (this.field.isTerrain('grassyterrain')) return;
			this.heal(pokemon.baseMaxhp / 16);
		},
		onTerrain(pokemon) {
			if (!this.field.isTerrain('grassyterrain')) return;
			this.heal(pokemon.baseMaxhp / 16);
		},
		num: 234,
		gen: 2,
		desc: "At the end of every turn, holder restores 1/16 of its max HP.",
	},
	"leppaberry": {
		id: "leppaberry",
		name: "Leppa Berry",
		spritenum: 244,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Fighting",
		},
		onUpdate(pokemon) {
			if (!pokemon.hp) return;
			if (pokemon.moveSlots.some(move => move.pp === 0)) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			let moveSlot = pokemon.moveSlots.find(move => move.pp === 0) ||
				pokemon.moveSlots.find(move => move.pp < move.maxpp);
			if (!moveSlot) return;
			moveSlot.pp += 10;
			if (moveSlot.pp > moveSlot.maxpp) moveSlot.pp = moveSlot.maxpp;
			this.add('-activate', pokemon, 'item: Leppa Berry', moveSlot.move, '[consumed]');
		},
		num: 154,
		gen: 3,
		desc: "Restores 10 PP to the first of the holder's moves to reach 0 PP. Single use.",
	},
	"levelball": {
		id: "levelball",
		name: "Level Ball",
		spritenum: 246,
		num: 493,
		gen: 2,
		isPokeball: true,
		desc: "A Poke Ball for catching Pokemon that are a lower level than your own.",
	},
	"liechiberry": {
		id: "liechiberry",
		name: "Liechi Berry",
		spritenum: 248,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Grass",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 && pokemon.hasAbility('gluttony'))) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.boost({atk: 1});
		},
		num: 201,
		gen: 3,
		desc: "Raises holder's Attack by 1 stage when at 1/4 max HP or less. Single use.",
	},
	"lifeorb": {
		id: "lifeorb",
		name: "Life Orb",
		spritenum: 249,
		fling: {
			basePower: 30,
		},
		onModifyDamage(damage, source, target, move) {
			return this.chainModify([0x14CC, 0x1000]);
		},
		onAfterMoveSecondarySelf(source, target, move) {
			if (source && source !== target && move && move.category !== 'Status') {
				this.damage(source.baseMaxhp / 10, source, source, this.dex.getItem('lifeorb'));
			}
		},
		num: 270,
		gen: 4,
		desc: "Holder's attacks do 1.3x damage, and it loses 1/10 its max HP after the attack.",
	},
	"lightball": {
		id: "lightball",
		name: "Light Ball",
		spritenum: 251,
		fling: {
			basePower: 30,
			status: 'par',
		},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.baseTemplate.baseSpecies === 'Pikachu') {
				return this.chainModify(2);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.baseTemplate.baseSpecies === 'Pikachu') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Pikachu"],
		num: 236,
		gen: 2,
		desc: "If held by a Pikachu, its Attack and Sp. Atk are doubled.",
	},
	"lightclay": {
		id: "lightclay",
		name: "Light Clay",
		spritenum: 252,
		fling: {
			basePower: 30,
		},
		// implemented in the corresponding thing
		num: 269,
		gen: 4,
		desc: "Holder's use of Aurora Veil, Light Screen, or Reflect lasts 8 turns instead of 5.",
	},
	"lopunnite": {
		id: "lopunnite",
		name: "Lopunnite",
		spritenum: 626,
		megaStone: "Lopunny-Mega",
		megaEvolves: "Lopunny",
		itemUser: ["Lopunny"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 768,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Lopunny, this item allows it to Mega Evolve in battle.",
	},
	"loveball": {
		id: "loveball",
		name: "Love Ball",
		spritenum: 258,
		num: 496,
		gen: 2,
		isPokeball: true,
		desc: "Poke Ball for catching Pokemon that are the opposite gender of your Pokemon.",
	},
	"lovesweet": {
		id: "lovesweet",
		name: "Love Sweet",
		spritenum: 0,
		fling: {
			basePower: 10,
		},
		num: 1110,
		gen: 8,
		desc: "Evolves Milcery into Alcremie when held and spun around.",
	},
	"lucarionite": {
		id: "lucarionite",
		name: "Lucarionite",
		spritenum: 594,
		megaStone: "Lucario-Mega",
		megaEvolves: "Lucario",
		itemUser: ["Lucario"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 673,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Lucario, this item allows it to Mega Evolve in battle.",
	},
	"luckypunch": {
		id: "luckypunch",
		name: "Lucky Punch",
		spritenum: 261,
		fling: {
			basePower: 40,
		},
		onModifyCritRatio(critRatio, user) {
			if (user.baseTemplate.species === 'Chansey') {
				return critRatio + 2;
			}
		},
		itemUser: ["Chansey"],
		num: 256,
		gen: 2,
		desc: "If held by a Chansey, its critical hit ratio is raised by 2 stages.",
	},
	"lumberry": {
		id: "lumberry",
		name: "Lum Berry",
		spritenum: 262,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Flying",
		},
		onUpdate(pokemon) {
			if (pokemon.status || pokemon.volatiles['confusion']) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			pokemon.cureStatus();
			pokemon.removeVolatile('confusion');
		},
		num: 157,
		gen: 3,
		desc: "Holder cures itself if it is confused or has a major status condition. Single use.",
	},
	"luminousmoss": {
		id: "luminousmoss",
		name: "Luminous Moss",
		spritenum: 595,
		fling: {
			basePower: 30,
		},
		onAfterDamage(damage, target, source, move) {
			if (move.type === 'Water' && target.useItem()) {
				this.boost({spd: 1});
			}
		},
		num: 648,
		gen: 6,
		desc: "Raises holder's Sp. Def by 1 stage if hit by a Water-type attack. Single use.",
	},
	"lunaliumz": {
		id: "lunaliumz",
		name: "Lunalium Z",
		spritenum: 686,
		onTakeItem: false,
		zMove: "Menacing Moonraze Maelstrom",
		zMoveFrom: "Moongeist Beam",
		itemUser: ["Lunala", "Necrozma-Dawn-Wings"],
		num: 922,
		gen: 7,
		isNonstandard: "Past",
		desc: "Lunala or Dawn Wings Necrozma with Moongeist Beam can use a special Z-Move.",
	},
	"lureball": {
		id: "lureball",
		name: "Lure Ball",
		spritenum: 264,
		num: 494,
		gen: 2,
		isPokeball: true,
		desc: "A Poke Ball for catching Pokemon hooked by a Rod when fishing.",
	},
	"lustrousorb": {
		id: "lustrousorb",
		name: "Lustrous Orb",
		spritenum: 265,
		fling: {
			basePower: 60,
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move && user.baseTemplate.species === 'Palkia' && (move.type === 'Water' || move.type === 'Dragon')) {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		itemUser: ["Palkia"],
		num: 136,
		gen: 4,
		desc: "If held by a Palkia, its Water- and Dragon-type attacks have 1.2x power.",
	},
	"luxuryball": {
		id: "luxuryball",
		name: "Luxury Ball",
		spritenum: 266,
		num: 11,
		gen: 3,
		isPokeball: true,
		desc: "A comfortable Poke Ball that makes a caught wild Pokemon quickly grow friendly.",
	},
	"lycaniumz": {
		id: "lycaniumz",
		name: "Lycanium Z",
		spritenum: 689,
		onTakeItem: false,
		zMove: "Splintered Stormshards",
		zMoveFrom: "Stone Edge",
		itemUser: ["Lycanroc", "Lycanroc-Midnight", "Lycanroc-Dusk"],
		num: 925,
		gen: 7,
		isNonstandard: "Past",
		desc: "If held by a Lycanroc forme with Stone Edge, it can use Splintered Stormshards.",
	},
	"machobrace": {
		id: "machobrace",
		name: "Macho Brace",
		isUnreleased: true,
		spritenum: 269,
		ignoreKlutz: true,
		fling: {
			basePower: 60,
		},
		onModifySpe(spe) {
			return this.chainModify(0.5);
		},
		num: 215,
		gen: 3,
		desc: "Holder's Speed is halved. The Klutz Ability does not ignore this effect.",
	},
	"magcargonite": {
		id: "magcargonite",
		name: "Magcargonite",
		spritenum: 724,
		megaStone: "Magcargo-Mega",
		megaEvolves: "Magcargo",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 952,
		gen: 7,
		desc: "If held by a Magcargo, this item allows it to Mega Evolve in battle.",
	},
	"magmarizer": {
		id: "magmarizer",
		name: "Magmarizer",
		spritenum: 272,
		fling: {
			basePower: 80,
		},
		num: 323,
		gen: 4,
		desc: "Evolves Magmar into Magmortar when traded.",
	},
	"magnet": {
		id: "magnet",
		name: "Magnet",
		spritenum: 273,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Electric') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: 242,
		gen: 2,
		desc: "Holder's Electric-type attacks have 1.2x power.",
	},
	"magoberry": {
		id: "magoberry",
		name: "Mago Berry",
		spritenum: 274,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ghost",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 && pokemon.hasAbility('gluttony'))) {
				pokemon.eatItem();
			}
		},
		onTryEatItem(item, pokemon) {
			if (!this.runEvent('TryHeal', pokemon)) return false;
		},
		onEat(pokemon) {
			this.heal(pokemon.maxhp * 0.33);
			if (pokemon.getNature().minus === 'spe') {
				pokemon.addVolatile('confusion');
			}
		},
		num: 161,
		gen: 3,
		desc: "Restores 33% max HP at 1/4 max HP or less; confuses if -Spe Nature. Single use.",
	},
	"magostberry": {
		id: "magostberry",
		name: "Magost Berry",
		isUnreleased: true,
		spritenum: 275,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Rock",
		},
		onEat: false,
		num: 176,
		gen: 3,
		desc: "Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.",
	},
	"mail": {
		id: "mail",
		name: "Mail",
		spritenum: 403,
		onTakeItem(item, source) {
			if (!this.activeMove) return false;
			if (this.activeMove.id !== 'knockoff' && this.activeMove.id !== 'thief' && this.activeMove.id !== 'covet') return false;
		},
		isUnreleased: true,
		num: 0,
		gen: 2,
		desc: "Cannot be given to or taken from a Pokemon, except by Covet/Knock Off/Thief.",
	},
	"manectite": {
		id: "manectite",
		name: "Manectite",
		spritenum: 596,
		megaStone: "Manectric-Mega",
		megaEvolves: "Manectric",
		itemUser: ["Manectric"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 682,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Manectric, this item allows it to Mega Evolve in battle.",
	},
	"marangaberry": {
		id: "marangaberry",
		name: "Maranga Berry",
		spritenum: 597,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Dark",
		},
		onAfterMoveSecondary(target, source, move) {
			if (move.category === 'Special') {
				target.eatItem();
			}
		},
		onEat(pokemon) {
			this.boost({spd: 1});
		},
		num: 688,
		gen: 6,
		desc: "Raises holder's Sp. Def by 1 stage after it is hit by a special attack. Single use.",
	},
	"marowite": {
		id: "marowite",
		name: "Marowite",
		spritenum: 725,
		megaStone: "Marowak-Mega",
		megaEvolves: "Marowak",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 953,
		gen: 7,
		desc: "If held by a Marowak, this item allows it to Mega Evolve in battle.",
	},
	"marshadiumz": {
		id: "marshadiumz",
		name: "Marshadium Z",
		spritenum: 654,
		onTakeItem: false,
		zMove: "Soul-Stealing 7-Star Strike",
		zMoveFrom: "Spectral Thief",
		itemUser: ["Marshadow"],
		num: 802,
		gen: 7,
		isNonstandard: "Past",
		desc: "If held by Marshadow with Spectral Thief, it can use Soul-Stealing 7-Star Strike.",
	},
	"masterball": {
		id: "masterball",
		name: "Master Ball",
		spritenum: 276,
		num: 1,
		gen: 1,
		isPokeball: true,
		desc: "The best Ball with the ultimate performance. It will catch any wild Pokemon.",
	},
	"mawilite": {
		id: "mawilite",
		name: "Mawilite",
		spritenum: 598,
		megaStone: "Mawile-Mega",
		megaEvolves: "Mawile",
		itemUser: ["Mawile"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 681,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Mawile, this item allows it to Mega Evolve in battle.",
	},
	"meadowplate": {
		id: "meadowplate",
		name: "Meadow Plate",
		spritenum: 282,
		onPlate: 'Grass',
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Grass') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Grass",
		num: 301,
		gen: 4,
		desc: "Holder's Grass-type attacks have 1.2x power. Judgment is Grass type.",
	},
	"medichamite": {
		id: "medichamite",
		name: "Medichamite",
		spritenum: 599,
		megaStone: "Medicham-Mega",
		megaEvolves: "Medicham",
		itemUser: ["Medicham"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 665,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Medicham, this item allows it to Mega Evolve in battle.",
	},
	"meganiumite": {
		id: "meganiumite",
		name: "meganiumite",
		spritenum: 726,
		megaStone: "Meganium-Mega",
		megaEvolves: "Meganium",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 954,
		gen: 7,
		desc: "If held by a Meganium, this item allows it to Mega Evolve in battle.",
	},
	"mentalherb": {
		id: "mentalherb",
		name: "Mental Herb",
		spritenum: 285,
		fling: {
			basePower: 10,
			effect(pokemon) {
				let conditions = ['attract', 'taunt', 'encore', 'torment', 'disable', 'healblock'];
				for (const firstCondition of conditions) {
					if (pokemon.volatiles[firstCondition]) {
						for (const secondCondition of conditions) {
							pokemon.removeVolatile(secondCondition);
							if (firstCondition === 'attract' && secondCondition === 'attract') {
								this.add('-end', pokemon, 'move: Attract', '[from] item: Mental Herb');
							}
						}
						return;
					}
				}
			},
		},
		onUpdate(pokemon) {
			let conditions = ['attract', 'taunt', 'encore', 'torment', 'disable', 'healblock'];
			for (const firstCondition of conditions) {
				if (pokemon.volatiles[firstCondition]) {
					if (!pokemon.useItem()) return;
					for (const secondCondition of conditions) {
						pokemon.removeVolatile(secondCondition);
						if (firstCondition === 'attract' && secondCondition === 'attract') {
							this.add('-end', pokemon, 'move: Attract', '[from] item: Mental Herb');
						}
					}
					return;
				}
			}
		},
		num: 219,
		gen: 3,
		desc: "Cures holder of Attract, Disable, Encore, Heal Block, Taunt, Torment. Single use.",
	},
	"metagrossite": {
		id: "metagrossite",
		name: "Metagrossite",
		spritenum: 618,
		megaStone: "Metagross-Mega",
		megaEvolves: "Metagross",
		itemUser: ["Metagross"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 758,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Metagross, this item allows it to Mega Evolve in battle.",
	},
	"metalcoat": {
		id: "metalcoat",
		name: "Metal Coat",
		spritenum: 286,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Steel') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: 233,
		gen: 2,
		desc: "Holder's Steel-type attacks have 1.2x power. Evolves Onix into Steelix and Scyther into Scizor when traded.",
		shortDesc: "Holder's Steel-type attacks have 1.2x power.",
	},
	"metalpowder": {
		id: "metalpowder",
		name: "Metal Powder",
		fling: {
			basePower: 10,
		},
		spritenum: 287,
		onModifyDefPriority: 2,
		onModifyDef(def, pokemon) {
			if (pokemon.template.species === 'Ditto' && !pokemon.transformed) {
				return this.chainModify(2);
			}
		},
		itemUser: ["Ditto"],
		num: 257,
		gen: 2,
		desc: "If held by a Ditto that hasn't Transformed, its Defense is doubled.",
	},
	"metronome": {
		id: "metronome",
		name: "Metronome",
		spritenum: 289,
		fling: {
			basePower: 30,
		},
		onStart(pokemon) {
			pokemon.addVolatile('metronome');
		},
		effect: {
			onStart(pokemon) {
				this.effectData.numConsecutive = 0;
				this.effectData.lastMove = '';
			},
			onTryMovePriority: -2,
			onTryMove(pokemon, target, move) {
				if (!pokemon.hasItem('metronome')) {
					pokemon.removeVolatile('metronome');
					return;
				}
				if (this.effectData.lastMove === move.id) {
					this.effectData.numConsecutive++;
				} else {
					this.effectData.numConsecutive = 0;
				}
				this.effectData.lastMove = move.id;
			},
			onModifyDamage(damage, source, target, move) {
				let numConsecutive = this.effectData.numConsecutive > 5 ? 5 : this.effectData.numConsecutive;
				let dmgMod = [0x1000, 0x1333, 0x1666, 0x1999, 0x1CCC, 0x2000];
				return this.chainModify([dmgMod[numConsecutive], 0x1000]);
			},
		},
		num: 277,
		gen: 4,
		desc: "Damage of moves used on consecutive turns is increased. Max 2x after 5 turns.",
	},
	"mewniumz": {
		id: "mewniumz",
		name: "Mewnium Z",
		spritenum: 658,
		onTakeItem: false,
		zMove: "Genesis Supernova",
		zMoveFrom: "Psychic",
		itemUser: ["Mew"],
		num: 806,
		gen: 7,
		isNonstandard: "Past",
		desc: "If held by a Mew with Psychic, it can use Genesis Supernova.",
	},
	"mewtwoarmor": {
		id: "mewtwoarmor",
		name: "Mewtwo Armor",
		spritenum: 708,
		onSwitchIn(pokemon) {
			if (pokemon.isActive && pokemon.baseTemplate.species === 'Mewtwo') {
				this.insertQueue({pokemon: pokemon, choice: 'runPrimal'});
			}
		},
		onPrimal(pokemon) {
			pokemon.formeChange('Mewtwo-Armor', this.effect, true);
		},
		onTakeItem(item, source) {
			if (source.baseTemplate.baseSpecies === 'Mewtwo') return false;
			return true;
		},
		num: 936,
		gen: 7,
		desc: "If held by a Mewtwo this item triggers its Armor in battle.",
	},
	"mewtwonitex": {
		id: "mewtwonitex",
		name: "Mewtwonite X",
		spritenum: 600,
		megaStone: "Mewtwo-Mega-X",
		megaEvolves: "Mewtwo",
		itemUser: ["Mewtwo"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 662,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Mewtwo, this item allows it to Mega Evolve in battle.",
	},
	"mewtwonitey": {
		id: "mewtwonitey",
		name: "Mewtwonite Y",
		spritenum: 601,
		megaStone: "Mewtwo-Mega-Y",
		megaEvolves: "Mewtwo",
		itemUser: ["Mewtwo"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 663,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Mewtwo, this item allows it to Mega Evolve in battle.",
	},
	"shadowmewtwonite": {
		id: "shadowmewtwonite",
		name: "Shadow Mewtwonite",
		spritenum: 763,
		megaStone: "Mewtwo-Shadow-Mega",
		megaEvolves: "Mewtwo-Shadow",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 991,
		gen: 6,
		desc: "If held by a Shadow Mewtwo, this item allows it to Mega Evolve in battle.",
	},
	"micleberry": {
		id: "micleberry",
		name: "Micle Berry",
		spritenum: 290,
		isBerry: true,
		isUnreleased: true,
		naturalGift: {
			basePower: 100,
			type: "Rock",
		},
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 && pokemon.hasAbility('gluttony'))) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			pokemon.addVolatile('micleberry');
		},
		effect: {
			duration: 2,
			onSourceModifyAccuracy(accuracy, target, source) {
				this.add('-enditem', source, 'Micle Berry');
				source.removeVolatile('micleberry');
				if (typeof accuracy === 'number') {
					return accuracy * 1.2;
				}
			},
		},
		num: 209,
		gen: 4,
		desc: "Holder's next move has 1.2x accuracy when at 1/4 max HP or less. Single use.",
	},
	"milotite": {
		id: "milotite",
		name: "Milotite",
		spritenum: 727,
		megaStone: "Milotic-Mega",
		megaEvolves: "Milotic",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 955,
		gen: 7,
		desc: "If held by a Milotic, this item allows it to Mega Evolve in battle.",
	},
	"miltankite": {
		id: "miltankite",
		name: "Miltankite",
		spritenum: 728,
		megaStone: "Miltank-Mega",
		megaEvolves: "Miltank",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 956,
		gen: 7,
		desc: "If held by a Miltank, this item allows it to Mega Evolve in battle.",
	},
	"mimikiumz": {
		id: "mimikiumz",
		name: "Mimikium Z",
		spritenum: 688,
		onTakeItem: false,
		zMove: "Let's Snuggle Forever",
		zMoveFrom: "Play Rough",
		itemUser: ["Mimikyu", "Mimikyu-Busted", "Mimikyu-Totem", "Mimikyu-Busted-Totem"],
		num: 924,
		isNonstandard: "Past",
		gen: 7,
		desc: "If held by a Mimikyu with Play Rough, it can use Let's Snuggle Forever.",
	},
	"mindplate": {
		id: "mindplate",
		name: "Mind Plate",
		spritenum: 291,
		onPlate: 'Psychic',
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Psychic') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Psychic",
		num: 307,
		gen: 4,
		desc: "Holder's Psychic-type attacks have 1.2x power. Judgment is Psychic type.",
	},
	"miracleseed": {
		id: "miracleseed",
		name: "Miracle Seed",
		fling: {
			basePower: 30,
		},
		spritenum: 292,
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Grass') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: 239,
		gen: 2,
		desc: "Holder's Grass-type attacks have 1.2x power.",
	},
	"mistyseed": {
		id: "mistyseed",
		name: "Misty Seed",
		spritenum: 666,
		fling: {
			basePower: 10,
		},
		onStart(pokemon) {
			if (!pokemon.ignoringItem() && this.field.isTerrain('mistyterrain') && pokemon.useItem()) {
				this.boost({spd: 1});
			}
		},
		onAnyTerrainStart() {
			const pokemon = this.effectData.target;
			if (this.field.isTerrain('mistyterrain') && pokemon.useItem()) {
				this.boost({spd: 1}, pokemon);
			}
		},
		num: 883,
		gen: 7,
		desc: "If the terrain is Misty Terrain, raises holder's Sp. Def by 1 stage. Single use.",
	},
	"moonball": {
		id: "moonball",
		name: "Moon Ball",
		spritenum: 294,
		num: 498,
		gen: 2,
		isPokeball: true,
		desc: "A Poke Ball for catching Pokemon that evolve using the Moon Stone.",
	},
	"moonstone": {
		id: "moonstone",
		name: "Moon Stone",
		spritenum: 295,
		fling: {
			basePower: 30,
		},
		num: 81,
		gen: 1,
		desc: "Evolves Nidorina into Nidoqueen, Nidorino into Nidoking, Clefairy into Clefable, Jigglypuff into Wigglytuff, Skitty into Delcatty, and Munna into Musharna when used.",
		shortDesc: "Evolves certain species of Pokemon when used.",
	},
	"muscleband": {
		id: "muscleband",
		name: "Muscle Band",
		spritenum: 297,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.category === 'Physical') {
				return this.chainModify([0x1199, 0x1000]);
			}
		},
		num: 266,
		gen: 4,
		desc: "Holder's physical attacks have 1.1x power.",
	},
	"mysticwater": {
		id: "mysticwater",
		name: "Mystic Water",
		spritenum: 300,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Water') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: 243,
		gen: 2,
		desc: "Holder's Water-type attacks have 1.2x power.",
	},
	"nanabberry": {
		id: "nanabberry",
		name: "Nanab Berry",
		isUnreleased: true,
		spritenum: 302,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Water",
		},
		onEat: false,
		num: 166,
		gen: 3,
		desc: "Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.",
	},
	"nestball": {
		id: "nestball",
		name: "Nest Ball",
		spritenum: 303,
		num: 8,
		gen: 3,
		isPokeball: true,
		desc: "A Poke Ball that works especially well on weaker Pokemon in the wild.",
	},
	"netball": {
		id: "netball",
		name: "Net Ball",
		spritenum: 304,
		num: 6,
		gen: 3,
		isPokeball: true,
		desc: "A Poke Ball that works especially well on Water- and Bug-type Pokemon.",
	},
	"nevermeltice": {
		id: "nevermeltice",
		name: "Never-Melt Ice",
		spritenum: 305,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Ice') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: 246,
		gen: 2,
		desc: "Holder's Ice-type attacks have 1.2x power.",
	},
	"nomelberry": {
		id: "nomelberry",
		name: "Nomel Berry",
		isUnreleased: true,
		spritenum: 306,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Dragon",
		},
		onEat: false,
		num: 178,
		gen: 3,
		desc: "Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.",
	},
	"normalgem": {
		id: "normalgem",
		name: "Normal Gem",
		spritenum: 307,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || ['firepledge', 'grasspledge', 'waterpledge'].includes(move.id)) return;
			if (move.type === 'Normal') {
				if (source.useItem()) {
					this.add('-enditem', source, 'Normal Gem', '[from] gem', '[move] ' + move.name);
					source.addVolatile('gem');
				}
			}
		},
		num: 564,
		gen: 5,
		desc: "Holder's first successful Normal-type attack will have 1.3x power. Single use.",
	},
	"normaliumz": {
		id: "normaliumz",
		name: "Normalium Z",
		spritenum: 631,
		onTakeItem: false,
		zMove: true,
		zMoveType: "Normal",
		num: 776,
		gen: 7,
		isNonstandard: "Past",
		desc: "If holder has a Normal move, this item allows it to use a Normal Z-Move.",
	},
	"occaberry": {
		id: "occaberry",
		name: "Occa Berry",
		spritenum: 311,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Fire",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Fire' && target.getMoveHitData(move).typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 184,
		gen: 4,
		desc: "Halves damage taken from a supereffective Fire-type attack. Single use.",
	},
	"oddincense": {
		id: "oddincense",
		name: "Odd Incense",
		spritenum: 312,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Psychic') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: 314,
		gen: 4,
		desc: "Holder's Psychic-type attacks have 1.2x power.",
	},
	"oldamber": {
		id: "oldamber",
		name: "Old Amber",
		spritenum: 314,
		fling: {
			basePower: 100,
		},
		num: 103,
		gen: 3,
		desc: "Can be revived into Aerodactyl.",
	},
	"oranberry": {
		id: "oranberry",
		name: "Oran Berry",
		spritenum: 319,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Poison",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		onTryEatItem(item, pokemon) {
			if (!this.runEvent('TryHeal', pokemon)) return false;
		},
		onEat(pokemon) {
			this.heal(10);
		},
		num: 155,
		gen: 3,
		desc: "Restores 10 HP when at 1/2 max HP or less. Single use.",
	},
	"ovalstone": {
		id: "ovalstone",
		name: "Oval Stone",
		spritenum: 321,
		fling: {
			basePower: 80,
		},
		num: 110,
		gen: 4,
		desc: "Evolves Happiny into Chansey when held and leveled up during the day.",
	},
	"pamtreberry": {
		id: "pamtreberry",
		name: "Pamtre Berry",
		isUnreleased: true,
		spritenum: 323,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Steel",
		},
		onEat: false,
		num: 180,
		gen: 3,
		desc: "Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.",
	},
	"parkball": {
		id: "parkball",
		name: "Park Ball",
		spritenum: 325,
		num: 500,
		gen: 4,
		isPokeball: true,
		desc: "A special Poke Ball for the Pal Park.",
	},
	"passhoberry": {
		id: "passhoberry",
		name: "Passho Berry",
		spritenum: 329,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Water",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Water' && target.getMoveHitData(move).typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 185,
		gen: 4,
		desc: "Halves damage taken from a supereffective Water-type attack. Single use.",
	},
	"payapaberry": {
		id: "payapaberry",
		name: "Payapa Berry",
		spritenum: 330,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Psychic",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Psychic' && target.getMoveHitData(move).typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 193,
		gen: 4,
		desc: "Halves damage taken from a supereffective Psychic-type attack. Single use.",
	},
	"pechaberry": {
		id: "pechaberry",
		name: "Pecha Berry",
		spritenum: 333,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Electric",
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'psn' || pokemon.status === 'tox') {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			if (pokemon.status === 'psn' || pokemon.status === 'tox') {
				pokemon.cureStatus();
			}
		},
		num: 151,
		gen: 3,
		desc: "Holder is cured if it is poisoned. Single use.",
	},
	"persimberry": {
		id: "persimberry",
		name: "Persim Berry",
		spritenum: 334,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ground",
		},
		onUpdate(pokemon) {
			if (pokemon.volatiles['confusion']) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			pokemon.removeVolatile('confusion');
		},
		num: 156,
		gen: 3,
		desc: "Holder is cured if it is confused. Single use.",
	},
	"petayaberry": {
		id: "petayaberry",
		name: "Petaya Berry",
		spritenum: 335,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Poison",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 && pokemon.hasAbility('gluttony'))) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.boost({spa: 1});
		},
		num: 204,
		gen: 3,
		desc: "Raises holder's Sp. Atk by 1 stage when at 1/4 max HP or less. Single use.",
	},
	"pidgeotite": {
		id: "pidgeotite",
		name: "Pidgeotite",
		spritenum: 622,
		megaStone: "Pidgeot-Mega",
		megaEvolves: "Pidgeot",
		itemUser: ["Pidgeot"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 762,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Pidgeot, this item allows it to Mega Evolve in battle.",
	},
	"pikaniumz": {
		id: "pikaniumz",
		name: "Pikanium Z",
		spritenum: 649,
		onTakeItem: false,
		zMove: "Catastropika",
		zMoveFrom: "Volt Tackle",
		itemUser: ["Pikachu"],
		num: 794,
		gen: 7,
		isNonstandard: "Past",
		desc: "If held by a Pikachu with Volt Tackle, it can use Catastropika.",
	},
	"pikashuniumz": {
		id: "pikashuniumz",
		name: "Pikashunium Z",
		spritenum: 659,
		onTakeItem: false,
		zMove: "10,000,000 Volt Thunderbolt",
		zMoveFrom: "Thunderbolt",
		itemUser: ["Pikachu-Original", "Pikachu-Hoenn", "Pikachu-Sinnoh", "Pikachu-Unova", "Pikachu-Kalos", "Pikachu-Alola", "Pikachu-Partner"],
		num: 836,
		isNonstandard: "Past",
		gen: 7,
		desc: "If held by cap Pikachu with Thunderbolt, it can use 10,000,000 Volt Thunderbolt.",
	},
	"pinapberry": {
		id: "pinapberry",
		name: "Pinap Berry",
		spritenum: 337,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Grass",
		},
		onEat: false,
		num: 168,
		gen: 3,
		desc: "Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.",
	},
	"pinsirite": {
		id: "pinsirite",
		name: "Pinsirite",
		spritenum: 602,
		megaStone: "Pinsir-Mega",
		megaEvolves: "Pinsir",
		itemUser: ["Pinsir"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 671,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Pinsir, this item allows it to Mega Evolve in battle.",
	},
	"pixieplate": {
		id: "pixieplate",
		name: "Pixie Plate",
		spritenum: 610,
		onPlate: 'Fairy',
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fairy') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Fairy",
		num: 644,
		gen: 6,
		desc: "Holder's Fairy-type attacks have 1.2x power. Judgment is Fairy type.",
	},
	"plumefossil": {
		id: "plumefossil",
		name: "Plume Fossil",
		spritenum: 339,
		fling: {
			basePower: 100,
		},
		num: 573,
		gen: 5,
		desc: "Can be revived into Archen.",
	},
	"poisonbarb": {
		id: "poisonbarb",
		name: "Poison Barb",
		spritenum: 343,
		fling: {
			basePower: 70,
			status: 'psn',
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Poison') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: 245,
		gen: 2,
		desc: "Holder's Poison-type attacks have 1.2x power.",
	},
	"poisongem": {
		id: "poisongem",
		name: "Poison Gem",
		spritenum: 344,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Poison') {
				if (source.useItem()) {
					this.add('-enditem', source, 'Poison Gem', '[from] gem', '[move] ' + move.name);
					source.addVolatile('gem');
				}
			}
		},
		num: 554,
		gen: 5,
		isNonstandard: 'Past',
		desc: "Holder's first successful Poison-type attack will have 1.3x power. Single use.",
	},
	"poisonmemory": {
		id: "poisonmemory",
		name: "Poison Memory",
		spritenum: 670,
		onMemory: 'Poison',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 773) || pokemon.baseTemplate.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Poison",
		itemUser: ["Silvally-Poison"],
		num: 906,
		gen: 7,
		desc: "Holder's Multi-Attack is Poison type.",
	},
	"poisoniumz": {
		id: "poisoniumz",
		name: "Poisonium Z",
		spritenum: 638,
		onPlate: 'Poison',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Poison",
		forcedForme: "Arceus-Poison",
		num: 783,
		gen: 7,
		isNonstandard: "Past",
		desc: "If holder has a Poison move, this item allows it to use a Poison Z-Move.",
	},
	"pokeball": {
		id: "pokeball",
		name: "Poke Ball",
		spritenum: 345,
		num: 4,
		gen: 1,
		isPokeball: true,
		desc: "A device for catching wild Pokemon. It is designed as a capsule system.",
	},
	"politoedite": {
		id: "politoedite",
		name: "Politoedite",
		spritenum: 729,
		megaStone: "Politoed-Mega",
		megaEvolves: "Politoed",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 957,
		gen: 7,
		desc: "If held by a Politoed, this item allows it to Mega Evolve in battle.",
	},
	"poliwrathite": {
		id: "poliwrathite",
		name: "Poliwrathite",
		spritenum: 730,
		megaStone: "Poliwrath-Mega",
		megaEvolves: "Poliwrath",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 958,
		gen: 7,
		desc: "If held by a Poliwrath, this item allows it to Mega Evolve in battle.",
	},
	"pomegberry": {
		id: "pomegberry",
		name: "Pomeg Berry",
		spritenum: 351,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Ice",
		},
		onEat: false,
		num: 169,
		gen: 3,
		desc: "Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.",
	},
	"poweranklet": {
		id: "poweranklet",
		name: "Power Anklet",
		spritenum: 354,
		ignoreKlutz: true,
		fling: {
			basePower: 70,
		},
		onModifySpe(spe) {
			return this.chainModify(0.5);
		},
		num: 293,
		gen: 4,
		desc: "Holder's Speed is halved. The Klutz Ability does not ignore this effect.",
	},
	"powerband": {
		id: "powerband",
		name: "Power Band",
		spritenum: 355,
		ignoreKlutz: true,
		fling: {
			basePower: 70,
		},
		onModifySpe(spe) {
			return this.chainModify(0.5);
		},
		num: 292,
		gen: 4,
		desc: "Holder's Speed is halved. The Klutz Ability does not ignore this effect.",
	},
	"powerbelt": {
		id: "powerbelt",
		name: "Power Belt",
		spritenum: 356,
		ignoreKlutz: true,
		fling: {
			basePower: 70,
		},
		onModifySpe(spe) {
			return this.chainModify(0.5);
		},
		num: 290,
		gen: 4,
		desc: "Holder's Speed is halved. The Klutz Ability does not ignore this effect.",
	},
	"powerbracer": {
		id: "powerbracer",
		name: "Power Bracer",
		spritenum: 357,
		ignoreKlutz: true,
		fling: {
			basePower: 70,
		},
		onModifySpe(spe) {
			return this.chainModify(0.5);
		},
		num: 289,
		gen: 4,
		desc: "Holder's Speed is halved. The Klutz Ability does not ignore this effect.",
	},
	"powerherb": {
		id: "powerherb",
		onChargeMove(pokemon, target, move) {
			if (pokemon.useItem()) {
				this.debug('power herb - remove charge turn for ' + move.id);
				this.attrLastMove('[still]');
				this.addMove('-anim', pokemon, move.name, target);
				return false; // skip charge turn
			}
		},
		name: "Power Herb",
		spritenum: 358,
		fling: {
			basePower: 10,
		},
		num: 271,
		gen: 4,
		desc: "Holder's two-turn moves complete in one turn (except Sky Drop). Single use.",
	},
	"powerlens": {
		id: "powerlens",
		name: "Power Lens",
		spritenum: 359,
		ignoreKlutz: true,
		fling: {
			basePower: 70,
		},
		onModifySpe(spe) {
			return this.chainModify(0.5);
		},
		num: 291,
		gen: 4,
		desc: "Holder's Speed is halved. The Klutz Ability does not ignore this effect.",
	},
	"powerweight": {
		id: "powerweight",
		name: "Power Weight",
		spritenum: 360,
		ignoreKlutz: true,
		fling: {
			basePower: 70,
		},
		onModifySpe(spe) {
			return this.chainModify(0.5);
		},
		num: 294,
		gen: 4,
		desc: "Holder's Speed is halved. The Klutz Ability does not ignore this effect.",
	},
	"premierball": {
		id: "premierball",
		name: "Premier Ball",
		spritenum: 363,
		num: 12,
		gen: 3,
		isPokeball: true,
		desc: "A rare Poke Ball that has been crafted to commemorate an event.",
	},
	"primariumz": {
		id: "primariumz",
		name: "Primarium Z",
		spritenum: 652,
		onTakeItem: false,
		zMove: "Oceanic Operetta",
		zMoveFrom: "Sparkling Aria",
		itemUser: ["Primarina"],
		num: 800,
		gen: 7,
		isNonstandard: "Past",
		desc: "If held by a Primarina with Sparkling Aria, it can use Oceanic Operetta.",
	},
	"prismscale": {
		id: "prismscale",
		name: "Prism Scale",
		spritenum: 365,
		fling: {
			basePower: 30,
		},
		num: 537,
		gen: 5,
		desc: "Evolves Feebas into Milotic when traded.",
	},
	"protectivepads": {
		id: "protectivepads",
		name: "Protective Pads",
		spritenum: 663,
		fling: {
			basePower: 30,
		},
		onAttractPriority: -1,
		onAttract(target, source) {
			if (target !== source && target === this.activePokemon && this.activeMove && this.activeMove.flags['contact']) return false;
		},
		onBoostPriority: -1,
		onBoost(boost, target, source, effect) {
			if (target !== source && target === this.activePokemon && this.activeMove && this.activeMove.flags['contact']) {
				if (effect && effect.effectType === 'Ability') {
					// Ability activation always happens for boosts
					this.add('-activate', target, 'item: Protective Pads');
				}
				return false;
			}
		},
		onDamagePriority: -1,
		onDamage(damage, target, source, effect) {
			if (target !== source && target === this.activePokemon && this.activeMove && this.activeMove.flags['contact']) {
				if (effect && effect.effectType === 'Ability') {
					this.add('-activate', source, effect.fullname);
					this.add('-activate', target, 'item: Protective Pads');
				}
				return false;
			}
		},
		onSetAbility(ability, target, source, effect) {
			if (target !== source && target === this.activePokemon && this.activeMove && this.activeMove.flags['contact']) {
				if (effect && effect.effectType === 'Ability') {
					this.add('-activate', source, effect.fullname);
					this.add('-activate', target, 'item: Protective Pads');
				}
				return false;
			}
		},
		onSetStatus(status, target, source, effect) {
			if (target !== source && target === this.activePokemon && this.activeMove && this.activeMove.flags['contact']) return false;
		},
		num: 880,
		gen: 7,
		desc: "Holder's moves are protected from adverse contact effects, except Pickpocket.",
	},
	"protector": {
		id: "protector",
		name: "Protector",
		spritenum: 367,
		fling: {
			basePower: 80,
		},
		num: 321,
		gen: 4,
		desc: "Evolves Rhydon into Rhyperior when traded.",
	},
	"psychicgem": {
		id: "psychicgem",
		name: "Psychic Gem",
		spritenum: 369,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Psychic') {
				if (source.useItem()) {
					this.add('-enditem', source, 'Psychic Gem', '[from] gem', '[move] ' + move.name);
					source.addVolatile('gem');
				}
			}
		},
		num: 557,
		gen: 5,
		isNonstandard: 'Past',
		desc: "Holder's first successful Psychic-type attack will have 1.3x power. Single use.",
	},
	"psychicmemory": {
		id: "psychicmemory",
		name: "Psychic Memory",
		spritenum: 680,
		onMemory: 'Psychic',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 773) || pokemon.baseTemplate.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Psychic",
		itemUser: ["Silvally-Psychic"],
		num: 916,
		gen: 7,
		desc: "Holder's Multi-Attack is Psychic type.",
	},
	"psychicseed": {
		id: "psychicseed",
		name: "Psychic Seed",
		spritenum: 665,
		fling: {
			basePower: 10,
		},
		onStart(pokemon) {
			if (!pokemon.ignoringItem() && this.field.isTerrain('psychicterrain') && pokemon.useItem()) {
				this.boost({spd: 1});
			}
		},
		onAnyTerrainStart() {
			const pokemon = this.effectData.target;
			if (this.field.isTerrain('psychicterrain') && pokemon.useItem()) {
				this.boost({spd: 1}, pokemon);
			}
		},
		num: 882,
		gen: 7,
		desc: "If the terrain is Psychic Terrain, raises holder's Sp. Def by 1 stage. Single use.",
	},
	"psychiumz": {
		id: "psychiumz",
		name: "Psychium Z",
		spritenum: 641,
		onPlate: 'Psychic',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Psychic",
		forcedForme: "Arceus-Psychic",
		num: 786,
		gen: 7,
		isNonstandard: "Past",
		desc: "If holder has a Psychic move, this item allows it to use a Psychic Z-Move.",
	},
	"qualotberry": {
		id: "qualotberry",
		name: "Qualot Berry",
		spritenum: 371,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Poison",
		},
		onEat: false,
		num: 171,
		gen: 3,
		desc: "Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.",
	},
	"quickball": {
		id: "quickball",
		name: "Quick Ball",
		spritenum: 372,
		num: 15,
		gen: 4,
		isPokeball: true,
		desc: "A Poke Ball that provides a better catch rate at the start of a wild encounter.",
	},
	"quickclaw": {
		id: "quickclaw",
		onBeforeTurn(pokemon) {
			if (this.randomChance(1, 5)) {
				this.add('-activate', pokemon, 'item: Quick Claw');
				pokemon.addVolatile('quickclaw');
			}
		},
		effect: {
			onModifyPriorityPriority: -1,
			onModifyPriority(priority, pokemon) {
				return Math.round(priority) + 0.1;
			},
			duration: 1,
		},
		name: "Quick Claw",
		spritenum: 373,
		fling: {
			basePower: 80,
		},
		num: 217,
		gen: 2,
		desc: "Each turn, holder has a 20% chance to move first in its priority bracket.",
	},
	"quickpowder": {
		id: "quickpowder",
		name: "Quick Powder",
		spritenum: 374,
		fling: {
			basePower: 10,
		},
		onModifySpe(spe, pokemon) {
			if (pokemon.template.species === 'Ditto' && !pokemon.transformed) {
				return this.chainModify(2);
			}
		},
		itemUser: ["Ditto"],
		num: 274,
		gen: 4,
		desc: "If held by a Ditto that hasn't Transformed, its Speed is doubled.",
	},
	"rabutaberry": {
		id: "rabutaberry",
		name: "Rabuta Berry",
		isUnreleased: true,
		spritenum: 375,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Ghost",
		},
		onEat: false,
		num: 177,
		gen: 3,
		desc: "Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.",
	},
	"rarebone": {
		id: "rarebone",
		name: "Rare Bone",
		spritenum: 379,
		fling: {
			basePower: 100,
		},
		num: 106,
		gen: 4,
		desc: "No competitive use other than when used with Fling.",
	},
	"rawstberry": {
		id: "rawstberry",
		name: "Rawst Berry",
		spritenum: 381,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Grass",
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'brn') {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			if (pokemon.status === 'brn') {
				pokemon.cureStatus();
			}
		},
		num: 152,
		gen: 3,
		desc: "Holder is cured if it is burned. Single use.",
	},
	"razorclaw": {
		id: "razorclaw",
		name: "Razor Claw",
		spritenum: 382,
		fling: {
			basePower: 80,
		},
		onModifyCritRatio(critRatio) {
			return critRatio + 1;
		},
		num: 326,
		gen: 4,
		desc: "Holder's critical hit ratio is raised by 1 stage. Evolves Sneasel into Weavile when held and leveled up during the night.",
		shortDesc: "Holder's critical hit ratio is raised by 1 stage.",
	},
	"razorfang": {
		id: "razorfang",
		name: "Razor Fang",
		spritenum: 383,
		fling: {
			basePower: 30,
			volatileStatus: 'flinch',
		},
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.category !== "Status") {
				if (!move.secondaries) move.secondaries = [];
				for (const secondary of move.secondaries) {
					if (secondary.volatileStatus === 'flinch') return;
				}
				move.secondaries.push({
					chance: 10,
					volatileStatus: 'flinch',
				});
			}
		},
		num: 327,
		gen: 4,
		desc: "Holder's attacks without a chance to flinch gain a 10% chance to flinch. Evolves Gligar into Gliscor when held and leveled up during the night.",
		shortDesc: "Holder's attacks without a chance to flinch gain a 10% chance to flinch.",
	},
	"razzberry": {
		id: "razzberry",
		name: "Razz Berry",
		isUnreleased: true,
		spritenum: 384,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Steel",
		},
		onEat: false,
		num: 164,
		gen: 3,
		desc: "Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.",
	},
	"reapercloth": {
		id: "reapercloth",
		name: "Reaper Cloth",
		spritenum: 385,
		fling: {
			basePower: 10,
		},
		num: 325,
		gen: 4,
		desc: "Evolves Dusclops into Dusknoir when traded.",
	},
	"redcard": {
		id: "redcard",
		name: "Red Card",
		spritenum: 387,
		fling: {
			basePower: 10,
		},
		onAfterMoveSecondary(target, source, move) {
			if (source && source !== target && source.hp && target.hp && move && move.category !== 'Status') {
				if (!source.isActive || !this.canSwitch(source.side) || source.forceSwitchFlag || target.forceSwitchFlag) return;
				if (target.useItem(source)) { // This order is correct - the item is used up even against a pokemon with Ingrain or that otherwise can't be forced out
					if (this.runEvent('DragOut', source, target, move)) {
						source.forceSwitchFlag = true;
					}
				}
			}
		},
		num: 542,
		gen: 5,
		desc: "If holder survives a hit, attacker is forced to switch to a random ally. Single use.",
	},
	"redorb": {
		id: "redorb",
		name: "Red Orb",
		spritenum: 390,
		onSwitchIn(pokemon) {
			if (pokemon.isActive && pokemon.baseTemplate.species === 'Groudon') {
				this.insertQueue({pokemon: pokemon, choice: 'runPrimal'});
			}
		},
		onPrimal(pokemon) {
			pokemon.formeChange('Groudon-Primal', this.effect, true);
		},
		onTakeItem(item, source) {
			if (source.baseTemplate.baseSpecies === 'Groudon') return false;
			return true;
		},
		itemUser: ["Groudon"],
		num: 534,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Groudon, this item triggers its Primal Reversion in battle.",
	},
	"repeatball": {
		id: "repeatball",
		name: "Repeat Ball",
		spritenum: 401,
		num: 9,
		gen: 3,
		isPokeball: true,
		desc: "A Poke Ball that works well on Pokemon species that were previously caught.",
	},
	"reuniclite": {
		id: "reuniclite",
		name: "Reuniclite",
		spritenum: 731,
		megaStone: "Reuniclus-Mega",
		megaEvolves: "Reuniclus",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 959,
		gen: 7,
		desc: "If held by a Reuniclus, this item allows it to Mega Evolve in battle.",
	},
	"ribbonsweet": {
		id: "ribbonsweet",
		name: "Ribbon Sweet",
		spritenum: 0,
		fling: {
			basePower: 10,
		},
		num: 1115,
		gen: 8,
		desc: "Evolves Milcery into Alcremie when held and spun around.",
	},
	"rindoberry": {
		id: "rindoberry",
		name: "Rindo Berry",
		spritenum: 409,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Grass",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Grass' && target.getMoveHitData(move).typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 187,
		gen: 4,
		desc: "Halves damage taken from a supereffective Grass-type attack. Single use.",
	},
	"ringtarget": {
		id: "ringtarget",
		name: "Ring Target",
		spritenum: 410,
		fling: {
			basePower: 10,
		},
		onNegateImmunity: false,
		num: 543,
		gen: 5,
		desc: "The holder's type immunities granted solely by its typing are negated.",
	},
	"rockgem": {
		id: "rockgem",
		name: "Rock Gem",
		spritenum: 415,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Rock') {
				if (source.useItem()) {
					this.add('-enditem', source, 'Rock Gem', '[from] gem', '[move] ' + move.name);
					source.addVolatile('gem');
				}
			}
		},
		num: 559,
		gen: 5,
		isNonstandard: 'Past',
		desc: "Holder's first successful Rock-type attack will have 1.3x power. Single use.",
	},
	"rockincense": {
		id: "rockincense",
		name: "Rock Incense",
		spritenum: 416,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Rock') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: 315,
		gen: 4,
		desc: "Holder's Rock-type attacks have 1.2x power.",
	},
	"rockmemory": {
		id: "rockmemory",
		name: "Rock Memory",
		spritenum: 672,
		onMemory: 'Rock',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 773) || pokemon.baseTemplate.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Rock",
		itemUser: ["Silvally-Rock"],
		num: 908,
		gen: 7,
		desc: "Holder's Multi-Attack is Rock type.",
	},
	"rockiumz": {
		id: "rockiumz",
		name: "Rockium Z",
		spritenum: 643,
		onPlate: 'Rock',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Rock",
		forcedForme: "Arceus-Rock",
		num: 788,
		gen: 7,
		isNonstandard: "Past",
		desc: "If holder has a Rock move, this item allows it to use a Rock Z-Move.",
	},
	"rockyhelmet": {
		id: "rockyhelmet",
		name: "Rocky Helmet",
		spritenum: 417,
		fling: {
			basePower: 60,
		},
		onAfterDamageOrder: 2,
		onAfterDamage(damage, target, source, move) {
			if (source && source !== target && move && move.flags['contact']) {
				this.damage(source.baseMaxhp / 6, source, target);
			}
		},
		num: 540,
		gen: 5,
		desc: "If holder is hit by a contact move, the attacker loses 1/6 of its max HP.",
	},
	"roomservice": {
		id: "roomservice",
		name: "Room Service",
		spritenum: 0,
		fling: {
			basePower: 100,
		},
		onUpdate(pokemon) {
			if (this.field.getPseudoWeather('trickroom') && pokemon.useItem()) {
				this.boost({spe: -1}, pokemon, pokemon);
			}
		},
		num: 1122,
		gen: 8,
		desc: "If Trick Room is active, lowers holder's Speed by 1 stage. Single use.",
	},
	"rootfossil": {
		id: "rootfossil",
		name: "Root Fossil",
		spritenum: 418,
		fling: {
			basePower: 100,
		},
		num: 99,
		gen: 3,
		desc: "Can be revived into Lileep.",
	},
	"roseincense": {
		id: "roseincense",
		name: "Rose Incense",
		spritenum: 419,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Grass') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: 318,
		gen: 4,
		desc: "Holder's Grass-type attacks have 1.2x power.",
	},
	"roseliberry": {
		id: "roseliberry",
		name: "Roseli Berry",
		spritenum: 603,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Fairy",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Fairy' && target.getMoveHitData(move).typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 686,
		gen: 6,
		desc: "Halves damage taken from a supereffective Fairy-type attack. Single use.",
	},
	"rowapberry": {
		id: "rowapberry",
		name: "Rowap Berry",
		spritenum: 420,
		isBerry: true,
		isUnreleased: true,
		naturalGift: {
			basePower: 100,
			type: "Dark",
		},
		onAfterDamage(damage, target, source, move) {
			if (source && source.hp && source !== target && move && move.category === 'Special') {
				if (target.eatItem()) {
					this.damage(source.baseMaxhp / 8, source, target);
				}
			}
		},
		onEat() { },
		num: 212,
		gen: 4,
		desc: "If holder is hit by a special move, attacker loses 1/8 of its max HP. Single use.",
	},
	"rustedshield": {
		id: "rustedshield",
		name: "Rusted Shield",
		spritenum: 0,
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 889) || pokemon.baseTemplate.num === 889) {
				return false;
			}
			return true;
		},
		forcedForme: "Zamazenta-Crowned",
		itemUser: ["Zamazenta-Crowned"],
		num: 1104,
		gen: 8,
		desc: "If held by a Zamazenta, this item changes it to Crowned Forme.",
	},
	"rustedsword": {
		id: "rustedsword",
		name: "Rusted Sword",
		spritenum: 0,
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 888) || pokemon.baseTemplate.num === 888) {
				return false;
			}
			return true;
		},
		forcedForme: "Zacian-Crowned",
		itemUser: ["Zacian-Crowned"],
		num: 1103,
		gen: 8,
		desc: "If held by a Zacian, this item changes it to Crowned Forme.",
	},
	"sablenite": {
		id: "sablenite",
		name: "Sablenite",
		spritenum: 614,
		megaStone: "Sableye-Mega",
		megaEvolves: "Sableye",
		itemUser: ["Sableye"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 754,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Sableye, this item allows it to Mega Evolve in battle.",
	},
	"sachet": {
		id: "sachet",
		name: "Sachet",
		spritenum: 691,
		fling: {
			basePower: 80,
		},
		num: 647,
		gen: 6,
		desc: "Evolves Spritzee into Aromatisse when traded.",
	},
	"safariball": {
		id: "safariball",
		name: "Safari Ball",
		spritenum: 425,
		num: 5,
		gen: 1,
		isPokeball: true,
		desc: "A special Poke Ball that is used only in the Safari Zone and Great Marsh.",
	},
	"safetygoggles": {
		id: "safetygoggles",
		name: "Safety Goggles",
		spritenum: 604,
		fling: {
			basePower: 80,
		},
		onImmunity(type, pokemon) {
			if (type === 'sandstorm' || type === 'hail' || type === 'powder') return false;
		},
		onTryHit(pokemon, source, move) {
			if (move.flags['powder'] && pokemon !== source && this.dex.getImmunity('powder', pokemon)) {
				this.add('-activate', pokemon, 'item: Safety Goggles', move.name);
				return null;
			}
		},
		num: 650,
		gen: 6,
		desc: "Holder is immune to powder moves and damage from Sandstorm or Hail.",
	},
	"sailfossil": {
		id: "sailfossil",
		name: "Sail Fossil",
		spritenum: 695,
		fling: {
			basePower: 100,
		},
		num: 711,
		gen: 6,
		desc: "Can be revived into Amaura.",
	},
	"salacberry": {
		id: "salacberry",
		name: "Salac Berry",
		spritenum: 426,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Fighting",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 && pokemon.hasAbility('gluttony'))) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.boost({spe: 1});
		},
		num: 203,
		gen: 3,
		desc: "Raises holder's Speed by 1 stage when at 1/4 max HP or less. Single use.",
	},
	"salamencite": {
		id: "salamencite",
		name: "Salamencite",
		spritenum: 627,
		megaStone: "Salamence-Mega",
		megaEvolves: "Salamence",
		itemUser: ["Salamence"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 769,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Salamence, this item allows it to Mega Evolve in battle.",
	},
	"sceptilite": {
		id: "sceptilite",
		name: "Sceptilite",
		spritenum: 613,
		megaStone: "Sceptile-Mega",
		megaEvolves: "Sceptile",
		itemUser: ["Sceptile"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 753,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Sceptile, this item allows it to Mega Evolve in battle.",
	},
	"scizorite": {
		id: "scizorite",
		name: "Scizorite",
		spritenum: 605,
		megaStone: "Scizor-Mega",
		megaEvolves: "Scizor",
		itemUser: ["Scizor"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 670,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Scizor, this item allows it to Mega Evolve in battle.",
	},
	"scopelens": {
		id: "scopelens",
		name: "Scope Lens",
		spritenum: 429,
		fling: {
			basePower: 30,
		},
		onModifyCritRatio(critRatio) {
			return critRatio + 1;
		},
		num: 232,
		gen: 2,
		desc: "Holder's critical hit ratio is raised by 1 stage.",
	},
	"seaincense": {
		id: "seaincense",
		name: "Sea Incense",
		spritenum: 430,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Water') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: 254,
		gen: 3,
		desc: "Holder's Water-type attacks have 1.2x power.",
	},
	"sharpbeak": {
		id: "sharpbeak",
		name: "Sharp Beak",
		spritenum: 436,
		fling: {
			basePower: 50,
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Flying') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: 244,
		gen: 2,
		desc: "Holder's Flying-type attacks have 1.2x power.",
	},
	"sharpedonite": {
		id: "sharpedonite",
		name: "Sharpedonite",
		spritenum: 619,
		megaStone: "Sharpedo-Mega",
		megaEvolves: "Sharpedo",
		itemUser: ["Sharpedo"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 759,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Sharpedo, this item allows it to Mega Evolve in battle.",
	},
	"shedshell": {
		id: "shedshell",
		name: "Shed Shell",
		spritenum: 437,
		fling: {
			basePower: 10,
		},
		onTrapPokemonPriority: -10,
		onTrapPokemon(pokemon) {
			pokemon.trapped = pokemon.maybeTrapped = false;
		},
		num: 295,
		gen: 4,
		desc: "Holder may switch out even when trapped by another Pokemon, or by Ingrain.",
	},
	"shellbell": {
		id: "shellbell",
		name: "Shell Bell",
		spritenum: 438,
		fling: {
			basePower: 30,
		},
		onAfterMoveSecondarySelfPriority: -1,
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (move.category !== 'Status') {
				this.heal(pokemon.lastDamage / 8, pokemon);
			}
		},
		num: 253,
		gen: 3,
		desc: "After an attack, holder gains 1/8 of the damage in HP dealt to other Pokemon.",
	},
	"shiftrite": {
		id: "shiftrite",
		name: "Shiftrite",
		spritenum: 732,
		megaStone: "Shiftry-Mega",
		megaEvolves: "Shiftry",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 960,
		gen: 7,
		desc: "If held by a Shiftry, this item allows it to Mega Evolve in battle.",
	},
	"shinystone": {
		id: "shinystone",
		name: "Shiny Stone",
		spritenum: 439,
		fling: {
			basePower: 80,
		},
		num: 107,
		gen: 4,
		desc: "Evolves Togetic into Togekiss, Roselia into Roserade, Minccino into Cinccino, and Floette into Florges when used.",
		shortDesc: "Evolves certain species of Pokemon when used.",
	},
	"shockdrive": {
		id: "shockdrive",
		name: "Shock Drive",
		spritenum: 442,
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 649) || pokemon.baseTemplate.num === 649) {
				return false;
			}
			return true;
		},
		onDrive: 'Electric',
		forcedForme: "Genesect-Shock",
		itemUser: ["Genesect-Shock"],
		num: 117,
		gen: 5,
		desc: "Holder's Techno Blast is Electric type.",
	},
	"shucaberry": {
		id: "shucaberry",
		name: "Shuca Berry",
		spritenum: 443,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ground",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Ground' && target.getMoveHitData(move).typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 191,
		gen: 4,
		desc: "Halves damage taken from a supereffective Ground-type attack. Single use.",
	},
	"silkscarf": {
		id: "silkscarf",
		name: "Silk Scarf",
		spritenum: 444,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Normal') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: 251,
		gen: 3,
		desc: "Holder's Normal-type attacks have 1.2x power.",
	},
	"silverpowder": {
		id: "silverpowder",
		name: "SilverPowder",
		spritenum: 447,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Bug') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: 222,
		gen: 2,
		desc: "Holder's Bug-type attacks have 1.2x power.",
	},
	"sitrusberry": {
		id: "sitrusberry",
		name: "Sitrus Berry",
		spritenum: 448,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Psychic",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		onTryEatItem(item, pokemon) {
			if (!this.runEvent('TryHeal', pokemon)) return false;
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp / 4);
		},
		num: 158,
		gen: 3,
		desc: "Restores 1/4 max HP when at 1/2 max HP or less. Single use.",
	},
	"skullfossil": {
		id: "skullfossil",
		name: "Skull Fossil",
		spritenum: 449,
		fling: {
			basePower: 100,
		},
		num: 105,
		gen: 4,
		desc: "Can be revived into Cranidos.",
	},
	"skyplate": {
		id: "skyplate",
		name: "Sky Plate",
		spritenum: 450,
		onPlate: 'Flying',
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Flying') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Flying",
		num: 306,
		gen: 4,
		desc: "Holder's Flying-type attacks have 1.2x power. Judgment is Flying type.",
	},
	"slowbronite": {
		id: "slowbronite",
		name: "Slowbronite",
		spritenum: 620,
		megaStone: "Slowbro-Mega",
		megaEvolves: "Slowbro",
		itemUser: ["Slowbro"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 760,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Slowbro, this item allows it to Mega Evolve in battle.",
	},
	"smoothrock": {
		id: "smoothrock",
		name: "Smooth Rock",
		spritenum: 453,
		fling: {
			basePower: 10,
		},
		num: 283,
		gen: 4,
		desc: "Holder's use of Sandstorm lasts 8 turns instead of 5.",
	},
	"snorliumz": {
		id: "snorliumz",
		name: "Snorlium Z",
		spritenum: 656,
		onTakeItem: false,
		zMove: "Pulverizing Pancake",
		zMoveFrom: "Giga Impact",
		itemUser: ["Snorlax"],
		num: 804,
		gen: 7,
		isNonstandard: "Past",
		desc: "If held by a Snorlax with Giga Impact, it can use Pulverizing Pancake.",
	},
	"snowball": {
		id: "snowball",
		name: "Snowball",
		spritenum: 606,
		fling: {
			basePower: 30,
		},
		onAfterDamage(damage, target, source, move) {
			if (move.type === 'Ice' && target.useItem()) {
				this.boost({atk: 1});
			}
		},
		num: 649,
		gen: 6,
		desc: "Raises holder's Attack by 1 if hit by an Ice-type attack. Single use.",
	},
	"softsand": {
		id: "softsand",
		name: "Soft Sand",
		spritenum: 456,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Ground') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: 237,
		gen: 2,
		desc: "Holder's Ground-type attacks have 1.2x power.",
	},
	"solganiumz": {
		id: "solganiumz",
		name: "Solganium Z",
		spritenum: 685,
		onTakeItem: false,
		zMove: "Searing Sunraze Smash",
		zMoveFrom: "Sunsteel Strike",
		itemUser: ["Solgaleo", "Necrozma-Dusk-Mane"],
		num: 921,
		gen: 7,
		isNonstandard: "Past",
		desc: "Solgaleo or Dusk Mane Necrozma with Sunsteel Strike can use a special Z-Move.",
	},
	"souldew": {
		id: "souldew",
		name: "Soul Dew",
		spritenum: 459,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move && (user.baseTemplate.num === 380 || user.baseTemplate.num === 381) && (move.type === 'Psychic' || move.type === 'Dragon')) {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		itemUser: ["Latios", "Latias"],
		num: 225,
		gen: 3,
		desc: "If held by a Latias/Latios, its Dragon- and Psychic-type moves have 1.2x power.",
	},
	"spelltag": {
		id: "spelltag",
		name: "Spell Tag",
		spritenum: 461,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Ghost') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: 247,
		gen: 2,
		desc: "Holder's Ghost-type attacks have 1.2x power.",
	},
	"spelonberry": {
		id: "spelonberry",
		name: "Spelon Berry",
		isUnreleased: true,
		spritenum: 462,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Dark",
		},
		onEat: false,
		num: 179,
		gen: 3,
		desc: "Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.",
	},
	"spiritombite": {
		id: "spiritombite",
		name: "Spiritombite",
		spritenum: 733,
		megaStone: "Spiritomb-Mega",
		megaEvolves: "Spiritomb",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 961,
		gen: 7,
		desc: "If held by a Spiritomb, this item allows it to Mega Evolve in battle.",
	},
	"splashplate": {
		id: "splashplate",
		name: "Splash Plate",
		spritenum: 463,
		onPlate: 'Water',
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Water') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Water",
		num: 299,
		gen: 4,
		desc: "Holder's Water-type attacks have 1.2x power. Judgment is Water type.",
	},
	"spookyplate": {
		id: "spookyplate",
		name: "Spooky Plate",
		spritenum: 464,
		onPlate: 'Ghost',
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Ghost') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Ghost",
		num: 310,
		gen: 4,
		desc: "Holder's Ghost-type attacks have 1.2x power. Judgment is Ghost type.",
	},
	"sportball": {
		id: "sportball",
		name: "Sport Ball",
		spritenum: 465,
		num: 499,
		gen: 2,
		isPokeball: true,
		desc: "A special Poke Ball for the Bug-Catching Contest.",
	},
	"starfberry": {
		id: "starfberry",
		name: "Starf Berry",
		spritenum: 472,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Psychic",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 && pokemon.hasAbility('gluttony'))) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			let stats = [];
			for (let stat in pokemon.boosts) {
				// @ts-ignore
				if (stat !== 'accuracy' && stat !== 'evasion' && pokemon.boosts[stat] < 6) {
					stats.push(stat);
				}
			}
			if (stats.length) {
				let randomStat = this.sample(stats);
				/**@type {{[k: string]: number}} */
				let boost = {};
				boost[randomStat] = 2;
				this.boost(boost);
			}
		},
		num: 207,
		gen: 3,
		desc: "Raises a random stat by 2 when at 1/4 max HP or less (not acc/eva). Single use.",
	},
	"starsweet": {
		id: "starsweet",
		name: "Star Sweet",
		spritenum: 0,
		fling: {
			basePower: 10,
		},
		num: 1114,
		gen: 8,
		desc: "Evolves Milcery into Alcremie when held and spun around.",
	},
	"steelixite": {
		id: "steelixite",
		name: "Steelixite",
		spritenum: 621,
		megaStone: "Steelix-Mega",
		megaEvolves: "Steelix",
		itemUser: ["Steelix"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 761,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Steelix, this item allows it to Mega Evolve in battle.",
	},
	"steelixitefire": {
		id: "steelixitefire",
		name: "Steelixite Fire",
		spritenum: 734,
		megaStone: "Steelix-Mega-Fire",
		megaEvolves: "Steelix",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 962,
		gen: 7,
		desc: "If held by a Steelix, this item allows it to Mega Evolve in battle.",
	},
	"steelgem": {
		id: "steelgem",
		name: "Steel Gem",
		spritenum: 473,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Steel') {
				if (source.useItem()) {
					this.add('-enditem', source, 'Steel Gem', '[from] gem', '[move] ' + move.name);
					source.addVolatile('gem');
				}
			}
		},
		num: 563,
		gen: 5,
		isNonstandard: 'Past',
		desc: "Holder's first successful Steel-type attack will have 1.3x power. Single use.",
	},
	"steelmemory": {
		id: "steelmemory",
		name: "Steel Memory",
		spritenum: 675,
		onMemory: 'Steel',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 773) || pokemon.baseTemplate.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Steel",
		itemUser: ["Silvally-Steel"],
		num: 911,
		gen: 7,
		desc: "Holder's Multi-Attack is Steel type.",
	},
	"steeliumz": {
		id: "steeliumz",
		name: "Steelium Z",
		spritenum: 647,
		onPlate: 'Steel',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Steel",
		forcedForme: "Arceus-Steel",
		num: 792,
		gen: 7,
		isNonstandard: "Past",
		desc: "If holder has a Steel move, this item allows it to use a Steel Z-Move.",
	},
	"stick": {
		id: "stick",
		name: "Stick",
		fling: {
			basePower: 60,
		},
		spritenum: 475,
		onModifyCritRatio(critRatio, user) {
			if (user.baseTemplate.species === 'Farfetch\'d') {
				return critRatio + 2;
			}
		},
		itemUser: ["Farfetch'd"],
		num: 259,
		gen: 2,
		isNonstandard: "Past",
		desc: "If held by a Farfetch'd, its critical hit ratio is raised by 2 stages.",
	},
	"stickybarb": {
		id: "stickybarb",
		name: "Sticky Barb",
		spritenum: 476,
		fling: {
			basePower: 80,
		},
		onResidualOrder: 26,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			this.damage(pokemon.baseMaxhp / 8);
		},
		onHit(target, source, move) {
			if (source && source !== target && !source.item && move && move.flags['contact']) {
				let barb = target.takeItem();
				if (!barb) return; // Gen 4 Multitype
				source.setItem(barb);
				// no message for Sticky Barb changing hands
			}
		},
		num: 288,
		gen: 4,
		desc: "Each turn, holder loses 1/8 max HP. An attacker making contact can receive it.",
	},
	"stoneplate": {
		id: "stoneplate",
		name: "Stone Plate",
		spritenum: 477,
		onPlate: 'Rock',
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Rock') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Rock",
		num: 309,
		gen: 4,
		desc: "Holder's Rock-type attacks have 1.2x power. Judgment is Rock type.",
	},
	"strawberrysweet": {
		id: "strawberrysweet",
		name: "Strawberry Sweet",
		spritenum: 0,
		fling: {
			basePower: 10,
		},
		num: 1109,
		gen: 8,
		desc: "Evolves Milcery into Alcremie when held and spun around.",
	},
	"stunfiskite": {
		id: "stunfiskite",
		name: "Stunfiskite",
		spritenum: 735,
		megaStone: "Stunfisk-Mega",
		megaEvolves: "Stunfisk",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 963,
		gen: 7,
		desc: "If held by a Stunfisk, this item allows it to Mega Evolve in battle.",
	},
	"suduwoodite": {
		id: "sudowoodite",
		name: "Sudowoodite",
		spritenum: 736,
		megaStone: "Sudowoodo-Mega",
		megaEvolves: "Sudowoodo",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 964,
		gen: 7,
		desc: "If held by a Sudowoodo, this item allows it to Mega Evolve in battle.",
	},
	"sunflorite": {
		id: "sunflorite",
		name: "Sunflorite",
		spritenum: 737,
		megaStone: "Sunflora-Mega",
		megaEvolves: "Sunflora",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 965,
		gen: 7,
		desc: "If held by a Sunflora, this item allows it to Mega Evolve in battle.",
	},
	"sunstone": {
		id: "sunstone",
		name: "Sun Stone",
		spritenum: 480,
		fling: {
			basePower: 30,
		},
		num: 80,
		gen: 2,
		desc: "Evolves Gloom into Bellossom, Sunkern into Sunflora, Cottonee into Whimsicott, Petilil into Lilligant, and Helioptile into Heliolisk when used.",
		shortDesc: "Evolves certain species of Pokemon when used.",
	},
	"swampertite": {
		id: "swampertite",
		name: "Swampertite",
		spritenum: 612,
		megaStone: "Swampert-Mega",
		megaEvolves: "Swampert",
		itemUser: ["Swampert"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 752,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Swampert, this item allows it to Mega Evolve in battle.",
	},
	"sweetapple": {
		id: "sweetapple",
		name: "Sweet Apple",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		num: 1116,
		gen: 8,
		desc: "Evolves Applin into Appletun when used.",
	},
	"tamatoberry": {
		id: "tamatoberry",
		name: "Tamato Berry",
		spritenum: 486,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Psychic",
		},
		onEat: false,
		num: 174,
		gen: 3,
		desc: "Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.",
	},
	"tangaberry": {
		id: "tangaberry",
		name: "Tanga Berry",
		spritenum: 487,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Bug",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Bug' && target.getMoveHitData(move).typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 194,
		gen: 4,
		desc: "Halves damage taken from a supereffective Bug-type attack. Single use.",
	},
	"tapuniumz": {
		id: "tapuniumz",
		name: "Tapunium Z",
		spritenum: 653,
		onTakeItem: false,
		zMove: "Guardian of Alola",
		zMoveFrom: "Nature's Madness",
		itemUser: ["Tapu Koko", "Tapu Lele", "Tapu Bulu", "Tapu Fini"],
		num: 801,
		gen: 7,
		isNonstandard: "Past",
		desc: "If held by a Tapu with Nature's Madness, it can use Guardian of Alola.",
	},
	"tartapple": {
		id: "tartapple",
		name: "Tart Apple",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		num: 1117,
		gen: 8,
		desc: "Evolves Applin into Flapple when used.",
	},
	"terrainextender": {
		id: "terrainextender",
		name: "Terrain Extender",
		spritenum: 662,
		fling: {
			basePower: 60,
		},
		num: 879,
		gen: 7,
		desc: "Holder's use of Electric/Grassy/Misty/Psychic Terrain lasts 8 turns instead of 5.",
	},
	"thickclub": {
		id: "thickclub",
		name: "Thick Club",
		spritenum: 491,
		fling: {
			basePower: 90,
		},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.baseTemplate.baseSpecies === 'Cubone' || pokemon.baseTemplate.baseSpecies === 'Marowak') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Marowak", "Cubone"],
		num: 258,
		gen: 2,
		desc: "If held by a Cubone or a Marowak, its Attack is doubled.",
	},
	"throatspray": {
		id: "throatspray",
		name: "Throat Spray",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onAfterMoveSecondarySelf(target, source, move) {
			if (move.flags['sound'] && target.useItem()) {
				this.boost({spa: 1}); // TODO: Find exact value, and whether this activates before or after use
			}
		},
		num: 1118,
		gen: 8,
		desc: "Raises holder's Special Attack by 1 stage after using a sound move. Single use.",
	},
	"thunderstone": {
		id: "thunderstone",
		name: "Thunder Stone",
		spritenum: 492,
		fling: {
			basePower: 30,
		},
		num: 83,
		gen: 1,
		desc: "Evolves Pikachu into Raichu or Alolan Raichu, Eevee into Jolteon, Eelektrik into Eelektross, and Charjabug into Vikavolt when used.",
		shortDesc: "Evolves certain species of Pokemon when used.",
	},
	"timerball": {
		id: "timerball",
		name: "Timer Ball",
		spritenum: 494,
		num: 10,
		gen: 3,
		isPokeball: true,
		desc: "A Poke Ball that becomes better the more turns there are in a battle.",
	},
	"toxicorb": {
		id: "toxicorb",
		name: "Toxic Orb",
		spritenum: 515,
		fling: {
			basePower: 30,
			status: 'tox',
		},
		onResidualOrder: 26,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			pokemon.trySetStatus('tox', pokemon);
		},
		num: 272,
		gen: 4,
		desc: "At the end of every turn, this item attempts to badly poison the holder.",
	},
	"toxicplate": {
		id: "toxicplate",
		name: "Toxic Plate",
		spritenum: 516,
		onPlate: 'Poison',
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Poison') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Poison",
		num: 304,
		gen: 4,
		desc: "Holder's Poison-type attacks have 1.2x power. Judgment is Poison type.",
},
"trickrock": {
	id: "trickrock",
	name: "Trick Rock",
	spritenum: 701,
	fling: {
		basePower: 60,
	},
	num: 928,
	gen: 7,
	desc: "Holder's use of Trick Room lasts 8 turns instead of 5.",
},
	"twistedspoon": {
		id: "twistedspoon",
		name: "Twisted Spoon",
		spritenum: 520,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Psychic') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: 248,
		gen: 2,
		desc: "Holder's Psychic-type attacks have 1.2x power.",
	},
	"typhlosionite": {
		id: "typhlosionite",
		name: "Typhlosionite",
		spritenum: 738,
		megaStone: "Typhlosion-Mega",
		megaEvolves: "Typhlosion",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 966,
		gen: 7,
		desc: "If held by a Typhlosion, this item allows it to Mega Evolve in battle.",
	},
	"tyranitararmor": {
		id: "tyranitararmor",
		name: "Tyranitar Armor",
		spritenum: 703,
		onSwitchIn(pokemon) {
			if (pokemon.isActive && pokemon.baseTemplate.species === 'Tyranitar') {
				this.insertQueue({pokemon: pokemon, choice: 'runPrimal'});
			}
		},
		onPrimal(pokemon) {
			pokemon.formeChange('Tyranitar-Armor', this.effect, true);
		},
		onTakeItem(item, source) {
			if (source.baseTemplate.baseSpecies === 'Tyranitar') return false;
			return true;
		},
		num: 931,
		gen: 7,
		desc: "If held by a Tyranitar this item triggers its Armor in battle.",
	},
	"tyranitarite": {
		id: "tyranitarite",
		name: "Tyranitarite",
		spritenum: 607,
		megaStone: "Tyranitar-Mega",
		megaEvolves: "Tyranitar",
		itemUser: ["Tyranitar"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 669,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Tyranitar, this item allows it to Mega Evolve in battle.",
	},
	"ultraball": {
		id: "ultraball",
		name: "Ultra Ball",
		spritenum: 521,
		num: 2,
		gen: 1,
		isPokeball: true,
		desc: "An ultra-performance Ball that provides a higher catch rate than a Great Ball.",
	},
	"ultranecroziumz": {
		id: "ultranecroziumz",
		name: "Ultranecrozium Z",
		spritenum: 687,
		onTakeItem: false,
		zMove: "Light That Burns the Sky",
		zMoveFrom: "Photon Geyser",
		itemUser: ["Necrozma-Ultra"],
		num: 923,
		gen: 7,
		isNonstandard: "Past",
		desc: "Dusk Mane/Dawn Wings Necrozma: Ultra Burst, then Z-Move w/ Photon Geyser.",
	},
	"upgrade": {
		id: "upgrade",
		name: "Up-Grade",
		spritenum: 523,
		fling: {
			basePower: 30,
		},
		num: 252,
		gen: 2,
		desc: "Evolves Porygon into Porygon2 when traded.",
	},
	"venusaurite": {
		id: "venusaurite",
		name: "Venusaurite",
		spritenum: 608,
		megaStone: "Venusaur-Mega",
		megaEvolves: "Venusaur",
		itemUser: ["Venusaur"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 659,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Venusaur, this item allows it to Mega Evolve in battle.",
	},
	"wacanberry": {
		id: "wacanberry",
		name: "Wacan Berry",
		spritenum: 526,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Electric",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Electric' && target.getMoveHitData(move).typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 186,
		gen: 4,
		desc: "Halves damage taken from a supereffective Electric-type attack. Single use.",
	},
	"watergem": {
		id: "watergem",
		name: "Water Gem",
		spritenum: 528,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || ['firepledge', 'grasspledge', 'waterpledge'].includes(move.id)) return;
			if (move.type === 'Water') {
				if (source.useItem()) {
					this.add('-enditem', source, 'Water Gem', '[from] gem', '[move] ' + move.name);
					source.addVolatile('gem');
				}
			}
		},
		num: 549,
		gen: 5,
		isNonstandard: 'Past',
		desc: "Holder's first successful Water-type attack will have 1.3x power. Single use.",
	},
	"watermemory": {
		id: "watermemory",
		name: "Water Memory",
		spritenum: 677,
		onMemory: 'Water',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 773) || pokemon.baseTemplate.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Water",
		itemUser: ["Silvally-Water"],
		num: 913,
		gen: 7,
		desc: "Holder's Multi-Attack is Water type.",
	},
	"waterstone": {
		id: "waterstone",
		name: "Water Stone",
		spritenum: 529,
		fling: {
			basePower: 30,
		},
		num: 84,
		gen: 1,
		desc: "Evolves Poliwhirl into Poliwrath, Shellder into Cloyster, Staryu into Starmie, Eevee into Vaporeon, Lombre into Ludicolo, and Panpour into Simipour when used.",
		shortDesc: "Evolves certain species of Pokemon when used.",
	},
	"wateriumz": {
		id: "wateriumz",
		name: "Waterium Z",
		spritenum: 633,
		onPlate: 'Water',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Water",
		forcedForme: "Arceus-Water",
		num: 778,
		gen: 7,
		isNonstandard: "Past",
		desc: "If holder has a Water move, this item allows it to use a Water Z-Move.",
	},
	"watmelberry": {
		id: "watmelberry",
		name: "Watmel Berry",
		isUnreleased: true,
		spritenum: 530,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Fire",
		},
		onEat: false,
		num: 181,
		gen: 3,
		desc: "Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.",
	},
	"waveincense": {
		id: "waveincense",
		name: "Wave Incense",
		spritenum: 531,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Water') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: 317,
		gen: 4,
		desc: "Holder's Water-type attacks have 1.2x power.",
	},
	"weaknesspolicy": {
		id: "weaknesspolicy",
		name: "Weakness Policy",
		spritenum: 609,
		fling: {
			basePower: 80,
		},
		onHitPriority: 1,
		onHit(target, source, move) {
			if (target.hp && move.category !== 'Status' && !move.damage && !move.damageCallback && target.getMoveHitData(move).typeMod > 0 && target.useItem()) {
				this.boost({atk: 2, spa: 2});
			}
		},
		num: 639,
		gen: 6,
		desc: "If holder is hit super effectively, raises Attack, Sp. Atk by 2 stages. Single use.",
	},
	"wepearberry": {
		id: "wepearberry",
		name: "Wepear Berry",
		isUnreleased: true,
		spritenum: 533,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Electric",
		},
		onEat: false,
		num: 167,
		gen: 3,
		desc: "Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.",
	},
	"whippeddream": {
		id: "whippeddream",
		name: "Whipped Dream",
		spritenum: 692,
		fling: {
			basePower: 80,
		},
		num: 646,
		gen: 6,
		desc: "Evolves Swirlix into Slurpuff when traded.",
	},
	"whiteherb": {
		id: "whiteherb",
		name: "White Herb",
		spritenum: 535,
		fling: {
			basePower: 10,
			effect(pokemon) {
				let activate = false;
				/**@type {{[k: string]: number}} */
				let boosts = {};
				for (let i in pokemon.boosts) {
					// @ts-ignore
					if (pokemon.boosts[i] < 0) {
						activate = true;
						boosts[i] = 0;
					}
				}
				if (activate) {
					pokemon.setBoost(boosts);
					this.add('-clearnegativeboost', pokemon, '[silent]');
				}
			},
		},
		onUpdate(pokemon) {
			let activate = false;
			/**@type {{[k: string]: number}} */
			let boosts = {};
			for (let i in pokemon.boosts) {
				// @ts-ignore
				if (pokemon.boosts[i] < 0) {
					activate = true;
					boosts[i] = 0;
				}
			}
			if (activate && pokemon.useItem()) {
				pokemon.setBoost(boosts);
				this.add('-clearnegativeboost', pokemon, '[silent]');
			}
		},
		num: 214,
		gen: 3,
		desc: "Restores all lowered stat stages to 0 when one is less than 0. Single use.",
	},
	"widelens": {
		id: "widelens",
		name: "Wide Lens",
		spritenum: 537,
		fling: {
			basePower: 10,
		},
		onSourceModifyAccuracy(accuracy) {
			if (typeof accuracy === 'number') {
				return accuracy * 1.1;
			}
		},
		num: 265,
		gen: 4,
		desc: "The accuracy of attacks by the holder is 1.1x.",
	},
	"wikiberry": {
		id: "wikiberry",
		name: "Wiki Berry",
		spritenum: 538,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Rock",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 && pokemon.hasAbility('gluttony'))) {
				pokemon.eatItem();
			}
		},
		onTryEatItem(item, pokemon) {
			if (!this.runEvent('TryHeal', pokemon)) return false;
		},
		onEat(pokemon) {
			this.heal(pokemon.maxhp * 0.33);
			if (pokemon.getNature().minus === 'spa') {
				pokemon.addVolatile('confusion');
			}
		},
		num: 160,
		gen: 3,
		desc: "Restores 33% max HP at 1/4 max HP or less; confuses if -SpA Nature. Single use.",
	},
	"wiseglasses": {
		id: "wiseglasses",
		name: "Wise Glasses",
		spritenum: 539,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.category === 'Special') {
				return this.chainModify([0x1199, 0x1000]);
			}
		},
		num: 267,
		gen: 4,
		desc: "Holder's special attacks have 1.1x power.",
	},
	"yacheberry": {
		id: "yacheberry",
		name: "Yache Berry",
		spritenum: 567,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ice",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Ice' && target.getMoveHitData(move).typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 188,
		gen: 4,
		desc: "Halves damage taken from a supereffective Ice-type attack. Single use.",
	},
	"zapplate": {
		id: "zapplate",
		name: "Zap Plate",
		spritenum: 572,
		onPlate: 'Electric',
		onBasePowerPriority: 6,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Electric') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Electric",
		num: 300,
		gen: 4,
		desc: "Holder's Electric-type attacks have 1.2x power. Judgment is Electric type.",
	},
	"zebstrikite": {
		id: "zebstrikite",
		name: "Zebstrikite",
		spritenum: 739,
		megaStone: "Zebstrika-Mega",
		megaEvolves: "Zebstrika",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 967,
		gen: 7,
		desc: "If held by a Zebstrika, this item allows it to Mega Evolve in battle.",
	},
	"zekromarmor": {
		id: "zekromarmor",
		name: "Zekrom Armor",
		spritenum: 706,
		onSwitchIn(pokemon) {
			if (pokemon.isActive && pokemon.baseTemplate.species === 'Zekrom') {
				this.insertQueue({pokemon: pokemon, choice: 'runPrimal'});
			}
		},
		onPrimal(pokemon) {
			pokemon.formeChange('Zekrom-Armor', this.effect, true);
		},
		onTakeItem(item, source) {
			if (source.baseTemplate.baseSpecies === 'Zekrom') return false;
			return true;
		},
		num: 934,
		gen: 7,
		desc: "If held by a Zekrom this item triggers its Armor in battle.",
	},
	"zoomlens": {
		id: "zoomlens",
		name: "Zoom Lens",
		spritenum: 574,
		fling: {
			basePower: 10,
		},
		onSourceModifyAccuracy(accuracy, target) {
			if (typeof accuracy === 'number' && !this.willMove(target)) {
				this.debug('Zoom Lens boosting accuracy');
				return accuracy * 1.2;
			}
		},
		num: 276,
		gen: 4,
		desc: "The accuracy of attacks by the holder is 1.2x if it moves after its target.",
	},
	"zoronite": {
		id: "zoronite",
		name: "Zoronite",
		spritenum: 740,
		megaStone: "Zoroark-Mega",
		megaEvolves: "Zoroark",
		onTakeItem(item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
		},
		num: 968,
		gen: 7,
		desc: "If held by a Zoroark, this item allows it to Mega Evolve in battle.",
	},

	// Gen 2 items

	"berserkgene": {
		id: "berserkgene",
		name: "Berserk Gene",
		spritenum: 388,
		onUpdate(pokemon) {
			this.boost({atk: 2});
			pokemon.addVolatile('confusion');
			pokemon.setItem('');
		},
		num: 0,
		gen: 2,
		isNonstandard: "Past",
		desc: "(Gen 2) On switch-in, raises holder's Attack by 2 and confuses it. Single use.",
	},
	"berry": {
		id: "berry",
		name: "Berry",
		spritenum: 319,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Poison",
		},
		onResidualOrder: 5,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		onTryEatItem(item, pokemon) {
			if (!this.runEvent('TryHeal', pokemon)) return false;
		},
		onEat(pokemon) {
			this.heal(10);
		},
		num: 155,
		gen: 2,
		isNonstandard: "Past",
		desc: "(Gen 2) Restores 10 HP when at 1/2 max HP or less. Single use.",
	},
	"bitterberry": {
		id: "bitterberry",
		name: "Bitter Berry",
		spritenum: 334,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ground",
		},
		onUpdate(pokemon) {
			if (pokemon.volatiles['confusion']) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			pokemon.removeVolatile('confusion');
		},
		num: 156,
		gen: 2,
		isNonstandard: "Past",
		desc: "(Gen 2) Holder is cured if it is confused. Single use.",
	},
	"burntberry": {
		id: "burntberry",
		name: "Burnt Berry",
		spritenum: 13,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ice",
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'frz') {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			if (pokemon.status === 'frz') {
				pokemon.cureStatus();
			}
		},
		num: 153,
		gen: 2,
		isNonstandard: "Past",
		desc: "(Gen 2) Holder is cured if it is frozen. Single use.",
	},
	"goldberry": {
		id: "goldberry",
		name: "Gold Berry",
		spritenum: 448,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Psychic",
		},
		onResidualOrder: 5,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		onTryEatItem(item, pokemon) {
			if (!this.runEvent('TryHeal', pokemon)) return false;
		},
		onEat(pokemon) {
			this.heal(30);
		},
		num: 158,
		gen: 2,
		isNonstandard: "Past",
		desc: "(Gen 2) Restores 30 HP when at 1/2 max HP or less. Single use.",
	},
	"iceberry": {
		id: "iceberry",
		name: "Ice Berry",
		spritenum: 381,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Grass",
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'brn') {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			if (pokemon.status === 'brn') {
				pokemon.cureStatus();
			}
		},
		num: 152,
		gen: 2,
		isNonstandard: "Past",
		desc: "(Gen 2) Holder is cured if it is burned. Single use.",
	},
	"mintberry": {
		id: "mintberry",
		name: "Mint Berry",
		spritenum: 65,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Water",
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'slp') {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			if (pokemon.status === 'slp') {
				pokemon.cureStatus();
			}
		},
		num: 150,
		gen: 2,
		isNonstandard: "Past",
		desc: "(Gen 2) Holder wakes up if it is asleep. Single use.",
	},
	"miracleberry": {
		id: "miracleberry",
		name: "Miracle Berry",
		spritenum: 262,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Flying",
		},
		onUpdate(pokemon) {
			if (pokemon.status || pokemon.volatiles['confusion']) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			pokemon.cureStatus();
			pokemon.removeVolatile('confusion');
		},
		num: 157,
		gen: 2,
		isNonstandard: "Past",
		desc: "(Gen 2) Holder cures itself if it is confused or has a status condition. Single use.",
	},
	"mysteryberry": {
		id: "mysteryberry",
		name: "Mystery Berry",
		spritenum: 244,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Fighting",
		},
		onUpdate(pokemon) {
			if (!pokemon.hp) return;
			let moveSlot = pokemon.lastMove && pokemon.getMoveData(pokemon.lastMove.id);
			if (moveSlot && moveSlot.pp === 0) {
				pokemon.addVolatile('leppaberry');
				pokemon.volatiles['leppaberry'].moveSlot = moveSlot;
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			let moveSlot;
			if (pokemon.volatiles['leppaberry']) {
				moveSlot = pokemon.volatiles['leppaberry'].moveSlot;
				pokemon.removeVolatile('leppaberry');
			} else {
				let pp = 99;
				for (const possibleMoveSlot of pokemon.moveSlots) {
					if (possibleMoveSlot.pp < pp) {
						moveSlot = possibleMoveSlot;
						pp = moveSlot.pp;
					}
				}
			}
			moveSlot.pp += 5;
			if (moveSlot.pp > moveSlot.maxpp) moveSlot.pp = moveSlot.maxpp;
			this.add('-activate', pokemon, 'item: Mystery Berry', moveSlot.move);
		},
		num: 154,
		gen: 2,
		isNonstandard: "Past",
		desc: "(Gen 2) Restores 5 PP to the first of the holder's moves to reach 0 PP. Single use.",
	},
	"pinkbow": {
		id: "pinkbow",
		name: "Pink Bow",
		spritenum: 444,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Normal') {
				return basePower * 1.1;
			}
		},
		num: 251,
		gen: 2,
		isNonstandard: "Past",
		desc: "(Gen 2) Holder's Normal-type attacks have 1.1x power.",
	},
	"polkadotbow": {
		id: "polkadotbow",
		name: "Polkadot Bow",
		spritenum: 444,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Normal') {
				return basePower * 1.1;
			}
		},
		num: 251,
		gen: 2,
		isNonstandard: "Past",
		desc: "(Gen 2) Holder's Normal-type attacks have 1.1x power.",
	},
	"przcureberry": {
		id: "przcureberry",
		name: "PRZ Cure Berry",
		spritenum: 63,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Fire",
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'par') {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			if (pokemon.status === 'par') {
				pokemon.cureStatus();
			}
		},
		num: 149,
		gen: 2,
		isNonstandard: "Past",
		desc: "(Gen 2) Holder cures itself if it is paralyzed. Single use.",
	},
	"psncureberry": {
		id: "psncureberry",
		name: "PSN Cure Berry",
		spritenum: 333,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Electric",
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'psn' || pokemon.status === 'tox') {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			if (pokemon.status === 'psn' || pokemon.status === 'tox') {
				pokemon.cureStatus();
			}
		},
		num: 151,
		gen: 2,
		isNonstandard: "Past",
		desc: "(Gen 2) Holder is cured if it is poisoned. Single use.",
	},

	// CAP items

	"crucibellite": {
		id: "crucibellite",
		name: "Crucibellite",
		spritenum: 577,
		megaStone: "Crucibelle-Mega",
		megaEvolves: "Crucibelle",
		itemUser: ["Crucibelle"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: -1,
		gen: 6,
		isNonstandard: "CAP",
		desc: "If held by a Crucibelle, this item allows it to Mega Evolve in battle.",
	},
};

exports.BattleItems = BattleItems;
