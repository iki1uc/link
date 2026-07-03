import { LINK } from "./link.js";
import { PC } from "./PC.js";
import { PQ } from "./PQ.js";
import { RAWATOR } from "./RAWATOR.js";

export class RESPO_SPEAKWRITE {
    constructor() {
        this.pq = new PQ();
        this.raw = new RAWATOR();
    }

    process(pxOut) {
        if (!pxOut) return;

        const txt = PC.write(pxOut);
        this.pq.hear(pxOut);

        const move = this.raw.react(pxOut);

        LINK.route("txt", txt);
        LINK.route("move", move);
    }
}


