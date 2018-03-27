$(document).ready(function(){

    $(function(){
      var nav = $('.nav'),
          animateTime = 500,
          navLink = $('.header .top .navLink');
      navLink.click(function(){
        if(nav.height() === 0){
          autoHeightAnimate(nav, animateTime);
        } else {
          nav.stop().animate({ height: '0' }, animateTime);
        }
      });
    })

    /* Function to animate height: auto */
    function autoHeightAnimate(element, time){
        var curHeight = element.height(), // Get Default Height
            autoHeight = element.css('height', 'auto').height(); // Get Auto Height
              element.height(curHeight); // Reset to Default Height
              element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
    }

    // $("#box").click(function(){
    //   $(".box").html("How to make chocolate chip cookies" );
    //   // $(".box").css("background-color", "blue");
    // });
    //
    // $("#one").click(function(){
    //   $(".box").removeClass( "box-two" );
    //   $(".box").addClass( "box-one" );
    //   $("#message").html("Preheat oven to 350 degrees");
    //   $("#cookie").attr("src","images/cookies.jpg");
    //   $("#caption").html("this is a cookie");
    //     $("#one").hide();
    //     $("#two").show();
    //   // $(".box").fadeOut(4000);
    // })
    //
    // $("#two").click(function(){
    //   $(".box").removeClass( "box-one" );
    //   $(".box").addClass( "box-two" );
    //   $(".box").html("Mix sugars, butter, vanilla and egg in large bowl");
    //   // $(".box").fadeIn(1000);
    //   $("#two").hide();
    //   $("#three").show();
    // })
    //
    // $("#three").click(function(){
    //   $(".box").html("Stir in flour, baking soda and salt");
    //   // $(".box").fadeOut(4000);
    //   $("#three").hide();
    //   $("#four").show();
    // })
    //
    // $("#four").click(function(){
    //   $(".box").html("Stir in chocolate chips");
    //   // $(".box").fadeIn(1000);
    //   $("#four").hide();
    //   $("#five").show();
    // });
    //
    // $("#five").click(function(){
    //   $(".box").html("Put on a tray and bake for 10 minutes");
    //   // $(".box").fadeOut(4000);
    //   $("#five").hide();
    //
    // });
    //
    // $("#ingredients").click(function(){
    //   $(".box").html("Ingredients: <br> 1 cup butter softened <br> 1 cup white sugar <br> 1 cup packed brown sugar <br> 1 egg <br> 3 teaspoons vailla extract <br> 4 cups all purpose flour <br> 1 teaspoon baking soda 	<br>1 teaspoon salt <br> 4 cups semisweet chocolate chips" );
    //   // $(".box").fadeIn(1000);
    // });
    //
    // // $(".box").css("background-color", "blue");
    // $("#sam").click(function(){
    //   $(".box").removeClass( "box-bob" );
    //   $(".box").addClass( "box-big" );
    //   $(".box").html("Woohooo you clicked Sam!");
    // })

    $("#ingredients").click(function(){
      // $(".content").removeClass( "box-bob" );
      $(".content").addClass( "content-p1" );
      $("#title").html("List of Ingredients");
      $("#bodytext").html("1 cup butter softened <br> 1 cup white sugar <br> 1 cup packed brown sugar <br> 1 egg <br> 3 teaspoons vailla extract <br> 4 cups all purpose flour <br> 1 teaspoon baking soda <br> 4 cups semisweet chocolate chips");
    })


$("#steptwo").click(function(){
  $(".content").addClass( "content-p2" );
  $("#title").html("Step Two");
  $("#bodytext").html("Mix sugars, butter, vanilla and egg in large bowl");
})

$("#stepthree").click(function(){
  $(".content").addClass( "content-p3" );
  $("#title").html("Step Three");
  $("#bodytext").html("Stir in flour, baking soda and salt");
})

$("#stepfour").click(function(){
  $(".content").addClass( "content-p4" );
  $("#title").html("Step Four");
  $("#bodytext").html("Stir in chocolate chips");
})

$("#stepfive").click(function(){
  $(".content").addClass( "content-p5" );
  $("#title").html("Step Five");
  $("#bodytext").html("Put on a tray and bake for 10 minutes and then ENJOY!!");
})

// $("#stepone").click(function(){
//   $(".content").addClass( "content-p6" );
//   $("#title").html("Step One");
//   $("#bodytext").html("Preheat oven to 350 degrees");



    });
