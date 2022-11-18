// Frequência 17/11/22
// Pessoa 1 - Nome, Par ou Impar e Número;
let pessoa1 = prompt('Digite seu nome: ');
let escolha1 = prompt('Par ou Impar?');
let numero1 = parseInt(prompt('Digite um número: '));

// Pessoa 1 - Nome, Par ou Impar e Número;
if (escolha1 === 'Par'){
    let pessoa2 = prompt('Digite seu nome: ');
    let escolha2 = alert(pessoa2 + ' você ficou com Impar');
    let numero2 = parseInt(prompt('Digite um número: '));

    let soma = numero1 + numero2;
    if (soma % 2 == 0)
        document.write(soma + ' É par <br>' + pessoa1 + ' você ganhou');
    else
        document.write(soma + ' É impar <br>' + pessoa2 + ' você ganhou');
} else{
    let pessoa2 = prompt('Digite seu nome: ');
    let escolha2 = alert(pessoa2 + ' você ficou com Par');
    let numero2 = parseInt(prompt('Digite um número: '));

    let soma = numero1 + numero2;
    if (soma % 2 == 0)
        document.write(soma + ' É par <br>' + pessoa2 + ' você ganhou');
    else
        document.write(soma + ' É impar <br>' + pessoa1 + ' você ganhou');
}