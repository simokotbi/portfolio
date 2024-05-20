

var btns = document.querySelectorAll(".nav-item a");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    alert('lk')
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}