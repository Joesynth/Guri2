

/*
############################################################
############################################################
######################## VARIÁVEIS #########################
############################################################
############################################################
*/

// Bluefish, Terminal, Node...

var JavaPc = [
"abstract","assert","boolean","break"," byte","case","catch","char"," class","const","continue","default"," do","double","else","enum"," extends","final","finally","float"," for","if","  goto","implements","import","instanceof"," int","interface","long","native"," new","package","private","protected"," public"," return","short"," static","strictfp"," super","switch"," synchonized","this"," throw","throws"," transient","try","void"," volatile","while",
];

var JavaRc = [
"abstrair","afirmar/declarar","boleano","quebrar"," byte","caso","pegar","caracteres"," classe","const","continuar","padrão"," fazer","duplo","senão","enum"," estende","final","finalmente","flutuar"," para","se","  vamos para","implemento"," importar","instancia de"," int","interface"," longo","nativo"," novo","pacote"," privado","protegido"," público","retornar"," curto","estático"," strictfp","super"," trocar/mudar"," synchonized"," isto","lançar"," lança","passageiro"," tentar","vazio"," volátil","enquanto",
];

var PhpPc = [
"abstract","and","array()","as"," break","case","catch","class"," clone","const","continue","declare"," default","do","else","elseif","  enddeclare","endfor","endforeach","endif"," endswitch","endwhile","extends","final"," for","foreach","function","global"," goto","if","implements","interface","  instanceof","namespace","new","or"," private","protected","public","static"," switch","throw","try","use","var","while","xor"," date()","readfile()","fopen()","fwrite()"," session_start()","array()","array_slice()","array_rand()"," array_sum()","array_values()","count()","current()"," chdir()","dir()","opendir()","scandir()","abs()","ceil()","floor()","exp()"," log()","pi()","pow()","rand()"," mt_rand()",
];

var PhpRc = [
"palavra reservada","palavra reservada","palavra reservada","palavra reservada"," palavra reservada","palavra reservada","palavra reservada","palavra reservada"," palavra reservada","palavra reservada","palavra reservada","palavra reservada"," palavra reservada","palavra reservada","palavra reservada","palavra reservada","  palavra reservada","palavra reservada","palavra reservada","palavra reservada"," palavra reservada","palavra reservada","palavra reservada","palavra reservada"," palavra reservada","palavra reservada","palavra reservada","palavra reservada"," palavra reservada","palavra reservada","palavra reservada","palavra reservada","  palavra reservada","palavra reservada","palavra reservada","palavra reservada"," palavra reservada","palavra reservada","palavra reservada","palavra reservada"," palavra reservada","palavra reservada","palavra reservada","palavra reservada"," palavra reservada","palavra reservada","palavra reservada","  função","função","função","função"," função","função","função","função"," função","função","função","função"," função","função","função","função","  função","função","função","função"," função","função","função","função"," função","função","função","função"," função",
];

var blue3P = [
"File","Edit","View","Document","Go","Project","Tools","Tags","Dialogs","Help",
"New Window","Open Advanced",
"Snippets Menu",
"Find","Advanced Find & Replace",

"Toggle Bookmark",
"Paragraph","Preformatted Text",
"Spell Check","Language Mode",
"Show this language in the menu",

"Select Block","Word Count","Duplicate Line","Delete Line",
"Headings","Strong","Break","Comment",
"Previous Bookmark","Next Bookmark",
];


var blue3R = [
"File","Edit","View","Document","Go","Project","Tools","Tags","Dialogs","Help",
"","",
"Trechos (menu)",
"","",

"alternar marcador",
"","",
"Verificação Ortográfica","Modo de Linguagem",
"Mostrar esta linguagem no menu",

"","Contagem de palavras","","",
"títulos; Ctrl+Alt+1","","","",
"Marcador anterior","Próximo marcador",
];

var blue3RReEx = [	// UPDATE - CAMPO N EXISTE
"File","Edit","View","Document","Go","Project","Tools","Tags","Dialogs","Help",
"","",
"",
"Ctrl+F","Ctrl+H",

"Ctrl+K",
"Ctrl+Alt+P","Ctrl+Alt+F",
"","",
"",

"Ctrl+Shift+B","","Ctrl+D","Ctrl+Y",
"Ctrl+Alt+1","Ctrl+Alt+G","Ctrl+Alt+K","Comment; Ctrl+Alt+C",
"CtrlShiftJ","CtrlShiftK",
];



var term3P = [
"whatis","whatis ls","find",
"df","who","history",
"jobs","kill",

/* Diretório */
"pwd",
"ls","ls -l",
"cd","cd ~",
"cd ..","cd ../..",
"mkdir nome","mkdir pasta1 pasta2",
"mkdir 'a b'",

/* Arquivo*/
"touch index.html","touch nome.pdf",
"rm","cat index.html","gedit index.html",

/* Atalho */
"CtrlAlt T | CtrlShit Q","CtrlShift T | CtrlShift W",
"Ctrl C","Tab",
/* Software */
"gedit","vlc",

"exit","clear",
"shutdown","--help",
"&&","~",
"$ | # ",
"Desktop",
];

var term3R = [
"diz o que um outro comando faz","diz o que faz o comando ls","localizar arquivos",
"disk free: mostra a quantidade de espaço usada","quem está logado no sistema","lista os últimos comandos usados",
"exibe todos os jobs que estão em execução","utilizado para encerrar um programa que não esteja respondendo bem",

/* Diretório */
"present working directory, print working directory; diretório de trabalho atual, diretório atual; exibe o caminho do diretório em que estamos no momento",
"list; listar, lista; list directory; lista conteúdo do diretório atual (arquivos e diretórios)","exibe os arquivos e pastas do diretório em forma de lista",
"change directory; mudar diretório (atual de trabalho); navega entre diretórios","volta ao diretório home",
"navega acima um nível","sobe dois níveis",
"make directory; criar diretório (pasta)","cria diretórios pasta1 pasta2 (para mais pastas é a mesma lógica)",
"cria nome com espaço entre duas palavras. Também para rmdir, cd.",

/* Arquivo*/
"cria arquivo 'index.html'vazio, em branco, mas poderia ser um .txt, etc.","cria arquivo com extensão pdf",
"remove; remover (um arquivo ou um diretório)","visualiza o arquivo 'index.html', ver o conteúdo do arquivo","abre o arquivo 'index.html' no editor Gedit",

/* Atalho */
"abre terminal | sai do terminal","abrir | fechar aba",
"interrompe uma execução","autocomplete. ex.: abre o Firefox: fireTab",
/* Software */
"Abre o editor de códigos Gedit.","Abre o programa musical VLC",

"termina a sessão, ou seja, a shell","clarear; limpa (a tela do terminal)",
"Desliga o computador","nome do comando + --help diz como usar o comando.",
"AND","diretório padrão (do usuário), diretório atual",
"indica usuário comum, ou sustenido (jogo da velha) usuario logado atualmente é o root (administrator do sistema)",
"área de trabalho",
];

var term3RReEx = [	// UPDATE - CAMPO N CRIADO
"","",
"Lista conteúdo do diretório atual.",
"",
"","",
"Excluir arquivo.","Executa multiplos comandos",
];

var node3P = [
"Node Package Manager",
"search",
"view",
"update",
"install",
"remove",
"list",
"publish",
"require()",
"Built-in Modules",
];
var node3R = [
"Gerenciador de Pacotes do Node","","","","","","","","","",
];


var node3RrEx = [		// UPDATE - CAMPO N CRIADO
"",
"Procura (o pacote)",
"visão (do pacote)",
"Atualiza a verSão do Módulo(pacote)",
"Instala um Módulo no projeto; Instala as dependências; ",
"Remove (desinstala) um Módulo(pacote) do projeto",
"Lista módulos existentes no projeto; instalados.",
"Publica o seu Módulo",
"Permite utilizar um pacote",
"módulos embutidos, módulos internos, módulos incorporados",
];

var cord3P = [
"build",
"create",
"platform",
"platform add",
"plugin list",
"requirements",
"run",
];

var cord3R = [
"construir; [cordova build]",
"criar; [cordova create]",
"plataforma",
"adicionar plataforma",
"lista de plugins",
"requisitos",
"executar, rodar [cordova run]",
];

	var LogPc = [
"true, false",
" if"," else"," else if",
" while"," for","do-while",

"Subroutine","Procedure","Function",

"Algorithm",
"Boolean algebra",
"Compiler",
"Debugger",
"Debugging",
"Declarative Language",

"DO-WHILE",
"Function",
"Inheritance",
"Line",
"loop",
"Modular Programming",
"OOPS Object-Oriented Programming System",

"Programming",
"Run",
"Source-code",
"Stack",
"String",

"Syntax",
"Syntax error",
];
	var LogRc = [
"verdadeiro / falso",
"se","senão","",
"enquanto","para","",

"Sub-rotina","Procedimento","Função",

"Algoritmo",
"Álgebra booleana",
"Compilador",
"Depurador",
"Depuração",
"Linguagem declarativa",

"",
"",
"Herança",
"Linha",
"",
"",
"Linguagem de programação baseada em objetos",

"Programação",
"Executar",
"Código-fonte",
"",
"",

"Sintaxe",
"Erro de sintaxe",
];

	var LogRcReEx = [		// UPDATE - CAMPO N EXISTE
"",
"Estrutura de Seleção"," ","Estrutura de Seleção",
"Estrutura de Repetição","Estrutura de Repetição","Estrutura de Repetição",

"Procedimento e função são os principais tipos de sub-rotina na programação estruturada.","Sub-rotina que executa uma tarefa.","Sub-rotina que executa uma tarefa, mas diferente do procedimento, ela retorna um resultado ao chamador.",

"Uma receita (tal como de bolo) para fazermos uma tarefa ou resolver um problema. É pegar um problema da vida real e criar uma rotina para solução desse problema.",
"Álgebra de Boole (séc. XIX). Álgebra que manipula valores do tipo verdadeiro/falso (ou 0/1).",
"Programa que traduz as instruções escritas em uma linguagem (ex:Pascal) em um programa executável que o computador consegue entender e processar diretamente.",
"Utilitário (normalmente incluído em compiladores ou interpretadores) visando ajudar programadores a identificar e corrigir erros de sintaxe e outros mais que possam existir no código-fonte.",
"Procedimentos de identificação e correção dos erros de programação.",
"Linguagem não procedural. Linguagem de programação que não obriga o programador a especificar os procedimentos exatos que o computador deve seguir para executar cada tarefa (bastando que indique a tarefa a ser realizada). Ex: SQL.",

"Uma estrutura de controle que repete as instruções existentes em seu interior enquanto uma condição externa for verdadeira.",
"Função linguagem de programação e BD. Rotina especial que produz sempre um resultado lógico ou numérico ou ainda alfanumérico (ao contrário do comando que produz operações).",
"Linguagem de programação baseada em ob. A passagem de uma mensagem para os níveis superiores da hierarquia (até ser alcançado um objeto que capte a msg).",
"Uma instrução de programa.",
"Uma estrutura de controle na qual um bloco de instruções se repete até que uma determinada condição seja atendida.",
"Programação Modular. Estilo de programação que divide as funções de um programa em vários módulos. Cada um deles voltado para uma única função (contendo todo o código e todas as variáveis necessárias à execução dessa função).",
"Linguagem de programação não-procedural na qual os elementos do programa são conceituados como objetos capazes de transmitir msgs entre si.",

"Processo de definição de instruções que direta ou indiretamente indicam ao microprocessador o que deve ser feito. A programação se divide em vários estágios (projeto/ codificação/ teste/ depuração...).",
"Processar as instruções de um algoritmo ou programa. O mesmo que Execute.",
"Linguagem de programação de alto nível. O programa na forma como a pessoa o escreveu e lê (antes de ser compilado ou interpretado e portanto transformado em instruções de máquina) de modo que possa ser executado	pelo computador.",
"Pilha. Estrutura de dados onde os primeiros elementos armazenados serão os últimos a sair.",
"Uma série de caracteres alfanuméricos.",

"Regras que especificam precisamente a forma como um comando ou instrução devem ser submetidos ao computador para que a máquina consiga reconhecer e processá-los corretamente.",
"Erro resultante da especificação de um comando ou suas opções sem obedecer às regras de sintaxe do programa a que pertence.",
];


var BootPc = [
"active","btn/ btn-primary/ btn-success",
"caret","collapse","container",
"dropdown","dropdown-toggle","dropdown-menu","icon-bar",

"navbar","navbar-collapse","navbar-nav","navbar-fixed-top",
"navbar-default","navbar-header","navbar-brand","navbar-toggle",
"row","table","table-striped","table-hover","table-responsive",
];

var BootRc = [
"ativo","botão/ botão-primário / botão-sucesso ",
"","desabar ruir desmoronar","vasilha, recipiente",
"","dropdown-alternância ","","ícone-barra",

"barra de navegação","barra de nav.-desabar"," ","(barra de nav. fixada no topo)",
"barra de nav. - padrão","barra de nav.-cabeçalho","barra de navegação - marcar","barra de nav.-alternância",
"linha","tabela","tabela - listrada"," ","tabela-responsiva",
];

var BootRcReEx = [		// UPDATE - CAMPO N CRIADO
"","(cria) / (azul) / (verde)",
"caret (seta indicando botão dropdown)","","recipiente (com igual margem na esquerda e direita)",
"dropdown (cria um toggleable menu)","usado no botão que esconde/mostra o dropdown menu","dropdown-menu (estilo padrão)","",

"barra de nav. (cria)","Esconde e substitui por icone)","(usado no <ul> que tem a <li> com links)"," ",
" "," "," "," ",
"(recipiente para colunas responsivas)","(estilo básico)"," "," "," ",
];



var mong3P = [
"Connect",
"View",
"Collection",
"Help",
"Databases","Performance",
"Database Name","Storage Size","Collections","Indexes",
"Collections","Filter your data",
"Create Database","Database Name","Collection Name","Use Custom Collection",
"Documents","Aggregations","Explain Plan","Validation","Schema",
"Insert Document","Edit Document","Update","Delete Document",
"Create Collections",
];

var mong3R = [
"conectar",
"visualizar",
"Collection",
"Help",
"Databases","Performance",
"Database Name","Storage Size","Collections","Indexes",
"Collections","Filter your data",
"Create Database","Database Name","Collection Name","Use Custom Collection",
"Documents","Aggregations","Explain Plan","Validation","Schema",
"Insert Document","Edit Document","Update","Delete Document",
"Create Collections",
];


var git3P = [
"branches","branch master",
"staging area","snapshot",

"help","clone",
"init","repository",

"add","commit",
"merge",];

var git3R = [
"ramos, galhos","branch 'padrão'",
"","",

"ajuda","",
"","repositório",

"adicionar","empenhar","fundir",
];


var git3RReEx = [	// UPDATE - CRIAR ELEMENTO
"São as copias dos projetos","",
"área para elencar. Equivale a montar o 'elenco', o que pode ser indefinitivo."," ",

"","",
"Cria novo repositório","Local de armazenamento, uma pasta; nela o projeto e suas alterações são mantidas.",

"adicionar a Staging Area","É a consolidação, confirmação.","Unir dois branches",
];



var data3P = [
"Create (insert), read (Retrieve,select), update, delete (Destroy) - CRUD","atomicity, consistency, isolation, durability  - ACID",
"Data Base Management System or Database Management System  - DBMS","DBMS",
"Data definition language (DDL)","Data manipulation language (DML)",
"Data control language (DCL)","modeling",

"Database design","Database model",
"relational model (RM)","relational database",
"Normalization",
"primary key","foreign key",
];

var data3R = [
"criação, consulta (Retrieve), atualização, destruição.","",
"sistema de gerenciamento de banco de dados (SGBD)"," ",
"LDD - Linguagem de definição de dados","LMD - Linguagem de manipulação de dados",
"LCD - Linguagem de Controle de Dados","Modelagem",

"design do banco de dados","modelo de banco de dados",
"modelo relacional","Banco de dados relacional",
"Normalização",
"Chave primária","Chave estrangeira",
];


var data3RReEx = [	// UPDATE - CAMPO N CRIADO
"criação, consulta (Retrieve), atualização, destruição.","",
"","Exemplos: MySQL, MariaDB, Oracle, SQL-Server, MongoDB, PostgreSQL...",
"","",
"","",

"","",
"modelo relacional","Banco de dados relacional",
"",
"","",
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

/* Função "falar()" ecluída daqui !!! */

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

/* Função "sA()" excluída daqui !! */


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

		function java3 () { 	// Sorteia um índice, e dele escreve o correspondente termo em inglês, português e emoji.
var i = `${ran(JavaPc.length)}`; // guarda um índice aletatório. 
document.querySelector('#p6').innerHTML= JavaPc[i]; // Escreve o array no Display pergunta, conforme índice.
document.querySelector('#p7').innerHTML = JavaRc[i]; // Idem no display resposta.
//document.querySelector('#p5').innerHTML = JavaRc[i]; // Idem no display emoji.
	}

		function php3 () { 	// Sorteia um índice, e dele escreve o correspondente termo em inglês, português e emoji.
var i = `${ran(PhpPc.length)}`; // guarda um índice aletatório. 
document.querySelector('#p6').innerHTML= PhpPc[i]; // Escreve o array no Display pergunta, conforme índice.
document.querySelector('#p7').innerHTML = PhpRc[i]; // Idem no display resposta.
	}

		function blue3 () { 	// Sorteia um índice, e dele escreve o correspondente termo em inglês, português e emoji.
var i = `${ran(blue3P.length)}`; // guarda um índice aletatório. 
document.querySelector('#p6').innerHTML= blue3P[i]; // Escreve o array no Display pergunta, conforme índice.
document.querySelector('#p7').innerHTML = blue3R[i]; // Idem no display resposta.
	}

		function term3 () { 	// Sorteia um índice, e dele escreve o correspondente termo em inglês, português e emoji.
var i = `${ran(term3P.length)}`; // guarda um índice aletatório. 
document.querySelector('#p6').innerHTML= term3P[i]; // Escreve o array no Display pergunta, conforme índice.
document.querySelector('#p7').innerHTML = term3R[i]; // Idem no display resposta.
	}

		function node3 () { 	// Sorteia um índice, e dele escreve o correspondente termo em inglês, português e emoji.
var i = `${ran(node3P.length)}`; // guarda um índice aletatório. 
document.querySelector('#p6').innerHTML= node3P[i]; // Escreve o array no Display pergunta, conforme índice.
document.querySelector('#p7').innerHTML = node3R[i]; // Idem no display resposta.
	}

		function cord3 () { 	// Sorteia um índice, e dele escreve o correspondente termo em inglês, português e emoji.
var i = `${ran(cord3P.length)}`; // guarda um índice aletatório. 
document.querySelector('#p6').innerHTML= cord3P[i]; // Escreve o array no Display pergunta, conforme índice.
document.querySelector('#p7').innerHTML = cord3R[i]; // Idem no display resposta.
	}

		function logi3 () { 	// Sorteia um índice, e dele escreve o correspondente termo em inglês, português e emoji.
var i = `${ran(LogPc.length)}`; // guarda um índice aletatório. 
document.querySelector('#p6').innerHTML= LogPc[i]; // Escreve o array no Display pergunta, conforme índice.
document.querySelector('#p7').innerHTML = LogRc[i]; // Idem no display resposta.
	}

		function boot3 () { 	// Sorteia um índice, e dele escreve o correspondente termo em inglês, português e emoji.
var i = `${ran(BootPc.length)}`; // guarda um índice aletatório. 
document.querySelector('#p6').innerHTML= BootPc[i]; // Escreve o array no Display pergunta, conforme índice.
document.querySelector('#p7').innerHTML = BootRc[i]; // Idem no display resposta.
	}

		function mong3 () { 	// Sorteia um índice, e dele escreve o correspondente termo em inglês, português e emoji.
var i = `${ran(mong3P.length)}`; // guarda um índice aletatório. 
document.querySelector('#p6').innerHTML= mong3P[i]; // Escreve o array no Display pergunta, conforme índice.
document.querySelector('#p7').innerHTML = mong3R[i]; // Idem no display resposta.
	}

		function git3 () { 	// Sorteia um índice, e dele escreve o correspondente termo em inglês, português e emoji.
var i = `${ran(git3P.length)}`; // guarda um índice aletatório. 
document.querySelector('#p6').innerHTML= git3P[i]; // Escreve o array no Display pergunta, conforme índice.
document.querySelector('#p7').innerHTML = git3R[i]; // Idem no display resposta.
	}

		function data3 () { 	// Sorteia um índice, e dele escreve o correspondente termo em inglês, português e emoji.
var i = `${ran(data3P.length)}`; // guarda um índice aletatório. 
document.querySelector('#p6').innerHTML= data3P[i]; // Escreve o array no Display pergunta, conforme índice.
document.querySelector('#p7').innerHTML = data3R[i]; // Idem no display resposta.
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
		document.getElementById("node3").addEventListener("click",node3);
		document.querySelector('#node3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "NODE";});
		document.getElementById("blue3").addEventListener("click",blue3);
		document.querySelector('#blue3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "BLUEFISH";});
		document.getElementById("term3").addEventListener("click",term3);
		document.querySelector('#term3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "TERMINAL";});
		document.getElementById("cord3").addEventListener("click",cord3);
		document.querySelector('#cord3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "CORDOVA";});
		document.getElementById("java3").addEventListener("click",java3);
		document.querySelector('#java3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "JAVA";});
		document.getElementById("php3").addEventListener("click",php3);
		document.querySelector('#php3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "PHP";});

		document.getElementById("logi3").addEventListener("click",logi3);
		document.querySelector('#logi3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "LOGIC";});
		document.getElementById("boot3").addEventListener("click",boot3);
		document.querySelector('#boot3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "BOOTSTRAP";});
		document.getElementById("mong3").addEventListener("click",mong3);
		document.querySelector('#mong3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "MONGO DB";});
		document.getElementById("git3").addEventListener("click",git3);
		document.querySelector('#git3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "GIT";});
		document.getElementById("data3").addEventListener("click",data3);
		document.querySelector('#data3').addEventListener('click', function () {document.querySelector(".display3").innerHTML = "DATA BASE";});
	}
window.addEventListener("load",addEvents);



