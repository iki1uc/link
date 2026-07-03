
export class PX {
    constructor() {
        this.mode = "listen";
        this.role = null;
        this.lastText = "";
    }

    setMode(m) {
        this.mode = m;
    }

    setRole(r) {
        this.role = r;
    }

    hear(text) {
        if (this.mode !== "write") return null;
        this.lastText = text;
        return {
            role: this.role,
            text: this.lastText
        };
    }
}
