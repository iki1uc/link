export class RAWATOR {
    react(obj) {
        console.log("RAWATOR reacts →", obj);
        return { move: obj.role === 1 ? "WµR" : "R4L" };
    }
}

