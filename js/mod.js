let modInfo = {
	name: "Anti-softcap anti-scaling tree",
	id: "asast",
	author: "4294967296 / loader3229",
	pointsName: "points",
	modFiles: ["layers/A.js", "layers/B.js","layers/C.js","layers/D.js","layers/E.js","layers/F.js","layers/G.js","layers/H.js","layers/I.js","layers/J.js","layers/Z.js","layers/ach.js","tree.js",],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 8760,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.7.2",
	name: "more about break infinity",
}

let changelog = ``

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)
        
	let gain = new Decimal(1)
	gain = gain.mul(hasUpgrade("A",11)?upgradeEffect("A",11):1)
	gain = gain.mul(hasUpgrade("A",15)?upgradeEffect("A",15):1)
	gain = gain.mul(hasUpgrade("A",24)?upgradeEffect("A",24):1)
	gain = gain.mul(hasUpgrade("A",35)?upgradeEffect("A",35):1)
	gain = gain.mul(hasUpgrade("B",11)?upgradeEffect("B",11):1)
	gain = gain.mul(hasUpgrade("B",21)?upgradeEffect("B",21):1)
	gain = gain.mul(hasUpgrade("B",44)?upgradeEffect("B",44):1)
	gain = gain.mul(hasUpgrade("B",52)?upgradeEffect("B",52):1)

	gain = gain.mul(hasUpgrade("C",11)?upgradeEffect("C",11):1)
	gain = gain.mul(hasUpgrade("C",13)?upgradeEffect("C",13):1)
	gain = gain.mul(hasUpgrade("D",11)?upgradeEffect("D",11):1)
	gain = gain.mul(hasUpgrade("D",15)?upgradeEffect("D",15):1)
	gain = gain.mul(hasUpgrade("D",21)?upgradeEffect("D",21):1)
	gain = gain.mul(hasUpgrade("D",24)?upgradeEffect("D",24):1)
	gain = gain.mul(hasUpgrade("D",32)?upgradeEffect("D",32):1)
	gain = gain.mul(hasUpgrade("E",11)?upgradeEffect("E",11):1)
	gain = gain.mul(hasUpgrade("E",12)?upgradeEffect("E",12):1)
	gain = gain.mul(hasUpgrade("E",22)?upgradeEffect("E",22):1)
	gain = gain.mul(hasUpgrade("C",33)?upgradeEffect("C",33):1)
	gain = gain.mul(hasUpgrade("D",43)?upgradeEffect("D",43):1)
	gain = gain.mul(hasUpgrade("E",85)?upgradeEffect("E",85):1)
	gain = gain.mul(hasUpgrade("E",104)?upgradeEffect("E",104):1)
	gain = gain.mul(hasUpgrade("F",11)?upgradeEffect("F",11):1)

	if (inChallenge("A", 11))  gain = gain.pow(0.75)
	if (inChallenge("A", 21))  gain = gain.pow(0.55)
	if (inChallenge("A", 31))  gain = gain.pow(0.5)
	if (inChallenge("C", 11))  gain = gain.pow(0.45)
	if (inChallenge("E", 22))  gain = gain.pow(player.points.add(10).log(10).pow(-0.06).max('1e-100'))
	if (inChallenge("E", 32))  gain = gain.pow(player.E.Em.add(10).log(10).pow(-0.2).max('1e-100'))
	if (inChallenge("E", 42))  gain = gain.pow(player.points.add(10).log(10).pow(-0.12).max('1e-100'))
	if (inChallenge("F", 12))  gain = Decimal.pow(10,gain.add(10).log(10).pow(0.8).max('1e-100'))

	if (hasChallenge("A", 21))  gain = gain.mul(50)
	if (hasChallenge("A", 22))  gain = gain.mul(100)
	if (hasChallenge("C", 11))  gain = gain.mul(2000)
	if (hasChallenge("C", 12))  gain = gain.mul(8000)
	if (hasChallenge("A", 41))  gain = gain.mul(challengeEffect('A',41))
		
	if(hasMilestone("Z",11)){
		if (hasChallenge("E", 21))  gain = gain.mul(challengeEffect('E',21))
		if (hasChallenge("E", 22))  gain = gain.mul(challengeEffect('E',22))
	}
	if (hasUpgrade("F", 14))  gain = gain.pow(1.0012)
	if (hasUpgrade("F", 52))  gain = gain.pow(1.002)
	if (hasUpgrade("F", 65))  gain = gain.pow(1.006)
	if (mil("I",0))  gain = gain.pow(1.01)
	if (mil("I",1))  gain = gain.pow(1.02)
	if (mil('I',3))  gain = gain.pow(buyableEffect('I',12))
	if(n(challengeCompletions('I',22)).gte(1))  gain = gain.pow(1.25)

	if(hasMilestone("Z",12)){
		gain = gain.pow(1.25)
	}else if(hasMilestone("Z",11)){
		gain = gain.pow(1.234321)
		if (hasUpgrade("F", 11))  gain = gain.pow(1.0016)
	}else{
		if (hasChallenge("A", 32))  gain = gain.pow(1.01)
		if (hasChallenge("C", 11))  gain = gain.pow(1.01)
		if(hasMilestone("Z", 3))gain = gain.pow(1.05)
		if(hasMilestone("Z", 4))gain = gain.pow(1.02)
		if (hasChallenge("E", 21))  gain = gain.mul(challengeEffect('E',21))
		if (hasChallenge("E", 22))  gain = gain.mul(challengeEffect('E',22))
	}


	if (mil('G',14)&&gain.gte('10^^5'))  gain=n(10).pow(n(10).pow(n(10).pow(n(10).pow(gain.log(10).log(10).log(10).log(10).add(tmp.G.gsre)))))
		
	let tet=n(0)
	if(gcs('I',124))  tet=tet.add(0.3)
	if(gcs('I',125))  tet=tet.add(0.5)
	if(gcs('I',135))  tet=tet.add(1)
	if(mil('J',8)) tet=tet.mul(2)
	if(mil('J',11)) tet=tet.mul(tmp.J.ssef)
	if(mil('I',23)) tet=tet.mul(tmp.I.hief[4])
	if(gcs('I',311)) {if(gain.gte('10^^25')&&mil('I',21)) gain=n(10).tetrate(gain.max(10).slog().add(tet))
		else if(gain.gte('10^^10')&&gba('J',101).gte(23)) gain=n(10).tetrate(gain.max(10).slog().add(tet))
		else gain=n(10).tetrate(gain.max(10).slog().sub(tmp.I.resv[0]).max(0))}
	else{if(gain.gte('10^^10'))  gain=n(10).tetrate(gain.max(10).slog().add(tet))}
//
	gain=gain.min(tmp.H.php)
	
	
	gain = gain.min([1e100,1e250,"1e450","1e700","1e1000","1e1400","1e2740","1e4300","1e10100","1e22600","1e45100","1e99100","1e360100","1e650100","e56e5","e15e6","ee10"][player.Z.points.toNumber()]);
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	'Original author: 4294967296 / Mod author: loader3229',
	function() {
		let s='Current Endgame: e1.5e7'
		if(upg('G',155)||mil('I',0)) s=s+"<br><h4 style='color: #C52C14'>points gain is hardcapped at "+format(tmp.H.php)+"."
		return s},//<br> points is hardcapped at 1F100.
]
// Determines when the game "ends"
function isEndgame() {
	return player.points.gte('e1.5e7')
}

//<br> bilibili: @bili_50929957100 / @loader3229

// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(1e10) // Default is 100 hour which is just arbitrarily large
}//1e8

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}