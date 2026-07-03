import { PC } from "./PC.js";
import { PQ } from "./PQ.js";
import { RAWATOR } from "./RAWATOR.js";
import { LINK } from "./NCLinkFullSync.js";

export class RESPOSyncSpeakWrite {
    constructor() {
        this.pq = new PQ();
        this.raw = new RAWATOR();
    }

    processSync(pxOut) {
        if (!pxOut) return;

        const txt = PC.write(pxOut);
        const echo = this.pq.hear(pxOut);
        const move = this.raw.react(pxOut);

        LINK.route("txt", txt);
        LINK.route("echo", echo);
        LINK.route("move", move);

        return {
            txt,
            echo,
            move,
            sync: true
        };
    }
}

