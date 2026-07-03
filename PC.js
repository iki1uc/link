export class PC {
    static write(obj) {
        console.log("PC →", obj);
        return `R${obj.role}: ${obj.text}`;
    }
}

