const template = document.createElement('template');

template.innerHTML = `

	<img id="slideshow" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Rio_de_Janeiro_city.jpg/800px-Rio_de_Janeiro_city.jpg">



<!-- NOVO do "guri_d" -->
<div id="newDIV2">
			<p id="p7" class="display2">Bem-vindo</p>
			<p id="p6" class="display1">Welcome</p>
			<p id="p5" class="#"></p> <!-- Emoji é o conteúdo e entra via JS -->
</div>

		<aside id="btL">
		  <p id="boTxt1">[Guri]</p>
		  <div class="bts">
				<a href="index.html"><button>👦️</button></a>
				<a href="index2.html"><button>👦️</button></a> 
		  </div>
		  <div class="bts">
				<a href="expert.html"><button>😎️</button></a>
				<a href="art.html"><button>🎭️</button></a>
		  </div>
		  <div class="bts">
				<a href="ti.html"><button>🖥️</button></a>
				<a href="programacao.html"><button>《》</button></a>	
		  </div>
		  <div class="bts">
				<a href="ti3.html"><button>🖥️</button></a>
			  <button>❌️</button>
		  </div>
		</aside>
`;

document.body.appendChild(template.content);
