head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

	// console.log($('body').html());

	$('.js-slick').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
                breakpoint: 1020,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
			},
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
		]
	});
	$('.js-themes').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
        centerMode: true,
		slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
	});

	//select
	 $(document).click(function() {
        $(".js-select").removeClass("is-active");
	      $(".js-select-list").slideUp(100);
    });
    
	// select list
    $("body").on("click",".js-select",function(event) {
        event.stopPropagation();
    });
    $("body").on("click",".js-select-text",function(event) {
    	var select = $(this).parents(".js-select");
        if (select.hasClass("is-active")) {
            $(".js-select").removeClass("is-active");
            $(".js-select-list").slideUp(100);
        }
        else {
            $(".js-select").removeClass("is-active");
            $(".js-select-list").slideUp(100);
            select.toggleClass("is-active").find(".js-select-list").slideToggle(100);
        }
       
    });

    $("body").on("click",".js-select-list li",function() {
        var val = $(this).attr("data-val");
        var text = $(this).text();
        var select = $(this).parents(".js-select");
        var selectList = $(this).parents(".js-select-list");
        select.find(".js-select-text").text(text);
        select.find("option").removeAttr("selected");
        select.find('option[value="'+val+'"]').attr("selected", "selected");
        selectList.find("li").removeClass("is-active");
        $(this).addClass("is-active");
        select.removeClass("is-active");
        selectList.slideUp(100);
        return false;
        
    });

    $('.js-rate').each(function() {
    	$('.js-rate-open').on('click', function () {
    		$(this).parents('.js-rate').find('.js-rate-popup').toggleClass('is-active');
    		return false;
    	});
    	$('body').on('click', function() {
    		$('.js-rate-popup').removeClass('is-active');
    	});
    	$(this).on('click', function(event) {
    		event.stopPropagation();
    	});
    });

    //mob 
    $('.sidebar').each(function() {
        $('.sidebar-btn').on('click', function() {
            $('body').addClass('is-active');
        });
        $('body').on('click', function() {
            $('body').removeClass('is-active');
        });
        $(this).on('click', function(event) {
            event.stopPropagation();
        });
    });
   //nav

    $( ".js-nav-select" ).change(function() {
        elem = $('.js-nav-list li').eq($('.js-nav-select option:selected').index()).children('a').attr('href');
        window.location.href = elem;
   });
});