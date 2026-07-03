export class RAWATOR {
    constructor() {
        this.lastRole = null;
    }

    react(packet) {
        const role = packet.role;
        const text = packet.text;

        let move = null;

        // Eintritt
        if (this.lastRole === null) {
            move = { type: "WµR", role, text };
        }

        // Sprecherwechsel
        else if (this.lastRole !== role) {
            move = { type: "SWT", from: this.lastRole, to: role, text };
        }

        // Echo
        else if (text.startsWith("echo")) {
            move = { type: "ECO", role, text };
        }

        // Proxy
        else if (text.startsWith("px")) {
            move = { type: "PRX", role, text };
        }

        // Flex‑Move
        else if (text.length > 20) {
            move = { type: "FLX", role, text };
        }

        // Abgang
        else if (text === "bye" || text === "tschüss") {
            move = { type: "R4L", role, text };
        }

        this.lastRole = role;
        return move;
    }
}
