const codigoQRDiv = document.getElementById('qr');

document.addEventListener("DOMContentLoaded", ( ) => {
    const form = document.querySelector('#form');
    const url = document.getElementById('url');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if(url.value === "" || url.value === null || url.value === undefined){
            alert("Escriba una URL válida")
            return;
        }
        form.classList.add("ocultar");
        document.querySelector(".qrcode").classList.remove("ocultar");
        const codigoQR = new QRCode(codigoQRDiv, {
          text: url.value,
          width: 230,
          height: 230
        });  
    })
})