// background color change

var o = 0;
var coleur = "red";

function oFunct() {
	if(o%2 < 1) {
		return o%1;
	} else if(o%2 >= 1) {
		return 1 - o%1;
	}
}

function cFunct() {
	if (o%2 == 0.01) {
		coleur = getRandomColor();
	}
	return coleur;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var main1 = document.getElementById("Main1");
var main2 = document.getElementById("Main2");

var height = window.innerHeight;
var width = window.innerWidth;

main1.style.position = "absolute";
main1.style.top = "0px";
main1.style.left = "0px";
main1.style.height = height.toString() + "px";
main1.style.width = width.toString() + "px";
main1.style.backgroundColor = getRandomColor();
main1.style.opacity = oFunct();

main2.style.position = "absolute";
main2.style.top = "0px";
main2.style.left = "0px";
main2.style.height = height.toString() + "px";
main2.style.width = width.toString() + "px";
main2.style.backgroundColor = getRandomColor();
main2.style.zIndex = "-1";

var me = 0;

var rotationSelection;
var languageSelection;

function goer() {
	cFunct();
	if(o%2 > 0 && o%2 < 0.01){
		main1.style.backgroundColor = getRandomColor();
	} else if(o%2 > 1 && o%2 < 1.01) {
		main2.style.backgroundColor = getRandomColor();
	}
	main1.style.opacity = oFunct();

	main1.style.height = window.innerHeight.toString() + "px";
	main1.style.width = window.innerWidth.toString() + "px";
	main2.style.height = window.innerHeight.toString() + "px";
	main2.style.width = window.innerWidth.toString() + "px";

	o = o + 0.01;


	if(me == 1) {

	if (sel.options[sel.selectedIndex].value) {
		languageSelection = sel.options[sel.selectedIndex].value;
	} else {
		languageSelection = "English";
	}
	if(sel1.options[sel1.selectedIndex].value ) {
		rotationSelection = sel1.options[sel1.selectedIndex].value;
	} else{
		rotationSelection = "no";
	}
	rotaterT();

	if (rotationSelection == "no"){
		setT(findLanguage());
	}


	}

}

function findLanguage() {
	for(var q = 0; q < texts.length; q++) {
		if(texts[q][0] == languageSelection) {
			return q;
		}
	}
}

var is = 0;

function rotaterT() {
	if(rotationSelection == "yes" && is == 0) {
		cycle();
		is = 1;
	} else if (rotationSelection == "no") {
		stop();
		is = 0;
	} else {
		//alert("ERROR");
	}
}

setInterval(goer, 10);


// text change

var tLength = 100;
/*
var texts = [
	"Thank You.",
	"Merci.",
	"谢谢。"
];*/

var texts = [];

for (var a = 0; a < tLength; a++) {
	texts[a] = [];
}

texts = [ 
	["English", "Thank You."],
	["French", "Merci."],
	["Chinese", "谢谢。"],
	["Japanese", "ありがとうございました。"],
	["Spanish", "Gracias."],
	["Arabic", "شكرا."],
	["Hindi", "धन्यवाद."],
	["Latin", "Gratias ago tibi."],
	["Russian", "спасибо."],
	["Italian", "Grazie."]


];

var t = 0;

var state = document.getElementById("statement");

function tFunct() {
	if(t%3 < 1) {
		return t%1;
	} else if(t%3 >= 2) {
		return 1 - t%1;
	} else if(t%3 >= 1 && t%3 < 2) {
		return 1;
	}
}



var interval = 0;
var typeText = state.innerHTML;
function tChange() {
	t = t + 0.01;
	if(t%3 > 0 && t%3 < 0.01){
		while (typeText==state.innerHTML) {
			typeText = texts[Math.floor(Math.random() * texts.length)][1];
		}
		state.innerHTML = typeText;
	}
	state.style.opacity = tFunct().toString();



}




function cycle() {
	interval = setInterval(tChange, 10);
}

function stop() {
	clearInterval(interval);
	state.innerHTML = texts[0][1];
	state.style.opacity = "1";
}

function setT(a) {
	state.innerHTML = texts[a][1];
}

// extra

function closed() {
	document.getElementById("rest").innerHTML = "";
}

function About() {
	document.getElementById("rest").innerHTML = "<div id=\"mid\" class=\"mid\" style=\"	position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 50%; height: 50%; background-color: black; opacity:0.75; z-index: 20;	\">		<div id=\"closer\" class=\"closer\" onclick=\"closed()\" style=\"position:absolute; top: 5%; left: 95%; transform: translate(-95%, -5%); width: 2em; height: 2em; background-color: white; z-index: 25; cursor: pointer; \">		</div>	</div>";
}
	var sel;

function createOptions() {
	for (var i = 0; i < texts.length; i++) {
		var opt = document.createElement("option");
		opt.value = texts[i][0];
		opt.innerHTML = texts[i][0];
		sel.appendChild(opt);
	}
}

function Options() {
	me = 1;
	document.getElementById("rest").innerHTML = "<div id=\"mid\" class=\"mid\" style=\"	position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 50%; height: 50%; background-color: black; opacity:0.75; z-index: 20;	font-family: \"Roboto\", \"Helvetica\", \"Arial\", \"Times New Roman\"; \">			<div id=\"selector\" class=\"selector\" style=\"color: white; position: absolute; left: 3%; top: 3%; font-size: 3em; cursor: default; font-family: \"Roboto\", \"Helvetica\", \"Arial\", \"Times New Roman\"; \">	<font face = \"Roboto\">Language</font>		<br />	<select id=\"sel\" class=\"sel\" style=\"height: 3em; width: 8em;\">	</select>									</div>			<div id=\"selector1\" class=\"selector1\" style=\"color: white; position: absolute; left: 40%; top: 3%; font-size: 3em; cursor: default; font-family: \"Roboto\", \"Helvetica\", \"Arial\", \"Times New Roman\"; \">	<font face = \"Roboto\">Text Rotation</font>		<br />	<select id=\"sel1\" class=\"sel1\" style=\"height: 3em; width: 8em;\">	</select>									</div>			<div id=\"closer\" class=\"closer\" onclick=\"closed()\" style=\"position:absolute; top: 5%; left: 95%; transform: translate(-95%, -5%); width: 2em; height: 2em; background-color: white; z-index: 25; cursor: pointer; \">		</div>	</div>";
	sel = document.getElementById("sel");

	sel1 = document.getElementById("sel1");
	var option = document.createElement("option");
	option.value = "yes";
	option.innerHTML = "Yes"
	sel1.appendChild(option);
	var option1 = document.createElement("option");
	option1.value = "no";
	option1.innerHTML = "No";
	sel1.appendChild(option1);

	createOptions();

}

