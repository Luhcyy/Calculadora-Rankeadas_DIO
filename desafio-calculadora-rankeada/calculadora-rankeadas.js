let readline = require('readline');
let rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

function calculaSaldo(vitorias, derrotas) {
let saldo = vitorias - derrotas;
let nivel = "";

// método para calcular o nivel do heroi
switch (true) {
    case (saldo < 10):
    nivel = "Ferro";
    break;
    case (saldo >= 10 && saldo <= 20):
    nivel = "Bronze";
    break;
    case (saldo >= 21 && saldo <= 50):
    nivel = "Prata";
    break;
    case (saldo >= 51 && saldo <= 80):
    nivel = "Ouro";
    break;
    case (saldo >= 81 && saldo <= 90):
    nivel = "Diamante";
    break;
    case (saldo >= 91 && saldo <= 100):
    nivel = "Lendário";
    break;
    case (saldo>= 101):
    nivel = "Imortal";
    break;
    default:
    nivel = "Desconhecido";
}

return [saldo, nivel];
}

function perguntar() {
// solicitação de entrada do usuario para as vitorias em node.js
rl.question("Digite a quantidade de vitórias do herói: ", function(vitorias) {
// solicitação de entrada do usuario para as derrotas em node.js
rl.question("Agora, digite a quantidade de derrotas do herói: ", function(derrotas) {
    // Chama a função e guarda o resultado
    let resultado = calculaSaldo(vitorias, derrotas);
    let saldoVitorias = resultado[0]; // Saldo de rankeadas
    let nivel = resultado[1]; // Nível do jogador

    console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel);

    
    rl.question("Deseja calcular o nivel de outro herói? (S/N) ", function(decisao) {
        if (decisao.toUpperCase() === 'S') {
            perguntar(); 
        } else {
            rl.close(); 
        }
    });
});
});
}

perguntar(); 
