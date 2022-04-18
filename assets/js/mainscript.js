var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var btn2 = document.getElementById("e-mail")


btn.onclick = function() {
  modal.style.display = "block";
}

btn2.onclick = function() {
    modal.style.display ="block"
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}