$(function () {

    'use strict';

    (function () {

        var aside = $('.side-nav'),

            showAsideBtn = $('.show-side-btn'),

            contents = $('#contents');

        showAsideBtn.on("click", function () {

            $("#" + $(this).data('show')).toggleClass('show-side-nav');

            contents.toggleClass('margin');

        });

        if ($(window).width() <= 767) {

            aside.addClass('show-side-nav');

        }
        $(window).on('resize', function () {

            if ($(window).width() > 767) {

                aside.removeClass('show-side-nav');

            }

        });

        // dropdown menu in the side nav
        var slideNavDropdown = $('.side-nav-dropdown');

        $('.side-nav .categories li').on('click', function () {

            $(this).toggleClass('opend').siblings().removeClass('opend');

            if ($(this).hasClass('opend')) {

                $(this).find('.side-nav-dropdown').slideToggle('fast');

                $(this).siblings().find('.side-nav-dropdown').slideUp('fast');

            } else {

                $(this).find('.side-nav-dropdown').slideUp('fast');

            }

        });

        $('.side-nav .close-aside').on('click', function () {

            $('#' + $(this).data('close')).addClass('show-side-nav');

            contents.removeClass('margin');

        });

    }());

    // Start chart

});


$(function () {

    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });

    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));

});
$(function () {

    $("#slider-rang").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function (event, ui) {
            $("#amoun").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });

    $("#amoun").val("$" + $("#slider-rang").slider("values", 0) +
        " - $" + $("#slider-rang").slider("values", 1));

});


$('.dic-hide').click(function () {
    $('.dic-show').toggle('slow');
});
$('.dis-hide').click(function () {
    $('.dis-show').toggle('slow');
});
$('.dit-hide').click(function () {
    $('.dit-show').toggle('slow');
});
$('.dik-hide').click(function () {
    $('.dik-show').toggle('slow');
});


/* $(function () {
  $('#datepickersh').datetimepicker();
});

 */


$('#submit_query').on('click', function () {


    $("[datamessage]").html("");

    $("#submit_query").attr('disabled', true).html('Loading...');
    $(".user_comment").replaceWith("");
    var hiturl = $("#site_url").val();
    $.ajax({
        url: hiturl + 'holiday/holiday_enqiry',
        type: 'POST',
        data: $('#enquery_form_ubmit').serialize(),
        success: function (data) {
            // alert("YOUR SUCCESS MESSAGE HERE");
            $("#submit_query").attr('disabled', false).html('Submit query');
            var fdata = JSON.parse(data);
            if (fdata.status_code == 1) {
                $.each(fdata.error_message, function (key, val) {
                    $('[name="' + key + '"]', '#enquery_form_ubmit').after(val);
                });
            } else if (fdata.status_code == 0) {
                $('#enquery_form_ubmit')[0].reset();
                // $('#success_msg_holiday').html(fdata.error_message).css('color', 'green', 'text-align', 'center');
                // $("[datamessage]").text(fdata.error_message).addClass('alert-success');
                window.location.replace(fdata.Redirect_url);
                setTimeout(function () {
                    window.location.reload();
                }, 3000);
            } else {
            }
        }
    });


})

$(document).ready(function () {
    $('[eqnquiryformsubmit]').on('submit', function () {


        $("[datamessage]").html("");

        $("[submitenuiryform]").attr('disabled', true).html('Loading...');
        $(".user_comment").replaceWith("");
        var hiturl = $("#site_url").val();
        $.ajax({
            url: hiturl + 'holiday/holiday_enqiryall',
            type: 'POST',
            data: $('[eqnquiryformsubmit]').serialize(),
            success: function (data) {
                // alert("YOUR SUCCESS MESSAGE HERE");
                $("[submitenuiryform]").attr('disabled', false).html('Submit');
                var fdata = JSON.parse(data);
                if (fdata.status_code == 1) {
                    $.each(fdata.error_message, function (key, val) {
                        $('[name="' + key + '"]', '[eqnquiryformsubmit]').after(val);
                    });
                } else if (fdata.status_code == 0) {
                    $('[eqnquiryformsubmit]')[0].reset();
                    $('[message]').html(fdata.error_message).css('color', 'green', 'text-align', 'center');
                    // $("[datamessage]").text(fdata.error_message).addClass('alert-success');
                    /* setTimeout(function() {
                        window.location.reload();
                    }, 3000); */
                } else {
                }
            }
        });

        return false;
    })
});

$('.click_pointer').click(function () {

    var package_name = $('#package_name').val();
    var package_id = $('#package_id').val();

    $('[name = "package_name"]').val(package_name);
    $('[name = "package_id"]').val(package_id);


})


function getpackagename(package_name, package_id) {

    $('[name = "package_name"]').val(package_name);
    $('[name = "package_id"]').val(package_id);

}

$('.payment_crousel').owlCarousel({
    loop: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    items: 4,
    loop: true,
    autoplay: true,
    nav: true,
    dots: false,
    lazyLoad: true,
    margin: 10,
    smartSpeed: 650,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1200: {
            items: 6
        }
    }
})
$('#recent_blog').owlCarousel({
    loop: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    items: 4,
    loop: true,
    autoplay: true,
    nav: true,
    dots: false,
    lazyLoad: true,
    margin: 10,
    smartSpeed: 650,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
})


$('#video_carousel').owlCarousel({
    loop: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    items: 4,
    loop: true,
    autoplay: true,
    nav: true,
    dots: false,
    lazyLoad: true,
    margin: 10,
    smartSpeed: 650,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1200: {
            items: 4
        }
    }
})


$('#luckydraw').owlCarousel({
    loop: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    items: 4,
    loop: true,
    autoplay: true,
    nav: true,
    dots: false,
    lazyLoad: true,
    margin: 10,
    smartSpeed: 650,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1200: {
            items: 4
        }
    }
})


$('#holiday_carousel3').owlCarousel({
    loop: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    items: 3,
    loop: true,
    nav: true,
    dots: false,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 10,
    smartSpeed: 650,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
})
$('#blog_tour').owlCarousel({
    loop: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    items: 3,
    loop: true,
    nav: true,
    dots: false,
    lazyLoad: true,
    margin: 10,
    smartSpeed: 650,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
})
$('#box_carousel3').owlCarousel({
    loop: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    items: 3,
    loop: true,
    nav: true,
    dots: false,
    lazyLoad: true,
    margin: 10,
    smartSpeed: 650,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
})

$('#box_carousel4').owlCarousel({
    loop: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    items: 3,
    loop: true,
    nav: true,
    dots: false,
    lazyLoad: true,
    margin: 10,
    smartSpeed: 650,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
})
$('#specialist_tour').owlCarousel({
    loop: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    items: 3,
    loop: true,
    nav: true,
    dots: false,
    lazyLoad: true,
    autoplay: true,
    margin: 10,
    smartSpeed: 650,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
})

$('#leaders_tour').owlCarousel({
    loop: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    items: 3,
    loop: true,
    nav: true,
    dots: false,
    lazyLoad: true,
    autoplay: true,
    margin: 10,
    smartSpeed: 650,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
})

// $('#holiday_popular').owlCarousel({
//     loop:true,
//      navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
//     autoplay: true,
//     nav: false,
//     dots: false,
//     autoplayTimeout: 3500,
//     autoplayHoverPause: true,
//     navSpeed: 1300,
//     autoplaySpeed: 1300,
//     margin: 10,
//     nav: true,
//     loop: true,
//   responsive:{   
//         0:{
//             items:3
//         },
//         600:{
//             items:3
//         },
//         1200:{
//             items:4
//         }
//     }
// })
$('#partner_popular').owlCarousel({
    loop: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    autoplay: true,
    nav: false,
    dots: false,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    navSpeed: 1300,
    autoplaySpeed: 1300,
    margin: 10,
    nav: true,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
})
// $('.partner_listall').owlCarousel({
//     loop:true,
//      navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
//     autoplay: true,
//     nav: false,
//     dots: false,
//     autoplayTimeout: 3500,
//     autoplayHoverPause: true,
//     navSpeed: 1300,
//     autoplaySpeed: 1300,
//     margin: 10,
//     nav: true,
//     loop: true,
//   responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1200:{
//             items:1
//         }
//     }
// })

$('#tourism_popular').owlCarousel({
    loop: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    autoplay: true,
    nav: false,
    dots: false,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    navSpeed: 1300,
    autoplaySpeed: 1300,
    margin: 10,
    nav: true,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 4
        },
        1200: {
            items: 1
        }
    }
})

$('#holiday1_popular').owlCarousel({
    loop: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    autoplay: true,
    nav: false,
    dots: false,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    navSpeed: 1300,
    autoplaySpeed: 1300,
    margin: 10,
    nav: true,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
})

$('#review_popular').owlCarousel({
    loop: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    autoplay: true,
    nav: false,
    dots: false,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    navSpeed: 1300,
    autoplaySpeed: 1300,
    margin: 10,
    nav: true,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 4
        },
        1200: {
            items: 2
        }
    }
})


$('#top_cat_owl').owlCarousel({
    loop: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    items: 3,
    loop: true,
    nav: true,
    dots: false,
    lazyLoad: true,
    margin: 10,
    smartSpeed: 650,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
})
$('#international_carousel').owlCarousel({
    loop: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    autoplay: false,
    nav: false,
    dots: false,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    navSpeed: 1300,
    autoplaySpeed: 1300,
    margin: 10,
    nav: true,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 4
        },
        1200: {
            items: 2
        }
    }
})

$('#hotel_carousel1').owlCarousel({
    loop: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    autoplay: false,
    nav: false,
    dots: false,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    navSpeed: 1300,
    autoplaySpeed: 1300,
    margin: 10,
    nav: true,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 4
        },
        1200: {
            items: 3
        }
    }
})

$('#holiday1_carousel').owlCarousel({
    loop: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    autoplay: true,
    nav: false,
    dots: false,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    navSpeed: 1300,
    autoplaySpeed: 1300,
    margin: 10,
    nav: true,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 4
        },
        1200: {
            items: 1
        }
    }
})


function isalpha(event) {


    var inputValue = event.which;
    // allow letters and whitespaces only.
    if (!(inputValue >= 65 && inputValue <= 122) && (inputValue != 32 && inputValue != 0)) {

        swal.fire({
            title: '<span style  =  "font-size:14px; color:red">Only Accept Letters And white Space</span>',
            type: 'info',
            animation: true,
            customClass: {
                popup: 'animated tada'
            }
        });
        return false;
    } else if ((inputValue == 91 && inputValue <= 96)) {

        swal.fire({
            title: '<span style  =  "font-size:14px; color:red">Only Accept Letters And white Space</span>',
            type: 'info',
            animation: true,
            customClass: {
                popup: 'animated tada'
            }
        });
        return false;
    }
    return true;
}


function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        swal.fire({
            title: '<span style  =  "font-size:14px; color:red">Please Enter Numeric value</span>',
            type: 'info',
            animation: true,
            customClass: {
                popup: 'animated tada'
            }
        });
        return false;
    }
    return true;
}


$(document).ready(function () {
    $('#subscribe').click(function () {
        var email = $('#subscribe_email').val();
        var hiturl = $("#site_url").val();
        var button_text_value = $(this).text();
        $("#subscribe").attr("disabled", true).html('Processing...');
        $.ajax({
            url: hiturl + 'home/subscribe',
            data: { 'email': email },
            type: 'POST',
            success: function (data) {
                $("#subscribe").attr("disabled", false).text(button_text_value);
                var fdata = JSON.parse(data);
                if (fdata.status == 0) {
                    $('#subscribe_result').html(fdata.message).css('color', 'green', 'text-align', 'center');
                    $('#subscribe_email').val(' ');
                } else {
                    $('#subscribe_result').html(fdata.message).css('color', 'white', 'text-align', 'center');
                    ;
                }
            }
        })
    });
});


// $("#cusholiday_message").click(function() {
//     $('.greatedeals_error').text('');
//     var data = $("#customer_holiday_pick").serialize();
//     $.ajax({
//         type: "POST",
//         url: "home/GreateDeals",
//         data: data,
//         success: function(data) {
//             var fdata = JSON.parse(data);

//             if (fdata.status_code == 1) {

//                 $.each(fdata.error_message, function(key, val) {
//                     $('[name="' + key + '"]', '#customer_holiday_pick').after(val);
//                 });
//             } else if (fdata.status_code == 0) {
//                 $('#customer_holiday_pick')[0].reset();
//                 $('#package_save').html("<div class='  alert  alert-success fw-6 text-center '>" + fdata.error_message + "</div>");

//             }
//         }

//     });
// });


/*
    $('.callmenow').click(function ()
    {
    	
        var cell_number = $('#cell_number').val();
    	
        var hiturl = $("#site_url").val();	
        var button_text_value = $(this).text();	
        $(".callmenow").attr("disabled", true).html('Processing...');	
        $.ajax({
                    url: hiturl + 'home/subscribe_cell',
                    data: {'cell_number': cell_number},	
                    type: 'POST',
                    success: function (data)
                    {
                        $("#call").attr("disabled", false).text(button_text_value);
                        var fdata = JSON.parse(data);
                        if (fdata.status == 0) {
                        $('#cell_result').html(fdata.message).css('color', 'green', 'text-align', 'center');
                        $('#cell_number').val(' ');
                        }
                        else 
                        {	
                            $('#cell_result').html(fdata.message).css('color', 'red', 'text-align', 'center');;
                        }
                    }	
                })
    });
         */


$(function () {
    $('.callmenows').click(function () {
        var customer = $("#exampleInputphone").val();
        if (customer == '') {
            $(".thanku2").html("mobile Number Field is Required.").css('color', 'red');

        } else if (customer.length < 10) {
            $(".thanku2").html("Enter 10 digit Mobile Number.").css('color', 'red');
        } else if (customer.length > 10) {
            $(".thanku2").html("Enter 10 digit Mobile Number.").css('color', 'red');
        } else {
            $(".thanku2").html("thank you for calling <samp>bharatbooking</samp> Our Customer Executive Call You Shortly.").css('color', 'green');
        }
        setTimeout(function () {
            $(".calltrans").fadeOut(1500);
            $(".thanku2").fadeOut(1500);
        }, 3500);
        //alert("your no is :" + customer);
        var customer = 7042741165;
        var agent = 9816348636;
        $.ajax({
            type: "GET",
            url: "https://etsdom.kapps.in/webapi/bharat/api/bharat_c2c.py?auth_key=46472b41-7413-11e5-95ce&customer_number=+91" + customer + "&agent_number=+91" + agent,
            success: function (data) {

            }
        });
    });
});


$('#download').click(function () {

    var cell_number = $('#cell_number').val();
    var hiturl = $("#site_url").val();
    var button_text_value = $(this).text();
    $("#download").attr("disabled", true).html('Processing...');
    $.ajax({
        url: hiturl + 'home/appsms',
        data: { 'cell_number': cell_number },
        type: 'POST',
        success: function (data) {
            $("#download").attr("disabled", false).text(button_text_value);
            var fdata = JSON.parse(data);
            if (fdata.status == 0) {
                $('#cell_result').html(fdata.message).css('color', 'green', 'text-align', 'center');
                $('#cell_number').val(' ');
                setTimeout(function () {
                    $('#cell_result').text(' ');
                }, 2000);
            } else {
                $('#cell_result').html(fdata.message).css('color', 'red', 'text-align', 'center');
                ;
                setTimeout(function () {
                    $('#cell_result').text(' ');
                }, 2000);
            }
        }
    })
});

/*call me home js*/
$('.bottomcallme .rotate ').on('click', function () {
    $('.clickto_call').toggleClass('clickto_call_show');
})
/*social icon scroll*/

$(window).scroll(function () {
    var navTop = $(window).scrollTop();
    var navBottom = $(window).scrollTop();
    $('.model-0').css("top", navTop + 95);
    $('.model-0').css("bottom", navBottom - 195);
});
/*social icon js end*/


$('.country_select_agent').on('change', function () {

    var d = $('.country_select_agent').val();
    var hiturl = $("#site_url").val();
    $.ajax({
        url: hiturl + 'customer/state',
        type: 'POST',
        data: { 'id': d },
        success: function (data) {
            $('.state_select_agent').html("<option value=''>select state</option>" + data);
        }
    })

})

$('.state_select_agent').on('change', function () {
    var city = $('.state_select_agent').val();
    var hiturl = $("#site_url").val();
    $.ajax({
        url: hiturl + 'customer/city',
        type: 'POST',
        data: { 'id': city },
        success: function (data) {
            $('#city_select').html("<option value=''>Select City</option>" + data);
        }
    })

})


$(function () {
    $("#datepicker").datepicker();
});


// debounce so filtering doesn't happen every millisecond
function debounce(fn, threshold) {
    var timeout;
    return function debounced() {
        if (timeout) {
            clearTimeout(timeout);
        }

        function delayed() {
            fn();
            timeout = null;
        }

        timeout = setTimeout(delayed, threshold || 100);
    }
}

$(window).bind("load", function () {
    $('#all').click();
});


// gallery
$(document).ready(function () {
    $(".img_gal").click(function () {
        var t = $(this).attr("src");
        $(".modal-body").html("<img src='" + t + "' class='modal-img'>");
        $("#myModal").modal();
    });

    $("video").click(function () {
        var v = $("video > source");
        var t = v.attr("src");
        $(".modal-body").html("<video class='model-vid' controls><source src='" + t + "' type='video/mp4'></source></video>");
        $("#myModal").modal();
    });
}); //EOF Document.ready


$(document).ready(function () {

    $(".option-heading").on('click', function () {
        $(this).toggleClass('is-active').next().next(".option-content").stop().slideToggle(500);
    });

});