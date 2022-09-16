var inputTexto = document.querySelector(".text_encriptar");
var mensaje = document.querySelector(".mensajefinal");
var frame_5 = document.querySelector(".FRAME_5");

function btn_Encriptar(){
   var textoEncriptado = encriptar(inputTexto.value);
   mensaje.value = textoEncriptado;
   frame_5.style.display="none"
   mensaje.style.backgroundImage = "none"
   inputTexto.value = ""
   console.log(textoEncriptado)
}

function encriptar (string){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]]
    let stringEncriptado = string.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }   
    }

    return stringEncriptado;   

}

let btn_encritor = document.getElementById("boton_encriptar_id");
btn_encritor.onclick = btn_Encriptar;


function btn_desencriptar(){
    var textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none"
    inputTexto.value = ""
    console.log(textoEncriptado)
 }
 
 function desencriptar (string){
     let matrizCodigo = [["enter","e"], ["imes","i"], ["ai", "a"], ["ober","o"], ["ufat","u"]]
     let stringEncriptado = string.toLowerCase();
 
     for (let i = 0; i < matrizCodigo.length; i++){
         if (stringEncriptado.includes(matrizCodigo[i][0])){
             stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
         }   
     }
 
     return stringEncriptado;   
 
 }
 
 let btn_desencritor = document.getElementById("btn_desencriptar_id");
 btn_desencritor.onclick = btn_desencriptar;

 function copy(){
    var copiar = document.querySelector(".mensajefinal"); 
    copiar.select();
    document.designMode("copy");
    alert("se copia");
}

let btn_copy = document.getElementById("copiar");
btn_copy.onclick = copy;
