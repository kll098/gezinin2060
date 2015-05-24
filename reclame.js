var main = function () {
setInterval(function () {
      console.log ("wordt elke 5 seconden afgedrukt");


    if ($('.reclame1').hasClass('selected')) {

               
             $(".reclame1").fadeOut(3000,function(){
            $(".reclame2").fadeIn(3000, function(){

                          $('.reclame1').removeClass('selected');
                          $('.reclame2').addClass('selected');

                                });
                                        });

    }

    else if ($('.reclame2').hasClass('selected')) {
               $('.reclame2').fadeOut(3000,function(){
                        $('.reclame3').fadeIn(3000, function(){

                          $('.reclame2').removeClass('selected');
                          $('.reclame3').addClass('selected');

                                });
                                        });
    }

    else if ($('.reclame3').hasClass('selected')) {
                $('.reclame3').fadeOut(3000,function(){
                        $('.reclame4').fadeIn(3000, function(){

                          $('.reclame3').removeClass('selected');
                          $('.reclame4').addClass('selected');

                                });
                                         });
    }

    else {$('.reclame4').fadeOut(3000,function(){
                              $('.reclame1').fadeIn(3000, function(){

                                  $('.reclame4').removeClass('selected');
                                  $('.reclame1').addClass('selected');

                                       });
                                              });
                 }
                      }, 3000);
    

};

$(document).ready(main);


