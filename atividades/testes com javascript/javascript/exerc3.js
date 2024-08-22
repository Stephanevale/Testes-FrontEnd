let precoProduto = prompt("Qual do valor do produto: ");
let pagVista = Number(precoProduto) - Number(precoProduto * 0.1);
let pagParcelado = Number(precoProduto) / 3;

document.write("Valor Total do produto: ", precoProduto, "<br>");
document.write(
    "Valor a vista do produto com 10% de desconto: R$ ",pagVista,"<br>"
);
document.write("Valor do produto dividido em 3x: R$ ", pagParcelado.toFixed(2));
