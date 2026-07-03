export const LINK = {
    modules: {},

    bind(name, ref) {
        this.modules[name] = ref;
        console.log(`[NC.link] bind → ${name}`);
    },

    fullSync(packet) {
        const out = {
            time: Date.now(),
            packet,
            sync: true
        };
        console.log("[NC.link FullSync] →", out);
        return out;
    },

    route(type, data) {
        const out = `[NC.link] ${type} → ${JSON.stringify(data)}`;
        console.log(out);
        return out;
    }
};

