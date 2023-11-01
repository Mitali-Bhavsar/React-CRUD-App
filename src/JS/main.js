import $ from 'jquery';
let navbar_height = $("nav").outerHeight();
//----------to fix navbar at top start-----------------
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 90) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 
//----------to fix navbar at top end-----------------
//-----------jquery for animation scrolling offer
$('figure').parent().append($('figure').parent().html());