const caixa = document.querySelector(".caixa");

caixa.addEventListener('click', () => {

    const classeAzulExiste = caixa.classList.contains('azul');

    if (classeAzulExiste) {
        caixa.classList.remove("azul");
    } else {
        caixa.classList.add("azul");
    }
});


// const Cor = document.querySelector("div");

// const pre = document.querySelector(".preto")
//  Cor.addEventListener("click", tro);

//  function tro(){
//    if(".preto" == ".preto"){
//     pre.classList.remove(".preto");
//     pre.classList.add("azul");
//    }else{
//       pre.classList.remove("azul");
//       pre.classList.add(".preto");
//    }
//  }


