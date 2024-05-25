const btnTrocarCor = document.getElementById("btn-trocar-cor");

const caixaAzul = document.querySelector(".azul");

btnTrocarCor.addEventListener("click", trocarCor);

function trocarCor(){
    caixaAzul.classList.remove("azul");
    caixaAzul.classList.add("amarelo");
}
