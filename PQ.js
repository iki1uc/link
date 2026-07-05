export class PXGateSync {
    constructor() {
        this.mode = "listen";     // PX hört standardmäßig
        this.role = 1;            // Startrolle

        this.impuls = [];         // Impuls-Wörter
        this.roleMap = {};        // Wörter → Rollen
        this.patterns = [];       // Startmuster → Rollen

        this.autoGate = true;     // Auto-Gate aktiv
    }

    // --- TRAINING MODULES ---
    trainImpuls(arr) {
        this.impuls = arr;
    }

    trainRole(map) {
        this.roleMap = map;
    }

    trainPattern(patternArr) {
        this.patterns = patternArr;
    }

    // --- MODE ---
    setMode(m) {
        this.mode = m;
    }

    // --- ROLE ---
    setRole(r) {
        this.role = r;
    }

    // --- AUTO-GATE CORE ---
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

    // --- SPEECH PROCESSOR ---
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

    // --- SYNC-LAYER ---
    sync(text) {
        return {
            px: this.hear(text),
            sync: true
        };
    }
}
