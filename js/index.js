let info = document.getElementById("inputText")
let boton = document.getElementById("buttonText")
boton.addEventListener("click", function(){
    let texto = info.value
    localStorage.setItem("texto", texto)
})