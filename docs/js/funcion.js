// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
var encriptado;
var descifrado;


/**
 * Toma el valor de entrada, lo divide en una matriz y luego reemplaza las vocales con una cadena de
 * letras.
 * @returns el valor de la variable encriptado.
 */
function encriptador() {
  console.log(input.value);
  encriptado = "";
  var textoAnalizar = input.value.split("");
  for (let index = 0; index < textoAnalizar.length; index++) {
    if (textoAnalizar[index] == "a") {
      encriptado = encriptado + "ai";
    } else if (textoAnalizar[index] == "e") {
      encriptado = encriptado + "enter";
    } else if (textoAnalizar[index] == "i") {
      encriptado = encriptado + "imes";
    } else if (textoAnalizar[index] == "o") {
      encriptado = encriptado + "ober";
    } else if (textoAnalizar[index] == "u") {
      encriptado = encriptado + "ufat";
    } else {
      encriptado = encriptado + textoAnalizar[index];
    }
  }
  input.value = "";
  img.setAttribute("style", "display:none;");
  txt.setAttribute("style", "display:none;");
  copiar.setAttribute("style", "display:block;");
  solucion.setAttribute("style","display:block;");
  return (solucion.textContent = encriptado);
}


/**
 * Toma el valor de entrada, reemplaza las cadenas con las vocales y devuelve el resultado.
 * @returns el valor de la variable descifrado.
 */
function desEncriptador() {
  var frase = input.value;
  descifrado = "";
  console.log("desencriptador:" + input.value);
  for (let index = 0; index < frase.length; index++) {
    if (frase.includes("ai")) {
      descifrado = frase.replace("ai", "a");
      frase = descifrado;
    } else if (frase.includes("enter")) {
      descifrado = frase.replace("enter", "e");
      frase = descifrado;
    } else if (frase.includes("imes")) {
      descifrado = frase.replace("imes", "i");
      frase = descifrado;
    } else if (frase.includes("ober")) {
      descifrado = frase.replace("ober", "o");
      frase = descifrado;
    } else if (frase.includes("ufat")) {
      descifrado = frase.replace("ufat", "u");
      frase = descifrado;
    } else {
      break;
    }
  }
  input.value = "";
  img.setAttribute("style", "display:none;");
  txt.setAttribute("style", "display:none;");
  copiar.setAttribute("style", "display:block;");
  solucion.setAttribute("style","display:block;");
  return (solucion.textContent = descifrado);
}

/* Está cambiando el título de la página cuando el usuario no está enfocado en la página. */
let doctTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Regresa :´(";
});
window.addEventListener("focus", () => {
  document.title = "Encriptador - Challenge Alura";
});

/* Selección de los elementos del archivo HTML. */
var input = document.querySelector(".entrada");
var img = document.querySelector(".muneco");
var txt = document.querySelector(".ocultar");
var solucion = document.querySelector(".solucion");
var encrip = document.querySelector(".encriptar");
var desencrip = document.querySelector(".desencriptar");
var copiar = document.querySelector(".copiar");


encrip.onclick = encriptador;
desencrip.onclick = desEncriptador;

/* Copiando el texto del elemento `solucion`. */
copiar.addEventListener("click", () => {
  const range = document.createRange();
  range.selectNodeContents(solucion);
  const selecion = window.getSelection();
  selecion.removeAllRanges();
  selecion.addRange(range);
  document.execCommand("copy");
  selecion.removeAllRanges();
  location.reload();
});


/* Está ocultando el botón "copiar" cuando el usuario hace clic en el botón "encriptar" o
"desencriptar". */
if (encriptado != "" || descifrado != "") {
  copiar.setAttribute("style", "display:none;");
}



// navigator.serviceWorker.register("/docs/sw.js").then(function (registration) {
//   console.log("El servicio de trabajo se ha registrado correctamente: ", registration );
// })
// .catch(function (error) {
//   console.log("Error al registrar el servicio de trabajo: ", error);
// });