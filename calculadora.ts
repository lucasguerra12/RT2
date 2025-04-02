import * as readlineSync from 'readline-sync';
abstract class Operacao {
    abstract calcular(num1:number,num2:number):number;
}


class soma extends Operacao {
    calcular (num1:number,num2:number):number {
        return num1 +num2;
    }
}

class subtracao extends Operacao {
    calcular (num1:number,num2:number):number{
        return num1 - num2 ;
    }
}

class multiplicacao extends Operacao{
    calcular(num1: number, num2: number): number {
        return num1*num2;
    }
}

class divisao extends Operacao {
    calcular(num1: number, num2: number): number {
        if (num2 == 0){
            throw console.error('nao é possivel dividir por zero');
        }
        return num1/num2
    } 
}

class potenciacao extends Operacao {
    calcular(num1: number, num2: number): number {
        return Math.pow(num1,num2)
    }
}

class radiciacao extends Operacao {
    calcular(num1: number, num2: number): number {
        return Math.pow(num1,1/num2) 
    }
} 

class bhaskara extends Operacao {
    calcular(num1: number, num2: number): number {
        const a = num1 ;
        const b = num2 ;
        const c = readlineSync.questionFloat('digite o valor de C(COEFICIENTE INDEPENDENTE)');
        const delta = Math.pow(b,2) - 4 * a * c;


        if (delta < 0){
            throw new Error('nao existem raizes reais')
        }

        const raiz1 = (-b + Math.sqrt(delta)) / (2*a);
        const raiz2 = (-b - Math.sqrt(delta)) / (2*a );
        console.log(`as raizes são: ${raiz1} e ${raiz2}`);

        return 0;
    }
}

function calculadora (){
    console.log ('bem vindo a calculadora');
    console.log ('escolha a operação');
    console.log('1-soma ');
    console.log('2-subtracao ');
    console.log('3-multiplicacao');
    console.log('4-divisao ');
    console.log('5-potenciacao');
    console.log('6-radiciacao');
    console.log('7-formula de bhaskara')

    const opcao = readlineSync.questionInt('digite a operacao desejada');
    let num1 = readlineSync.questionFloat('digite o primeiro numero');
    let num2 = readlineSync.questionFloat('digite o segundo numero');


    let operacao: Operacao; 


    switch(opcao){
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
            console.log('ignore o primeiro e segundo numero pedido')
            num1 = readlineSync.questionFloat('digite o valor de A(coeficiente quadratico): ');
            num2 = readlineSync.questionFloat('digite o valor de B(coeficiente linear: ');
            break;
        default:
            console.log('opcao invalida');
            return
    }

    try {
        const resultado = operacao.calcular(num1,num2);
        if (opcao!==7){
            console.log(`resultado: ${resultado}`);}
    } catch (error){
        console.log(`erro: ${error.message}`);
    }
}

calculadora();
