"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Operacao = /** @class */ (function () {
    function Operacao() {
    }
    return Operacao;
}());
var soma = /** @class */ (function (_super) {
    __extends(soma, _super);
    function soma() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    soma.prototype.calcular = function (num1, num2) {
        return num1 + num2;
    };
    return soma;
}(Operacao));
var subtracao = /** @class */ (function (_super) {
    __extends(subtracao, _super);
    function subtracao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    subtracao.prototype.calcular = function (num1, num2) {
        return num1 - num2;
    };
    return subtracao;
}(Operacao));
var multiplicacao = /** @class */ (function (_super) {
    __extends(multiplicacao, _super);
    function multiplicacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    multiplicacao.prototype.calcular = function (num1, num2) {
        return num1 * num2;
    };
    return multiplicacao;
}(Operacao));
var divisao = /** @class */ (function (_super) {
    __extends(divisao, _super);
    function divisao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    divisao.prototype.calcular = function (num1, num2) {
        if (num2 == 0) {
            throw console.error('nao é possivel dividir por zero');
        }
        return num1 / num2;
    };
    return divisao;
}(Operacao));
var potenciacao = /** @class */ (function (_super) {
    __extends(potenciacao, _super);
    function potenciacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    potenciacao.prototype.calcular = function (num1, num2) {
        return Math.pow(num1, num2);
    };
    return potenciacao;
}(Operacao));
var radiciacao = /** @class */ (function (_super) {
    __extends(radiciacao, _super);
    function radiciacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    radiciacao.prototype.calcular = function (num1, num2) {
        return Math.pow(num1, 1 / num2);
    };
    return radiciacao;
}(Operacao));
var bhaskara = /** @class */ (function (_super) {
    __extends(bhaskara, _super);
    function bhaskara() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    bhaskara.prototype.calcular = function (num1, num2) {
        var a = num1;
        var b = num2;
        var c = readlineSync.questionFloat('digite o valor de C(COEFICIENTE INDEPENDENTE)');
        var delta = Math.pow(b, 2) - 4 * a * c;
        if (delta < 0) {
            throw new Error('nao existem raizes reais');
        }
        var raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        var raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log("as raizes s\u00E3o: ".concat(raiz1, " e ").concat(raiz2));
        return 0;
    };
    return bhaskara;
}(Operacao));
function calculadora() {
    console.log('bem vindo a calculadora');
    console.log('escolha a operação');
    console.log('1-soma ');
    console.log('2-subtracao ');
    console.log('3-multiplicacao');
    console.log('4-divisao ');
    console.log('5-potenciacao');
    console.log('6-radiciacao');
    console.log('7-formula de bhaskara');
    var opcao = readlineSync.questionInt('digite a operacao desejada');
    var num1 = readlineSync.questionFloat('digite o primeiro numero');
    var num2 = readlineSync.questionFloat('digite o segundo numero');
    var operacao;
    switch (opcao) {
        case 1:
            operacao = new soma();
            break;
        case 2:
            operacao = new subtracao();
            break;
        case 3:
            operacao = new multiplicacao();
            break;
        case 4:
            operacao = new divisao();
            break;
        case 5:
            operacao = new potenciacao();
            break;
        case 6:
            operacao = new radiciacao();
            break;
        case 7:
            operacao = new bhaskara();
            console.log('ignore o primeiro e segundo numero pedido');
            num1 = readlineSync.questionFloat('digite o valor de A(coeficiente quadratico): ');
            num2 = readlineSync.questionFloat('digite o valor de B(coeficiente linear: ');
            break;
        default:
            console.log('opcao invalida');
            return;
    }
    try {
        var resultado = operacao.calcular(num1, num2);
        if (opcao !== 7) {
            console.log("resultado: ".concat(resultado));
        }
    }
    catch (error) {
        console.log("erro: ".concat(error.message));
    }
}
calculadora();
