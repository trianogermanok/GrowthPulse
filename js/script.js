// Función para obtener el tiempo restante hasta una fecha específica
function obtenerTiempoRestanteHastaFecha(fechaObjetivo) {
    var ahora = new Date(); // Fecha y hora actual
    var objetivo = new Date(fechaObjetivo); // Convertir la fecha objetivo a un objeto Date

    // Calcular la diferencia en milisegundos entre la fecha objetivo y la fecha actual
    var diferencia = objetivo.getTime() - ahora.getTime();

    // Convertir la diferencia de milisegundos a segundos y asegurarse de que sea positiva
    var tiempoRestante = Math.max(0, Math.floor(diferencia / 1000));

    return tiempoRestante;
}

// Función para iniciar el temporizador con una fecha objetivo específica
function iniciarTemporizadorParaFecha(fechaObjetivo) {
    // Obtener el tiempo restante hasta la fecha objetivo
    var tiempoRestante = obtenerTiempoRestanteHastaFecha(fechaObjetivo);

    // Mostrar el temporizador en la página
    mostrarTemporizador(tiempoRestante);

    // Actualizar el temporizador cada segundo
    var temporizadorInterval = setInterval(function() {
        tiempoRestante--;

        // Mostrar el temporizador actualizado en la página
        mostrarTemporizador(tiempoRestante);

        // Detener el temporizador cuando el tiempo llegue a cero
        if (tiempoRestante <= 0) {
            clearInterval(temporizadorInterval);
            alert("¡Tiempo agotado!");
        }
    }, 1000);
}

// Función para mostrar el temporizador en la página
function mostrarTemporizador(tiempoRestante) {
    var dias = Math.floor(tiempoRestante / (60 * 60 * 24));
    var horas = Math.floor((tiempoRestante % (60 * 60 * 24)) / (60 * 60));
    var minutos = Math.floor((tiempoRestante % (60 * 60)) / 60);
    var segundos = tiempoRestante % 60;

    /*Aqui COMIENZA el cambio de codigo*/
    document.getElementById('temporizador').innerHTML = `
        <div class="borde"><span class="valor">${dias}</span></div>:
        <div class="borde"><span class="valor">${horas}</span></div>:
        <div class="borde"><span class="valor">${minutos}</span></div>:
        <div class="borde"><span class="valor">${segundos}</span></div>
    `;
    /*Aqui TERMINA el cambio de codigo*/
}

// Llamar a la función para iniciar el temporizador con la fecha objetivo especificada
document.addEventListener('DOMContentLoaded', function() {
    // Fecha objetivo (5 de marzo de 2024)
    var fechaObjetivo = "2024-03-05T00:00:00"; // Formato: Año-Mes-DíaT00:00:00

    iniciarTemporizadorParaFecha(fechaObjetivo);
});

// Cards Dinamicas

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".more");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const card = this.closest(".card");
            const paragraph = card.querySelector(".parrafo");
            if (paragraph.style.height === "100px") {
                paragraph.style.height = "auto";
                this.innerText = "Leer menos";
            } else {
                paragraph.style.height = "100px";
                this.innerText = "Leer más";
            }
        });
    });
});
