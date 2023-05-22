export class ActiveItemObject {
    constructor(props) {
        this.name = props.name;
        this.isActive = props.isActive;
    }
    disableActive() {
        this.isActive = false
    }
    enableActive() {
        this.isActive = true
    }
}


var Hat = {
    name: "Hat",
    isActive: true
}

var Backpack = {
    name: "Backpack",
    isActive: false
}

var Boots = {
    name: "Boots",
    isActive: false
}



var UserData = {
    ActiveItems: [],
    ActiveChamps: [],
    CurrentActive: "Hat",
    CurrentActiveChamp: "Chuck"
}


UserData.ActiveItems.push(new ActiveItemObject(Hat));
UserData.ActiveItems.push(new ActiveItemObject(Backpack));
UserData.ActiveItems.push(new ActiveItemObject(Boots));


export class ActiveChampObject {
    constructor(props) {
        this.name = props.name;
        this.nickName = props.nickName;
        this.isActive = props.isActive;
    }
    disableActive() {
        this.isActive = false
    }
    enableActive() {
        this.isActive = true
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
    },
    isActive: true,
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
    },
    isActive: false
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
    },
    isActive: false
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
    },
    isActive: false
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
    },
    isActive: false
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
    },
    isActive: false
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
    },
    isActive: false
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
    },
    isActive: false
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
    },
    isActive: false
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
    },
    isActive: false

}

UserData.ActiveChamps.push(new ActiveChampObject(Chuck));
UserData.ActiveChamps.push(new ActiveChampObject(Anna));
UserData.ActiveChamps.push(new ActiveChampObject(Zook));
UserData.ActiveChamps.push(new ActiveChampObject(Kitsu));
UserData.ActiveChamps.push(new ActiveChampObject(Sashimi));
UserData.ActiveChamps.push(new ActiveChampObject(Kiddo));
UserData.ActiveChamps.push(new ActiveChampObject(Skinny));
UserData.ActiveChamps.push(new ActiveChampObject(Froggy));
UserData.ActiveChamps.push(new ActiveChampObject(Teevee));
UserData.ActiveChamps.push(new ActiveChampObject(Sofia));

export default UserData;