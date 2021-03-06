'use strict';

/**@type {{[k: string]: TemplateFormatsData}} */
let BattleFormatsData = {
	bulbasaur: {
		eventPokemon: [
			{"generation": 3, "level": 70, "moves": ["sweetscent", "growth", "solarbeam", "synthesis"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["tackle", "growl", "leechseed", "vinewhip"], "pokeball": "pokeball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["tackle", "growl", "leechseed", "vinewhip"]},
			{"generation": 5, "level": 1, "shiny": 1, "ivs": {"def": 31}, "isHidden": false, "moves": ["falseswipe", "block", "frenzyplant", "weatherball"], "pokeball": "pokeball"},
			{"generation": 6, "level": 5, "isHidden": false, "moves": ["growl", "leechseed", "vinewhip", "poisonpowder"], "pokeball": "cherishball"},
			{"generation": 6, "level": 5, "isHidden": true, "moves": ["tackle", "growl", "celebrate"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 5},
		],
		tier: "LC",
	},
	bulbasaurdelta: {
		tier: "LC",
	},
	ivysaur: {
		tier: "NFE",
	},
	ivysaurdelta: {
		tier: "NFE",
	},
	venusaur: {
		randomBattleMoves: ["gigadrain", "leechseed", "sleeppowder", "sludgebomb", "substitute"],
		eventPokemon: [
			{"generation": 6, "level": 100, "isHidden": true, "moves": ["solarbeam", "frenzyplant", "synthesis", "grasspledge"], "pokeball": "cherishball"},
		],
		tier: "RU",
	},
	venusaurdelta: {
		tier: "RU",
	},
	venusaurmega: {
		requiredItem: "Venusaurite",
		isNonstandard: "Past",
		tier: "OU",
	},
	venusaurdeltamega: {
		requiredItem: "Delta Venusaurite",
		tier: "UU",
	},
	charmander: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["scratch", "growl", "ember"], "pokeball": "pokeball"},
			{"generation": 4, "level": 40, "gender": "M", "nature": "Mild", "moves": ["return", "hiddenpower", "quickattack", "howl"], "pokeball": "cherishball"},
			{"generation": 4, "level": 40, "gender": "M", "nature": "Naive", "moves": ["return", "hiddenpower", "quickattack", "howl"], "pokeball": "cherishball"},
			{"generation": 4, "level": 40, "gender": "M", "nature": "Naughty", "moves": ["return", "hiddenpower", "quickattack", "howl"], "pokeball": "cherishball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["scratch", "growl", "ember", "smokescreen"]},
			{"generation": 4, "level": 40, "gender": "M", "nature": "Hardy", "moves": ["return", "hiddenpower", "quickattack", "howl"], "pokeball": "cherishball"},
			{"generation": 5, "level": 1, "shiny": 1, "ivs": {"spe": 31}, "isHidden": false, "moves": ["falseswipe", "block", "blastburn", "acrobatics"], "pokeball": "pokeball"},
			{"generation": 6, "level": 5, "isHidden": false, "moves": ["growl", "ember", "smokescreen", "dragonrage"], "pokeball": "cherishball"},
			{"generation": 6, "level": 5, "isHidden": true, "moves": ["scratch", "growl", "celebrate"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 5},
		],
		tier: "LC",
	},
	charmanderdelta: {
		tier: "LC",
	},
	charmeleon: {
		tier: "NFE",
	},
	charmeleondelta: {
		tier: "NFE",
	},
	charizard: {
		randomBattleMoves: ["airslash", "earthquake", "fireblast", "focusblast", "workup"],
		eventPokemon: [
			{"generation": 3, "level": 70, "moves": ["wingattack", "slash", "dragonrage", "firespin"], "pokeball": "pokeball"},
			{"generation": 6, "level": 36, "gender": "M", "isHidden": false, "moves": ["firefang", "flameburst", "airslash", "inferno"], "pokeball": "cherishball"},
			{"generation": 6, "level": 36, "gender": "M", "isHidden": false, "moves": ["firefang", "airslash", "dragonclaw", "dragonrage"], "pokeball": "cherishball"},
			{"generation": 6, "level": 36, "shiny": true, "gender": "M", "isHidden": false, "moves": ["overheat", "solarbeam", "focusblast", "holdhands"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "isHidden": true, "moves": ["flareblitz", "blastburn", "scaryface", "firepledge"], "pokeball": "cherishball"},
			{"generation": 6, "level": 36, "gender": "M", "nature": "Serious", "isHidden": false, "moves": ["flamethrower", "ember", "firespin", "flameburst"], "pokeball": "cherishball"},
			{"generation": 7, "level": 40, "gender": "M", "nature": "Jolly", "isHidden": false, "moves": ["flareblitz", "dragonclaw", "fly", "dragonrage"], "pokeball": "cherishball"},
			{"generation": 7, "level": 40, "gender": "M", "nature": "Adamant", "isHidden": false, "moves": ["flamethrower", "dragonrage", "slash", "seismictoss"], "pokeball": "pokeball"},
			{"generation": 7, "level": 50, "isHidden": false, "moves": ["dragondance", "flareblitz", "fly", "earthquake"], "pokeball": "cherishball"},
		],
		tier: "NU",
		doublesTier: "DOU",
	},
	charizarddelta: {
		tier: "RU",
	},
	charizardmegax: {
		requiredItem: "Charizardite X",
		isNonstandard: "Past",
		tier: "OU",
	},
	charizardmegay: {
		requiredItem: "Charizardite Y",
		isNonstandard: "Past",
		tier: "OU",
	},
	charizardgmax: {
		isGigantamax: "G-Max Wildfire",
		tier: "New",
		doublesTier: "DOU",
	},
	charizarddeltamega: {
		requiredItem: "Delta Charizardite",
		tier: "UU",
	},
	squirtle: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["tackle", "tailwhip", "bubble", "withdraw"], "pokeball": "pokeball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["tackle", "tailwhip", "bubble", "withdraw"]},
			{"generation": 5, "level": 1, "shiny": 1, "ivs": {"hp": 31}, "isHidden": false, "moves": ["falseswipe", "block", "hydrocannon", "followme"], "pokeball": "pokeball"},
			{"generation": 6, "level": 5, "isHidden": false, "moves": ["tailwhip", "watergun", "withdraw", "bubble"], "pokeball": "cherishball"},
			{"generation": 6, "level": 5, "isHidden": true, "moves": ["tackle", "tailwhip", "celebrate"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 5},
		],
		tier: "LC",
	},
	squirtledelta: {
		tier: "LC",
	},
	wartortle: {
		tier: "NFE",
	},
	wartortledelta: {
		tier: "NFE",
	},
	blastoise: {
		randomBattleMoves: ["aurasphere", "hydropump", "icebeam", "rapidspin", "scald", "shellsmash"],
		eventPokemon: [
			{"generation": 3, "level": 70, "moves": ["protect", "raindance", "skullbash", "hydropump"], "pokeball": "pokeball"},
			{"generation": 6, "level": 100, "isHidden": true, "moves": ["hydropump", "hydrocannon", "irondefense", "waterpledge"], "pokeball": "cherishball"},
		],
		tier: "UU",
	},
	blastoisedelta: {
		tier: "RU",
	},
	blastoisemega: {
		requiredItem: "Blastoisinite",
		isNonstandard: "Past",
		tier: "OU",
	},
	blastoisedeltamega: {
		requiredItem: "Delta Blastoisinite",
		tier: "UU",
	},
	caterpie: {
		encounters: [
			{"generation": 1, "level": 3, "shiny": false},
			{"generation": 2, "level": 3},
			{"generation": 3, "level": 3},
		],
		tier: "LC",
	},
	metapod: {
		encounters: [
			{"generation": 1, "level": 4, "shiny": false},
			{"generation": 2, "level": 4},
			{"generation": 3, "level": 4},
			{"generation": 4, "level": 3},
			{"generation": 6, "level": 4},
			{"generation": 7, "level": 3},
		],
		tier: "NFE",
	},
	butterfree: {
		randomBattleMoves: ["energyball", "hurricane", "quiverdance", "sleeppowder"],
		eventPokemon: [
			{"generation": 3, "level": 30, "moves": ["morningsun", "psychic", "sleeppowder", "aerialace"]},
		],
		encounters: [
			{"generation": 2, "level": 7},
			{"generation": 4, "level": 6},
			{"generation": 7, "level": 9},
		],
		tier: "PU",
		doublesTier: "DOU",
	},
	butterfreegmax: {
		randomBattleMoves: ["airslash", "bugbuzz", "quiverdance", "sleeppowder"],
		isGigantamax: "G-Max Befuddle",
		tier: "New",
		doublesTier: "DOU",
	},
	weedle: {
		encounters: [
			{"generation": 1, "level": 3, "shiny": false},
			{"generation": 2, "level": 3},
			{"generation": 3, "level": 3},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	kakuna: {
		encounters: [
			{"generation": 1, "level": 4, "shiny": false},
			{"generation": 2, "level": 4},
			{"generation": 3, "level": 4},
			{"generation": 4, "level": 3},
			{"generation": 6, "level": 4},
			{"generation": 7, "level": 3},
		],
		isNonstandard: "Past",
		tier: "NFE",
	},
	beedrill: {
		eventPokemon: [
			{"generation": 3, "level": 30, "moves": ["batonpass", "sludgebomb", "twineedle", "swordsdance"]},
		],
		encounters: [
			{"generation": 2, "level": 7},
			{"generation": 4, "level": 6},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	beedrillmega: {
		requiredItem: "Beedrillite",
		isNonstandard: "Past",
		tier: "UU",
	},
	pidgey: {
		encounters: [
			{"generation": 1, "level": 2, "shiny": false},
			{"generation": 2, "level": 2},
			{"generation": 3, "level": 2},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	pidgeydelta: {
		tier: "LC",
	},
	pidgeotto: {
		eventPokemon: [
			{"generation": 3, "level": 30, "abilities": ["keeneye"], "moves": ["refresh", "wingattack", "steelwing", "featherdance"]},
		],
		encounters: [
			{"generation": 1, "level": 9, "shiny": false},
			{"generation": 2, "level": 7},
			{"generation": 3, "level": 7},
			{"generation": 4, "level": 7},
		],
		isNonstandard: "Past",
		tier: "NFE",
	},
	pidgeottodelta: {
		tier: "NFE",
	},
	pidgeot: {
		eventPokemon: [
			{"generation": 5, "level": 61, "gender": "M", "nature": "Naughty", "ivs": {"hp": 30, "atk": 30, "def": 30, "spa": 30, "spd": 30, "spe": 30}, "isHidden": false, "abilities": ["keeneye"], "moves": ["whirlwind", "wingattack", "skyattack", "mirrormove"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 7, "level": 29, "isHidden": false},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	pidgeotdelta: {
		tier: "RU",
	},
	pidgeotmega: {
		requiredItem: "Pidgeotite",
		isNonstandard: "Past",
		tier: "UU",
	},
	pidgeotdeltamega: {
		requiredItem: "Delta Pidgeotite",
		tier: "UU",
	},
	rattata: {
		encounters: [
			{"generation": 1, "level": 2, "shiny": false},
			{"generation": 2, "level": 2},
			{"generation": 3, "level": 2},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	rattataalola: {
		isNonstandard: "Past",
		tier: "LC",
	},
	raticate: {
		eventPokemon: [
			{"generation": 3, "level": 34, "moves": ["refresh", "superfang", "scaryface", "hyperfang"]},
		],
		encounters: [
			{"generation": 1, "level": 15, "shiny": false},
			{"generation": 2, "level": 6},
			{"generation": 4, "level": 13},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	raticatealola: {
		encounters: [
			{"generation": 7, "level": 17},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	raticatealolatotem: {
		eventPokemon: [
			{"generation": 7, "level": 20, "perfectIVs": 3, "moves": ["bite", "pursuit", "hyperfang", "assurance"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
	},
	spearow: {
		eventPokemon: [
			{"generation": 3, "level": 22, "moves": ["batonpass", "falseswipe", "leer", "aerialace"]},
		],
		encounters: [
			{"generation": 1, "level": 3, "shiny": false},
			{"generation": 2, "level": 2},
			{"generation": 3, "level": 3},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	fearow: {
		encounters: [
			{"generation": 1, "level": 19, "shiny": false},
			{"generation": 2, "level": 7},
			{"generation": 4, "level": 7},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	ekans: {
		eventPokemon: [
			{"generation": 3, "level": 14, "gender": "F", "nature": "Docile", "ivs": {"hp": 26, "atk": 28, "def": 6, "spa": 14, "spd": 30, "spe": 11}, "abilities": ["shedskin"], "moves": ["leer", "wrap", "poisonsting", "bite"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["wrap", "leer", "poisonsting"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 1, "level": 6, "shiny": false},
			{"generation": 2, "level": 4},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	arbok: {
		eventPokemon: [
			{"generation": 3, "level": 33, "moves": ["refresh", "sludgebomb", "glare", "bite"]},
		],
		encounters: [
			{"generation": 2, "level": 10},
			{"generation": 4, "level": 10},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	pichu: {
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["thundershock", "charm", "surf"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["thundershock", "charm", "wish"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["thundershock", "charm", "teeterdance"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["thundershock", "charm", "followme"], "pokeball": "pokeball"},
			{"generation": 4, "level": 1, "moves": ["volttackle", "thunderbolt", "grassknot", "return"], "pokeball": "pokeball"},
			{"generation": 4, "level": 30, "shiny": true, "gender": "M", "nature": "Jolly", "moves": ["charge", "volttackle", "endeavor", "endure"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	pichudelta: {
		tier: "LC",
	},
	pichuspikyeared: {
		eventPokemon: [
			{"generation": 4, "level": 30, "gender": "F", "nature": "Naughty", "moves": ["helpinghand", "volttackle", "swagger", "painsplit"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 4,
		isNonstandard: 'Past',
		tier: "Illegal",
	},
	pikachu: {
		randomBattleMoves: ["grassknot", "irontail", "surf", "voltswitch", "volttackle"],
		eventPokemon: [
			{"generation": 3, "level": 50, "moves": ["thunderbolt", "agility", "thunder", "lightscreen"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "moves": ["thundershock", "growl", "tailwhip", "thunderwave"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "moves": ["fly", "tailwhip", "growl", "thunderwave"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "moves": ["surf", "growl", "tailwhip", "thunderwave"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "moves": ["fly", "growl", "tailwhip", "thunderwave"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "moves": ["thundershock", "growl", "thunderwave", "surf"], "pokeball": "pokeball"},
			{"generation": 3, "level": 70, "moves": ["thunderbolt", "thunder", "lightscreen", "fly"], "pokeball": "pokeball"},
			{"generation": 3, "level": 70, "moves": ["thunderbolt", "thunder", "lightscreen", "surf"], "pokeball": "pokeball"},
			{"generation": 3, "level": 70, "moves": ["thunderbolt", "thunder", "lightscreen", "agility"], "pokeball": "pokeball"},
			{"generation": 4, "level": 10, "gender": "F", "nature": "Hardy", "moves": ["surf", "volttackle", "tailwhip", "thunderwave"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["thundershock", "growl", "tailwhip", "thunderwave"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "gender": "M", "nature": "Hardy", "moves": ["surf", "thunderbolt", "lightscreen", "quickattack"], "pokeball": "cherishball"},
			{"generation": 4, "level": 20, "gender": "F", "nature": "Bashful", "moves": ["present", "quickattack", "thundershock", "tailwhip"], "pokeball": "cherishball"},
			{"generation": 4, "level": 20, "gender": "M", "nature": "Jolly", "moves": ["grassknot", "thunderbolt", "flash", "doubleteam"], "pokeball": "pokeball"},
			{"generation": 4, "level": 40, "gender": "M", "nature": "Modest", "moves": ["surf", "thunder", "protect"], "pokeball": "cherishball"},
			{"generation": 4, "level": 20, "gender": "F", "nature": "Bashful", "moves": ["quickattack", "thundershock", "tailwhip", "present"], "pokeball": "cherishball"},
			{"generation": 4, "level": 40, "gender": "M", "nature": "Mild", "moves": ["surf", "thunder", "protect"], "pokeball": "cherishball"},
			{"generation": 4, "level": 20, "gender": "F", "nature": "Bashful", "moves": ["present", "quickattack", "thunderwave", "tailwhip"], "pokeball": "cherishball"},
			{"generation": 4, "level": 30, "gender": "M", "nature": "Naughty", "moves": ["lastresort", "present", "thunderbolt", "quickattack"], "pokeball": "cherishball"},
			{"generation": 4, "level": 50, "gender": "M", "nature": "Relaxed", "moves": ["rest", "sleeptalk", "yawn", "snore"], "pokeball": "cherishball"},
			{"generation": 4, "level": 20, "gender": "M", "nature": "Docile", "moves": ["present", "quickattack", "thundershock", "tailwhip"], "pokeball": "cherishball"},
			{"generation": 4, "level": 50, "gender": "M", "nature": "Naughty", "moves": ["volttackle", "irontail", "quickattack", "thunderbolt"], "pokeball": "cherishball"},
			{"generation": 4, "level": 20, "gender": "M", "nature": "Bashful", "moves": ["present", "quickattack", "thundershock", "tailwhip"], "pokeball": "cherishball"},
			{"generation": 5, "level": 30, "gender": "F", "isHidden": true, "moves": ["sing", "teeterdance", "encore", "electroball"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "isHidden": false, "moves": ["fly", "irontail", "electroball", "quickattack"], "pokeball": "cherishball"},
			{"generation": 5, "level": 100, "shiny": 1, "gender": "F", "isHidden": false, "moves": ["thunder", "volttackle", "grassknot", "quickattack"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "shiny": 1, "gender": "F", "isHidden": false, "moves": ["extremespeed", "thunderbolt", "grassknot", "brickbreak"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "gender": "F", "nature": "Timid", "isHidden": true, "moves": ["fly", "thunderbolt", "grassknot", "protect"], "pokeball": "cherishball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["thundershock", "tailwhip", "thunderwave", "headbutt"]},
			{"generation": 5, "level": 100, "gender": "M", "isHidden": true, "moves": ["volttackle", "quickattack", "feint", "voltswitch"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "gender": "M", "nature": "Brave", "isHidden": false, "moves": ["thunderbolt", "quickattack", "irontail", "electroball"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["celebrate", "growl", "playnice", "quickattack"], "pokeball": "cherishball"},
			{"generation": 6, "level": 22, "isHidden": false, "moves": ["quickattack", "electroball", "doubleteam", "megakick"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["thunderbolt", "quickattack", "surf", "holdhands"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "gender": "F", "isHidden": false, "moves": ["thunderbolt", "quickattack", "heartstamp", "holdhands"], "pokeball": "healball"},
			{"generation": 6, "level": 36, "shiny": true, "isHidden": true, "moves": ["thunder", "substitute", "playnice", "holdhands"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "gender": "F", "isHidden": false, "moves": ["playnice", "charm", "nuzzle", "sweetkiss"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "gender": "M", "nature": "Naughty", "isHidden": false, "moves": ["thunderbolt", "quickattack", "irontail", "electroball"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "shiny": true, "isHidden": false, "moves": ["teeterdance", "playnice", "tailwhip", "nuzzle"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "perfectIVs": 2, "isHidden": true, "moves": ["fakeout", "encore", "volttackle", "endeavor"], "pokeball": "cherishball"},
			{"generation": 6, "level": 99, "isHidden": false, "moves": ["happyhour", "playnice", "holdhands", "flash"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["fly", "surf", "agility", "celebrate"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["bestow", "holdhands", "return", "playnice"], "pokeball": "healball"},
			{"generation": 7, "level": 10, "nature": "Jolly", "isHidden": false, "moves": ["celebrate", "growl", "playnice", "quickattack"], "pokeball": "cherishball"},
			{"generation": 7, "level": 10, "isHidden": false, "moves": ["bestow", "holdhands", "return", "playnice"], "pokeball": "cherishball"},
			{"generation": 7, "level": 10, "isHidden": false, "moves": ["holdhands", "playnice", "teeterdance", "happyhour"], "pokeball": "cherishball"},
			{"generation": 7, "level": 10, "isHidden": false, "moves": ["growl", "quickattack", "thundershock", "happyhour"], "pokeball": "cherishball"},
			{"generation": 7, "level": 40, "shiny": 1, "perfectIVs": 3, "isHidden": false, "moves": ["nuzzle", "discharge", "slam", "surf"], "pokeball": "pokeball"},
			{"generation": 7, "level": 5, "isHidden": false, "moves": ["celebrate", "sweetscent", "counter", "refresh"], "pokeball": "cherishball"},
			{"generation": 7, "level": 10, "isHidden": false, "moves": ["fly", "surf", "thunderbolt", "quickattack"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 3, "shiny": false},
			{"generation": 2, "level": 4},
			{"generation": 3, "level": 3},
		],
		tier: "NFE",
	},
	pikachudelta: {
		tier: "NFE",
	},
	pikachucosplay: {
		eventPokemon: [
			{"generation": 6, "level": 20, "perfectIVs": 3, "moves": ["quickattack", "electroball", "thunderwave", "thundershock"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 6,
		isNonstandard: "Past",
		tier: "Illegal",
	},
	pikachurockstar: {
		eventPokemon: [
			{"generation": 6, "level": 20, "perfectIVs": 3, "moves": ["quickattack", "electroball", "thunderwave", "meteormash"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 6,
		isNonstandard: "Past",
		tier: "Illegal",
	},
	pikachubelle: {
		eventPokemon: [
			{"generation": 6, "level": 20, "perfectIVs": 3, "moves": ["quickattack", "electroball", "thunderwave", "iciclecrash"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 6,
		isNonstandard: "Past",
		tier: "Illegal",
	},
	pikachupopstar: {
		eventPokemon: [
			{"generation": 6, "level": 20, "perfectIVs": 3, "moves": ["quickattack", "electroball", "thunderwave", "drainingkiss"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 6,
		isNonstandard: "Past",
		tier: "Illegal",
	},
	pikachuphd: {
		eventPokemon: [
			{"generation": 6, "level": 20, "perfectIVs": 3, "moves": ["quickattack", "electroball", "thunderwave", "electricterrain"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 6,
		isNonstandard: "Past",
		tier: "Illegal",
	},
	pikachulibre: {
		eventPokemon: [
			{"generation": 6, "level": 20, "perfectIVs": 3, "moves": ["quickattack", "electroball", "thunderwave", "flyingpress"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 6,
		isNonstandard: "Past",
		tier: "Illegal",
	},
	pikachuoriginal: {
		eventPokemon: [
			{"generation": 7, "level": 1, "nature": "Hardy", "moves": ["thunderbolt", "quickattack", "thunder", "agility"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 7,
		isUnreleased: "Past",
		tier: "Unreleased",
	},
	pikachuhoenn: {
		eventPokemon: [
			{"generation": 7, "level": 6, "nature": "Hardy", "moves": ["thunderbolt", "quickattack", "thunder", "irontail"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 7,
		isUnreleased: "Past",
		tier: "Unreleased",
	},
	pikachusinnoh: {
		eventPokemon: [
			{"generation": 7, "level": 10, "nature": "Hardy", "moves": ["thunderbolt", "quickattack", "irontail", "volttackle"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 7,
		isUnreleased: "Past",
		tier: "Unreleased",
	},
	pikachuunova: {
		eventPokemon: [
			{"generation": 7, "level": 14, "nature": "Hardy", "moves": ["thunderbolt", "quickattack", "irontail", "volttackle"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 7,
		isUnreleased: "Past",
		tier: "Unreleased",
	},
	pikachukalos: {
		eventPokemon: [
			{"generation": 7, "level": 17, "nature": "Hardy", "moves": ["thunderbolt", "quickattack", "irontail", "electroball"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 7,
		isUnreleased: "Past",
		tier: "Unreleased",
	},
	pikachualola: {
		eventPokemon: [
			{"generation": 7, "level": 20, "nature": "Hardy", "moves": ["thunderbolt", "quickattack", "irontail", "electroball"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 7,
		isUnreleased: "Past",
		tier: "Unreleased",
	},
	pikachupartner: {
		eventPokemon: [
			{"generation": 7, "level": 21, "shiny": 1, "nature": "Hardy", "moves": ["thunderbolt", "quickattack", "thunder", "irontail"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 7,
		isUnreleased: "Past",
		tier: "Unreleased",
	},
	pikachustarter: {
		eventPokemon: [
			{"generation": 7, "level": 5, "perfectIVs": 6, "moves": ["thundershock", "tailwhip", "growl"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		isNonstandard: "LGPE",
		tier: "Illegal",
	},
	pikachugmax: {
		eventPokemon: [
			{"generation": 8, "level": 10, "isHidden": false, "moves": ["growl", "quickattack", "thunderwave", "doubleteam"]},
		],
		eventOnly: true,
		unreleasedHidden: true,
		isGigantamax: "G-Max Volt Crash",
		tier: "New",
		doublesTier: "DOU",
	},
	raichu: {
		randomBattleMoves: ["encore", "focusblast", "grassknot", "nastyplot", "thunderbolt", "voltswitch"],
		tier: "PU",
		doublesTier: "DOU",
	},
	raichudelta: {
		tier: "NU",
	},
	raichualola: {
		randomBattleMoves: ["focusblast", "nastyplot", "psychic", "surf", "thunderbolt", "voltswitch"],
		tier: "PU",
	},
	sandshrew: {
		eventPokemon: [
			{"generation": 3, "level": 12, "gender": "M", "nature": "Docile", "ivs": {"hp": 4, "atk": 23, "def": 8, "spa": 31, "spd": 1, "spe": 25}, "moves": ["scratch", "defensecurl", "sandattack", "poisonsting"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 1, "level": 6, "shiny": false},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	sandshrewalola: {
		eventPokemon: [
			{"generation": 7, "level": 10, "isHidden": false, "moves": ["rapidspin", "iceball", "powdersnow", "bide"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	sandslash: {
		encounters: [
			{"generation": 2, "level": 10},
			{"generation": 4, "level": 10},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	sandslashalola: {
		isNonstandard: "Past",
		tier: "PU",
	},
	nidoranf: {
		encounters: [
			{"generation": 1, "level": 2},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	nidorina: {
		encounters: [
			{"generation": 4, "level": 15, "pokeball": "safariball"},
		],
		isNonstandard: "Past",
		tier: "NFE",
	},
	nidoqueen: {
		eventPokemon: [
			{"generation": 6, "level": 41, "perfectIVs": 2, "isHidden": false, "abilities": ["poisonpoint"], "moves": ["tailwhip", "doublekick", "poisonsting", "bodyslam"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "RU",
	},
	nidoranm: {
		encounters: [
			{"generation": 1, "level": 2},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	nidorino: {
		encounters: [
			{"generation": 4, "level": 15, "pokeball": "safariball"},
		],
		isNonstandard: "Past",
		tier: "NFE",
	},
	nidoking: {
		eventPokemon: [
			{"generation": 7, "level": 68, "isHidden": false, "abilities": ["poisonpoint"], "moves": ["earthquake", "poisonjab", "throatchop", "aquatail"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "UU",
	},
	cleffa: {
		unreleasedHidden: "Past",
		tier: "LC",
	},
	clefairy: {
		encounters: [
			{"generation": 1, "level": 8},
		],
		unreleasedHidden: "Past",
		tier: "NFE",
	},
	clefable: {
		randomBattleMoves: ["calmmind", "fireblast", "moonblast", "moonlight", "stealthrock", "thunderwave"],
		unreleasedHidden: true,
		tier: "OU",
		doublesTier: "DOU",
	},
	vulpix: {
		eventPokemon: [
			{"generation": 3, "level": 18, "gender": "F", "nature": "Quirky", "ivs": {"hp": 15, "atk": 6, "def": 3, "spa": 25, "spd": 13, "spe": 22}, "moves": ["tailwhip", "roar", "quickattack", "willowisp"], "pokeball": "pokeball"},
			{"generation": 3, "level": 18, "moves": ["charm", "heatwave", "ember", "dig"]},
		],
		encounters: [
			{"generation": 1, "level": 18},
		],
		tier: "LC Uber",
	},
	vulpixalola: {
		eventPokemon: [
			{"generation": 7, "level": 10, "isHidden": false, "moves": ["celebrate", "tailwhip", "babydolleyes", "iceshard"], "pokeball": "cherishball"},
			{"generation": 7, "level": 10, "gender": "F", "nature": "Modest", "isHidden": false, "moves": ["powdersnow"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	ninetales: {
		randomBattleMoves: ["fireblast", "nastyplot", "solarbeam", "substitute", "willowisp"],
		eventPokemon: [
			{"generation": 5, "level": 50, "gender": "M", "nature": "Bold", "ivs": {"def": 31}, "isHidden": true, "moves": ["heatwave", "solarbeam", "psyshock", "willowisp"], "pokeball": "cherishball"},
		],
		tier: "RU",
		doublesTier: "DOU",
	},
	ninetalesalola: {
		randomBattleMoves: ["auroraveil", "blizzard", "freezedry", "moonblast", "nastyplot", "substitute"],
		tier: "UU",
	},
	igglybuff: {
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "abilities": ["cutecharm"], "moves": ["sing", "charm", "defensecurl", "tickle"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	jigglypuff: {
		encounters: [
			{"generation": 1, "level": 3, "shiny": false},
			{"generation": 2, "level": 3},
			{"generation": 3, "level": 3},
		],
		isNonstandard: "Past",
		tier: "NFE",
	},
	wigglytuff: {
		encounters: [
			{"generation": 1, "level": 22},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	zubat: {
		encounters: [
			{"generation": 1, "level": 6, "shiny": false},
			{"generation": 2, "level": 2},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	golbat: {
		encounters: [
			{"generation": 2, "level": 13},
			{"generation": 3, "level": 5},
			{"generation": 4, "level": 10},
			{"generation": 6, "level": 19, "maxEggMoves": 1},
			{"generation": 7, "level": 20},
		],
		isNonstandard: "Past",
		tier: "NFE",
	},
	crobat: {
		eventPokemon: [
			{"generation": 4, "level": 30, "gender": "M", "nature": "Timid", "moves": ["heatwave", "airslash", "sludgebomb", "superfang"], "pokeball": "cherishball"},
			{"generation": 7, "level": 64, "gender": "M", "isHidden": false, "moves": ["airslash", "toxic", "darkpulse", "sludgebomb"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "UU",
	},
	oddish: {
		eventPokemon: [
			{"generation": 3, "level": 26, "gender": "M", "nature": "Quirky", "ivs": {"hp": 23, "atk": 24, "def": 20, "spa": 21, "spd": 9, "spe": 16}, "moves": ["poisonpowder", "stunspore", "sleeppowder", "acid"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["absorb", "leechseed"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 1, "level": 12, "shiny": false},
		],
		tier: "LC",
	},
	gloom: {
		eventPokemon: [
			{"generation": 3, "level": 50, "moves": ["sleeppowder", "acid", "moonlight", "petaldance"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 2, "level": 14},
			{"generation": 4, "level": 14},
			{"generation": 6, "level": 18, "maxEggMoves": 1},
		],
		tier: "NFE",
	},
	vileplume: {
		randomBattleMoves: ["aromatherapy", "gigadrain", "leechseed", "sleeppowder", "sludgebomb", "strengthsap"],
		tier: "RU",
		doublesTier: "DOU",
	},
	bellossom: {
		randomBattleMoves: ["gigadrain", "moonblast", "quiverdance", "sleeppowder", "strengthsap"],
		tier: "PU",
		doublesTier: "DOU",
	},
	paras: {
		eventPokemon: [
			{"generation": 3, "level": 28, "abilities": ["effectspore"], "moves": ["refresh", "spore", "slash", "falseswipe"]},
		],
		encounters: [
			{"generation": 1, "level": 8, "shiny": false},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	parasect: {
		encounters: [
			{"generation": 1, "level": 13},
			{"generation": 2, "level": 5},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	venonat: {
		encounters: [
			{"generation": 1, "level": 13, "shiny": false},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	venomoth: {
		eventPokemon: [
			{"generation": 3, "level": 32, "abilities": ["shielddust"], "moves": ["refresh", "silverwind", "substitute", "psychic"]},
		],
		encounters: [
			{"generation": 1, "level": 30, "shiny": false},
			{"generation": 2, "level": 10},
			{"generation": 4, "level": 8},
			{"generation": 6, "level": 30},
		],
		isNonstandard: "Past",
		tier: "UU",
	},
	diglett: {
		encounters: [
			{"generation": 1, "level": 15, "shiny": false},
			{"generation": 2, "level": 2},
		],
		tier: "LC",
	},
	diglettdelta: {
		tier: "LC",
	},
	diglettalola: {
		eventPokemon: [
			{"generation": 7, "level": 10, "isHidden": false, "abilities": ["tanglinghair"], "moves": ["mudslap", "astonish", "growl", "metalclaw"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	dugtrio: {
		randomBattleMoves: ["earthquake", "memento", "reversal", "stealthrock", "stoneedge", "substitute"],
		eventPokemon: [
			{"generation": 3, "level": 40, "moves": ["charm", "earthquake", "sandstorm", "triattack"]},
		],
		encounters: [
			{"generation": 1, "level": 15},
			{"generation": 2, "level": 5},
			{"generation": 4, "level": 19},
		],
		tier: "OU",
		doublesTier: "DOU",
	},
	dugtriodelta: {
		tier: "PU",
	},
	dugtrioalola: {
		randomBattleMoves: ["earthquake", "ironhead", "stoneedge", "substitute", "suckerpunch"],
		tier: "PU",
	},
	meowth: {
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["scratch", "growl", "petaldance"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "moves": ["scratch", "growl"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["scratch", "growl", "bite"], "pokeball": "pokeball"},
			{"generation": 3, "level": 22, "moves": ["sing", "slash", "payday", "bite"]},
			{"generation": 4, "level": 21, "gender": "F", "nature": "Jolly", "abilities": ["pickup"], "moves": ["bite", "fakeout", "furyswipes", "screech"], "pokeball": "cherishball"},
			{"generation": 4, "level": 10, "gender": "M", "nature": "Jolly", "abilities": ["pickup"], "moves": ["fakeout", "payday", "assist", "scratch"], "pokeball": "cherishball"},
			{"generation": 5, "level": 15, "gender": "M", "isHidden": false, "abilities": ["pickup"], "moves": ["furyswipes", "sing", "nastyplot", "snatch"], "pokeball": "cherishball"},
			{"generation": 6, "level": 20, "isHidden": false, "abilities": ["pickup"], "moves": ["happyhour", "screech", "bite", "fakeout"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 10},
			{"generation": 3, "level": 3, "shiny": false, "gender": "M", "nature": "Naive", "ivs": {"hp": 4, "atk": 5, "def": 4, "spa": 5, "spd": 4, "spe": 4}, "abilities": ["pickup"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	meowthalola: {
		tier: "LC",
	},
	meowthgalar: {
		tier: "LC",
	},
	meowthgmax: {
		eventPokemon: [
			{"generation": 8, "level": 5, "isHidden": false, "moves": ["fakeout", "growl", "slash", "payday"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		unreleasedHidden: true,
		isGigantamax: "G-Max Gold Rush",
		tier: "New",
		doublesTier: "DOU",
	},
	persian: {
		randomBattleMoves: ["hypervoice", "icywind", "nastyplot", "taunt", "thunderbolt"],
		encounters: [
			{"generation": 2, "level": 18},
			{"generation": 4, "level": 19},
		],
		tier: "PU",
		doublesTier: "DOU",
	},
	persianalola: {
		randomBattleMoves: ["darkpulse", "hypnosis", "nastyplot", "powergem", "thunderbolt"],
		tier: "PU",
	},
	perrserker: {
		randomBattleMoves: ["closecombat", "crunch", "fakeout", "ironhead", "swordsdance", "uturn"],
		tier: "NU",
		doublesTier: "DOU",
	},
	psyduck: {
		eventPokemon: [
			{"generation": 3, "level": 27, "gender": "M", "nature": "Lax", "ivs": {"hp": 31, "atk": 16, "def": 12, "spa": 29, "spd": 31, "spe": 14}, "abilities": ["damp"], "moves": ["tailwhip", "confusion", "disable", "screech"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["watersport", "scratch", "tailwhip", "mudsport"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 1, "level": 15},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	golduck: {
		eventPokemon: [
			{"generation": 3, "level": 33, "moves": ["charm", "waterfall", "psychup", "brickbreak"]},
			{"generation": 7, "level": 50, "gender": "M", "nature": "Timid", "ivs": {"hp": 31, "atk": 30, "def": 31, "spa": 31, "spd": 31, "spe": 31}, "isHidden": true, "moves": ["hydropump", "scald", "encore", "protect"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 15, "shiny": false},
			{"generation": 2, "level": 10},
			{"generation": 3, "level": 25, "pokeball": "safariball"},
			{"generation": 4, "level": 10},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	mankey: {
		encounters: [
			{"generation": 1, "level": 3, "shiny": false},
			{"generation": 3, "level": 2},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	primeape: {
		eventPokemon: [
			{"generation": 3, "level": 34, "abilities": ["vitalspirit"], "moves": ["helpinghand", "crosschop", "focusenergy", "reversal"]},
		],
		encounters: [
			{"generation": 2, "level": 15},
			{"generation": 4, "level": 15},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	growlithe: {
		eventPokemon: [
			{"generation": 3, "level": 32, "gender": "F", "nature": "Quiet", "ivs": {"hp": 11, "atk": 24, "def": 28, "spa": 1, "spd": 20, "spe": 2}, "abilities": ["intimidate"], "moves": ["leer", "odorsleuth", "takedown", "flamewheel"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["bite", "roar", "ember"], "pokeball": "pokeball"},
			{"generation": 3, "level": 28, "moves": ["charm", "flamethrower", "bite", "takedown"]},
		],
		encounters: [
			{"generation": 1, "level": 15, "shiny": false},
		],
		tier: "LC",
	},
	growlithedelta: {
		tier: "LC",
	},
	arcanine: {
		randomBattleMoves: ["closecombat", "crunch", "extremespeed", "flareblitz", "morningsun", "roar", "wildcharge", "willowisp"],
		eventPokemon: [
			{"generation": 4, "level": 50, "abilities": ["intimidate"], "moves": ["flareblitz", "thunderfang", "crunch", "extremespeed"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "isHidden": false, "abilities": ["intimidate"], "moves": ["flareblitz", "extremespeed", "willowisp", "protect"], "pokeball": "cherishball"},
		],
		tier: "UU",
		doublesTier: "DOU",
	},
	arcaninedelta: {
		tier: "UU",
	},
	poliwag: {
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["bubble", "sweetkiss"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 1, "level": 5},
			{"generation": 2, "level": 3},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	poliwhirl: {
		encounters: [
			{"generation": 1, "level": 15},
			{"generation": 2, "level": 10},
			{"generation": 3, "level": 20},
			{"generation": 4, "level": 10},
			{"generation": 7, "level": 24},
			{"generation": 7, "level": 22, "isHidden": false, "gender": "F", "nature": "Naughty", "abilities": ["damp"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "NFE",
	},
	poliwrath: {
		eventPokemon: [
			{"generation": 3, "level": 42, "moves": ["helpinghand", "hydropump", "raindance", "brickbreak"]},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	poliwrathmega: {
		requiredItem: "Poliwrathite",
		tier: "UU",
	},
	politoed: {
		eventPokemon: [
			{"generation": 5, "level": 50, "gender": "M", "nature": "Calm", "ivs": {"hp": 31, "atk": 13, "def": 31, "spa": 5, "spd": 31, "spe": 5}, "isHidden": true, "moves": ["scald", "icebeam", "perishsong", "protect"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "UU",
	},
	politoedmega: {
		requiredItem: "Politoedite",
		tier: "UU",
	},
	abra: {
		encounters: [
			{"generation": 1, "level": 6},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	kadabra: {
		encounters: [
			{"generation": 2, "level": 15},
			{"generation": 4, "level": 15},
			{"generation": 7, "level": 11, "isHidden": false, "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "NFE",
	},
	alakazam: {
		eventPokemon: [
			{"generation": 3, "level": 70, "moves": ["futuresight", "calmmind", "psychic", "trick"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "OU",
	},
	alakazammega: {
		requiredItem: "Alakazite",
		isNonstandard: "Past",
		tier: "OU",
	},
	machop: {
		encounters: [
			{"generation": 1, "level": 15, "shiny": false},
		],
		tier: "LC",
	},
	machoke: {
		eventPokemon: [
			{"generation": 5, "level": 30, "isHidden": false, "moves": ["lowsweep", "foresight", "seismictoss", "revenge"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 2, "level": 14},
			{"generation": 4, "level": 14},
		],
		tier: "NFE",
	},
	machamp: {
		randomBattleMoves: ["bulletpunch", "dynamicpunch", "knockoff", "stoneedge", "substitute"],
		eventPokemon: [
			{"generation": 3, "level": 38, "gender": "M", "nature": "Quiet", "ivs": {"hp": 9, "atk": 23, "def": 25, "spa": 20, "spd": 15, "spe": 10}, "abilities": ["guts"], "moves": ["seismictoss", "foresight", "revenge", "vitalthrow"], "pokeball": "pokeball"},
			{"generation": 6, "level": 50, "shiny": true, "gender": "M", "nature": "Adamant", "ivs": {"hp": 31, "atk": 31, "def": 31, "spa": 31, "spd": 31, "spe": 31}, "isHidden": false, "abilities": ["noguard"], "moves": ["dynamicpunch", "stoneedge", "wideguard", "knockoff"], "pokeball": "cherishball"},
			{"generation": 6, "level": 39, "gender": "M", "nature": "Hardy", "isHidden": false, "abilities": ["noguard"], "moves": ["seismictoss", "dynamicpunch", "dig", "focusenergy"], "pokeball": "cherishball"},
			{"generation": 7, "level": 34, "gender": "F", "nature": "Brave", "ivs": {"atk": 31}, "isHidden": false, "abilities": ["guts"], "moves": ["strength", "bulkup", "quickguard", "doubleedge"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 16},
			{"generation": 2, "level": 5},
		],
		tier: "RU",
		doublesTier: "DOU",
	},
	machampgmax: {
		isGigantamax: "G-Max Chi Strike",
		tier: "New",
		doublesTier: "DOU",
	},
	bellsprout: {
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["vinewhip", "teeterdance"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["vinewhip", "growth"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 1, "level": 12, "shiny": false},
			{"generation": 2, "level": 3},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	weepinbell: {
		eventPokemon: [
			{"generation": 3, "level": 32, "moves": ["morningsun", "magicalleaf", "sludgebomb", "sweetscent"]},
		],
		encounters: [
			{"generation": 2, "level": 12},
			{"generation": 4, "level": 10},
		],
		isNonstandard: "Past",
		tier: "NFE",
	},
	victreebel: {
		isNonstandard: "Past",
		tier: "PU",
	},
	tentacool: {
		encounters: [
			{"generation": 1, "level": 5},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	tentacooldelta: {
		tier: "LC",
	},
	tentacruel: {
		encounters: [
			{"generation": 1, "level": 20},
			{"generation": 2, "level": 20},
			{"generation": 3, "level": 20},
			{"generation": 4, "level": 15},
			{"generation": 6, "level": 21, "maxEggMoves": 1},
		],
		isNonstandard: "Past",
		tier: "UU",
	},
	tentacrueldelta: {
		tier: "NU",
	},
	geodude: {
		encounters: [
			{"generation": 1, "level": 7, "shiny": false},
			{"generation": 2, "level": 2},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	geodudedelta: {
		tier: "LC",
	},
	geodudealola: {
		isNonstandard: "Past",
		tier: "LC",
	},
	graveler: {
		encounters: [
			{"generation": 2, "level": 23},
			{"generation": 4, "level": 16, "pokeball": "safariball"},
			{"generation": 6, "level": 24, "isHidden": false},
		],
		isNonstandard: "Past",
		tier: "NFE",
	},
	gravelerdelta: {
		tier: "NFE",
	},
	graveleralola: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	golem: {
		isNonstandard: "Past",
		tier: "PU",
	},
	golemdelta: {
		tier: "NU",
	},
	golemalola: {
		isNonstandard: "Past",
		tier: "PU",
	},
	ponyta: {
		encounters: [
			{"generation": 1, "level": 28, "shiny": false},
		],
		tier: "LC",
	},
	ponytagalar: {
		tier: "LC",
	},
	rapidash: {
		randomBattleMoves: ["flareblitz", "highhorsepower", "morningsun", "swordsdance", "wildcharge", "willowisp"],
		eventPokemon: [
			{"generation": 3, "level": 40, "moves": ["batonpass", "solarbeam", "sunnyday", "flamethrower"]},
		],
		encounters: [
			{"generation": 2, "level": 14, "gender": "M", "shiny": false},
			{"generation": 3, "level": 37},
		],
		tier: "PU",
	},
	rapidashgalar: {
		randomBattleMoves: ["highhorsepower", "morningsun", "playrough", "swordsdance", "zenheadbutt"],
		tier: "NU",
		doublesTier: "DOU",
	},
	slowpoke: {
		eventPokemon: [
			{"generation": 3, "level": 31, "gender": "F", "nature": "Naive", "ivs": {"hp": 17, "atk": 11, "def": 19, "spa": 20, "spd": 5, "spe": 10}, "abilities": ["oblivious"], "moves": ["watergun", "confusion", "disable", "headbutt"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["curse", "yawn", "tackle", "growl"], "pokeball": "pokeball"},
			{"generation": 5, "level": 30, "isHidden": false, "moves": ["confusion", "disable", "headbutt", "waterpulse"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 15},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	slowbro: {
		eventPokemon: [
			{"generation": 6, "level": 100, "nature": "Quiet", "isHidden": false, "abilities": ["oblivious"], "moves": ["scald", "trickroom", "slackoff", "irontail"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 15, "shiny": false},
			{"generation": 1, "level": 23},
			{"generation": 2, "level": 20},
			{"generation": 3, "level": 32},
			{"generation": 4, "level": 15},
			{"generation": 5, "level": 35, "isHidden": false},
			{"generation": 7, "level": 15},
		],
		isNonstandard: "Past",
		tier: "RU",
	},
	slowbromega: {
		requiredItem: "Slowbronite",
		isNonstandard: "Past",
		tier: "UU",
	},
	slowking: {
		isNonstandard: "Past",
		tier: "NU",
	},
	magnemite: {
		encounters: [
			{"generation": 1, "level": 16, "shiny": false},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	magneton: {
		eventPokemon: [
			{"generation": 3, "level": 30, "moves": ["refresh", "doubleedge", "raindance", "thunder"]},
		],
		encounters: [
			{"generation": 2, "level": 5, "shiny": false},
			{"generation": 3, "level": 26},
			{"generation": 4, "level": 17, "pokeball": "safariball"},
		],
		isNonstandard: "Past",
		tier: "UU",
	},
	magnezone: {
		isNonstandard: "Past",
		tier: "OU",
	},
	farfetchd: {
		randomBattleMoves: ["bravebird", "closecombat", "knockoff", "leafblade", "roost", "slash", "swordsdance"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["yawn", "wish"], "pokeball": "pokeball"},
			{"generation": 3, "level": 36, "moves": ["batonpass", "slash", "swordsdance", "aerialace"]},
		],
		encounters: [
			{"generation": 1, "level": 3},
			{"generation": 3, "level": 3, "gender": "M", "nature": "Adamant", "ivs": {"hp": 20, "atk": 25, "def": 21, "spa": 24, "spd": 15, "spe": 20}, "abilities": ["keeneye"], "pokeball": "pokeball"},
		],
		tier: "PU",
	},
	farfetchdgalar: {
		tier: "LC",
	},
	sirfetchd: {
		randomBattleMoves: ["bravebird", "closecombat", "firstimpression", "knockoff", "swordsdance"],
		tier: "NU",
		doublesTier: "DOU",
	},
	doduo: {
		encounters: [
			{"generation": 1, "level": 18, "shiny": false},
			{"generation": 2, "level": 4},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	doduodelta: {
		tier: "LC",
	},
	dodrio: {
		eventPokemon: [
			{"generation": 3, "level": 34, "moves": ["batonpass", "drillpeck", "agility", "triattack"]},
		],
		encounters: [
			{"generation": 1, "level": 29, "shiny": false},
			{"generation": 2, "level": 10, "gender": "F", "shiny": false},
			{"generation": 2, "level": 30},
			{"generation": 3, "level": 29, "pokeball": "safariball"},
			{"generation": 4, "level": 15, "gender": "F", "shiny": false, "nature": "Impish", "ivs": {"hp": 20, "atk": 20, "def": 20, "spa": 15, "spd": 15, "spe": 15}, "abilities": ["runaway"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	dodriodelta: {
		tier: "PU",
	},
	seel: {
		eventPokemon: [
			{"generation": 3, "level": 23, "abilities": ["thickfat"], "moves": ["helpinghand", "surf", "safeguard", "icebeam"]},
		],
		encounters: [
			{"generation": 1, "level": 22, "shiny": false},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	dewgong: {
		encounters: [
			{"generation": 1, "level": 15},
			{"generation": 2, "level": 5},
			{"generation": 3, "level": 32},
			{"generation": 5, "level": 30, "isHidden": false},
			{"generation": 6, "level": 30, "maxEggMoves": 1},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	grimer: {
		eventPokemon: [
			{"generation": 3, "level": 23, "moves": ["helpinghand", "sludgebomb", "shadowpunch", "minimize"]},
		],
		encounters: [
			{"generation": 1, "level": 23, "shiny": false},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	grimerdelta: {
		tier: "LC",
	},
	grimeralola: {
		eventPokemon: [
			{"generation": 7, "level": 10, "isHidden": false, "abilities": ["poisontouch"], "moves": ["bite", "harden", "poisongas", "pound"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	muk: {
		encounters: [
			{"generation": 1, "level": 25},
			{"generation": 2, "level": 5},
			{"generation": 3, "level": 32},
			{"generation": 4, "level": 15},
			{"generation": 5, "level": 5, "isHidden": false},
			{"generation": 5, "level": 35, "isHidden": true},
			{"generation": 6, "level": 30},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	mukdelta: {
		tier: "RU",
	},
	mukalola: {
		isNonstandard: "Past",
		tier: "UU",
	},
	shellder: {
		eventPokemon: [
			{"generation": 3, "level": 24, "gender": "F", "nature": "Brave", "ivs": {"hp": 5, "atk": 19, "def": 18, "spa": 5, "spd": 11, "spe": 13}, "abilities": ["shellarmor"], "moves": ["withdraw", "iciclespear", "supersonic", "aurorabeam"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "abilities": ["shellarmor"], "moves": ["tackle", "withdraw", "iciclespear"], "pokeball": "pokeball"},
			{"generation": 3, "level": 29, "abilities": ["shellarmor"], "moves": ["refresh", "takedown", "surf", "aurorabeam"]},
		],
		encounters: [
			{"generation": 1, "level": 10},
		],
		tier: "LC",
	},
	cloyster: {
		randomBattleMoves: ["hydropump", "iceshard", "iciclespear", "rockblast", "shellsmash"],
		eventPokemon: [
			{"generation": 5, "level": 30, "gender": "M", "nature": "Naughty", "isHidden": false, "abilities": ["skilllink"], "moves": ["iciclespear", "rockblast", "hiddenpower", "razorshell"], "pokeball": "pokeball"},
		],
		tier: "RU",
		doublesTier: "DOU",
	},
	gastly: {
		encounters: [
			{"generation": 1, "level": 18, "shiny": false},
		],
		tier: "LC Uber",
	},
	haunter: {
		eventPokemon: [
			{"generation": 5, "level": 30, "moves": ["confuseray", "suckerpunch", "shadowpunch", "payback"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 20, "shiny": false},
			{"generation": 2, "level": 15},
			{"generation": 3, "level": 20},
			{"generation": 4, "level": 16},
		],
		tier: "NFE",
	},
	gengar: {
		eventPokemon: [
			{"generation": 3, "level": 23, "gender": "F", "nature": "Hardy", "ivs": {"hp": 19, "atk": 14, "def": 0, "spa": 14, "spd": 17, "spe": 27}, "moves": ["spite", "curse", "nightshade", "confuseray"], "pokeball": "pokeball"},
			{"generation": 6, "level": 25, "nature": "Timid", "moves": ["psychic", "confuseray", "suckerpunch", "shadowpunch"], "pokeball": "cherishball"},
			{"generation": 6, "level": 25, "moves": ["nightshade", "confuseray", "suckerpunch", "shadowpunch"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "moves": ["shadowball", "sludgebomb", "willowisp", "destinybond"], "pokeball": "cherishball"},
			{"generation": 6, "level": 25, "shiny": true, "moves": ["shadowball", "sludgewave", "confuseray", "astonish"], "pokeball": "duskball"},
			{"generation": 6, "level": 50, "shiny": true, "gender": "M", "moves": ["meanlook", "hypnosis", "psychic", "hyperbeam"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "moves": ["meanlook", "hypnosis", "psychic", "hyperbeam"], "pokeball": "cherishball"},
		],
		tier: "OU",
		doublesTier: "DOU",
	},
	gengarmega: {
		requiredItem: "Gengarite",
		isNonstandard: "Past",
		tier: "Uber",
	},
	gengargmax: {
		randomBattleMoves: ["focusblast", "nastyplot", "shadowball", "sludgewave", "taunt"],
		isGigantamax: "G-Max Terror",
		tier: "New",
		doublesTier: "DOU",
	},
	onix: {
		encounters: [
			{"generation": 1, "level": 13, "shiny": false},
		],
		tier: "LC",
	},
	steelix: {
		randomBattleMoves: ["dragondance", "earthquake", "ironhead", "rockslide", "stealthrock"],
		tier: "NU",
		doublesTier: "DOU",
	},
	steelixmega: {
		requiredItem: "Steelixite",
		isNonstandard: "Past",
		tier: "UU",
	},
	steelixmegaf: {
		requiredItem: "Steelixite Fire",
		tier: "RU",
	},
	drowzee: {
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "abilities": ["insomnia"], "moves": ["bellydrum", "wish"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 1, "level": 9, "shiny": false},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	hypno: {
		eventPokemon: [
			{"generation": 3, "level": 34, "abilities": ["insomnia"], "moves": ["batonpass", "psychic", "meditate", "shadowball"]},
		],
		encounters: [
			{"generation": 2, "level": 16},
			{"generation": 4, "level": 16},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	krabby: {
		encounters: [
			{"generation": 1, "level": 10},
		],
		tier: "LC",
	},
	kingler: {
		randomBattleMoves: ["agility", "liquidation", "rockslide", "superpower", "swordsdance", "xscissor"],
		encounters: [
			{"generation": 1, "level": 15},
			{"generation": 3, "level": 25},
			{"generation": 4, "level": 22},
		],
		tier: "NU",
		doublesTier: "DOU",
	},
	kinglergmax: {
		isGigantamax: "G-Max Foam Burst",
		tier: "New",
		doublesTier: "DOU",
	},
	voltorb: {
		eventPokemon: [
			{"generation": 3, "level": 19, "moves": ["refresh", "mirrorcoat", "spark", "swift"]},
		],
		encounters: [
			{"generation": 1, "level": 14, "shiny": false},
			{"generation": 1, "level": 40},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	electrode: {
		encounters: [
			{"generation": 1, "level": 3},
			{"generation": 2, "level": 23},
			{"generation": 3, "level": 3, "shiny": false, "nature": "Hasty", "ivs": {"hp": 19, "atk": 16, "def": 18, "spa": 25, "spd": 25, "spe": 19}, "abilities": ["static"], "pokeball": "pokeball"},
			{"generation": 4, "level": 23},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	exeggcute: {
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["sweetscent", "wish"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 1, "level": 20, "shiny": false},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	exeggutor: {
		eventPokemon: [
			{"generation": 3, "level": 46, "moves": ["refresh", "psychic", "hypnosis", "ancientpower"]},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	exeggutoralola: {
		eventPokemon: [
			{"generation": 7, "level": 50, "gender": "M", "nature": "Modest", "isHidden": true, "moves": ["powerswap", "celebrate", "leafstorm", "dracometeor"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "NU",
	},
	cubone: {
		encounters: [
			{"generation": 1, "level": 16, "shiny": false},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	marowak: {
		eventPokemon: [
			{"generation": 3, "level": 44, "moves": ["sing", "earthquake", "swordsdance", "rockslide"]},
		],
		encounters: [
			{"generation": 1, "level": 24, "shiny": false},
			{"generation": 2, "level": 12},
			{"generation": 4, "level": 14},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	marowakalola: {
		isNonstandard: "Past",
		tier: "RU",
	},
	marowakalolatotem: {
		eventPokemon: [
			{"generation": 7, "level": 25, "perfectIVs": 3, "moves": ["leer", "hex", "bonemerang", "willowisp"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
	},
	marowakmega: {
		requiredItem: "Marowite",
		tier: "NU",
	},
	tyrogue: {
		tier: "LC",
	},
	hitmonlee: {
		randomBattleMoves: ["fakeout", "highjumpkick", "machpunch", "poisonjab", "rapidspin", "stoneedge", "throatchop"],
		eventPokemon: [
			{"generation": 3, "level": 38, "abilities": ["limber"], "moves": ["refresh", "highjumpkick", "mindreader", "megakick"]},
		],
		encounters: [
			{"generation": 1, "level": 30},
		],
		tier: "RU",
		doublesTier: "DOU",
	},
	hitmonchan: {
		randomBattleMoves: ["bulkup", "drainpunch", "firepunch", "icepunch", "machpunch", "rapidspin"],
		eventPokemon: [
			{"generation": 3, "level": 38, "abilities": ["keeneye"], "moves": ["helpinghand", "skyuppercut", "mindreader", "megapunch"]},
		],
		encounters: [
			{"generation": 1, "level": 30},
		],
		tier: "PU",
		doublesTier: "DOU",
	},
	hitmontop: {
		randomBattleMoves: ["closecombat", "machpunch", "rapidspin", "stoneedge", "suckerpunch"],
		eventPokemon: [
			{"generation": 5, "level": 55, "gender": "M", "nature": "Adamant", "isHidden": false, "abilities": ["intimidate"], "moves": ["fakeout", "closecombat", "suckerpunch", "helpinghand"]},
		],
		tier: "NU",
		doublesTier: "DOU",
	},
	lickitung: {
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["healbell", "wish"], "pokeball": "pokeball"},
			{"generation": 3, "level": 38, "moves": ["helpinghand", "doubleedge", "defensecurl", "rollout"]},
		],
		encounters: [
			{"generation": 1, "level": 15},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	lickilicky: {
		isNonstandard: "Past",
		tier: "PU",
	},
	koffing: {
		encounters: [
			{"generation": 1, "level": 30, "shiny": false},
		],
		tier: "LC",
	},
	koffingdelta: {
		tier: "LC",
	},
	weezing: {
		randomBattleMoves: ["defog", "fireblast", "painsplit", "sludgebomb", "toxicspikes", "willowisp"],
		encounters: [
			{"generation": 2, "level": 16},
			{"generation": 3, "level": 32},
			{"generation": 4, "level": 15, "pokeball": "safariball"},
		],
		tier: "NU",
	},
	weezinggalar: {
		randomBattleMoves: ["defog", "fireblast", "painsplit", "sludgebomb", "strangesteam", "toxicspikes", "willowisp"],
		tier: "UU",
		doublesTier: "DOU",
	},
	weezingdelta: {
		tier: "RU",
	},
	rhyhorn: {
		encounters: [
			{"generation": 1, "level": 20},
		],
		tier: "LC",
	},
	rhydon: {
		eventPokemon: [
			{"generation": 3, "level": 46, "moves": ["helpinghand", "megahorn", "scaryface", "earthquake"]},
		],
		encounters: [
			{"generation": 1, "level": 15},
			{"generation": 2, "level": 10},
			{"generation": 4, "level": 41},
			{"generation": 6, "level": 30},
		],
		tier: "NFE",
	},
	rhyperior: {
		randomBattleMoves: ["earthquake", "firepunch", "megahorn", "rockblast", "rockpolish", "stealthrock", "stoneedge"],
		tier: "RU",
		doublesTier: "DOU",
	},
	happiny: {
		isNonstandard: "Past",
		tier: "LC",
	},
	chansey: {
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["sweetscent", "wish"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "moves": ["pound", "growl", "tailwhip", "refresh"], "pokeball": "pokeball"},
			{"generation": 3, "level": 39, "moves": ["sweetkiss", "thunderbolt", "softboiled", "skillswap"]},
		],
		encounters: [
			{"generation": 1, "level": 7, "shiny": false},
		],
		isNonstandard: "Past",
		tier: "OU",
	},
	blissey: {
		eventPokemon: [
			{"generation": 5, "level": 10, "isHidden": true, "moves": ["pound", "growl", "tailwhip", "refresh"]},
		],
		isNonstandard: "Past",
		tier: "UU",
	},
	tangela: {
		eventPokemon: [
			{"generation": 3, "level": 30, "abilities": ["chlorophyll"], "moves": ["morningsun", "solarbeam", "sunnyday", "ingrain"]},
		],
		encounters: [
			{"generation": 1, "level": 13},
		],
		isNonstandard: "Past",
		tier: "LC Uber",
	},
	tangeladelta: {
		tier: "LC Uber",
	},
	tangrowth: {
		eventPokemon: [
			{"generation": 4, "level": 50, "gender": "M", "nature": "Brave", "moves": ["sunnyday", "morningsun", "ancientpower", "naturalgift"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "OU",
	},
	tangrowthdelta: {
		tier: "RU",
	},
	kangaskhan: {
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "abilities": ["earlybird"], "moves": ["yawn", "wish"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "abilities": ["earlybird"], "moves": ["cometpunch", "leer", "bite"], "pokeball": "pokeball"},
			{"generation": 3, "level": 35, "abilities": ["earlybird"], "moves": ["sing", "earthquake", "tailwhip", "dizzypunch"]},
			{"generation": 6, "level": 50, "isHidden": false, "abilities": ["scrappy"], "moves": ["fakeout", "return", "earthquake", "suckerpunch"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 25, "shiny": false},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	kangaskhanmega: {
		requiredItem: "Kangaskhanite",
		isNonstandard: "Past",
		tier: "OU",
	},
	horsea: {
		eventPokemon: [
			{"generation": 5, "level": 1, "shiny": true, "isHidden": false, "moves": ["bubble"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 1, "level": 5},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	seadra: {
		eventPokemon: [
			{"generation": 3, "level": 45, "abilities": ["poisonpoint"], "moves": ["leer", "watergun", "twister", "agility"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 1, "level": 20},
			{"generation": 2, "level": 20},
			{"generation": 3, "level": 25},
			{"generation": 4, "level": 15},
		],
		isNonstandard: "Past",
		tier: "NFE",
	},
	kingdra: {
		eventPokemon: [
			{"generation": 3, "level": 50, "abilities": ["swiftswim"], "moves": ["leer", "watergun", "twister", "agility"], "pokeball": "pokeball"},
			{"generation": 5, "level": 50, "gender": "M", "nature": "Timid", "ivs": {"hp": 31, "atk": 17, "def": 8, "spa": 31, "spd": 11, "spe": 31}, "isHidden": false, "abilities": ["swiftswim"], "moves": ["dracometeor", "muddywater", "dragonpulse", "protect"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "RU",
	},
	goldeen: {
		encounters: [
			{"generation": 1, "level": 5},
		],
		unreleasedHidden: "Past",
		tier: "LC",
	},
	seaking: {
		randomBattleMoves: ["drillrun", "megahorn", "swordsdance", "throatchop", "waterfall"],
		encounters: [
			{"generation": 1, "level": 23},
			{"generation": 2, "level": 10},
			{"generation": 3, "level": 20},
			{"generation": 4, "level": 10},
			{"generation": 6, "level": 26, "maxEggMoves": 1},
			{"generation": 7, "level": 10},
		],
		unreleasedHidden: true,
		tier: "PU",
		doublesTier: "DOU",
	},
	staryu: {
		eventPokemon: [
			{"generation": 3, "level": 50, "moves": ["minimize", "lightscreen", "cosmicpower", "hydropump"], "pokeball": "pokeball"},
			{"generation": 3, "level": 18, "nature": "Timid", "ivs": {"hp": 10, "atk": 3, "def": 22, "spa": 24, "spd": 3, "spe": 18}, "abilities": ["illuminate"], "moves": ["harden", "watergun", "rapidspin", "recover"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 1, "level": 5},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	starmie: {
		eventPokemon: [
			{"generation": 3, "level": 41, "moves": ["refresh", "waterfall", "icebeam", "recover"]},
		],
		isNonstandard: "Past",
		tier: "UU",
	},
	mimejr: {
		tier: "LC",
	},
	mrmime: {
		randomBattleMoves: ["dazzlinggleam", "focusblast", "healingwish", "nastyplot", "psychic", "shadowball"],
		eventPokemon: [
			{"generation": 3, "level": 42, "abilities": ["soundproof"], "moves": ["followme", "psychic", "encore", "thunderpunch"]},
		],
		encounters: [
			{"generation": 1, "level": 6},
		],
		tier: "PU",
	},
	mrmimegalar: {
		randomBattleMoves: ["focusblast", "freezedry", "nastyplot", "psychic", "rapidspin"],
		tier: "NFE",
	},
	mrrime: {
		randomBattleMoves: ["focusblast", "freezedry", "nastyplot", "psychic", "rapidspin", "slackoff"],
		tier: "RU",
		doublesTier: "DOU",
	},
	scyther: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "abilities": ["swarm"], "moves": ["quickattack", "leer", "focusenergy"], "pokeball": "pokeball"},
			{"generation": 3, "level": 40, "abilities": ["swarm"], "moves": ["morningsun", "razorwind", "silverwind", "slash"]},
			{"generation": 5, "level": 30, "isHidden": false, "moves": ["agility", "wingattack", "furycutter", "slash"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 15, "shiny": false},
			{"generation": 1, "level": 25},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	scytherdelta: {
		tier: "NU",
	},
	scizor: {
		eventPokemon: [
			{"generation": 3, "level": 50, "gender": "M", "abilities": ["swarm"], "moves": ["furycutter", "metalclaw", "swordsdance", "slash"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "gender": "M", "nature": "Adamant", "abilities": ["swarm"], "moves": ["xscissor", "swordsdance", "irondefense", "agility"], "pokeball": "cherishball"},
			{"generation": 5, "level": 100, "gender": "M", "isHidden": false, "abilities": ["technician"], "moves": ["bulletpunch", "bugbite", "roost", "swordsdance"], "pokeball": "cherishball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["leer", "focusenergy", "pursuit", "steelwing"]},
			{"generation": 6, "level": 50, "gender": "M", "isHidden": false, "moves": ["xscissor", "nightslash", "doublehit", "ironhead"], "pokeball": "cherishball"},
			{"generation": 6, "level": 25, "nature": "Adamant", "isHidden": false, "abilities": ["technician"], "moves": ["aerialace", "falseswipe", "agility", "furycutter"], "pokeball": "cherishball"},
			{"generation": 6, "level": 25, "isHidden": false, "moves": ["metalclaw", "falseswipe", "agility", "furycutter"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "isHidden": false, "abilities": ["technician"], "moves": ["bulletpunch", "swordsdance", "roost", "uturn"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "UU",
	},
	scizordelta: {
		tier: "RU",
	},
	scizormega: {
		requiredItem: "Scizorite",
		isNonstandard: "Past",
		tier: "OU",
	},
	scizordeltamega: {
		requiredItem: "Delta Scizorite",
		tier: "OU",
	},
	smoochum: {
		isNonstandard: "Past",
		tier: "LC",
	},
	jynx: {
		encounters: [
			{"generation": 1, "level": 15},
			{"generation": 2, "level": 10},
			{"generation": 3, "level": 20, "nature": "Mild", "ivs": {"hp": 18, "atk": 17, "def": 18, "spa": 22, "spd": 25, "spe": 21}, "abilities": ["oblivious"], "pokeball": "pokeball"},
			{"generation": 4, "level": 22},
			{"generation": 7, "level": 9},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	elekid: {
		eventPokemon: [
			{"generation": 3, "level": 20, "moves": ["icepunch", "firepunch", "thunderpunch", "crosschop"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	elekidelta: {
		tier: "LC",
	},
	electabuzz: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["quickattack", "leer", "thunderpunch"], "pokeball": "pokeball"},
			{"generation": 3, "level": 43, "moves": ["followme", "crosschop", "thunderwave", "thunderbolt"]},
			{"generation": 4, "level": 30, "gender": "M", "nature": "Naughty", "moves": ["lowkick", "shockwave", "lightscreen", "thunderpunch"], "pokeball": "pokeball"},
			{"generation": 5, "level": 30, "isHidden": false, "moves": ["lowkick", "swift", "shockwave", "lightscreen"], "pokeball": "cherishball"},
			{"generation": 6, "level": 30, "gender": "M", "isHidden": true, "moves": ["lowkick", "shockwave", "lightscreen", "thunderpunch"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 33, "shiny": false},
			{"generation": 2, "level": 15},
			{"generation": 4, "level": 15},
			{"generation": 7, "level": 25},
		],
		isNonstandard: "Past",
		tier: "NFE",
	},
	electabuzzdelta: {
		tier: "NFE",
	},
	electivire: {
		eventPokemon: [
			{"generation": 4, "level": 50, "gender": "M", "nature": "Adamant", "moves": ["thunderpunch", "icepunch", "crosschop", "earthquake"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "gender": "M", "nature": "Serious", "moves": ["lightscreen", "thunderpunch", "discharge", "thunderbolt"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	electiviredelta: {
		tier: "NU",
	},
	magby: {
		isNonstandard: "Past",
		tier: "LC",
	},
	magbydelta: {
		tier: "LC",
	},
	magmar: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["leer", "smog", "firepunch", "ember"], "pokeball": "pokeball"},
			{"generation": 3, "level": 36, "moves": ["followme", "fireblast", "crosschop", "thunderpunch"]},
			{"generation": 4, "level": 30, "gender": "M", "nature": "Quiet", "moves": ["smokescreen", "firespin", "confuseray", "firepunch"], "pokeball": "pokeball"},
			{"generation": 5, "level": 30, "isHidden": false, "moves": ["smokescreen", "feintattack", "firespin", "confuseray"], "pokeball": "cherishball"},
			{"generation": 6, "level": 30, "gender": "M", "isHidden": true, "moves": ["smokescreen", "firespin", "confuseray", "firepunch"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 34, "shiny": false},
			{"generation": 2, "level": 14},
			{"generation": 4, "level": 14},
			{"generation": 7, "level": 16},
		],
		isNonstandard: "Past",
		tier: "NFE",
	},
	magmardelta: {
		tier: "NFE",
	},
	magmortar: {
		eventPokemon: [
			{"generation": 4, "level": 50, "gender": "F", "nature": "Modest", "moves": ["flamethrower", "psychic", "hyperbeam", "solarbeam"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "gender": "M", "nature": "Hardy", "moves": ["confuseray", "firepunch", "lavaplume", "flamethrower"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "NU",
	},
	magmortardelta: {
		tier: "RU",
	},
	pinsir: {
		eventPokemon: [
			{"generation": 3, "level": 35, "abilities": ["hypercutter"], "moves": ["helpinghand", "guillotine", "falseswipe", "submission"]},
			{"generation": 6, "level": 50, "gender": "F", "nature": "Adamant", "isHidden": false, "moves": ["xscissor", "earthquake", "stoneedge", "return"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "nature": "Jolly", "isHidden": true, "moves": ["earthquake", "swordsdance", "feint", "quickattack"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 15, "shiny": false},
			{"generation": 1, "level": 20},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	pinsirmega: {
		requiredItem: "Pinsirite",
		isNonstandard: "Past",
		tier: "OU",
	},
	tauros: {
		eventPokemon: [
			{"generation": 3, "level": 25, "nature": "Docile", "ivs": {"hp": 14, "atk": 19, "def": 12, "spa": 17, "spd": 5, "spe": 26}, "abilities": ["intimidate"], "moves": ["rage", "hornattack", "scaryface", "pursuit"], "pokeball": "safariball"},
			{"generation": 3, "level": 10, "abilities": ["intimidate"], "moves": ["tackle", "tailwhip", "rage", "hornattack"], "pokeball": "pokeball"},
			{"generation": 3, "level": 46, "abilities": ["intimidate"], "moves": ["refresh", "earthquake", "tailwhip", "bodyslam"]},
		],
		encounters: [
			{"generation": 1, "level": 21, "shiny": false},
		],
		isNonstandard: "Past",
		tier: "NU",
	},
	magikarp: {
		eventPokemon: [
			{"generation": 4, "level": 5, "gender": "M", "nature": "Relaxed", "moves": ["splash"], "pokeball": "pokeball"},
			{"generation": 4, "level": 6, "gender": "F", "nature": "Rash", "moves": ["splash"], "pokeball": "pokeball"},
			{"generation": 4, "level": 7, "gender": "F", "nature": "Hardy", "moves": ["splash"], "pokeball": "pokeball"},
			{"generation": 4, "level": 5, "gender": "F", "nature": "Lonely", "moves": ["splash"], "pokeball": "pokeball"},
			{"generation": 4, "level": 4, "gender": "M", "nature": "Modest", "moves": ["splash"], "pokeball": "pokeball"},
			{"generation": 5, "level": 99, "shiny": true, "gender": "M", "isHidden": false, "moves": ["flail", "hydropump", "bounce", "splash"], "pokeball": "cherishball"},
			{"generation": 6, "level": 1, "shiny": 1, "isHidden": false, "moves": ["splash", "celebrate", "happyhour"], "pokeball": "cherishball"},
			{"generation": 7, "level": 19, "shiny": true, "isHidden": false, "moves": ["splash", "bounce"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 5},
		],
		tier: "LC",
	},
	gyarados: {
		randomBattleMoves: ["bounce", "dragondance", "earthquake", "powerwhip", "waterfall"],
		eventPokemon: [
			{"generation": 6, "level": 50, "isHidden": false, "moves": ["waterfall", "earthquake", "icefang", "dragondance"], "pokeball": "cherishball"},
			{"generation": 6, "level": 20, "shiny": true, "isHidden": false, "moves": ["waterfall", "bite", "icefang", "ironhead"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 15},
			{"generation": 2, "level": 15},
			{"generation": 3, "level": 5},
			{"generation": 4, "level": 10},
			{"generation": 5, "level": 1, "isHidden": false},
			{"generation": 7, "level": 10},
		],
		tier: "OU",
		doublesTier: "DOU",
	},
	gyaradosmega: {
		requiredItem: "Gyaradosite",
		isNonstandard: "Past",
		tier: "OU",
	},
	lapras: {
		eventPokemon: [
			{"generation": 3, "level": 44, "moves": ["hydropump", "raindance", "blizzard", "healbell"]},
		],
		encounters: [
			{"generation": 1, "level": 15},
		],
		tier: "PU",
		doublesTier: "DOU",
	},
	laprasgmax: {
		randomBattleMoves: ["freezedry", "icebeam", "sparklingaria", "substitute", "thunderbolt"],
		isGigantamax: "G-Max Resonance",
		tier: "New",
		doublesTier: "DOU",
	},
	ditto: {
		randomBattleMoves: ["transform"],
		eventPokemon: [
			{"generation": 7, "level": 10, "isHidden": false, "moves": ["transform"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 12},
			{"generation": 2, "level": 10},
			{"generation": 3, "level": 23},
			{"generation": 4, "level": 10},
			{"generation": 5, "level": 45},
			{"generation": 6, "level": 30},
			{"generation": 7, "level": 25},
		],
		tier: "PU",
		doublesTier: "DOU",
	},
	dittodelta: {
		tier: "PU",
	},
	eevee: {
		eventPokemon: [
			{"generation": 4, "level": 10, "gender": "F", "nature": "Lonely", "abilities": ["adaptability"], "moves": ["covet", "bite", "helpinghand", "attract"], "pokeball": "cherishball"},
			{"generation": 4, "level": 50, "shiny": true, "gender": "M", "nature": "Hardy", "abilities": ["adaptability"], "moves": ["irontail", "trumpcard", "flail", "quickattack"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "gender": "F", "nature": "Hardy", "isHidden": false, "abilities": ["adaptability"], "moves": ["sing", "return", "echoedvoice", "attract"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["celebrate", "sandattack", "babydolleyes", "swift"], "pokeball": "cherishball"},
			{"generation": 6, "level": 15, "shiny": true, "isHidden": true, "moves": ["swift", "quickattack", "babydolleyes", "helpinghand"], "pokeball": "cherishball"},
			{"generation": 7, "level": 10, "nature": "Jolly", "isHidden": false, "moves": ["celebrate", "sandattack", "babydolleyes"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 25},
		],
		tier: "LC",
	},
	eeveestarter: {
		eventPokemon: [
			{"generation": 7, "level": 5, "perfectIVs": 6, "moves": ["tackle", "tailwhip", "growl"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		isNonstandard: "LGPE",
		tier: "Illegal",
	},
	eeveegmax: {
		eventPokemon: [
			{"generation": 8, "level": 10, "isHidden": false, "abilities": ["runaway"], "moves": ["growl", "tailwhip", "sandattack", "quickattack"]},
		],
		eventOnly: true,
		unreleasedHidden: true,
		isGigantamax: "G-Max Cuddle",
		tier: "New",
		doublesTier: "DOU",
	},
	vaporeon: {
		randomBattleMoves: ["haze", "icebeam", "protect", "scald", "wish", "yawn"],
		eventPokemon: [
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["tailwhip", "tackle", "helpinghand", "sandattack"]},
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["celebrate", "tailwhip", "sandattack", "watergun"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "gender": "F", "isHidden": true, "moves": ["scald", "icebeam", "raindance", "rest"], "pokeball": "cherishball"},
		],
		tier: "NU",
		doublesTier: "DOU",
	},
	jolteon: {
		randomBattleMoves: ["shadowball", "thunderbolt", "voltswitch", "yawn"],
		eventPokemon: [
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["tailwhip", "tackle", "helpinghand", "sandattack"]},
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["celebrate", "tailwhip", "sandattack", "thundershock"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "gender": "F", "isHidden": false, "moves": ["thunderbolt", "shadowball", "lightscreen", "voltswitch"], "pokeball": "cherishball"},
		],
		tier: "RU",
		doublesTier: "DOU",
	},
	flareon: {
		randomBattleMoves: ["facade", "flareblitz", "quickattack", "superpower"],
		eventPokemon: [
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["tailwhip", "tackle", "helpinghand", "sandattack"]},
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["celebrate", "tailwhip", "sandattack", "ember"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "gender": "F", "isHidden": true, "moves": ["flareblitz", "facade", "willowisp", "quickattack"], "pokeball": "cherishball"},
		],
		tier: "PU",
		doublesTier: "DOU",
	},
	espeon: {
		randomBattleMoves: ["calmmind", "dazzlinggleam", "morningsun", "psychic", "shadowball"],
		eventPokemon: [
			{"generation": 3, "level": 70, "moves": ["psybeam", "psychup", "psychic", "morningsun"], "pokeball": "pokeball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["tailwhip", "tackle", "helpinghand", "sandattack"]},
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["celebrate", "tailwhip", "sandattack", "confusion"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "gender": "F", "isHidden": true, "moves": ["psychic", "dazzlinggleam", "shadowball", "reflect"], "pokeball": "cherishball"},
		],
		tier: "RU",
		doublesTier: "DOU",
	},
	umbreon: {
		randomBattleMoves: ["foulplay", "protect", "taunt", "wish"],
		eventPokemon: [
			{"generation": 3, "level": 70, "moves": ["feintattack", "meanlook", "screech", "moonlight"], "pokeball": "pokeball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["tailwhip", "tackle", "helpinghand", "sandattack"]},
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["celebrate", "tailwhip", "sandattack", "pursuit"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "gender": "F", "isHidden": false, "moves": ["snarl", "toxic", "protect", "moonlight"], "pokeball": "cherishball"},
		],
		tier: "RU",
		doublesTier: "DOU",
	},
	leafeon: {
		randomBattleMoves: ["doubleedge", "leafblade", "swordsdance", "synthesis", "xscissor"],
		eventPokemon: [
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["tailwhip", "tackle", "helpinghand", "sandattack"]},
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["celebrate", "tailwhip", "sandattack", "razorleaf"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "gender": "F", "isHidden": true, "moves": ["leafblade", "swordsdance", "sunnyday", "synthesis"], "pokeball": "cherishball"},
		],
		tier: "PU",
		doublesTier: "DOU",
	},
	glaceon: {
		randomBattleMoves: ["freezedry", "icebeam", "protect", "shadowball", "wish"],
		eventPokemon: [
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["tailwhip", "tackle", "helpinghand", "sandattack"]},
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["celebrate", "tailwhip", "sandattack", "icywind"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "gender": "F", "isHidden": false, "moves": ["blizzard", "shadowball", "hail", "auroraveil"], "pokeball": "cherishball"},
		],
		tier: "PU",
		doublesTier: "DOU",
	},
	sylveon: {
		randomBattleMoves: ["hypervoice", "mysticalfire", "protect", "psyshock", "shadowball", "wish"],
		eventPokemon: [
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["celebrate", "helpinghand", "sandattack", "fairywind"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "gender": "F", "isHidden": false, "moves": ["disarmingvoice", "babydolleyes", "quickattack", "drainingkiss"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "gender": "F", "isHidden": true, "moves": ["hyperbeam", "drainingkiss", "psyshock", "calmmind"], "pokeball": "cherishball"},
		],
		tier: "UU",
		doublesTier: "DOU",
	},
	porygon: {
		eventPokemon: [
			{"generation": 5, "level": 10, "isHidden": true, "moves": ["tackle", "conversion", "sharpen", "psybeam"]},
		],
		encounters: [
			{"generation": 1, "level": 18},
		],
		isNonstandard: "Past",
		tier: "LC Uber",
	},
	porygon2: {
		isNonstandard: "Past",
		tier: "RU",
	},
	porygonz: {
		isNonstandard: "Past",
		tier: "OU",
	},
	omanyte: {
		eventPokemon: [
			{"generation": 5, "level": 15, "gender": "M", "isHidden": false, "abilities": ["swiftswim"], "moves": ["bubblebeam", "supersonic", "withdraw", "bite"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 30},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	omastar: {
		isNonstandard: "Past",
		tier: "PU",
	},
	kabuto: {
		eventPokemon: [
			{"generation": 5, "level": 15, "gender": "M", "isHidden": false, "abilities": ["battlearmor"], "moves": ["confuseray", "dig", "scratch", "harden"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 30},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	kabutodelta: {
		tier: "LC",
	},
	kabutops: {
		isNonstandard: "Past",
		tier: "PU",
	},
	kabutopsdelta: {
		tier: "NU",
	},
	aerodactyl: {
		eventPokemon: [
			{"generation": 5, "level": 15, "gender": "M", "isHidden": false, "abilities": ["pressure"], "moves": ["steelwing", "icefang", "firefang", "thunderfang"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "isHidden": true, "moves": ["ancientpower", "rockpolish", "wideguard", "celebrate"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 30},
		],
		isNonstandard: "Past",
		tier: "NU",
	},
	aerodactylmega: {
		requiredItem: "Aerodactylite",
		isNonstandard: "Past",
		tier: "UU",
	},
	munchlax: {
		eventPokemon: [
			{"generation": 4, "level": 5, "moves": ["metronome", "tackle", "defensecurl", "selfdestruct"]},
			{"generation": 4, "level": 5, "gender": "F", "nature": "Relaxed", "abilities": ["thickfat"], "moves": ["metronome", "odorsleuth", "tackle", "curse"], "pokeball": "cherishball"},
			{"generation": 7, "level": 5, "isHidden": false, "abilities": ["thickfat"], "moves": ["tackle", "metronome", "holdback", "happyhour"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	munchlaxdelta: {
		tier: "LC",
	},
	snorlax: {
		randomBattleMoves: ["bodyslam", "curse", "darkestlariat", "earthquake", "firepunch", "rest", "sleeptalk"],
		eventPokemon: [
			{"generation": 3, "level": 43, "moves": ["refresh", "fissure", "curse", "bodyslam"]},
			{"generation": 7, "level": 30, "isHidden": false, "abilities": ["thickfat"], "moves": ["sunnyday", "block", "bodyslam", "celebrate"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 30},
		],
		tier: "UU",
		doublesTier: "DOU",
	},
	snorlaxgmax: {
		isGigantamax: "G-Max Replenish",
	},
	snorlaxdelta: {
		tier: "RU",
	},
	articuno: {
		eventPokemon: [
			{"generation": 3, "level": 50, "shiny": 1, "moves": ["mist", "agility", "mindreader", "icebeam"]},
			{"generation": 3, "level": 70, "moves": ["agility", "mindreader", "icebeam", "reflect"], "pokeball": "pokeball"},
			{"generation": 3, "level": 50, "moves": ["icebeam", "healbell", "extrasensory", "haze"]},
			{"generation": 4, "level": 60, "shiny": 1, "moves": ["agility", "icebeam", "reflect", "roost"]},
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["mist", "agility", "mindreader", "icebeam"]},
			{"generation": 6, "level": 70, "isHidden": false, "moves": ["icebeam", "reflect", "hail", "tailwind"]},
			{"generation": 6, "level": 70, "isHidden": true, "moves": ["freezedry", "icebeam", "hail", "reflect"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["ancientpower", "freezedry", "reflect", "hail"]},
		],
		encounters: [
			{"generation": 1, "level": 50},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "PU",
	},
	zapdos: {
		eventPokemon: [
			{"generation": 3, "level": 50, "shiny": 1, "moves": ["thunderwave", "agility", "detect", "drillpeck"]},
			{"generation": 3, "level": 70, "moves": ["agility", "detect", "drillpeck", "charge"], "pokeball": "pokeball"},
			{"generation": 3, "level": 50, "moves": ["thunderbolt", "extrasensory", "batonpass", "metalsound"]},
			{"generation": 4, "level": 60, "shiny": 1, "moves": ["charge", "agility", "discharge", "roost"]},
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["thunderwave", "agility", "detect", "drillpeck"]},
			{"generation": 6, "level": 70, "isHidden": false, "moves": ["agility", "discharge", "raindance", "lightscreen"]},
			{"generation": 6, "level": 70, "isHidden": true, "moves": ["discharge", "thundershock", "raindance", "agility"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["ancientpower", "discharge", "pluck", "raindance"]},
		],
		encounters: [
			{"generation": 1, "level": 50},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "OU",
	},
	moltres: {
		eventPokemon: [
			{"generation": 3, "level": 50, "shiny": 1, "moves": ["firespin", "agility", "endure", "flamethrower"]},
			{"generation": 3, "level": 70, "moves": ["agility", "endure", "flamethrower", "safeguard"], "pokeball": "pokeball"},
			{"generation": 3, "level": 50, "moves": ["extrasensory", "morningsun", "willowisp", "flamethrower"]},
			{"generation": 4, "level": 60, "shiny": 1, "moves": ["flamethrower", "safeguard", "airslash", "roost"]},
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["firespin", "agility", "endure", "flamethrower"]},
			{"generation": 6, "level": 70, "isHidden": false, "moves": ["safeguard", "airslash", "sunnyday", "heatwave"]},
			{"generation": 6, "level": 70, "isHidden": true, "moves": ["skyattack", "heatwave", "sunnyday", "safeguard"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["ancientpower", "flamethrower", "airslash", "sunnyday"]},
		],
		encounters: [
			{"generation": 1, "level": 50},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "UU",
	},
	dratini: {
		encounters: [
			{"generation": 1, "level": 10},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	dratinidelta: {
		tier: "LC",
	},
	dragonair: {
		encounters: [
			{"generation": 1, "level": 15},
			{"generation": 2, "level": 10},
			{"generation": 3, "level": 25, "pokeball": "safariball"},
			{"generation": 4, "level": 15},
			{"generation": 7, "level": 10},
		],
		isNonstandard: "Past",
		tier: "NFE",
	},
	dragonairdelta: {
		tier: "NFE",
	},
	dragonite: {
		eventPokemon: [
			{"generation": 3, "level": 70, "moves": ["agility", "safeguard", "wingattack", "outrage"], "pokeball": "pokeball"},
			{"generation": 3, "level": 55, "moves": ["healbell", "hyperbeam", "dragondance", "earthquake"]},
			{"generation": 4, "level": 50, "gender": "M", "nature": "Mild", "moves": ["dracometeor", "thunderbolt", "outrage", "dragondance"], "pokeball": "cherishball"},
			{"generation": 5, "level": 100, "gender": "M", "isHidden": true, "moves": ["extremespeed", "firepunch", "dragondance", "outrage"], "pokeball": "cherishball"},
			{"generation": 5, "level": 55, "gender": "M", "isHidden": true, "moves": ["dragonrush", "safeguard", "wingattack", "thunderpunch"]},
			{"generation": 5, "level": 55, "gender": "M", "isHidden": true, "moves": ["dragonrush", "safeguard", "wingattack", "extremespeed"]},
			{"generation": 5, "level": 50, "gender": "M", "nature": "Brave", "ivs": {"hp": 30, "atk": 30, "def": 30, "spa": 30, "spd": 30, "spe": 30}, "isHidden": false, "moves": ["fireblast", "safeguard", "outrage", "hyperbeam"], "pokeball": "cherishball"},
			{"generation": 6, "level": 55, "gender": "M", "isHidden": true, "moves": ["dragondance", "outrage", "hurricane", "extremespeed"], "pokeball": "cherishball"},
			{"generation": 6, "level": 62, "gender": "M", "ivs": {"hp": 31, "def": 31, "spa": 31, "spd": 31}, "isHidden": false, "moves": ["agility", "slam", "barrier", "hyperbeam"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 5, "level": 50, "isHidden": false},
			{"generation": 7, "level": 10},
		],
		isNonstandard: "Past",
		tier: "OU",
	},
	dragonitedelta: {
		tier: "OU",
	},
	mewtwo: {
		randomBattleMoves: ["aurasphere", "icebeam", "nastyplot", "psystrike", "recover"],
		eventPokemon: [
			{"generation": 3, "level": 70, "shiny": 1, "moves": ["swift", "recover", "safeguard", "psychic"]},
			{"generation": 4, "level": 70, "shiny": 1, "moves": ["psychocut", "amnesia", "powerswap", "guardswap"]},
			{"generation": 5, "level": 70, "isHidden": false, "moves": ["psystrike", "shadowball", "aurasphere", "electroball"], "pokeball": "cherishball"},
			{"generation": 5, "level": 100, "nature": "Timid", "ivs": {"spa": 31, "spe": 31}, "isHidden": true, "moves": ["psystrike", "icebeam", "healpulse", "hurricane"], "pokeball": "cherishball"},
			{"generation": 6, "level": 70, "isHidden": false, "moves": ["recover", "psychic", "barrier", "aurasphere"]},
			{"generation": 6, "level": 100, "shiny": true, "isHidden": true, "moves": ["psystrike", "psychic", "recover", "aurasphere"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["psychic", "recover", "swift", "psychocut"]},
		],
		encounters: [
			{"generation": 1, "level": 70},
		],
		eventOnly: true,
		tier: "Uber",
	},
	mewtwoarmor: {
		requiredItem: "Mewtwo Armor",
		tier: "Uber",
	},
	mewtwoshadow: {
		tier: "Uber",
	},
	mewtwomegax: {
		requiredItem: "Mewtwonite X",
		isNonstandard: "Past",
		tier: "Uber",
	},
	mewtwomegay: {
		requiredItem: "Mewtwonite Y",
		isNonstandard: "Past",
		tier: "Uber",
	},
	mewtwoshadowmega: {
		requiredItem: "Shadow Mewtwonite",
		tier: "Uber",
	},
	mew: {
		randomBattleMoves: ["closecombat", "megahorn", "powerwhip", "psychicfangs", "swordsdance", "uturn"],
		eventPokemon: [
			{"generation": 3, "level": 30, "shiny": 1, "moves": ["pound", "transform", "megapunch", "metronome"]},
			{"generation": 3, "level": 10, "moves": ["pound", "transform"], "pokeball": "pokeball"},
			{"generation": 3, "level": 30, "shiny": 1, "moves": ["fakeout"]},
			{"generation": 3, "level": 10, "moves": ["fakeout"], "pokeball": "pokeball"},
			{"generation": 3, "level": 30, "shiny": 1, "moves": ["feintattack"]},
			{"generation": 3, "level": 10, "moves": ["feintattack"], "pokeball": "pokeball"},
			{"generation": 3, "level": 30, "shiny": 1, "moves": ["hypnosis"]},
			{"generation": 3, "level": 10, "moves": ["hypnosis"], "pokeball": "pokeball"},
			{"generation": 3, "level": 30, "shiny": 1, "moves": ["nightshade"]},
			{"generation": 3, "level": 10, "moves": ["nightshade"], "pokeball": "pokeball"},
			{"generation": 3, "level": 30, "shiny": 1, "moves": ["roleplay"]},
			{"generation": 3, "level": 10, "moves": ["roleplay"], "pokeball": "pokeball"},
			{"generation": 3, "level": 30, "shiny": 1, "moves": ["zapcannon"]},
			{"generation": 3, "level": 10, "moves": ["zapcannon"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "moves": ["ancientpower", "metronome", "teleport", "aurasphere"], "pokeball": "cherishball"},
			{"generation": 4, "level": 50, "moves": ["barrier", "metronome", "teleport", "aurasphere"], "pokeball": "cherishball"},
			{"generation": 4, "level": 50, "moves": ["megapunch", "metronome", "teleport", "aurasphere"], "pokeball": "cherishball"},
			{"generation": 4, "level": 50, "moves": ["amnesia", "metronome", "teleport", "aurasphere"], "pokeball": "cherishball"},
			{"generation": 4, "level": 50, "moves": ["transform", "metronome", "teleport", "aurasphere"], "pokeball": "cherishball"},
			{"generation": 4, "level": 50, "moves": ["psychic", "metronome", "teleport", "aurasphere"], "pokeball": "cherishball"},
			{"generation": 4, "level": 50, "moves": ["synthesis", "return", "hypnosis", "teleport"], "pokeball": "cherishball"},
			{"generation": 4, "level": 5, "moves": ["pound"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "moves": ["pound"], "pokeball": "cherishball"},
			{"generation": 7, "level": 5, "perfectIVs": 5, "moves": ["pound"], "pokeball": "pokeball"},
			{"generation": 7, "level": 50, "moves": ["psychic", "barrier", "metronome", "transform"], "pokeball": "cherishball"},
			{"generation": 8, "level": 1, "perfectIVs": 6, "moves": ["pound"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		tier: "OU",
		doublesTier: "DOU",
	},
	chikorita: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["tackle", "growl", "razorleaf"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "moves": ["tackle", "growl", "ancientpower", "frenzyplant"], "pokeball": "pokeball"},
			{"generation": 6, "level": 5, "isHidden": false, "moves": ["tackle", "growl"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	bayleef: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	meganium: {
		eventPokemon: [
			{"generation": 6, "level": 50, "isHidden": true, "moves": ["solarbeam", "sunnyday", "synthesis", "bodyslam"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	meganiummega: {
		requiredItem: "Meganiumite",
		tier: "UU",
	},
	cyndaquil: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["tackle", "leer", "smokescreen"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "moves": ["tackle", "leer", "reversal", "blastburn"], "pokeball": "pokeball"},
			{"generation": 6, "level": 5, "isHidden": false, "moves": ["tackle", "leer"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	cyndaquildelta: {
		tier: "LC",
	},
	quilava: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	quilavadelta: {
		tier: "NFE",
	},
	typhlosion: {
		eventPokemon: [
			{"generation": 3, "level": 70, "moves": ["quickattack", "flamewheel", "swift", "flamethrower"], "pokeball": "pokeball"},
			{"generation": 6, "level": 50, "isHidden": true, "moves": ["overheat", "flamewheel", "flamecharge", "swift"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "NU",
	},
	typhlosionmega: {
		requiredItem: "Typhlosionite",
		tier: "OU",
	},
	typhlosiondelta: {
		tier: "RU",
	},
	typhlosiondeltamega: {
		requiredItem: "Delta Typhlosionite",
		tier: "OU",
	},
	totodile: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["scratch", "leer", "rage"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "moves": ["scratch", "leer", "crunch", "hydrocannon"], "pokeball": "pokeball"},
			{"generation": 6, "level": 5, "isHidden": false, "moves": ["scratch", "leer"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	croconaw: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	feraligatr: {
		eventPokemon: [
			{"generation": 6, "level": 50, "isHidden": true, "moves": ["icepunch", "crunch", "waterfall", "screech"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "UU",
	},
	feraligatrmega: {
		requiredItem: "Feraligatite",
		tier: "OU",
	},
	sentret: {
		encounters: [
			{"generation": 2, "level": 2},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	furret: {
		encounters: [
			{"generation": 2, "level": 6},
			{"generation": 4, "level": 6},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	hoothoot: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["tackle", "growl", "foresight"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 2, "level": 2},
		],
		unreleasedHidden: "Past",
		tier: "LC",
	},
	hoothootdelta: {
		tier: "LC",
	},
	noctowl: {
		randomBattleMoves: ["airslash", "defog", "heatwave", "nastyplot", "roost", "whirlwind"],
		encounters: [
			{"generation": 2, "level": 7},
			{"generation": 4, "level": 5},
			{"generation": 7, "level": 19},
		],
		unreleasedHidden: true,
		tier: "PU",
		doublesTier: "DOU",
	},
	noctowldelta: {
		tier: "PU",
	},
	ledyba: {
		eventPokemon: [
			{"generation": 3, "level": 10, "moves": ["refresh", "psybeam", "aerialace", "supersonic"]},
		],
		encounters: [
			{"generation": 2, "level": 3},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	ledian: {
		encounters: [
			{"generation": 2, "level": 7},
			{"generation": 4, "level": 5},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	spinarak: {
		eventPokemon: [
			{"generation": 3, "level": 14, "moves": ["refresh", "dig", "signalbeam", "nightshade"]},
		],
		encounters: [
			{"generation": 2, "level": 3},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	ariados: {
		encounters: [
			{"generation": 2, "level": 7},
			{"generation": 4, "level": 5},
			{"generation": 6, "level": 19, "maxEggMoves": 1},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	chinchou: {
		unreleasedHidden: "Past",
		tier: "LC",
	},
	chinchoudelta: {
		tier: "LC",
	},
	lanturn: {
		randomBattleMoves: ["hydropump", "icebeam", "scald", "thunderbolt", "thunderwave", "voltswitch"],
		encounters: [
			{"generation": 4, "level": 20},
			{"generation": 6, "level": 26, "maxEggMoves": 1},
			{"generation": 7, "level": 10},
		],
		unreleasedHidden: true,
		tier: "PU",
		doublesTier: "DOU",
	},
	lanturndelta: {
		tier: "RU",
	},
	togepi: {
		eventPokemon: [
			{"generation": 3, "level": 20, "gender": "F", "abilities": ["serenegrace"], "moves": ["metronome", "charm", "sweetkiss", "yawn"], "pokeball": "pokeball"},
			{"generation": 3, "level": 25, "moves": ["triattack", "followme", "ancientpower", "helpinghand"]},
		],
		tier: "LC",
	},
	togetic: {
		tier: "NFE",
	},
	togekiss: {
		randomBattleMoves: ["airslash", "aurasphere", "morningsun", "nastyplot", "thunderwave"],
		eventPokemon: [
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["extremespeed", "aurasphere", "airslash", "present"]},
		],
		tier: "UU",
		doublesTier: "DOU",
	},
	natu: {
		eventPokemon: [
			{"generation": 3, "level": 22, "moves": ["batonpass", "futuresight", "nightshade", "aerialace"]},
		],
		tier: "LC",
	},
	xatu: {
		randomBattleMoves: ["heatwave", "lightscreen", "psychic", "reflect", "roost", "thunderwave", "uturn"],
		encounters: [
			{"generation": 2, "level": 15, "shiny": false},
			{"generation": 4, "level": 16, "shiny": false, "gender": "M", "nature": "Modest", "ivs": {"hp": 15, "atk": 20, "def": 15, "spa": 20, "spd": 20, "spe": 20}, "abilities": ["synchronize"], "pokeball": "pokeball"},
			{"generation": 6, "level": 24, "maxEggMoves": 1},
			{"generation": 7, "level": 21},
		],
		tier: "NU",
		doublesTier: "DOU",
	},
	mareep: {
		eventPokemon: [
			{"generation": 3, "level": 37, "gender": "F", "moves": ["thunder", "thundershock", "thunderwave", "cottonspore"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["tackle", "growl", "thundershock"], "pokeball": "pokeball"},
			{"generation": 3, "level": 17, "moves": ["healbell", "thundershock", "thunderwave", "bodyslam"]},
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["holdback", "tackle", "thunderwave", "thundershock"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	flaaffy: {
		encounters: [
			{"generation": 7, "level": 11, "isHidden": false, "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "NFE",
	},
	ampharos: {
		isNonstandard: "Past",
		tier: "PU",
	},
	ampharosmega: {
		requiredItem: "Ampharosite",
		isNonstandard: "Past",
		tier: "RU",
	},
	azurill: {
		isNonstandard: "Past",
		tier: "LC",
	},
	marill: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	azumarill: {
		encounters: [
			{"generation": 5, "level": 5, "isHidden": false},
			{"generation": 6, "level": 16, "maxEggMoves": 1},
		],
		isNonstandard: "Past",
		tier: "OU",
	},
	bonsly: {
		unreleasedHidden: "Past",
		tier: "LC",
	},
	sudowoodo: {
		randomBattleMoves: ["earthquake", "headsmash", "stealthrock", "suckerpunch", "woodhammer"],
		unreleasedHidden: true,
		tier: "PU",
		doublesTier: "DOU",
	},
	sudowoodomega: {
		requiredItem: "Sudowoodite",
		tier: "RU",
	},
	hoppip: {
		encounters: [
			{"generation": 2, "level": 3},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	skiploom: {
		encounters: [
			{"generation": 4, "level": 12},
		],
		isNonstandard: "Past",
		tier: "NFE",
	},
	jumpluff: {
		eventPokemon: [
			{"generation": 5, "level": 27, "gender": "M", "isHidden": true, "moves": ["falseswipe", "sleeppowder", "bulletseed", "leechseed"]},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	aipom: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["scratch", "tailwhip", "sandattack"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "LC Uber",
	},
	aipomdelta: {
		tier: "LC",
	},
	ambipom: {
		isNonstandard: "Past",
		tier: "NU",
	},
	ambipomdelta: {
		tier: "RU",
	},
	sunkern: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "abilities": ["chlorophyll"], "moves": ["absorb", "growth"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	sunkerndelta: {
		tier: "LC",
	},
	sunflora: {
		isNonstandard: "Past",
		tier: "PU",
	},
	sunfloradelta: {
		tier: "PU",
	},
	sunfloramega: {
		requiredItem: "Sunflorite",
		tier: "NU",
	},
	sunfloradeltamega: {
		requiredItem: "Delta Sunflorite",
		tier: "NU",
	},
	yanma: {
		isNonstandard: "Past",
		tier: "LC Uber",
	},
	yanmadelta: {
		tier: "LC Uber",
	},
	yanmega: {
		isNonstandard: "Past",
		tier: "RU",
	},
	yanmegadelta: {
		tier: "RU",
	},
	wooper: {
		encounters: [
			{"generation": 2, "level": 4},
		],
		tier: "LC",
	},
	wooperdelta: {
		tier: "LC",
	},
	quagsire: {
		randomBattleMoves: ["earthquake", "encore", "icebeam", "recover", "scald", "toxic"],
		encounters: [
			{"generation": 2, "level": 15},
			{"generation": 4, "level": 10},
		],
		tier: "RU",
		doublesTier: "DOU",
	},
	quagsiredelta: {
		tier: "PU",
	},
	murkrow: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "abilities": ["insomnia"], "moves": ["peck", "astonish"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "LC Uber",
	},
	honchkrow: {
		eventPokemon: [
			{"generation": 7, "level": 65, "gender": "M", "isHidden": false, "abilities": ["superluck"], "moves": ["nightslash", "skyattack", "heatwave", "icywind"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "RU",
	},
	misdreavus: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["growl", "psywave", "spite"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "LC Uber",
	},
	misdreavusdelta: {
		tier: "LC",
	},
	mismagius: {
		isNonstandard: "Past",
		tier: "NU",
	},
	mismagiusdelta: {
		tier: "RU",
	},
	unown: {
		encounters: [
			{"generation": 2, "level": 5},
			{"generation": 3, "level": 25},
			{"generation": 4, "level": 5},
			{"generation": 6, "level": 32},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	wynaut: {
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["splash", "charm", "encore", "tickle"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	wobbuffet: {
		randomBattleMoves: ["counter", "destinybond", "encore", "mirrorcoat"],
		eventPokemon: [
			{"generation": 3, "level": 5, "moves": ["counter", "mirrorcoat", "safeguard", "destinybond"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["counter", "mirrorcoat", "safeguard", "destinybond"], "pokeball": "pokeball"},
			{"generation": 6, "level": 10, "gender": "M", "isHidden": false, "moves": ["counter"], "pokeball": "cherishball"},
			{"generation": 6, "level": 15, "gender": "M", "isHidden": false, "moves": ["counter", "mirrorcoat"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 2, "level": 5},
			{"generation": 4, "level": 3},
		],
		tier: "Uber",
		doublesTier: "DOU",
	},
	girafarig: {
		isNonstandard: "Past",
		tier: "PU",
	},
	girafarigdelta: {
		tier: "NU",
	},
	girafarigmega: {
		requiredItem: "Etigirafarigite",
		tier: "RU",
	},
	girafarigdeltamega: {
		requiredItem: "Delta Etigirafarigite",
		tier: "RU",
	},
	pineco: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["tackle", "protect", "selfdestruct"], "pokeball": "pokeball"},
			{"generation": 3, "level": 20, "moves": ["refresh", "pinmissile", "spikes", "counter"]},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	forretress: {
		encounters: [
			{"generation": 6, "level": 30},
		],
		isNonstandard: "Past",
		tier: "RU",
	},
	dunsparce: {
		isNonstandard: "Past",
		tier: "PU",
	},
	dunsparcedelta: {
		tier: "PU",
	},
	gligar: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["poisonsting", "sandattack"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "UU",
	},
	gliscor: {
		isNonstandard: "Past",
		tier: "OU",
	},
	snubbull: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["tackle", "scaryface", "tailwhip", "charm"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	granbull: {
		encounters: [
			{"generation": 2, "level": 15},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	qwilfish: {
		randomBattleMoves: ["destinybond", "liquidation", "spikes", "taunt", "thunderwave", "toxic", "toxicspikes"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["tackle", "poisonsting", "harden", "minimize"], "pokeball": "pokeball"},
		],
		tier: "PU",
		doublesTier: "DOU",
	},
	shuckle: {
		randomBattleMoves: ["encore", "infestation", "knockoff", "stealthrock", "stickyweb", "toxic"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "abilities": ["sturdy"], "moves": ["constrict", "withdraw", "wrap"], "pokeball": "pokeball"},
			{"generation": 3, "level": 20, "abilities": ["sturdy"], "moves": ["substitute", "toxic", "sludgebomb", "encore"], "pokeball": "pokeball"},
		],
		tier: "PU",
		doublesTier: "DOU",
	},
	shuckledelta: {
		tier: "PU",
	},
	heracross: {
		eventPokemon: [
			{"generation": 6, "level": 50, "gender": "F", "nature": "Adamant", "isHidden": false, "moves": ["bulletseed", "pinmissile", "closecombat", "megahorn"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "nature": "Adamant", "isHidden": false, "abilities": ["guts"], "moves": ["pinmissile", "bulletseed", "earthquake", "rockblast"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "UU",
	},
	heracrossmega: {
		requiredItem: "Heracronite",
		isNonstandard: "Past",
		tier: "OU",
	},
	sneasel: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["scratch", "leer", "taunt", "quickattack"], "pokeball": "pokeball"},
		],
		tier: "LC Uber",
	},
	weavile: {
		randomBattleMoves: ["iceshard", "iciclecrash", "lowkick", "swordsdance", "throatchop"],
		eventPokemon: [
			{"generation": 4, "level": 30, "gender": "M", "nature": "Jolly", "moves": ["fakeout", "iceshard", "nightslash", "brickbreak"], "pokeball": "cherishball"},
			{"generation": 6, "level": 48, "gender": "M", "perfectIVs": 2, "isHidden": false, "moves": ["nightslash", "icepunch", "brickbreak", "xscissor"], "pokeball": "cherishball"},
		],
		tier: "OU",
		doublesTier: "DOU",
	},
	teddiursa: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "abilities": ["pickup"], "moves": ["scratch", "leer", "lick"], "pokeball": "pokeball"},
			{"generation": 3, "level": 11, "abilities": ["pickup"], "moves": ["refresh", "metalclaw", "lick", "return"]},
		],
		encounters: [
			{"generation": 2, "level": 2},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	ursaring: {
		encounters: [
			{"generation": 2, "level": 25},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	slugma: {
		isNonstandard: "Past",
		tier: "LC",
	},
	magcargo: {
		eventPokemon: [
			{"generation": 3, "level": 38, "moves": ["refresh", "heatwave", "earthquake", "flamethrower"]},
		],
		encounters: [
			{"generation": 3, "level": 25},
			{"generation": 6, "level": 30},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	magcargomega: {
		requiredItem: "Magcargonite",
		tier: "NU",
	},
	swinub: {
		eventPokemon: [
			{"generation": 3, "level": 22, "abilities": ["oblivious"], "moves": ["charm", "ancientpower", "mist", "mudshot"]},
		],
		tier: "LC",
	},
	piloswine: {
		encounters: [
			{"generation": 6, "level": 30},
		],
		tier: "NFE",
	},
	mamoswine: {
		randomBattleMoves: ["earthquake", "iceshard", "iciclecrash", "stealthrock", "superpower"],
		eventPokemon: [
			{"generation": 5, "level": 34, "gender": "M", "isHidden": true, "moves": ["hail", "icefang", "takedown", "doublehit"]},
			{"generation": 6, "level": 50, "shiny": true, "gender": "M", "nature": "Adamant", "isHidden": true, "moves": ["iciclespear", "earthquake", "iciclecrash", "rockslide"], "pokeball": "pokeball"},
		],
		tier: "UU",
		doublesTier: "DOU",
	},
	corsola: {
		randomBattleMoves: ["lightscreen", "reflect", "recover", "scald", "stealthrock"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["tackle", "mudsport"], "pokeball": "pokeball"},
			{"generation": 7, "level": 50, "gender": "F", "nature": "Serious", "isHidden": false, "abilities": ["hustle"], "moves": ["tackle", "powergem"], "pokeball": "ultraball"},
		],
		tier: "PU",
	},
	corsolagalar: {
		randomBattleMoves: ["nightshade", "stealthrock", "strengthsap", "willowisp"],
		tier: "OU",
	},
	cursola: {
		randomBattleMoves: ["earthpower", "hex", "hydropump", "icebeam", "shadowball", "stealthrock", "strengthsap", "willowisp"],
		tier: "RU",
		doublesTier: "DOU",
	},
	remoraid: {
		tier: "LC",
	},
	remoraidelta: {
		tier: "LC",
	},
	octillery: {
		randomBattleMoves: ["energyball", "fireblast", "gunkshot", "hydropump", "icebeam", "protect", "rockblast"],
		eventPokemon: [
			{"generation": 4, "level": 50, "gender": "F", "nature": "Serious", "abilities": ["suctioncups"], "moves": ["octazooka", "icebeam", "signalbeam", "hyperbeam"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 4, "level": 19},
			{"generation": 7, "level": 10},
		],
		tier: "PU",
		doublesTier: "DOU",
	},
	octillerydelta: {
		tier: "NU",
	},
	delibird: {
		randomBattleMoves: ["freezedry", "memento", "rapidspin", "spikes"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["present"], "pokeball": "pokeball"},
			{"generation": 6, "level": 10, "isHidden": false, "abilities": ["vitalspirit"], "moves": ["present", "happyhour"], "pokeball": "cherishball"},
		],
		unreleasedHidden: true,
		tier: "PU",
		doublesTier: "DOU",
	},
	mantyke: {
		tier: "LC",
	},
	mantine: {
		randomBattleMoves: ["haze", "hurricane", "icebeam", "roost", "scald"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["tackle", "bubble", "supersonic"], "pokeball": "pokeball"},
		],
		tier: "RU",
		doublesTier: "DOU",
	},
	skarmory: {
		isNonstandard: "Past",
		tier: "OU",
	},
	houndour: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["leer", "ember", "howl"], "pokeball": "pokeball"},
			{"generation": 3, "level": 17, "moves": ["charm", "feintattack", "ember", "roar"]},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	houndoom: {
		eventPokemon: [
			{"generation": 6, "level": 50, "nature": "Timid", "isHidden": false, "abilities": ["flashfire"], "moves": ["flamethrower", "darkpulse", "solarbeam", "sludgebomb"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 4, "level": 20},
		],
		isNonstandard: "Past",
		tier: "NU",
	},
	houndoommega: {
		requiredItem: "Houndoominite",
		isNonstandard: "Past",
		tier: "UU",
	},
	phanpy: {
		encounters: [
			{"generation": 2, "level": 2},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	donphan: {
		encounters: [
			{"generation": 6, "level": 24, "maxEggMoves": 1},
		],
		isNonstandard: "Past",
		tier: "RU",
	},
	donphanmega: {
		requiredItem: "Donphanite",
		tier: "UU",
	},
	stantler: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "abilities": ["intimidate"], "moves": ["tackle", "leer"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	smeargle: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "abilities": ["owntempo"], "moves": ["sketch"], "pokeball": "pokeball"},
			{"generation": 5, "level": 50, "gender": "F", "nature": "Jolly", "ivs": {"atk": 31, "spe": 31}, "isHidden": false, "abilities": ["technician"], "moves": ["falseswipe", "spore", "odorsleuth", "meanlook"], "pokeball": "cherishball"},
			{"generation": 6, "level": 40, "gender": "M", "nature": "Jolly", "isHidden": false, "abilities": ["owntempo"], "moves": ["sketch", "furyswipes", "seismictoss", "flamethrower"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	miltank: {
		eventPokemon: [
			{"generation": 6, "level": 20, "perfectIVs": 3, "isHidden": false, "abilities": ["scrappy"], "moves": ["rollout", "attract", "stomp", "milkdrink"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "NU",
	},
	miltankmega: {
		requiredItem: "Miltankite",
		tier: "UU",
	},
	raikou: {
		eventPokemon: [
			{"generation": 3, "level": 50, "shiny": 1, "moves": ["thundershock", "roar", "quickattack", "spark"]},
			{"generation": 3, "level": 70, "moves": ["quickattack", "spark", "reflect", "crunch"], "pokeball": "pokeball"},
			{"generation": 4, "level": 40, "shiny": 1, "moves": ["roar", "quickattack", "spark", "reflect"]},
			{"generation": 4, "level": 30, "shiny": true, "nature": "Rash", "moves": ["zapcannon", "aurasphere", "extremespeed", "weatherball"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["spark", "reflect", "crunch", "thunderfang"]},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["reflect", "crunch", "thunderfang", "discharge"]},
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["reflect", "crunch", "thunderfang", "discharge"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "isHidden": false, "moves": ["thunderbolt", "voltswitch", "extrasensory", "calmmind"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 2, "level": 40},
			{"generation": 3, "level": 40},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "RU",
	},
	entei: {
		eventPokemon: [
			{"generation": 3, "level": 50, "shiny": 1, "moves": ["ember", "roar", "firespin", "stomp"]},
			{"generation": 3, "level": 70, "moves": ["firespin", "stomp", "flamethrower", "swagger"], "pokeball": "pokeball"},
			{"generation": 4, "level": 40, "shiny": 1, "moves": ["roar", "firespin", "stomp", "flamethrower"]},
			{"generation": 4, "level": 30, "shiny": true, "nature": "Adamant", "moves": ["flareblitz", "howl", "extremespeed", "crushclaw"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["stomp", "flamethrower", "swagger", "firefang"]},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["stomp", "bite", "swagger", "lavaplume"]},
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["stomp", "bite", "swagger", "lavaplume"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "isHidden": false, "moves": ["sacredfire", "stoneedge", "ironhead", "flamecharge"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 2, "level": 40},
			{"generation": 3, "level": 40},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "UU",
	},
	suicune: {
		eventPokemon: [
			{"generation": 3, "level": 50, "shiny": 1, "moves": ["bubblebeam", "raindance", "gust", "aurorabeam"]},
			{"generation": 3, "level": 70, "moves": ["gust", "aurorabeam", "mist", "mirrorcoat"], "pokeball": "pokeball"},
			{"generation": 4, "level": 40, "shiny": 1, "moves": ["raindance", "gust", "aurorabeam", "mist"]},
			{"generation": 4, "level": 30, "shiny": true, "nature": "Relaxed", "moves": ["sheercold", "airslash", "extremespeed", "aquaring"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["aurorabeam", "mist", "mirrorcoat", "icefang"]},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["bubblebeam", "aurorabeam", "mist", "raindance"]},
		],
		encounters: [
			{"generation": 2, "level": 40},
			{"generation": 3, "level": 40},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "UU",
	},
	larvitar: {
		eventPokemon: [
			{"generation": 3, "level": 20, "moves": ["sandstorm", "dragondance", "bite", "outrage"], "pokeball": "pokeball"},
			{"generation": 5, "level": 5, "shiny": true, "gender": "M", "isHidden": false, "moves": ["bite", "leer", "sandstorm", "superpower"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	pupitar: {
		tier: "NFE",
	},
	tyranitar: {
		randomBattleMoves: ["crunch", "dragondance", "earthquake", "firepunch", "stealthrock", "stoneedge"],
		eventPokemon: [
			{"generation": 3, "level": 70, "moves": ["thrash", "scaryface", "crunch", "earthquake"], "pokeball": "pokeball"},
			{"generation": 5, "level": 100, "gender": "M", "isHidden": false, "moves": ["fireblast", "icebeam", "stoneedge", "crunch"], "pokeball": "cherishball"},
			{"generation": 5, "level": 55, "gender": "M", "isHidden": true, "moves": ["payback", "crunch", "earthquake", "seismictoss"]},
			{"generation": 6, "level": 50, "isHidden": false, "moves": ["stoneedge", "crunch", "earthquake", "icepunch"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "nature": "Jolly", "isHidden": false, "moves": ["rockslide", "earthquake", "crunch", "stoneedge"], "pokeball": "cherishball"},
			{"generation": 6, "level": 55, "shiny": true, "nature": "Adamant", "ivs": {"hp": 31, "atk": 31, "def": 31, "spa": 14, "spd": 31, "spe": 0}, "isHidden": false, "moves": ["crunch", "rockslide", "lowkick", "protect"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "isHidden": false, "moves": ["rockslide", "crunch", "icepunch", "lowkick"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 5, "level": 50, "isHidden": false},
		],
		tier: "OU",
		doublesTier: "DOU",
	},
	tyranitararmor: {
		requiredItem: "Tyranitar Armor",
		tier: "OU",
	},
	tyranitarmega: {
		requiredItem: "Tyranitarite",
		isNonstandard: "Past",
		tier: "OU",
	},
	lugia: {
		eventPokemon: [
			{"generation": 3, "level": 70, "shiny": 1, "moves": ["recover", "hydropump", "raindance", "swift"]},
			{"generation": 3, "level": 50, "moves": ["psychoboost", "earthquake", "hydropump", "featherdance"]},
			{"generation": 4, "level": 45, "shiny": 1, "moves": ["extrasensory", "raindance", "hydropump", "aeroblast"]},
			{"generation": 4, "level": 70, "shiny": 1, "moves": ["aeroblast", "punishment", "ancientpower", "safeguard"]},
			{"generation": 5, "level": 5, "isHidden": true, "moves": ["whirlwind", "weatherball"], "pokeball": "dreamball"},
			{"generation": 6, "level": 50, "shiny": 1, "isHidden": false, "moves": ["raindance", "hydropump", "aeroblast", "punishment"]},
			{"generation": 6, "level": 50, "nature": "Timid", "isHidden": false, "moves": ["aeroblast", "hydropump", "dragonrush", "icebeam"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["skillswap", "aeroblast", "extrasensory", "ancientpower"]},
			{"generation": 7, "level": 100, "isHidden": true, "moves": ["aeroblast", "hurricane", "defog", "tailwind"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["skillswap", "aeroblast", "extrasensory", "ancientpower"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "isHidden": false, "moves": ["aeroblast", "earthpower", "psychic", "tailwind"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 2, "level": 40},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Uber",
	},
	hooh: {
		eventPokemon: [
			{"generation": 3, "level": 70, "shiny": 1, "moves": ["recover", "fireblast", "sunnyday", "swift"]},
			{"generation": 4, "level": 45, "shiny": 1, "moves": ["extrasensory", "sunnyday", "fireblast", "sacredfire"]},
			{"generation": 4, "level": 70, "shiny": 1, "moves": ["sacredfire", "punishment", "ancientpower", "safeguard"]},
			{"generation": 5, "level": 5, "isHidden": true, "moves": ["whirlwind", "weatherball"], "pokeball": "dreamball"},
			{"generation": 6, "level": 50, "shiny": 1, "isHidden": false, "moves": ["sunnyday", "fireblast", "sacredfire", "punishment"]},
			{"generation": 6, "level": 50, "shiny": true, "isHidden": false, "moves": ["sacredfire", "bravebird", "recover", "celebrate"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "isHidden": false, "moves": ["sacredfire", "bravebird", "recover", "safeguard"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["burnup", "sacredfire", "extrasensory", "ancientpower"]},
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["burnup", "sacredfire", "extrasensory", "ancientpower"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "isHidden": false, "moves": ["sacredfire", "bravebird", "earthquake", "tailwind"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 2, "level": 40},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Uber",
	},
	celebi: {
		randomBattleMoves: ["aurasphere", "gigadrain", "leafstorm", "nastyplot", "psychic", "recover", "stealthrock"],
		eventPokemon: [
			{"generation": 3, "level": 10, "moves": ["confusion", "recover", "healbell", "safeguard"], "pokeball": "pokeball"},
			{"generation": 3, "level": 70, "moves": ["ancientpower", "futuresight", "batonpass", "perishsong"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "moves": ["leechseed", "recover", "healbell", "safeguard"], "pokeball": "pokeball"},
			{"generation": 3, "level": 30, "moves": ["healbell", "safeguard", "ancientpower", "futuresight"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "moves": ["leafstorm", "recover", "nastyplot", "healingwish"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "moves": ["recover", "healbell", "safeguard", "holdback"], "pokeball": "luxuryball"},
			{"generation": 6, "level": 100, "moves": ["confusion", "recover", "healbell", "safeguard"], "pokeball": "cherishball"},
			{"generation": 7, "level": 30, "moves": ["healbell", "safeguard", "ancientpower", "futuresight"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 2, "level": 30},
		],
		eventOnly: true,
		tier: "UU",
	},
	treecko: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["pound", "leer", "absorb"], "pokeball": "pokeball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["pound", "leer", "absorb"]},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	treeckodelta: {
		tier: "LC",
	},
	grovyle: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	grovyledelta: {
		tier: "NFE",
	},
	sceptile: {
		eventPokemon: [
			{"generation": 5, "level": 50, "shiny": 1, "isHidden": false, "moves": ["leafstorm", "dragonpulse", "focusblast", "rockslide"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "NU",
	},
	sceptiledelta: {
		tier: "RU",
	},
	sceptilemega: {
		requiredItem: "Sceptilite",
		isNonstandard: "Past",
		tier: "RU",
	},
	torchic: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["scratch", "growl", "focusenergy", "ember"], "pokeball": "pokeball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["scratch", "growl", "focusenergy", "ember"]},
			{"generation": 6, "level": 10, "gender": "M", "isHidden": true, "moves": ["scratch", "growl", "focusenergy", "ember"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	torchicdelta: {
		tier: "LC",
	},
	combusken: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	combuskendelta: {
		tier: "NFE",
	},
	blaziken: {
		eventPokemon: [
			{"generation": 3, "level": 70, "moves": ["blazekick", "slash", "mirrormove", "skyuppercut"], "pokeball": "pokeball"},
			{"generation": 5, "level": 50, "shiny": 1, "isHidden": false, "moves": ["flareblitz", "highjumpkick", "thunderpunch", "stoneedge"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "Uber",
	},
	blazikendelta: {
		tier: "NU",
	},
	blazikenmega: {
		requiredItem: "Blazikenite",
		isNonstandard: "Past",
		tier: "Uber",
	},
	mudkip: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["tackle", "growl", "mudslap", "watergun"], "pokeball": "pokeball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["tackle", "growl", "mudslap", "watergun"]},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	marshtomp: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	swampert: {
		eventPokemon: [
			{"generation": 5, "level": 50, "shiny": 1, "isHidden": false, "moves": ["earthquake", "icebeam", "hydropump", "hammerarm"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "UU",
	},
	swampertmega: {
		requiredItem: "Swampertite",
		isNonstandard: "Past",
		tier: "OU",
	},
	poochyena: {
		eventPokemon: [
			{"generation": 3, "level": 10, "abilities": ["runaway"], "moves": ["healbell", "dig", "poisonfang", "howl"]},
		],
		encounters: [
			{"generation": 3, "level": 2},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	mightyena: {
		eventPokemon: [
			{"generation": 7, "level": 64, "gender": "M", "isHidden": false, "abilities": ["intimidate"], "moves": ["crunch", "firefang", "icefang", "thunderfang"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	zigzagoon: {
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": true, "abilities": ["pickup"], "moves": ["tackle", "growl", "tailwhip"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": 1, "abilities": ["pickup"], "moves": ["tackle", "growl", "tailwhip", "extremespeed"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 3, "level": 2},
		],
		tier: "LC",
	},
	zigzagoongalar: {
		tier: "LC",
	},
	linoone: {
		randomBattleMoves: ["bellydrum", "extremespeed", "stompingtantrum", "throatchop"],
		eventPokemon: [
			{"generation": 6, "level": 50, "isHidden": false, "moves": ["extremespeed", "helpinghand", "babydolleyes", "protect"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 4, "level": 3},
			{"generation": 6, "level": 17, "maxEggMoves": 1},
		],
		tier: "RU",
	},
	linoonegalar: {
		tier: "NFE",
	},
	obstagoon: {
		randomBattleMoves: ["bulkup", "closecombat", "facade", "gunkshot", "knockoff", "obstruct"],
		tier: "RU",
		doublesTier: "DOU",
	},
	wurmple: {
		encounters: [
			{"generation": 3, "level": 2},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	silcoon: {
		isNonstandard: "Past",
		tier: "NFE",
		encounters: [
			{"generation": 3, "level": 5},
			{"generation": 4, "level": 5},
			{"generation": 6, "level": 2, "maxEggMoves": 1},
		],
	},
	beautifly: {
		isNonstandard: "Past",
		tier: "PU",
	},
	cascoon: {
		encounters: [
			{"generation": 3, "level": 5},
			{"generation": 4, "level": 5},
			{"generation": 6, "level": 2, "maxEggMoves": 1},
		],
		isNonstandard: "Past",
		tier: "NFE",
	},
	dustox: {
		isNonstandard: "Past",
		tier: "PU",
	},
	lotad: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["astonish", "growl", "absorb"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 3, "level": 3},
		],
		tier: "LC",
	},
	lotaddelta: {
		tier: "LC",
	},
	lombre: {
		encounters: [
			{"generation": 6, "level": 13, "maxEggMoves": 1},
		],
		tier: "NFE",
	},
	lombredelta: {
		tier: "NFE",
	},
	ludicolo: {
		randomBattleMoves: ["focusblast", "gigadrain", "hydropump", "icebeam", "raindance", "scald"],
		eventPokemon: [
			{"generation": 5, "level": 50, "shiny": 1, "isHidden": false, "abilities": ["swiftswim"], "moves": ["fakeout", "hydropump", "icebeam", "gigadrain"], "pokeball": "cherishball"},
			{"generation": 5, "level": 30, "gender": "M", "nature": "Calm", "isHidden": false, "abilities": ["swiftswim"], "moves": ["scald", "gigadrain", "icebeam", "sunnyday"], "pokeball": "pokeball"},
		],
		tier: "RU",
		doublesTier: "DOU",
	},
	ludicolodelta: {
		tier: "NU",
	},
	seedot: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["bide", "harden", "growth"], "pokeball": "pokeball"},
			{"generation": 3, "level": 17, "moves": ["refresh", "gigadrain", "bulletseed", "secretpower"]},
		],
		encounters: [
			{"generation": 3, "level": 3},
		],
		tier: "LC",
	},
	seedotdelta: {
		tier: "LC",
	},
	nuzleaf: {
		encounters: [
			{"generation": 6, "level": 13, "maxEggMoves": 1},
		],
		tier: "NFE",
	},
	nuzleafdelta: {
		tier: "NFE",
	},
	shiftry: {
		randomBattleMoves: ["defog", "leafblade", "leafstorm", "suckerpunch", "swordsdance", "throatchop"],
		tier: "PU",
		doublesTier: "DOU",
	},
	shiftrydelta: {
		tier: "NU",
	},
	shiftrymega: {
		requiredItem: "Shiftrite",
		tier: "UU",
	},
	taillow: {
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["peck", "growl", "focusenergy", "featherdance"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 3, "level": 4},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	swellow: {
		eventPokemon: [
			{"generation": 3, "level": 43, "moves": ["batonpass", "skyattack", "agility", "facade"]},
		],
		encounters: [
			{"generation": 4, "level": 20},
		],
		isNonstandard: "Past",
		tier: "RU",
	},
	wingull: {
		encounters: [
			{"generation": 3, "level": 2},
		],
		unreleasedHidden: true,
		tier: "LC Uber",
	},
	pelipper: {
		randomBattleMoves: ["hurricane", "hydropump", "knockoff", "roost", "scald", "uturn"],
		encounters: [
			{"generation": 4, "level": 15},
			{"generation": 6, "level": 18, "maxEggMoves": 1},
		],
		unreleasedHidden: true,
		tier: "OU",
		doublesTier: "DOU",
	},
	ralts: {
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["growl", "wish"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["growl", "charm"], "pokeball": "pokeball"},
			{"generation": 3, "level": 20, "moves": ["sing", "shockwave", "reflect", "confusion"]},
			{"generation": 6, "level": 1, "isHidden": true, "moves": ["growl", "encore"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 3, "level": 4},
		],
		tier: "LC",
	},
	raltsdelta: {
		tier: "LC",
	},
	kirlia: {
		encounters: [
			{"generation": 4, "level": 6},
		],
		tier: "NFE",
	},
	kirliadelta: {
		tier: "NFE",
	},
	gardevoir: {
		randomBattleMoves: ["calmmind", "focusblast", "moonblast", "psychic", "substitute", "trick", "willowisp"],
		eventPokemon: [
			{"generation": 5, "level": 50, "shiny": 1, "isHidden": false, "abilities": ["trace"], "moves": ["hypnosis", "thunderbolt", "focusblast", "psychic"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "shiny": true, "gender": "F", "isHidden": false, "abilities": ["synchronize"], "moves": ["dazzlinggleam", "moonblast", "storedpower", "calmmind"], "pokeball": "cherishball"},
		],
		tier: "RU",
		doublesTier: "DOU",
	},
	gardevoirdelta: {
		tier: "RU",
	},
	gardevoirmega: {
		requiredItem: "Gardevoirite",
		isNonstandard: "Past",
		tier: "OU",
	},
	gardevoirdeltamega: {
		requiredItem: "Delta Gardevoirite",
		tier: "UU",
	},
	gallade: {
		randomBattleMoves: ["closecombat", "knockoff", "shadowsneak", "swordsdance", "trick", "zenheadbutt"],
		tier: "NU",
		doublesTier: "DOU",
	},
	galladedelta: {
		tier: "RU",
	},
	gallademega: {
		requiredItem: "Galladite",
		isNonstandard: "Past",
		tier: "OU",
	},
	galladedeltamega: {
		requiredItem: "Delta Galladite",
		tier: "OU",
	},
	surskit: {
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["bubble", "mudsport"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["bubble", "quickattack"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 3, "level": 3},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	masquerain: {
		encounters: [
			{"generation": 6, "level": 21, "maxEggMoves": 1},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	shroomish: {
		eventPokemon: [
			{"generation": 3, "level": 15, "abilities": ["effectspore"], "moves": ["refresh", "falseswipe", "megadrain", "stunspore"]},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	breloom: {
		isNonstandard: "Past",
		tier: "OU",
	},
	slakoth: {
		isNonstandard: "Past",
		tier: "LC",
	},
	vigoroth: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	slaking: {
		eventPokemon: [
			{"generation": 4, "level": 50, "gender": "M", "nature": "Adamant", "moves": ["gigaimpact", "return", "shadowclaw", "aerialace"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	nincada: {
		tier: "LC",
	},
	ninjask: {
		randomBattleMoves: ["acrobatics", "leechlife", "nightslash", "swordsdance"],
		tier: "PU",
		doublesTier: "DOU",
	},
	shedinja: {
		randomBattleMoves: ["shadowclaw", "shadowsneak", "toxic", "willowisp", "xscissor"],
		eventPokemon: [
			{"generation": 3, "level": 50, "moves": ["spite", "confuseray", "shadowball", "grudge"], "pokeball": "pokeball"},
		],
		tier: "PU",
		doublesTier: "DOU",
	},
	whismur: {
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["pound", "uproar", "teeterdance"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	loudred: {
		encounters: [
			{"generation": 6, "level": 16, "maxEggMoves": 1},
		],
		isNonstandard: "Past",
		tier: "NFE",
	},
	exploud: {
		eventPokemon: [
			{"generation": 3, "level": 100, "moves": ["roar", "rest", "sleeptalk", "hypervoice"], "pokeball": "pokeball"},
			{"generation": 3, "level": 50, "moves": ["stomp", "screech", "hyperbeam", "roar"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "RU",
	},
	makuhita: {
		eventPokemon: [
			{"generation": 3, "level": 18, "moves": ["refresh", "brickbreak", "armthrust", "rocktomb"]},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	hariyama: {
		encounters: [
			{"generation": 6, "level": 22, "isHidden": false},
		],
		isNonstandard: "Past",
		tier: "NU",
	},
	nosepass: {
		eventPokemon: [
			{"generation": 3, "level": 26, "moves": ["helpinghand", "thunderbolt", "thunderwave", "rockslide"]},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	probopass: {
		isNonstandard: "Past",
		tier: "PU",
	},
	skitty: {
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "abilities": ["cutecharm"], "moves": ["tackle", "growl", "tailwhip", "payday"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": 1, "abilities": ["cutecharm"], "moves": ["growl", "tackle", "tailwhip", "rollout"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "abilities": ["cutecharm"], "moves": ["growl", "tackle", "tailwhip", "attract"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 3, "level": 3, "shiny": false, "gender": "F", "ivs": {"hp": 5, "atk": 4, "def": 4, "spa": 5, "spd": 4, "spe": 4}, "abilities": ["cutecharm"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	delcatty: {
		eventPokemon: [
			{"generation": 3, "level": 18, "abilities": ["cutecharm"], "moves": ["sweetkiss", "secretpower", "attract", "shockwave"]},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	sableye: {
		randomBattleMoves: ["encore", "foulplay", "knockoff", "recover", "taunt", "willowisp"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "abilities": ["keeneye"], "moves": ["leer", "scratch", "foresight", "nightshade"], "pokeball": "pokeball"},
			{"generation": 3, "level": 33, "abilities": ["keeneye"], "moves": ["helpinghand", "shadowball", "feintattack", "recover"]},
			{"generation": 5, "level": 50, "gender": "M", "isHidden": true, "moves": ["foulplay", "octazooka", "tickle", "trick"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "nature": "Relaxed", "ivs": {"hp": 31, "spa": 31}, "isHidden": true, "moves": ["calmmind", "willowisp", "recover", "shadowball"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "nature": "Bold", "isHidden": true, "moves": ["willowisp", "recover", "taunt", "shockwave"], "pokeball": "cherishball"},
		],
		tier: "PU",
		doublesTier: "DOU",
	},
	sableyedelta: {
		tier: "PU",
	},
	sableyemega: {
		requiredItem: "Sablenite",
		isNonstandard: "Past",
		tier: "OU",
	},
	sableyedeltamega: {
		requiredItem: "Delta Sablenite",
		tier: "NU",
	},
	mawile: {
		randomBattleMoves: ["ironhead", "playrough", "suckerpunch", "stealthrock", "swordsdance"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["astonish", "faketears"], "pokeball": "pokeball"},
			{"generation": 3, "level": 22, "moves": ["sing", "falseswipe", "vicegrip", "irondefense"]},
			{"generation": 6, "level": 50, "isHidden": false, "abilities": ["intimidate"], "moves": ["ironhead", "playrough", "firefang", "suckerpunch"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "isHidden": false, "abilities": ["intimidate"], "moves": ["suckerpunch", "protect", "playrough", "ironhead"], "pokeball": "cherishball"},
		],
		tier: "PU",
		doublesTier: "DOU",
	},
	mawiledelta: {
		tier: "PU",
	},
	mawilemega: {
		requiredItem: "Mawilite",
		isNonstandard: "Past",
		tier: "OU",
	},
	mawiledeltamega: {
		requiredItem: "Delta Mawilite",
		tier: "RU",
	},
	aron: {
		isNonstandard: "Past",
		tier: "LC",
	},
	arondelta: {
		tier: "LC",
	},
	lairon: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	lairondelta: {
		tier: "NFE",
	},
	aggron: {
		eventPokemon: [
			{"generation": 3, "level": 100, "moves": ["irontail", "protect", "metalsound", "doubleedge"], "pokeball": "pokeball"},
			{"generation": 3, "level": 50, "moves": ["takedown", "irontail", "protect", "metalsound"], "pokeball": "pokeball"},
			{"generation": 6, "level": 50, "nature": "Brave", "isHidden": false, "abilities": ["rockhead"], "moves": ["ironhead", "earthquake", "headsmash", "rockslide"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	aggrondelta: {
		tier: "RU",
	},
	aggronmega: {
		requiredItem: "Aggronite",
		isNonstandard: "Past",
		tier: "UU",
	},
	meditite: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["bide", "meditate", "confusion"], "pokeball": "pokeball"},
			{"generation": 3, "level": 20, "moves": ["dynamicpunch", "confusion", "shadowball", "detect"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "LC Uber",
	},
	medititedelta: {
		tier: "LC",
	},
	medicham: {
		encounters: [
			{"generation": 4, "level": 35},
			{"generation": 6, "level": 34, "maxEggMoves": 1},
		],
		isNonstandard: "Past",
		tier: "NU",
	},
	medichamdelta: {
		tier: "RU",
	},
	medichammega: {
		requiredItem: "Medichamite",
		isNonstandard: "Past",
		tier: "OU",
	},
	medichamdeltamega: {
		requiredItem: "Delta Medichamite",
		tier: "OU",
	},
	electrike: {
		unreleasedHidden: "Past",
		tier: "LC",
	},
	manectric: {
		randomBattleMoves: ["flamethrower", "overheat", "switcheroo", "thunderbolt", "voltswitch"],
		eventPokemon: [
			{"generation": 3, "level": 44, "moves": ["refresh", "thunder", "raindance", "bite"]},
			{"generation": 6, "level": 50, "nature": "Timid", "isHidden": false, "abilities": ["lightningrod"], "moves": ["overheat", "thunderbolt", "voltswitch", "protect"], "pokeball": "cherishball"},
		],
		unreleasedHidden: true,
		tier: "PU",
		doublesTier: "DOU",
	},
	manectricmega: {
		requiredItem: "Manectite",
		isNonstandard: "Past",
		tier: "UU",
	},
	plusle: {
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["growl", "thunderwave", "mudsport"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["growl", "thunderwave", "quickattack"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	plusledelta: {
		tier: "PU",
	},
	minun: {
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["growl", "thunderwave", "watersport"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["growl", "thunderwave", "quickattack"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	minundelta: {
		tier: "PU",
	},
	volbeat: {
		isNonstandard: "Past",
		tier: "PU",
	},
	illumise: {
		isNonstandard: "Past",
		tier: "PU",
	},
	budew: {
		tier: "LC",
	},
	budewdelta: {
		tier: "LC",
	},
	roselia: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["absorb", "growth", "poisonsting"], "pokeball": "pokeball"},
			{"generation": 3, "level": 22, "moves": ["sweetkiss", "magicalleaf", "leechseed", "grasswhistle"]},
		],
		tier: "NFE",
	},
	roseliadelta: {
		tier: "NFE",
	},
	roserade: {
		randomBattleMoves: ["leafstorm", "sleeppowder", "sludgebomb", "spikes", "synthesis", "toxicspikes"],
		tier: "RU",
		doublesTier: "DOU",
	},
	roseradedelta: {
		tier: "UU",
	},
	gulpin: {
		eventPokemon: [
			{"generation": 3, "level": 17, "moves": ["sing", "shockwave", "sludge", "toxic"]},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	swalot: {
		isNonstandard: "Past",
		tier: "PU",
	},
	carvanha: {
		eventPokemon: [
			{"generation": 3, "level": 15, "moves": ["refresh", "waterpulse", "bite", "scaryface"]},
			{"generation": 6, "level": 1, "isHidden": true, "moves": ["leer", "bite", "hydropump"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	sharpedo: {
		eventPokemon: [
			{"generation": 6, "level": 50, "nature": "Adamant", "isHidden": true, "moves": ["aquajet", "crunch", "icefang", "destinybond"], "pokeball": "cherishball"},
			{"generation": 6, "level": 43, "gender": "M", "perfectIVs": 2, "isHidden": false, "moves": ["scaryface", "slash", "poisonfang", "crunch"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 7, "level": 10},
		],
		isNonstandard: "Past",
		tier: "UU",
	},
	sharpedomega: {
		requiredItem: "Sharpedonite",
		isNonstandard: "Past",
		tier: "UU",
	},
	wailmer: {
		tier: "LC",
	},
	wailmerdelta: {
		tier: "LC",
	},
	wailord: {
		randomBattleMoves: ["hydropump", "hypervoice", "icebeam", "waterspout"],
		eventPokemon: [
			{"generation": 3, "level": 100, "moves": ["rest", "waterspout", "amnesia", "hydropump"], "pokeball": "pokeball"},
			{"generation": 3, "level": 50, "moves": ["waterpulse", "mist", "rest", "waterspout"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 3, "level": 25},
			{"generation": 4, "level": 35},
			{"generation": 5, "level": 30, "isHidden": false},
			{"generation": 7, "level": 10},
		],
		tier: "PU",
		doublesTier: "DOU",
	},
	wailorddelta: {
		tier: "PU",
	},
	numel: {
		eventPokemon: [
			{"generation": 3, "level": 14, "abilities": ["oblivious"], "moves": ["charm", "takedown", "dig", "ember"]},
			{"generation": 6, "level": 1, "isHidden": false, "moves": ["growl", "tackle", "ironhead"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	numeldelta: {
		tier: "LC",
	},
	camerupt: {
		eventPokemon: [
			{"generation": 6, "level": 43, "gender": "M", "perfectIVs": 2, "isHidden": false, "abilities": ["solidrock"], "moves": ["curse", "takedown", "rockslide", "yawn"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 6, "level": 30},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	cameruptdelta: {
		tier: "NU",
	},
	cameruptmega: {
		requiredItem: "Cameruptite",
		isNonstandard: "Past",
		tier: "RU",
	},
	cameruptdeltamega: {
		requiredItem: "Delta Cameruptite",
		tier: "RU",
	},
	torkoal: {
		randomBattleMoves: ["earthquake", "lavaplume", "rapidspin", "solarbeam", "stealthrock"],
		tier: "RU",
		doublesTier: "DOU",
	},
	spoink: {
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "abilities": ["owntempo"], "moves": ["splash", "uproar"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	grumpig: {
		encounters: [
			{"generation": 6, "level": 30},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	spinda: {
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["tackle", "uproar", "sing"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	trapinch: {
		eventPokemon: [
			{"generation": 5, "level": 1, "shiny": true, "isHidden": false, "moves": ["bite"], "pokeball": "pokeball"},
		],
		tier: "LC Uber",
	},
	vibrava: {
		tier: "NFE",
	},
	flygon: {
		randomBattleMoves: ["dragondance", "earthquake", "firepunch", "outrage", "uturn"],
		eventPokemon: [
			{"generation": 3, "level": 45, "moves": ["sandtomb", "crunch", "dragonbreath", "screech"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "gender": "M", "nature": "Naive", "moves": ["dracometeor", "uturn", "earthquake", "dragonclaw"], "pokeball": "cherishball"},
		],
		tier: "RU",
		doublesTier: "DOU",
	},
	flygonarmor: {
		requiredItem: "Flygon Armor",
		tier: "UU",
	},
	flygonmega: {
		requiredItem: "Flygonite",
		tier: "OU",
	},
	cacnea: {
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["poisonsting", "leer", "absorb", "encore"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	cacturne: {
		eventPokemon: [
			{"generation": 3, "level": 45, "moves": ["ingrain", "feintattack", "spikes", "needlearm"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 6, "level": 30},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	cacturnemega: {
		requiredItem: "Cacturnite",
		tier: "UU",
	},
	swablu: {
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["peck", "growl", "falseswipe"], "pokeball": "pokeball"},
			{"generation": 5, "level": 1, "shiny": true, "isHidden": false, "moves": ["peck", "growl"], "pokeball": "pokeball"},
			{"generation": 6, "level": 1, "isHidden": true, "moves": ["peck", "growl", "hypervoice"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	altaria: {
		eventPokemon: [
			{"generation": 3, "level": 45, "moves": ["takedown", "dragonbreath", "dragondance", "refresh"], "pokeball": "pokeball"},
			{"generation": 3, "level": 36, "moves": ["healbell", "dragonbreath", "solarbeam", "aerialace"]},
			{"generation": 5, "level": 35, "gender": "M", "isHidden": true, "moves": ["takedown", "naturalgift", "dragonbreath", "falseswipe"]},
			{"generation": 6, "level": 100, "nature": "Modest", "isHidden": true, "moves": ["hypervoice", "fireblast", "protect", "agility"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	altariamega: {
		requiredItem: "Altarianite",
		isNonstandard: "Past",
		tier: "UU",
	},
	zangoose: {
		eventPokemon: [
			{"generation": 3, "level": 18, "moves": ["leer", "quickattack", "swordsdance", "furycutter"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["scratch", "leer", "quickattack", "swordsdance"], "pokeball": "pokeball"},
			{"generation": 3, "level": 28, "moves": ["refresh", "brickbreak", "counter", "crushclaw"]},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	seviper: {
		eventPokemon: [
			{"generation": 3, "level": 18, "moves": ["wrap", "lick", "bite", "poisontail"], "pokeball": "pokeball"},
			{"generation": 3, "level": 30, "moves": ["poisontail", "screech", "glare", "crunch"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["wrap", "lick", "bite"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	lunatone: {
		randomBattleMoves: ["earthpower", "icebeam", "nastyplot", "powergem", "psychic", "rockpolish", "stealthrock"],
		eventPokemon: [
			{"generation": 3, "level": 10, "moves": ["tackle", "harden", "confusion"], "pokeball": "pokeball"},
			{"generation": 3, "level": 25, "moves": ["batonpass", "psychic", "raindance", "rocktomb"]},
			{"generation": 7, "level": 30, "moves": ["cosmicpower", "hiddenpower", "moonblast", "powergem"], "pokeball": "cherishball"},
		],
		tier: "PU",
		doublesTier: "DOU",
	},
	solrock: {
		randomBattleMoves: ["earthquake", "explosion", "morningsun", "rockslide", "stealthrock", "swordsdance", "willowisp", "zenheadbutt"],
		eventPokemon: [
			{"generation": 3, "level": 10, "moves": ["tackle", "harden", "confusion"], "pokeball": "pokeball"},
			{"generation": 3, "level": 41, "moves": ["batonpass", "psychic", "sunnyday", "cosmicpower"]},
			{"generation": 7, "level": 30, "moves": ["cosmicpower", "hiddenpower", "solarbeam", "stoneedge"], "pokeball": "cherishball"},
		],
		tier: "PU",
		doublesTier: "DOU",
	},
	barboach: {
		unreleasedHidden: "Past",
		tier: "LC",
	},
	whiscash: {
		randomBattleMoves: ["dragondance", "earthquake", "liquidation", "stoneedge", "zenheadbutt"],
		eventPokemon: [
			{"generation": 4, "level": 51, "gender": "F", "nature": "Gentle", "abilities": ["oblivious"], "moves": ["earthquake", "aquatail", "zenheadbutt", "gigaimpact"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 4, "level": 10},
			{"generation": 7, "level": 10},
		],
		unreleasedHidden: true,
		tier: "PU",
		doublesTier: "DOU",
	},
	corphish: {
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["bubble", "watersport"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	crawdaunt: {
		randomBattleMoves: ["aquajet", "closecombat", "crabhammer", "dragondance", "knockoff", "swordsdance"],
		eventPokemon: [
			{"generation": 3, "level": 100, "moves": ["taunt", "crabhammer", "swordsdance", "guillotine"], "pokeball": "pokeball"},
			{"generation": 3, "level": 50, "moves": ["knockoff", "taunt", "crabhammer", "swordsdance"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 7, "level": 10},
		],
		tier: "UU",
		doublesTier: "DOU",
	},
	crawdauntmega: {
		requiredItem: "Crawdite",
		tier: "OU",
	},
	baltoy: {
		eventPokemon: [
			{"generation": 3, "level": 17, "moves": ["refresh", "rocktomb", "mudslap", "psybeam"]},
		],
		tier: "LC",
	},
	claydol: {
		randomBattleMoves: ["earthquake", "icebeam", "psychic", "rapidspin", "stealthrock"],
		tier: "RU",
		doublesTier: "DOU",
	},
	lileep: {
		eventPokemon: [
			{"generation": 5, "level": 15, "gender": "M", "isHidden": false, "moves": ["recover", "rockslide", "constrict", "acid"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	cradily: {
		isNonstandard: "Past",
		tier: "PU",
	},
	anorith: {
		eventPokemon: [
			{"generation": 5, "level": 15, "gender": "M", "isHidden": false, "moves": ["harden", "mudsport", "watergun", "crosspoison"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	armaldo: {
		isNonstandard: "Past",
		tier: "PU",
	},
	feebas: {
		eventPokemon: [
			{"generation": 4, "level": 5, "gender": "F", "nature": "Calm", "moves": ["splash", "mirrorcoat"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	feebasdelta: {
		tier: "LC",
	},
	milotic: {
		randomBattleMoves: ["dragontail", "icebeam", "recover", "rest", "scald", "sleeptalk"],
		eventPokemon: [
			{"generation": 3, "level": 35, "moves": ["waterpulse", "twister", "recover", "raindance"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "gender": "F", "nature": "Bold", "moves": ["recover", "raindance", "icebeam", "hydropump"], "pokeball": "cherishball"},
			{"generation": 4, "level": 50, "shiny": true, "gender": "M", "nature": "Timid", "moves": ["raindance", "recover", "hydropump", "icywind"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "shiny": 1, "isHidden": false, "moves": ["recover", "hydropump", "icebeam", "mirrorcoat"], "pokeball": "cherishball"},
			{"generation": 5, "level": 58, "gender": "M", "nature": "Lax", "ivs": {"hp": 30, "atk": 30, "def": 30, "spa": 30, "spd": 30, "spe": 30}, "isHidden": false, "moves": ["recover", "surf", "icebeam", "toxic"], "pokeball": "cherishball"},
		],
		tier: "UU",
		doublesTier: "DOU",
	},
	miloticdelta: {
		tier: "UU",
	},
	miloticmega: {
		requiredItem: "Milotite",
		tier: "OU",
	},
	miloticdeltamega: {
		requiredItem: "Delta Milotite",
		tier: "UU",
	},
	castform: {
		isNonstandard: "Past",
		tier: "PU",
	},
	castformsunny: {
		requiredAbility: 'Forecast',
		battleOnly: true,
		isNonstandard: "Past",
	},
	castformrainy: {
		requiredAbility: 'Forecast',
		battleOnly: true,
		isNonstandard: "Past",
	},
	castformsnowy: {
		randomBattleMoves: ["hail", "blizzard", "thunderbolt", "fireblast"],
		requiredAbility: 'Forecast',
		battleOnly: true,
	},
	castformnewmoon: {
		requiredAbility: 'Forecast',
		battleOnly: true,
	},
	castformsandstorm: {
		requiredAbility: 'Forecast',
		battleOnly: true,
		isNonstandard: "Past",
	},
	kecleon: {
		isNonstandard: "Past",
		tier: "PU",
	},
	shuppet: {
		eventPokemon: [
			{"generation": 3, "level": 45, "abilities": ["insomnia"], "moves": ["spite", "willowisp", "feintattack", "shadowball"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	banette: {
		eventPokemon: [
			{"generation": 3, "level": 37, "abilities": ["insomnia"], "moves": ["helpinghand", "feintattack", "shadowball", "curse"]},
			{"generation": 5, "level": 37, "gender": "F", "isHidden": true, "moves": ["feintattack", "hex", "shadowball", "cottonguard"]},
		],
		encounters: [
			{"generation": 5, "level": 32, "isHidden": false},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	banettemega: {
		requiredItem: "Banettite",
		isNonstandard: "Past",
		tier: "RU",
	},
	duskull: {
		eventPokemon: [
			{"generation": 3, "level": 45, "moves": ["pursuit", "curse", "willowisp", "meanlook"], "pokeball": "pokeball"},
			{"generation": 3, "level": 19, "moves": ["helpinghand", "shadowball", "astonish", "confuseray"]},
		],
		tier: "LC",
	},
	dusclops: {
		encounters: [
			{"generation": 4, "level": 16},
			{"generation": 6, "level": 30},
		],
		tier: "NFE",
	},
	dusknoir: {
		randomBattleMoves: ["earthquake", "icepunch", "painsplit", "shadowsneak", "substitute", "willowisp"],
		tier: "PU",
		doublesTier: "DOU",
	},
	tropius: {
		eventPokemon: [
			{"generation": 4, "level": 53, "gender": "F", "nature": "Jolly", "abilities": ["chlorophyll"], "moves": ["airslash", "synthesis", "sunnyday", "solarbeam"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	chingling: {
		isNonstandard: "Past",
		tier: "LC",
	},
	chimecho: {
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["wrap", "growl", "astonish"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	absol: {
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "abilities": ["pressure"], "moves": ["scratch", "leer", "wish"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": 1, "abilities": ["pressure"], "moves": ["scratch", "leer", "spite"], "pokeball": "pokeball"},
			{"generation": 3, "level": 35, "abilities": ["pressure"], "moves": ["razorwind", "bite", "swordsdance", "spite"], "pokeball": "pokeball"},
			{"generation": 3, "level": 70, "abilities": ["pressure"], "moves": ["doubleteam", "slash", "futuresight", "perishsong"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	absolmega: {
		requiredItem: "Absolite",
		isNonstandard: "Past",
		tier: "UU",
	},
	snorunt: {
		eventPokemon: [
			{"generation": 3, "level": 20, "abilities": ["innerfocus"], "moves": ["sing", "waterpulse", "bite", "icywind"]},
		],
		tier: "LC",
	},
	snoruntdelta: {
		tier: "LC",
	},
	glalie: {
		randomBattleMoves: ["earthquake", "freezedry", "protect", "spikes", "taunt"],
		tier: "PU",
		doublesTier: "DOU",
	},
	glaliedelta: {
		tier: "PU",
	},
	glaliemega: {
		requiredItem: "Glalitite",
		isNonstandard: "Past",
		tier: "NU",
	},
	glaliedeltamega: {
		requiredItem: "Delta Glalitite",
		tier: "NU",
	},
	froslass: {
		randomBattleMoves: ["destinybond", "icebeam", "shadowball", "spikes", "taunt", "thunderwave"],
		tier: "RU",
		doublesTier: "DOU",
	},
	froslassdelta: {
		tier: "NU",
	},
	froslassmega: {
		requiredItem: "Froslassite",
		tier: "UU",
	},
	froslassdeltamega: {
		requiredItem: "Delta Froslassite",
		tier: "UU",
	},
	spheal: {
		eventPokemon: [
			{"generation": 3, "level": 17, "abilities": ["thickfat"], "moves": ["charm", "aurorabeam", "watergun", "mudslap"]},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	sealeo: {
		encounters: [
			{"generation": 4, "level": 25, "isHidden": false},
			{"generation": 6, "level": 28, "maxEggMoves": 1},
		],
		isNonstandard: "Past",
		tier: "NFE",
	},
	walrein: {
		eventPokemon: [
			{"generation": 5, "level": 50, "isHidden": false, "abilities": ["thickfat"], "moves": ["icebeam", "brine", "hail", "sheercold"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 5, "level": 30, "isHidden": false},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	clamperl: {
		isNonstandard: "Past",
		tier: "LC",
	},
	clamperldelta: {
		tier: "LC",
	},
	huntail: {
		isNonstandard: "Past",
		tier: "PU",
	},
	huntaildelta: {
		tier: "RU",
	},
	gorebyss: {
		isNonstandard: "Past",
		tier: "PU",
	},
	gorebyssdelta: {
		tier: "NU",
	},
	relicanth: {
		isNonstandard: "Past",
		tier: "PU",
	},
	luvdisc: {
		isNonstandard: "Past",
		tier: "PU",
	},
	bagon: {
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["rage", "bite", "wish"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["rage", "bite", "irondefense"], "pokeball": "pokeball"},
			{"generation": 5, "level": 1, "shiny": true, "isHidden": false, "moves": ["rage"], "pokeball": "pokeball"},
			{"generation": 6, "level": 1, "isHidden": false, "moves": ["rage", "thrash"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	shelgon: {
		encounters: [
			{"generation": 7, "level": 15},
		],
		isNonstandard: "Past",
		tier: "NFE",
	},
	salamence: {
		eventPokemon: [
			{"generation": 3, "level": 50, "moves": ["protect", "dragonbreath", "scaryface", "fly"], "pokeball": "pokeball"},
			{"generation": 3, "level": 50, "moves": ["refresh", "dragonclaw", "dragondance", "aerialace"]},
			{"generation": 4, "level": 50, "gender": "M", "nature": "Naughty", "moves": ["hydropump", "stoneedge", "fireblast", "dragonclaw"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "shiny": 1, "isHidden": false, "moves": ["dragondance", "dragonclaw", "outrage", "aerialace"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 7, "level": 9},
		],
		isNonstandard: "Past",
		tier: "OU",
	},
	salamencemega: {
		requiredItem: "Salamencite",
		isNonstandard: "Past",
		tier: "Uber",
	},
	beldum: {
		eventPokemon: [
			{"generation": 6, "level": 5, "shiny": true, "isHidden": false, "moves": ["holdback", "ironhead", "zenheadbutt", "irondefense"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	beldumdeltas: {
		tier: "LC",
	},
	beldumdeltar: {
		tier: "LC",
	},
	metang: {
		eventPokemon: [
			{"generation": 3, "level": 30, "moves": ["takedown", "confusion", "metalclaw", "refresh"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "NFE",
	},
	metangdeltas: {
		tier: "NFE",
	},
	metangdeltar: {
		tier: "NFE",
	},
	metagross: {
		eventPokemon: [
			{"generation": 4, "level": 62, "nature": "Brave", "moves": ["bulletpunch", "meteormash", "hammerarm", "zenheadbutt"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "shiny": 1, "isHidden": false, "moves": ["meteormash", "earthquake", "bulletpunch", "hammerarm"], "pokeball": "cherishball"},
			{"generation": 5, "level": 100, "isHidden": false, "moves": ["bulletpunch", "zenheadbutt", "hammerarm", "icepunch"], "pokeball": "cherishball"},
			{"generation": 5, "level": 45, "shiny": true, "isHidden": false, "moves": ["meteormash", "zenheadbutt", "earthquake", "protect"], "pokeball": "pokeball"},
			{"generation": 5, "level": 45, "isHidden": true, "moves": ["irondefense", "agility", "hammerarm", "doubleedge"]},
			{"generation": 5, "level": 45, "isHidden": true, "moves": ["psychic", "meteormash", "hammerarm", "doubleedge"]},
			{"generation": 5, "level": 58, "nature": "Serious", "ivs": {"hp": 30, "atk": 30, "def": 30, "spa": 30, "spd": 30, "spe": 30}, "isHidden": false, "moves": ["earthquake", "hyperbeam", "psychic", "meteormash"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "nature": "Jolly", "ivs": {"hp": 31, "atk": 31, "def": 31, "spa": 31, "spd": 31, "spe": 31}, "isHidden": false, "moves": ["ironhead", "icepunch", "bulletpunch", "stompingtantrum"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "RU",
	},
	metagrossdeltas: {
		tier: "UU",
	},
	metagrossdeltar: {
		tier: "RU",
	},
	metagrossmega: {
		requiredItem: "Metagrossite",
		isNonstandard: "Past",
		tier: "Uber",
	},
	metagrossdeltasmega: {
		requiredItem: "Delta Metagrossite Spider",
		tier: "OU",
	},
	metagrossdeltarmega: {
		requiredItem: "Delta Metagrossite Ruin",
		tier: "OU",
	},
	regirock: {
		eventPokemon: [
			{"generation": 3, "level": 40, "shiny": 1, "moves": ["rockthrow", "curse", "superpower", "ancientpower"]},
			{"generation": 3, "level": 40, "moves": ["curse", "superpower", "ancientpower", "hyperbeam"], "pokeball": "pokeball"},
			{"generation": 4, "level": 30, "shiny": 1, "moves": ["stomp", "rockthrow", "curse", "superpower"]},
			{"generation": 5, "level": 65, "shiny": 1, "moves": ["irondefense", "chargebeam", "lockon", "zapcannon"]},
			{"generation": 6, "level": 40, "shiny": 1, "isHidden": false, "moves": ["bulldoze", "curse", "ancientpower", "irondefense"]},
			{"generation": 6, "level": 50, "isHidden": true, "moves": ["explosion", "icepunch", "stoneedge", "hammerarm"], "pokeball": "pokeball"},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["stoneedge", "hammerarm", "lockon", "zapcannon"]},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "PU",
	},
	regirockdelta: {
		tier: "UU",
	},
	regice: {
		eventPokemon: [
			{"generation": 3, "level": 40, "shiny": 1, "moves": ["icywind", "curse", "superpower", "ancientpower"]},
			{"generation": 3, "level": 40, "moves": ["curse", "superpower", "ancientpower", "hyperbeam"], "pokeball": "pokeball"},
			{"generation": 4, "level": 30, "shiny": 1, "moves": ["stomp", "icywind", "curse", "superpower"]},
			{"generation": 5, "level": 65, "shiny": 1, "moves": ["amnesia", "chargebeam", "lockon", "zapcannon"]},
			{"generation": 6, "level": 40, "shiny": 1, "isHidden": false, "moves": ["bulldoze", "curse", "ancientpower", "amnesia"]},
			{"generation": 6, "level": 50, "isHidden": true, "moves": ["thunderbolt", "amnesia", "icebeam", "hail"], "pokeball": "pokeball"},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["icebeam", "hammerarm", "lockon", "zapcannon"]},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "PU",
	},
	regicedelta: {
		tier: "UU",
	},
	registeel: {
		eventPokemon: [
			{"generation": 3, "level": 40, "shiny": 1, "moves": ["metalclaw", "curse", "superpower", "ancientpower"]},
			{"generation": 3, "level": 40, "moves": ["curse", "superpower", "ancientpower", "hyperbeam"], "pokeball": "pokeball"},
			{"generation": 4, "level": 30, "shiny": 1, "moves": ["stomp", "metalclaw", "curse", "superpower"]},
			{"generation": 5, "level": 65, "shiny": 1, "moves": ["amnesia", "chargebeam", "lockon", "zapcannon"]},
			{"generation": 6, "level": 40, "shiny": 1, "isHidden": false, "moves": ["curse", "ancientpower", "irondefense", "amnesia"]},
			{"generation": 6, "level": 50, "isHidden": true, "moves": ["ironhead", "rockslide", "gravity", "irondefense"], "pokeball": "pokeball"},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["flashcannon", "hammerarm", "lockon", "zapcannon"]},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "RU",
	},
	registeeldelta: {
		tier: "RU",
	},
	latias: {
		eventPokemon: [
			{"generation": 3, "level": 40, "shiny": 1, "moves": ["watersport", "refresh", "mistball", "psychic"]},
			{"generation": 3, "level": 50, "shiny": 1, "moves": ["mistball", "psychic", "recover", "charm"]},
			{"generation": 3, "level": 70, "moves": ["mistball", "psychic", "recover", "charm"], "pokeball": "pokeball"},
			{"generation": 4, "level": 35, "shiny": 1, "moves": ["dragonbreath", "watersport", "refresh", "mistball"]},
			{"generation": 4, "level": 40, "shiny": 1, "moves": ["watersport", "refresh", "mistball", "zenheadbutt"]},
			{"generation": 5, "level": 68, "shiny": 1, "moves": ["psychoshift", "charm", "psychic", "healpulse"]},
			{"generation": 6, "level": 30, "shiny": 1, "moves": ["healpulse", "dragonbreath", "mistball", "psychoshift"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["mistball", "dragonpulse", "psychoshift", "wish"]},
			{"generation": 7, "level": 60, "moves": ["mistball", "dragonpulse", "psychoshift", "wish"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "moves": ["mistball", "psychic", "dracometeor", "tailwind"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "UU",
	},
	latiasmega: {
		requiredItem: "Latiasite",
		isNonstandard: "Past",
		tier: "OU",
	},
	latios: {
		eventPokemon: [
			{"generation": 3, "level": 40, "shiny": 1, "moves": ["protect", "refresh", "lusterpurge", "psychic"]},
			{"generation": 3, "level": 50, "shiny": 1, "moves": ["lusterpurge", "psychic", "recover", "dragondance"]},
			{"generation": 3, "level": 70, "moves": ["lusterpurge", "psychic", "recover", "dragondance"], "pokeball": "pokeball"},
			{"generation": 4, "level": 35, "shiny": 1, "moves": ["dragonbreath", "protect", "refresh", "lusterpurge"]},
			{"generation": 4, "level": 40, "shiny": 1, "moves": ["protect", "refresh", "lusterpurge", "zenheadbutt"]},
			{"generation": 5, "level": 68, "shiny": 1, "moves": ["psychoshift", "dragondance", "psychic", "healpulse"]},
			{"generation": 6, "level": 30, "shiny": 1, "moves": ["healpulse", "dragonbreath", "lusterpurge", "psychoshift"]},
			{"generation": 6, "level": 50, "nature": "Modest", "moves": ["dragonpulse", "lusterpurge", "psychic", "healpulse"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["lusterpurge", "dragonpulse", "psychoshift", "dragonbreath"]},
			{"generation": 7, "level": 60, "moves": ["lusterpurge", "dragonpulse", "psychoshift", "dragonbreath"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "moves": ["lusterpurge", "psychic", "dracometeor", "tailwind"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "OU",
	},
	latiosmega: {
		requiredItem: "Latiosite",
		isNonstandard: "Past",
		tier: "OU",
	},
	kyogre: {
		eventPokemon: [
			{"generation": 3, "level": 45, "shiny": 1, "moves": ["bodyslam", "calmmind", "icebeam", "hydropump"]},
			{"generation": 3, "level": 70, "shiny": 1, "moves": ["hydropump", "rest", "sheercold", "doubleedge"]},
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["aquaring", "icebeam", "ancientpower", "waterspout"]},
			{"generation": 5, "level": 80, "shiny": 1, "moves": ["icebeam", "ancientpower", "waterspout", "thunder"], "pokeball": "cherishball"},
			{"generation": 5, "level": 100, "moves": ["waterspout", "thunder", "icebeam", "sheercold"], "pokeball": "cherishball"},
			{"generation": 6, "level": 45, "moves": ["bodyslam", "aquaring", "icebeam", "originpulse"]},
			{"generation": 6, "level": 100, "nature": "Timid", "moves": ["waterspout", "thunder", "sheercold", "icebeam"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["icebeam", "originpulse", "calmmind", "muddywater"]},
			{"generation": 7, "level": 60, "shiny": true, "moves": ["icebeam", "originpulse", "calmmind", "muddywater"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "moves": ["icebeam", "originpulse", "calmmind", "muddywater"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "moves": ["originpulse", "icebeam", "waterspout", "calmmind"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Uber",
	},
	kyogreprimal: {
		requiredItem: "Blue Orb",
		isNonstandard: "Past",
		tier: "Uber",
	},
	groudon: {
		eventPokemon: [
			{"generation": 3, "level": 45, "shiny": 1, "moves": ["slash", "bulkup", "earthquake", "fireblast"]},
			{"generation": 3, "level": 70, "shiny": 1, "moves": ["fireblast", "rest", "fissure", "solarbeam"]},
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["rest", "earthquake", "ancientpower", "eruption"]},
			{"generation": 5, "level": 80, "shiny": 1, "moves": ["earthquake", "ancientpower", "eruption", "solarbeam"], "pokeball": "cherishball"},
			{"generation": 5, "level": 100, "moves": ["eruption", "hammerarm", "earthpower", "solarbeam"], "pokeball": "cherishball"},
			{"generation": 6, "level": 45, "moves": ["lavaplume", "rest", "earthquake", "precipiceblades"]},
			{"generation": 6, "level": 100, "nature": "Adamant", "moves": ["firepunch", "solarbeam", "hammerarm", "rockslide"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["earthquake", "precipiceblades", "bulkup", "solarbeam"]},
			{"generation": 7, "level": 60, "shiny": true, "moves": ["earthquake", "precipiceblades", "bulkup", "solarbeam"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "moves": ["earthquake", "precipiceblades", "bulkup", "solarbeam"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "moves": ["precipiceblades", "earthpower", "firepunch", "swordsdance"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Uber",
	},
	groudonprimal: {
		requiredItem: "Red Orb",
		isNonstandard: "Past",
		tier: "Uber",
	},
	rayquaza: {
		eventPokemon: [
			{"generation": 3, "level": 70, "shiny": 1, "moves": ["fly", "rest", "extremespeed", "outrage"]},
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["rest", "airslash", "ancientpower", "outrage"]},
			{"generation": 5, "level": 70, "shiny": true, "moves": ["dragonpulse", "ancientpower", "outrage", "dragondance"], "pokeball": "cherishball"},
			{"generation": 5, "level": 100, "moves": ["extremespeed", "hyperbeam", "dragonpulse", "vcreate"], "pokeball": "cherishball"},
			{"generation": 6, "level": 70, "moves": ["extremespeed", "dragonpulse", "dragondance", "dragonascent"]},
			{"generation": 6, "level": 70, "shiny": true, "moves": ["dragonpulse", "thunder", "twister", "extremespeed"], "pokeball": "cherishball"},
			{"generation": 6, "level": 70, "shiny": true, "moves": ["dragonascent", "dragonclaw", "extremespeed", "dragondance"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "shiny": true, "moves": ["dragonascent", "dracometeor", "fly", "celebrate"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["rest", "extremespeed", "dragonpulse", "dragondance"]},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Uber",
	},
	rayquazamega: {
		requiredMove: "Dragon Ascent",
		isNonstandard: "Past",
		tier: "AG",
	},
	jirachi: {
		randomBattleMoves: ["bodyslam", "firepunch", "ironhead", "stealthrock", "uturn", "wish"],
		eventPokemon: [
			{"generation": 3, "level": 5, "moves": ["wish", "confusion", "rest"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": true, "nature": "Bashful", "ivs": {"hp": 24, "atk": 3, "def": 30, "spa": 12, "spd": 16, "spe": 11}, "moves": ["wish", "confusion", "rest"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": true, "nature": "Careful", "ivs": {"hp": 10, "atk": 0, "def": 10, "spa": 10, "spd": 26, "spe": 12}, "moves": ["wish", "confusion", "rest"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": true, "nature": "Docile", "ivs": {"hp": 19, "atk": 7, "def": 10, "spa": 19, "spd": 10, "spe": 16}, "moves": ["wish", "confusion", "rest"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": true, "nature": "Hasty", "ivs": {"hp": 3, "atk": 12, "def": 12, "spa": 7, "spd": 11, "spe": 9}, "moves": ["wish", "confusion", "rest"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": true, "nature": "Jolly", "ivs": {"hp": 11, "atk": 8, "def": 6, "spa": 14, "spd": 5, "spe": 20}, "moves": ["wish", "confusion", "rest"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": true, "nature": "Lonely", "ivs": {"hp": 31, "atk": 23, "def": 26, "spa": 29, "spd": 18, "spe": 5}, "moves": ["wish", "confusion", "rest"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": true, "nature": "Naughty", "ivs": {"hp": 21, "atk": 31, "def": 31, "spa": 18, "spd": 24, "spe": 19}, "moves": ["wish", "confusion", "rest"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": true, "nature": "Serious", "ivs": {"hp": 29, "atk": 10, "def": 31, "spa": 25, "spd": 23, "spe": 21}, "moves": ["wish", "confusion", "rest"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": true, "nature": "Timid", "ivs": {"hp": 15, "atk": 28, "def": 29, "spa": 3, "spd": 0, "spe": 7}, "moves": ["wish", "confusion", "rest"], "pokeball": "pokeball"},
			{"generation": 3, "level": 30, "moves": ["helpinghand", "psychic", "refresh", "rest"], "pokeball": "pokeball"},
			{"generation": 4, "level": 5, "moves": ["wish", "confusion", "rest"], "pokeball": "cherishball"},
			{"generation": 4, "level": 5, "moves": ["wish", "confusion", "rest", "dracometeor"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "moves": ["healingwish", "psychic", "swift", "meteormash"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "moves": ["dracometeor", "meteormash", "wish", "followme"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "moves": ["wish", "healingwish", "cosmicpower", "meteormash"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "moves": ["wish", "healingwish", "swift", "return"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "shiny": true, "moves": ["wish", "swift", "healingwish", "moonblast"], "pokeball": "cherishball"},
			{"generation": 6, "level": 15, "shiny": true, "moves": ["wish", "confusion", "helpinghand", "return"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "moves": ["heartstamp", "playrough", "wish", "cosmicpower"], "pokeball": "cherishball"},
			{"generation": 6, "level": 25, "shiny": true, "moves": ["wish", "confusion", "swift", "happyhour"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "moves": ["wish", "confusion", "rest"], "pokeball": "cherishball"},
			{"generation": 7, "level": 15, "moves": ["swift", "wish", "healingwish", "rest"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "OU",
	},
	jirachimega: {
		requiredItem: "jirachite",
		tier: "Uber",
	},
	deoxys: {
		eventPokemon: [
			{"generation": 3, "level": 30, "shiny": 1, "moves": ["taunt", "pursuit", "psychic", "superpower"]},
			{"generation": 3, "level": 30, "shiny": 1, "moves": ["knockoff", "spikes", "psychic", "snatch"]},
			{"generation": 3, "level": 30, "shiny": 1, "moves": ["knockoff", "pursuit", "psychic", "swift"]},
			{"generation": 3, "level": 70, "moves": ["cosmicpower", "recover", "psychoboost", "hyperbeam"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "moves": ["psychoboost", "zapcannon", "irondefense", "extremespeed"], "pokeball": "cherishball"},
			{"generation": 4, "level": 50, "moves": ["psychoboost", "swift", "doubleteam", "extremespeed"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "moves": ["psychoboost", "detect", "counter", "mirrorcoat"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "moves": ["psychoboost", "meteormash", "superpower", "hyperbeam"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "moves": ["psychoboost", "leer", "wrap", "nightshade"], "pokeball": "pokeball"},
			{"generation": 5, "level": 100, "moves": ["nastyplot", "darkpulse", "recover", "psychoboost"], "pokeball": "duskball"},
			{"generation": 6, "level": 80, "moves": ["cosmicpower", "recover", "psychoboost", "hyperbeam"]},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Uber",
	},
	deoxysattack: {
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Uber",
	},
	deoxysdefense: {
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Uber",
	},
	deoxysspeed: {
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Uber",
	},
	turtwig: {
		eventPokemon: [
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["tackle", "withdraw", "absorb"]},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["tackle", "withdraw", "absorb", "stockpile"]},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	turtwigdelta: {
		tier: "LC",
	},
	grotle: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	grotledelta: {
		tier: "NFE",
	},
	torterra: {
		eventPokemon: [
			{"generation": 5, "level": 100, "gender": "M", "isHidden": false, "moves": ["woodhammer", "earthquake", "outrage", "stoneedge"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	torterradelta: {
		tier: "RU",
	},
	chimchar: {
		eventPokemon: [
			{"generation": 4, "level": 40, "gender": "M", "nature": "Mild", "moves": ["flamethrower", "thunderpunch", "grassknot", "helpinghand"], "pokeball": "cherishball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["scratch", "leer", "ember", "taunt"]},
			{"generation": 4, "level": 40, "gender": "M", "nature": "Hardy", "moves": ["flamethrower", "thunderpunch", "grassknot", "helpinghand"], "pokeball": "cherishball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["leer", "ember", "taunt", "fakeout"]},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	monferno: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	infernape: {
		eventPokemon: [
			{"generation": 5, "level": 100, "gender": "M", "isHidden": false, "moves": ["fireblast", "closecombat", "uturn", "grassknot"], "pokeball": "cherishball"},
			{"generation": 6, "level": 88, "isHidden": true, "moves": ["fireblast", "closecombat", "firepunch", "focuspunch"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "UU",
	},
	piplup: {
		eventPokemon: [
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["pound", "growl", "bubble"]},
			{"generation": 5, "level": 15, "shiny": 1, "isHidden": false, "moves": ["hydropump", "featherdance", "watersport", "peck"], "pokeball": "cherishball"},
			{"generation": 5, "level": 15, "gender": "M", "isHidden": false, "moves": ["sing", "round", "featherdance", "peck"], "pokeball": "cherishball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["pound", "growl", "bubble", "featherdance"]},
			{"generation": 6, "level": 7, "isHidden": false, "moves": ["pound", "growl", "return"], "pokeball": "cherishball"},
			{"generation": 7, "level": 30, "gender": "M", "nature": "Hardy", "isHidden": false, "moves": ["hydropump", "bubblebeam", "whirlpool", "drillpeck"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	prinplup: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	empoleon: {
		eventPokemon: [
			{"generation": 5, "level": 100, "gender": "M", "isHidden": false, "moves": ["hydropump", "icebeam", "aquajet", "grassknot"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "UU",
	},
	starly: {
		eventPokemon: [
			{"generation": 4, "level": 1, "gender": "M", "nature": "Mild", "moves": ["tackle", "growl"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	staravia: {
		encounters: [
			{"generation": 4, "level": 4},
		],
		isNonstandard: "Past",
		tier: "NFE",
	},
	staraptor: {
		isNonstandard: "Past",
		tier: "OU",
	},
	bidoof: {
		eventPokemon: [
			{"generation": 4, "level": 1, "gender": "M", "nature": "Lonely", "abilities": ["simple"], "moves": ["tackle"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	bibarel: {
		encounters: [
			{"generation": 4, "level": 4},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	kricketot: {
		isNonstandard: "Past",
		tier: "LC",
	},
	kricketune: {
		isNonstandard: "Past",
		tier: "PU",
	},
	shinx: {
		isNonstandard: "Past",
		tier: "LC",
	},
	shinxdelta: {
		tier: "LC",
	},
	luxio: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	luxiodelta: {
		tier: "NFE",
	},
	luxray: {
		isNonstandard: "Past",
		tier: "PU",
	},
	luxraydelta: {
		tier: "NU",
	},
	cranidos: {
		eventPokemon: [
			{"generation": 5, "level": 15, "gender": "M", "isHidden": false, "moves": ["pursuit", "takedown", "crunch", "headbutt"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	rampardos: {
		isNonstandard: "Past",
		tier: "PU",
	},
	shieldon: {
		eventPokemon: [
			{"generation": 5, "level": 15, "gender": "M", "isHidden": false, "moves": ["metalsound", "takedown", "bodyslam", "protect"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	bastiodon: {
		isNonstandard: "Past",
		tier: "PU",
	},
	burmy: {
		isNonstandard: "Past",
		tier: "LC",
	},
	wormadam: {
		isNonstandard: "Past",
		tier: "PU",
	},
	wormadamsandy: {
		isNonstandard: "Past",
		tier: "PU",
	},
	wormadamtrash: {
		isNonstandard: "Past",
		tier: "PU",
	},
	mothim: {
		isNonstandard: "Past",
		tier: "PU",
	},
	combee: {
		tier: "LC",
	},
	combeedelta: {
		tier: "LC",
	},
	vespiquen: {
		randomBattleMoves: ["airslash", "bugbuzz", "powergem", "sludgebomb", "uturn"],
		tier: "PU",
		doublesTier: "DOU",
	},
	vespiquendelta: {
		tier: "UU",
	},
	pachirisu: {
		eventPokemon: [
			{"generation": 6, "level": 50, "nature": "Impish", "ivs": {"hp": 31, "atk": 31, "def": 31, "spa": 14, "spd": 31, "spe": 31}, "isHidden": true, "moves": ["nuzzle", "superfang", "followme", "protect"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	buizel: {
		isNonstandard: "Past",
		tier: "LC",
	},
	floatzel: {
		encounters: [
			{"generation": 4, "level": 22},
			{"generation": 5, "level": 10, "isHidden": false},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	cherubi: {
		tier: "LC Uber",
	},
	cherrim: {
		randomBattleMoves: ["dazzlinggleam", "energyball", "healingwish", "leechseed", "substitute"],
		tier: "PU",
		doublesTier: "DOU",
	},
	cherrimsunshine: {
		randomBattleMoves: ["playrough", "solarblade", "sunnyday", "weatherball"],
		requiredAbility: 'Flower Gift',
		battleOnly: true,
	},
	shellos: {
		tier: "LC",
	},
	gastrodon: {
		randomBattleMoves: ["clearsmog", "earthquake", "icebeam", "recover", "scald"],
		encounters: [
			{"generation": 4, "level": 20},
		],
		tier: "PU",
		doublesTier: "DOU",
	},
	drifloon: {
		unreleasedHidden: true,
		tier: "LC Uber",
	},
	drifloondelta: {
		tier: "LC",
	},
	drifblim: {
		randomBattleMoves: ["acrobatics", "destinybond", "shadowball", "strengthsap", "substitute"],
		encounters: [
			{"generation": 7, "level": 11, "isHidden": false, "pokeball": "pokeball"},
		],
		unreleasedHidden: true,
		tier: "PU",
		doublesTier: "DOU",
	},
	drifblimdelta: {
		tier: "PU",
	},
	buneary: {
		isNonstandard: "Past",
		tier: "LC",
	},
	bunearydelta: {
		tier: "LC",
	},
	lopunny: {
		isNonstandard: "Past",
		tier: "PU",
	},
	lopunnydelta: {
		tier: "NU",
	},
	lopunnymega: {
		requiredItem: "Lopunnite",
		isNonstandard: "Past",
		tier: "OU",
	},
	lopunnydeltamega: {
		requiredItem: "Delta Lopunnite",
		tier: "UU",
	},
	glameow: {
		isNonstandard: "Past",
		tier: "LC",
	},
	purugly: {
		encounters: [
			{"generation": 6, "level": 32, "maxEggMoves": 1},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	stunky: {
		tier: "LC",
	},
	skuntank: {
		randomBattleMoves: ["crunch", "fireblast", "poisonjab", "suckerpunch", "taunt", "toxic"],
		encounters: [
			{"generation": 4, "level": 29},
		],
		tier: "PU",
		doublesTier: "DOU",
	},
	bronzor: {
		unreleasedHidden: "Past",
		tier: "LC",
	},
	bronzong: {
		randomBattleMoves: ["earthquake", "gyroball", "lightscreen", "psychic", "reflect", "stealthrock"],
		encounters: [
			{"generation": 6, "level": 30},
		],
		unreleasedHidden: true,
		tier: "RU",
		doublesTier: "DOU",
	},
	chatot: {
		eventPokemon: [
			{"generation": 4, "level": 25, "gender": "M", "nature": "Jolly", "abilities": ["keeneye"], "moves": ["mirrormove", "furyattack", "chatter", "taunt"]},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	chatotmega: {
		requiredItem: "Chatotite",
		tier: "RU",
	},
	spiritomb: {
		eventPokemon: [
			{"generation": 5, "level": 61, "gender": "F", "nature": "Quiet", "ivs": {"hp": 30, "atk": 30, "def": 30, "spa": 30, "spd": 30, "spe": 30}, "isHidden": false, "moves": ["darkpulse", "psychic", "silverwind", "embargo"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "RU",
	},
	spiritombmega: {
		requiredItem: "Spiritombite",
		tier: "UU",
	},
	gible: {
		isNonstandard: "Past",
		tier: "LC",
	},
	gabite: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	garchomp: {
		eventPokemon: [
			{"generation": 5, "level": 100, "gender": "M", "isHidden": false, "moves": ["outrage", "earthquake", "swordsdance", "stoneedge"], "pokeball": "cherishball"},
			{"generation": 5, "level": 48, "gender": "M", "isHidden": true, "moves": ["dragonclaw", "dig", "crunch", "outrage"]},
			{"generation": 6, "level": 48, "gender": "M", "isHidden": false, "moves": ["dracometeor", "dragonclaw", "dig", "crunch"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "gender": "M", "isHidden": false, "moves": ["slash", "dragonclaw", "dig", "crunch"], "pokeball": "cherishball"},
			{"generation": 6, "level": 66, "gender": "F", "perfectIVs": 3, "isHidden": false, "moves": ["dragonrush", "earthquake", "brickbreak", "gigaimpact"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "OU",
	},
	garchompmega: {
		requiredItem: "Garchompite",
		isNonstandard: "Past",
		tier: "(OU)",
	},
	riolu: {
		eventPokemon: [
			{"generation": 4, "level": 30, "gender": "M", "nature": "Serious", "abilities": ["steadfast"], "moves": ["aurasphere", "shadowclaw", "bulletpunch", "drainpunch"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	rioludelta: {
		tier: "LC",
	},
	lucario: {
		randomBattleMoves: ["closecombat", "extremespeed", "icepunch", "meteormash", "swordsdance"],
		eventPokemon: [
			{"generation": 4, "level": 50, "gender": "M", "nature": "Modest", "abilities": ["steadfast"], "moves": ["aurasphere", "darkpulse", "dragonpulse", "waterpulse"], "pokeball": "cherishball"},
			{"generation": 4, "level": 30, "gender": "M", "nature": "Adamant", "abilities": ["innerfocus"], "moves": ["forcepalm", "bonerush", "sunnyday", "blazekick"], "pokeball": "cherishball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["detect", "metalclaw", "counter", "bulletpunch"]},
			{"generation": 5, "level": 50, "gender": "M", "nature": "Naughty", "ivs": {"atk": 31}, "isHidden": true, "moves": ["bulletpunch", "closecombat", "stoneedge", "shadowclaw"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "nature": "Jolly", "isHidden": false, "abilities": ["innerfocus"], "moves": ["closecombat", "aurasphere", "flashcannon", "quickattack"], "pokeball": "cherishball"},
			{"generation": 7, "level": 40, "gender": "M", "nature": "Serious", "isHidden": false, "abilities": ["steadfast"], "moves": ["aurasphere", "highjumpkick", "dragonpulse", "extremespeed"], "pokeball": "pokeball"},
		],
		tier: "UU",
		doublesTier: "DOU",
	},
	lucariodelta: {
		tier: "UU",
	},
	lucariomega: {
		requiredItem: "Lucarionite",
		isNonstandard: "Past",
		tier: "Uber",
	},
	lucariodeltamega: {
		requiredItem: "Delta Lucarionite",
		tier: "OU",
	},
	hippopotas: {
		tier: "LC",
	},
	hippowdon: {
		randomBattleMoves: ["earthquake", "slackoff", "stealthrock", "stoneedge", "whirlwind", "yawn"],
		tier: "UU",
		doublesTier: "DOU",
	},
	skorupi: {
		unreleasedHidden: "Past",
		tier: "LC",
	},
	drapion: {
		randomBattleMoves: ["earthquake", "knockoff", "poisonjab", "swordsdance", "taunt", "toxicspikes"],
		encounters: [
			{"generation": 4, "level": 22, "pokeball": "safariball"},
			{"generation": 6, "level": 30},
		],
		unreleasedHidden: true,
		tier: "RU",
		doublesTier: "DOU",
	},
	croagunk: {
		eventPokemon: [
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["astonish", "mudslap", "poisonsting", "taunt"]},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["mudslap", "poisonsting", "taunt", "poisonjab"]},
		],
		unreleasedHidden: "Past",
		tier: "LC",
	},
	croagunkdelta: {
		tier: "LC",
	},
	toxicroak: {
		randomBattleMoves: ["drainpunch", "gunkshot", "icepunch", "substitute", "suckerpunch", "swordsdance"],
		encounters: [
			{"generation": 4, "level": 22, "pokeball": "safariball"},
			{"generation": 6, "level": 30},
		],
		unreleasedHidden: true,
		tier: "RU",
		doublesTier: "DOU",
	},
	toxicroakdelta: {
		tier: "RU",
	},
	carnivine: {
		isNonstandard: "Past",
		tier: "PU",
	},
	finneon: {
		isNonstandard: "Past",
		tier: "LC",
	},
	lumineon: {
		encounters: [
			{"generation": 4, "level": 20},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	snover: {
		unreleasedHidden: "Past",
		tier: "LC",
	},
	abomasnow: {
		randomBattleMoves: ["auroraveil", "blizzard", "earthquake", "iceshard", "woodhammer"],
		encounters: [
			{"generation": 4, "level": 38},
		],
		unreleasedHidden: true,
		tier: "PU",
		doublesTier: "DOU",
	},
	abomasnowmega: {
		requiredItem: "Abomasite",
		isNonstandard: "Past",
		tier: "NU",
	},
	rotom: {
		randomBattleMoves: ["nastyplot", "shadowball", "thunderbolt", "voltswitch", "willowisp"],
		eventPokemon: [
			{"generation": 5, "level": 10, "nature": "Naughty", "moves": ["uproar", "astonish", "trick", "thundershock"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "nature": "Quirky", "moves": ["shockwave", "astonish", "trick", "thunderwave"], "pokeball": "cherishball"},
			{"generation": 7, "level": 10, "moves": ["uproar", "confide", "disarmingvoice"], "pokeball": "cherishball"},
		],
		tier: "NU",
		doublesTier: "DOU",
	},
	rotomheat: {
		randomBattleMoves: ["overheat", "thunderbolt", "trick", "voltswitch", "willowisp"],
		tier: "UU",
		doublesTier: "DOU",
	},
	rotomwash: {
		randomBattleMoves: ["hydropump", "thunderbolt", "trick", "voltswitch", "willowisp"],
		tier: "OU",
		doublesTier: "DOU",
	},
	rotomfrost: {
		randomBattleMoves: ["blizzard", "thunderbolt", "trick", "voltswitch", "willowisp"],
		tier: "PU",
		doublesTier: "DOU",
	},
	rotomfan: {
		randomBattleMoves: ["airslash", "thunderbolt", "trick", "voltswitch", "willowisp"],
		tier: "PU",
		doublesTier: "DOU",
	},
	rotommow: {
		randomBattleMoves: ["leafstorm", "thunderbolt", "trick", "voltswitch", "willowisp"],
		tier: "RU",
		doublesTier: "DOU",
	},
	uxie: {
		eventPokemon: [
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["confusion", "yawn", "futuresight", "amnesia"]},
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["swift", "yawn", "futuresight", "amnesia"]},
			{"generation": 5, "level": 65, "shiny": 1, "moves": ["futuresight", "amnesia", "extrasensory", "flail"]},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["yawn", "futuresight", "amnesia", "extrasensory"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["extrasensory", "yawn", "amnesia", "swift"]},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "RU",
	},
	mesprit: {
		eventPokemon: [
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["confusion", "luckychant", "futuresight", "charm"]},
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["swift", "luckychant", "futuresight", "charm"]},
			{"generation": 5, "level": 50, "shiny": 1, "moves": ["futuresight", "charm", "extrasensory", "copycat"]},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["luckychant", "futuresight", "charm", "extrasensory"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["extrasensory", "charm", "futuresight", "swift"]},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "NU",
	},
	azelf: {
		eventPokemon: [
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["confusion", "uproar", "futuresight", "nastyplot"]},
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["swift", "uproar", "futuresight", "nastyplot"]},
			{"generation": 5, "level": 50, "shiny": 1, "moves": ["futuresight", "nastyplot", "extrasensory", "lastresort"]},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["uproar", "futuresight", "nastyplot", "extrasensory"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["extrasensory", "nastyplot", "uproar", "swift"]},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "UU",
	},
	dialga: {
		eventPokemon: [
			{"generation": 4, "level": 47, "shiny": 1, "moves": ["metalclaw", "ancientpower", "dragonclaw", "roaroftime"]},
			{"generation": 4, "level": 70, "shiny": 1, "moves": ["roaroftime", "healblock", "earthpower", "slash"]},
			{"generation": 4, "level": 1, "shiny": 1, "moves": ["dragonbreath", "scaryface"]},
			{"generation": 5, "level": 5, "isHidden": true, "moves": ["dragonbreath", "scaryface"], "pokeball": "dreamball"},
			{"generation": 5, "level": 100, "shiny": true, "isHidden": false, "moves": ["dragonpulse", "dracometeor", "aurasphere", "roaroftime"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "shiny": 1, "isHidden": false, "moves": ["aurasphere", "irontail", "roaroftime", "flashcannon"]},
			{"generation": 6, "level": 100, "nature": "Modest", "isHidden": true, "moves": ["metalburst", "overheat", "roaroftime", "flashcannon"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["aurasphere", "irontail", "roaroftime", "flashcannon"]},
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["aurasphere", "irontail", "roaroftime", "flashcannon"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "isHidden": false, "moves": ["roaroftime", "aurasphere", "dracometeor", "flashcannon"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "isHidden": false, "moves": ["flashcannon", "dracometeor", "roaroftime", "aurasphere"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Uber",
	},
	palkia: {
		eventPokemon: [
			{"generation": 4, "level": 47, "shiny": 1, "moves": ["waterpulse", "ancientpower", "dragonclaw", "spacialrend"]},
			{"generation": 4, "level": 70, "shiny": 1, "moves": ["spacialrend", "healblock", "earthpower", "slash"]},
			{"generation": 4, "level": 1, "shiny": 1, "moves": ["dragonbreath", "scaryface"]},
			{"generation": 5, "level": 5, "isHidden": true, "moves": ["dragonbreath", "scaryface"], "pokeball": "dreamball"},
			{"generation": 5, "level": 100, "shiny": true, "isHidden": false, "moves": ["hydropump", "dracometeor", "spacialrend", "aurasphere"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "shiny": 1, "isHidden": false, "moves": ["earthpower", "aurasphere", "spacialrend", "hydropump"]},
			{"generation": 6, "level": 100, "nature": "Timid", "isHidden": true, "moves": ["earthpower", "aurasphere", "spacialrend", "hydropump"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["aurasphere", "aquatail", "spacialrend", "hydropump"]},
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["aurasphere", "aquatail", "spacialrend", "hydropump"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "isHidden": false, "moves": ["spacialrend", "aurasphere", "dracometeor", "hydropump"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "isHidden": false, "moves": ["hydropump", "dracometeor", "spacialrend", "aurasphere"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Uber",
	},
	heatran: {
		eventPokemon: [
			{"generation": 4, "level": 70, "shiny": 1, "moves": ["scaryface", "lavaplume", "firespin", "ironhead"]},
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["metalsound", "crunch", "scaryface", "lavaplume"]},
			{"generation": 4, "level": 50, "nature": "Quiet", "moves": ["eruption", "magmastorm", "earthpower", "ancientpower"], "pokeball": "pokeball"},
			{"generation": 5, "level": 68, "shiny": 1, "isHidden": false, "moves": ["scaryface", "lavaplume", "firespin", "ironhead"]},
			{"generation": 6, "level": 50, "shiny": 1, "isHidden": false, "moves": ["metalsound", "crunch", "scaryface", "lavaplume"]},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["crunch", "scaryface", "lavaplume", "firespin"]},
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["crunch", "scaryface", "lavaplume", "firespin"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "isHidden": false, "moves": ["magmastorm", "heatwave", "earthpower", "flashcannon"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "OU",
	},
	regigigas: {
		eventPokemon: [
			{"generation": 4, "level": 70, "shiny": 1, "moves": ["confuseray", "stomp", "superpower", "zenheadbutt"]},
			{"generation": 4, "level": 1, "shiny": 1, "moves": ["dizzypunch", "knockoff", "foresight", "confuseray"]},
			{"generation": 4, "level": 100, "moves": ["ironhead", "rockslide", "icywind", "crushgrip"], "pokeball": "cherishball"},
			{"generation": 5, "level": 68, "shiny": 1, "moves": ["revenge", "wideguard", "zenheadbutt", "payback"]},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["foresight", "revenge", "wideguard", "zenheadbutt"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["zenheadbutt", "revenge", "dizzypunch", "confuseray"]},
			{"generation": 7, "level": 60, "moves": ["zenheadbutt", "revenge", "dizzypunch", "confuseray"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "moves": ["crushgrip", "drainpunch", "zenheadbutt", "heavyslam"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "PU",
	},
	regigigasprimal: {
		requiredItem: "Crystal Piece Regigigas",
		tier: "Uber",
	},
	giratina: {
		eventPokemon: [
			{"generation": 4, "level": 70, "shiny": 1, "moves": ["shadowforce", "healblock", "earthpower", "slash"]},
			{"generation": 4, "level": 47, "shiny": 1, "moves": ["ominouswind", "ancientpower", "dragonclaw", "shadowforce"]},
			{"generation": 4, "level": 1, "shiny": 1, "moves": ["dragonbreath", "scaryface"]},
			{"generation": 5, "level": 5, "isHidden": true, "moves": ["dragonbreath", "scaryface"], "pokeball": "dreamball"},
			{"generation": 5, "level": 100, "shiny": true, "isHidden": false, "moves": ["dragonpulse", "dragonclaw", "aurasphere", "shadowforce"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "shiny": 1, "isHidden": false, "moves": ["aurasphere", "shadowclaw", "shadowforce", "hex"]},
			{"generation": 6, "level": 100, "nature": "Brave", "isHidden": true, "moves": ["aurasphere", "dracometeor", "shadowforce", "ironhead"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["shadowforce", "aurasphere", "earthpower", "dragonclaw"]},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Uber",
	},
	giratinaorigin: {
		eventOnly: true,
		requiredItem: "Griseous Orb",
		isNonstandard: "Past",
		tier: "Uber",
	},
	giratinaprimal: {
		requiredItem: "Crystal Piece Giratina",
		tier: "Uber",
	},
	cresselia: {
		eventPokemon: [
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["mist", "aurorabeam", "futuresight", "slash"]},
			{"generation": 5, "level": 68, "shiny": 1, "moves": ["futuresight", "slash", "moonlight", "psychocut"]},
			{"generation": 5, "level": 68, "nature": "Modest", "moves": ["icebeam", "psyshock", "energyball", "hiddenpower"]},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["mist", "aurorabeam", "futuresight", "slash"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["aurorabeam", "futuresight", "slash", "moonlight"]},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "RU",
	},
	phione: {
		eventPokemon: [
			{"generation": 4, "level": 50, "moves": ["grassknot", "raindance", "rest", "surf"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	manaphy: {
		eventPokemon: [
			{"generation": 4, "level": 5, "moves": ["tailglow", "bubble", "watersport"]},
			{"generation": 4, "level": 1, "shiny": 1, "moves": ["tailglow", "bubble", "watersport"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "moves": ["heartswap", "waterpulse", "whirlpool", "acidarmor"], "pokeball": "cherishball"},
			{"generation": 4, "level": 50, "nature": "Impish", "moves": ["aquaring", "waterpulse", "watersport", "heartswap"], "pokeball": "cherishball"},
			{"generation": 6, "level": 1, "moves": ["tailglow", "bubble", "watersport", "heartswap"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "moves": ["tailglow", "bubble", "watersport"], "pokeball": "cherishball"},
			{"generation": 7, "level": 15, "moves": ["tailglow", "waterpulse", "aquaring", "heartswap"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "OU",
	},
	darkrai: {
		eventPokemon: [
			{"generation": 4, "level": 40, "shiny": 1, "moves": ["quickattack", "hypnosis", "pursuit", "nightmare"]},
			{"generation": 4, "level": 50, "moves": ["roaroftime", "spacialrend", "nightmare", "hypnosis"], "pokeball": "cherishball"},
			{"generation": 4, "level": 50, "moves": ["darkvoid", "darkpulse", "shadowball", "doubleteam"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["hypnosis", "feintattack", "nightmare", "doubleteam"]},
			{"generation": 5, "level": 50, "moves": ["darkvoid", "ominouswind", "feintattack", "nightmare"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "moves": ["darkvoid", "darkpulse", "phantomforce", "dreameater"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "moves": ["darkvoid", "ominouswind", "nightmare", "feintattack"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "moves": ["darkvoid", "feintattack", "nightmare", "ominouswind"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Uber",
	},
	shaymin: {
		eventPokemon: [
			{"generation": 4, "level": 50, "moves": ["seedflare", "aromatherapy", "substitute", "energyball"], "pokeball": "cherishball"},
			{"generation": 4, "level": 30, "shiny": 1, "moves": ["growth", "magicalleaf", "leechseed", "synthesis"], "pokeball": "pokeball"},
			{"generation": 5, "level": 50, "moves": ["seedflare", "leechseed", "synthesis", "sweetscent"], "pokeball": "cherishball"},
			{"generation": 6, "level": 15, "moves": ["growth", "magicalleaf", "seedflare", "airslash"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "moves": ["seedflare", "aromatherapy", "substitute", "energyball"], "pokeball": "cherishball"},
			{"generation": 7, "level": 20, "moves": ["return", "growth", "seedflare", "celebrate"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "RU",
	},
	shayminsky: {
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Uber",
	},
	arceus: {
		eventPokemon: [
			{"generation": 4, "level": 100, "moves": ["judgment", "roaroftime", "spacialrend", "shadowforce"], "pokeball": "cherishball"},
			{"generation": 5, "level": 100, "moves": ["recover", "hyperbeam", "perishsong", "judgment"]},
			{"generation": 6, "level": 100, "shiny": 1, "moves": ["judgment", "blastburn", "hydrocannon", "earthpower"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "moves": ["judgment", "perishsong", "hyperbeam", "recover"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "moves": ["judgment", "extremespeed", "recover", "hyperbeam"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Uber",
	},
	arceusprimal: {
		requiredItem: "Crystal Piece Arceus",
		tier: "Uber",
	},
	arceusbug: {
		eventOnly: true,
		requiredItems: ["Insect Plate", "Buginium Z"],
		isNonstandard: "Past",
		tier: "Uber",
	},
	arceusdark: {
		eventOnly: true,
		requiredItems: ["Dread Plate", "Darkinium Z"],
		isNonstandard: "Past",
		tier: "Uber",
	},
	arceusdragon: {
		eventOnly: true,
		requiredItems: ["Draco Plate", "Dragonium Z"],
		isNonstandard: "Past",
		tier: "Uber",
	},
	arceuselectric: {
		eventOnly: true,
		requiredItems: ["Zap Plate", "Electrium Z"],
		isNonstandard: "Past",
		tier: "Uber",
	},
	arceusfairy: {
		eventOnly: true,
		requiredItems: ["Pixie Plate", "Fairium Z"],
		isNonstandard: "Past",
		tier: "Uber",
	},
	arceusfighting: {
		eventOnly: true,
		requiredItems: ["Fist Plate", "Fightinium Z"],
		isNonstandard: "Past",
		tier: "Uber",
	},
	arceusfire: {
		eventOnly: true,
		requiredItems: ["Flame Plate", "Firium Z"],
		isNonstandard: "Past",
		tier: "Uber",
	},
	arceusflying: {
		eventOnly: true,
		requiredItems: ["Sky Plate", "Flyinium Z"],
		isNonstandard: "Past",
		tier: "Uber",
	},
	arceusghost: {
		eventOnly: true,
		requiredItems: ["Spooky Plate", "Ghostium Z"],
		isNonstandard: "Past",
		tier: "Uber",
	},
	arceusgrass: {
		eventOnly: true,
		requiredItems: ["Meadow Plate", "Grassium Z"],
		isNonstandard: "Past",
		tier: "Uber",
	},
	arceusground: {
		eventOnly: true,
		requiredItems: ["Earth Plate", "Groundium Z"],
		isNonstandard: "Past",
		tier: "Uber",
	},
	arceusice: {
		eventOnly: true,
		requiredItems: ["Icicle Plate", "Icium Z"],
		isNonstandard: "Past",
		tier: "Uber",
	},
	arceuspoison: {
		eventOnly: true,
		requiredItems: ["Toxic Plate", "Poisonium Z"],
		isNonstandard: "Past",
		tier: "Uber",
	},
	arceuspsychic: {
		eventOnly: true,
		requiredItems: ["Mind Plate", "Psychium Z"],
		isNonstandard: "Past",
		tier: "Uber",
	},
	arceusrock: {
		eventOnly: true,
		requiredItems: ["Stone Plate", "Rockium Z"],
		isNonstandard: "Past",
		tier: "Uber",
	},
	arceussteel: {
		eventOnly: true,
		requiredItems: ["Iron Plate", "Steelium Z"],
		isNonstandard: "Past",
		tier: "Uber",
	},
	arceuswater: {
		eventOnly: true,
		requiredItems: ["Splash Plate", "Waterium Z"],
		isNonstandard: "Past",
		tier: "Uber",
	},
	victini: {
		eventPokemon: [
			{"generation": 5, "level": 15, "moves": ["quickattack", "incinerate", "confusion", "endure"]},
			{"generation": 5, "level": 50, "moves": ["vcreate", "fusionflare", "fusionbolt", "searingshot"], "pokeball": "cherishball"},
			{"generation": 5, "level": 100, "moves": ["vcreate", "blueflare", "boltstrike", "glaciate"], "pokeball": "cherishball"},
			{"generation": 6, "level": 15, "moves": ["confusion", "quickattack", "vcreate", "searingshot"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "moves": ["incinerate", "quickattack", "endure", "confusion"], "pokeball": "cherishball"},
			{"generation": 6, "level": 15, "moves": ["quickattack", "swagger", "vcreate"], "pokeball": "cherishball"},
			{"generation": 7, "level": 15, "moves": ["vcreate", "reversal", "storedpower", "celebrate"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "OU",
	},
	snivy: {
		eventPokemon: [
			{"generation": 5, "level": 5, "gender": "M", "nature": "Hardy", "isHidden": false, "moves": ["growth", "synthesis", "energyball", "aromatherapy"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	snivydelta: {
		tier: "LC",
	},
	servine: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	servinedelta: {
		tier: "NFE",
	},
	serperior: {
		eventPokemon: [
			{"generation": 5, "level": 100, "gender": "M", "isHidden": false, "moves": ["leafstorm", "substitute", "gigadrain", "leechseed"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "isHidden": true, "moves": ["leafstorm", "holdback", "wringout", "gigadrain"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "OU",
	},
	serperiordelta: {
		tier: "OU",
	},
	tepig: {
		isNonstandard: "Past",
		tier: "LC",
	},
	pignite: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	emboar: {
		eventPokemon: [
			{"generation": 5, "level": 100, "gender": "M", "isHidden": false, "moves": ["flareblitz", "hammerarm", "wildcharge", "headsmash"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "isHidden": true, "moves": ["flareblitz", "holdback", "headsmash", "takedown"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "RU",
	},
	oshawott: {
		isNonstandard: "Past",
		tier: "LC",
	},
	dewott: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	samurott: {
		eventPokemon: [
			{"generation": 5, "level": 100, "gender": "M", "isHidden": false, "moves": ["hydropump", "icebeam", "megahorn", "superpower"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "isHidden": true, "moves": ["razorshell", "holdback", "confide", "hydropump"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	patrat: {
		isNonstandard: "Past",
		tier: "LC",
	},
	watchog: {
		isNonstandard: "Past",
		tier: "PU",
	},
	lillipup: {
		isNonstandard: "Past",
		tier: "LC",
	},
	herdier: {
		encounters: [
			{"generation": 5, "level": 20, "isHidden": true},
		],
		isNonstandard: "Past",
		tier: "NFE",
	},
	stoutland: {
		encounters: [
			{"generation": 5, "level": 23, "isHidden": false},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	purrloin: {
		unreleasedHidden: "Past",
		tier: "LC",
	},
	purrloindelta: {
		tier: "LC",
	},
	liepard: {
		randomBattleMoves: ["copycat", "darkpulse", "encore", "nastyplot", "playrough", "substitute", "thunderwave", "uturn"],
		eventPokemon: [
			{"generation": 5, "level": 20, "gender": "F", "nature": "Jolly", "isHidden": true, "moves": ["fakeout", "foulplay", "encore", "swagger"]},
		],
		unreleasedHidden: true,
		tier: "PU",
		doublesTier: "DOU",
	},
	lieparddelta: {
		tier: "NU",
	},
	pansage: {
		eventPokemon: [
			{"generation": 5, "level": 1, "shiny": 1, "gender": "M", "nature": "Brave", "ivs": {"spa": 31}, "isHidden": false, "moves": ["bulletseed", "bite", "solarbeam", "dig"], "pokeball": "pokeball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["leer", "lick", "vinewhip", "leafstorm"]},
			{"generation": 5, "level": 30, "gender": "M", "nature": "Serious", "isHidden": false, "moves": ["seedbomb", "solarbeam", "rocktomb", "dig"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	simisage: {
		isNonstandard: "Past",
		tier: "PU",
	},
	pansear: {
		eventPokemon: [
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["leer", "lick", "incinerate", "heatwave"]},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	simisear: {
		eventPokemon: [
			{"generation": 6, "level": 5, "perfectIVs": 2, "isHidden": false, "moves": ["workup", "honeclaws", "poweruppunch", "gigaimpact"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	panpour: {
		eventPokemon: [
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["leer", "lick", "watergun", "hydropump"]},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	simipour: {
		isNonstandard: "Past",
		tier: "PU",
	},
	munna: {
		unreleasedHidden: "Past",
		tier: "LC",
	},
	musharna: {
		randomBattleMoves: ["calmmind", "moonblast", "moonlight", "psychic", "shadowball", "thunderwave"],
		eventPokemon: [
			{"generation": 5, "level": 50, "isHidden": true, "moves": ["defensecurl", "luckychant", "psybeam", "hypnosis"]},
		],
		unreleasedHidden: true,
		tier: "PU",
		doublesTier: "DOU",
	},
	pidove: {
		eventPokemon: [
			{"generation": 5, "level": 1, "shiny": 1, "gender": "F", "nature": "Hardy", "ivs": {"atk": 31}, "isHidden": false, "abilities": ["superluck"], "moves": ["gust", "quickattack", "aircutter"], "pokeball": "pokeball"},
		],
		unreleasedHidden: "Past",
		tier: "LC",
	},
	tranquill: {
		unreleasedHidden: "Past",
		tier: "NFE",
	},
	unfezant: {
		randomBattleMoves: ["bravebird", "defog", "nightslash", "roost", "uturn"],
		encounters: [
			{"generation": 5, "level": 22, "isHidden": false},
		],
		unreleasedHidden: true,
		tier: "PU",
		doublesTier: "DOU",
	},
	blitzle: {
		isNonstandard: "Past",
		tier: "LC",
	},
	zebstrika: {
		isNonstandard: "Past",
		tier: "PU",
	},
	zebstrikamega: {
		requiredItem: "Zebstrikite",
		tier: "UU",
	},
	roggenrola: {
		tier: "LC",
	},
	boldore: {
		encounters: [
			{"generation": 5, "level": 24, "isHidden": false},
		],
		tier: "NFE",
	},
	gigalith: {
		randomBattleMoves: ["earthquake", "explosion", "rockblast", "stealthrock", "stoneedge", "superpower"],
		tier: "RU",
		doublesTier: "DOU",
	},
	woobat: {
		unreleasedHidden: "Past",
		tier: "LC",
	},
	swoobat: {
		randomBattleMoves: ["airslash", "heatwave", "nastyplot", "roost", "storedpower"],
		unreleasedHidden: true,
		tier: "PU",
		doublesTier: "DOU",
	},
	drilbur: {
		tier: "LC",
	},
	excadrill: {
		randomBattleMoves: ["earthquake", "ironhead", "rapidspin", "rockslide", "swordsdance"],
		encounters: [
			{"generation": 6, "level": 30},
		],
		tier: "OU",
		doublesTier: "DOU",
	},
	audino: {
		eventPokemon: [
			{"generation": 5, "level": 30, "gender": "F", "nature": "Calm", "isHidden": false, "abilities": ["healer"], "moves": ["healpulse", "helpinghand", "refresh", "doubleslap"], "pokeball": "cherishball"},
			{"generation": 5, "level": 30, "gender": "F", "nature": "Serious", "isHidden": false, "abilities": ["healer"], "moves": ["healpulse", "helpinghand", "refresh", "present"], "pokeball": "cherishball"},
			{"generation": 5, "level": 30, "gender": "F", "nature": "Jolly", "isHidden": false, "abilities": ["healer"], "moves": ["healpulse", "helpinghand", "refresh", "present"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "nature": "Relaxed", "isHidden": false, "abilities": ["regenerator"], "moves": ["trickroom", "healpulse", "simplebeam", "thunderbolt"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	audinomega: {
		requiredItem: "Audinite",
		isNonstandard: "Past",
		tier: "NU",
	},
	timburr: {
		tier: "LC",
	},
	gurdurr: {
		tier: "NFE",
	},
	conkeldurr: {
		randomBattleMoves: ["bulkup", "drainpunch", "facade", "machpunch", "stoneedge"],
		tier: "UU",
		doublesTier: "DOU",
	},
	tympole: {
		tier: "LC",
	},
	palpitoad: {
		tier: "NFE",
	},
	seismitoad: {
		randomBattleMoves: ["earthquake", "liquidation", "raindance", "sludgebomb", "stealthrock"],
		encounters: [
			{"generation": 5, "level": 15, "isHidden": false},
		],
		tier: "UU",
		doublesTier: "DOU",
	},
	throh: {
		randomBattleMoves: ["bulkup", "circlethrow", "icepunch", "payback", "rest", "sleeptalk", "stormthrow"],
		unreleasedHidden: true,
		tier: "PU",
		doublesTier: "DOU",
	},
	sawk: {
		randomBattleMoves: ["bulkup", "closecombat", "poisonjab", "stoneedge", "throatchop"],
		unreleasedHidden: true,
		tier: "NU",
		doublesTier: "DOU",
	},
	sewaddle: {
		isNonstandard: "Past",
		tier: "LC",
	},
	swadloon: {
		encounters: [
			{"generation": 5, "level": 19, "isHidden": false},
		],
		isNonstandard: "Past",
		tier: "NFE",
	},
	leavanny: {
		encounters: [
			{"generation": 5, "level": 20, "isHidden": true},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	leavannyarmor: {
		requiredItem: "Leavanny Armor",
		tier: "PU",
	},
	venipede: {
		isNonstandard: "Past",
		tier: "LC",
	},
	venipededelta: {
		tier: "LC",
	},
	whirlipede: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	whirlipededelta: {
		tier: "NFE",
	},
	scolipede: {
		isNonstandard: "Past",
		tier: "OU",
	},
	scolipededelta: {
		tier: "NU",
	},
	cottonee: {
		tier: "LC",
	},
	whimsicott: {
		randomBattleMoves: ["encore", "energyball", "leechseed", "moonblast", "stunspore", "uturn"],
		eventPokemon: [
			{"generation": 5, "level": 50, "gender": "F", "nature": "Timid", "ivs": {"spe": 31}, "isHidden": false, "abilities": ["prankster"], "moves": ["swagger", "gigadrain", "beatup", "helpinghand"], "pokeball": "cherishball"},
		],
		tier: "NU",
		doublesTier: "DOU",
	},
	petilil: {
		isNonstandard: "Past",
		tier: "LC",
	},
	petilildeltaw: {
		tier: "LC",
	},
	petilildeltaf: {
		tier: "LC",
	},
	lilligant: {
		isNonstandard: "Past",
		tier: "NU",
	},
	lilligantdeltaw: {
		tier: "RU",
	},
	lilligantdeltaf: {
		tier: "NU",
	},
	basculin: {
		randomBattleMoves: ["aquajet", "crunch", "headsmash", "liquidation", "psychicfangs"],
		unreleasedHidden: true,
		tier: "PU",
		doublesTier: "DOU",
	},
	basculinbluestriped: {
		randomBattleMoves: ["aquajet", "crunch", "headsmash", "liquidation", "psychicfangs"],
		unreleasedHidden: true,
		tier: "PU",
		doublesTier: "DOU",
	},
	sandile: {
		isNonstandard: "Past",
		tier: "LC",
	},
	krokorok: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	krookodile: {
		isNonstandard: "Past",
		tier: "UU",
	},
	darumaka: {
		tier: "LC",
	},
	darumakagalar: {
		tier: "LC",
	},
	darumakadelta: {
		tier: "LC",
	},
	darmanitan: {
		randomBattleMoves: ["earthquake", "flareblitz", "rockslide", "superpower", "uturn"],
		eventPokemon: [
			{"generation": 5, "level": 35, "isHidden": true, "moves": ["thrash", "bellydrum", "flareblitz", "hammerarm"]},
			{"generation": 6, "level": 35, "gender": "M", "nature": "Calm", "ivs": {"hp": 30, "atk": 30, "def": 30, "spa": 30, "spd": 30, "spe": 30}, "isHidden": true, "moves": ["thrash", "bellydrum", "flareblitz", "hammerarm"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 6, "level": 32, "maxEggMoves": 1},
		],
		tier: "UU",
	},
	darmanitandelta: {
		tier: "UU",
	},
	darmanitanzen: {
		tier: "OU",
	},
	darmanitangalar: {
		randomBattleMoves: ["earthquake", "flareblitz", "iciclecrash", "superpower", "uturn"],
		tier: "OU",
		doublesTier: "DOU",
	},
	darmanitangalarzen: {
		requiredAbility: "Zen Mode",
		battleOnly: true,
	},
	maractus: {
		randomBattleMoves: ["drainpunch", "energyball", "leechseed", "spikes", "spikyshield"],
		unreleasedHidden: true,
		tier: "PU",
		doublesTier: "DOU",
	},
	maractusdelta: {
		tier: "NU",
	},
	dwebble: {
		tier: "LC",
	},
	dwebbledeltab: {
		tier: "LC",
	},
	dwebbledeltac: {
		tier: "LC",
	},
	crustle: {
		randomBattleMoves: ["earthquake", "shellsmash", "spikes", "stealthrock", "stoneedge", "xscissor"],
		encounters: [
			{"generation": 6, "level": 33, "maxEggMoves": 1},
		],
		tier: "PU",
		doublesTier: "DOU",
	},
	crustledeltab: {
		tier: "NU",
	},
	crustledeltac: {
		tier: "OU",
	},
	scraggy: {
		eventPokemon: [
			{"generation": 5, "level": 1, "gender": "M", "nature": "Adamant", "isHidden": false, "abilities": ["moxie"], "moves": ["headbutt", "leer", "highjumpkick", "lowkick"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	scraggydelta: {
		tier: "LC",
	},
	scrafty: {
		randomBattleMoves: ["closecombat", "crunch", "dragondance", "icepunch", "poisonjab"],
		eventPokemon: [
			{"generation": 5, "level": 50, "gender": "M", "nature": "Brave", "isHidden": false, "abilities": ["moxie"], "moves": ["firepunch", "payback", "drainpunch", "substitute"], "pokeball": "cherishball"},
		],
		tier: "NU",
		doublesTier: "DOU",
	},
	scraftydelta: {
		tier: "RU",
	},
	sigilyph: {
		randomBattleMoves: ["airslash", "energyball", "heatwave", "icebeam", "psychic"],
		tier: "NU",
		doublesTier: "DOU",
	},
	yamask: {
		tier: "LC",
	},
	yamaskdelta: {
		tier: "LC",
	},
	yamaskgalar: {
		tier: "LC",
	},
	cofagrigus: {
		randomBattleMoves: ["bodypress", "memento", "shadowball", "toxicspikes", "willowisp"],
		eventPokemon: [
			{"generation": 7, "level": 66, "gender": "M", "moves": ["willowisp", "shadowball", "powersplit", "darkpulse"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 6, "level": 32, "maxEggMoves": 1},
		],
		tier: "RU",
		doublesTier: "DOU",
	},
	runerigus: {
		randomBattleMoves: ["earthquake", "haze", "nightshade", "stealthrock", "toxicspikes", "willowisp"],
		tier: "RU",
		doublesTier: "DOU",
	},
	cofagrigusdelta: {
		tier: "RU",
	},
	tirtouga: {
		eventPokemon: [
			{"generation": 5, "level": 15, "gender": "M", "isHidden": false, "abilities": ["sturdy"], "moves": ["bite", "protect", "aquajet", "bodyslam"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	carracosta: {
		isNonstandard: "Past",
		tier: "PU",
	},
	archen: {
		eventPokemon: [
			{"generation": 5, "level": 15, "gender": "M", "moves": ["headsmash", "wingattack", "doubleteam", "scaryface"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	archeops: {
		isNonstandard: "Past",
		tier: "NU",
	},
	trubbish: {
		tier: "LC",
	},
	garbodor: {
		encounters: [
			{"generation": 5, "level": 31, "isHidden": false},
			{"generation": 6, "level": 30},
			{"generation": 7, "level": 24},
		],
		tier: "NU",
		doublesTier: "DOU",
	},
	garbodorgmax: {
		randomBattleMoves: ["drainpunch", "gunkshot", "painsplit", "spikes", "toxicspikes"],
		isGigantamax: "G-Max Malodor",
		tier: "New",
		doublesTier: "DOU",
	},
	zorua: {
		isNonstandard: "Past",
		tier: "LC",
	},
	zoroark: {
		eventPokemon: [
			{"generation": 5, "level": 50, "gender": "M", "nature": "Quirky", "moves": ["agility", "embargo", "punishment", "snarl"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "moves": ["sludgebomb", "darkpulse", "flamethrower", "suckerpunch"], "pokeball": "ultraball"},
			{"generation": 6, "level": 45, "gender": "M", "nature": "Naughty", "moves": ["scaryface", "furyswipes", "nastyplot", "punishment"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 5, "level": 25, "isHidden": false},
		],
		isNonstandard: "Past",
		tier: "UU",
	},
	zoroarkmega: {
		requiredItem: "Zoronite",
		tier: "UU",
	},
	minccino: {
		tier: "LC",
	},
	cinccino: {
		randomBattleMoves: ["bulletseed", "knockoff", "rockblast", "tailslap", "uturn"],
		tier: "NU",
		doublesTier: "DOU",
	},
	gothita: {
		tier: "LC Uber",
	},
	gothorita: {
		eventPokemon: [
			{"generation": 5, "level": 32, "gender": "M", "isHidden": true, "moves": ["psyshock", "flatter", "futuresight", "mirrorcoat"]},
			{"generation": 5, "level": 32, "gender": "M", "isHidden": true, "moves": ["psyshock", "flatter", "futuresight", "imprison"]},
		],
		encounters: [
			{"generation": 5, "level": 31, "isHidden": false},
		],
		tier: "NFE",
	},
	gothitelle: {
		randomBattleMoves: ["cosmicpower", "rest", "storedpower", "trick"],
		encounters: [
			{"generation": 5, "level": 34, "isHidden": false},
		],
		tier: "Uber",
		doublesTier: "DOU",
	},
	gothitellemega: {
		requiredItem: "Gothitite",
		tier: "UU",
	},
	solosis: {
		tier: "LC",
	},
	solosisdelta: {
		tier: "LC",
	},
	duosion: {
		encounters: [
			{"generation": 5, "level": 31, "isHidden": false},
		],
		tier: "NFE",
	},
	duosiondelta: {
		tier: "NFE",
	},
	reuniclus: {
		randomBattleMoves: ["calmmind", "focusblast", "psychic", "recover", "shadowball", "trickroom"],
		encounters: [
			{"generation": 5, "level": 34, "isHidden": false},
		],
		tier: "UU",
		doublesTier: "DOU",
	},
	reuniclusmega: {
		requiredItem: "Reuniclite",
		tier: "UU",
	},
	reuniclusdelta: {
		tier: "RU",
	},
	ducklett: {
		isNonstandard: "Past",
		tier: "LC",
	},
	swanna: {
		encounters: [
			{"generation": 6, "level": 30},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	vanillite: {
		tier: "LC",
	},
	vanillish: {
		tier: "NFE",
	},
	vanilluxe: {
		randomBattleMoves: ["auroraveil", "autotomize", "blizzard", "explosion", "flashcannon", "freezedry"],
		tier: "RU",
		doublesTier: "DOU",
	},
	deerling: {
		eventPokemon: [
			{"generation": 5, "level": 30, "gender": "F", "isHidden": true, "moves": ["feintattack", "takedown", "jumpkick", "aromatherapy"]},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	sawsbuck: {
		encounters: [
			{"generation": 6, "level": 30},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	emolga: {
		isNonstandard: "Past",
		tier: "PU",
	},
	emolgadelta: {
		tier: "UU",
	},
	karrablast: {
		eventPokemon: [
			{"generation": 5, "level": 30, "isHidden": false, "moves": ["furyattack", "headbutt", "falseswipe", "bugbuzz"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "isHidden": false, "moves": ["megahorn", "takedown", "xscissor", "flail"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	karrablastdelta: {
		tier: "LC",
	},
	escavalier: {
		randomBattleMoves: ["closecombat", "drillrun", "ironhead", "knockoff", "megahorn", "swordsdance"],
		tier: "RU",
		doublesTier: "DOU",
	},
	escavalierdelta: {
		tier: "UU",
	},
	foongus: {
		isNonstandard: "Past",
		tier: "LC",
	},
	foongusdelta: {
		tier: "LC",
	},
	amoonguss: {
		encounters: [
			{"generation": 5, "level": 37, "isHidden": false},
			{"generation": 5, "level": 35, "isHidden": true},
		],
		isNonstandard: "Past",
		tier: "UU",
	},
	amoongussdelta: {
		tier: "UU",
	},
	frillish: {
		tier: "LC",
	},
	jellicent: {
		randomBattleMoves: ["icebeam", "recover", "scald", "shadowball", "willowisp"],
		eventPokemon: [
			{"generation": 5, "level": 40, "isHidden": true, "moves": ["waterpulse", "ominouswind", "brine", "raindance"]},
		],
		encounters: [
			{"generation": 5, "level": 5, "isHidden": false},
		],
		tier: "PU",
		doublesTier: "DOU",
	},
	alomomola: {
		isNonstandard: "Past",
		tier: "UU",
	},
	joltik: {
		tier: "LC",
	},
	galvantula: {
		randomBattleMoves: ["bugbuzz", "gigadrain", "stickyweb", "thunder", "voltswitch"],
		encounters: [
			{"generation": 6, "level": 30},
		],
		tier: "RU",
		doublesTier: "DOU",
	},
	ferroseed: {
		tier: "LC",
	},
	ferrothorn: {
		randomBattleMoves: ["leechseed", "gyroball", "powerwhip", "protect", "spikes", "stealthrock"],
		tier: "OU",
		doublesTier: "DOU",
	},
	klink: {
		tier: "LC",
	},
	klang: {
		encounters: [
			{"generation": 6, "level": 30},
		],
		tier: "NFE",
	},
	klinklang: {
		randomBattleMoves: ["geargrind", "shiftgear", "substitute", "wildcharge"],
		tier: "NU",
		doublesTier: "DOU",
	},
	tynamo: {
		isNonstandard: "Past",
		tier: "LC",
	},
	eelektrik: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	eelektross: {
		isNonstandard: "Past",
		tier: "PU",
	},
	elgyem: {
		unreleasedHidden: "Past",
		tier: "LC",
	},
	beheeyem: {
		randomBattleMoves: ["nastyplot", "psychic", "shadowball", "thunderbolt", "trick", "trickroom"],
		unreleasedHidden: true,
		tier: "PU",
		doublesTier: "DOU",
	},
	litwick: {
		tier: "LC",
	},
	litwickdelta: {
		tier: "LC",
	},
	lampent: {
		encounters: [
			{"generation": 6, "level": 30},
		],
		tier: "NFE",
	},
	lampentdelta: {
		tier: "NFE",
	},
	chandelure: {
		randomBattleMoves: ["calmmind", "energyball", "fireblast", "shadowball", "substitute", "trick"],
		eventPokemon: [
			{"generation": 5, "level": 50, "gender": "F", "nature": "Modest", "ivs": {"spa": 31}, "isHidden": false, "abilities": ["flashfire"], "moves": ["heatwave", "shadowball", "energyball", "psychic"], "pokeball": "cherishball"},
		],
		tier: "UU",
		doublesTier: "DOU",
	},
	chandeluredelta: {
		tier: "UU",
	},
	axew: {
		eventPokemon: [
			{"generation": 5, "level": 1, "shiny": 1, "gender": "M", "nature": "Naive", "ivs": {"spe": 31}, "isHidden": false, "abilities": ["moldbreaker"], "moves": ["scratch", "dragonrage"], "pokeball": "pokeball"},
			{"generation": 5, "level": 10, "gender": "F", "isHidden": false, "abilities": ["moldbreaker"], "moves": ["dragonrage", "return", "endure", "dragonclaw"], "pokeball": "cherishball"},
			{"generation": 5, "level": 30, "gender": "M", "nature": "Naive", "isHidden": false, "abilities": ["rivalry"], "moves": ["dragonrage", "scratch", "outrage", "gigaimpact"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	axewdelta: {
		tier: "LC",
	},
	fraxure: {
		encounters: [
			{"generation": 6, "level": 30},
		],
		tier: "NFE",
	},
	fraxuredelta: {
		tier: "NFE",
	},
	haxorus: {
		randomBattleMoves: ["dragondance", "earthquake", "outrage", "poisonjab", "swordsdance", "taunt"],
		eventPokemon: [
			{"generation": 5, "level": 59, "gender": "F", "nature": "Naive", "ivs": {"hp": 30, "atk": 30, "def": 30, "spa": 30, "spd": 30, "spe": 30}, "isHidden": false, "abilities": ["moldbreaker"], "moves": ["earthquake", "dualchop", "xscissor", "dragondance"], "pokeball": "cherishball"},
		],
		tier: "UU",
		doublesTier: "DOU",
	},
	haxorusmega: {
		requiredItem: "Haxorite",
		tier: "Uber",
	},
	haxorusdelta: {
		tier: "UU",
	},
	cubchoo: {
		eventPokemon: [
			{"generation": 5, "level": 15, "isHidden": false, "moves": ["powdersnow", "growl", "bide", "icywind"], "pokeball": "cherishball"},
		],
		unreleasedHidden: "Past",
		tier: "LC",
	},
	beartic: {
		randomBattleMoves: ["iciclecrash", "liquidation", "raindance", "superpower", "throatchop"],
		encounters: [
			{"generation": 6, "level": 30},
		],
		unreleasedHidden: true,
		tier: "PU",
		doublesTier: "DOU",
	},
	cryogonal: {
		isNonstandard: "Past",
		tier: "PU",
	},
	cryogonalmega: {
		requiredItem: "Cryogonite",
		tier: "UU",
	},
	shelmet: {
		eventPokemon: [
			{"generation": 5, "level": 30, "isHidden": false, "moves": ["strugglebug", "megadrain", "yawn", "protect"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "isHidden": false, "moves": ["encore", "gigadrain", "bodyslam", "bugbuzz"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	accelgor: {
		randomBattleMoves: ["bugbuzz", "encore", "energyball", "focusblast", "spikes", "toxic"],
		tier: "NU",
		doublesTier: "DOU",
	},
	stunfisk: {
		randomBattleMoves: ["discharge", "earthpower", "foulplay", "scald", "stealthrock"],
		tier: "PU",
	},
	stunfiskgalar: {
		randomBattleMoves: ["curse", "earthquake", "painsplit", "rockslide", "stealthrock"],
		tier: "PU",
		doublesTier: "DOU",
	},
	stunfiskmega: {
		requiredItem: "Stunfiskite",
		tier: "UU",
	},
	mienfoo: {
		isNonstandard: "Past",
		tier: "LC",
	},
	mienshao: {
		eventPokemon: [
			{"generation": 7, "level": 65, "gender": "M", "isHidden": false, "abilities": ["innerfocus"], "moves": ["fakeout", "dualchop", "highjumpkick", "uturn"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "UU",
	},
	druddigon: {
		eventPokemon: [
			{"generation": 5, "level": 1, "shiny": true, "isHidden": false, "moves": ["leer", "scratch"], "pokeball": "pokeball"},
		],
		isNonstandard: "Past",
		tier: "NU",
	},
	golett: {
		unreleasedHidden: "Past",
		tier: "LC",
	},
	golettdelta: {
		tier: "LC",
	},
	golurk: {
		randomBattleMoves: ["drainpunch", "earthquake", "icepunch", "shadowpunch", "substitute"],
		eventPokemon: [
			{"generation": 5, "level": 70, "shiny": true, "isHidden": false, "abilities": ["ironfist"], "moves": ["shadowpunch", "hyperbeam", "gyroball", "hammerarm"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 6, "level": 30},
		],
		unreleasedHidden: true,
		tier: "PU",
		doublesTier: "DOU",
	},
	golurkdelta: {
		tier: "RU",
	},
	pawniard: {
		tier: "LC",
	},
	parniarddelta: {
		tier: "LC",
	},
	bisharp: {
		randomBattleMoves: ["ironhead", "substitute", "suckerpunch", "swordsdance", "throatchop"],
		encounters: [
			{"generation": 7, "level": 33, "isHidden": false},
		],
		tier: "UU",
		doublesTier: "DOU",
	},
	bisharpdelta: {
		tier: "OU",
	},
	bisharpmega: {
		requiredItem: "Bisharpite",
		tier: "OU",
	},
	bisharpdeltamega: {
		requiredItem: "Delta Bisharpite",
		tier: "Uber",
	},
	bouffalant: {
		eventPokemon: [
			{"generation": 6, "level": 50, "nature": "Adamant", "ivs": {"hp": 31, "atk": 31}, "isHidden": true, "moves": ["headcharge", "facade", "earthquake", "rockslide"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	rufflet: {
		tier: "LC",
	},
	braviary: {
		randomBattleMoves: ["bravebird", "bulkup", "closecombat", "crushclaw", "defog", "rockslide"],
		eventPokemon: [
			{"generation": 5, "level": 25, "gender": "M", "isHidden": true, "moves": ["wingattack", "honeclaws", "scaryface", "aerialace"]},
		],
		encounters: [
			{"generation": 6, "level": 45, "isHidden": false},
		],
		tier: "NU",
		doublesTier: "DOU",
	},
	vullaby: {
		tier: "LC",
	},
	mandibuzz: {
		randomBattleMoves: ["defog", "foulplay", "roost", "taunt", "toxic", "uturn"],
		eventPokemon: [
			{"generation": 5, "level": 25, "gender": "F", "isHidden": true, "moves": ["pluck", "nastyplot", "flatter", "feintattack"]},
		],
		tier: "RU",
		doublesTier: "DOU",
	},
	heatmor: {
		randomBattleMoves: ["fireblast", "firelash", "gigadrain", "suckerpunch", "superpower"],
		tier: "PU",
		doublesTier: "DOU",
	},
	heatmordelta: {
		tier: "RU",
	},
	durant: {
		randomBattleMoves: ["firstimpression", "ironhead", "rockslide", "superpower"],
		tier: "RU",
		doublesTier: "DOU",
	},
	deino: {
		eventPokemon: [
			{"generation": 5, "level": 1, "shiny": true, "moves": ["tackle", "dragonrage"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	deinodelta: {
		tier: "LC",
	},
	zweilous: {
		encounters: [
			{"generation": 5, "level": 49},
		],
		tier: "NFE",
	},
	zweilousdelta: {
		tier: "NFE",
	},
	hydreigon: {
		randomBattleMoves: ["darkpulse", "dracometeor", "fireblast", "flashcannon", "nastyplot", "uturn"],
		eventPokemon: [
			{"generation": 5, "level": 70, "shiny": true, "gender": "M", "moves": ["hypervoice", "dragonbreath", "flamethrower", "focusblast"], "pokeball": "cherishball"},
			{"generation": 6, "level": 52, "gender": "M", "perfectIVs": 2, "moves": ["dragonrush", "crunch", "rockslide", "frustration"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 6, "level": 59},
		],
		tier: "OU",
		doublesTier: "DOU",
	},
	hydreigonmega: {
		requiredItem: "Hydreigonite",
		tier: "Uber",
	},
	hydreigondelta: {
		tier: "UU",
	},
	larvesta: {
		isNonstandard: "Past",
		tier: "LC",
	},
	larvestadelta: {
		tier: "LC",
	},
	volcarona: {
		eventPokemon: [
			{"generation": 5, "level": 35, "isHidden": false, "moves": ["stringshot", "leechlife", "gust", "firespin"]},
			{"generation": 5, "level": 77, "gender": "M", "nature": "Calm", "ivs": {"hp": 30, "atk": 30, "def": 30, "spa": 30, "spd": 30, "spe": 30}, "isHidden": false, "moves": ["bugbuzz", "overheat", "hyperbeam", "quiverdance"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 7, "level": 41},
		],
		isNonstandard: "Past",
		tier: "OU",
	},
	volcaronadelta: {
		tier: "OU",
	},
	volcaronadeltaarmor: {
		requiredItem: "Volcarona Delta Armor",
		tier: "OU",
	},
	cobalion: {
		randomBattleMoves: ["closecombat", "ironhead", "stealthrock", "stoneedge", "swordsdance", "voltswitch"],
		eventPokemon: [
			{"generation": 5, "level": 42, "shiny": 1, "moves": ["helpinghand", "retaliate", "ironhead", "sacredsword"]},
			{"generation": 5, "level": 45, "shiny": 1, "moves": ["helpinghand", "retaliate", "ironhead", "sacredsword"]},
			{"generation": 5, "level": 65, "shiny": 1, "moves": ["sacredsword", "swordsdance", "quickguard", "workup"]},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["retaliate", "ironhead", "sacredsword", "swordsdance"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["sacredsword", "swordsdance", "quickattack", "ironhead"]},
		],
		eventOnly: true,
		tier: "UU",
	},
	terrakion: {
		randomBattleMoves: ["closecombat", "earthquake", "quickattack", "stoneedge", "swordsdance"],
		eventPokemon: [
			{"generation": 5, "level": 42, "shiny": 1, "moves": ["helpinghand", "retaliate", "rockslide", "sacredsword"]},
			{"generation": 5, "level": 45, "shiny": 1, "moves": ["helpinghand", "retaliate", "rockslide", "sacredsword"]},
			{"generation": 5, "level": 65, "shiny": 1, "moves": ["sacredsword", "swordsdance", "quickguard", "workup"]},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["retaliate", "rockslide", "sacredsword", "swordsdance"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["sacredsword", "swordsdance", "rockslide", "stoneedge"]},
		],
		eventOnly: true,
		tier: "UU",
	},
	virizion: {
		randomBattleMoves: ["closecombat", "leafblade", "stoneedge", "substitute", "swordsdance"],
		eventPokemon: [
			{"generation": 5, "level": 42, "shiny": 1, "moves": ["helpinghand", "retaliate", "gigadrain", "sacredsword"]},
			{"generation": 5, "level": 45, "shiny": 1, "moves": ["helpinghand", "retaliate", "gigadrain", "sacredsword"]},
			{"generation": 5, "level": 65, "shiny": 1, "moves": ["sacredsword", "swordsdance", "quickguard", "workup"]},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["retaliate", "gigadrain", "sacredsword", "swordsdance"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["sacredsword", "swordsdance", "gigadrain", "leafblade"]},
		],
		eventOnly: true,
		tier: "RU",
	},
	tornadus: {
		eventPokemon: [
			{"generation": 5, "level": 40, "shiny": 1, "isHidden": false, "moves": ["revenge", "aircutter", "extrasensory", "agility"]},
			{"generation": 5, "level": 5, "isHidden": true, "moves": ["uproar", "astonish", "gust"], "pokeball": "dreamball"},
			{"generation": 5, "level": 70, "isHidden": false, "moves": ["hurricane", "hammerarm", "airslash", "hiddenpower"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "shiny": 1, "isHidden": false, "moves": ["extrasensory", "agility", "airslash", "crunch"]},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["airslash", "crunch", "tailwind", "raindance"]},
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["airslash", "crunch", "tailwind", "raindance"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "isHidden": false, "moves": ["hurricane", "heatwave", "grassknot", "tailwind"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "UU",
	},
	tornadustherian: {
		eventOnly: true,
		isNonstandard: "Past",
		tier: "OU",
	},
	thundurus: {
		eventPokemon: [
			{"generation": 5, "level": 40, "shiny": 1, "isHidden": false, "moves": ["revenge", "shockwave", "healblock", "agility"]},
			{"generation": 5, "level": 5, "isHidden": true, "moves": ["uproar", "astonish", "thundershock"], "pokeball": "dreamball"},
			{"generation": 5, "level": 70, "isHidden": false, "moves": ["thunder", "hammerarm", "focusblast", "wildcharge"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "shiny": 1, "isHidden": false, "moves": ["healblock", "agility", "discharge", "crunch"]},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["discharge", "crunch", "charge", "nastyplot"]},
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["discharge", "crunch", "charge", "nastyplot"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "isHidden": false, "moves": ["thunderbolt", "focusblast", "grassknot", "nastyplot"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "OU",
	},
	thundurustherian: {
		eventOnly: true,
		isNonstandard: "Past",
		tier: "OU",
	},
	reshiram: {
		randomBattleMoves: ["blueflare", "dracometeor", "earthpower", "stoneedge", "willowisp"],
		eventPokemon: [
			{"generation": 5, "level": 50, "moves": ["dragonbreath", "slash", "extrasensory", "fusionflare"]},
			{"generation": 5, "level": 70, "moves": ["extrasensory", "fusionflare", "dragonpulse", "imprison"]},
			{"generation": 5, "level": 100, "moves": ["blueflare", "fusionflare", "mist", "dracometeor"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["dragonbreath", "slash", "extrasensory", "fusionflare"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["slash", "extrasensory", "fusionflare", "dragonpulse"]},
			{"generation": 7, "level": 60, "moves": ["slash", "extrasensory", "fusionflare", "dragonpulse"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "moves": ["fusionflare", "blueflare", "dracometeor", "earthpower"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "Uber",
	},
	zekrom: {
		randomBattleMoves: ["boltstrike", "dragondance", "outrage", "substitute"],
		eventPokemon: [
			{"generation": 5, "level": 50, "moves": ["dragonbreath", "slash", "zenheadbutt", "fusionbolt"]},
			{"generation": 5, "level": 70, "moves": ["zenheadbutt", "fusionbolt", "dragonclaw", "imprison"]},
			{"generation": 5, "level": 100, "moves": ["boltstrike", "fusionbolt", "haze", "outrage"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["dragonbreath", "slash", "zenheadbutt", "fusionbolt"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["slash", "zenheadbutt", "fusionbolt", "dragonclaw"]},
			{"generation": 7, "level": 60, "moves": ["slash", "zenheadbutt", "fusionbolt", "dragonclaw"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "moves": ["fusionbolt", "boltstrike", "outrage", "stoneedge"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "Uber",
	},
	zekromarmor: {
		requiredItem: "Zekrom Armor",
		tier: "Uber",
	},
	landorus: {
		eventPokemon: [
			{"generation": 5, "level": 70, "shiny": 1, "isHidden": false, "moves": ["rockslide", "earthquake", "sandstorm", "fissure"]},
			{"generation": 5, "level": 5, "isHidden": true, "moves": ["block", "mudshot", "rocktomb"], "pokeball": "dreamball"},
			{"generation": 6, "level": 65, "shiny": 1, "isHidden": false, "moves": ["extrasensory", "swordsdance", "earthpower", "rockslide"]},
			{"generation": 6, "level": 50, "nature": "Adamant", "ivs": {"hp": 31, "atk": 31, "def": 31, "spa": 1, "spd": 31, "spe": 24}, "isHidden": false, "moves": ["earthquake", "knockoff", "uturn", "rocktomb"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["earthpower", "rockslide", "earthquake", "sandstorm"]},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Uber",
	},
	landorustherian: {
		eventOnly: true,
		isNonstandard: "Past",
		tier: "OU",
	},
	kyurem: {
		randomBattleMoves: ["dracometeor", "earthpower", "focusblast", "freezedry", "icebeam", "outrage"],
		eventPokemon: [
			{"generation": 5, "level": 75, "shiny": 1, "moves": ["glaciate", "dragonpulse", "imprison", "endeavor"]},
			{"generation": 5, "level": 70, "shiny": 1, "moves": ["scaryface", "glaciate", "dragonpulse", "imprison"]},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["dragonbreath", "slash", "scaryface", "glaciate"]},
			{"generation": 6, "level": 100, "moves": ["glaciate", "scaryface", "dracometeor", "ironhead"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["slash", "scaryface", "glaciate", "dragonpulse"]},
		],
		eventOnly: true,
		tier: "UU",
	},
	kyuremblack: {
		randomBattleMoves: ["dragondance", "fusionbolt", "iciclespear", "outrage"],
		eventPokemon: [
			{"generation": 5, "level": 75, "shiny": 1, "moves": ["freezeshock", "dragonpulse", "imprison", "endeavor"]},
			{"generation": 5, "level": 70, "shiny": 1, "moves": ["fusionbolt", "freezeshock", "dragonpulse", "imprison"]},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["dragonbreath", "slash", "fusionbolt", "freezeshock"]},
			{"generation": 6, "level": 100, "moves": ["freezeshock", "fusionbolt", "dracometeor", "ironhead"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["slash", "fusionbolt", "freezeshock", "dragonpulse"]},
		],
		eventOnly: true,
		tier: "Uber",
	},
	kyuremwhite: {
		randomBattleMoves: ["dracometeor", "earthpower", "freezedry", "fusionflare", "icebeam"],
		eventPokemon: [
			{"generation": 5, "level": 75, "shiny": 1, "moves": ["iceburn", "dragonpulse", "imprison", "endeavor"]},
			{"generation": 5, "level": 70, "shiny": 1, "moves": ["fusionflare", "iceburn", "dragonpulse", "imprison"]},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["dragonbreath", "slash", "fusionflare", "iceburn"]},
			{"generation": 6, "level": 100, "moves": ["iceburn", "fusionflare", "dracometeor", "ironhead"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["slash", "fusionflare", "iceburn", "dragonpulse"]},
		],
		eventOnly: true,
		tier: "Uber",
	},
	keldeo: {
		randomBattleMoves: ["airslash", "calmmind", "hydropump", "icywind", "scald", "secretsword", "substitute"],
		eventPokemon: [
			{"generation": 5, "level": 15, "moves": ["aquajet", "leer", "doublekick", "bubblebeam"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "moves": ["sacredsword", "hydropump", "aquajet", "swordsdance"], "pokeball": "cherishball"},
			{"generation": 6, "level": 15, "moves": ["aquajet", "leer", "doublekick", "hydropump"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "moves": ["aquajet", "leer", "doublekick", "bubblebeam"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "OU",
	},
	keldeoresolute: {
		eventOnly: true,
		requiredMove: "Secret Sword",
		isUnreleased: "Past",
	},
	meloetta: {
		eventPokemon: [
			{"generation": 5, "level": 15, "moves": ["quickattack", "confusion", "round"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "moves": ["round", "teeterdance", "psychic", "closecombat"], "pokeball": "cherishball"},
			{"generation": 7, "level": 15, "moves": ["sing", "psychic", "closecombat"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "moves": ["sing", "celebrate", "round", "relicsong"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "RU",
	},
	meloettapirouette: {
		randomBattleMoves: ["relicsong", "closecombat", "knockoff", "return"],
		randomDoubleBattleMoves: ["relicsong", "closecombat", "knockoff", "return", "protect"],
		tier: "OU",
	},
	meloettadeltamime: {
		tier: "OU",
	},
	meloettadeltamagician: {
		tier: "RU",
	},
	genesect: {
		eventPokemon: [
			{"generation": 5, "level": 50, "moves": ["technoblast", "magnetbomb", "solarbeam", "signalbeam"], "pokeball": "cherishball"},
			{"generation": 5, "level": 15, "moves": ["technoblast", "magnetbomb", "solarbeam", "signalbeam"], "pokeball": "cherishball"},
			{"generation": 5, "level": 100, "shiny": true, "nature": "Hasty", "ivs": {"atk": 31, "spe": 31}, "moves": ["extremespeed", "technoblast", "blazekick", "shiftgear"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "moves": ["technoblast", "magnetbomb", "solarbeam", "signalbeam"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Uber",
	},
	genesectburn: {
		eventOnly: true,
		requiredItem: "Burn Drive",
		isNonstandard: "Past",
	},
	genesectchill: {
		eventOnly: true,
		requiredItem: "Chill Drive",
		isNonstandard: "Past",
	},
	genesectdouse: {
		eventOnly: true,
		requiredItem: "Douse Drive",
		isNonstandard: "Past",
	},
	genesectshock: {
		eventOnly: true,
		requiredItem: "Shock Drive",
		isNonstandard: "Past",
	},
	chespin: {
		isNonstandard: "Past",
		tier: "LC",
	},
	quilladin: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	chesnaught: {
		isNonstandard: "Past",
		tier: "UU",
	},
	fennekin: {
		eventPokemon: [
			{"generation": 6, "level": 15, "gender": "F", "nature": "Hardy", "isHidden": false, "moves": ["scratch", "flamethrower", "hiddenpower"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	braixen: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	delphox: {
		isNonstandard: "Past",
		tier: "NU",
	},
	froakie: {
		eventPokemon: [
			{"generation": 6, "level": 7, "isHidden": false, "moves": ["pound", "growl", "bubble", "return"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	froakiedelta: {
		tier: "LC",
	},
	frogadier: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	frogadierdelta: {
		tier: "NFE",
	},
	greninja: {
		eventPokemon: [
			{"generation": 6, "level": 36, "ivs": {"spe": 31}, "isHidden": true, "moves": ["watershuriken", "shadowsneak", "hydropump", "substitute"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "isHidden": true, "moves": ["hydrocannon", "gunkshot", "matblock", "happyhour"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "OU",
	},
	greninjadelta: {
		tier: "NU",
	},
	greninjaash: {
		eventPokemon: [
			{"generation": 7, "level": 36, "ivs": {"hp": 20, "atk": 31, "def": 20, "spa": 31, "spd": 20, "spe": 31}, "moves": ["watershuriken", "aerialace", "doubleteam", "nightslash"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 7,
		requiredAbility: "Battle Bond",
		battleOnly: true,
		isNonstandard: "Past",
		tier: "OU",
	},
	bunnelby: {
		tier: "LC",
	},
	diggersby: {
		randomBattleMoves: ["bodyslam", "earthquake", "firepunch", "quickattack", "swordsdance", "uturn"],
		tier: "UU",
		doublesTier: "DOU",
	},
	fletchling: {
		isNonstandard: "Past",
		tier: "LC",
	},
	fletchinder: {
		encounters: [
			{"generation": 7, "level": 16},
		],
		isNonstandard: "Past",
		tier: "NFE",
	},
	talonflame: {
		isNonstandard: "Past",
		tier: "UU",
	},
	scatterbug: {
		isNonstandard: "Past",
		tier: "LC",
	},
	spewpa: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	vivillon: {
		isNonstandard: "Past",
		tier: "NU",
	},
	vivillonfancy: {
		eventPokemon: [
			{"generation": 6, "level": 12, "isHidden": false, "moves": ["gust", "lightscreen", "strugglebug", "holdhands"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
	},
	vivillonpokeball: {
		eventPokemon: [
			{"generation": 6, "level": 12, "isHidden": false, "moves": ["stunspore", "gust", "lightscreen", "strugglebug"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
	},
	litleo: {
		isNonstandard: "Past",
		tier: "LC",
	},
	pyroar: {
		eventPokemon: [
			{"generation": 6, "level": 49, "gender": "M", "perfectIVs": 2, "isHidden": false, "abilities": ["unnerve"], "moves": ["hypervoice", "fireblast", "darkpulse"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 6, "level": 30},
		],
		isNonstandard: "Past",
		tier: "NU",
	},
	flabebe: {
		isNonstandard: "Past",
		tier: "LC",
	},
	floette: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	floetteeternal: {
		isNonstandard: "Past",
		tier: "Illegal",
	},
	florges: {
		isNonstandard: "Past",
		tier: "RU",
	},
	skiddo: {
		isNonstandard: "Past",
		tier: "LC",
	},
	gogoat: {
		encounters: [
			{"generation": 6, "level": 30},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	pancham: {
		eventPokemon: [
			{"generation": 6, "level": 30, "gender": "M", "nature": "Adamant", "isHidden": false, "abilities": ["moldbreaker"], "moves": ["armthrust", "stoneedge", "darkpulse"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	pangoro: {
		randomBattleMoves: ["closecombat", "darkestlariat", "drainpunch", "gunkshot", "icepunch", "partingshot"],
		encounters: [
			{"generation": 7, "level": 24},
		],
		tier: "RU",
		doublesTier: "DOU",
	},
	furfrou: {
		isNonstandard: "Past",
		tier: "PU",
	},
	espurr: {
		unreleasedHidden: "Past",
		tier: "LC",
	},
	meowstic: {
		randomBattleMoves: ["lightscreen", "psychic", "reflect", "thunderwave", "yawn"],
		unreleasedHidden: true,
		tier: "PU",
		doublesTier: "DOU",
	},
	meowsticf: {
		randomBattleMoves: ["energyball", "nastyplot", "psychic", "shadowball", "thunderbolt"],
		tier: "PU",
		doublesTier: "DOU",
	},
	honedge: {
		tier: "LC",
	},
	doublade: {
		randomBattleMoves: ["ironhead", "sacredsword", "shadowclaw", "shadowsneak", "swordsdance"],
		tier: "NFE",
	},
	aegislash: {
		randomBattleMoves: ["closecombat", "ironhead", "kingsshield", "shadowball", "shadowsneak", "swordsdance"],
		eventPokemon: [
			{"generation": 6, "level": 50, "gender": "F", "nature": "Quiet", "moves": ["wideguard", "kingsshield", "shadowball", "flashcannon"], "pokeball": "cherishball"},
		],
		tier: "OU",
		doublesTier: "DOU",
	},
	aegislashblade: {
		requiredAbility: 'Stance Change',
		battleOnly: true,
	},
	spritzee: {
		tier: "LC",
	},
	aromatisse: {
		randomBattleMoves: ["aromatherapy", "lightscreen", "moonblast", "nastyplot", "reflect", "thunderbolt", "trickroom"],
		eventPokemon: [
			{"generation": 6, "level": 50, "nature": "Relaxed", "isHidden": true, "moves": ["trickroom", "healpulse", "disable", "moonblast"], "pokeball": "cherishball"},
		],
		tier: "NU",
		doublesTier: "DOU",
	},
	swirlix: {
		tier: "LC Uber",
	},
	slurpuff: {
		randomBattleMoves: ["calmmind", "dazzlinggleam", "energyball", "flamethrower"],
		tier: "RU",
		doublesTier: "DOU",
	},
	inkay: {
		eventPokemon: [
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["happyhour", "foulplay", "hypnosis", "topsyturvy"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	malamar: {
		randomBattleMoves: ["psychocut", "rest", "sleeptalk", "substitute", "superpower", "throatchop"],
		eventPokemon: [
			{"generation": 6, "level": 50, "nature": "Adamant", "ivs": {"hp": 31, "atk": 31}, "isHidden": false, "abilities": ["contrary"], "moves": ["superpower", "knockoff", "facade", "rockslide"], "pokeball": "cherishball"},
		],
		tier: "NU",
		doublesTier: "DOU",
	},
	binacle: {
		unreleasedHidden: "Past",
		tier: "LC",
	},
	barbaracle: {
		randomBattleMoves: ["crosschop", "earthquake", "liquidation", "shellsmash", "stoneedge"],
		encounters: [
			{"generation": 6, "level": 30},
		],
		unreleasedHidden: true,
		tier: "RU",
		doublesTier: "DOU",
	},
	skrelp: {
		isNonstandard: "Past",
		tier: "LC",
	},
	dragalge: {
		encounters: [
			{"generation": 6, "level": 35, "isHidden": false},
		],
		isNonstandard: "Past",
		tier: "RU",
	},
	clauncher: {
		isNonstandard: "Past",
		tier: "LC",
	},
	clawitzer: {
		encounters: [
			{"generation": 6, "level": 35, "isHidden": false},
		],
		isNonstandard: "Past",
		tier: "NU",
	},
	helioptile: {
		tier: "LC",
	},
	heliolisk: {
		randomBattleMoves: ["hypervoice", "grassknot", "raindance", "surf", "thunderbolt", "voltswitch"],
		tier: "RU",
		doublesTier: "DOU",
	},
	tyrunt: {
		eventPokemon: [
			{"generation": 6, "level": 10, "isHidden": true, "moves": ["tailwhip", "tackle", "roar", "stomp"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	tyrantrum: {
		isNonstandard: "Past",
		tier: "RU",
	},
	amaura: {
		eventPokemon: [
			{"generation": 6, "level": 10, "isHidden": true, "moves": ["growl", "powdersnow", "thunderwave", "rockthrow"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "LC",
	},
	amauradelta: {
		tier: "LC",
	},
	aurorus: {
		randomBattleMoves: ["ancientpower", "blizzard", "thunderwave", "earthpower", "freezedry", "hypervoice", "stealthrock"],
		randomDoubleBattleMoves: ["hypervoice", "ancientpower", "thunderwave", "flashcannon", "freezedry", "icywind", "protect"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	aurorusdelta: {
		tier: "RU",
	},
	sylveon: {
		randomBattleMoves: ["hypervoice", "calmmind", "psyshock", "hiddenpowerfire", "wish", "protect"],
		randomDoubleBattleMoves: ["hypervoice", "calmmind", "wish", "protect", "psyshock", "helpinghand", "shadowball", "hiddenpowerground"],
		eventPokemon: [
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["celebrate", "helpinghand", "sandattack", "fairywind"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "gender": "F", "isHidden": false, "moves": ["disarmingvoice", "babydolleyes", "quickattack", "drainingkiss"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "gender": "F", "isHidden": true, "moves": ["hyperbeam", "drainingkiss", "psyshock", "calmmind"], "pokeball": "cherishball"},
		],
		tier: "UU",
		doublesTier: "DUU",
	},
	hawlucha: {
		randomBattleMoves: ["acrobatics", "closecombat", "stoneedge", "substitute", "swordsdance"],
		tier: "OU",
		doublesTier: "DOU",
	},
	dedenne: {
		isNonstandard: "Past",
		tier: "PU",
	},
	carbink: {
		isNonstandard: "Past",
		tier: "PU",
	},
	goomy: {
		eventPokemon: [
			{"generation": 7, "level": 1, "shiny": 1, "isHidden": true, "moves": ["bodyslam", "dragonpulse", "counter"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	goomydelta: {
		tier: "LC",
	},
	sliggoo: {
		encounters: [
			{"generation": 6, "level": 30},
		],
		tier: "NFE",
	},
	sliggoodelta: {
		tier: "NFE",
	},
	goodra: {
		randomBattleMoves: ["dracometeor", "earthquake", "fireblast", "irontail", "outrage", "powerwhip"],
		tier: "UU",
		doublesTier: "DOU",
	},
	goodradelta: {
		tier: "RU",
	},
	klefki: {
		isNonstandard: "Past",
		tier: "UU",
	},
	phantump: {
		tier: "LC",
	},
	phantumpdelta: {
		tier: "LC",
	},
	trevenant: {
		randomBattleMoves: ["earthquake", "hornleech", "rockslide", "shadowclaw", "trickroom", "woodhammer"],
		tier: "PU",
		doublesTier: "DOU",
	},
	trevenantdelta: {
		tier: "PU",
	},
	pumpkaboo: {
		tier: "LC",
	},
	pumpkaboosmall: {
		unreleasedHidden: true,
		tier: "LC",
	},
	pumpkaboolarge: {
		unreleasedHidden: true,
		tier: "LC",
	},
	pumpkaboosuper: {
		eventPokemon: [
			{"generation": 6, "level": 50, "moves": ["trickortreat", "astonish", "scaryface", "shadowsneak"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	gourgeist: {
		randomBattleMoves: ["leechseed", "powerwhip", "shadowsneak", "substitute", "willowisp"],
		tier: "PU",
		doublesTier: "DOU",
	},
	gourgeistsmall: {
		randomBattleMoves: ["leechseed", "powerwhip", "shadowsneak", "substitute", "willowisp"],
		unreleasedHidden: true,
		tier: "PU",
		doublesTier: "DOU",
	},
	gourgeistlarge: {
		randomBattleMoves: ["leechseed", "powerwhip", "shadowsneak", "substitute", "willowisp"],
		unreleasedHidden: true,
		tier: "PU",
		doublesTier: "DOU",
	},
	gourgeistsuper: {
		randomBattleMoves: ["explosion", "foulplay", "powerwhip", "rockslide", "shadowsneak", "trick"],
		tier: "PU",
		doublesTier: "DOU",
	},
	bergmite: {
		unreleasedHidden: "Past",
		tier: "LC",
	},
	bergmitedelta: {
		tier: "LC",
	},
	avalugg: {
		randomBattleMoves: ["avalanche", "bodypress", "curse", "rapidspin", "recover"],
		unreleasedHidden: true,
		tier: "PU",
		doublesTier: "DOU",
	},
	avaluggdelta: {
		tier: "RU",
	},
	noibat: {
		unreleasedHidden: "Past",
		tier: "LC",
	},
	noibatdelta: {
		tier: "LC",
	},
	noivern: {
		randomBattleMoves: ["boomburst", "dracometeor", "flamethrower", "hurricane", "roost", "uturn"],
		unreleasedHidden: true,
		tier: "RU",
		doublesTier: "DOU",
	},
	noiverndelta: {
		tier: "RU",
	},
	xerneas: {
		eventPokemon: [
			{"generation": 6, "level": 50, "moves": ["gravity", "geomancy", "moonblast", "megahorn"]},
			{"generation": 6, "level": 100, "shiny": true, "moves": ["geomancy", "moonblast", "aromatherapy", "focusblast"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["geomancy", "hornleech", "nightslash", "moonblast"]},
			{"generation": 7, "level": 60, "moves": ["geomancy", "hornleech", "nightslash", "moonblast"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "moves": ["geomancy", "focusblast", "grassknot", "moonblast"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Uber",
	},
	yveltal: {
		eventPokemon: [
			{"generation": 6, "level": 50, "moves": ["snarl", "oblivionwing", "disable", "darkpulse"]},
			{"generation": 6, "level": 100, "shiny": true, "moves": ["oblivionwing", "suckerpunch", "darkpulse", "foulplay"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["oblivionwing", "darkpulse", "phantomforce", "psychic"]},
			{"generation": 7, "level": 60, "moves": ["oblivionwing", "darkpulse", "phantomforce", "psychic"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "moves": ["oblivionwing", "darkpulse", "heatwave", "tailwind"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Uber",
	},
	zygarde: {
		eventPokemon: [
			{"generation": 6, "level": 70, "moves": ["crunch", "earthquake", "camouflage", "dragonpulse"]},
			{"generation": 6, "level": 100, "moves": ["landswrath", "extremespeed", "glare", "outrage"], "pokeball": "cherishball"},
			{"generation": 7, "level": 30, "moves": ["safeguard", "dig", "bind", "landswrath"]},
			{"generation": 7, "level": 50, "moves": ["bind", "landswrath", "sandstorm", "haze"]},
			{"generation": 7, "level": 50, "isHidden": true, "moves": ["bind", "landswrath", "sandstorm", "haze"]},
			{"generation": 7, "level": 60, "shiny": true, "moves": ["landswrath", "glare", "safeguard", "dragonbreath"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": true, "isHidden": true, "moves": ["landswrath", "glare", "safeguard", "dragonbreath"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "shiny": true, "moves": ["thousandarrows", "outrage", "extremespeed", "dragondance"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "shiny": true, "isHidden": true, "moves": ["thousandarrows", "outrage", "extremespeed", "dragondance"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "OU",
	},
	zygarde10: {
		eventPokemon: [
			{"generation": 7, "level": 30, "moves": ["safeguard", "dig", "bind", "landswrath"]},
			{"generation": 7, "level": 50, "isHidden": true, "moves": ["safeguard", "dig", "bind", "landswrath"]},
			{"generation": 7, "level": 60, "shiny": true, "isHidden": true, "moves": ["landswrath", "glare", "safeguard", "dragonbreath"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "shiny": true, "isHidden": true, "moves": ["thousandarrows", "outrage", "extremespeed", "dragondance"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		gen: 7,
		isNonstandard: "Past",
		tier: "RU",
	},
	zygardecomplete: {
		gen: 7,
		requiredAbility: "Power Construct",
		battleOnly: true,
		isNonstandard: "Past",
		tier: "Uber",
	},
	diancie: {
		eventPokemon: [
			{"generation": 6, "level": 50, "perfectIVs": 0, "moves": ["diamondstorm", "reflect", "return", "moonblast"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "shiny": true, "moves": ["diamondstorm", "moonblast", "reflect", "return"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "RU",
	},
	dianciemega: {
		requiredItem: "Diancite",
		isNonstandard: "Past",
		tier: "OU",
	},
	hoopa: {
		eventPokemon: [
			{"generation": 6, "level": 50, "moves": ["hyperspacehole", "nastyplot", "psychic", "astonish"], "pokeball": "cherishball"},
			{"generation": 7, "level": 15, "moves": ["shadowball", "nastyplot", "psychic", "hyperspacehole"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "RU",
	},
	hoopadelta: {
		tier: "UU",
	},
	hoopaunbound: {
		eventOnly: true,
		isNonstandard: "Past",
		tier: "OU",
	},
	hoopadeltaunbound: {
		tier: "OU",
	},
	volcanion: {
		eventPokemon: [
			{"generation": 6, "level": 70, "moves": ["steameruption", "overheat", "hydropump", "mist"], "pokeball": "cherishball"},
			{"generation": 6, "level": 70, "moves": ["steameruption", "flamethrower", "hydropump", "explosion"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "UU",
	},
	rowlet: {
		tier: "LC",
	},
	dartrix: {
		tier: "NFE",
	},
	decidueye: {
		randomBattleMoves: ["leafblade", "shadowsneak", "spiritshackle", "swordsdance", "uturn"],
		eventPokemon: [
			{"generation": 7, "level": 50, "isHidden": true, "moves": ["leafblade", "phantomforce", "shadowsneak", "bravebird"], "pokeball": "pokeball"},
		],
		tier: "NU",
	},
	litten: {
		tier: "LC",
	},
	torracat: {
		tier: "NFE",
	},
	incineroar: {
		randomBattleMoves: ["darkestlariat", "earthquake", "fakeout", "flareblitz", "partingshot", "uturn"],
		eventPokemon: [
			{"generation": 7, "level": 50, "isHidden": true, "moves": ["fakeout", "uturn", "darkestlariat", "flareblitz"], "pokeball": "pokeball"},
		],
		tier: "NU",
	},
	popplio: {
		tier: "LC",
	},
	brionne: {
		tier: "NFE",
	},
	primarina: {
		randomBattleMoves: ["hydropump", "moonblast", "psychic", "sparklingaria", "energyball"],
		eventPokemon: [
			{"generation": 7, "level": 50, "isHidden": true, "moves": ["hypervoice", "moonblast", "icywind", "perishsong"], "pokeball": "pokeball"},
		],
		tier: "UU",
	},
	pikipek: {
		isNonstandard: "Past",
		tier: "LC",
	},
	trumbeak: {
		isNonstandard: "Past",
		tier: "NFE",
	},
	toucannon: {
		encounters: [
			{"generation": 7, "level": 26},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	yungoos: {
		isNonstandard: "Past",
		tier: "LC",
	},
	gumshoos: {
		encounters: [
			{"generation": 7, "level": 17},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	gumshoostotem: {
		eventPokemon: [
			{"generation": 7, "level": 20, "perfectIVs": 3, "moves": ["sandattack", "odorsleuth", "bide", "bite"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
	},
	grubbin: {
		tier: "LC",
	},
	charjabug: {
		tier: "NFE",
	},
	vikavolt: {
		randomBattleMoves: ["agility", "bugbuzz", "energyball", "stickyweb", "thunderbolt", "voltswitch"],
		tier: "NU",
		doublesTier: "DOU",
	},
	vikavolttotem: {
		eventPokemon: [
			{"generation": 7, "level": 35, "perfectIVs": 3, "moves": ["spark", "acrobatics", "guillotine", "bugbuzz"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Illegal",
	},
	crabrawler: {
		isNonstandard: "Past",
		tier: "LC",
	},
	crabominable: {
		isNonstandard: "Past",
		tier: "PU",
	},
	oricorio: {
		isNonstandard: "Past",
		tier: "PU",
	},
	oricoriopompom: {
		isNonstandard: "Past",
		tier: "PU",
	},
	oricoriopau: {
		isNonstandard: "Past",
		tier: "PU",
	},
	oricoriosensu: {
		isNonstandard: "Past",
		tier: "PU",
	},
	cutiefly: {
		tier: "LC Uber",
	},
	ribombee: {
		randomBattleMoves: ["aromatherapy", "moonblast", "stickyweb", "stunspore", "uturn"],
		tier: "RU",
		doublesTier: "DOU",
	},
	ribombeetotem: {
		eventPokemon: [
			{"generation": 7, "level": 50, "perfectIVs": 3, "moves": ["bugbuzz", "dazzlinggleam", "aromatherapy", "quiverdance"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Illegal",
	},
	rockruff: {
		isNonstandard: "Past",
		tier: "LC",
	},
	rockruffdusk: {
		eventPokemon: [
			{"generation": 7, "level": 10, "moves": ["tackle", "bite", "firefang", "happyhour"], "pokeball": "cherishball"},
			{"generation": 7, "level": 10, "moves": ["tackle", "bite", "thunderfang", "happyhour"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "Illegal",
	},
	lycanroc: {
		isNonstandard: "Past",
		tier: "PU",
	},
	lycanrocmidnight: {
		eventPokemon: [
			{"generation": 7, "level": 50, "isHidden": true, "moves": ["stoneedge", "firefang", "suckerpunch", "swordsdance"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "PU",
	},
	lycanrocdusk: {
		isNonstandard: "Past",
		tier: "RU",
	},
	wishiwashi: {
		randomBattleMoves: ["earthquake", "hydropump", "icebeam", "scald", "uturn"],
		tier: "PU",
		doublesTier: "DOU",
	},
	wishiwashischool: {
		randomBattleMoves: ["earthquake", "hydropump", "icebeam", "scald", "uturn"],
		requiredAbility: 'Schooling',
		battleOnly: true,
	},
	mareanie: {
		eventPokemon: [
			{"generation": 7, "level": 1, "shiny": 1, "isHidden": true, "moves": ["toxic", "stockpile", "swallow"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	toxapex: {
		randomBattleMoves: ["banefulbunker", "haze", "recover", "scald", "toxic", "toxicspikes"],
		tier: "OU",
		doublesTier: "DOU",
	},
	mudbray: {
		tier: "LC",
	},
	mudsdale: {
		randomBattleMoves: ["bodypress", "earthquake", "heavyslam", "rockslide", "stealthrock"],
		encounters: [
			{"generation": 7, "level": 29},
		],
		tier: "PU",
		doublesTier: "DOU",
	},
	dewpider: {
		tier: "LC",
	},
	araquanid: {
		randomBattleMoves: ["liquidation", "leechlife", "mirrorcoat", "reflect", "stickyweb"],
		tier: "RU",
		doublesTier: "DOU",
	},
	araquanidtotem: {
		eventPokemon: [
			{"generation": 7, "level": 25, "perfectIVs": 3, "moves": ["spiderweb", "bugbite", "bubblebeam", "bite"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Illegal",
	},
	fomantis: {
		isNonstandard: "Past",
		tier: "LC",
	},
	lurantis: {
		isNonstandard: "Past",
		tier: "PU",
	},
	lurantistotem: {
		eventPokemon: [
			{"generation": 7, "level": 30, "perfectIVs": 3, "moves": ["growth", "ingrain", "leafblade", "synthesis"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
	},
	morelull: {
		tier: "LC",
	},
	shiinotic: {
		randomBattleMoves: ["gigadrain", "leechseed", "moonblast", "spore", "strengthsap", "substitute"],
		tier: "PU",
		doublesTier: "DOU",
	},
	salandit: {
		tier: "LC",
	},
	salazzle: {
		randomBattleMoves: ["flamethrower", "protect", "substitute", "toxic"],
		eventPokemon: [
			{"generation": 7, "level": 50, "isHidden": false, "moves": ["fakeout", "toxic", "sludgebomb", "flamethrower"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 7, "level": 16},
		],
		tier: "RU",
		doublesTier: "DOU",
	},
	salazzletotem: {
		eventPokemon: [
			{"generation": 7, "level": 30, "perfectIVs": 3, "moves": ["smog", "doubleslap", "flameburst", "toxic"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Illegal",
	},
	stufful: {
		tier: "LC",
	},
	bewear: {
		randomBattleMoves: ["closecombat", "darkestlariat", "doubleedge", "icepunch", "swordsdance"],
		eventPokemon: [
			{"generation": 7, "level": 50, "gender": "F", "isHidden": true, "moves": ["babydolleyes", "brutalswing", "superpower", "bind"], "pokeball": "cherishball"},
		],
		tier: "RU",
		doublesTier: "DOU",
	},
	bounsweet: {
		tier: "LC",
	},
	steenee: {
		eventPokemon: [
			{"generation": 7, "level": 20, "nature": "Naive", "isHidden": false, "abilities": ["leafguard"], "moves": ["magicalleaf", "doubleslap", "sweetscent"], "pokeball": "cherishball"},
		],
		tier: "NFE",
	},
	tsareena: {
		randomBattleMoves: ["highjumpkick", "playrough", "powerwhip", "rapidspin", "synthesis", "uturn", "zenheadbutt"],
		tier: "RU",
		doublesTier: "DOU",
	},
	comfey: {
		eventPokemon: [
			{"generation": 7, "level": 10, "nature": "Jolly", "isHidden": false, "moves": ["celebrate", "leechseed", "drainingkiss", "magicalleaf"], "pokeball": "cherishball"},
		],
		isNonstandard: "Past",
		tier: "NU",
	},
	oranguru: {
		randomBattleMoves: ["nastyplot", "focusblast", "psychic", "thunderbolt", "trickroom"],
		eventPokemon: [
			{"generation": 7, "level": 1, "shiny": 1, "isHidden": false, "abilities": ["telepathy"], "moves": ["instruct", "psychic", "psychicterrain"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "isHidden": true, "moves": ["instruct", "foulplay", "trickroom", "allyswitch"], "pokeball": "pokeball"},
		],
		tier: "PU",
		doublesTier: "DOU",
	},
	passimian: {
		randomBattleMoves: ["closecombat", "earthquake", "gunkshot", "knockoff", "rockslide", "uturn"],
		eventPokemon: [
			{"generation": 7, "level": 1, "shiny": 1, "isHidden": false, "moves": ["bestow", "fling", "feint"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "isHidden": true, "moves": ["closecombat", "uturn", "knockoff", "gunkshot"], "pokeball": "pokeball"},
		],
		tier: "NU",
		doublesTier: "DOU",
	},
	wimpod: {
		tier: "LC",
	},
	golisopod: {
		randomBattleMoves: ["aquajet", "closecombat", "firstimpression", "liquidation", "spikes"],
		tier: "RU",
		doublesTier: "DOU",
	},
	sandygast: {
		isNonstandard: "Past",
		tier: "LC",
	},
	palossand: {
		isNonstandard: "Past",
		tier: "NU",
	},
	pyukumuku: {
		randomBattleMoves: ["counter", "mirrorcoat", "recover", "toxic"],
		tier: "PU",
		doublesTier: "DOU",
	},
	typenull: {
		randomBattleMoves: ["crushclaw", "payback", "rest", "sleeptalk", "swordsdance"],
		eventPokemon: [
			{"generation": 7, "level": 40, "shiny": 1, "perfectIVs": 3, "moves": ["crushclaw", "scaryface", "xscissor", "takedown"]},
			{"generation": 7, "level": 60, "shiny": 1, "perfectIVs": 3, "moves": ["metalsound", "ironhead", "doublehit", "airslash"]},
			{"generation": 8, "level": 50, "shiny": 1, "perfectIVs": 3, "moves": ["triattack", "xscissor", "ironhead", "takedown"]},
		],
		eventOnly: true,
		tier: "NFE",
	},
	silvally: {
		randomBattleMoves: ["crunch", "explosion", "flamethrower", "multiattack", "swordsdance", "uturn"],
		eventPokemon: [
			{"generation": 7, "level": 100, "shiny": true, "moves": ["multiattack", "partingshot", "punishment", "scaryface"], "pokeball": "cherishball"},
		],
		tier: "NU",
		doublesTier: "DOU",
	},
	silvallybug: {
		randomBattleMoves: ["flamethrower", "multiattack", "psychicfangs", "rockslide", "swordsdance", "thunderbolt", "uturn"],
		requiredItem: "Bug Memory",
		tier: "NU",
		doublesTier: "DOU",
	},
	silvallydark: {
		randomBattleMoves: ["ironhead", "multiattack", "psychicfangs", "swordsdance", "uturn"],
		requiredItem: "Dark Memory",
		tier: "NU",
		doublesTier: "DOU",
	},
	silvallydragon: {
		randomBattleMoves: ["firefang", "ironhead", "multiattack", "partingshot", "swordsdance"],
		requiredItem: "Dragon Memory",
		tier: "NU",
		doublesTier: "DOU",
	},
	silvallyelectric: {
		randomBattleMoves: ["flamethrower", "icebeam", "multiattack", "uturn"],
		requiredItem: "Electric Memory",
		tier: "NU",
		doublesTier: "DOU",
	},
	silvallyfairy: {
		randomBattleMoves: ["flamethrower", "multiattack", "partingshot", "psychicfangs", "thunderwave"],
		requiredItem: "Fairy Memory",
		tier: "NU",
		doublesTier: "DOU",
	},
	silvallyfighting: {
		randomBattleMoves: ["crunch", "ironhead", "multiattack", "rockslide", "swordsdance", "uturn"],
		requiredItem: "Fighting Memory",
		tier: "NU",
		doublesTier: "DOU",
	},
	silvallyfire: {
		randomBattleMoves: ["icebeam", "multiattack", "partingshot", "surf", "thunderbolt"],
		requiredItem: "Fire Memory",
		tier: "NU",
		doublesTier: "DOU",
	},
	silvallyflying: {
		randomBattleMoves: ["flamethrower", "ironhead", "multiattack", "partingshot", "rockslide", "swordsdance"],
		requiredItem: "Flying Memory",
		tier: "NU",
		doublesTier: "DOU",
	},
	silvallyghost: {
		randomBattleMoves: ["multiattack", "swordsdance", "thunderwave", "xscissor"],
		requiredItem: "Ghost Memory",
		tier: "NU",
		doublesTier: "DOU",
	},
	silvallygrass: {
		randomBattleMoves: ["flamethrower", "icebeam", "multiattack", "surf", "uturn"],
		requiredItem: "Grass Memory",
		tier: "NU",
		doublesTier: "DOU",
	},
	silvallyground: {
		randomBattleMoves: ["multiattack", "partingshot", "rockslide", "swordsdance", "xscissor"],
		requiredItem: "Ground Memory",
		tier: "NU",
		doublesTier: "DOU",
	},
	silvallyice: {
		randomBattleMoves: ["flamethrower", "multiattack", "thunderbolt", "uturn"],
		requiredItem: "Ice Memory",
		tier: "NU",
		doublesTier: "DOU",
	},
	silvallypoison: {
		randomBattleMoves: ["flamethrower", "multiattack", "partingshot", "psychicfangs", "surf", "thunderwave"],
		requiredItem: "Poison Memory",
		tier: "NU",
		doublesTier: "DOU",
	},
	silvallypsychic: {
		randomBattleMoves: ["crunch", "flamethrower", "multiattack", "swordsdance", "uturn", "xscissor"],
		requiredItem: "Psychic Memory",
		tier: "NU",
		doublesTier: "DOU",
	},
	silvallyrock: {
		randomBattleMoves: ["flamethrower", "multiattack", "partingshot", "psychicfangs", "surf", "thunderwave"],
		requiredItem: "Rock Memory",
		tier: "NU",
		doublesTier: "DOU",
	},
	silvallysteel: {
		randomBattleMoves: ["flamethrower", "multiattack", "partingshot", "thunderbolt", "thunderwave"],
		requiredItem: "Steel Memory",
		tier: "NU",
		doublesTier: "DOU",
	},
	silvallywater: {
		randomBattleMoves: ["icebeam", "multiattack", "partingshot", "thunderbolt", "thunderwave"],
		requiredItem: "Water Memory",
		tier: "NU",
		doublesTier: "DOU",
	},
	minior: {
		isNonstandard: "Past",
		tier: "NU",
	},
	miniormeteor: {
		requiredAbility: 'Shields Down',
		battleOnly: true,
		isNonstandard: "Past",
	},
	komala: {
		isNonstandard: "Past",
		tier: "PU",
	},
	turtonator: {
		randomBattleMoves: ["dracometeor", "dragonpulse", "earthquake", "fireblast", "rapidspin", "shellsmash"],
		eventPokemon: [
			{"generation": 7, "level": 1, "shiny": 1, "moves": ["flamethrower", "bodyslam", "wideguard"], "pokeball": "cherishball"},
			{"generation": 7, "level": 30, "gender": "M", "nature": "Brave", "moves": ["flamethrower", "shelltrap", "dragontail"], "pokeball": "cherishball"},
		],
		tier: "PU",
		doublesTier: "DOU",
	},
	togedemaru: {
		randomBattleMoves: ["ironhead", "nuzzle", "spikyshield", "uturn", "wish", "zingzap"],
		tier: "NU",
		doublesTier: "DOU",
	},
	togedemarutotem: {
		eventPokemon: [
			{"generation": 7, "level": 30, "perfectIVs": 3, "moves": ["nuzzle", "magnetrise", "discharge", "zingzap"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Illegal",
	},
	mimikyu: {
		randomBattleMoves: ["playrough", "shadowclaw", "shadowsneak", "swordsdance", "taunt"],
		eventPokemon: [
			{"generation": 7, "level": 10, "moves": ["copycat", "babydolleyes", "splash", "astonish"], "pokeball": "cherishball"},
			{"generation": 7, "level": 10, "shiny": true, "moves": ["astonish", "playrough", "copycat", "substitute"], "pokeball": "cherishball"},
		],
		tier: "UU",
		doublesTier: "DOU",
	},
	mimikyubusted: {
		requiredAbility: 'Disguise',
		battleOnly: true,
	},
	mimikyutotem: {
		eventPokemon: [
			{"generation": 7, "level": 40, "perfectIVs": 3, "moves": ["feintattack", "charm", "slash", "shadowclaw"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Illegal",
	},
	mimikyubustedtotem: {
		requiredAbility: 'Disguise',
		battleOnly: true,
		isNonstandard: "Past",
		tier: "Illegal",
	},
	bruxish: {
		isNonstandard: "Past",
		tier: "RU",
	},
	drampa: {
		randomBattleMoves: ["dracometeor", "fireblast", "focusblast", "glare", "hypervoice", "thunderbolt"],
		eventPokemon: [
			{"generation": 7, "level": 1, "shiny": 1, "isHidden": true, "moves": ["playnice", "echoedvoice", "hurricane"], "pokeball": "cherishball"},
		],
		tier: "PU",
		doublesTier: "DOU",
	},
	dhelmise: {
		randomBattleMoves: ["anchorshot", "earthquake", "powerwhip", "rapidspin", "shadowclaw", "swordsdance"],
		tier: "NU",
		doublesTier: "DOU",
	},
	jangmoo: {
		tier: "LC",
	},
	hakamoo: {
		tier: "NFE",
	},
	kommoo: {
		randomBattleMoves: ["aurasphere", "clangoroussoul", "clangingscales", "closecombat", "poisonjab", "stealthrock"],
		encounters: [
			{"generation": 7, "level": 41},
		],
		tier: "OU",
		doublesTier: "DOU",
	},
	kommoototem: {
		eventPokemon: [
			{"generation": 7, "level": 50, "perfectIVs": 3, "moves": ["workup", "screech", "irondefense", "dragonclaw"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Illegal",
	},
	tapukoko: {
		eventPokemon: [
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["naturesmadness", "discharge", "agility", "electroball"]},
			{"generation": 7, "level": 60, "shiny": true, "nature": "Timid", "isHidden": false, "moves": ["naturesmadness", "discharge", "agility", "electroball"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": true, "isHidden": false, "moves": ["thunderbolt", "dazzlinggleam", "voltswitch", "naturesmadness"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "OU",
	},
	tapulele: {
		eventPokemon: [
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["naturesmadness", "extrasensory", "flatter", "moonblast"]},
			{"generation": 7, "level": 60, "shiny": true, "isHidden": false, "moves": ["naturesmadness", "extrasensory", "flatter", "moonblast"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "OU",
	},
	tapubulu: {
		eventPokemon: [
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["naturesmadness", "zenheadbutt", "megahorn", "skullbash"]},
			{"generation": 7, "level": 60, "shiny": true, "isHidden": false, "moves": ["naturesmadness", "zenheadbutt", "megahorn", "skullbash"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "OU",
	},
	tapufini: {
		eventPokemon: [
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["naturesmadness", "muddywater", "aquaring", "hydropump"]},
			{"generation": 7, "level": 60, "shiny": true, "isHidden": false, "moves": ["naturesmadness", "muddywater", "aquaring", "hydropump"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "OU",
	},
	cosmog: {
		eventPokemon: [
			{"generation": 7, "level": 5, "moves": ["splash"]},
		],
		eventOnly: true,
		tier: "LC",
	},
	cosmoem: {
		tier: "NFE",
	},
	solgaleo: {
		randomBattleMoves: ["flareblitz", "morningsun", "psychicfangs", "stoneedge", "sunsteelstrike"],
		eventPokemon: [
			{"generation": 7, "level": 55, "moves": ["sunsteelstrike", "cosmicpower", "crunch", "zenheadbutt"]},
			{"generation": 7, "level": 60, "moves": ["sunsteelstrike", "cosmicpower", "crunch", "zenheadbutt"]},
			{"generation": 7, "level": 60, "shiny": true, "moves": ["sunsteelstrike", "zenheadbutt", "nobleroar", "morningsun"], "pokeball": "cherishball"},
		],
		tier: "Uber",
	},
	lunala: {
		randomBattleMoves: ["calmmind", "focusblast", "moongeistbeam", "moonlight", "psychic"],
		eventPokemon: [
			{"generation": 7, "level": 55, "moves": ["moongeistbeam", "cosmicpower", "nightdaze", "shadowball"]},
			{"generation": 7, "level": 60, "moves": ["moongeistbeam", "cosmicpower", "nightdaze", "shadowball"]},
			{"generation": 7, "level": 60, "shiny": true, "moves": ["moongeistbeam", "psyshock", "moonblast", "moonlight"], "pokeball": "cherishball"},
		],
		tier: "Uber",
	},
	nihilego: {
		eventPokemon: [
			{"generation": 7, "level": 55, "moves": ["powergem", "mirrorcoat", "acidspray", "venomdrench"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["powergem", "acidspray", "stealthrock", "mirrorcoat"]},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "UU",
	},
	buzzwole: {
		eventPokemon: [
			{"generation": 7, "level": 65, "moves": ["counter", "hammerarm", "lunge", "dynamicpunch"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["counter", "hammerarm", "lunge", "dynamicpunch"]},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "OU",
	},
	pheromosa: {
		eventPokemon: [
			{"generation": 7, "level": 60, "moves": ["triplekick", "lunge", "bugbuzz", "mefirst"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["triplekick", "lunge", "bugbuzz", "mefirst"]},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "Uber",
	},
	xurkitree: {
		eventPokemon: [
			{"generation": 7, "level": 65, "moves": ["hypnosis", "discharge", "electricterrain", "powerwhip"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["hypnosis", "discharge", "electricterrain", "powerwhip"]},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "OU",
	},
	celesteela: {
		eventPokemon: [
			{"generation": 7, "level": 65, "moves": ["autotomize", "seedbomb", "skullbash", "irondefense"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["autotomize", "seedbomb", "skullbash", "irondefense"]},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "OU",
	},
	kartana: {
		eventPokemon: [
			{"generation": 7, "level": 60, "moves": ["leafblade", "xscissor", "detect", "airslash"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["leafblade", "xscissor", "detect", "airslash"]},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "OU",
	},
	guzzlord: {
		eventPokemon: [
			{"generation": 7, "level": 70, "moves": ["thrash", "gastroacid", "heavyslam", "wringout"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["hammerarm", "thrash", "gastroacid", "heavyslam"]},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "NU",
	},
	necrozma: {
		randomBattleMoves: ["calmmind", "heatwave", "moonlight", "photongeyser", "stealthrock"],
		eventPokemon: [
			{"generation": 7, "level": 75, "moves": ["stealthrock", "irondefense", "wringout", "prismaticlaser"]},
			{"generation": 7, "level": 65, "moves": ["photongeyser", "irondefense", "powergem", "nightslash"]},
			{"generation": 7, "level": 75, "shiny": true, "moves": ["lightscreen", "substitute", "moonlight"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "UU",
	},
	necrozmaduskmane: {
		randomBattleMoves: ["dragondance", "earthquake", "photongeyser", "stealthrock", "sunsteelstrike"],
		eventOnly: true,
		tier: "Uber",
	},
	necrozmadawnwings: {
		randomBattleMoves: ["autotomize", "calmmind", "heatwave", "moongeistbeam", "photongeyser"],
		eventOnly: true,
		tier: "Uber",
	},
	necrozmaultra: {
		requiredItem: "Ultranecrozium Z",
		battleOnly: true,
		isNonstandard: "Past",
		tier: "Uber",
	},
	magearna: {
		eventPokemon: [
			{"generation": 7, "level": 50, "moves": ["fleurcannon", "flashcannon", "luckychant", "helpinghand"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "OU",
	},
	magearnaoriginal: {
		isNonstandard: "Past",
		tier: "Illegal",
	},
	marshadow: {
		randomBattleMoves: ["bulkup", "closecombat", "icepunch", "rocktomb", "shadowsneak", "spectralthief"],
		eventPokemon: [
			{"generation": 7, "level": 50, "moves": ["spectralthief", "closecombat", "forcepalm", "shadowball"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "Uber",
	},
	poipole: {
		eventPokemon: [
			{"generation": 7, "level": 40, "shiny": 1, "perfectIVs": 3, "moves": ["charm", "venomdrench", "nastyplot", "poisonjab"], "pokeball": "pokeball"},
			{"generation": 7, "level": 40, "shiny": true, "nature": "Modest", "perfectIVs": 3, "moves": ["venomdrench", "nastyplot", "poisonjab", "dragonpulse"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "LC",
	},
	naganadel: {
		isNonstandard: "Past",
		tier: "Uber",
	},
	stakataka: {
		eventPokemon: [
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["irondefense", "ironhead", "rockblast", "wideguard"]},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "UU",
	},
	blacephalon: {
		eventPokemon: [
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["fireblast", "shadowball", "trick", "mindblown"]},
		],
		eventOnly: true,
		isNonstandard: "Past",
		tier: "OU",
	},
	zeraora: {
		randomBattleMoves: ["bulkup", "closecombat", "grassknot", "plasmafists", "playrough", "voltswitch"],
		eventPokemon: [
			{"generation": 7, "level": 50, "moves": ["plasmafists", "thunderpunch", "closecombat", "thunder"]},
		],
		eventOnly: true,
		tier: "UU",
	},
	meltan: {
		tier: "LC",
	},
	melmetal: {
		randomBattleMoves: ["doubleironbash", "highhorsepower", "icepunch", "thunderpunch", "thunderwave"],
		tier: "OU",
	},
	melmetalgmax: {
		isGigantamax: "G-Max Meltdown",
		tier: "Unreleased",
	},
	grookey: {
		unreleasedHidden: true,
		tier: "LC",
	},
	thwackey: {
		unreleasedHidden: true,
		tier: "NFE",
	},
	rillaboom: {
		randomBattleMoves: ["bulkup", "drumbeating", "highhorsepower", "substitute", "superpower", "uturn"],
		unreleasedHidden: true,
		tier: "UU",
		doublesTier: "DOU",
	},
	scorbunny: {
		unreleasedHidden: true,
		tier: "LC",
	},
	raboot: {
		unreleasedHidden: true,
		tier: "NFE",
	},
	cinderace: {
		randomBattleMoves: ["courtchange", "gunkshot", "highjumpkick", "pyroball", "uturn", "zenheadbutt"],
		unreleasedHidden: true,
		tier: "OU",
		doublesTier: "DOU",
	},
	sobble: {
		unreleasedHidden: true,
		tier: "LC",
	},
	drizzile: {
		unreleasedHidden: true,
		tier: "NFE",
	},
	inteleon: {
		randomBattleMoves: ["airslash", "darkpulse", "hydropump", "icebeam", "scald", "uturn"],
		unreleasedHidden: true,
		tier: "NU",
		doublesTier: "DOU",
	},
	skwovet: {
		unreleasedHidden: true,
		tier: "LC",
	},
	greedent: {
		randomBattleMoves: ["bodyslam", "earthquake", "gyroball", "payback", "swordsdance"],
		unreleasedHidden: true,
		tier: "NU",
		doublesTier: "DOU",
	},
	rookidee: {
		tier: "LC",
	},
	corvisquire: {
		tier: "NFE",
	},
	corviknight: {
		randomBattleMoves: ["bodypress", "bravebird", "bulkup", "defog", "roost", "uturn"],
		tier: "UU",
		doublesTier: "DOU",
	},
	corviknightgmax: {
		isGigantamax: "G-Max Wind Rage",
		tier: "New",
		doublesTier: "DOU",
	},
	blipbug: {
		tier: "LC",
	},
	dottler: {
		tier: "NFE",
	},
	orbeetle: {
		randomBattleMoves: ["bodypress", "hypnosis", "psychic", "recover", "stickyweb", "uturn"],
		tier: "RU",
		doublesTier: "DOU",
	},
	orbeetlegmax: {
		isGigantamax: "G-Max Gravitas",
		tier: "New",
		doublesTier: "DOU",
	},
	nickit: {
		unreleasedHidden: true,
		tier: "LC",
	},
	thievul: {
		randomBattleMoves: ["darkpulse", "foulplay", "grassknot", "nastyplot", "partingshot", "psychic"],
		unreleasedHidden: true,
		tier: "PU",
		doublesTier: "DOU",
	},
	gossifleur: {
		tier: "LC",
	},
	eldegoss: {
		randomBattleMoves: ["aromatherapy", "charm", "energyball", "pollenpuff", "rapidspin", "sleeppowder", "synthesis"],
		tier: "PU",
		doublesTier: "DOU",
	},
	wooloo: {
		unreleasedHidden: true,
		tier: "LC",
	},
	dubwool: {
		randomBattleMoves: ["bodypress", "cottonguard", "rest", "sleeptalk"],
		unreleasedHidden: true,
		tier: "PU",
		doublesTier: "DOU",
	},
	chewtle: {
		tier: "LC",
	},
	drednaw: {
		randomBattleMoves: ["earthquake", "liquidation", "stoneedge", "superpower", "swordsdance"],
		tier: "RU",
		doublesTier: "DOU",
	},
	drednawgmax: {
		isGigantamax: "G-Max Stonesurge",
		tier: "New",
		doublesTier: "DOU",
	},
	yamper: {
		unreleasedHidden: true,
		tier: "LC",
	},
	boltund: {
		randomBattleMoves: ["bulkup", "crunch", "firefang", "playrough", "psychicfangs", "thunderfang", "voltswitch"],
		unreleasedHidden: true,
		tier: "NU",
		doublesTier: "DOU",
	},
	rolycoly: {
		tier: "LC",
	},
	carkol: {
		tier: "NFE",
	},
	coalossal: {
		randomBattleMoves: ["bodypress", "fireblast", "rapidspin", "spikes", "stealthrock", "stoneedge"],
		tier: "NU",
		doublesTier: "DOU",
	},
	coalossalgmax: {
		isGigantamax: "G-Max Volcalith",
		tier: "New",
		doublesTier: "DOU",
	},
	applin: {
		tier: "LC",
	},
	flapple: {
		randomBattleMoves: ["dragondance", "gravapple", "outrage", "suckerpunch", "uturn"],
		tier: "RU",
		doublesTier: "DOU",
	},
	flapplegmax: {
		isGigantamax: "G-Max Tartness",
		tier: "New",
		doublesTier: "DOU",
	},
	appletun: {
		randomBattleMoves: ["appleacid", "dracometeor", "leechseed", "recover", "substitute"],
		tier: "RU",
		doublesTier: "DOU",
	},
	appletungmax: {
		randomBattleMoves: ["appleacid", "dracometeor", "dragonpulse", "leechseed", "recover"],
		isGigantamax: "G-Max Sweetness",
		tier: "New",
		doublesTier: "DOU",
	},
	silicobra: {
		tier: "LC",
	},
	sandaconda: {
		randomBattleMoves: ["bodypress", "coil", "earthquake", "glare", "stealthrock", "stoneedge", "rest"],
		tier: "RU",
		doublesTier: "DOU",
	},
	sandacondagmax: {
		randomBattleMoves: ["bodypress", "earthquake", "glare", "stealthrock", "stoneedge"],
		isGigantamax: "G-Max Sandblast",
		tier: "New",
		doublesTier: "DOU",
	},
	cramorant: {
		randomBattleMoves: ["defog", "hurricane", "icebeam", "roost", "surf"],
		tier: "PU",
		doublesTier: "DOU",
	},
	cramorantgulping: {
		requiredAbility: "Gulp Missile",
		battleOnly: true,
	},
	cramorantgorging: {
		requiredAbility: "Gulp Missile",
		battleOnly: true,
	},
	arrokuda: {
		tier: "LC",
	},
	barraskewda: {
		randomBattleMoves: ["closecombat", "crunch", "drillrun", "liquidation", "poisonjab"],
		tier: "OU",
		doublesTier: "DOU",
	},
	toxel: {
		tier: "LC",
	},
	toxtricity: {
		randomBattleMoves: ["boomburst", "overdrive", "sludgewave", "shiftgear", "voltswitch"],
		tier: "UU",
		doublesTier: "DOU",
	},
	toxtricitylowkey: {
		randomBattleMoves: ["boomburst", "overdrive", "sludgewave", "voltswitch"],
		tier: "UU",
		doublesTier: "DOU",
	},
	toxtricitygmax: {
		isGigantamax: "G-Max Stun Shock",
		tier: "Unreleased",
	},
	sizzlipede: {
		tier: "LC",
	},
	centiskorch: {
		randomBattleMoves: ["coil", "firelash", "knockoff", "leechlife", "powerwhip"],
		tier: "NU",
		doublesTier: "DOU",
	},
	centiskorchgmax: {
		isGigantamax: "G-Max Centiferno",
		tier: "New",
		doublesTier: "DOU",
	},
	clobbopus: {
		tier: "LC",
	},
	grapploct: {
		randomBattleMoves: ["brutalswing", "circlethrow", "drainpunch", "icepunch", "suckerpunch"],
		tier: "NU",
		doublesTier: "DOU",
	},
	sinistea: {
		tier: "LC",
	},
	polteageist: {
		randomBattleMoves: ["gigadrain", "shadowball", "shellsmash", "storedpower", "strengthsap"],
		tier: "UU",
		doublesTier: "DOU",
	},
	hatenna: {
		tier: "LC",
	},
	hattrem: {
		tier: "NFE",
	},
	hatterene: {
		randomBattleMoves: ["calmmind", "dazzlinggleam", "mysticalfire", "psychic", "darkpulse", "trickroom"],
		tier: "UU",
		doublesTier: "DOU",
	},
	hatterenegmax: {
		randomBattleMoves: ["calmmind", "darkpulse", "dazzlinggleam", "mysticalfire", "psychic", "trickroom"],
		isGigantamax: "G-Max Smite",
		tier: "New",
		doublesTier: "DOU",
	},
	impidimp: {
		tier: "LC",
	},
	morgrem: {
		tier: "NFE",
	},
	grimmsnarl: {
		randomBattleMoves: ["bulkup", "darkestlariat", "drainpunch", "playrough", "thunderwave", "taunt"],
		tier: "RU",
		doublesTier: "DOU",
	},
	grimmsnarlgmax: {
		randomBattleMoves: ["bulkup", "darkestlariat", "playrough", "substitute", "suckerpunch", "thunderwave", "trick"],
		isGigantamax: "G-Max Snooze",
		tier: "New",
		doublesTier: "DOU",
	},
	milcery: {
		tier: "LC",
	},
	alcremie: {
		randomBattleMoves: ["aromatherapy", "calmmind", "dazzlinggleam", "mysticalfire", "psychic", "recover"],
		tier: "RU",
		doublesTier: "DOU",
	},
	alcremiegmax: {
		randomBattleMoves: ["calmmind", "dazzlinggleam", "mysticalfire", "psychic", "recover"],
		isGigantamax: "G-Max Finale",
		tier: "New",
		doublesTier: "DOU",
	},
	falinks: {
		randomBattleMoves: ["closecombat", "noretreat", "poisonjab", "rockslide", "throatchop"],
		tier: "RU",
		doublesTier: "DOU",
	},
	pincurchin: {
		randomBattleMoves: ["discharge", "recover", "selfdestruct", "spikes", "suckerpunch", "toxicspikes"],
		tier: "NU",
		doublesTier: "DOU",
	},
	snom: {
		tier: "LC",
	},
	frosmoth: {
		randomBattleMoves: ["bugbuzz", "hurricane", "icebeam", "quiverdance", "uturn"],
		tier: "NU",
		doublesTier: "DOU",
	},
	stonjourner: {
		randomBattleMoves: ["earthquake", "heatcrash", "rockpolish", "stealthrock", "stoneedge"],
		tier: "RU",
		doublesTier: "DOU",
	},
	eiscue: {
		randomBattleMoves: ["bellydrum", "iciclecrash", "liquidation", "zenheadbutt"],
		tier: "RU",
		doublesTier: "DOU",
	},
	eiscuenoice: {
		requiredAbility: "Ice Face",
		battleOnly: true,
	},
	indeedee: {
		randomBattleMoves: ["calmmind", "hypervoice", "mysticalfire", "psychic", "trick"],
		tier: "NU",
		doublesTier: "DOU",
	},
	indeedeef: {
		randomBattleMoves: ["aromatherapy", "calmmind", "hypervoice", "mysticalfire", "psychic"],
		tier: "NU",
		doublesTier: "DOU",
	},
	morpeko: {
		randomBattleMoves: ["aurawheel", "foulplay", "partingshot", "psychicfangs", "rapidspin", "superfang"],
		tier: "NU",
		doublesTier: "DOU",
	},
	morpekohangry: {
		requiredAbility: "Hunger Switch",
		battleOnly: true,
	},
	cufant: {
		tier: "LC",
	},
	copperajah: {
		randomBattleMoves: ["curse", "earthquake", "heatcrash", "heavyslam", "rest", "stealthrock"],
		tier: "RU",
		doublesTier: "DOU",
	},
	copperajahgmax: {
		randomBattleMoves: ["earthquake", "heatcrash", "heavyslam", "powerwhip", "stoneedge"],
		isGigantamax: "G-Max Steelsurge",
		tier: "New",
		doublesTier: "DOU",
	},
	dracozolt: {
		randomBattleMoves: ["aerialace", "boltbeak", "earthquake", "lowkick", "outrage"],
		unreleasedHidden: true,
		tier: "UU",
		doublesTier: "DOU",
	},
	arctozolt: {
		randomBattleMoves: ["boltbeak", "bulldoze", "freezedry", "iciclecrash", "lowkick"],
		unreleasedHidden: true,
		tier: "RU",
		doublesTier: "DOU",
	},
	dracovish: {
		randomBattleMoves: ["crunch", "fishiousrend", "icefang", "lowkick", "psychicfangs"],
		unreleasedHidden: true,
		tier: "OU",
		doublesTier: "DOU",
	},
	arctovish: {
		randomBattleMoves: ["bodyslam", "fishiousrend", "freezedry", "iciclecrash", "psychicfangs"],
		unreleasedHidden: true,
		tier: "RU",
		doublesTier: "DOU",
	},
	duraludon: {
		randomBattleMoves: ["bodypress", "dracometeor", "flashcannon", "stealthrock", "thunderbolt"],
		tier: "RU",
		doublesTier: "DOU",
	},
	duraludongmax: {
		isGigantamax: "G-Max Depletion",
		tier: "New",
		doublesTier: "DOU",
	},
	dreepy: {
		tier: "LC",
	},
	drakloak: {
		tier: "NFE",
	},
	dragapult: {
		randomBattleMoves: ["dracometeor", "fireblast", "shadowball", "thunderbolt", "uturn"],
		tier: "OU",
		doublesTier: "DOU",
	},
	zacian: {
		randomBattleMoves: ["closecombat", "crunch", "playrough", "psychicfangs", "swordsdance"],
		tier: "Uber",
		doublesTier: "DUber",
	},
	zaciancrowned: {
		randomBattleMoves: ["behemothblade", "closecombat", "crunch", "playrough", "psychicfangs", "swordsdance"],
		tier: "Uber",
		doublesTier: "DUber",
		requiredItem: "Rusted Sword",
	},
	zamazenta: {
		randomBattleMoves: ["closecombat", "crunch", "psychicfangs", "wildcharge"],
		tier: "Uber",
		doublesTier: "DUber",
	},
	zamazentacrowned: {
		randomBattleMoves: ["behemothbash", "closecombat", "crunch", "psychicfangs"],
		tier: "Uber",
		doublesTier: "DUber",
		requiredItem: "Rusted Shield",
	},
	eternatus: {
		randomBattleMoves: ["dynamaxcannon", "flamethrower", "recover", "sludgewave", "toxic"],
		tier: "Uber",
		doublesTier: "DUber",
	},
	eternatuseternamax: {
		isNonstandard: "Unobtainable",
		tier: "Illegal",
	},
	ufi: {
		tier: "OU",
	},
	missingno: {
		isNonstandard: "Custom",
		tier: "Illegal",
	},
	syclar: {
		isNonstandard: "CAP",
		gen: 4,
		tier: "CAP LC",
	},
	syclant: {
		isNonstandard: "CAP",
		gen: 4,
		tier: "CAP",
	},
	revenankh: {
		isNonstandard: "CAP",
		gen: 4,
		tier: "CAP",
	},
	embirch: {
		isNonstandard: "CAP",
		gen: 4,
		tier: "CAP LC",
	},
	flarelm: {
		isNonstandard: "CAP",
		gen: 4,
		tier: "CAP NFE",
	},
	pyroak: {
		isNonstandard: "CAP",
		gen: 4,
		tier: "CAP",
	},
	breezi: {
		isNonstandard: "CAP",
		gen: 4,
		tier: "CAP LC",
	},
	fidgit: {
		isNonstandard: "CAP",
		gen: 4,
		tier: "CAP",
	},
	rebble: {
		isNonstandard: "CAP",
		gen: 4,
		tier: "CAP LC",
	},
	tactite: {
		isNonstandard: "CAP",
		gen: 4,
		tier: "CAP NFE",
	},
	stratagem: {
		isNonstandard: "CAP",
		gen: 4,
		tier: "CAP",
	},
	privatyke: {
		isNonstandard: "CAP",
		gen: 4,
		tier: "CAP LC",
	},
	arghonaut: {
		isNonstandard: "CAP",
		gen: 4,
		tier: "CAP",
	},
	kitsunoh: {
		isNonstandard: "CAP",
		gen: 4,
		tier: "CAP",
	},
	cyclohm: {
		isNonstandard: "CAP",
		gen: 4,
		tier: "CAP",
	},
	colossoil: {
		isNonstandard: "CAP",
		gen: 4,
		tier: "CAP",
	},
	krilowatt: {
		isNonstandard: "CAP",
		gen: 4,
		tier: "CAP",
	},
	voodoll: {
		isNonstandard: "CAP",
		gen: 4,
		tier: "CAP LC",
	},
	voodoom: {
		isNonstandard: "CAP",
		gen: 4,
		tier: "CAP",
	},
	scratchet: {
		isNonstandard: "CAP",
		gen: 5,
		tier: "CAP LC",
	},
	tomohawk: {
		isNonstandard: "CAP",
		gen: 5,
		tier: "CAP",
	},
	necturine: {
		isNonstandard: "CAP",
		gen: 5,
		tier: "CAP LC",
	},
	necturna: {
		isNonstandard: "CAP",
		gen: 5,
		tier: "CAP",
	},
	mollux: {
		isNonstandard: "CAP",
		gen: 5,
		tier: "CAP",
	},
	cupra: {
		isNonstandard: "CAP",
		gen: 5,
		tier: "CAP LC",
	},
	argalis: {
		isNonstandard: "CAP",
		gen: 5,
		tier: "CAP NFE",
	},
	aurumoth: {
		isNonstandard: "CAP",
		gen: 5,
		tier: "CAP",
	},
	brattler: {
		isNonstandard: "CAP",
		gen: 5,
		tier: "CAP LC",
	},
	malaconda: {
		isNonstandard: "CAP",
		gen: 5,
		tier: "CAP",
	},
	cawdet: {
		isNonstandard: "CAP",
		gen: 5,
		tier: "CAP LC",
	},
	cawmodore: {
		isNonstandard: "CAP",
		gen: 5,
		tier: "CAP",
	},
	volkritter: {
		isNonstandard: "CAP",
		gen: 5,
		tier: "CAP LC",
	},
	volkraken: {
		isNonstandard: "CAP",
		gen: 5,
		tier: "CAP",
	},
	snugglow: {
		isNonstandard: "CAP",
		gen: 6,
		tier: "CAP LC",
	},
	plasmanta: {
		isNonstandard: "CAP",
		gen: 6,
		tier: "CAP",
	},
	floatoy: {
		isNonstandard: "CAP",
		gen: 6,
		tier: "CAP LC",
	},
	caimanoe: {
		isNonstandard: "CAP",
		gen: 6,
		tier: "CAP NFE",
	},
	naviathan: {
		isNonstandard: "CAP",
		gen: 6,
		tier: "CAP",
	},
	crucibelle: {
		isNonstandard: "CAP",
		gen: 6,
		tier: "CAP",
	},
	crucibellemega: {
		requiredItem: "Crucibellite",
		isNonstandard: "CAP",
		gen: 6,
		tier: "CAP",
	},
	pluffle: {
		isNonstandard: "CAP",
		gen: 6,
		tier: "CAP LC",
	},
	kerfluffle: {
		isNonstandard: "CAP",
		eventPokemon: [
			{"generation": 6, "level": 16, "isHidden": false, "abilities": ["naturalcure"], "moves": ["celebrate", "holdhands", "fly", "metronome"], "pokeball": "cherishball"},
		],
		gen: 6,
		tier: "CAP",
	},
	pajantom: {
		isNonstandard: "CAP",
		gen: 7,
		tier: "CAP",
	},
	mumbao: {
		isNonstandard: "CAP",
		gen: 7,
		tier: "CAP LC",
	},
	jumbao: {
		isNonstandard: "CAP",
		gen: 7,
		tier: "CAP",
	},
	fawnifer: {
		isNonstandard: "CAP",
		gen: 7,
		tier: "CAP LC",
	},
	electrelk: {
		isNonstandard: "CAP",
		gen: 7,
		tier: "CAP NFE",
	},
	caribolt: {
		isNonstandard: "CAP",
		eventPokemon: [
			{"generation": 7, "level": 50, "moves": ["celebrate", "hornleech", "wildcharge", "metronome"], "pokeball": "cherishball"},
		],
		gen: 7,
		tier: "CAP",
	},
	smogecko: {
		isNonstandard: "CAP",
		gen: 7,
		tier: "CAP LC",
	},
	smoguana: {
		isNonstandard: "CAP",
		gen: 7,
		tier: "CAP NFE",
	},
	smokomodo: {
		isNonstandard: "CAP",
		eventPokemon: [
			{"generation": 7, "level": 50, "moves": ["celebrate", "eruption", "magnitude", "camouflage"], "pokeball": "cherishball"},
		],
		gen: 7,
		tier: "CAP",
	},
	swirlpool: {
		isNonstandard: "CAP",
		gen: 7,
		tier: "CAP LC",
	},
	coribalis: {
		isNonstandard: "CAP",
		gen: 7,
		tier: "CAP NFE",
	},
	snaelstrom: {
		isNonstandard: "CAP",
		eventPokemon: [
			{"generation": 7, "level": 50, "moves": ["celebrate", "liquidation", "leechlife", "metronome"], "pokeball": "cherishball"},
		],
		gen: 7,
		tier: "CAP",
	},
	equilibra: {
		isNonstandard: "CAP",
		gen: 7,
		tier: "CAP",
	},
	pokestarsmeargle: {
		isNonstandard: "Custom",
		eventPokemon: [
			{"generation": 5, "level": 60, "gender": "M", "abilities": ["owntempo"], "moves": ["mindreader", "guillotine", "tailwhip", "gastroacid"]},
			{"generation": 5, "level": 30, "gender": "M", "abilities": ["owntempo"], "moves": ["outrage", "magiccoat"]},
			{"generation": 5, "level": 99, "gender": "M", "abilities": ["owntempo"], "moves": ["nastyplot", "sheercold", "attract", "shadowball"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarufo: {
		isNonstandard: "Custom",
		eventPokemon: [
			{"generation": 5, "level": 38, "moves": ["bubblebeam", "counter", "recover", "signalbeam"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarufo2: {
		isNonstandard: "Custom",
		eventPokemon: [
			{"generation": 5, "level": 47, "moves": ["darkpulse", "flamethrower", "hyperbeam", "icebeam"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarbrycenman: {
		isNonstandard: "Custom",
		eventPokemon: [
			{"generation": 5, "level": 56, "moves": ["icebeam", "nightshade", "psychic", "uturn"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarmt: {
		isNonstandard: "Custom",
		eventPokemon: [
			{"generation": 5, "level": 63, "moves": ["earthquake", "ironhead", "spark", "surf"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarmt2: {
		isNonstandard: "Custom",
		eventPokemon: [
			{"generation": 5, "level": 72, "moves": ["dragonpulse", "flamethrower", "metalburst", "thunderbolt"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestartransport: {
		isNonstandard: "Custom",
		eventPokemon: [
			{"generation": 5, "level": 20, "moves": ["clearsmog", "flameburst", "discharge"]},
			{"generation": 5, "level": 50, "moves": ["iciclecrash", "overheat", "signalbeam"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestargiant: {
		isNonstandard: "Custom",
		eventPokemon: [
			{"generation": 5, "level": 99, "moves": ["crushgrip", "focuspunch", "growl", "rage"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestargiant2: {
		isNonstandard: "Custom",
		eventPokemon: [
			{"generation": 5, "level": 99, "moves": ["crushgrip", "doubleslap", "teeterdance", "stomp"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarhumanoid: {
		isNonstandard: "Custom",
		eventPokemon: [
			{"generation": 5, "level": 20, "gender": "M", "moves": ["scratch", "shadowclaw", "acid"]},
			{"generation": 5, "level": 30, "gender": "M", "moves": ["darkpulse", "shadowclaw", "slash"]},
			{"generation": 5, "level": 20, "gender": "F", "moves": ["acid", "nightslash"]},
			{"generation": 5, "level": 20, "gender": "M", "moves": ["acid", "doubleedge"]},
			{"generation": 5, "level": 20, "gender": "F", "moves": ["acid", "rockslide"]},
			{"generation": 5, "level": 20, "gender": "M", "moves": ["acid", "thudnerpunch"]},
			{"generation": 5, "level": 20, "gender": "F", "moves": ["acid", "icepunch"]},
			{"generation": 5, "level": 40, "gender": "F", "moves": ["explosion", "selfdestruct"]},
			{"generation": 5, "level": 40, "gender": "F", "moves": ["shadowclaw", "scratch"]},
			{"generation": 5, "level": 40, "gender": "M", "moves": ["nightslash", "scratch"]},
			{"generation": 5, "level": 40, "gender": "M", "moves": ["doubleedge", "scratch"]},
			{"generation": 5, "level": 40, "gender": "F", "moves": ["rockslide", "scratch"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarmonster: {
		isNonstandard: "Custom",
		eventPokemon: [
			{"generation": 5, "level": 50, "moves": ["darkpulse", "confusion"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarf00: {
		isNonstandard: "Custom",
		eventPokemon: [
			{"generation": 5, "level": 10, "moves": ["teeterdance", "growl", "flail", "chatter"]},
			{"generation": 5, "level": 58, "moves": ["needlearm", "headsmash", "headbutt", "defensecurl"]},
			{"generation": 5, "level": 60, "moves": ["hammerarm", "perishsong", "ironhead", "thrash"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarf002: {
		isNonstandard: "Custom",
		eventPokemon: [
			{"generation": 5, "level": 52, "moves": ["flareblitz", "ironhead", "psychic", "wildcharge"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarspirit: {
		isNonstandard: "Custom",
		eventPokemon: [
			{"generation": 5, "level": 99, "moves": ["crunch", "dualchop", "slackoff", "swordsdance"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarblackdoor: {
		isNonstandard: "Custom",
		eventPokemon: [
			{"generation": 5, "level": 53, "moves": ["luckychant", "amnesia", "ingrain", "rest"]},
			{"generation": 5, "level": 70, "moves": ["batonpass", "counter", "flamecharge", "toxic"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarwhitedoor: {
		isNonstandard: "Custom",
		eventPokemon: [
			{"generation": 5, "level": 7, "moves": ["batonpass", "inferno", "mirrorcoat", "toxic"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarblackbelt: {
		isNonstandard: "Custom",
		eventPokemon: [
			{"generation": 5, "level": 30, "moves": ["focuspunch", "machpunch", "taunt"]},
			{"generation": 5, "level": 40, "moves": ["machpunch", "hammerarm", "jumpkick"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestargiantpropo2: {
		isNonstandard: "Custom",
		eventPokemon: [
			{"generation": 5, "level": 99, "moves": ["crushgrip", "doubleslap", "teeterdance", "stomp"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarufopropu2: {
		isNonstandard: "Custom",
		eventPokemon: [
			{"generation": 5, "level": 47, "moves": ["darkpulse", "flamethrower", "hyperbeam", "icebeam"]},
		],
		gen: 5,
		tier: "Illegal",
	},
};

exports.BattleFormatsData = BattleFormatsData;
