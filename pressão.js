function calcular() {
    const f = Number(document.querySelector("#inputforça").value); // força
    const a = Number(document.querySelector("#inputarea").value); // area
    
    const p = f / a  //fórmula

    document.querySelector("#resultado").textContent = "Pressão:" + p.toFixed(2) ; // oque faz o resultado aparecer
   
}

document.addEventListener("DOMContentLoaded", () => {
    const calcularButton = document.querySelector("#calcular");
    calcularButton.addEventListener("click", calcular); // oque faz o botão calcular a fórmula
});