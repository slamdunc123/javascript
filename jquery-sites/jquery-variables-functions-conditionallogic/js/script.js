$(document).ready(function(){

  //alert($(window).scrollTop());

  var windowHeight = $(window).height(); //window height
  // //console.log(windowHeight);
  var windowScrollPosTop = $(window).scrollTop();//top of window to top of vertical scroll bar
  // //console.log(windowsScrollPosTop);
  var windowScrollPosBot = windowHeight + windowScrollPosTop;
  // //console.log(windowScrollPosBot);

//start of revealOnScroll function

  $.fn.revealOnScroll = function(direction, speed){ //reusable function
    return this.each(function(){ //code run here is specific to the relative element by using the keyword this

      var objectOffset = $(this).offset(); //offset() method gets the current position of the element
      //console.log(objectOffset);
      var objectOffsetTop = objectOffset.top;
      //console.log(objectOffsetTop);
      if(!$(this).hasClass("hidden")){//check to see if the element hasn't got the hidden class already

        if(direction == "right"){
          $(this).css({
            "opacity":0,
            "right": "700px",
            "position": "relative"
          });

        }else{
          $(this).css({
            "opacity":0,
            "right": "-700px",
            "position": "relative"
          });

        }

        $(this).addClass("hidden"); //adds class hidden once if statement completes to prevent the logic from keeping running which could overload the browser
      }


      //$(".status").html(objectOffsetTop); //display element top position in top right of screen

        if(!$(this).hasClass("animation-complete")){ //check to see if the element hasn't got the animation-complete class already

          if(windowScrollPosBot > objectOffsetTop){
            $(this).animate({"opacity":1, "right":0},speed).addClass("animation-complete"); //sets opacity to 1 on scroll then add the animation-complete class once if statement completes to prevent the logic from keeping running which could overload the browser

          }
        }


    });

  }

//end of revealOnScroll function

  $(window).scroll(function(){

    windowHeight = $(window).height(); //window height
    //console.log(windowHeight);
    windowScrollPosTop = $(window).scrollTop();//top of window to top of vertical scroll bar
    //console.log(windowsScrollPosTop);
    windowScrollPosBot = windowHeight + windowScrollPosTop;
    //console.log(windowScrollPosBot);

      //$(".sidebar, .example-photo, ul li").revealOnScroll(); //can be used if no individual parameters
      $(".sidebar").revealOnScroll("right", 4000);
      $(".example-photo").revealOnScroll("left", 800);
      $("ul li").revealOnScroll();

  });


});
