export class PX {
    constructor() {
        this.mode = "listen";
        this.role = 1;

        this.impuls = [];
        this.roleMap = {};
        this.patterns = [];
    }

    // --- TRAINING MODULES ---
    trainImpuls(arr) {
        this.impuls = arr;
        console.log("PX.trainImpuls →", arr);
    }

    trainRole(map) {
        this.roleMap = map;
        console.log("PX.trainRole →", map);
    }

    trainPattern(patternArr) {
        this.patterns = patternArr;
        console.log("PX.trainPattern →", patternArr);
    }

    // --- MODE ---
    setMode(m) {
        this.mode = m;
        console.log("PX.mode =", m);
    }

    // --- ROLE ---
    setRole(r) {
        this.role = r;
        console.log("PX.role =", r);
    }

    // --- SPEECH PROCESSOR ---
    hear(text) {
        if (this.mode !== "write") return null;

        // 1) Pattern‑Start erkennen
        for (const p of this.patterns) {
            if (text.startsWith(p.start)) {
                this.role = p.role;
            }
        }

        // 2) Wörter prüfen
        const firstWord = text.split(" ")[0];
        if (this.roleMap[firstWord]) {
            this.role = this.roleMap[firstWord];
        }

        // 3) Impuls‑Wörter prüfen
        if (this.impuls.includes(firstWord)) {
            console.log("PX Impuls erkannt:", firstWord);
        }

        return {
            role: this.role,
            text
        };
    }
}
