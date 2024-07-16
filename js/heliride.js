
	/*
	 * ============================ Start Mulicity Auto complete
	 * ===================================
	 */

    $(document).ready(function(){
 
            $('#heliride_origin_city').autocomplete({
               minLength : 0,
			   maxResults : 15,
				source : function(request, response) {
					$
							.ajax({
								url : $("#site_url").val()
										+ 'heliride/getcity',
								dataType : "json",
								cache : false,
								data : {
									term : request.term
								},
								success : function(data) {
									
									response(data);
									
									
								}
							});
				}, 
				open : function() {
							$(".ui-autocomplete").addClass('ttsautocomplet');
						},     
                select: function (event, ui) {
                    $('#origin_id').val(ui.item.id); 
                    $('[city="city_name"]').val(ui.item.city_name); 
					/* $("#name").val(ui.item.label);
					$("#userId").val(ui.item.value); */
                }
            });
 
        });

    $(document).ready(function(){
 
            $('#heliride_destination_city').autocomplete({
               minLength : 0,
			   maxResults : 15,
				source : function(request, response) {
					$
							.ajax({
								url : $("#site_url").val()
										+ 'heliride/getcity',
								dataType : "json",
								cache : false,
								data : {
									term : request.term
								},
								success : function(
										data) {
									response(data);
								}
							});
				}, 
				open : function() {
							$(".ui-autocomplete").addClass('ttsautocomplet');
						},   				
                select: function (event, ui) {
                    $("#destination_id").val(ui.item.id); 
                    $('[city="city_name"]').val(ui.item.city_name); 
                }
				
            });
 
        });


	/*
	 * ============================ End Mulicity Auto complete
	 * ===================================
	 */

//Charted module Form Submit section. //
$("#charted_request").click(function() {
    $('.charted_request_error').replaceWith('');
    var data = $("#charted_form").serialize();
    $.ajax({
        type: "POST",
        url: "ChartedRequest",
        data: data,
        success: function(data) {
            fdata = JSON.parse(data);
            if (fdata.status_code == 1) {
                $.each(fdata.error_message, function(key, val) {
                    $('[name="' + key + '"]', '#charted_form').after(val);
                });
            } else if (fdata.status_code == 0) {
                $("#charted_form")[0].reset();
                $("#success_charted_request").html("<div class='alert  alert-success fw-6 text-center'>" + fdata.error_message + "</div>");

            }
        }

    });

});
$("#heliport_request").click(function() {
    $('.heliport_request_error').replaceWith('');
    var data = $("#heliport_form").serialize();
    $.ajax({
        type: "POST",
        url: "HeliportRequest",
        data: data,
        success: function(data) {
            var fdata = JSON.parse(data);

            if (fdata.status_code == 1) {

                $.each(fdata.error_message, function(key, val) {
                    $('[name="' + key + '"]', '#heliport_form').after(val);
                });
            } else if (fdata.status_code == 0) {
                $('#heliport_form')[0].reset();
                $('#success_heliport_request').html("<div class='  alert  alert-success fw-6 text-center '>" + fdata.error_message + "</div>");

            }
        }

    });
});

$(function() {
    $("#datepicker").datepicker();
});
	var count = 1;
	var paxcount = 1;
	$("[data-adult-next-heliride]").click(
			function() {

				var child_val = $(this).parents(".pax_parent_heliride").find(
						".child_input_heliride").val();
				
				var adt_val = $(this).parents(".pax_parent_heliride").find(".adt_input_heliride")
						.val();
				var adt_child_to = Number(adt_val) + Number(child_val);
				if (adt_child_to < 9) {
					adt_val++;
					$(this).parents(".pax_parent_heliride").find("[data-adult-count-heliride]")
							.text(adt_val);
					$(this).parents(".pax_parent_heliride").find(".adt_input_heliride").val(
							adt_val);
				}
				travelpaxcount()
			});

	$("[data-adult-pre-heliride]").click(
			function() {
				
				var adt_val = $(this).parents(".pax_parent_heliride").find(".adt_input_heliride").val();
				var infent_val = $(this).parents(".pax_parent_heliride").find(
						".infent_input-heliride").val();
				if (adt_val > 1) {
					adt_val--;
					$(this).parents(".pax_parent_heliride").find("[data-adult-count-heliride]")
							.text(adt_val);
					$(this).parents(".pax_parent_heliride").find(".adt_input_heliride").val(
							adt_val);
					if (infent_val > adt_val) {
						$(this).parents(".pax_parent_heliride").find(
								"[data-infant-count-heliride]").text(adt_val);
						$(this).parents(".pax_parent_heliride").find(".infent_input_heliride")
								.val(adt_val);
					}

				}
				travelpaxcount()
			});

 	$("[data-child-next-heliride]").click(
			function() {
				
				var adt_val = $(this).parents(".pax_parent_heliride").find(".adt_input_heliride")
						.val();
						//alert(adt_val);
				var child_val = $(this).parents(".pax_parent_heliride").find(
						".child_input_heliride").val();
						//alert(child_val);
				var adt_child_to = Number(adt_val) + Number(child_val);
				if (adt_child_to < 9) {
					child_val++;
					$(this).parents(".pax_parent_heliride").find("[data-child-count-heliride]")
							.text(child_val);
					$(this).parents(".pax_parent_heliride").find(".child_input_heliride").val(
							child_val);
				}
				travelpaxcount()
			});

	$("[data-child-pre-heliride]").click(
			function() {
				var child_val = $(this).parents(".pax_parent_heliride").find(
						".child_input_heliride").val();
				if (child_val > 0) {
					child_val--;
					$(this).parents(".pax_parent_heliride").find("[data-child-count_heliride]")
							.text(child_val);
					$(this).parents(".pax_parent_heliride").find(".child_input_heliride").val(
							child_val);
				}
				travelpaxcount()
			});

	$("[data-infant-next-heliride]").click(
			function() {
				var adt_val = $(this).parents(".pax_parent_heliride").find(".adt_input_heliride")
						.val();
						
				var infent_val = $(this).parents(".pax_parent_heliride").find(
						".infent_input_heliride").val();
				if (infent_val < adt_val) {
					infent_val++;
					$(this).parents(".pax_parent_heliride").find("[data-infant-count-heliride]")
							.text(infent_val);
					$(this).parents(".pax_parent_heliride").find(".infent_input_heliride").val(
							infent_val);
				}
				travelpaxcount()
			});
	$("[data-infant-pre-heliride]").click(
			function() {
				var adt_val = $(this).parents(".pax_parent_heliride").find(".adt_input_heliride")
						.val();
				var infent_val = $(this).parents(".pax_parent_heliride").find(
						".infent_input_heliride").val();
				if (infent_val > 0) {
					infent_val--;
					$(this).parents(".pax_parent_heliride").find("[data-infant-count-heliride]")
							.text(infent_val);
					$(this).parents(".pax_parent_heliride").find(".infent_input_heliride").val(
							infent_val);
				}
				travelpaxcount()
			}); 

	function travelpaxcount() {

		var adult = 0;
		var child = 0;
		var infant = 0;

		var adult = parseInt(document.forms["heliride-multiform"]["adults_heliride"].value);
		var child = parseInt(document.forms["heliride-multiform"]["child_heliride"].value);
		var infant = parseInt(document.forms["heliride-multiform"]["infant_heliride"].value);

		$("[data-total-pax-heliride]").html(adult + child + infant);

	}
	$(function(){
	  $(".heliride_infant_date" ).datepicker({
	  dateFormat : "dd-mm-yy",
	  minDate: "-2Y",
	  changeMonth: true,
      changeYear: true,
	  maxDate: "+0D",
      numberOfMonths: 1 ,
    });

	$( ".heliride_child_date" ).datepicker({
	  dateFormat : "dd-mm-yy",
	  minDate: "-12Y",
	  changeMonth: true,
      changeYear: true,
	  maxDate: "-2Y",
      numberOfMonths: 1,
    });

	$( ".heliride_adult_date" ).datepicker({
	  dateFormat : "dd-mm-yy",
	  changeMonth: true,
      changeYear: true,
	   yearRange: '-100y:c+nn',
	  maxDate: "-12Y",
	  numberOfMonths: 1,
    });
});
 $(document).on("click", ".heliride_c_pay", function() {
	if ($('#heliride_traveller_details').find('.error').length == 0) {

		$(".heliride_c_pay").attr('disabled', true).html('Loading...');
		$(".heliride_custformerror_pax").replaceWith("");
		var form=$("#heliride_traveller_details");
		var hiturl = $("#site_url").val();
			$.ajax({
				type : "POST",
				url : hiturl + "heliride/traveller_details",
				data : form.serialize(),
				cache : false,
				success : function(data) {
					        $(".heliride_c_pay").attr('disabled', false).html('Proceed To Payment');
							var fdata=JSON.parse(data);
							//console.log(fdata);
							if (fdata.status_code == 1) { 
								$(".heliride_c_pay").attr('disabled', false).html('Proceed To Payment');
								  $.each(fdata.error_message, function(key, val) {
									  if(key=="contact_email" || key=="contact_no"|| key == "rule")
									  {
									  	 if(key=="rule")
						 {
							 $(".agerymsg").show();
						 } else {
							 $(".agerymsg").hide();
						 }
										  $('[name="'+ key +'"]', form).after(val);
									  }
										/* var pax=key.split("-");
										$('[name="flight[pax_details][pax]['+pax[0]+']['+pax[1]+']['+pax[2]+']"]', form).after(val); */
								  });
							 } else if(fdata.status_code==0) {
								 $("[data-stepone-show]").hide();
							 	 $("data-stepone-show").addClass('d-none');
								 var paxinf='';
								  paxinf+='<label><samp><b>Contact Email:</b> </samp><samp>'+fdata.filter_data.contact_email+'</samp><br/><samp><b>Contact Number:</b> </samp><samp>'+fdata.filter_data.phone_code+' '+fdata.filter_data.contact_no+'</samp></label>';
									  
								 
								 $.each(fdata.filter_data.flight.pax_details.pax, function(key, val) {

									 paxinf+='<h4>'+key+'</h4>';
									  $.each(val, function(key1, val1) {
										   paxinf+='<label><samp>'+key1+'. </samp><samp>'+val1.title+'. </samp><samp>'+val1.first_name+'</samp><samp>'+val1.last_name+'</samp></label>';
									  });
								 });
								 var paxreview='<div class="col-12">'+paxinf+'</div>';
                                    $("[data-steptwo-show]").show();
									
								$(".review_info").html(paxreview);
                                if(fdata.convenience_fee==0)
								 {
									 $(".convenience_fee_notice").hide();
								 }

								 $("#convenience_fee_aj").html(fdata.convenience_fee);
								 $("#final_price_aj").html(fdata.pay_amt);
							 }   else {
							 	 $(".heliride_c_pay").attr('disabled', false).html('Proceed To Payment');
								 $("#modalerror").html('oops an error has occurred.We suggest you modify your search and try again');
								 $("#error").modal('show');
							 }
						}

				});
	}
}); 

$('#heliride_editdettail').on('click',function(){
		
		 $("[data-steptwo-show]").hide();
		 $("[data-stepone-show]").show();
});

	
	
	
	