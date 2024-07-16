function isMobile() {
	return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i
			.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
			.test((navigator.userAgent || navigator.vendor || window.opera)
					.substr(0, 4)))
}
$(function() {
	if (isMobile()) {

	$("[hotel-check-in]").datepicker({
		defaultDate: "",
		dateFormat: "dd-mm-yy",
		minDate: 0,
		changeMonth: false,
		numberOfMonths:1,
		beforeShow: function() {
			$(".ui-datepicker").addClass('raj_datepicker');
		},
		onClose: function( selectedDate ) {
			 $("[hotel-check-out]").datepicker( "option", "minDate", selectedDate ).focus().select();
		  }
	});
	$("[hotel-check-out]").datepicker({
		defaultDate: "",
		dateFormat: "dd-mm-yy",
		minDate: 0,
		changeMonth: false,
		numberOfMonths: 1,
		beforeShow: function() {
			$(".ui-datepicker").addClass('raj_datepicker');
		},
		onClose: function( selectedDate ) {
			$("[hotel-check-in]").datepicker( "option", selectedDate );
		  }
	});

		} 

});

$(function() {
	var datavalidation = 'data-validation';
	var addrequired = 'required';
	$("[data-stapone]").click(
			function() {
				
				var fetch_class=$("#fetch_class").val();
				$("[data-stapone-show]").show();
				$("[data-steptwo-show],[data-stapthree-show]").hide();
				$("[data-staptwo],[data-stapthree]").removeClass('active');
				$("[data-stapthree]").find("span").text('Travellers Details');
				$("[data-stapthree]").find("span").text('Payment');
				$("[data-staptwo]").find("samp").removeClass('fa fa-check')
						.text('2');
				$("[data-staptwo]").find("span").removeClass('tcol');
				$(this).find("samp").removeClass('fa fa-check').text('1');
				$(this).find("span").text(fetch_class+' Review').removeClass('tcol')
						.addClass('active');
			});

	/* continue as a guest 111111 data-continue-guest */
	$("[data-staptwo]").click(
			function() {
					
				$(this).submit();
					var fetch_class=$("#fetch_class").val();
				var error = "";
				$('#gestlogin .text_validation,#gestlogin .error').each(
						function() {
							
							var textvalue = $(this).val();
							
							
							if (textvalue == "" || textvalue == null) {
								error = "yes";
								return false;
							} else {
								error = "no";
							}
						});
				if (error == "yes") {
					
					
					return false;
				} else {
					if (document.getElementById('iagery').checked) {

					} else {
						$("[data-agerycheck]").show();
						return false;
					}
					$("[data-stapone-show],[data-stapthree-show]").hide();
					$("[data-steptwo-show]").removeClass('d-none');
					$("[data-steptwo-show]").show();
					$("[data-stapone]").find("samp").addClass('fa fa-check')
							.text('');
							$("[data-stapone]").find("span").text(
							fetch_class +' Review [Edit]').addClass('tcol');
					$("[data-stapthree]").removeClass('active');
					$("[data-staptwo]").addClass('active');
					$(this).find("samp").removeClass('fa fa-check').text('2');
					$(this).find("span").text('Travellers Details').addClass(
							'active').removeClass('tcol');
				}
			});
			
});








$(function() {
$(".hotel_location").autocomplete({
	minLength: 2,
	maxResults:15,
	source: function(request, response) {
	$.ajax({
		  url: $("#site_url").val()+'hotel/hotel_autosuggestion',
		  dataType: "json",
		  cache: false,
		  data: {
			term: request.term
		  },
		  success: function( data ) {
			response( data );
			 // console.log(data);
			// alert(JSON.parse(data));
		  }
		});
	},
	open: function() {
	   $(".ui-autocomplete").addClass('ttsautocomplet');
	},
	select: function (event, ui) {
      
		$("#cityDom").val(ui.item.id);
		$("[hotel-check-in]").focus();
	}
	});

	$(".hotel_location").click(function() {
		$(this).select();
	});

	$("[hotel-check-in]").datepicker({
		defaultDate: "",
		dateFormat: "dd-mm-yy",
		minDate: 0,
		changeMonth: false,
		numberOfMonths: 2,
		beforeShow: function() {
			$(".ui-datepicker").addClass('raj_datepicker');
		},
		onClose: function( selectedDate ) {
			 $("[hotel-check-out]").datepicker( "option", "minDate", selectedDate ).focus().select();
		  }
	});
	$("[hotel-check-out]").datepicker({
		defaultDate: "",
		dateFormat: "dd-mm-yy",
		minDate: 0,
		changeMonth: false,
		numberOfMonths: 2,
		beforeShow: function() {
			$(".ui-datepicker").addClass('raj_datepicker');
		},
		onClose: function( selectedDate ) {
			$("[hotel-check-in]").datepicker( "option", selectedDate );
		  }
	});



	   $("[hotel_pass_issue]").datepicker({
			defaultDate: "",
			dateFormat: "dd-mm-yy",
			changeMonth: true,
			changeYear: true,
			numberOfMonths: 1,
			maxDate:"-1D",
			beforeShow: function() {
				$(".ui-datepicker").addClass('raj_datepicker');
			}
		});

		$("[hotel_pass_expiry]").datepicker({
			defaultDate: "",
			minDate: 0,
			dateFormat: "dd-mm-yy",
			changeMonth: true,
			changeYear: true,
			numberOfMonths: 1,
			beforeShow: function() {
				$(".ui-datepicker").addClass('raj_datepicker');
			}
		});

});


/* ***************************************** Start hotel Child Select Search Engien js ******************************  */

function travellercount()
{

  var adtval = 0;
    var chdval = 0;
    var lengthshow = $(".totel_room").val();
    for (i = 1; i <= lengthshow; i++) {
        adtval += parseInt(document.forms["hotelform"]["adult_" + i].value);
        chdval += parseInt(document.forms["hotelform"]["child_" + i].value);
    }
    $(".sct_people_count").html(adtval + chdval + " Person(s)");
    if (lengthshow == 1) {
        $(".ajrommtext").html(lengthshow + " Room");
    } else {
        $(".ajrommtext").html(lengthshow + " Rooms");
    }

}

function get_hotel_adt(thisval)
{
      travellercount();
}


$(function(){
  $(".child_1").change(function(){
    var child_val=this.value;
    travellercount();
    if(!child_val==0){
    var div_child='';
    var i=1;
    for(i=1; i<=child_val; i++){
       div_child+='<div class="custome_width"><label>Age</label><select class="form-control" name="age_1_'+i+'"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></div>';

            }

    $("#child_age_room").html(div_child);
    }

  });
    var room =2;
  $(".add_room").click(function(){

    if(room<=4){
      $(".totel_room").val(room);

      var room_d='<div id="room_remov_'+room+'"><hr><h5 class="title">Room '+room+'</h5><div class="row m0"><div class="custome_width"><label>Adult</label><select class="form-control rounded-0 " name="adult_'+room+'" onchange="get_hotel_adt(this)""><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select></div><div class="custome_width"><label> Child </label><select class="form-control child_1 rounded-0" name="child_'+room+'" onchange="add_child_age('+room+',this.value)"><option value="0">0</option><option value="1">1</option><option value="2">2</option></select></div><div class="row" id="child_age_room'+room+'" style="margin-left: 0px;"></div></div></div>';

      $(".room_data").append(room_d);
      $(".remove_btt").addClass('disblock');
      room++;
      if(room==5){
        $(".add_room").hide();
      }else{
        $(".add_room").show();
      }
    }

    travellercount();

  });

  $(".remove_room").click(function(){
    room--;
    $("#room_remov_"+room).remove();
    var total_r=room-1;
    $(".totel_room").val(total_r);
      if(room==2)
    {
		$(".remove_btt").removeClass('disblock');
    }
    if(room==4)
    {
      $(".add_room").show();
    }
    travellercount();
  });



});


 function add_child_age(getroom,getselect)
 {
  travellercount();
    if(!getselect==0){
    var div_child2='';
    var j=1;
    for(j=1; j<=getselect; j++){
       div_child2+='<div class="custome_width "><label>Age</label><select class="form-control rounded-0" name="age_'+getroom+'_'+j+'"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></div>';

            }

    $("#child_age_room"+getroom).html(div_child2);
    }
 }
 
 $(function(){
   var roomss=$(".totel_room").val();
   var rooms=parseInt(roomss)+1;
   var room=rooms;
  $(".add_room_modify").click(function(){
    
    if(room<=4){
      
      $(".totel_room").val(room);
      var room_d='<div id="room_remov_'+room+'"><hr><h5 class="title">Room '+room+'</h5><div class="row m0"><div class="custome_width width_pax "><label>Adult</label><select class="form-control rounded-0" name="adult_'+room+'" onchange="get_hotel_adt(this)""><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select></div><div class="custome_width"><label> Child </label><select class="form-control child_1 rounded-0" name="child_'+room+'" onchange="add_child_age('+room+',this.value)"><option value="0">0</option><option value="1">1</option><option value="2">2</option></select></div><div class="row " id="child_age_room'+room+'" style="margin-left: 0px;"></div></div></div>';
      
      $(".room_data").append(room_d); 
      $(".remove_roo").show();
      room++; 
    
      if(room==5){
        $(".add_room_modify").hide();
      }else{
        $(".add_room_modify").show();
      }
    }else{
      
      $(".add_room_modify").hide();
    }
    
    travellercount();

  }); 
  $(".remove_roo").click(function(){
    
    room--;
    $("#room_remov_"+room).remove();
    
    $(".totel_room").val(room-1);
     if(room==2)
    {
    $(".h_butt").hide();  
    }
    if(room==4)
    {
    $(".add_room_modify").show(); 
    } 
    
  }); 
});

$(function(){
  
    var mftotal_room=$(".totel_room").val();
    if(mftotal_room==4){
      $(".add_room_modify").hide();
    }
    if(mftotal_room<=1){
      $(".h_butt").hide();
    }else{
      $(".h_butt").show();
    }

});
/* Start hotel Filter js */

$(function() {
	var n=$.trim($("#nationality option:selected" ).text());
	$("#nationality_name").val(n);
	$('#nationality').on('change', function() {
		var n=$.trim($("#nationality option:selected" ).text());
		$("#nationality_name").val(n);
	})
	
});


	$(document).on(
			"click",
			"[data-modifybtn]",
			function() {
				
				
				$("[data-multimodify]").stop(true, false).addClass(
						'addheight100', 150);
				$("[data-modifytrans]").stop(true, false).show();
			});
$(document).on("click", "[data-revblurbtn]", function() {
		$("[data-blutall]").removeClass('addblur');
	});
	$(document).on(
			"click",
			"[data-mfdbtn],[data-modifytrans]",
			function() {
				$("[data-multimodify],[data-loginsignupsw]").stop(true, false)
						.removeClass('addheight100', 150);
						$("[data-busmultimodify]").stop(true, false)
						.removeClass('addheight100', 150);
				$("[data-modifytrans]").stop(true, false).hide();
			});
			
			
			
			
			
			
			
			$(document).on("click", ".c_guest_hotel", function() {
				
				
/* $(".c_guest_hotel").click(function() { */
	$(".custformerror").replaceWith("");
	var hiturl = $("#site_url").val();
	var form = $("#contact_information");
	var buttontext=$(".c_guest_hotel").text();
    $(".c_guest_hotel").attr('disabled', true).html('Loading....');
	$.ajax({
			type : "POST",
			url : hiturl + "hotel/contact_information",
			data : $("#contact_information").serialize(),
			cache : false,
			success : function(data) {
				$(".c_guest_hotel").attr('disabled', false).html(buttontext);
				var fdata=JSON.parse(data);
				 if (fdata.status_code == 1) {
					 
					 $.each(fdata.error_message, function(key, val) {
						 if(key=="rule")
						 {
							 $(".agerymsg").show();
						 } else {
							 $(".agerymsg").hide();
						 }
							$('[name="'+ key +'"]', form).after(val);
					  });
				 } else if(fdata.status_code == 0){
					 $(".agerymsg").hide(); 
					 var form = $("#traveller_details");
					 $("[data-staptwo]").click();
					 $('[name="contact_email"]', form).val(fdata.filter_data.contact_email_id);
					 $('[name="contact_no"]', form).val(fdata.filter_data.contact_mobile_number);
				 }
			}
		});
});
$(document).on("click", ".c_pay_hotel", function() {
	
	
/* $(".c_pay_hotel").click(function() { */
	/* if ($('#traveller_details').find('.error').length == 0) { */
		$(".c_pay_hotel").attr('disabled', true).html('Loading...');
		$(".custformerror_pax").replaceWith("");
		var form=$("#traveller_details");
		var hiturl = $("#site_url").val();
			$.ajax({
				type : "POST",
				url : hiturl + "hotel/traveller_details",
				data : form.serialize(),
				cache : false,
				success : function(data) {
					       $(".c_pay_hotel").attr('disabled', false).html('Proceed To Payment');
							var fdata=JSON.parse(data);
							
							if (fdata.status_code == 1) {
								  $.each(fdata.error_message, function(key, val) {
									  if(key=="contact_email" || key=="contact_no")
									  {
										  $('[name="'+ key +'"]', form).after(val);
									  }
										var pax=key.split("-");
										$('[name="hotel[pax_details]['+pax[0]+']['+pax[1]+']['+pax[2]+']['+pax[3]+']"]', form).after(val);
								  });
							 } else if(fdata.status_code==0) {
								 var paxinf='';
								 $.each(fdata.filter_data.hotel.pax_details, function(key, val) {
									 paxinf+='<h4> Room '+key+'</h4>';
									  $.each(val, function(key1, val1) {
										  $.each(val1, function(key2, val2) {
											   paxinf+='<label><samp><b>'+key1+' '+key2+' : </b></samp><samp>'+val2.title+'. </samp><samp>'+val2.first_name+'</samp><samp>'+val2.last_name+'</samp></label>';
										  });
									  });
								 });
								 var paxreview='<div class="col-12">'+paxinf+'</div>';
							
								 
								$("#paxreview").modal('hide');
								$("[data-staptwo]").addClass('active');
								$("[data-staptwo]").find("samp").addClass('fa fa-check').text(
										'');
								$("[data-staptwo]").find("span").text(
										'Travellers Details [Edit]').addClass('tcol');
								$("[data-steptwo-show],[data-stapone-show]").hide();
								$("[data-stapthree-show]").removeClass('d-none');
								$("[data-stapthree-show]").show();
								$("[data-stapthree]").addClass('active');
							
								 $(".review_info").html(paxreview);	
                                  	 if(fdata.convenience_fee==0)
								 {
									 $("#convenience_fee_notice").hide();
								 }
								 
								 $("#convenience_fee_aj").html(fdata.convenience_fee);
								 $(".hpromocode").hide();						 
								 $("#final_price_aj").html(fdata.pay_amt);								 
								 
							 }  else if(fdata.status_code==2) {
								 $(".c_pay_hotel").attr('disabled', true)		
								 $(".c_pay_hotel").after('<p class="text-danger">'+fdata.error_message+'</p>');
							 }  else {
								 $("#modalerror").html('oops an error has occurred.We suggest you modify your search and try again');
								 $("#error").modal('show');
							 }
						}
					
				});
	/* } */
});
