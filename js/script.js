document.addEventListener('DOMContentLoaded', checkDevice);

function checkDevice(event){
    let viberLink = document.getElementById('viber_link');
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        viberLink.setAttribute('href', 'add?number=79170382332');
    }
}