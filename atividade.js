function trocarCor() {
    if (document.body.style.backgroundColor === "grey") {
       
        document.body.style.backgroundColor = "#1a1469";
        document.body.style.color = "white";

        document.getElementById("button01").textContent = "MATRÍCULE-SE"
    } else {
      
        document.body.style.backgroundColor = "grey";
        document.body.style.color = "white";

        document.getElementById("button01").textContent = "MATRÍCULE-SE"

      
    };
}