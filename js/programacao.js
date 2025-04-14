


// ############################################################
// ############################################################
// ######################## VARIÁVEIS #########################
// ############################################################
// ############################################################


// HTML, CSS, JS.
	var htmlP = [ // incluso appinventor
// invisíveis
"header main footer","nav section article aside",
"div span",
// Wordpress - UI - texto
"dl dt dd","i em mark",
"a abbr cite",
"h1...h6 p","strong b blockquote",
"ul ol li",
"del ins","small sup sub",
"pre code var kbd samp",
"address",
// Wordpress - empty element - elementos vazios
"br hr",
// table
"table caption tr td th",
"colgroup col",
// UI não texto
"i span",
// media
"map area","source","object param","embed",
// other
"keygen","time","q",
"dfn, bdo",
// empty element / elementos vazios
"embed source","track area col param wbr",
];

	var htmlR = [
// invisíveis
"cabeçalho, principal, rodapé","navegação, seção, artigo, a parte (de lado)",
"divisão (division), palmo/período/pequena distância",
// Wordpress - UI - texto
"lista de descrição (description list), ?, descrição (description)","itálico (italic), enfatizado (emphasized), marcado (marked)",
"âncora/hiperlink (anchor), abreviação (abbreviation), citar (título de uma obra)",
"posições (headings) parágrafo (paragraph)","forte, negrito (bold), bloco de citação",
"lista desordenada (unordered list), lista ordenada (ordered list), item da lista (list item)",
"excluído (deleted) inserido (inserted)","pequeno, sobrescrito (superscripted), subscrito (subscripted)",
"pré-formatado (preformatted), código, variável (variable; é mostrado em itálico), teclado (keyboard), amostra (sample)",
"endereço",
// Wordpress - empty element - elementos vazios
"quebrar/pausa (break); regra horizontal (horizontal rule);tags vazias",
// table

"tabela, título/subtítulo/legenda (de tabela), linha da tabela (table row), dados da tabela (table data), cabeçalho da tabela (table header)",
"grupo de colunas (group of columns), coluna (column)",
// UI não texto
"elementos usados ​​para adicionar ícones",
// media
"mapa de imagem (image-map), área (ambas relativas à imagem)","fonte (mídia)","objeto parâmetro (parameter)","embutir (mídia áudio/vídeo)",
// other
"par de chaves (pública-privada)","data hora (date-time)","cotação (quotation) (citação curta)",
"definindo (defining), bi-directional override",
// empty element / elementos vazios
"tags vazias","tags vazias",
];



/*
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
"","","","termo/nome em uma lista de descrição (term; term/name 
"par de chaves (pública-privada)","data hora (date-time)","regra horizontal (horizontal rule)in a description list)",
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
*/





	var html2P = [		// head
"!DOCTYPE html",
"head body","style",
"meta script",
"base",
"title link",
];

	var html2R = [
"",
"cabeça, corpo","estilo",
"metadados (metadata), script",
"",
"título; ligação ",
];

	var html2RReEx = [	// UPDATE - ESTE CAMPO NÂo EXISTE
"instrução que diz ao navegador a versão do HTML",
"","","",
"","",
"",
];




	var html3P = [ //appinventor (HTML - atributos, attribute)
"name content",
"href title","src title alt",
"id class",
"action method","border","charset",
"cite",
"download",
"kind","label","lang","low","min max","minlength maxlength",
"media","placeholder autocomplete","rel",
"rows cols","size","style","target","type","width height",
// Atributo usado, por ex., em tag input
"type value(exceto image) disabled form name",
// Atributo Booleano
"checked required autofocus",
"hidden defer disabled selected",
"autoplay controls loop muted",
// Atributo de Evento
"onerror onload", // Window Event Attributes
"onblur onchange onfocus onselect onsubmit", // Form Events
"onkeydown onkeypress onkeyup", // Keyboard Events
"onclick onmouseout onmouseover onmousemove", // Mouse Events
"ondrag ondrop", // Drag Events
"oncopy", // Clipboard Events
"onpause onplay onvolumechange", // Media Events
"ontoggle", // Misc Events
];

	var html3R = [
"Atri. usado em tag meta",
"Atri. usado em tag a","Atri. usado em tag img",
"identifier, class",
"Atributo","Atributo","Atributo",
"Atributo",
"Atributo",
"Atributo","Atributo","Atributo","Atributo","Atributo (por ex. tag input)","Atributo (por ex. tag input)",
"Atributo","Atributo (por ex. tag input)","Atributo",
"Atributos (para tag textarea)","Atributo","Atributo","Atributo","Atributo","largura altura",
// Atributo usado, por ex., em tag input
"atri. usado tag input",
// Atributo booleano
"atri. booleano (tag input): ?, ?, ? ",
"atri. booleano: escondido, ?, ?, ?",
"atri. booleano: ?, ?, ?, ?",

//Atributo de evento
"atri. de evento: Window Event Attributes",
"atri. de evento: Form Events",
"atri. de evento: Keyboard Events",
"atri. de evento: Mouse Events",
"atri. de evento: Drag Events",
"atri. de evento: Clipboard Events",
"atri. de evento: Media Events",
"atri. de evento: Misc Events",
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



var html4P = [
"figure img figcaption","audio source","video source track",
"object","iframe",

"fieldset legend form label",
"input button textarea select option",
"select","input",
"select option","select optgroup option",
"textarea","datalist option",

"input type='text' input type='password'",
"input type='checkbox' input type='radio'",
"input type='button' input type='submit' value='Enviar' input type='reset' input type='image'",
"input type='range' input type='color' input type='date' input type='file'",
"input type='number' input type='tel'",
"input type='email' input type='search' input type='url'",
"output",

"details summary dialog",
// Elementos Gráficos (Tags visuais)
"meter progress","svg","canvas",
];


var html4R = [
"Media: figura, imagem (image), legenda da figura (figure caption)","Media; áudio, fonte","Media; vídeo, fonte, faixas de texto (text tracks)",
"Media. Objeto. Incorpora elemento multimídia como arquivo pdf, áudio, vídeo...","Media. Inline frame, inseri uma página dentro doutra",

"conjunto de campos, legenda, formulário, etiqueta/rótulo",
"elementos mais comuns: entrada, botão, área de texto...",
"usado em caixas de listagem e caixas de menu suspenso","entrada",
"selecionar, opção","selecionar, grupo de opções (option group), opção",
"colher informações como comentários, sugestões, reclamações; ou escrever um currículo, texto maior","",

"tipos de input (entrada)",
"tipos de input (entrada)",
"tipos de input (entrada)",
"tipos de input (entrada)",
"tipos de input (entrada)",
"tipos de input (entrada)",
"saída (mostra resultado de um cálculo ou ação do usuário, contexto de formulário)",


"detalhes, resumo; diálogo (caixa de diálogo; relativo a pop-up, modal)",
// Elementos Gráficos (Tags visuais)
"medidor, ?","permite gráficos baseados em vetor","tela (de pintura); pode ser usado para desenhar gráficos",
];



	var css2P = [	// css, incluso app inventor
"animation | animation-duration | animation-name","display:",
"background:","background-image:","background-repeat:",
"background-position:","background-size:","background-attachment:",
"border-style:","border-width:","border-color:","border-top:",
"border-bottom:","","box-sizing:","color: background-color:","cursor:",
"font:","font-size: font-family:","font-weight: font-style:",
"line-height:","text-height",
"margin: padding:","margin-top: margin-bottom:","margin-left: margin-right:",
"padding-top: padding-right:",

"position: top: left: right: bottom:","clear:","clip:",
"letter-spacing: word-spacing:","transition:",
"text-align: | text-indent:","text-decoration:","text-shadow: box-shadow:",
"text-transform:",
"z-index:","direction:","float:","overflow:",
"list-style:",
"opacity: visibility: filter:",
"flex: flex-direction:","justify-content: align-items:",
"vertical-align:",
"width: height:","border: border-radius:",
"transform:",
];



	var css2R = [
"animação | duração da animação | nome da animação","exibir, exibição",
"fundo","imagem de fundo","repetição de fundo",
"posição de fundo","tamanho de fundo","anexo de fundo",
"estilo de borda","largura da borda","cor da borda","fronteira superior",
"fronteira inferior","","dimensionamento da caixa","cor, cor de fundo","cursor",
"fonte","tamanho da fonte, família de fontes","peso da fonte (espessura), estilo de fonte",
"altura da linha","",
"margem, preenchimento","margem superior, margem inferior","margem esquerda, margem direita",
"preenchimento superior, preenchimento direito",

"posição, topo, esquerda, direita, inferior","claro","grampo",
"espaçamento entre letras, palavras","transição",
"alinhamento de texto | recuo do texto","decoração de texto","sombra de texto, sombra da caixa",
"transformação de texto",
"ordem-z","direção","flutuar","transbordar",
"estilo de lista",
"opacidade, visibilidade, filtro",
"flexíonar, direção fexível","justificar o conteúdo, alinhar itens:",
"alinhamento vertical (por ex. célula de tabela)",
"largura, altura","borda, raio da borda",
"tranformar (rotate, scale, skew...)",
];






/*
// Palavras reservadas pelo browser
"alert, blur, closed, document, focus, frames, history, innerHeight, innerWidth",
"length, location, navigator, open, outerHeight, outerWidth, parent",
"screen, screenX, screenY, statusbar, window",
// Palavras reservadas
"break, case, catch, continue, debugger, default, delete, do, else",
"false, finally, for, function, if, in, instanceof, new, null, return, switch, this, throw, true, try, typeof",
"var, void, while, with",
// Operador
".","typeof()","this","new","delete","in","instanceof",

// Palavras reservadas pelo browser
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
"play()","load()","pause()",

"arc()",
"document.createElement() ",
"getContext()","fillRect()",

// propriedade
"autoplay","controls","currentTime","duration",
"ended","loop",
"muted","paused",
"preload","src",
".controls",".volume",".duration",

".innerHTML","innerText",
".currentTime",
"document.forms","document.cookie","document.links","document.images",
".fillStyle",
"onclick","style",
// outros
];


// document.body.appendChild() [estava em uso numa versão desse app de backup]

	var css3R = [
// método
"documento, escreva","adicionar ouvinte de evento, adiciona escutador",
"obter elemento por id","obter elementos pelo nome da tag",
"seletor de consulta","seletor de consulta (tudo)","obter elementos pelo nome da classe",
"toque, inicia (a reprodução); referente a áudio","referente a áudio","referente a áudio",

"arco",
"documento, cria um elemento (HTML)",
"obter contexto","preencher (fill)",

// propriedade
"propriedade referente a áudio; booleano","propriedade referente a áudio; booleano","propriedade referente a áudio","propriedade referente a áudio",
"propriedade referente a áudio; booleano; somente leitura","propriedade referente a áudio; booleano",
"propriedade referente a áudio; booleano","propriedade referente a áudio; booleano; somente leitura",
"propriedade referente a áudio","propriedade referente a áudio; string que reflete o atributo HTML src",
"controles","propriedade que vai de 0 a 1","duração",

"HTML interno","texto interno",
"hora atual",
"documento, formulários","documento, biscoito","documento, ligações","documento, imagens",
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
"silver gold","olive chocolate brown","lightcoral","red darkred",
"lightyellow darkyellow","lightpink pink","orange darkorange","",
];

	var cssCR = [
"","","","",
"","","","",
"","","","",
"","","","",
];


var cssVP = [
"absolute | relative | fixed","visible | hidden","uppercase | lowercase | capitalize","brightness() | contrast() | grayscale() ",
"center","flex | inline | block table","1px solid yellow","bold",
"inset 0 0 5px red","double","no-repeat","fixed",
"column","row","pointer","left | right",

"block | table | none | inline-block | inherit | list-item","8px 16px","none",
"mv boli | monospace | cursive | Bree Serif","sans-serif | serif",
"3px 3px 4px red",

"linear-gradient()","var()","invert() | opacity() | blur()",
"space-evenly | center | space-between | space-around","rotate()","left | right | justify | center","middle | top | bottom",
];

var cssVR = [
"relativo à position","visível | oculto","maiúscula, minúsculas, capitalizar; relativas à text-transform","brilho | contraste | escala de cinza",
"centro","flexível; e outras relativas à display","border","",
"sombra interna vermelha, num botão por ex.","","","",
"","","","sem serifa, serifa",

"relativas à display","padding respectivamente top/bottom e esquerda/direita","um valor relativo à list-style numa ul",
"","",
"posição horizontal, vertical, blur, cor; relativo à propriedade text-shadow",

"","","invertida | opacidade | desfoque, desfocar, borrar",
"","","relativas à text-align","relativo a vertical-align",
];


var emojP = [
"🏠️ house","📞️ telephone","📧️ mail","🔊️ speaker","🎤️ microphone","🎧️ headphone","⚙️ gear","✏️ pen",
"▶️ play","⏸️ pause","⏹️ stop","⭐️ star","⏰️ clock","🔋️ battery",
"⌨️ keyboard","🖱️ mouse","🔑️ key","🛡️ shield","💳️ card",

"⚠️ warning","🛒️ shopping","☁️ cloud","🖼️ picture",
"❌️ cross","⭕️ circle","✔️ check","©️ copyright",
"🔢️ number","🔤️ letter","⬆️ up arrow","⬇️ down arrow",
"♀️ female","♂️ male",
"➰️ loop","⏩️ forward","⏭️ next","🎮️ game",

"💾️ disk","💽️ disk","🖥️ computer","🎵️ music","🎶️ music","🎼️ music","📈️ chart","📊️ chart",
"🌐️ globe","🌍️ globe","🌎️ globe","🌏️ globe","🔗️ link","🔆️ bright","🎛️ knob","🎚️ slider",
];




	var evenP = [	// Eventos JS
"keydown","keypress","keyup",
"mouseout",
"keydown keypress keyup","onclick onmousemove onmouseover onmouseout",
// Audio/Video Events (fonte: mozilla)
"play","pause","playing","progress",
"canplay","durationchange","ended",
"seeking","waiting",
];

	var evenR = [	// Eventos JS
"","","",
"",
"","",
// Audio/Video Events 
"Audio/Video Events","Audio/Video Events","Audio/Video Events","Audio/Video Events",
"Audio/Video Events","Audio/Video Events","Audio/Video Events",
"Audio/Video Events","Audio/Video Events",
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





// O "S" em "cssS" significa pSeudo-class.
var cssSP = [
"[atrib]",
"[atrib=valor]",
"ul + li",
// Pseudo-class (a colon (:) [ft mozilla]
":enabled :checked :disabled :optional :placeholder-shown :required :user-invalid",
":modal :fullscreen",
"button:hover {} :focus :focus-visible",
".modal:target {}",
":playing :paused",
":root :empty :first-child :last-child :nth-child() :only-child",
":lang()",
"a:link a:visited a:hover a:active",
"a:link a:visited a:hover a:active",
// Pseudo-elements (double colons (::)) [ft: mozilla]
"::after ::before ::backdrop ::first-letter ::first-line ::placeholder",
// Seletor
"# . *",
// Combinador
"div span",
"ul > li",
"p ~ span",
"ul + li",
"espaço ~ + >",
];

/*
// Seletor
"[autoplay] | [atrib$=valor] | outros",
"* {padding: 0; margin: 0;}",
"[type='button'] {}",

*/

var cssSR = [
"seletor por atributo",
"seletor por atributo",
"seletor adjacente +: foca no elemento que se segue a um anterior",
// Pseudo-class (a colon (:) [ft mozilla]
"pseudo-class de entrada (de formulário)",
"pseudo-class de estado de exibição",
"pseudo-class de ação do usuário",
"pseudo-class de localização",
"pseudo-class de estado de recurso",
"pseudo-class estruturais de árvore",
"pseudo-class linguísticas",
"LVHA ('love and hate'), recurso pra lembrar dessas pseudo-classe referentes à tag a ",
"link não visitado, link visitado, ponteiro do mouse passa sobre algo, link ativado (ao clicar)",
// Pseudo-elements (double colons (::)) [ft: mozilla]
"pseudo-elements",
// Seletor
"seletores: identifier, class, universal",
// Combinador
"combinador espaço (descendant selector, seletor de descendentes): se x for descendente de y; seleciona nós que são filhos do elemento principal; pai, avô, tataravô",
"combinador > (child selector, seletor filho, seletor de filhos): seleciona nós que são filhos diretos do elemento especificado anteriormente; filho",
"combindor ~ (general sibling selector, seletor geral de irmãos): seleciona todo elemento span após p, se ambos dentro de um mesmo elemento pai",
"combinador + (adjacent sibling selector, seleciona irmãos adjacentes): nós que se seguem imediatamente o elemento principal",
"combinadores (combinators); um combinador combina outros seletores",
];


/*
"seleciona elementos baseados em informaçãoes que não estão na árvore de documentos, ou que é complexa de se extrair. Ex.: se um link foi visitado anteriormente.",
"exemplo","exemplo","muda cor do link ao passar mouse por cima",

// dois pontos antes são os Pseudo-elements 
// "Abstração da árvore que representa entidade além do que o HTML faz. Ex.: um elemento que descreva a primeira letra ou linha de um parágrafo, marcador de uma lista.",

// Seletor
"seletor '#' escolhe nós baseados no valor do atributo id | seletor '.' escolhe elementos baseados no valor de seu atributo class",
"seletores por atributo; o [autoplay] corresponde a todos os elementos que possuirem o atributo autoplay (para qualquer valor)",
"seletor universal",
"seleciona os elementos do tipo button",


];
*/


// Termo "jsEc" significa JS Estrutara de Controle.
var jsEcP = [
"if | else | else if | switch",
"if () {}",
"if () {} else {}",
"if () {} else if () {} else {}",

// Estrutura de repetição 
"for | while | do...while",
"for () {}",
"for (índice in objeto) {}",
"while () {}",
"do {} while ()",
];

var jsEcR = [
"Estruturas de Seleção",
"if",
"else",
"else if",

// Estrutura de repetição
"Estruturas de Repetição",
"for (inicilização; condição; incremento) {}",
"for in",
"while",
"do while",
];


var opeP = [
"Assignment Operators","= += -= *= /= %=","=","+=",
"-=","*=","/=","%=",

"/ % ++ --","/","%","++",
"--",

"&& || !","?:",

"== === != !== >= <=","==","===","!=",
"!==",">=","<=",

"-","this",",","[]",".","()",
"typeof","new",
];


var opeR = [
"Operadores de Atribuição","Operadores de Atribuição","operador de atribuição, atribui valor (a uma variável)","operador de atribuição",
"operador de atribuição","operador de atribuição","operador de atribuição","operador de atribuição",

"Aritméticos","divisão","módulo (resto da divisão), usa símbolo de porcentagem","incremento +1",
"decremento -1",

"Operadores Lógicos","Operador Ternário",

"Operadores de Comparação (ou Relacional)","igual, op. de comparação","identidade (valor e tipo), op. de comparação","diferente, op. de comparação",
"identidade diferente, op. de comparação","maior ou igual, op. de comparação","menor ou igual, op. de comparação",

"unário","referência ao objeto atual","separar valores","indexar arrays","acessa propriedade de um objeto","chama uma função",
"retorna o tipo do operando","cria nova instância do objeto",
];
alert(opeR);
/*
*/


// ############################################################
// ############################################################
// ############### FUNÇÔES PRINCIPAIS #########################
// ############################################################
// ############################################################


// random, falar...

function ran (n) { return Math.floor(Math.random() * n); } // Cria nº aleatório; ran é random é n é number. Esta função ajuda a outras.


// Função "falar()" excluída daqui ! ! !

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
//document.querySelector('#p5').innerHTML = htmlR[i]; // Idem no display emoji.
	}

		function html2 () {
var i = `${ran(html2P.length)}`;
document.querySelector('#p6').innerHTML= html2P[i];
document.querySelector('#p7').innerHTML = html2R[i];
	}

		function html4 () {
var i = `${ran(html4P.length)}`;
document.querySelector('#p6').innerHTML= html4P[i];
document.querySelector('#p7').innerHTML = html4R[i];
	}

		function html3 () {
var i = `${ran(html3P.length)}`;
document.querySelector('#p6').innerHTML= html3P[i];
document.querySelector('#p7').innerHTML = html3R[i];
	}

		function css () {
var i = `${ran(cssP.length)}`;
document.querySelector('#p6').innerHTML= cssP[i];
document.querySelector('#p7').innerHTML = cssR[i];
	}

		function css2 () {
var i = `${ran(css2P.length)}`;
document.querySelector('#p6').innerHTML= css2P[i];
document.querySelector('#p7').innerHTML = css2R[i];
	}


		function cssS () {
var i = `${ran(cssSP.length)}`;
document.querySelector('#p6').innerHTML= cssSP[i];
document.querySelector('#p7').innerHTML = cssSR[i];
	}

		function jsEc () {
var i = `${ran(jsEcP.length)}`;
document.querySelector('#p6').innerHTML= jsEcP[i];
document.querySelector('#p7').innerHTML = jsEcR[i];
	}

		function ope () {
var i = `${ran(opeP.length)}`;
document.querySelector('#p6').innerHTML= opeP[i];
document.querySelector('#p7').innerHTML = opeR[i];
	}

		function cssC () {
	//	var rndCor = Math.floor(Math.random()*(cssP.length));
	//document.getElementById('p2').innerHTML = cssP[rndCor];
	//document.getElementById('p3').innerHTML = cssR[rndCor];
var i = `${ran(cssCP.length)}`;
document.querySelector('#p6').innerHTML= cssCP[i];
document.querySelector('#p7').innerHTML = cssCR[i];
	}

		function cssV () {
var i = `${ran(cssVP.length)}`;
document.querySelector('#p6').innerHTML= cssVP[i];
document.querySelector('#p7').innerHTML = cssVR[i];
	}

		function jsdo () {
var i = `${ran(css3P.length)}`;
document.querySelector('#p6').innerHTML= css3P[i];
document.querySelector('#p7').innerHTML = css3R[i];
	}

		function js3 () {
var i = `${ran(JsPc.length)}`;
document.querySelector('#p6').innerHTML= JsPc[i];
document.querySelector('#p7').innerHTML = JsRc[i];
	}

		function even () {
var i = `${ran(evenP.length)}`;
document.querySelector('#p6').innerHTML= evenP[i];
document.querySelector('#p7').innerHTML = evenR[i];
	}

		function obje () {
var i = `${ran(objeP.length)}`;
document.querySelector('#p6').innerHTML= objeP[i];
document.querySelector('#p7').innerHTML = objeR[i];
	}

		function rese () {
var i = `${ran(reseP.length)}`;
document.querySelector('#p6').innerHTML= reseP[i];
document.querySelector('#p7').innerHTML = reseR[i];
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

		document.getElementById("html4").addEventListener("click",html4);
		document.querySelector('#html4').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "GRÁFICO - BOTÕES - ENTRADAS";});

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
		document.querySelector('#cssV').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "CSS - VALUES";});

		document.getElementById("cssS").addEventListener("click",cssS);
		document.querySelector('#cssS').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "SELETOR";});

		document.getElementById("jsEc").addEventListener("click",jsEc);
		document.querySelector('#jsEc').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "ESTRUTURA DE CONTROLE";});

		document.getElementById("ope").addEventListener("click",ope);
		document.querySelector('#ope').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "OPERADORES";});

	}
window.addEventListener("load",addEvents);
