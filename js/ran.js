function ran (n) { return Math.floor(Math.random() * n); } // Cria nº aleatório; ran é random é n é number. Esta função ajuda a outras.

function mudaPosicao() {	// Campo texto em inglês de forma aleatória.
var h1 = document.querySelector("#p6");
h1.style.position = "absolute";
var x = ran(25), y = ran(25);
h1.style.left = 0 + x + "%";
h1.style.top = 5 + y + "%";
}

function mudaPosicaoE() {		// Campo emoji de forma aleatória.
	var h1 = document.querySelector("#p5");
	h1.style.position = "absolute";
	var x = ran(40), y = ran(20);
	h1.style.left = 28 + x + "%";
	h1.style.top = 0 + y + "%";
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

		document.getElementById("verbE").addEventListener("click",mudaPosicao);
		document.getElementById("verbE").addEventListener("click",mudaPosicaoE);
		document.getElementById("verbE").addEventListener("click", mCor);

		document.getElementById("adje").addEventListener("click",mudaPosicao);
		document.getElementById("adje").addEventListener("click",mudaPosicaoE);

		document.getElementById("noum").addEventListener("click",mudaPosicao);
		document.getElementById("noum").addEventListener("click",mudaPosicaoE);	

		document.getElementById("musiE").addEventListener("click",mudaPosicao);
		document.getElementById("musiE").addEventListener("click",mudaPosicaoE);

		document.getElementById("foodE").addEventListener("click",mudaPosicao);
		document.getElementById("foodE").addEventListener("click",mudaPosicaoE);

		document.getElementById("compE").addEventListener("click",mudaPosicao);
		document.getElementById("compE").addEventListener("click",mudaPosicaoE);

		document.getElementById("phraE").addEventListener("click",mudaPosicao);
		document.getElementById("phraE").addEventListener("click",mudaPosicaoE);	

		document.getElementById("mathE").addEventListener("click",mudaPosicao);
		document.getElementById("mathE").addEventListener("click",mudaPosicaoE);

		document.getElementById("tran").addEventListener("click",mudaPosicao);
		document.getElementById("tran").addEventListener("click",mudaPosicaoE);

		document.getElementById("inveE").addEventListener("click",mudaPosicao);
		document.getElementById("inveE").addEventListener("click",mudaPosicaoE);

		document.getElementById("toys").addEventListener("click",mudaPosicao);
		document.getElementById("toys").addEventListener("click",mudaPosicaoE);	

		document.getElementById("natuE").addEventListener("click",mudaPosicao);
		document.getElementById("natuE").addEventListener("click",mudaPosicaoE);

		document.getElementById("profE").addEventListener("click",mudaPosicao);
		document.getElementById("profE").addEventListener("click",mudaPosicaoE);

		document.getElementById("artE").addEventListener("click",mudaPosicao);
		document.getElementById("artE").addEventListener("click",mudaPosicaoE);

		document.getElementById("schoE").addEventListener("click",mudaPosicao);
		document.getElementById("schoE").addEventListener("click",mudaPosicaoE);

		document.getElementById("ativE").addEventListener("click",mudaPosicao);
		document.getElementById("ativE").addEventListener("click",mudaPosicaoE);




	}
window.addEventListener("load",addEvents);






