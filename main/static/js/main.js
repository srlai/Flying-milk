
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
    $(".fitscreen").css("height", fitscreen);

  //------- Active Nice Select --------//

    $('select').niceSelect();


    $('.navbar-nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });

    // Search Toggle
    $("#search_input_box").hide();
    $("#search").on("click", function () {
        $("#search_input_box").slideToggle();
        $("#search_input").focus();
    });
    $("#close_search").on("click", function () {
        $('#search_input_box').slideUp(500);
    });

    /*==========================
		javaScript for sticky header
		============================*/
			$(".sticky-header").sticky();

    /*=================================
    Javascript for banner area carousel
    ==================================*/
    $(".active-banner-slider").owlCarousel({
        items:1,
        autoplay:false,
        autoplayTimeout: 5000,
        loop:true,
        nav:true,
        navText:["<img src='img/banner/prev.png'>","<img src='img/banner/next.png'>"],
        dots:false
    });

      // -------   Mail Send ajax

         $(document).ready(function() {
            var form = $('#booking'); // contact form
            var submit = $('.submit-btn'); // submit button
            var alert = $('.alert-msg'); // alert div for show alert message

            // form submit event
            form.on('submit', function(e) {
                e.preventDefault(); // prevent default form submit

                $.ajax({
                    url: 'booking.php', // form action url
                    type: 'POST', // form submit method get/post
                    dataType: 'html', // request type html/json/xml
                    data: form.serialize(), // serialize form data
                    beforeSend: function() {
                        alert.fadeOut();
                        submit.html('Sending....'); // change submit button text
                    },
                    success: function(data) {
                        alert.html(data).fadeIn(); // fade in response data
                        form.trigger('reset'); // reset form
                        submit.attr("style", "display: none !important");; // reset submit button text
                    },
                    error: function(e) {
                        console.log(e)
                    }
                });
            });
        });




    $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });   

    

  //------- Start Quantity Increase & Decrease Value --------//
    var value,
        quantity = document.getElementsByClassName('quantity-container');

    function createBindings(quantityContainer) {
        var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
        var increase = quantityContainer.getElementsByClassName('increase')[0];
        var decrease = quantityContainer.getElementsByClassName('decrease')[0];
        increase.addEventListener('click', function () { increaseValue(quantityAmount); });
        decrease.addEventListener('click', function () { decreaseValue(quantityAmount); });
    }

    function init() {
        for (var i = 0; i < quantity.length; i++ ) {
            createBindings(quantity[i]);
        }
    };

    function increaseValue(quantityAmount) {
        value = parseInt(quantityAmount.value, 10);

        console.log(quantityAmount, quantityAmount.value);

        value = isNaN(value) ? 0 : value;
        value++;
        quantityAmount.value = value;
    }

    function decreaseValue(quantityAmount) {
        value = parseInt(quantityAmount.value, 10);

        value = isNaN(value) ? 0 : value;
        if (value > 0) value--;

        quantityAmount.value = value;
    }

  init();

//------- End Quantity Increase & Decrease Value --------//
 });
