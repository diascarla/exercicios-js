// for ([inicialização]; [condição]; expressão final){
//     seu código
// }

const usuario = {
    nome: "Carla",
    idade: 34,
    telefone: 0
}

for(let key in usuario){
    console.log(`${key} : ${usuario[key]}`)
}