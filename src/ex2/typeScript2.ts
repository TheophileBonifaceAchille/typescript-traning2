// Décorateur
// Décorateur de class

let d1 = (c) => console.log('Décorateur appelé.');

let d2: PropertyDecorator = (prototype, name) => {
    console.log(prototype);
    console.log(name);
};

@d1
class Cl1<T> {
    constructor(public arg1: T, public arg2: T) {}
    @d2
    prop1: string = 'foo';
}

let a = new Cl1(1, 2);

