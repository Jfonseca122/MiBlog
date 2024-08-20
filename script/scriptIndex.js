function mostrarContenido(id) {
    // Ocultar todos los contenidos
    var contenidos = document.querySelectorAll('.mostrar');
    contenidos.forEach(function(contenido) {
        contenido.style.display = 'none';
    });

    // Mostrar el contenido seleccionado
    var contenidoSeleccionado = document.getElementById(id);
    contenidoSeleccionado.style.display = 'block';
}

function inicializarCarrusel(carruselSelector, nextBtnSelector, prevBtnSelector) {
    const carruselInner = document.querySelector(carruselSelector);
    const btnNext = document.querySelector(nextBtnSelector);
    const btnPrev = document.querySelector(prevBtnSelector);
    const tarjetas = carruselInner.querySelectorAll('.tarjeta');
    let currentIndex = 0;

    function actualizarCarrusel() {
        const tarjetaAncho = tarjetas[0].offsetWidth;
        const offset = -currentIndex * tarjetaAncho;
        carruselInner.style.transform = `translateX(${offset}px)`;
    }

    btnNext.addEventListener('click', () => {
        if (currentIndex < tarjetas.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        actualizarCarrusel();
    });

    btnPrev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = tarjetas.length - 1;
        }
        actualizarCarrusel();
    });

    // Asegurarse de que el carrusel se ajuste al cambiar el tamaño de la pantalla
    window.addEventListener('resize', actualizarCarrusel);

    // Ajustar carrusel al inicio
    actualizarCarrusel();
}

// Inicializar carruseles
inicializarCarrusel('.carrusel-inner-1', '.btn-next-1', '.btn-prev-1');
inicializarCarrusel('.carrusel-inner-2', '.btn-next-2', '.btn-prev-2');
