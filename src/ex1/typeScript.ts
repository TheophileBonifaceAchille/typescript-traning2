
// Croissement de types
interface Int1 {
    props1: any;
    props2: any;
}

interface Int2 {
    props3: any;
}

let a: Int1 & Int2 = {
    props1: 1,
    props2: 2,
    props3: 3
}

let b: Int1 | Int2 = {
    props1: 1,
    props2: 2,
    props3: 3
}

// Types génériques
let c: <T>(v: T) => T[] = (value) => [value]

interface Int3 <T> {
    props1: T,
    props2: T[]
}

let d: Int3 <number> = {
    props1: 2,
    props2: [21]
}

class Cl1 <T> {
    constructor (public arg1: T, public arg2: T) {}
    toArray : () => T[] = () => [this.arg1, this.arg2]
}

let e = new Cl1 <number> (1, 2);
e.toArray