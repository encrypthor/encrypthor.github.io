//Capture input
function captureInput() {
  var input = document.querySelector("#input");
  //   depuraTexto(input);
  //   return textoReemplazado.value;
  return input.value;
}

//Show output
function output(encryptedString) {
  document.querySelector("#output").value = encryptedString;
}
