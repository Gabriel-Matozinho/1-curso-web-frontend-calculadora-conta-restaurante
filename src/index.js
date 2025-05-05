// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Capturando o número de pessoas na mesa
const numeroPessoas = readline.questionInt('Digite o numero de pessoas na mesa: ');

// Capturando o valor total da conta
const valorTotal = readline.questionFloat('Digite o valor total da conta: ');

// Capturando o método de pagamento
const metodoPagamento = readline.question('Qual é o metodo de pagamento (PIX, dinheiro ou cartao)? ');


//Façã sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO
let desconto = valorTotal;
let porpessoa = numeroPessoas;
if (metodoPagamento === "PIX" || metodoPagamento === "dinheiro") {
    desconto -= desconto * (10 / 100)
}
else{
    porpessoa = desconto / porpessoa
}


// Exibindo os resultados
console.log(`O valor fica R$ ${porpessoa.toFixed(2)}`);
