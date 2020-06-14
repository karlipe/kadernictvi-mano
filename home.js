var scroll = new SmoothScroll('a[href*="#"]',{
  speed: 800,
  easing: 'easeInOutCubic'
});

function dropdown_menu(){
  var x = document.getElementById("navbar")

  if(x.className == "navbar"){
    x.className += "-responsive";
  }
  else{
    x.className = "navbar";
  }
}

window.onscroll = function(){
  
  if (window.scrollY >= document.getElementById("home").offsetHeight  ) {

    document.getElementById("navbar").style.backgroundColor = 'black';
  }
  else{
    console.log(window.scrollY);
    document.getElementById("navbar").style.backgroundColor = 'transparent';
  }
}


