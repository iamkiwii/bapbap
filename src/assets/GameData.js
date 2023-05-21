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

var GameData = {
    itemlist: [],
    ranks: []
}

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
    desc: "Attack Speed",
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
