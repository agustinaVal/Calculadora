var operandoa;
var operandob;
var operacion;

function init(){
	//variables - lo primero es crear las variables de cada boton de la calculadora y su pantalla
	var resultado = document.getElementById('resultado');
	var reset = document.getElementById('reset');
	var suma = document.getElementById('suma');
	var resta = document.getElementById('resta');
	var multiplicacion = document.getElementById('multiplicacion');
	var division = document.getElementById('division');
	var igual = document.getElementById('igual');
	var uno = document.getElementById('uno');
	var dos = document.getElementById('dos');
	var tres = document.getElementById('tres');
	var cuatro = document.getElementById('cuatro');
	var cinco = document.getElementById('cinco');
	var seis = document.getElementById('seis');
	var siete = document.getElementById('siete');
	var ocho = document.getElementById('ocho');
	var nueve = document.getElementById('nueve');
	var cero = document.getElementById('cero');

	//eventos de click - segundo es capturar los eventos
	uno.onclick = function(a){
  		resultado.textContent = resultado.textContent  + "1";
	}
	dos.onclick = function(a){
  		resultado.textContent = resultado.textContent  + "2";
	}
	tres.onclick = function(a){
  		resultado.textContent = resultado.textContent  + "3";
	}
	cuatro.onclick = function(a){
  		resultado.textContent = resultado.textContent  + "4";
	}
	cinco.onclick = function(a){
  		resultado.textContent = resultado.textContent  + "5";
	}
	seis.onclick = function(a){
  		resultado.textContent = resultado.textContent  + "6";
	}
	siete.onclick = function(a){
  		resultado.textContent = resultado.textContent  + "7";
	}
	ocho.onclick = function(a){
  		resultado.textContent = resultado.textContent  + "8";
	}
	nueve.onclick = function(a){
  		resultado.textContent = resultado.textContent  + "9";
	}
	cero.onclick = function(a){
  		resultado.textContent = resultado.textContent  + "0";
	}
	//eventos de click - Captura operaciones
	reset.onclick = function(a){
  		resetear();
	}
	suma.onclick = function(a){
  		operandoa = resultado.textContent;
  		operacion = "+";
  		limpiar();
	}
	resta.onclick = function(a){
  		operandoa = resultado.textContent;
  		operacion = "-";
  		limpiar();
	}
	multiplicacion.onclick = function(a){
  		operandoa = resultado.textContent;
  		operacion = "*";
  		limpiar();
	}
	division.onclick = function(a){
  		operandoa = resultado.textContent;
  		operacion = "/";
  		limpiar();
	}
	igual.onclick = function(a){
  		operandob = resultado.textContent;
  		resolver();
	}
}

//Limpia el contenido de la pantalla de recultado
function limpiar(){
	resultado.textContent = "";
}
//boton C para limpiar resultados anteriores
function resetear(){
	resultado.textContent = "";
	operandoa = 0;
	operandob = 0;
	operacion = "";
}
//Funcion para mostrar las variables
function resolver(){
	var res = 0;
	switch(operacion){
		case "+":
			res = parseFloat(operandoa) + parseFloat(operandob);
			break;

		case "-":
		    res = parseFloat(operandoa) - parseFloat(operandob);
		    break;

		case "*":
			res = parseFloat(operandoa) * parseFloat(operandob);
			break;

		case "/":
			res = parseFloat(operandoa) / parseFloat(operandob);
			break;
	}
	//Invocar funcion
	resetear();
	resultado.textContent = res;
}



