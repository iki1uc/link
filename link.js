export const LINK = {
    modules: {},

    bind(name, mod) {
        this.modules[name] = mod;
    },

    route(action, payload) {
        const px = this.modules["px"];
        if (!px) return "PX fehlt";

        if (action === "speak") {
            const out = px.hear(payload.text);
            return `[nc.link] R${out.role}: ${out.text}`;
        }

        return "Unknown action";
    }
};
