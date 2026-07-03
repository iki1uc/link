export class PQ {
    constructor() {
        this.log = [];
    }

    hear(obj) {
        this.log.push(obj);
        console.log("PQ heard →", obj);
    }
}

