 var main = function () {
                'use strict';
                $('.afbnav a').on("click", function () {

                    var data = $(this).data('content');
                    
                    var contentClass = $("." + data);
                    $('.titel1,.titel2, .titel3,.titel4').addClass("hidden");
                    contentClass.removeClass("hidden");
                });

                    $('li').hover(
                        function () {
                            $(this).addClass('animated infinite rubberBand');
                        }, function () {
                            $(this).removeClass('animated infinite rubberBand');
                        }
                    );

                  
                        setInterval(function () {$('#pijl').addClass("animated infinite flipInY")}, 3000);
            
            
            /* slowscroll*/


	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();

		var target = this.hash,
			$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 1800, 'swing', function () {
			window.location.hash = target;
		});
	});

};
                    
                    
                  

        
                


                $(document).ready(main);