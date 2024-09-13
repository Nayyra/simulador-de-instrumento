function tocaSom(idElementoAudio) {
        const elemento = document.querySelector(idElementoAudio);

        if (elemento && elemento.localName === 'audio') {
            elemento.play();
        }else{
            console.log('tem elemento não')
        }
    }
      
const listaDeTeclas = document.querySelectorAll('.tecla');
      
      // para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
        const tecla = listaDeTeclas[contador];
        const instrumento = tecla.classList[1];
          
          // template string
        const idAudio = `#som_${instrumento}`;
      
        tecla.onclick = function () {
              tocaSom(idAudio);
        }


        tecla.onkeydown = function (evento) {
            
        if (evento.code === 'Space' || evento.code === 'Enter' ) {
                    tecla.classList.add('ativa');
        }
    }
        
        
        tecla.onkeyup = function () {
            tecla.classList.remove('ativa');
        }
    }

