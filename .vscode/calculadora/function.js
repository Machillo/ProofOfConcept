var operationa;
var operationb;
var operation;

function init(){
    alert("Welcome to my calculator")

    var Outcome = document.getElementById("Outcome");
    var Reset = document.getElementById("Reset");
    var Sum = document.getElementById("Sum");
    var Division = document.getElementById("Division");
    var Multiplication = document.getElementById("Multiplication");
    var Seven = document.getElementById("Seven");
    var Eight = document.getElementById("Eight");
    var Nine = document.getElementById("Nine");
    var Four = document.getElementById("Four");
    var Five = document.getElementById("Five");
    var Six = document.getElementById("Subtracts");
    var One = document.getElementById("One");
    var Two = document.getElementById("Two");
    var Three = document.getElementById("Three");
    var Equal = document.getElementById("Equal");
    var Cero = document.getElementById("Cero");

    Cero.onclick = function(e){
        Outcome.textContent = Outcome.textContent + "0";
    }
    One.onclick = function(e){
        Outcome.textContent = Outcome.textContent + "1";
    }
    Two.onclick = function(e){
        Outcome.textContent = Outcome.textContent + "2";
    }   
    Three.onclick = function(e){
        Outcome.textContent = Outcome.textContent + "3";
    }
    Four.onclick = function(e){
        Outcome.textContent = Outcome.textContent + "4";
    }
    Five.onclick = function(e){
        Outcome.textContent = Outcome.textContent + "5";
    }
    Six.onclick = function(e){
        Outcome.textContent = Outcome.textContent + "6";
    }
    Seven.onclick = function(e){
        Outcome.textContent = Outcome.textContent + "7";
    }
    Eight.onclick = function(e){
        Outcome.textContent = Outcome.textContent + "8";
    }
    Nine.onclick = function(e){
        Outcome.textContent = Outcome.textContent + "9";
    }
    Reset.onclick = function(e){
        deleted();
    }
    Sum.onclick = function(e){
        operationa = Outcome.textContent;
        operation = "+";
        limpiar();    
    }
    Subtracks.onclick = function(e){
        operationa = Outcome.textContent;
        operation = "-";
        limpiar();
    }
    Multiplication.onclick = function(e){
        operationa = Outcome.textContent;
        operation = "*";
        limpiar();
    }
    Division.onclick = function(e){
        operationa = Outcome.textContent;
        operation = "/";
        limpiar();
    }
    Equal.onclick = function(e){
        operandob = Outcome.textComent;
        resolver();
    }
}

function limpiar(){
    resultado.textContent = "";
}

function Deleted(){
    Outcome.textComent ="";
    operationa = 0;
    operationb = 0;
    operation = "";
}

function resolver() {
    var res = 0;
    switch(operation){
        case "+":
            res = parseFloat(operationa) + parseFloat(operationb)
            break;
        case "-":
            res = parseFloat(operationa) - parseFloat(operationb)
            break;
        case "*":
            res = parseFloat(operationa) * parseFloat(operationb)
            break;
        case "/":
            res = parseFloat(operationa) / parseFloat(operationb)
            break;        
    }
    Deleted();
    Outcome.textComent = res;
}