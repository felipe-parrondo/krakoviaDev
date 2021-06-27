const botonAfrica = document.getElementById('africa');
const botonCofradia = document.getElementById('cofradia');
const botonCamaron = document.getElementById('camaron');
const botonPaparazo = document.getElementById('paparazo');
const imagenesAfrica = document.getElementById('imagenesAfrica');
const imagenesCofradia = document.getElementById('imagenesCofradia');
const imagenesCamaron = document.getElementById('imagenesCamaron');
const imagenesPaparazo = document.getElementById('imagenesPaparazo');
let imagenes = [imagenesAfrica, imagenesCamaron, imagenesCofradia, imagenesPaparazo];
let botones = [botonAfrica, botonCofradia, botonCamaron, botonPaparazo]

function ocultar() {
    imagenes.forEach((element) => {
        element.classList.remove('active')
    })
    botones.forEach((element) => {
        element.classList.remove('seleccionado')
    })
}

botonAfrica.addEventListener('click', () => {
    ocultar()
    imagenesAfrica.classList.add('active')
    botonAfrica.classList.add('seleccionado')
})

botonCofradia.addEventListener('click', () => {
    ocultar()
    imagenesCofradia.classList.add('active')
    botonCofradia.classList.add('seleccionado')
})

botonCamaron.addEventListener('click', () => {
    ocultar()
    imagenesCamaron.classList.add('active')
    botonCamaron.classList.add('seleccionado')
})

botonPaparazo.addEventListener('click', () => {
    ocultar()
    imagenesPaparazo.classList.add('active')
    botonPaparazo.classList.add('seleccionado')
})