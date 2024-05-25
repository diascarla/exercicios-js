const inputVazio = document.querySelectorAll(".input-vazio");

inputVazio.forEach(input =>{
    input.addEventListener('change', () =>{
        if(input.value !== ""){
            input.classList.add("verde")
        }else{
            input.classList.remove("verde")
        }
    });
});
