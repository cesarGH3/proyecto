document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60, // Compensa la altura del header fijo
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60, // Compensa la altura del header fijo
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("header nav ul");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
});


let intervalo = null;

/**
 * Aplica animación de texto y aparición a una sección
 * @param {string} idSeccion - ID del contenedor principal (por ejemplo: "inicio")
 * @param {string} textoTitulo - Texto que se escribirá letra por letra
 */
function animarSeccion(idSeccion, textoTitulo) {
    const seccion = document.getElementById(idSeccion);
    const titulo = seccion.querySelector("h2");
    const subtitulo = seccion.querySelector("h3");
    const parrafo = seccion.querySelector("p");
    const imagen = seccion.querySelector("img");

    if (!titulo) return;

    // Si hay animación activa, detenerla
    if (intervalo) clearInterval(intervalo);

    // Reiniciar estado visual antes de comenzar
    [subtitulo, parrafo, imagen].forEach(el => {
        if (el) {
            el.style.opacity = "0";
            el.style.transform = "translateY(10px)";
            el.classList.remove("mostrar-h3", "mostrar-p", "mostrar-img");

            // Forzar reflujo para reiniciar la animación CSS
            void el.offsetWidth; // << truco clave
        }
    });

    // Borrar el texto actual
    titulo.textContent = "";

    let i = 0;
    intervalo = setInterval(() => {
        if (i < textoTitulo.length) {
            titulo.textContent += textoTitulo.charAt(i);
            i++;
        } else {
            clearInterval(intervalo);
            intervalo = null;

            // Animar los demás elementos en secuencia
            setTimeout(() => {
                if (subtitulo) subtitulo.classList.add("mostrar-h3");
                setTimeout(() => {
                    if (parrafo) parrafo.classList.add("mostrar-p");

                }, 600);
            }, 200);
        }
    }, 70);
    setTimeout(() => {
        if (imagen) imagen.classList.add("mostrar-img"); // ✅ ahora sí se reinicia
    }, 100);
}

// ejecutar al cargar la página
window.addEventListener("load", () => animarSeccion("inicio", "¡Un proyecto en desarrollo!"));

// ambién al hacer clic en “Inicio”
document.querySelector('a[href="#inicio"]').addEventListener("click", (e) => {
    e.preventDefault(); // evita el salto automático
    animarSeccion("inicio", "¡Un proyecto en desarrollo!");
});


