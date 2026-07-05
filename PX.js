export class PXGateSync {
    constructor() {
        this.mode = "listen";
        this.role = 1;

        this.impuls = [];
        this.roleMap = {};
        this.patterns = [];

        this.autoGate = true;
    }

    // TRAINING
    trainImpuls(arr) { this.impuls = arr; }
    trainRole(map) { this.roleMap = map; }
    trainPattern(patternArr) { this.patterns = patternArr; }

    // MODE
    setMode(m) { this.mode = m; }
    setRole(r) { this.role = r; }

    // GATE
    gate(text) {
        const first = text.split(" ")[0];

        for (const p of this.patterns) {
            if (text.startsWith(p.start)) this.role = p.role;
        }

        if (this.roleMap[first]) this.role = this.roleMap[first];

        if (this.impuls.includes(first)) {
            return { type: "impuls", role: this.role, text };
        }

        return { type: "normal", role: this.role, text };
    }

    // SPEECH
    hear(text) {
        if (this.mode !== "write") return null;

        const gateOut = this.autoGate
            ? this.gate(text)
            : { role: this.role, text };

        return {
            role: gateOut.role,
            text: gateOut.text,
            gate: gateOut.type
        };
    }

    // SYNC
    sync(text) {
        return {
            px: this.hear(text),
            sync: true
        };
    }
}
