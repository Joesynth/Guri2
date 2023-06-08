function ran (n) { return Math.floor(Math.random() * n); } // Cria nº aleatório; ran é random é n é number. Esta função ajuda a outras.

function mudaPosicao() {	// Campo texto em inglês de forma aleatória.
var h1 = document.querySelector("#p6");
h1.style.position = "absolute";
var x = ran(25), y = ran(20);
h1.style.left = 0 + x + "%";
h1.style.top = 10 + y + "%";
}

function mudaPosicaoE() {		// Campo emoji de forma aleatória.
	var h1 = document.querySelector("#p5");
	h1.style.position = "absolute";
	var x = ran(38), y = ran(15);
	h1.style.left = 0 + x + "%";
	h1.style.top = 21 + y + "%";
}

function mCor () {				// Sorteia cor de fundo e cor de texto.
	var l = ["a","b","c","d","e","f"];
	var r = ran(6), g = ran(6), b = ran(6);
	document.querySelector("nav").style.color = "#" + l[r] + l[g] + l[b];
	var rr = ran(9), gg = ran(9), bb = ran(9);
	document.querySelector("nav").style.backgroundColor = "#" + rr + gg + bb;
}


			// inicialização de eventos; onclick.
	function addEvents () {


/* arquivo referente a index2.js*/
 
/* index2.js*/
document.querySelector("#art").addEventListener("click",mudaPosicao);
document.querySelector("#verb").addEventListener("click",mudaPosicao);
document.querySelector("#adje").addEventListener("click",mudaPosicao);
document.querySelector("#comp").addEventListener("click",mudaPosicao);
document.querySelector("#phra").addEventListener("click",mudaPosicao);
document.querySelector("#tran").addEventListener("click",mudaPosicao);
document.querySelector("#home").addEventListener("click",mudaPosicao);
document.querySelector("#toys").addEventListener("click",mudaPosicao);
document.querySelector("#math").addEventListener("click",mudaPosicao);
document.querySelector("#natu").addEventListener("click",mudaPosicao);
document.querySelector("#musi").addEventListener("click",mudaPosicao);



	}
window.addEventListener("load",addEvents);






