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
    CurrentActive: "Hat"
}


UserData.ActiveItems.push(new ActiveItemObject(Hat));
UserData.ActiveItems.push(new ActiveItemObject(Backpack));
UserData.ActiveItems.push(new ActiveItemObject(Boots));


export default UserData;