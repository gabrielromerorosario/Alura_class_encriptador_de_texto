var inputTexto = document.querySelector(".text_encriptar");
var mensaje = document.querySelector(".mensajefinal");
var franme_5 = document.querySelector(".FRAME_5");
let btn_encritor = document.getElementById("boton_encriptar_id");
let btn_desencritor = document.getElementById("btn_desencriptar_id");
let btn_copy = document.getElementById("copiar");

mensaje.style.display = "none";
btn_copy.style.visibility = "hidden";



function btn_Encriptar() {
    franme_5.style.display = "none";
    mensaje.style.display = "initial";
    btn_copy.style.visibility = "visible";
    var textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";


}

function encriptar(string) {
    let matrizCodigo = [
        ["e", "¤£¥%"],
        ["i", "¢£œ#%$"],
        ["a", "¥&%$#*"],
        ["o", "§«*š%$¥"],
        ["u", "¤«*#&%¼"]
    ]
    let stringEncriptado = string.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptado;

}








function btn_desencriptar() {
    franme_5.style.display = "none"
    mensaje.style.display = "initial";
    btn_copy.style.visibility = "visible";
    var textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none"
    inputTexto.value = ""

}

function desencriptar(string) {
    let matrizCodigo = [
        ["¤£¥%", "e"],
        ["¢£œ#%$", "i"],
        ["¥&%$#*", "a"],
        ["§«*š%$¥", "o"],
        ["¤«*#&%¼", "u"]
    ]
    let stringEncriptado = string.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptado;

}




function copy() {

    mensaje.select();
    document.execCommand("copy")
    inputTexto.value = "";
    inputTexto.focus();


}

btn_encritor.onclick = btn_Encriptar;
btn_desencritor.onclick = btn_desencriptar;
btn_copy.onclick = copy;