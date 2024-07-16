/*mobile js*/
 $(document).ready(function () {
        $('.striperleft').click(function () {
            $(this).addClass('domactiveclass').siblings().removeClass('domactiveclass');
        })

        $('.striperight').click(function () {
            $(this).addClass('domactiveclass').siblings().removeClass('domactiveclass');
        })
    });
function isMobile() {
    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i
        .test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
        .test((navigator.userAgent || navigator.vendor || window.opera)
            .substr(0, 4)))
}


$(function() {
    if (isMobile()) {

        $("[data-depart-date]").datepicker({
            defaultDate: "",
            dateFormat: "dd-mm-yy",
            minDate: 0,
            changeMonth: false,
            numberOfMonths: 1,
            beforeShow: function() {
                $(".ui-datepicker").addClass('raj_datepicker');
            },
            onClose: function(selectedDate) {
                var type = $("[name='journeytype']").val();
                if (type == "roundtrip") {
                    $("[data-return-date]").datepicker("option", "minDate",
                        selectedDate).focus().select();
                }
            }
        });
        $("[data-return-date]").datepicker({
            defaultDate: "",
            dateFormat: "dd-mm-yy",
            minDate: 0,
            changeMonth: false,
            numberOfMonths: 1,
            beforeShow: function() {
                $(".ui-datepicker").addClass('raj_datepicker');
                $('input[value="roundtrip"]').click();
                $('input[value="roundtrip"]').parent(".labelbr").addClass(
                    'rajactive');
                var selectedDate = $('[data-depart-date]').val();
                var newdate = selectedDate.split("-").reverse().join("-");
                var newdate = new Date(newdate);
                $(this).datepicker("option", "minDate", newdate);

            },
            onClose: function(selectedDate) {
                $("[data-depart-date]").datepicker("option", selectedDate);
            }
        });
        $(document).on(
            'focus',
            '[multisegdate1]',
            function() {
                $(this).datepicker({
                    defaultDate: "",
                    dateFormat: "dd-mm-yy",
                    minDate: 0,
                    changeMonth: false,
                    numberOfMonths: 1,
                    beforeShow: function() {
                        $(".ui-datepicker").addClass('raj_datepicker');
                    },
                    onClose: function(selectedDate) {
                        $("[multisegdate2]").datepicker("option",
                            "minDate", selectedDate);

                        var inputs = $(this).closest(
                            '#flight-multiform').find(':input');
                        inputs.eq(inputs.index(this) + 7).focus();
                    }
                });
            });
        $(document).on(
            'focus',
            '[multisegdate2]',
            function() {
                $(this).datepicker({
                    defaultDate: "",
                    dateFormat: "dd-mm-yy",
                    minDate: 0,
                    changeMonth: false,
                    numberOfMonths: 1,
                    beforeShow: function() {
                        $(".ui-datepicker").addClass('raj_datepicker');
                        /*
                         * if($('[multisegdate2]').val()=="" ||
                         * $('[multisegdate2]').val()==null) {
                         * $('[multisegdate2]').focus(); return false; }
                         */

                        var selectedDate = $('[multisegdate1]').val();
                        var newdate = selectedDate.split("-").reverse()
                            .join("-");
                        var newdate = new Date(newdate);
                        $(this)
                            .datepicker("option", "minDate",
                                newdate);
                    },
                    onClose: function(selectedDate) {
                        $("[multisegdate3]").datepicker("option",
                            "minDate", selectedDate);

                        var inputs = $(this).closest(
                            '#flight-multiform').find(':input');
                        inputs.eq(inputs.index(this) + 2).focus();
                    }
                });
            });
        $(document).on(
            'focus',
            '[multisegdate3]',
            function() {
                $(this).datepicker({
                    defaultDate: "",
                    dateFormat: "dd-mm-yy",
                    minDate: 0,
                    changeMonth: false,
                    numberOfMonths: 1,
                    beforeShow: function() {
                        $(".ui-datepicker").addClass('raj_datepicker');
                        var selectedDate = $('[multisegdate2]').val();
                        var newdate = selectedDate.split("-").reverse()
                            .join("-");
                        var newdate = new Date(newdate);
                        $(this)
                            .datepicker("option", "minDate",
                                newdate);
                    },
                    onClose: function(selectedDate) {
                        $("[multisegdate4]").datepicker("option",
                            "minDate", selectedDate);
                        var inputs = $(this).closest(
                            '#flight-multiform').find(':input');
                        inputs.eq(inputs.index(this) + 2).focus();
                    }
                });
            });
        $(document).on('focus', '[multisegdate4]', function() {
            $(this).datepicker({
                defaultDate: "",
                dateFormat: "dd-mm-yy",
                minDate: 0,
                changeMonth: false,
                numberOfMonths: 1,
                beforeShow: function() {
                    $(".ui-datepicker").addClass('raj_datepicker');
                    var selectedDate = $('[multisegdate3]').val();
                    var newdate = selectedDate.split("-").reverse().join("-");
                    var newdate = new Date(newdate);
                    $(this).datepicker("option", "minDate", newdate);
                },
                onClose: function(selectedDate) {

                }
            });
        });
    }
    /* ismobile function // */

});
/*mobile js end*/

$(function() {
    $(".common_booking").click(function() {
        var hiturl = $("#site_url").val();
        $('.fucontinue').hide();
        var OB = $(this).attr("OB");
        var IB = $(this).attr("IB");
        $("#pricechangeinfo").html(
            "<img src='" +
            hiturl +
            "/webroot/images/lg-spinner.gif' style='width: 50%;display: block; margin: 0 auto;' alt='loading image'/><h4 class='text-center'>Please Wait ....</h4>");
        $('#pricemyModalLabel').html(
            'Confirming Your Flight(s)');
        $('#pricechange').modal('show')

        $.ajax({
            type: "POST",
            url: hiturl + "flight/flight_fare_price_dom",
            data: { OB: OB, IB: IB },
            dataType: "text",
            cache: false,
            success: function(data) {
                data = $.trim(data);
                if (data == "truetrue") {
                    location.href = hiturl + "flight/booking_details/";
                } else {
                    var str = data.replace(/true/g, '');
                    $('#pricemyModalLabel').html('The price has been changed');
                    $('#pricechangeinfo').html(str);
                    $('.fucontinue').show();
                    $('#pricechange').modal('show')
                }
            }
        });
    });
});












var addcity = 2;

function addmulticity() {
    if (addcity >= 4) {
        return false;
    } else {

        addcity++;
        $("[raj-addmore-dv")
            .append(
                '<div class="row multirow searchform m0" data-addcity="' +
                addcity +
                '">' +
                '<div class="col-12 col-sm-6 col-md-4 multilg-3 p0 mb15">' +
                '<span class="icon_serchform"> From</span>' +
                '<input type="text" class="form-control inputtext left_data1" data-from-location-multi="true" placeholder="From" data-validation="required" data-validation-error-msg="Please enter origin" name="origin[]" id="origin_' + addcity + '" />' +
                '</div>' +
                '<div class="col-12 col-sm-6 col-md-4 multilg-3 p0 mb15">' +
                '<span class="icon_serchform"> To</span>' +
                '<input type="text" class="form-control inputtext left_data1 " data-to-location-multi="true" placeholder="To" data-validation="required" data-validation-error-msg="Please enter destination" id="destination_' + addcity + '"  name="destination[]" data-key="' +
                addcity +
                '" />' +
                '</div>' +
                '<div class="col-7 col-md-3 p0 mb15 fdate-3">' +
                '<span class="icon_serchform"><i class="fa fa-calendar dateicon hidden-md-up pl-2"></i> Depart</span>' +
                '<input type="text" class="form-control inputtext left_data1 date_formate  " multisegdate' +
                addcity +
                '="true" placeholder="Depart Date" data-validation="required" data-validation-error-msg="Select departure date" name="departdate[]" id="departdate_' + addcity + '"  />' +
                '<i class="fa fa-calendar dateicon d-sm-none"></i>' +
                '</div>' +
                '<div class="col-md-1 col-5 raj_p0 add_dv align-self-md-center removecity ">' +
                '<a href="javascript:void(0)" title="remove city" class="remove_this">' +
                '<i class="fa fa-times pr-1 remove_this closebtn_' +
                addcity + '" aria-hidden="true"></i> <span>Close</span>' +
                '</a>' +
                '</div>' + '</div>');

    }
    if (addcity >= 4) {
        $(".addcitym").hide();
    }

}
$(document).on('click', '.remove_this', function() {
    $(this).parents('.multirow').remove();
    addcity--;
    if (addcity <= 4) {
        $(".addcitym").show();
    }
    return false;
});
$(function() {
    $(".submitme")
        .click(
            function() {

                var hiturl = $("#site_url").val();
                var index = $(this).attr("index");
                $("#pricechangeinfo")
                    .html(
                        "<img src='" +
                        hiturl +
                        "/webroot/images/lg-spinner.gif' style='width: 50%;display: block; margin: 0 auto;' alt='loading image'/><h4 class='text-center'>Please Wait ....</h4>");
                $('#pricemyModalLabel').html(
                    'Confirming Your Flight(s)');
                $('#pricechange').modal('show')
                $.ajax({
                    type: "POST",
                    url: hiturl + "flight/flight_confirmation",
                    data: {
                        index: index
                    },
                    cache: false,
                    success: function(data) {
                        var fdata = JSON.parse(data);
                        if (fdata.status_code == 1) {
                            location.href = hiturl +
                                "flight/booking_details/";
                            $('#pricechange').modal('hide')
                        } else if (fdata.status_code == 3) {
                            $('#pricemyModalLabel').html(
                                'The price has been changed');
                            $('#pricechangeinfo').html(fdata.message);
                            $('#pricechange').modal('show')
                        } else {
                            $('#pricechange').modal('hide');
                            $('#modalerror').html(fdata.message);
                            $('#error').modal('show')
                        }

                    }
                });
                return false;
            });
});

$(function() {



    $(document)
        .on(
            "click",
            "[data-flight-farerule]",
            function() {
                var resultIndex = $(this).attr('rindex');
                var tid = $(this).attr('tid');
                $
                    .ajax({
                        url: $("#site_url").val() +
                            'flight/fare_rule',
                        type: "POST",
                        dataType: "text",
                        data: {
                            rindex: resultIndex,
                            tid: tid
                        },
                        cache: false,
                        error: function(jqXHR, textStatus,
                            errorThrown) {
                            if (jqXHR.readyState == 4) {
                                var getstatus = jqXHR.status;
                                var geterror = errorThrown;
                                $("#modalerror").html(
                                    "Request failed: " +
                                    geterror);
                                $("#error").modal('show');
                            } else if (jqXHR.readyState == 0) {
                                $("#modalerror")
                                    .html(
                                        'Network Connection Lost');
                                $("#error").modal('show');
                            } else {
                                var getstatus = jqXHR.status;
                                var geterror = errorThrown;
                                $("#modalerror")
                                    .html(
                                        'Network Connection Lost');
                                $("#error").modal(
                                    "Request failed: " +
                                    geterror);
                            }
                        },
                        beforeSend: function() {
                            $(".fareruledata")
                                .html(
                                    '<p>Loading fare rule please wait...</p>');
                        },
                        success: function(data, status) {
                            if (status == 'success') {
                                $(".fareruledata").html(data);
                            } else {
                                $(".fareruledata")
                                    .html(
                                        '<p>There is some issue while get fare rule</p>')
                            }
                        }
                    }).fail(
                        function(jqXHR, textStatus, errorThrown) {
                            var getstatus = jqXHR.status;
                            var geterror = errorThrown;
                            $("#modalerror").html(
                                'Network Connection Lost');
                            $("#error").modal(
                                "Request failed: " + geterror);
                        });
            });










    $('#oneroundform')
        .on(
            'submit',
            function() {

                var origin = document.forms["flight-form"]["origin"].value;
                var destination = document.forms["flight-form"]["destination"].value;
                if (origin == destination) {
                    alert("The 'Departure City' and 'Destination City' cannot be same. Please re-type.");
                    return false;
                } else {
                    return true;
                }
                return false;
            });

    /*
     * ======================= One way round trip city auto-complete
     * ===========================
     */
    $("[data-from-location]")
        .autocomplete({
            minLength: 0,
            maxResults: 15,
            source: function(request, response) {
                $.ajax({
                    url: $("#site_url").val() +
                        'flight/getairport',
                    dataType: "json",
                    cache: false,
                    data: {
                        term: request.term
                    },
                    success: function(data) {
                        response(data);
                    }
                });
            },
            open: function() {
                $(".ui-autocomplete").addClass('ttsautocomplet');
            },
            select: function(event, ui) {
                $("[data-from-location]").val(ui.item.label);
                $("[data-to-location]").focus();
                return false;
            },
            create: function() {
                $(this).data('ui-autocomplete')._renderItem = function(
                    ul, item) {
                    var cityname = item.city;
                    var airportcode = item.airportcode;
                    var airportname = item.airportname;
                    var country_code = item.country_code;
                    var countryName = item.countryName;
                    return $("<li>")
                        .data("ui-autocomplete-item", item)
                        .append(
                            "<a>" +
                            "<div class='dest_left'>" +
                            "<i class='fa fa-plane'></i>" +
                            "<samp class='city'>" +
                            cityname +
                            "</samp>" +
                            "<samp class='airpotcode'>&nbsp;(" +
                            airportname +
                            ")&nbsp;</samp>" +
                            "</div><div><samp class='aircode'>[" +
                            airportcode +
                            "]</samp><i class='flag " + (country_code.toLowerCase()) + "'></i></div>" +
                            "</a>").appendTo(ul);
                };
            }
        }).focus(function() {
            $(this).autocomplete('search', $(this).val())
        });

    $(
            "[data-from-location],[data-to-location],[data-from-location-multi],[data-to-location-multi]")
        .click(function() {
            $(this).select();
        });
    $(".swape-city").click(function() {
        var from_val = $("[data-from-location]").val();
        var to_val = $("[data-to-location]").val();
        if (from_val !== "" && to_val !== "") {
            $("[data-from-location]").val(to_val);
            $("[data-to-location]").val(from_val);
            $(".swape-city").toggleClass("jsRotateClass");
        } else {

        }
    });

    $("[data-to-location]")
        .autocomplete({
            minLength: 0,
            maxResults: 15,
            source: function(request, response) {
                $.ajax({
                    url: $("#site_url").val() +
                        'flight/getairport',
                    dataType: "json",
                    cache: false,
                    data: {
                        term: request.term
                    },
                    success: function(data) {
                        response(data);
                    }
                });
            },
            open: function() {
                $(".ui-autocomplete").addClass('ttsautocomplet');
            },
            select: function(event, ui) {
                $("[data-to-location]").val(ui.item.label);
                $("[data-depart-date]").focus();
                $("i.swape-city").css({
                    "opacity": "1",
                    "cursor": "pointer"
                });
                return false;
            },
            create: function() {
                $(this).data('ui-autocomplete')._renderItem = function(
                    ul, item) {
                    var cityname = item.city;
                    var airportcode = item.airportcode;
                    var airportname = item.airportname;
                    var country_code = item.country_code;
                    var countryName = item.countryName;
                    return $("<li>")
                        .data("ui-autocomplete-item", item)
                        .append(
                            "<a>" +
                            "<div class='dest_left'>" +
                            "<i class='fa fa-plane'></i>" +
                            "<samp class='city'>" +
                            cityname +
                            "</samp>" +
                            "<samp class='airpotcode'>&nbsp;(" +
                            airportname +
                            ")&nbsp;</samp>" +
                            "</div><div><samp class='aircode'>[" +
                            airportcode +
                            "]</samp><i class='flag " + (country_code.toLowerCase()) + "'></i></div>" +
                            "</a>").appendTo(ul);
                };
            }
        }).focus(function() {
            $(this).autocomplete('search', $(this).val())
        });

    /*
     * ======================= One way round trip city autocomplete End
     * ===========================
     */

    /*
     * ============================ Start Mulicity Auto complete
     * ===================================
     */

    $(document)
        .on(
            'focus',
            '[data-from-location-multi]',
            function() {
                $(this)
                    .autocomplete({
                        minLength: 0,
                        maxResults: 15,
                        source: function(request, response) {
                            $
                                .ajax({
                                    url: $("#site_url")
                                        .val() +
                                        'flight/getairport',
                                    dataType: "json",
                                    cache: false,
                                    data: {
                                        term: request.term
                                    },
                                    success: function(
                                        data) {
                                        response(data);
                                    }
                                });
                        },
                        open: function() {
                            $(".ui-autocomplete").addClass(
                                'ttsautocomplet');
                        },
                        select: function(event, ui) {
                            var inputs = $(this).closest(
                                    '#flight-multiform')
                                .find(':input');
                            inputs.eq(
                                    inputs.index(this) + 1)
                                .focus();

                        },
                        create: function() {
                            $(this).data('ui-autocomplete')._renderItem = function(
                                ul, item) {
                                var cityname = item.city;
                                var airportcode = item.airportcode;
                                var airportname = item.airportname;
                                var country_code = item.country_code;
                                var countryName = item.countryName;
                                return $("<li>")
                                    .data(
                                        "ui-autocomplete-item",
                                        item)
                                    .append(
                                        "<a>" +
                                        "<div class='dest_left'>" +
                                        "<i class='fa fa-plane'></i>" +
                                        "<samp class='city'>" +
                                        cityname +
                                        "</samp>" +
                                        "<samp class='airpotcode'>&nbsp;(" +
                                        airportname +
                                        ")&nbsp;</samp>" +
                                        "</div><div><samp class='aircode'>[" +
                                        airportcode +
                                        "]</samp><i class='flag " + (country_code.toLowerCase()) + "'></i></div>" +
                                        "</a>").appendTo(ul);
                            };
                        }
                    }).focus(
                        function() {
                            $(this).autocomplete('search',
                                $(this).val())
                        });
            });
    $(document)
        .on(
            'focus',
            '[data-to-location-multi]',
            function() {
                $(this)
                    .autocomplete({
                        minLength: 0,
                        maxResults: 15,
                        source: function(request, response) {
                            $
                                .ajax({
                                    url: $("#site_url")
                                        .val() +
                                        'flight/getairport',
                                    dataType: "json",
                                    cache: false,
                                    data: {
                                        term: request.term
                                    },
                                    success: function(
                                        data) {
                                        response(data);
                                    }
                                });
                        },
                        open: function() {
                            $(".ui-autocomplete").addClass(
                                'ttsautocomplet');
                        },
                        select: function(event, ui) {
                            var key = $(this).attr(
                                "data-key");
                            var inputs = $(this).closest(
                                    '#flight-multiform')
                                .find(':input');
                            if (key == 4) {
                                inputs
                                    .eq(
                                        inputs
                                        .index(this) + 1)
                                    .focus().select();
                            } else if (key == 1) {
                                inputs
                                    .eq(
                                        inputs
                                        .index(this) + 1)
                                    .focus().select();
                                inputs
                                    .eq(
                                        inputs
                                        .index(this) + 7)
                                    .val(ui.item.value);
                            } else {
                                inputs
                                    .eq(
                                        inputs
                                        .index(this) + 1)
                                    .focus().select();
                                inputs
                                    .eq(
                                        inputs
                                        .index(this) + 2)
                                    .val(ui.item.value);
                            }
                        },
                        create: function() {
                            $(this).data('ui-autocomplete')._renderItem = function(
                                ul, item) {
                                var cityname = item.city;
                                var airportcode = item.airportcode;
                                var airportname = item.airportname;
                                var country_code = item.country_code;
                                var countryName = item.countryName;
                                return $("<li>")
                                    .data(
                                        "ui-autocomplete-item",
                                        item)
                                    .append(
                                        "<a>" +
                                        "<div class='dest_left'>" +
                                        "<i class='fa fa-plane'></i>" +
                                        "<samp class='city'>" +
                                        cityname +
                                        "</samp>" +
                                        "<samp class='airpotcode'>&nbsp;(" +
                                        airportname +
                                        ")&nbsp;</samp>" +
                                        "</div><div><samp class='aircode'>[" +
                                        airportcode +
                                        "]</samp><i class='flag " + (country_code.toLowerCase()) + "'></i></div>" +
                                        "</a>").appendTo(ul);
                            };
                        }
                    }).focus(
                        function() {
                            $(this).autocomplete('search',
                                $(this).val())
                        });
            });
    /*
     * ============================ End Mulicity Auto complete
     * ===================================
     */

    /*
     * ===============================search type value
     * ==================================
     */


    /*flight oneay and roundtrip validation*/

    var datavalidation = 'data-validation';
    var addrequired = 'required';
    $("[data_flight_selected_way]").click(
        function() {
            var value = $(this).attr('data_flight_selected_way');;
            if (value == "oneway") {
                $("[data-return-date]").removeClass('wbgi').val("")
                    .removeAttr(datavalidation, addrequired);;
                $("[name='journeytype']").val(value);
                $("[data-multicity]").hide();
                $("[data-oneway]").show();
                $(".flight_way").removeClass('active');
                $('[data_flight_selected_way = "' + value + '"]').addClass('active');
            } else if (value == "roundtrip") {
                $("[data-return-date]").addClass('wbgi').attr(
                    datavalidation, addrequired);
                $("[name='journeytype']").val(value);
                $("[data-multicity]").hide();
                $("[data-oneway]").show();
                $(".flight_way").removeClass('active');
                $('[data_flight_selected_way = "' + value + '"]').addClass('active');
            } else if (value == "multicity") {
                $("[data-return-date]").removeClass('wbgi').val("")
                    .removeAttr(datavalidation, addrequired);;
                $("[name='journeytype']").val(value);
                $("[data-multicity]").show();
                $("[data-oneway]").hide();
                $(".flight_way").removeClass('active');
                $('[data_flight_selected_way = "' + value + '"]').addClass('active');
            } else if (value == "helitaxi" || value == "charted" || value == "heliport") {
                $("[name='journeytype']").val(value);
                $("[data-oneway]").show();
                $(".flight_way").removeClass('active');
                $('[data_flight_selected_way = "' + value + '"]').addClass('active');
            } else {
                $("[name='journeytype']").val(value);
                $("[data-oneway]").hide();
                $("[data-multicity]").show();
                $(".flight_way").removeClass('active');
                $('[data_flight_selected_way = "' + value + '"]').addClass('active');

            }
        });


    var count = 1;
    var paxcount = 1;
    $("[data-adult-next]").click(
        function() {

            var child_val = $(this).parents(".pax_parent").find(
                ".child_input").val();
            var adt_val = $(this).parents(".pax_parent").find(".adt_input")
                .val();
            var adt_child_to = Number(adt_val) + Number(child_val);
            if (adt_child_to < 9) {
                adt_val++;
                $(this).parents(".pax_parent").find("[data-adult-count]")
                    .text(adt_val);
                $(this).parents(".pax_parent").find(".adt_input").val(
                    adt_val);
            }
            travelpaxcount()
        });

    $("[data-adult-pre]").click(
        function() {
            var adt_val = $(this).parents(".pax_parent").find(".adt_input")
                .val();
            var infent_val = $(this).parents(".pax_parent").find(
                ".infent_input").val();
            if (adt_val > 1) {
                adt_val--;
                $(this).parents(".pax_parent").find("[data-adult-count]")
                    .text(adt_val);
                $(this).parents(".pax_parent").find(".adt_input").val(
                    adt_val);
                if (infent_val > adt_val) {
                    $(this).parents(".pax_parent").find(
                        "[data-infant-count]").text(adt_val);
                    $(this).parents(".pax_parent").find(".infent_input")
                        .val(adt_val);
                }

            }
            travelpaxcount()
        });

    $("[data-child-next]").click(
        function() {
            var adt_val = $(this).parents(".pax_parent").find(".adt_input")
                .val();
            var child_val = $(this).parents(".pax_parent").find(
                ".child_input").val();
            var adt_child_to = Number(adt_val) + Number(child_val);
            if (adt_child_to < 9) {
                child_val++;
                $(this).parents(".pax_parent").find("[data-child-count]")
                    .text(child_val);
                $(this).parents(".pax_parent").find(".child_input").val(
                    child_val);
            }
            travelpaxcount()
        });

    $("[data-child-pre]").click(
        function() {
            var child_val = $(this).parents(".pax_parent").find(
                ".child_input").val();
            if (child_val > 0) {
                child_val--;
                $(this).parents(".pax_parent").find("[data-child-count]")
                    .text(child_val);
                $(this).parents(".pax_parent").find(".child_input").val(
                    child_val);
            }
            travelpaxcount()
        });

    $("[data-infant-next]").click(
        function() {
            var adt_val = $(this).parents(".pax_parent").find(".adt_input")
                .val();
            var infent_val = $(this).parents(".pax_parent").find(
                ".infent_input").val();
            if (infent_val < adt_val) {
                infent_val++;
                $(this).parents(".pax_parent").find("[data-infant-count]")
                    .text(infent_val);
                $(this).parents(".pax_parent").find(".infent_input").val(
                    infent_val);
            }
            travelpaxcount()
        });
    $("[data-infant-pre]").click(
        function() {
            var adt_val = $(this).parents(".pax_parent").find(".adt_input")
                .val();
            var infent_val = $(this).parents(".pax_parent").find(
                ".infent_input").val();
            if (infent_val > 0) {
                infent_val--;
                $(this).parents(".pax_parent").find("[data-infant-count]")
                    .text(infent_val);
                $(this).parents(".pax_parent").find(".infent_input").val(
                    infent_val);
            }
            travelpaxcount()
        });

    function travelpaxcount() {

        var adult = 0;
        var child = 0;
        var infant = 0;

        var adult = parseInt(document.forms["flight-form"]["adults"].value);
        var child = parseInt(document.forms["flight-form"]["child"].value);
        var infant = parseInt(document.forms["flight-form"]["infant"].value);

        $("[data-total-pax]").html(adult + child + infant);

    }

    /* multicity */

    $("[data-adult-next-m]").click(
        function() {

            var child_val = $(this).parents(".pax_parent_m").find(
                ".child_input_m").val();
            var adt_val = $(this).parents(".pax_parent_m").find(
                ".adt_input_m").val();
            var adt_child_to = Number(adt_val) + Number(child_val);
            if (adt_child_to < 9) {
                adt_val++;
                $(this).parents(".pax_parent_m").find(
                    "[data-adult-count-m]").text(adt_val);
                $(this).parents(".pax_parent_m").find(".adt_input_m").val(
                    adt_val);
            }
            travelpaxcount_multi()
        });

    $("[data-adult-pre-m]").click(
        function() {


            var adt_val = $(this).parents(".pax_parent_m").find(
                ".adt_input_m").val();
            var infent_val = $(this).parents(".pax_parent_m").find(
                ".infent_input_m").val();
            if (adt_val > 1) {
                adt_val--;
                $(this).parents(".pax_parent_m").find(
                    "[data-adult-count-m]").text(adt_val);
                $(this).parents(".pax_parent_m").find(".adt_input_m").val(
                    adt_val);
                if (infent_val > adt_val) {
                    $(this).parents(".pax_parent_m").find(
                        "[data-infant-count]").text(adt_val);
                    $(this).parents(".pax_parent_m")
                        .find(".infent_input_m").val(adt_val);
                }

            }
            travelpaxcount_multi()
        });

    $("[data-child-next-m]").click(
        function() {
            var adt_val = $(this).parents(".pax_parent_m").find(
                ".adt_input_m").val();
            var child_val = $(this).parents(".pax_parent_m").find(
                ".child_input_m").val();
            var adt_child_to = Number(adt_val) + Number(child_val);
            if (adt_child_to < 9) {
                child_val++;
                $(this).parents(".pax_parent_m").find(
                    "[data-child-count-m]").text(child_val);
                $(this).parents(".pax_parent_m").find(".child_input_m")
                    .val(child_val);
            }
            travelpaxcount_multi()
        });

    $("[data-child-pre-m]").click(
        function() {
            var child_val = $(this).parents(".pax_parent_m").find(
                ".child_input_m").val();
            if (child_val > 0) {
                child_val--;
                $(this).parents(".pax_parent_m").find(
                    "[data-child-count-m]").text(child_val);
                $(this).parents(".pax_parent_m").find(".child_input_m")
                    .val(child_val);
            }
            travelpaxcount_multi()
        });

    $("[data-infant-next-m]").click(
        function() {
            var adt_val = $(this).parents(".pax_parent_m").find(
                ".adt_input_m").val();
            var infent_val = $(this).parents(".pax_parent_m").find(
                ".infent_input_m").val();
            if (infent_val < adt_val) {
                infent_val++;
                $(this).parents(".pax_parent_m").find(
                    "[data-infant-count-m]").text(infent_val);
                $(this).parents(".pax_parent_m").find(".infent_input_m")
                    .val(infent_val);
            }
            travelpaxcount_multi()
        });
    $("[data-infant-pre-m]").click(
        function() {
            var adt_val = $(this).parents(".pax_parent_m").find(
                ".adt_input_m").val();
            var infent_val = $(this).parents(".pax_parent_m").find(
                ".infent_input_m").val();
            if (infent_val > 0) {
                infent_val--;
                $(this).parents(".pax_parent_m").find(
                    "[data-infant-count-m]").text(infent_val);
                $(this).parents(".pax_parent_m").find(".infent_input_m")
                    .val(infent_val);
            }
            travelpaxcount_multi()
        });

    function travelpaxcount_multi() {
        var adult = 0;
        var child = 0;
        var infant = 0;

        var adult = parseInt(document.forms["flight-multiform"]["adults"].value);
        var child = parseInt(document.forms["flight-multiform"]["child"].value);
        var infant = parseInt(document.forms["flight-multiform"]["infant"].value);

        $("[data-total-pax-m]").html(adult + child + infant);

    }

    $('.fareclass').on('change', function() {
        var clas = $(this).find("option:selected").text();
        $(".get_class").text(character_limt(clas, 7));
    })

    function character_limt(text, count) {
        return text.slice(0, count) + (text.length > count ? "..." : "");
    }

    /*
     * ===============================search type value End
     * ==================================
     */

    /*
     * ===============================date picker js
     * ==================================
     */

    $("[data-depart-date]").datepicker({
        defaultDate: "",
        dateFormat: "dd-mm-yy",
        minDate: 0,
        changeMonth: false,
        numberOfMonths: 2,
        beforeShow: function() {
            $(".ui-datepicker").addClass('raj_datepicker');
        },
        onClose: function(selectedDate) {
            var type = $("[name='journeytype']").val();
            if (type == "roundtrip") {
                $("[data-return-date]").datepicker("option", "minDate",
                    selectedDate).focus().select();
            }
        }
    });
    $("[data-return-date]").datepicker({
        defaultDate: "",
        dateFormat: "dd-mm-yy",
        minDate: 0,
        changeMonth: false,
        numberOfMonths: 2,
        beforeShow: function() {
            $(".ui-datepicker").addClass('raj_datepicker');
            $('input[value="roundtrip"]').click();
            $('input[value="roundtrip"]').parent(".labelbr").addClass(
                'rajactive');
            var selectedDate = $('[data-depart-date]').val();
            var newdate = selectedDate.split("-").reverse().join("-");
            var newdate = new Date(newdate);
            $(this).datepicker("option", "minDate", newdate);
			
			 $("[name='journeytype']").val("roundtrip");
               
                $("[data-oneway]").show();
                $(".flight_way").removeClass('active');
                $(this).addClass('wbgi');
                $('[data_flight_selected_way = "roundtrip"]').addClass('active');

        },
        onClose: function(selectedDate) {
            $("[data-depart-date]").datepicker("option", selectedDate);
        }
    });

    $(document).on(
        'focus',
        '[multisegdate1]',
        function() {
            $(this).datepicker({
                defaultDate: "",
                dateFormat: "dd-mm-yy",
                minDate: 0,
                changeMonth: false,
                numberOfMonths: 2,
                beforeShow: function() {
                    $(".ui-datepicker").addClass('raj_datepicker');
                },
                onClose: function(selectedDate) {
                    $("[multisegdate2]").datepicker("option",
                        "minDate", selectedDate);

                    var inputs = $(this).closest(
                        '#flight-multiform').find(':input');
                    inputs.eq(inputs.index(this) + 7).focus();
                }
            });
        });
    $(document).on(
        'focus',
        '[multisegdate2]',
        function() {
            $(this).datepicker({
                defaultDate: "",
                dateFormat: "dd-mm-yy",
                minDate: 0,
                changeMonth: false,
                numberOfMonths: 2,
                beforeShow: function() {
                    $(".ui-datepicker").addClass('raj_datepicker');
                    /*
                     * if($('[multisegdate2]').val()=="" ||
                     * $('[multisegdate2]').val()==null) {
                     * $('[multisegdate2]').focus(); return false; }
                     */

                    var selectedDate = $('[multisegdate1]').val();
                    var newdate = selectedDate.split("-").reverse()
                        .join("-");
                    var newdate = new Date(newdate);
                    $(this)
                        .datepicker("option", "minDate",
                            newdate);
                },
                onClose: function(selectedDate) {
                    $("[multisegdate3]").datepicker("option",
                        "minDate", selectedDate);

                    var inputs = $(this).closest(
                        '#flight-multiform').find(':input');
                    inputs.eq(inputs.index(this) + 2).focus();
                }
            });
        });
    $(document).on(
        'focus',
        '[multisegdate3]',
        function() {
            $(this).datepicker({
                defaultDate: "",
                dateFormat: "dd-mm-yy",
                minDate: 0,
                changeMonth: false,
                numberOfMonths: 2,
                beforeShow: function() {
                    $(".ui-datepicker").addClass('raj_datepicker');
                    var selectedDate = $('[multisegdate2]').val();
                    var newdate = selectedDate.split("-").reverse()
                        .join("-");
                    var newdate = new Date(newdate);
                    $(this)
                        .datepicker("option", "minDate",
                            newdate);
                },
                onClose: function(selectedDate) {
                    $("[multisegdate4]").datepicker("option",
                        "minDate", selectedDate);
                    var inputs = $(this).closest(
                        '#flight-multiform').find(':input');
                    inputs.eq(inputs.index(this) + 2).focus();
                }
            });
        });
    $(document).on('focus', '[multisegdate4]', function() {
        $(this).datepicker({
            defaultDate: "",
            dateFormat: "dd-mm-yy",
            minDate: 0,
            changeMonth: false,
            numberOfMonths: 2,
            beforeShow: function() {
                $(".ui-datepicker").addClass('raj_datepicker');
                var selectedDate = $('[multisegdate3]').val();
                var newdate = selectedDate.split("-").reverse().join("-");
                var newdate = new Date(newdate);
                $(this).datepicker("option", "minDate", newdate);
            },
            onClose: function(selectedDate) {

            }
        });
    });

    /*
     * ===============================date picker js End
     * ===============================
     */
    /* travel date of birth */

    $("[data-dob]").datepicker({
        defaultDate: "",
        dateFormat: "dd-mm-yy",
        minDate: 0,
        changeMonth: false,
        numberOfMonths: 1,
        beforeShow: function() {
            $(".ui-datepicker").addClass(
                'raj_datepicker raj_datepicker_dob');
        },
        onClose: function(selectedDate) {
            $("[data-return-date]").datepicker("option", "minDate",
                selectedDate).focus().select();
        }
    });

    /* travel date of birth End */

    $("[data-dob]").datepicker({
        defaultDate: "",
        dateFormat: "dd-mm-yy",
        minDate: 0,
        changeMonth: false,
        numberOfMonths: 1,
        beforeShow: function() {
            $(".ui-datepicker").addClass(
                'raj_datepicker raj_datepicker_dob');
        },
        onClose: function(selectedDate) {
            $("[data-return-date]").datepicker("option", "minDate",
                selectedDate).focus().select();
        }
    });

    /* travel date of birth End */

    /*
     * ===================== Common slide & toggle effect
     * ==============================
     */

    $(document).on(
        "click",
        "[data-toggle-btn]",
        function() {
            $(this).parents(".flight_fare, .parentclass").children(
                "[data-toggle-show]").stop(true, false).slideToggle();
        });
    $(document).on(
        "click",
        "[data-toggle-btnthree]",
        function() {
            $(this).siblings("[data-toggle-filter]").stop(true, false)
                .slideToggle();
            $(this).find('i')
                .toggleClass('fa fa-angle-down fa fa-angle-up');
        });
    $(document).on(
        "click",
        "[data-toggle-btn]",
        function() {
            $(this).parents(".roundlist").find("[data-toggle-show]").stop(
                true, false).slideToggle();
            $("[data-faredetail-trans]").show();
        });

    $("[attr-farecenter]").click(function(element, height) {
        posY = $(this).position().top;
        var divposi = $(".flight_fare, .parentclass").position().top;
        $('html, body').animate({
            scrollTop: (element.pageY - posY) - divposi - 111
        }, 500);
    });

    /*
     * ===================== Common slide & toggle effect End
     * ==============================
     */

    /*
     * ===================== round trip result list
     * ==============================
     */

    $(document).on("click", "[attr-obfare]", function() {
        // $('input:radio[name="ib_radio"]').attr("checked", false);
        // $(this).find('input:radio[name="ib_radio"]').attr("checked",
        // "checked");
        // $(this).find(".indicator").click();
    });

    $("#OB_click, #IB_click").click();

    /*
     * ===================== round trip result list End
     * ==============================
     */

    $(window).scroll(function() {
        if ($(this).scrollTop() > 255) {
            $('[data-rt-filter]').addClass('filter_fixed_rt');
        } else {
            $('[data-rt-filter]').removeClass('filter_fixed_rt');
        }
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $("#detailstab").addClass('hoteldetfix');
        } else {
            $("#detailstab").removeClass('hoteldetfix');
        }
    });

    $(document).on(
        "click",
        "[data-toggle-div]",
        function() {

            $(this).parents("[data-parent]").find("[data-toggle-divshow]")
                .addClass('raj_fixt0 disblock');
        });
    $(document).on(
        "click",
        "[data-close-btn]",
        function() {
            $(this).parents("[data-parent]").find("[data-toggle-divshow]")
                .removeClass('disblock').fadeOut(700);
        });




}); /* main function close here */


$(function() {
    $('#flightResult div.aj_o_fare').first().click();
    $('#flightResultib div.aj_o_fare').first().click();
});


function obfare(obfare, onwordprice, arrayindex) {
    document.getElementById("onword_push").innerHTML = obfare;

    setTimeout(function() {
        var onwordprice = $("#onword_push").find('.p_aj').text();
        var pattern = /[0-9]+/g;
        onwordprice = Number($.trim(onwordprice.replace(/[^0-9]+/g, '')).match(pattern));

        totalprice_round(onwordprice, "OB");

    }, 100);

    var att = document.createAttribute("OB");
    att.value = arrayindex;
    document.getElementById("submitBooking").setAttributeNode(att);
}

function ibfare(ibfare, returnprice, arrayindex) {
    document.getElementById("return_push").innerHTML = ibfare;

    setTimeout(function() {
        var returnprice = $("#return_push").find('.p_aj').text();
        var pattern = /[0-9]+/g;
        returnprice = Number($.trim(returnprice.replace(/[^0-9]+/g, '')).match(pattern));

        totalprice_round(returnprice, "IB");

    }, 100);
    var att = document.createAttribute("IB");
    att.value = arrayindex;
    document.getElementById("submitBooking").setAttributeNode(att);
}


var priceob = 0;
var priceib = 0;

function totalprice_round(price, type) {
    if (type == "OB") {
        priceob = 0;

        priceob = price;
    }
    if (type == "IB") {
        priceib = 0;
        priceib = price;
    }
    tprice = priceob + priceib;


    tprice = parseFloat(tprice).toFixed(2);

    document.getElementById("putprice").innerHTML = Math.round(tprice).toLocaleString('en-IN');
}
$(document).on("click", ".c_pay", function() {
    /* $(".c_pay").click(function() { */
    if ($('#traveller_details').find('.error').length == 0) {

        $(".c_pay").attr('disabled', true).html('Loading...');
        $(".custformerror_pax").replaceWith("");
        var form = $("#traveller_details");
        var hiturl = $("#site_url").val();
        $.ajax({
            type: "POST",
            url: hiturl + "flight/traveller_details",
            data: form.serialize(),
            cache: false,
            success: function(data) {
                $(".c_pay").attr('disabled', false).html('Proceed To Payment');
                var fdata = JSON.parse(data);
                if (fdata.status_code == 1) {
                    $(".c_pay").attr('disabled', false).html('Proceed To Payment');
                    $.each(fdata.error_message, function(key, val) {
                        if (key == "contact_email" || key == "contact_no" || key == "rule") {
                            if (key == "rule") {
                                $(".agerymsg").show();
                            } else {
                                $(".agerymsg").hide();
                            }
                            $('[name="' + key + '"]', form).after(val);
                        }
                        var pax = key.split("-");
                        $('[name="flight[pax_details][pax][' + pax[0] + '][' + pax[1] + '][' + pax[2] + ']"]', form).after(val);
                    });
                } else if (fdata.status_code == 0) {
                    $("[data-stepone-show]").hide();
                    $("data-stepone-show").addClass('d-none');
                    var paxinf = '';
                    paxinf += '<label><samp><b>Contact Email:</b> </samp><samp>' + fdata.filter_data.contact_email + '</samp><br/><samp><b>Contact Number:</b> </samp><samp>' + fdata.filter_data.phone_code + ' ' + fdata.filter_data.contact_no + '</samp></label>';


                    $.each(fdata.filter_data.flight.pax_details.pax, function(key, val) {

                        paxinf += '<h4>' + key + '</h4>';
                        $.each(val, function(key1, val1) {
                            paxinf += '<label><samp>' + key1 + '. </samp><samp>' + val1.title + '. </samp><samp>' + val1.first_name + '</samp><samp>' + val1.last_name + '</samp></label>';
                        });
                    });
                    var paxreview = '<div class="col-12">' + paxinf + '</div>';
                    $("[data-steptwo-show]").show();

                    $(".review_info").html(paxreview);
                    if (fdata.convenience_fee == 0) {
                        $(".convenience_fee_notice").hide();
                    }

                    $("#convenience_fee_aj").html(fdata.convenience_fee);
                    $("#final_price_aj").html(fdata.pay_amt);
                } else {
                    $(".c_pay").attr('disabled', false).html('Proceed To Payment');
                    $("#modalerror").html('oops an error has occurred.We suggest you modify your search and try again');
                    $("#error").modal('show');
                }
            }

        });
    }
});

// date of birth


$(function() {
    $(".infant_date").datepicker({
        dateFormat: "dd-mm-yy",
        minDate: "-2Y",
        changeMonth: true,
        changeYear: true,
        maxDate: "+0D",
        numberOfMonths: 1,
    });

    $(".child_date").datepicker({
        dateFormat: "dd-mm-yy",
        minDate: "-12Y",
        changeMonth: true,
        changeYear: true,
        maxDate: "-2Y",
        numberOfMonths: 1,
    });

    $(".adult_date").datepicker({
        dateFormat: "dd-mm-yy",
        changeMonth: true,
        changeYear: true,
        yearRange: '-100y:c+nn',
        maxDate: "-12Y",
        numberOfMonths: 1,
    });



});


$('#editdettail').on('click', function() {

    $("[data-steptwo-show]").hide();
    $("[data-stepone-show]").show();
});