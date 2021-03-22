/* <!-------------------------------------------------------------- Img Function------------------------------------> */
var inkbox1 = document.getElementById("inked-painted1");

var colorbox1 = document.getElementById("colored1");

var fillerImage1 = document.getElementById("inked1");

inkbox1.addEventListener("mousemove", trackLocation1, false);
inkbox1.addEventListener("touchstart", trackLocation1, false);
inkbox1.addEventListener("touchmove", trackLocation1, false);

function trackLocation1(e) {
  var rect = fillerImage1.getBoundingClientRect();
  var position = ((e.pageX - rect.left) / fillerImage1.offsetWidth) * 100;
  if (position <= 100) {
    colorbox1.style.width = position + "%";
  }
}

// ---------------------------second Img function--------------------------

var inkbox2 = document.getElementById("inked-painted2");

var colorbox2 = document.getElementById("colored2");

var fillerImage2 = document.getElementById("inked2");

inkbox2.addEventListener("mousemove", trackLocation2, false);
inkbox2.addEventListener("touchstart", trackLocation2, false);
inkbox2.addEventListener("touchmove", trackLocation2, false);

function trackLocation2(e) {
  var rect = fillerImage2.getBoundingClientRect();
  var position = ((e.pageX - rect.left) / fillerImage2.offsetWidth) * 100;
  if (position <= 100) {
    colorbox2.style.width = position + "%";
  }
}

// ------------------AOS function------------------------------

AOS.init({
  duration: 2000,
});


// ------------------loading------------------------------



document.onreadystatechange = function() { 
  if (document.readyState !== "complete") { 
      document.querySelector( 
        "body").style.visibility = "hidden"; 
      document.getElementById( 
        "loader").style.visibility = "visible"; 
  } else { 
      document.getElementById( 
        "loader").style.display = "none"; 
      document.querySelector( 
        "body").style.visibility = "visible"; 
  } 
};