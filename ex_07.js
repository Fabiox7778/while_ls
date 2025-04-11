let moedas = 0;
let reais = 0;

while (reais < 12) {
    reais = moedas*3;
    console.log(`Precisa de  ${moedas} moedas para juntar ${reais} reais`);
    moedas++;
}