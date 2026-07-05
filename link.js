export const LINK = {
    modules: {},

    bind(name, mod) {
        this.modules[name] = mod;
    },

    route(action, payload) {
        if (!this.modules["px"]) return "PX fehlt";

        if (action === "speak") {
            const out = this.modules["px"].hear(payload.text);
            return `[nc.link] R${out.role}: ${out.text}`;
        }

        return "Unknown action";
    }
};
