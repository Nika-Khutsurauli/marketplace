import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';



///// switch menu /////



$("ul.tab-links li").each(function() {
    var header = document.getElementById("menu");
    var links = header.getElementsByClassName("switch-menu ");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace("active", "");
      this.className += " active";
      });
    }
      $(this).on("click",function(){
        
          $('#menu-nft').on("click",function(){
              $('#tab1').show();
              $('#tab2').show();
              $('#tab3').show();
              $('#tab4').show();
              $('#tab5').show();
              $('#tab6').show();
              $('#tab7').show();
              $('#tab8').show();
              $('#tab9').show();
              $('#tab10').show();
              $('#tab11').show();
              $('#tab12').show();
          });
          $('#menu-collection').on("click",function(){
              $('#tab1').show();
              $('#tab2').show();
              $('#tab3').hide();
              $('#tab4').show();
              $('#tab5').show();
              $('#tab6').show();
              $('#tab7').show();
              $('#tab8').show();
              $('#tab9').show();
              $('#tab10').show();
              $('#tab11').show();
              $('#tab12').show();
        });
      });
    });
  


  //////// artist page ////////


  $('.navbar-toggler').on("click",function(){
    $(".main-container").css({top: 80, position:'relative'});
    $(".card-containers-head").css({top: 100, margin: 0, position:'relative'});
    $(".card-containers").css({top: 100, position:'relative'});
    $(".main-footer").css({top: 100, position:'relative'});
})

