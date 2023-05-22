export class ItemObject {
    constructor(props) {
        this.type = props.type;
        this.colors = props.colors;
        this.name = props.name;
        this.desc = props.desc;
        this.stats = props.stats;
    }
}

export class RankObject {
    constructor(props) {
        this.rank = props.rank;
        this.tiers = props.tiers;
        this.fee = props.fee;
        this.threshold = props.threshold;
    }
}

export class ChampObject {
    constructor(props) {
        this.name = props.name;
        this.abilities = props.abilities;
        this.stats = props.stats;
    }
}

var GameData = {
    itemlist: [],
    itemtypes: { CDR: "CHRONO", CRIT: "SNAP", DMG: "SHARP", HP: "BULKY", LS: "VAMP" },
    ranks: [],
    champs: [],
    extrastats: {
        Boots: {
            stat: { white: 15, green: 30, blue: 45, purple: 60, yellow: 75 },
            desc: "% Move Speed"
        },
        Backpack: {
            stat: { white: 10, green: 20, blue: 30, purple: 40, yellow: 50 },
            desc: "% Base HP"
        },
        Hat: {
            stat: { white: 15, green: 30, blue: 45, purple: 60, yellow: 75 },
            desc: " CDR"
        }
    }
}

// Champs Data

var Chuck = {
    name: "Chuck",
    nickName: "Chuck.",
    abilities: {
        basic: {
            name: "Chuck Punch",
            desc: "Punch for a 3-hit combo. Hitting an opponent will grant you a Knock stack."
        },
        special: {
            name: "Chuck Knock",
            desc: "Throw a powerful punch. Inflict stun if you have full Knock stacks."
        },
        movement: {
            name: "Chuck Jump",
            desc: "Jump to a location. Apply knock up on land."
        },
        ultimate: {
            name: "CHUCK!!!!",
            desc: "Become gigantic and get a hp, damage and speed buff."
        }
    }
}

var Anna = {
    name: "Anna",
    nickName: "Speedy Graffitier",
    abilities: {
        basic: {
            name: "Run N' Gun",
            desc: "Fire 4 smal bullets."
        },
        special: {
            name: "Eat Lead",
            desc: "Fire 3 big bullets at once. Reset CYA! on hit."
        },
        movement: {
            name: "CYA!",
            desc: "Perform a quick dash."
        },
        ultimate: {
            name: "Bullet Hell",
            desc: "Spin and shoot everything around you. Apply slow on hit."
        }
    }
}

var Zook = {
    name: "Zook",
    nickName: "Stylish Arms Dealer",
    abilities: {
        basic: {
            name: "Bazooka",
            desc: "Fire a rocket that explodes on impact."
        },
        special: {
            name: "Locked On",
            desc: "Fire a homing missile that tracks targets."
        },
        movement: {
            name: "Gotta Blast",
            desc: "Blast the ground to launch yourself to a location. Apply knock up on hit."
        },
        ultimate: {
            name: "Mine your step",
            desc: "Throw proximity mines on the ground. Apply slow on hit."
        }
    }
}

var Kitsu = {
    name: "Kitsu",
    nickName: "Fox Huntress",
    abilities: {
        basic: {
            name: "Violet Strike",
            desc: "Shoot an energy arrow."
        },
        special: {
            name: "Mooncall",
            desc: "Rain down arrows in an area. Apply slow on hit."
        },
        movement: {
            name: "Foxtrot",
            desc: "Shoot the ground to jump away. Apply knock up on hit."
        },
        ultimate: {
            name: "Shooting Stars",
            desc: "Shoot a piercing arrow through obstacles and enemies. Apply root on hit."
        }
    }
}

var Sashimi = {
    name: "Sashimi",
    nickName: "Upgraded Fishtank",
    abilities: {
        basic: {
            name: "Chop Chop",
            desc: "Punch for a 3-hit combo."
        },
        special: {
            name: "Ginger Aftertaste",
            desc: "Clap enemies in front of you. Apply stun and weaken on hit."
        },
        movement: {
            name: "Sushi Roll",
            desc: "Charge a dash, deal damage and slow targets along the way."
        },
        ultimate: {
            name: "Tempura Shock",
            desc: "Jump and slam into an area. On hit, knock up enemies and shield yourself and allies."
        }
    }
}

var Kiddo = {
    name: "Kiddo",
    nickName: "Pyro Prodigy",
    abilities: {
        basic: {
            name: "Light it up",
            desc: "Light up an area."
        },
        special: {
            name: "It's Lit",
            desc: "Turn an area into an expanding fire. Apply burn and slow on hit."
        },
        movement: {
            name: "Flame on",
            desc: "Activate a fire shield."
        },
        ultimate: {
            name: "Blaze it",
            desc: "Send a huge meteorite crashing into the ground."
        }
    }
}

var Skinny = {
    name: "Skinny",
    nickName: "Shadow Walker",
    abilities: {
        basic: {
            name: "Reap",
            desc: "Slash for a 2-hit combo."
        },
        special: {
            name: "Claw",
            desc: "Slice the ground. Apply Exposed on hit."
        },
        movement: {
            name: "Shadow Walk",
            desc: "Become invisible and gain speed."
        },
        ultimate: {
            name: "RIP",
            desc: "Dash forward and slash in front of you."
        }
    }
}

var Froggy = {
    name: "Froggy",
    nickName: "Swamp Master",
    abilities: {
        basic: {
            name: "Ribbhit",
            desc: "Slash for a 3-hit combo."
        },
        special: {
            name: "MLEM",
            desc: "Stick to a target with your tongue. Apply slow on hit."
        },
        movement: {
            name: "Hip Hop",
            desc: "Leap to a location, inflict slow when landing."
        },
        ultimate: {
            name: "Slice N' Dice",
            desc: "Dash forward and deal hgih damage to opponents along the way."
        }
    }
}

var Teevee = {
    name: "Teevee",
    nickName: "D34D_B33F.exe",
    abilities: {
        basic: {
            name: "Hello World",
            desc: "Shoot out a digital wave."
        },
        special: {
            name: "Raycast",
            desc: "Shoot out a beam. Apply slow on hit."
        },
        movement: {
            name: "Ctrl+C & Ctrl+V",
            desc: "Teleport to a location and create a clone at your original position. Recast to swap positions with your clone."
        },
        ultimate: {
            name: "memcpy",
            desc: "Create a clone at a location. Recast to swap positions with your clone."
        }
    }
}

var Sofia = {
    name: "Sofia",
    nickName: "Blaze Bandit",
    abilities: {
        basic: {
            name: "Fire Slash",
            desc: "Slash for a 3-hit combo."
        },
        special: {
            name: "Reflect Stance",
            desc: "Counters attacks and reflexts projectiles."
        },
        movement: {
            name: "Fiery Dash",
            desc: "Dash forward, setting your katana on fire. Recast upon hitting an enemy up to 3 times."
        },
        ultimate: {
            name: "Flamestrike",
            desc: "Hurl a fiery projectile with your katana. Flamestrike is charged by hitting opponents with Fire Slash."
        }
    }

}


GameData.champs.push(new ChampObject(Chuck))
GameData.champs.push(new ChampObject(Anna))
GameData.champs.push(new ChampObject(Zook))
GameData.champs.push(new ChampObject(Kitsu))
GameData.champs.push(new ChampObject(Sashimi))
GameData.champs.push(new ChampObject(Kiddo))
GameData.champs.push(new ChampObject(Skinny))
GameData.champs.push(new ChampObject(Froggy))
GameData.champs.push(new ChampObject(Teevee))
GameData.champs.push(new ChampObject(Sofia))


// Ranks Data

var Bronze = {
    rank: "Bronze",
    tiers: ["I", "II", "III"],
    fee: 2,
    threshold: 100
}

var Silver = {
    rank: "Silver",
    tiers: ["I", "II", "III"],
    fee: 5,
    threshold: 400
}

var Gold = {
    rank: "Gold",
    tiers: ["I", "II", "III"],
    fee: 8,
    threshold: 700
}

var Platinum = {
    rank: "Platinum",
    tiers: ["I", "II", "III"],
    fee: 11,
    threshold: 1000
}

var Diamond = {
    rank: "Diamond",
    tiers: ["I", "II", "III"],
    fee: 14,
    threshold: 1300
}

var Royal = {
    rank: "Royal",
    tiers: ["I", "II", "III"],
    fee: 17,
    threshold: 1600
}

// var Divine = {
//     rank: "Divine",
//     tiers: [""],
//     fee: 20,
//     threshold: "Divine"
// }

GameData.ranks.push(new RankObject(Bronze))
GameData.ranks.push(new RankObject(Silver))
GameData.ranks.push(new RankObject(Gold))
GameData.ranks.push(new RankObject(Platinum))
GameData.ranks.push(new RankObject(Diamond))
GameData.ranks.push(new RankObject(Royal))
// GameData.ranks.push(new RankObject(Divine))

// Items Data

var CDRItem = {
    type: "CDR",
    colors: ["white", "green", "blue", "purple", "yellow"],
    name: "Chrono",
    desc: "CDR",
    stats: { white: "20", green: "40", blue: "60", purple: "80", yellow: "100" }
}

var CRITItem = {
    type: "CRIT",
    colors: ["white", "green", "blue", "purple", "yellow"],
    name: "Snap",
    desc: "ATK Speed",
    stats: { white: "10%", green: "20%", blue: "30%", purple: "40%", yellow: "50%" }
}

var ATKItem = {
    type: "DMG",
    colors: ["white", "green", "blue", "purple", "yellow"],
    name: "Sharp",
    desc: "Damage",
    stats: { white: "25", green: "50", blue: "75", purple: "100", yellow: "125" }
}

var HPItem = {
    type: "HP",
    colors: ["white", "green", "blue", "purple", "yellow"],
    name: "Bulky",
    desc: "Health",
    stats: { white: "100", green: "200", blue: "300", purple: "400", yellow: "500" }
}

var LSItem = {
    type: "LS",
    colors: ["white", "green", "blue", "purple", "yellow"],
    name: "Vamp",
    desc: "Lifesteal",
    stats: { white: "20%", green: "25%", blue: "30%", purple: "35%", yellow: "40%" }
}


GameData.itemlist.push(new ItemObject(CDRItem))
GameData.itemlist.push(new ItemObject(CRITItem))
GameData.itemlist.push(new ItemObject(ATKItem))
GameData.itemlist.push(new ItemObject(HPItem))
GameData.itemlist.push(new ItemObject(LSItem))


export default GameData
