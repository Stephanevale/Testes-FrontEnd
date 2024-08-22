let valorJantar = prompt("Digite o valor do jantar: ");
taxaGarcom = Number(valorJantar * 0.1);
totalPagar = Number(taxaGarcom + Number(valorJantar));

document.write("O valor da taxa do garçom é: R$ ", taxaGarcom, "<br>");
document.write("O valor total da conta é: R$ ", totalPagar.toFixed(2));
