const textoIngresado = document.querySelector("#texto"); /*Devuelve el primer elemento del documento*/
const textoResultado = document.querySelector("#textoResultado");

const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");

function encriptar (){
    let texto = textoIngresado.value.toLowerCase();
    let textoEncriptado = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

    document.getElementById("noResuelto").style.visibility = "hidden";
    document.getElementById("copiar").style.visibility = "visible";
    textoResultado.value = textoEncriptado;
    document.getElementById("texto").value = '';
}

function desencriptar (){
    let textoEncriptado = textoIngresado.value.toLowerCase();
    let texto = textoEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

    document.getElementById("noResuelto").style.visibility = "hidden";
    document.getElementById("copiar").style.visibility = "visible";
    textoResultado.value = texto;
    document.getElementById("texto").value = '';
}

function copiar (){
    let textoEncriptado = textoResultado.value;
    navigator.clipboard.writeText(textoEncriptado);
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

btnCopiar.onclick = copiar;
