var todetails = document.getElementsByClassName("todetails");
var outside = document.getElementById("outside");
var iframe1 = document.getElementById("iframe1");
var first_page = document.getElementById("first_page");
for(var i = 0; i <= 4; i++)
{
	todetails[i].onclick = function(){
		outside.style.display = "none";
		iframe1.style.display = "block";
		iframe1.style.zIndex = 1;
	}
}
first_page.onclick = function(){
	iframe1.style.display = "none";
}