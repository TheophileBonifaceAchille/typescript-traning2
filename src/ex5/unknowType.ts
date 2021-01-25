let x: unknown;
let a: any;

a.length;

let c: string = a;

if (isString(x)) {
    x.length;
    let d: string = x;
}

function isString(value: unknown): value is string {
    return 'string' === typeof value;
}