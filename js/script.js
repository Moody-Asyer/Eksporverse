var myVar;

function myFunction() {
  myVar = setTimeout(function() {
    $(".cssload-thecube").css("display", "none");
    // document.getElementById("all").style.display = "block";
    $("#all").css("display", "block");
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 70) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        // navbar_height = document.querySelector('.navbar').offsetHeight;
        // document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      }
  });
});



$(document.body).on("load", myFunction());
