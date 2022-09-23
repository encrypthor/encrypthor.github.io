//Link buttons
var buttonEncrypt = document.querySelector("#btn-encrypt");
var buttonDecrypt = document.querySelector("#btn-decrypt");
var buttonCopy = document.querySelector("#btn-copy");

//reemplaza mayusculas por minusculas, acentos por sin acento y caracteres extaños por vacio;
// function depuraTexto(textoIngresado) {
//   var textoReemplazado = textoIngresado.replace(/á/g, "a");
//   textoReemplazado = textoReemplazado.replace(/é/g, "e");
//   textoReemplazado = textoReemplazado.replace(/í/g, "i");
//   textoReemplazado = textoReemplazado.replace(/ó/g, "o");
//   textoReemplazado = textoReemplazado.replace(/ú/g, "u");
//   textoReemplazado = textoReemplazado
//     .replace(/[^A-Z-a-z\s\r]/g, "")
//     .toLowerCase();

//   return textoReemplazado;
// }

//Encrypte button
buttonEncrypt.addEventListener("click", function (event) {
  event.preventDefault();
  var input = captureInput();

  //Validation and error message
  var error = validateString(input);
  if (error) {
    errorMsg();
    return;
  }
  var errorReset = document.querySelector("#error");
  errorReset.innerHTML = "";

  //Calling encrypte function
  var encryptedString = encrypt(input);

  //Output encrypted word
  output(encryptedString);
});

//Decrypte button
buttonDecrypt.addEventListener("click", function (event) {
  event.preventDefault();
  var input = captureInput();

  //Validation and error message
  var error = validateString(input);
  if (error) {
    errorMsg();
    return;
  }
  var errorReset = document.querySelector("#error");
  errorReset.innerHTML = "";

  //Calling decrypte function
  var decryptedString = decrypt(input);

  //Output decrypted word
  output(decryptedString);
});

//Copy button
buttonCopy.addEventListener("click", function (event) {
  event.preventDefault();

  //Calling copy function
  copy();
});
