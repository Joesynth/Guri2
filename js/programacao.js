

/*
############################################################
############################################################
######################## VARIÁVEIS #########################
############################################################
############################################################
*/

// HTML, CSS, JS.

	var htmlP = [ // incluso appinventor
"article"," aside"," section","figure"," img"," figcaption",
"details"," summary","header"," main"," footer",
"ol"," ul","form ","fieldset"," legend",
"select"," option"," optgroup",
"audio"," video","canvas","tr"," td","div"," span",
"caption","cite","dialog","embed","label","object","output","small","source","table","bold",

"p","h1...h6","i","blockquote","strong"," em",
"del"," ins","pre","param","q","hr",

"input"," button"," textarea",
"code"," kbd"," samp"," var",

"th","li","dl","dt",
"dd","a","abbr","address","area","b",
"bdo","blockquote","br","caption",
"dfn",

"iframe",
"keygen","label","li","link","map","mark",
"menu","menuitem","meter","object","output",

"source","sub","sup","time",
"tr","track",

"col","colgroup;",

"nav section","br hr embed source","track area col param wbr",
];



	var htmlR = [
"artigo","a parte (de lado)"," seção","figura"," imagem (image)"," legenda da figura (figure caption)",
"detalhes"," resumo","cabeçalho"," principal"," rodapé",
"lista ordenada (ordered list)"," lista desordenada (unordered list)","formulário"," conjunto de campos"," legenda",
"selecionar"," opção"," grupo de opções (option group)",
"áudio"," vídeo","tela (de pintura)","linha da tabela (table row)"," dados da tabela (table data)","divisão (division)","palmo/período/pequena distância",
"título/subtítulo","citar","diálogo","embutir","rótulo","objeto","saída","pequeno","fonte","tabela","negrito",

"parágrafo (paragraph)","posições (headings)","itálico (italic)","bloco de citação","forte","enfatizado (emphasized)",
"excluído (deleted)"," inserido (inserted)","pré-formatado (preformatted)","parâmetro (parameter)"," cotação (quotation)","regra horizontal (horizontal rule)",

"entrada","botão"," área de texto",
"código"," teclado (keyboard)","amostra (sample)"," variável (variable)",

"cabeçalho da tabela (table header)","Item da lista (list item)","lista de descrição (description list)","",
"descrição (description)","âncora/hiperlink (anchor)"," abreviação (abbreviation)","endereço","área","negrito (bold)",
"bi-directional override","bloco de citação","quebrar/pausa (break)","título/subtítulo",
"definindo (defining)",

"inline frame",
"keygen","rótulo","item da lista (list item)","ligação","mapa de imagem (image-map)","marcado (marked)",
"cardápio","item do menu","medição (measurement)"," objeto","saída",

"fonte"," subscrito (subscripted)"," sobrescrito (superscripted)","data hora (date-time)",
"linha em uma tabela (row in a table)","faixas de texto (text tracks)",

"coluna (column)","grupo de colunas (group of columns)",

"elementos semânticos (semantic elements)","tags vazias (ou elementos vazios (Empty element))","tags vazias (ou elementos vazios (Empty element))",
];



	var htmlRReEx = [	// UPDATE - CAMPO RESPOSTA EXPLICATIVA N CRIADO
"","","","","","",
"","","","","",
"","","","","",
"","","",
"","","","","","","",
"","","","","","","","","","","",

"","","","","","",
"","","","","","",

"","","",
"","","","",

"","","","termo/nome em uma lista de descrição (term; term/name in a description list)",
"","","","","","",
"","","","",
"",
"",

"","","","","","",
"","","","","",

"","","","",
"","",
"","",
"","","",
];






	var html2P = [
"document type",
"html","head, body","style, script","meta, title, link",
"link meta base","base",
];

	var html2R = [
"tipo de documento",
"","cabeça, corpo","estilo, script","metadados (metadata), título, ligação",
"","",
];

	var html2RReEx = [	// UPDATE - ESTE CAMPO NÂo EXISTE
"referente ao !DOCTYPE",
"referente a Linguagem de Marcação de Hipertexto","","","",
"tags vazias (ou elementos vazios (Empty element))","base",
];




	var html3P = [ //appinventor (HTML - atributos)
"src alt title","id class",
"action","autocomplete","autofocus","autoplay","border","charset","checked",
"cite","content","controls","disabled","download","height","high",
"href","kind","label","lang","low","max","maxlength",
"minlength","media","method","min","name","placeholder","rel","required",
"rows","selected","size","style","target","type","value","width",
// Atributo  booleano
"hidden",
// Atributo de evento
"onerror","onload", // Window Event Attributes
"onblur","onchange","onfocus","onselect","onsubmit", // Form Events
"onkeydown","onkeypress","onkeyup", // Keyboard Events
"onclick","onmouseout","onmouseover","onmousemove", // Mouse Events
"ondrag","ondrop", // Drag Events
"oncopy", // Clipboard Events
"onpause","onplay","onvolumechange", // Media Events
"ontoggle", // Misc Events
];

	var html3R = [
"Atributo","Atributo",
"Atributo","Atributo","Atributo","Atributo","Atributo","Atributo","Atributo",
"Atributo","Atributo","Atributo","Atributo","Atributo","Atributo","Atributo",
"Atributo","Atributo","Atributo","Atributo","Atributo","Atributo","Atributo",
"Atributo","Atributo","Atributo","Atributo","Atributo","Atributo","Atributo","Atributo",
"Atributo","Atributo","Atributo","Atributo","Atributo","Atributo","Atributo","Atributo",
// Atributo  booleano
"escondido; atributo  booleano",
//Atributo de evento
"Atributo de evento","Atributo de evento",
"Atributo de evento","Atributo de evento","Atributo de evento","Atributo de evento","Atributo de evento",
"Atributo de evento","Atributo de evento","Atributo de evento",
"Atributo de evento","Atributo de evento","Atributo de evento","Atributo de evento",
"Atributo de evento","Atributo de evento",
"Atributo de evento",
"Atributo de evento","Atributo de evento","Atributo de evento",
"Atributo de evento",
];


	var html3RReEx = [	// UPDATE - ESSE CAMPO NÃo EXISTE
"atributos usados em imgs","atributo, atributo",
"atributo","atributo","atributo","atributo","atributo","atributo","atributo",
"atributo","atributo","atributo","atributo","atributo","atributo","atributo",
"hypertext reference","atributo","atributo","atributo","atributo","atributo","atributo",
"atributo","atributo","atributo","atributo","atributo","atributo","atributo","atributo",
"atributo","atributo","atributo","atributo","atributo","atributo","atributo","atributo",
//Atributo de evento
"Atributo de evento","Atributo de evento",
"Atributo de evento","Atributo de evento","Atributo de evento","Atributo de evento","Atributo de evento",
"Atributo de evento","Atributo de evento","Atributo de evento",
"Atributo de evento","Atributo de evento","Atributo de evento","Atributo de evento",
"Atributo de evento","Atributo de evento",
"Atributo de evento",
"Atributo de evento","Atributo de evento","Atributo de evento",
"Atributo de evento",
];



	var css2P = [	// css, incluso app inventor
"animation:","animation-duration:","justify-content:","display:","background:","background-image:","background-color:","background-repeat:",
"background-position:","background-size:","background-attachment:","border:","border-style:","border-width:","border-color:","border-top:",
"border-bottom:","border-radius:","box-shadow:","box-sizing:","color:","cursor:","font:","font-size:",
"font-family:","font-weight:","font-style:","line-height:",
"margin:","margin-right:","margin-bottom:","margin-left:",
"padding:","padding-top:","padding-right:",

"position:","color:","top:","left:","right:","bottom:","clear:","clip:","letter-spacing:","transition:",
"text-align:","text-decoration:","text-indent:","text-shadow:","text-transform:",
"z-index:","filter","width:","direction:","float:","height:","overflow:",
"list-style:","opacity:","visibility","justify-content:","align-items:","flex-direction:",
"transform",
];
	var css2R = [
"animação","duração da animação ","justificar o conteúdo","exibir, exibição","fundo","imagem de fundo","cor de fundo","repetição de fundo",
"posição de fundo","tamanho de fundo","anexo de fundo","borda","estilo de borda","largura da borda","cor da borda","fronteira superior",
"fronteira inferior","raio da borda","sombra da caixa","dimensionamento da caixa","cor","cursor","fonte","tamanho da fonte",
"família de fontes","peso da fonte, espessura","estilo de fonte","altura da linha",
"margem","margem direita","margem inferior","margem esquerda",
"preenchimento","preenchimento superior","preenchimento direito",

"posição:","cor","topo","esquerda","direita","inferior","claro","grampo","espaçamento entre letras","transição",
"alinhamento de texto","decoração de texto","recuo do texto","sombra de texto","transformação de texto",
"ordem-z","filtro","largura","direção","flutuar","altura","transbordar",
"estilo de lista","opacidade","visibilidade","justificar o conteúdo","alinhar itens:","direção fexível",
"",
];






/*
//Palavras reservadas pelo browser
"alert, blur, closed, document, focus, frames, history, innerHeight, innerWidth",
"length, location, navigator, open, outerHeight, outerWidth, parent",
"screen, screenX, screenY, statusbar, window",
//Palavras reservadas
"break, case, catch, continue, debugger, default, delete, do, else",
"false, finally, for, function, if, in, instanceof, new, null, return, switch, this, throw, true, try, typeof",
"var, void, while, with",
// Operador
".","typeof()","this","new","delete","in","instanceof",

//Palavras reservadas pelo browser
"Palavras reservadas pelo browser",
"Palavras reservadas pelo browser",
"Palavras reservadas pelo browser",
//Palavras reservadas
"Palavras reservadas da JS",
"Palavras reservadas da JS",
"Palavras reservadas da JS",
// Operador
"op -acessa propriedade de um objeto.","op - tipo de","op","op","op","op","op",
*/

	var cssP = [	// objetos nativos (objetos globais)
".length","toUpperCase()","concat()",
"getHours()","getSeconds()","getTime()","getMinutes()","getMilliseconds()","getDate()",
"getDay()","getMonth()",
"ceil()","floor()","abs()","random()",

"pow()","sqrt()",".PI",
".length","indexOf()","join()",
"concat()","sort()","reverse()","slice()",
"splice()","push()",
];
	var cssR = [ 	// objetos nativos (objetos globais)
"comprimento","para maiúsculas","concatenar (concatenate)",
"obter horas","obter segundos","obter hora","obter minutos","obter milissegundos","obter data",
"obter dia","obter mês",
"teto","piso, chão","absolute (absoluto)","aleatório",

"potência (power)","square root (raiz quadrada)","",
"comprimento","índice de","juntar",
"","classificar,organizar","reverter","fatiar,cortar",
"emendar","empurrar",
];

	var cssReEx = [	// UPDATE: CAMPO N EXISTE NO DISPLAY
"Retorna o comprimento de uma string; ob. string","Converte uma string para letras maiúsculas","Junta duas ou mais strings e retorna uma nova",
"ob. date","ob. date","; ob. date","ob. date","ob. date","ob. date",
"ob. date","ob. date",
"arredondamento; ob. math","arredondamento; ob. math","retorna o valor absoluto de um n°; ob. math","retorna um n° entre 0 e 1; ob. math",

"retorna x para potência de y; ob. math","retorna a raiz quadrada de x; ob. math","retorna 3.14...",
"retorna o nº de elementos; ob. array","retorna o índice; ob. array","muda o separador padrão (vírgula); ob. array",
"concatena outros elementos; ob. array","põe em ordem alfebética; ob. array","inverte ordem; ob. array","recorta parte do array; ob. array",
"substitui elementos; ob. array","adiciona novo elemento; ob. array",
];

	var css3P = [	//DOM
// método
"document.write()","addEventListener()",
"getElementById()","getElementsByTagName()",
"querySelector()","querySelectorAll()","getElementsByClassName()",
"play()","arc()",

"document.createElement()",
"getContext()","fillRect()",
// propriedade
".innerHTML","innerText",
".currentTime",
"document.forms","document.cookie","document.links","document.images",
".controls",".volume",".duration",
".fillStyle",
"onclick","style",
// outros
];


	var css3R = [
// método
"documento, escreva","adicionar ouvinte de evento, adiciona escutador",
"obter elemento por id","obter elementos pelo nome da tag",
"seletor de consulta","seletor de consulta (tudo)","obter elementos pelo nome da classe",
"toque","arco",

"documento, cria um elemento (HTML)",
"obter contexto","preencher (fill)",
// propriedade
"HTML interno","texto interno",
"hora atual",
"documento, formulários","documento, biscoito","documento, ligações","documento, imagens",
"controles","","duração",
"preencher (fill)",
"ao clicar","estilo",
// outros
];

	var css3ReEx = [ //UPDATE = ESTE CAMPO N EXISTE
// método
"ob. document","",
"ob. document","ob. document",
"ob. document","ob. document","ob. document",
"inicia tocando o áudio; ob. áudio","relativo à tela (canvas)",

"",
"retorna um objeto que tem métodos e propriedades para desenhar","relativo à tela (canvas)",
// propriedade
"altera o conteúdo HTML de uma tag p; ob. document","",
"acerta ou retorna a atual posição em ms; ob. áudio",
"ob. document","ob. document","ob. document","ob. document",
"define se controles serão exibidos; ob. áudio","acerta ou retorna o volume de áudio; ob. áudio","retorna o comprimento do áudio em s; ob. áudio",
"relativo à tela (canvas)",
"","",
// outros
"representa um elemento HTML botão","representa um elemento HTML áudio",
];


	var cssCP = [
"lightgreen darkgreen","lightblue darkblue","lightsalmon darksalmon","lightgray darkgray",
"lightgrey darkgrey","lightseagreen darkseagreen","lightcyan darkcyan","lightskyblue blueviolet",
"silver gold","olive chocolate brown","lightcoral lightpink","pink darkred",
];

	var cssCR = [
"","","","",
"","","","",
"","","","",
];


var cssVP = [
"absolute | relative","visible | hidden","uppercase","grayscale() | blur()",
"center","flex","solid","bold",
"inset","double","no-repeat","fixed",
"column","row","pointer","left | right",

"block | table | none | inline-block | inherit | list-item",
"mv boli | monospace | cursive | Bree Serif","sans-serif | serif",

"linear-gradient()","var()","invert()",
"space-evenly | center | space-between | space-around","rotate()",
];

var cssVR = [
"","visível | oculto","maiúscula","escala de cinza | desfoque, desfocar, borrar",
"centro","flexível","","",
"","","","",
"","","","",

"",
"","",

"","","",
"","",
];


var emojP = [
"🏠️","📞️","📧️","🔊️","🎤️","🎧️","⚙️","✏️",
"▶️","⏸️","⏹️","⭐️","⏰️","🔋️",
"⌨️","🖱️","🔑️","🛡️","💳️",

"⚠️","🛒️","☁️","🖼️",
"❌️","⭕️","✔️","©️",
"🔢️","🔤️","⬆️","⬇️",
"♀️","♂️",
"➰️","⏩️","⏭️","🎮️",

"💾️","💽️","🖥️","🎵️","🎶️","🎼️","📈️","📊️",
"🌐️","🌍️","🌎️","🌏️","🔗️","🔆️","🎛️","🎚️",
];

var emojR = [
"house","telephone","mail","speaker","microphone","headphone","gear","pen",
"play","pause","stop","star","clock","battery",
"keyboard","mouse","key","shield"," card",

"warning","shopping","cloud","picture",
"cross","circle","check","copyright",
"number","letter","up arrow","down arrow",
"female","male",
"loop","forward","next","game",

"disk","disk","computer","music","music","music","chart","chart",
"globe","globe","globe","globe","link","bright","knob","slider",
];


var markP = [
"#","##","######","-",
"*","**","|-",">",
"[]()","![]()","1.",
];

var markR = [
"title","title 2","title 6","list",
"italic","bold","table","blockquote",
"link","image","list",
];


	var evenP = [	// Eventos JS
"keydown","keypress","keyup",
"mouseout",
"keydown keypress keyup","onclick onmousemove onmouseover onmouseout",
];

	var evenR = [	// Eventos JS
"","","",
"",
"","",
];

	var evenReEx = [	// UPDATE - CAMPO N EXISTE
"pressiona uma tecla; evento","matém pressionada uma tecla; evento","libera uma tecla pressionada; evento",
"mouse para fora (mouse out)",
"eventos de teclado","eventos de mouse",
];





	var JsPc = [ 	// BOM
"alert() confirm() prompt()","open() close() moveTo() resizeTo()",
"window.onload","window.onmousemove","window.onmouseover","window.onclick","window.onkeydown","window.onchange",
"screen.width","screen.height","screen.pixelDepth",
"navigator.plugins","navigator.platform","navigator.userAgent","navigator.cookieEnabled",
"navigator.language","navigator.appName","navigator.appCodeName","navigator.onLine",
"location.href",
"history.back()","history.forward()","history.go()",
"console.log()","clear()",
];	

	var JsRc = [
"","",
"","","","","","",
"","","",
"","","","",
"","","","",
"",
"","","",
"","",
];

	var JsRcReEx = [	// UPDATE - CAMPO N CRIADO
"janelas; ob. window","referente à janelas; ob. window",
"ob. window","ob. window","ob. window","ob. window","ob. window","ob. window",
"retorna largura; ob. screen","retorna altura; ob. screen","retorna resolução; ob. screen",
"ob. navigator","ob. navigator","ob. navigator","ob. navigator",
"ob. navigator","ob. navigator","ob. navigator","ob. navigator",
"ob. location",
"ob. history","ob. history","ob. history",
"mensagem via console; ob. console","limpa o console; ob. console",
];




var objeP = [
"window","navigator","screen","location","localStorage","sessionStorage","history","frames",
"document","xmlHttpRequest",
"Math","Array","Date","String",
"Button Object","Audio object",
];

var objeR = [
"","","","","","","","",
"","",
"","","","",
"","",
];

var reseP = [
//Palavras reservadas do JavaScript
"break","case","catch","continue","debugger","default","delete","do","else","false","finally","for","function",
"if","in","instanceof","new","null","return","switch","this","throw","true","try","typeof","var","void","while","with",
//Palavras reservadas pelo browser
"alert","blur","closed","document","focus","frames","history","innerHeight","innerWidth","length","location",
"navigator","open","outerHeight","outerWidth","parent","screen","screenX","screenY","statusbar","window",
//Palavras reservadas para propósitos futuros
"abstract","boolean","byte","char","class","const","double","enum","export","extends","final","float","goto",
"implements","import","int","interface","let","long","native","package","private","protected","public",
"short","static","super","synchronized","throws","transient","volatile","yield",
];

var reseR = [
//Palavras reservadas do JavaScript
"","","","","","","",
"","","","","","","",
"","","","","","","",
"","","","","","","",
"",
//Palavras reservadas pelo browser
"","","","","","","",
"","","","","","","",
"","","","","","","",
//Palavras reservadas para propósitos futuros
"","","","","","","",
"","","","","","","",
"","","","","","","",
"","","","","","","",
"","","","",
];


/* O "S" em "cssS" significa pSeudo-class. */
var cssSP = [
":active",":checked",":fullscreen",":modal",":enabled",":disabled",":placeholder-shown",":required",
":optional",":user-invalid",":lang()",":link",":visited",":target",":playing",":paused",
":root",":empty",":first-child",":last-child",":only-child",":hover",":focus",":focus-visible",
//Pseudo-elements
"::after","::before","::backdrop","::first-letter","::first-line","::placeholder",
];


var cssSR = [
"","","","","","","","",
"","","","","","","","",
"","","","","","","","",
"","","","","","",
];




/*
############################################################
############################################################
############### FUNÇÔES PRINCIPAIS #########################
############################################################
############################################################
*/

// random, falar...

function ran (n) { return Math.floor(Math.random() * n); } // Cria nº aleatório; ran é random é n é number. Esta função ajuda a outras.


/* Função "falar()" excluída daqui ! ! ! */

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


/* Função "function sA()" excluída daqui!! */


		function sor (a, b, c) { 	// Sorteia, sendo, a pergunta, b resposta, c emoji
var i = ran(a.length); // guarda um índice aletatório. 
document.querySelector('#p6').innerHTML= a[i]; // a é o array de pergunta
document.querySelector('#p7').innerHTML = b[i]; // b é o array de resposta
document.querySelector('#p5').innerHTML = c[i]; // c é o array emoji.
	}

/*
############################################################
############################################################
############ FUNÇÂO ESPECÍFICA PRA CADA BOTÂO ##############
############################################################
############################################################
*/
		function html () { 	// Sorteia um índice, e dele escreve o correspondente termo em inglês, português e emoji.
var i = `${ran(htmlP.length)}`; // guarda um índice aletatório. 
document.querySelector('#p6').innerHTML= htmlP[i]; // Escreve o array no Display pergunta, conforme índice.
document.querySelector('#p7').innerHTML = htmlR[i]; // Idem no display resposta.
document.querySelector('#p5').innerHTML = htmlR[i]; // Idem no display emoji.
	}

		function html2 () {
var i = `${ran(html2P.length)}`;
document.querySelector('#p6').innerHTML= html2P[i];
document.querySelector('#p7').innerHTML = html2R[i];
document.querySelector('#p5').innerHTML = html2R[i];
	}



	function html3() {
	//	var rndCor = Math.floor(Math.random()*(LogPc.length));
	//document.getElementById('p11').innerHTML = LogPc[rndCor];
	//document.getElementById('p12').innerHTML = LogRc[rndCor];
		 var rndCor = Math.floor(Math.random()*(html3P.length));
		 var rndCor2 =  html3P[rndCor];
		
	    document.getElementById('p7').innerHTML = html3R[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}

		function css() {
		 var rndCor = Math.floor(Math.random()*(cssP.length));
		 var rndCor2 =  cssP[rndCor];
		
	    document.getElementById('p7').innerHTML = cssR[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
		}

	function css2() {
	//	var rndCor = Math.floor(Math.random()*(cssP.length));
	//document.getElementById('p2').innerHTML = cssP[rndCor];
	//document.getElementById('p3').innerHTML = cssR[rndCor];
		 var rndCor = Math.floor(Math.random()*(css2P.length));
		 var rndCor2 =  css2P[rndCor];
		
	    document.getElementById('p7').innerHTML = css2R[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}

		function cssS () {
var i = `${ran(html2P.length)}`;
document.querySelector('#p6').innerHTML= cssSP[i];
document.querySelector('#p7').innerHTML = cssSR[i];
	}

	function cssC() {
	//	var rndCor = Math.floor(Math.random()*(cssP.length));
	//document.getElementById('p2').innerHTML = cssP[rndCor];
	//document.getElementById('p3').innerHTML = cssR[rndCor];
		 var rndCor = Math.floor(Math.random()*(cssCP.length));
		 var rndCor2 =  cssCP[rndCor];
		
	    document.getElementById('p7').innerHTML = cssCR[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}

	function cssV() {
	//	var rndCor = Math.floor(Math.random()*(cssP.length));
	//document.getElementById('p2').innerHTML = cssP[rndCor];
	//document.getElementById('p3').innerHTML = cssR[rndCor];
		 var rndCor = Math.floor(Math.random()*(cssVP.length));
		 var rndCor2 =  cssVP[rndCor];
		
	    document.getElementById('p7').innerHTML = cssVR[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}

	function emoj() {
	//	var rndCor = Math.floor(Math.random()*(cssP.length));
	//document.getElementById('p2').innerHTML = cssP[rndCor];
	//document.getElementById('p3').innerHTML = cssR[rndCor];
		 var rndCor = Math.floor(Math.random()*(emojP.length));
		 var rndCor2 =  emojP[rndCor];
		
	    document.getElementById('p7').innerHTML = emojR[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}

	function mark() {
	//	var rndCor = Math.floor(Math.random()*(cssP.length));
	//document.getElementById('p2').innerHTML = cssP[rndCor];
	//document.getElementById('p3').innerHTML = cssR[rndCor];
		 var rndCor = Math.floor(Math.random()*(markP.length));
		 var rndCor2 =  markP[rndCor];
		
	    document.getElementById('p7').innerHTML = markR[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}

	function jsdo() {
	//	var rndCor = Math.floor(Math.random()*(LogPc.length));
	//document.getElementById('p11').innerHTML = LogPc[rndCor];
	//document.getElementById('p12').innerHTML = LogRc[rndCor];
		 var rndCor = Math.floor(Math.random()*(css3P.length));
		 var rndCor2 =  css3P[rndCor];
		
	    document.getElementById('p7').innerHTML = css3R[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}

	function js3() {
	//	var rndCor = Math.floor(Math.random()*(JsPc.length));
	//document.getElementById('p11').innerHTML = JsPc[rndCor];
	//document.getElementById('p12').innerHTML = JsRc[rndCor];
		 var rndCor = Math.floor(Math.random()*(JsPc.length));
		 var rndCor2 =  JsPc[rndCor];
		
	    document.getElementById('p7').innerHTML = JsRc[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}




	function even() {
	//	var rndCor = Math.floor(Math.random()*(HarPc.length));
	//document.getElementById('p11').innerHTML = HarPc[rndCor];
	//document.getElementById('p12').innerHTML = HarRc[rndCor];
		 var rndCor = Math.floor(Math.random()*(evenP.length));
		 var rndCor2 =  evenP[rndCor];
		
	    document.getElementById('p7').innerHTML = evenR[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}



	function obje() {
	//	var rndCor = Math.floor(Math.random()*(HarPc.length));
	//document.getElementById('p11').innerHTML = HarPc[rndCor];
	//document.getElementById('p12').innerHTML = HarRc[rndCor];
		 var rndCor = Math.floor(Math.random()*(objeP.length));
		 var rndCor2 =  objeP[rndCor];
		
	    document.getElementById('p7').innerHTML = objeR[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}

	function rese() {
	//	var rndCor = Math.floor(Math.random()*(HarPc.length));
	//document.getElementById('p11').innerHTML = HarPc[rndCor];
	//document.getElementById('p12').innerHTML = HarRc[rndCor];
		 var rndCor = Math.floor(Math.random()*(reseP.length));
		 var rndCor2 =  reseP[rndCor];
		
	    document.getElementById('p7').innerHTML = reseR[rndCor];      // text2 display r
	    
	    var text = document.getElementById('p6');                      // text display p
	    var speech = new SpeechSynthesisUtterance();
	    speech.rate = 0.7;  // 0.1 to 10
	    speech.pitch = 1;   // 0 to 2
	    speech.volume = 1;   // 0 to 1
	    speech.voice = speechSynthesis.getVoices()[3];
	    speech.text = text.innerHTML= rndCor2; // ou .text = "alguma coisa";
	    speechSynthesis.speak(speech);
	}






/*
############################################################
############################################################
############### inicialização de eventos ###################
############################################################
############################################################
*/

			// inicialização de eventos; onclick.
	function addEvents () {
		// SCREEN 3		
		document.getElementById("html").addEventListener("click",html);
		document.querySelector('#html').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "BODY";});
		document.getElementById("html2").addEventListener("click",html2);
		document.querySelector('#html2').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "HEAD";});
		document.getElementById("html3").addEventListener("click",html3);
		document.querySelector('#html3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "ATRIBUTO";});
		document.getElementById("css").addEventListener("click",css);
		document.querySelector('#css').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "NATIVO - MÉTODO - PROPRIEDADE";});

		document.getElementById("css2").addEventListener("click",css2);
		document.querySelector('#css2').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "CSS";});
		document.getElementById("jsdo").addEventListener("click",jsdo);
		document.querySelector('#jsdo').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "DOM - MÉTODO - PROPRIEDADE";});
		document.getElementById("js3").addEventListener("click",js3);
		document.querySelector('#js3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "BOM - MÉTODO - PROPRIEDADE";});
		document.getElementById("even").addEventListener("click",even);
		document.querySelector('#even').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "JS - EVENTOS";});
		document.getElementById("obje").addEventListener("click",obje);
		document.querySelector('#obje').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "JS - OBJETOS";});
		document.getElementById("rese").addEventListener("click",rese);
		document.querySelector('#rese').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "RESERVADAS";});

		document.getElementById("cssC").addEventListener("click",cssC);
		document.querySelector('#cssC').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "CSS - CORES";});

		document.getElementById("cssV").addEventListener("click",cssV);
		document.querySelector('#cssV').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "CSS - VALOR";});

		document.getElementById("emoj").addEventListener("click",emoj);
		document.querySelector('#emoj').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "EMOJI";});

		document.getElementById("mark").addEventListener("click",mark);
		document.querySelector('#mark').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "MARKDOWN";});

		document.getElementById("cssS").addEventListener("click",cssS);
		document.querySelector('#cssS').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "PSEUDO-CLASS - PSEUDO-ELEMENTS";});

	}
window.addEventListener("load",addEvents);
