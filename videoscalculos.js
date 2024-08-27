//calculos-videos
const $calculosSuma = document.querySelector("#calculos-suma");
const formulario = document.querySelector("#formulario");

$calculosSuma.onclick = function () {
  const $horasDeClase = document.querySelectorAll(".horas-de-clase");
  const $minutosDeClase = document.querySelectorAll(".minutos-de-clase");
  const $segundosDeClase = document.querySelectorAll(".segundos-de-clase");

  function sumarValores(tiemposClases) {
    let sumar = 0;

    for (let i = 0; i < tiemposClases.length; i++) {
      sumar += Number(tiemposClases[i].value);
    }
    return sumar;
  }
  let sumaDeHoras = sumarValores($horasDeClase);
  let sumaDeMinutos = sumarValores($minutosDeClase);
  let sumaDeSegundos = sumarValores($segundosDeClase);

  let segundosFinales = sumaDeSegundos % 60;
  let minutosFinales = Math.trunc(sumaDeSegundos / 60) + (sumaDeMinutos % 60);
  let horasFinales = Math.trunc(sumaDeMinutos / 60) + sumaDeHoras;

  document.querySelector(
    "#contenido"
  ).innerText = `El tiempo total es ${horasFinales} horas, ${minutosFinales} minuto y ${segundosFinales} segundos`;

  formulario.reset();
};
