// Accesseur

let accesseur = {
    get prop1() {
        console.log('props 1.')
    },
    set prop2(value) {
        console.log('props 2.')
    }
}

console.log('test');
let a = accesseur.prop1;
accesseur.prop2 = 'foo';