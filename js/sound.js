
/* Em "expert.js" ainda tem "SpeechSynthesisUtterance"
"art.js" idem.
"programacao.js" idem.
"ti3.js" idem.
"ti.js" idem.
*/



/* Originalmente, código função falar copiado de index.js*/
/* Originalmente, código função falar copiado de index.js*/
/* Originalmente, código função falar copiado de index.js*/

/* A função falar inteira foi apagada, passando agora (no "Guri@") a estar aqui; ou seja, num arquivo .js separado. */


function falar() {			// Faz robô falar de forma padrão (sem mudança de velocidade, timbre, etc.)
var text = document.querySelector('#p6').innerHTML;
var speech = new SpeechSynthesisUtterance();
speech.text = text;
speechSynthesis.speak(speech);
}

function sA() {					// sA é sons aleatórios
  var x = Math.floor((Math.random() * 5) + 1);
    var sound = new Audio();
  switch (x) {
    case 1:
         sound.src = "a.mp3";
         break;
    case 2:
         sound.src = "a.mp3";
         break;
    case 3:
         sound.src = "a.mp3";
         break;
    case 4:
         sound.src = "a.mp3";
         break;
    case 5:
         sound.src = "b.mp3";
         break;
  }
    sound.play();
}



			// inicialização de eventos; onclick.
	function addEvents () {
		// SCREEN A - app amarelo


const cbox = document.querySelectorAll("button");	// Relativo a sA, sons aleatórios nos botões
for (let i = 0; i < cbox.length; i++) {
     cbox[i].addEventListener("click", sA);
     }


		document.getElementById("verbE").addEventListener("click",falar);
		document.getElementById("adje").addEventListener("click",falar);
		document.getElementById("noum").addEventListener("click",falar);


/* Abaixo foi movido de "index2.js pra cá (sound.js)"*/
document.querySelector('#art').addEventListener("click", falar);
document.querySelector('#verb').addEventListener("click", falar);
document.querySelector('#adje').addEventListener("click", falar);
document.querySelector('#noum').addEventListener("click", falar);
document.querySelector('#comp').addEventListener("click", falar);
document.querySelector('#phra').addEventListener("click", falar);
document.querySelector('#tran').addEventListener("click", falar);
document.querySelector('#home').addEventListener("click", falar);
document.querySelector('#toys').addEventListener("click", falar);
document.querySelector('#math').addEventListener("click", falar);	
document.querySelector('#natu').addEventListener("click", falar);
document.querySelector('#musi').addEventListener("click", falar);


	}
window.addEventListener("load",addEvents);


