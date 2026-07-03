export class PX {
    constructor() {
        this.mode = "listen";
        this.role = 1;
        this.impuls = [];
        this.roleMap = {};
        this.patterns = [];
    }

    trainImpuls(arr) { this.impuls = arr; }
    trainRole(map) { this.roleMap = map; }
    trainPattern(patternArr) { this.patterns = patternArr; }

    setMode(m) { this.mode = m; }
    setRole(r) { this.role = r; }

    hear(text) {
        if (this.mode !== "write") return null;

        for (const p of this.patterns) {
            if (text.startsWith(p.start)) this.role = p.role;
        }

        const first = text.split(" ")[0];
        if (this.roleMap[first]) this.role = this.roleMap[first];

        return { role: this.role, text };
    }
}
name wo // export class PX {
    constructor() {
        this.mode = "listen";
        this.role = 1;

        this.impuls = [];
        this.roleMap = {};
        this.patterns = [];

        this.autoGate = true;   // PX Auto-Gate aktiv
    }

    // TRAINING MODULES
    trainImpuls(arr) { this.impuls = arr; }
    trainRole(map) { this.roleMap = map; }
    trainPattern(patternArr) { this.patterns = patternArr; }

    // MODE
    setMode(m) { this.mode = m; }
    setRole(r) { this.role = r; }

    // AUTO-GATE CORE
    gate(text) {
        const first = text.split(" ")[0];

        // 1) Pattern-Erkennung
        for (const p of this.patterns) {
            if (text.startsWith(p.start)) {
                this.role = p.role;
            }
        }

        // 2) Rollen-Wörter
        if (this.roleMap[first]) {
            this.role = this.roleMap[first];
        }

        // 3) Impuls-Wörter
        if (this.impuls.includes(first)) {
            return { type: "impuls", role: this.role, text };
        }

        // 4) Standard
        return { type: "normal", role: this.role, text };
    }

    // SPEECH PROCESSOR
    hear(text) {
        if (this.mode !== "write") return null;

        const gateOut = this.autoGate ? this.gate(text) : { role: this.role, text };

        return {
            role: gateOut.role,
            text: gateOut.text,
            gate: gateOut.type
        };
    }
}
