function init(){
	alert("Welcom to my calculator")
	//variable
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
	var Six = document.getElementById("Six");
	var Subtracts = document.getElementById("Subtracts");
	var One = document.getElementById("One");
	var Two = document.getElementById("Two");
	var Three = document.getElementById("Three");
	var Equal = document.getElementById("Equal");
	var Cero = document.getElementById("Cero");

	//Events
	Cero.onclick = function(e){
		Outcome.TextContent = Outcome.TextContent + "0"
	One.onclick = function(e){
		Outcome.TextContent = Outcome.TextContent + "1"
	Two.onclick = function(e){
		Outcome.TextContent = Outcome.TextContent + "2"
	Three.onclick = function(e){
		Outcome.TextContent = Outcome.TextContent + "3"
	Four.onclick = function(e){
		Outcome.TextContent = Outcome.TextContent + "4"
	Five.onclick = function(e){
		Outcome.TextContent = Outcome.TextContent + "5"
	Six.onclick = function(e){
		Outcome.TextContent = Outcome.TextContent + "6"
	Seven.onclick = function(e){
		Outcome.textContent = Outcome.textContent + "7"
	Eight.onclick = function(e){
		Outcome.textContent = Outcome.textContent + "8"
	Nine.onclick = function(e){
		Outcome.textContent = Outcome.textContent + "9"