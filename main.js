function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelector('.tecla').onclick;

let contador = 0;


while (contador < listaDeTeclas. length) {

    const tecla = listaDeTeclas [contador];
    const instrumento = tecla.classList [1];

    listaDeTeclas [contador].onclick = tocaSom;

    tecla.onclick = function () {
        
        tocaSom('#toca_som_pom');
    };
    contador = contador +1;

    console.log(contador); 
}

