function togglemode() {
  const html = document.documentElement
  html.classList.toggle("lighty")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("lighty")) {
    // se tiver lighty mode, adicionar a imagem litghty
    img.setAttribute("src", "./assets/foot.png")
  } else {
    // se tiver sem lighty, colocar a imagem normal
    img.setAttribute("src", "./assets/foto.png")
  }
}
