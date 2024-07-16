
// navbar background color change on scroll

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll < 5){
            $('.fixed-top').css('background', '#fixed-top');
        } else{
            $('.fixed-top').css('background', '#fixed-top');
			
        }
		
		 if(scroll < 5){
            $('.fixed-top').css('box-shadow', 'none');
        } else{
            $('.fixed-top').css('box-shadow', '1px 2px 6px #000');
			
        }
		
		if(scroll < 5){
            $('.nav-link').css('color', '#fff');
        } else{
            $('.nav-link').css('color', '#000');
			
        }
		
		
		if(scroll < 5){
            $('#drop').css('color', '#fff');
        } else{
            $('#drop').css('color', '#000');
			
        }
		
		
		
    });
	
$(document).ready(function() {
    var owl = $('.loop');
    owl.owlCarousel({
        stagePadding: 0,
        margin: 0,
        nav: true,
        loop: true,
		autoplay:true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items:2
            },
            980: {
                items: 3
            },
            1152: {
                items: 3
            },
            1240: {
                items: 3
            }
        }
    })
});	

// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

$(".btn-group, .dropdown").hover(
                        function () {
                            $('>.dropdown-menu', this).stop(true, true).fadeIn("fast");
                            $(this).addClass('open');
                        },
                        function () {
                            $('>.dropdown-menu', this).stop(true, true).fadeOut("fast");
                            $(this).removeClass('open');
                        });

