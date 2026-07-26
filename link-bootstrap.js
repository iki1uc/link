import { CONNECT } from "./CONNECT/CONNECT.js";
import { SYNC } from "./SYNC/SYNC.js";

import { NCLinkFullSync } from "./NCLinkFullSync.js";
import { PXGateSync } from "./PXGateSync.js";
import { RAWATOR } from "./RAWATOR.js";
import { RESPO_SPEAKWRITE } from "./RESPO-SPEAKWRITE.js";

import { JB } from "./JB.js";
import { PC } from "./PC.js";
import { PQ } from "./PQ.js";
import { PX } from "./PX.js";

export const LINK_BOOT = {

  async start() {

    // 1. CONNECT initialisieren
    const connectInit = CONNECT.scanRoom("NC.room");

    // 2. SYNC aktivieren
    const syncInit = "SYNC.delay = " + SYNC.delay + "ms";

    // 3. NC FullSync
    const ncFull = await SYNC.slow(() => NCLinkFullSync());

    // 4. PX Gate
    const pxGate = await SYNC.slow(() => PXGateSync());

    // 5. RAWATOR
    const raw = await SYNC.slow(() => RAWATOR());

    // 6. RESPO SpeakWrite
    const speak = await SYNC.slow(() => RESPO_SPEAKWRITE());

    // 7. JB / PC / PQ / PX
    const jb = await SYNC.slow(() => JB());
    const pc = await SYNC.slow(() => PC());
    const pq = await SYNC.slow(() => PQ());
    const px = await SYNC.slow(() => PX());

    return {
      connectInit,
      syncInit,
      ncFull,
      pxGate,
      raw,
      speak,
      jb,
      pc,
      pq,
      px
    };
  }
};
