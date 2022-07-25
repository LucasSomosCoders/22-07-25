
fetch('https://gist.githubusercontent.com/mariodev12/a923f2b651a005ca3ca7f851141efcbc/raw/39b06a32e4a58fc1fe63c7478a97edccd21138f1/superheroes.json')
.then(response => response.json())
.then(data => {
  console.log(data)
  const contenedor = document.getElementById('container')

  data.forEach(element => {
    const tituloH2 = document.createElement('h2');
    tituloH2.textContent = element['superhero'];
    const tituloH4 = document.createElement('h4');
    tituloH4.textContent = element.alter_ego;
    // console.log(tituloH4.textContent)
    const parrafo = document.createElement('p');
    parrafo.textContent = element.publisher;
// Realizado con nodo texto
    // const textParrafo = document.createTextNode(element.publisher);
    // parrafo.appendChild(textParrafo);
    // console.log(parrafo)
    // console.log(textParrafo)
    const divPadre = document.createElement('div');
    divPadre.appendChild(tituloH2);
    divPadre.appendChild(tituloH4);
    divPadre.appendChild(parrafo);

    divPadre.classList.add('hero');

    contenedor.appendChild(divPadre);
  });
});

