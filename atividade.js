function trocarCor() {
    if (document.body.style.backgroundColor === "white") {
       
        document.body.style.backgroundColor = "#001520";
        document.body.style.color = "white";

        document.getElementById("button-header").textContent = "Modo Claro"
    } else {
      
        document.body.style.backgroundColor = "white";
        document.body.style.color = "blue";

        document.getElementById("button-header").textContent = "Modo Escuro"

      
    };
}