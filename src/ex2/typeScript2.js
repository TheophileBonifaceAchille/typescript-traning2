// Décorateur
// Décorateur de class
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var d1 = function (c) { return console.log('Décorateur appelé.'); };
var d2 = function (prototype, name) {
    console.log(prototype);
    console.log(name);
};
var Cl1 = /** @class */ (function () {
    function Cl1(arg1, arg2) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.prop1 = 'foo';
    }
    __decorate([
        d2
    ], Cl1.prototype, "prop1");
    Cl1 = __decorate([
        d1
    ], Cl1);
    return Cl1;
}());
var a = new Cl1(1, 2);
