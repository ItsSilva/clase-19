// Funcioón que contiene todo el codigo:
const render = () => {
    const contenedor = document.querySelector("#cuadro");

contenedor.addEventListener("click", (event) => {
    console.log(event);
    alert("Has hecho click en el cuadro");
});

contenedor.addEventListener("mouseenter", () => {
    contenedor.classList.remove("contenedor");
    contenedor.classList.add("contenedorDOS");
});

contenedor.addEventListener("mouseleave", () => {
    contenedor.classList.add("contenedor");
    contenedor.classList.remove("contenedorDOS");
});
};

// Funcioón que renderiza todo el codigo adentro de la función "render":
document.addEventListener("DOMContentLoaded", render)
