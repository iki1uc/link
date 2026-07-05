export class RESPO_SPEAKWRITE {
    constructor() {
        this.log = [];
    }

    process(pxOut) {
        if (!pxOut) return null;

        this.log.push(pxOut);
        return pxOut;
    }
}
