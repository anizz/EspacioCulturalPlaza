const contenedor = document.querySelector(".cards-container");
const derecha = document.querySelector("#botonScrollRight");
const izquierda = document.querySelector ("#botonScrollLeft");

/// BOTÓN DERECHO
derecha.addEventListener("click", () => {
    contenedor.scrollBy({
        left: 300,
        behavior: "smooth"
    });
});

// BOTÓN IZQUIERDO
izquierda.addEventListener("click", () => {
    contenedor.scrollBy({
        left: -300,
        behavior: "smooth"
    });
});

// DETECTAR EL SCROLL
contenedor.addEventListener("scroll", () => {

   
    if (contenedor.scrollLeft > 0) {
        izquierda.style.display = "block";
    } else {
        izquierda.style.display = "none";
    }

});

const contenedorNews = document.querySelector (".news-container");
const btIzq = document.querySelector("#botonScrollLeftNews");
const btDch = document.querySelector ("#botonScrollRightNews");


/// BOTÓN DERECHO
btDch.addEventListener("click", () => {
    contenedorNews.scrollBy({
        left: 300,
        behavior: "smooth"
    });
});


// BOTÓN IZQUIERDO
btIzq.addEventListener("click", () => {
    contenedorNews.scrollBy({
        left: -300,
        behavior: "smooth"
    });
});

// DETECTAR EL SCROLL
contenedorNews.addEventListener("scroll", () => {

   
    if (contenedorNews.scrollLeft > 0) {
        btIzq.style.display = "block";
    } else {
        btIzq.style.display = "none";
    }

});
