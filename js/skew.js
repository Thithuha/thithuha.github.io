const section = document.querySelector("section")
let currentPixel = window.pageYOffset

const looper = function () {
  const newPixel = window.pageYOffset
  const diff = newPixel - currentPixel
  
  const top = 8
  const intensity = 0.5
  const speed = top * ((2 / (1 + Math.exp(-1 * intensity * diff))) - 1)
  
  section.style.transform = "skewY(" + speed +"deg)"
  
  
  currentPixel = newPixel
  
  requestAnimationFrame(looper)
}

looper()