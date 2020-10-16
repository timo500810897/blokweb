/*
function stripHtml(html) {
  var tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}
*/

/*
function myFunction(x) {
  if (x.matches) {
    document.getElementsByClassName("bits").innerHTML = "";
  } else {
  }
}

var x = window.matchMedia("(max-width: 720px)");
myFunction(x);
x.addListener(myFunction);
*/

function toggleDropdown() {
  var x = document.getElementById("toggleDropdown");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
} 

function toggleSearch() {
  var x = document.getElementById("search");
  
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
} 

