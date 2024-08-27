//formulario
const $ingresarDatos = document.querySelector("#ingresar-datos");

$ingresarDatos.onclick = function () {
  const $nombreUsuario = document.querySelector("#nombre-usuario").value;
  const $segundoNombreUsuario = document.querySelector(
    "#segundo-nombre-usuario"
  ).value;
  const $apellidoUsuario = document.querySelector("#apellido-usuario").value;
  const $edadUsuario = document.querySelector("#edad-usuario").value;

  const $resultado = document.querySelector("#resultado");
  $resultado.textContent = `Hola ${$nombreUsuario} ${$segundoNombreUsuario} ${$apellidoUsuario} edad ${$edadUsuario}`;

  const nuestroTitulo = document.querySelector("h1");
  nuestroTitulo.innerText = `Bienvenido ${$nombreUsuario}`;
};
