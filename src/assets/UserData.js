import { reactive } from 'vue'

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



var UserData = reactive({
    ActiveItems: [],
    ActiveChamps: [],
    CurrentActive: "Hat",
    CurrentActiveChamp: "Chuck"
})


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
    isActive: true
}

var Anna = {
    name: "Anna",
    isActive: false
}

var Zook = {
    name: "Zook",
    isActive: false
}

var Kitsu = {
    name: "Kitsu",
    isActive: false
}

var Sashimi = {
    name: "Sashimi",
    isActive: false
}

var Kiddo = {
    name: "Kiddo",
    isActive: false
}

var Skinny = {
    name: "Skinny",
    isActive: false
}

var Froggy = {
    name: "Froggy",
    isActive: false
}

var Teevee = {
    name: "Teevee",
    isActive: false
}

var Sofia = {
    name: "Sofia",
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