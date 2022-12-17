var dest = new Date("dec 25, 2022 12:00:00").getTime();
var x = setInterval(function(){
	var now = new Date().getTime();
	var diff = dest - now;
	var days = Math.floor(diff / (1000 * 60*60*24));
	var hours = Math.floor((diff % ( 1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((diff % ( 1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((diff % ( 1000 * 60)) / 1000);
	document.getElementById('chrs-days').innerHTML = days+"<span>Dias</span>";
	document.getElementById('chrs-hrs').innerHTML = hours+"<span>horas</span>";
	document.getElementById('chrs-min').innerHTML = minutes+"<span>min</span>";
	document.getElementById('chrs-sec').innerHTML = seconds+"<span>seg</span>";
},1000);