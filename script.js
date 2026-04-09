document.addEventListener("DOMContentLoaded", () => {

    const texto = document.getElementById("texto");

    function animar() {

        // Reset inicial
        texto.style.transition = "none";
        texto.style.transform = "translateY(120px) scale(0.4)";
        texto.style.opacity = "0";

        // Reinicia animación (truco necesario)
        texto.offsetHeight;

        // Entrada
        setTimeout(() => {
            texto.style.transition = "all 1s cubic-bezier(0.25, 1.5, 0.5, 1)";
            texto.style.transform = "translateY(0px) scale(1.2)";
            texto.style.opacity = "1";
        }, 50);

        // Ajuste natural
        setTimeout(() => {
            texto.style.transform = "scale(1)";
        }, 1000);

        // Salida
        setTimeout(() => {
            texto.style.transition = "all 1.5s ease-in";
            texto.style.transform = "translateY(-180px) scale(0.3)";
            texto.style.opacity = "0";
        }, 2500);
    }

    // Ejecutar continuamente
    setInterval(animar, 4000);

    // Primera ejecución
    animar();

});