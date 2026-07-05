export function JB_AUTO() {
    const L = ["A","B","C","D"][Math.floor(Math.random()*4)];
    const K = ["TEST","LIVE","PROD"][Math.floor(Math.random()*3)];
    const P = Math.floor(Math.random()*12)+1;
    const Z = [0,1][Math.floor(Math.random()*2)];

    return { L, K, P, Z };
}

export function JB_CHECK() {
    return { L: "A", K: "LIVE", P: 7, Z: 1 };
}

export function JB_RAW(P, Z) {
    return P * Z;
}

export function JB_CHANNEL() {
    return "JB‑Channel aktiv";
}

