const botonAfrica = document.getElementById('africa');
const botonCofradia = document.getElementById('cofradia');
const botonCamaron = document.getElementById('camaron');
const botonPaparazo = document.getElementById('paparazo');
const imagenesAfrica = document.getElementById('imagenesAfrica');
const imagenesCofradia = document.getElementById('imagenesCofradia');
const imagenesCamaron = document.getElementById('imagenesCamaron');
const imagenesPaparazo = document.getElementById('imagenesPaparazo');
let arrayImagenes = [imagenesAfrica, imagenesCamaron, imagenesCofradia, imagenesPaparazo];

function ocultar() {
    arrayImagenes.forEach((element) => {
        element.classList.remove('active')
    })
}

botonAfrica.addEventListener('click', () => {
    ocultar()
    imagenesAfrica.classList.add('active')
})

botonCofradia.addEventListener('click', () => {
    ocultar()
    imagenesCofradia.classList.add('active')
})

botonCamaron.addEventListener('click', () => {
    ocultar()
    imagenesCamaron.classList.add('active')
})

botonPaparazo.addEventListener('click', () => {
    ocultar()
    imagenesPaparazo.classList.add('active')
})