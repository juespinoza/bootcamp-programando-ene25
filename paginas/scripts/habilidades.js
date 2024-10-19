console.log("Estoy en la pagina Habilidades");
import APIManager from "./apiManager.js";

const apiManager = new APIManager("https://jsonplaceholder.typicode.com");

const mostrarHabilidades = (habilidades) => {
  const contenedorPrincipal = document.getElementById("habilidades");

  // recorrer uno a uno todos los elementos de mi lista/array habilidades.
  habilidades.forEach((habilidad) => {
    // console.log("habilidad > ", habilidad);
    // crear los elementos necesarios
    const contenedorHabilidad = document.createElement("div");
    const tituloHabilidad = document.createElement("h3");
    const textoHabilidad = document.createElement("p");

    // llenar los elementos con el contenido dentro de mi objeto habilidad
    contenedorHabilidad.setAttribute("id", `habilidad-${habilidad.id}`);
    tituloHabilidad.textContent = habilidad.title;
    textoHabilidad.textContent = habilidad.body;

    // crear la estructura HTML de padres > hijos
    contenedorHabilidad.appendChild(tituloHabilidad);
    contenedorHabilidad.appendChild(textoHabilidad);
    // contenedorPrincipal(id="habilidades")
    //      contenedorHabilidad 1
    //          titulo
    //          texto
    //      contenedorHabilidad 2
    //          titulo
    //          texto
    //      contenedorHabilidad 3
    //          titulo
    //          texto
    contenedorPrincipal.appendChild(contenedorHabilidad);
  });
};

window.onload = async () => {
  console.log("Habilidades termino de cargarse");
  const habilidades = await apiManager.getPosts();
  //   console.log(habilidades);
  // Agrego condicion para manejar los datos si existen.
  if (habilidades.length > 0) {
    // habilidades tiene datos
    mostrarHabilidades(habilidades);
  } else {
    // habilidades no tiene datos
    console.log("No hay habilidades disponibles.");
  }
};
