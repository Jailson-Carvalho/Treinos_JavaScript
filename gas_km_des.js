const etanol = 3.64;
const gasolina = 5.79;
const topiDeConbustivel1 = "Gasolina";
const topiDeConbustivel2 = "Etanol";
const gastoMedioPorKm = 10;
const kmViagem = 100;

const combustivel = gasolina

// quanto que vou gasta para fazer essa viágem
if (combustivel === gasolina) {
    cursoViagem = (kmViagem / gastoMedioPorKm) * gasolina;
    console.log(`Gastarei o valor R$ ${cursoViagem.toFixed(2)} para fazer essa viajem.`);
} else if (combustivel) {
    cursoViagem = (kmViagem / gastoMedioPorKm) * etanol;
    console.log(`Gastarei o valor R$ ${cursoViagem.toFixed(2)} para fazer essa viajem.`);
}
