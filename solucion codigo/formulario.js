var formulario = document.querySelector(".formulario"); //error1 no se estaba llamando adecuadamente

formulario.onsubmit = function(e) {
  e.preventDefault();//error2 error de sintax

  var n = formulario.elements["name"]; //no se si era parte de error pero opte po llamar desde el id
  var e = formulario.elements["age"];
  var na = formulario.elements["nationality"];

  var nombre = n.value;
  var edad = parseInt(e.value, 10);

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }

  if (nombre.length > 0 && (edad >= 18 && edad <= 120)) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};
//error 3 no se por que aqui habia un boton de borrar estaba muy raro.
function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  var lista = document.getElementById("lista-de-invitados"); //no habiaa un id en donde cocolar al invitado. error4

  var elementoLista = document.createElement("div");
  elementoLista.classList.add("invitado"); //error 5 decia added.
  lista.appendChild(elementoLista);

  crearElemento("Nombre", nombre, elementoLista);
  crearElemento("Edad", edad, elementoLista);
  crearElemento("Nacionalidad", nacionalidad, elementoLista);

  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.classList.add("boton-borrar");
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {
    elementoLista.remove();
  };
}

function crearElemento(descripcion, valor, contenedor) {
  var spanDescripcion = document.createElement("span");
  var spanValor = document.createElement("span");
  var espacio = document.createElement("br");
  spanDescripcion.textContent = descripcion + ": ";
  spanValor.textContent = valor;
  contenedor.appendChild(spanDescripcion);
  contenedor.appendChild(spanValor);
  contenedor.appendChild(espacio);
}
