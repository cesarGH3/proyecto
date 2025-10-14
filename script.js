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


// let intervalo = null;

// /**
//  * Aplica animación de texto y aparición a una sección
//  * @param {string} idSeccion - ID del contenedor principal (por ejemplo: "inicio")
//  * @param {string} textoTitulo - Texto que se escribirá letra por letra
//  * @param {boolean} reiniciar - Si debe reiniciar (solo inicio = true)
//  */
// function animarSeccion(idSeccion, textoTitulo, reiniciar = true) {
//     const seccion = document.getElementById(idSeccion);
//     const titulo = seccion.querySelector("h2");
//     const subtitulo = seccion.querySelector("h3");
//     const parrafo = seccion.querySelector("p");
//     const imagen = seccion.querySelector("img");

//     if (!titulo) return;

//     if (intervalo) clearInterval(intervalo);

//     // ✅ Solo reiniciar para inicio
//     if (reiniciar) {
//         [subtitulo, parrafo, imagen].forEach(el => {
//             if (el) {
//                 el.style.opacity = "0";
//                 el.style.transform = "translateY(10px)";
//                 el.classList.remove("mostrar-h3", "mostrar-p", "mostrar-img");
//                 void el.offsetWidth;
//             }
//         });
//         titulo.textContent = "";
//     } else {
//         // ✅ Para "sobre-nosotros", limpiar antes de escribir para evitar duplicados
//         titulo.textContent = "";
//     }

//     // Animación de escritura
//     let i = 0;
//     intervalo = setInterval(() => {
//         if (i < textoTitulo.length) {
//             titulo.textContent += textoTitulo.charAt(i);
//             i++;
//         } else {
//             clearInterval(intervalo);
//             intervalo = null;
//             setTimeout(() => {
//                 if (subtitulo) subtitulo.classList.add("mostrar-h3");
//                 setTimeout(() => {
//                     if (parrafo) parrafo.classList.add("mostrar-p");
//                 }, 600);
//             }, 200);
//         }
//     }, 70);

//     setTimeout(() => {
//         if (imagen) imagen.classList.add("mostrar-img");
//     }, 100);
// }

// // ✅ Al cargar: animar solo INICIO
// window.addEventListener("load", () => animarSeccion("inicio", "¡Un proyecto en desarrollo!", true));

// // ✅ Mostrar “Sobre Nosotros” visible desde el inicio sin animar
// window.addEventListener("DOMContentLoaded", () => {
//     const sobreNosotros = document.getElementById("sobre-nosotros");
//     if (sobreNosotros) {
//         const titulo = sobreNosotros.querySelector("h2");
//         const subtitulo = sobreNosotros.querySelector("h3");
//         const parrafo = sobreNosotros.querySelector("p");
//         const imagen = sobreNosotros.querySelector("img");

//         if (titulo) titulo.textContent = "Sobre el juego";
//         [subtitulo, parrafo, imagen].forEach(el => {
//             if (el) {
//                 el.style.opacity = "1";
//                 el.style.transform = "translateY(0)";
//             }
//         });
//     }
// });

// // ✅ Animación cuando haces clic en los enlaces
// document.querySelector('a[href="#inicio"]').addEventListener("click", (e) => {
//     e.preventDefault();
//     animarSeccion("inicio", "¡Un proyecto en desarrollo!", true);
// });

// document.querySelector('a[href="#sobre-nosotros"]').addEventListener("click", (e) => {
//     e.preventDefault();
//     animarSeccion("sobre-nosotros", "Sobre el juego", false);
// });

let intervalo = null;

/**
 * Aplica animación de texto y aparición a una sección
 * @param {string} idSeccion - ID del contenedor principal (por ejemplo: "inicio")
 * @param {string} textoTitulo - Texto que se escribirá letra por letra
 * @param {boolean} reiniciar - Si debe reiniciar (solo inicio = true)
 */
function animarSeccion(idSeccion, textoTitulo, reiniciar = true) {
    const seccion = document.getElementById(idSeccion);
    const titulo = seccion.querySelector("h2");
    const subtitulo = seccion.querySelector("h3");
    const parrafo = seccion.querySelector("p");
    const imagen = seccion.querySelector("img");

    if (!titulo) return;

    if (intervalo) clearInterval(intervalo);

    // ✅ Solo reiniciar para inicio
    if (reiniciar) {
        [subtitulo, parrafo, imagen].forEach(el => {
            if (el) {
                el.style.opacity = "0";
                el.style.transform = "translateY(10px)";
                el.classList.remove("mostrar-h3", "mostrar-p", "mostrar-img");
                void el.offsetWidth;
            }
        });
        titulo.textContent = "";
    } else {
        // ✅ Para "sobre-nosotros", limpiar antes de escribir para evitar duplicados
        titulo.textContent = "";

        // 🔹 agregado: resetear las clases para reactivar la animación al volver a hacer clic
        [subtitulo, parrafo, imagen].forEach(el => {
            if (el) {
                el.classList.remove("mostrar-h3", "mostrar-p", "mostrar-img");
                el.style.opacity = "0";
                el.style.transform = "translateY(10px)";
                void el.offsetWidth; // fuerza el reinicio de la animación
            }
        });
    }

    // Animación de escritura
    let i = 0;
    intervalo = setInterval(() => {
        if (i < textoTitulo.length) {
            titulo.textContent += textoTitulo.charAt(i);
            i++;
        } else {
            clearInterval(intervalo);
            intervalo = null;
            setTimeout(() => {
                if (subtitulo) subtitulo.classList.add("mostrar-h3");
                setTimeout(() => {
                    if (parrafo) parrafo.classList.add("mostrar-p");
                }, 600);
            }, 200);
        }
    }, 70);

    setTimeout(() => {
        if (imagen) imagen.classList.add("mostrar-img");
    }, 100);
}

// ✅ Al cargar: animar solo INICIO
window.addEventListener("load", () => animarSeccion("inicio", "¡Un proyecto en desarrollo!", true));

// ✅ Mostrar “Sobre Nosotros” visible desde el inicio sin animar
window.addEventListener("DOMContentLoaded", () => {
    const sobreNosotros = document.getElementById("sobre-nosotros");
    if (sobreNosotros) {
        const titulo = sobreNosotros.querySelector("h2");
        const subtitulo = sobreNosotros.querySelector("h3");
        const parrafo = sobreNosotros.querySelector("p");
        const imagen = sobreNosotros.querySelector("img");

        if (titulo) titulo.textContent = "Sobre el juego";
        [subtitulo, parrafo, imagen].forEach(el => {
            if (el) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    }
});

// ✅ Animación cuando haces clic en los enlaces
document.querySelector('a[href="#inicio"]').addEventListener("click", (e) => {
    e.preventDefault();
    animarSeccion("inicio", "¡Un proyecto en desarrollo!", true);
});

document.querySelector('a[href="#sobre-nosotros"]').addEventListener("click", (e) => {
    e.preventDefault();
    animarSeccion("sobre-nosotros", "Sobre el juego", false);
});


