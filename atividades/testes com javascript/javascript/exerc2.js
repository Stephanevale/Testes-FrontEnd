var pizzaria = function () {
    const valorTotal = prompt("Digite o valor total da compra: ");
    const qntPessoas = prompt("Digite a quantidade de pessoas: ");
    calculo = Number(valorTotal / qntPessoas);
    return calculo;
};
document.write("Pagamento por cliente: ", pizzaria());
