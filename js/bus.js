$(function () {
	
$("[bus-from-location]").autocomplete({
minLength: 0,
maxResults:15,
source: function(request, response) {
$.ajax( {
  url: $("#site_url").val()+'bus/source_autosuggestion',
  dataType: "json",
  cache: false,
  data: {
	term: request.term
  },	 
  success: function( data ) {		
	response( data );
  }
});	      
},        
open: function() { 
   $(".ui-autocomplete").addClass('ttsautocomplet');		     		   			 
},
select: function (event, ui) {
	
$("#source_id").val(ui.item.id); 
$("[bus-to-location]").focus();
}
});

$("[bus-to-location]").autocomplete({
minLength: 0,
maxResults:15,
source: function(request, response) {
$.ajax( {
  url: $("#site_url").val()+'bus/source_autosuggestion',
  dataType: "json",
  cache: false,
  data: {
	term: request.term
  },	 
  success: function( data ) {		
	response( data );
  }
});	      
},        
open: function() { 
   $(".ui-autocomplete").addClass('ttsautocomplet');		     		   			 
},
select: function (event, ui) {
$("#dest_id").val(ui.item.id); 
}
});

});	
 $(function() {
	$(".get_seat").click(function() {
		var result_index=$(this).attr('result_index');
		var array_key=$(this).attr('key');
		var searchtoken=$(this).attr('searchtoken');
		var hiturl=$("#site_url").val();
		$.ajax({
        type: "GET",
		beforeSend: function(){
				$('.put_seat_info').html("<img src='"
                                        + hiturl
                                        + "/webroot/images/lg-spinner.gif' style='display: block; margin: 0 auto;' alt='loading image'/><h4 class='text-center'>Please Wait ....</h4>");
		},
         url: hiturl+"bus/seatlayout", 
         data: {searchtoken:searchtoken,ResultIndex:result_index,arraykey:array_key},
         cache:false,
         success:function(data) {
				
				$(".put_seat_info").css({"overflow-y":"scroll","height": "450px" ,"overflow-x":"hidden"});
				$(".put_seat_info").html(data);

			  }
		}); 
		
		
	});
	
}); 

$('[bus-modal-true]').click(function(){

	$('[busseatlayoutshow]').css("height",'100%');;
	
	
	
})
$('[busseatlayoutclose]').click(function(){

	$('[busseatlayoutshow]').css("height",'0%');;
	
	
	
})
$(document).on("click", ".c_guest_bus", function() {
	$(".custformerror").replaceWith("");
	var hiturl = $("#site_url").val();
	var form = $("#contact_information");
	var buttontext=$(".c_guest_bus").text();
    $(".c_guest_bus").attr('disabled', true).html('Loading....');
	$.ajax({
			type : "POST",
			url : hiturl + "bus/contact_information",
			data : $("#contact_information").serialize(),
			cache : false,
			success : function(data) {
			  $(".c_guest_bus").attr('disabled', false).html(buttontext);
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
var traveller_detail_info="";
$(document).on("click", ".c_pay_bus", function() {
	if ($('#traveller_details').find('.error').length == 0) {

		$(".c_pay_bus").attr('disabled', true).html('Loading...');
		$(".custformerror_pax").replaceWith("");
		var form=$("#traveller_details");
		var hiturl = $("#site_url").val();
			$.ajax({
				type : "POST",
				url : hiturl + "bus/traveller_details",
				data : form.serialize(),
				cache : false,
				success : function(data) {
					        $(".c_pay_bus").attr('disabled', false).html('Proceed To Payment');
							var fdata=JSON.parse(data);
							traveller_detail_info=fdata;
							if (fdata.status_code == 1) {
								  $.each(fdata.error_message, function(key, val) {
									  if(key=="contact_email" || key=="contact_no")
									  {
										  $('[name="'+ key +'"]', form).after(val);
									  }
										var pax=key.split("-");
										$('[name="bus[pax_details]['+pax[1]+']['+pax[0]+']"]', form).after(val);
								  });
							 } else if(fdata.status_code==0) {
								
									 var paxinf='';
									
									 $.each(fdata.filter_data.bus.pax_details, function(key, val) {

										 paxinf+='<h4>Passenger '+key+'</h4>';
										
											   paxinf+='<label><samp>'+val.title+'. </samp><samp>'+val.first_name+'</samp><samp>'+val.last_name+'</samp></label>';
										  
									 });
									 var paxreview='<div class="col-12">'+paxinf+'</div>';

										
									$("#paxreview").modal('hide');
									$("[data-staptwo]").addClass('active');
									$("[data-staptwo]").find("samp").addClass('fa fa-check').text(
											'');
									$("[data-staptwo]").find("span").text(
											'Travellers Details [Edit]').addClass('tcol');
									$("[data-steptwo-show],[data-stapone-show]").hide();
									$("[data-stapthree-show]").show();
									$("[data-stapthree]").addClass('active');
									$(".review_info").html(paxreview);
									$("#final_price_aj").html(fdata.pay_amt);
								
							 }  else if(fdata.status_code==2 || fdata.status_code==3) {
								if(fdata.status_code==2)
								{
								$(".bus_notification_footer").show();
								} else if(fdata.status_code==3) {
								$(".bus_notification_footer").hide();	
								}
								$(".buschage_title").html(fdata.title);
								$("#bus_notification_content").html(fdata.content);
								$("#bus_notification_change").modal('show');
								
							 } else {
								 $("#modalerror").html('oops an error has occurred.We suggest you modify your search and try again');
								 $("#error").modal('show');
							 }
						}

				});
	}
});

$(document).on("click", ".is_price_continue", function() {

var fdata=traveller_detail_info;
var paxinf='';
									
									 $.each(fdata.filter_data.bus.pax_details, function(key, val) {

										 paxinf+='<h4>Passenger '+key+'</h4>';
										
											   paxinf+='<label><samp>'+val.title+'. </samp><samp>'+val.first_name+'</samp><samp>'+val.last_name+'</samp></label>';
										  
									 });
									 var paxreview='<div class="col-12">'+paxinf+'</div>';

										
									$("#paxreview").modal('hide');
									$("[data-staptwo]").addClass('active');
									$("[data-staptwo]").find("samp").addClass('fa fa-check').text(
											'');
									$("[data-staptwo]").find("span").text(
											'Travellers Details [Edit]').addClass('tcol');
									$("[data-steptwo-show],[data-stapone-show]").hide();
									$("[data-stapthree-show]").show();
									$("[data-stapthree]").addClass('active');
									$(".review_info").html(paxreview);
									$("#final_price_aj").html(fdata.pay_amt);
									
									$("#bus_notification_change").modal('hide');	
});

/* ===== Start Bus Shorting ============= */
$(function(){
	
var currency_icon = '<i class="fa fa-inr"></i>';
var obj={}
var array=new Array();
var priceArray = new Array();
var travelnameArray=new Array();
var bustypeArray=new Array();
var arrival_timeArray=new Array();
var depart_timeArray=new Array();
$("[bus-sort]").each(function(index,element){
priceArray.push($(this).find("[bus-price]").attr('bus-price'));
travelnameArray.push($(this).find("[bus-travelname]").attr('bus-travelname'));
bustypeArray.push($(this).find("[bus-bustype]").attr('bus-bustype'));

depart_timeArray.push($(this).find("[bus-boarding]").attr('bus-boarding'));
arrival_timeArray.push($(this).find("[bus-droping]").attr('bus-droping'));

	obj = {
			index 		 : $(this).find("[bus-index]").attr('bus-index'),
			travelname   : $(this).find("[bus-travelname]").attr('bus-travelname'),
			bustype         : $(this).find("[bus-bustype]").attr('bus-bustype'),
			depart_time     : $(this).find("[bus-boarding]").attr('bus-boarding'),
			arrival_time     : $(this).find("[bus-droping]").attr('bus-droping'),
			price         : $(this).find("[bus-price]").attr('bus-price')
		  };
	array.push(obj);

});

  travelnameArray = travelnameArray.filter(function (e, i, travelnameArray) {
		return travelnameArray.lastIndexOf(e) === i;
	});
   travelnameArray.sort();
    var travelnamedata="";
    for (q = 0; q < travelnameArray.length; q++) {
    travelnamedata+='<li><label class="checkboxlabel"><input type="checkbox" atr-travelname-hit  value="'+travelnameArray[q]+'" class="aj_busfilter"><samp class="samp">'+travelnameArray[q]+'</samp><i class="checkmark"></i> </label> </li><li class="middlehr"></li>';
	}	
    $('[atr-travelname-html-data]').html(travelnamedata);


	bustypeArray = bustypeArray.filter(function (e, i, bustypeArray) {
		return bustypeArray.lastIndexOf(e) === i;
	});
   bustypeArray.sort();
    var bustypedata="";
    for (q = 0; q < bustypeArray.length; q++) {
    bustypedata+='<li><label class="checkboxlabel"><input type="checkbox" atr-bustype-hit  value="'+bustypeArray[q]+'" class="aj_busfilter"><samp class="samp">'+bustypeArray[q]+'</samp><i class="checkmark"></i> </label> </li><li class="middlehr"></li>';
	}	
    $('[atr-bustype-html-data]').html(bustypedata);
	
	
	depart_timeArray = depart_timeArray.filter(function (e, i, depart_timeArray) {
		return depart_timeArray.lastIndexOf(e) === i;
	});
   depart_timeArray.sort();
    var depart_timedata="";
    for (q = 0; q < depart_timeArray.length; q++) {
    depart_timedata+='<li><label class="checkboxlabel"><input type="checkbox" atr-depart_time-hit  value="'+depart_timeArray[q]+'" class="aj_busfilter"><samp class="samp">'+depart_timeArray[q]+'</samp><i class="checkmark"></i> </label> </li><li class="middlehr"></li>';
	}	
    $('[atr-depart_time-html-data]').html(depart_timedata);


	arrival_timeArray = arrival_timeArray.filter(function (e, i, arrival_timeArray) {
		return arrival_timeArray.lastIndexOf(e) === i;
	});
   arrival_timeArray.sort();
    var arrival_timedata="";
    for (q = 0; q < arrival_timeArray.length; q++) {
    arrival_timedata+='<li><label class="checkboxlabel"><input type="checkbox" atr-arrival_time-hit  value="'+arrival_timeArray[q]+'" class="aj_busfilter"><samp class="samp">'+arrival_timeArray[q]+'</samp><i class="checkmark"></i> </label> </li><li class="middlehr"></li>';
	}	
    $('[atr-arrival_time-html-data]').html(arrival_timedata);
	
	
	
	

var bus_depart_time=new Array();
 $('[atr-depart_time-hit]').click(function(){		
	var bus_depart_timeval=$(this).val();
	if($(this).is(':checked')){
	bus_depart_time.push(bus_depart_timeval);
	$(this).parents().parents().addClass("checked");
	$(this).next().css("color","#fe4603");
	$(this).prop('checked',true);
	}else{
	bus_depart_time = jQuery.grep(bus_depart_time, function(value) {
	return value != bus_depart_timeval;
	});
	$(this).parents().parents().removeClass("checked");
	$(this).prop('checked',false);
		      $(this).next().css("color","#565656");
	}	
});	

var bus_arrival_time=new Array();
 $('[atr-arrival_time-hit]').click(function(){		
	var bus_depart_timevalue=$(this).val();
	if($(this).is(':checked')){
	bus_arrival_time.push(bus_depart_timevalue);
	$(this).parents().parents().addClass("checked");
	$(this).next().css("color","#fe4603");
	$(this).prop('checked',true);
	}else{
	bus_arrival_time = jQuery.grep(bus_arrival_time, function(value) {
	return value != bus_depart_timevalue;
	});
	$(this).parents().parents().removeClass("checked");
	$(this).next().css("color","#565656");
	$(this).prop('checked',false);
	}	
});	


var bus_travelname=new Array();
 $('[atr-travelname-hit]').click(function(){		
	var travelnamevalue=$(this).val();
	if($(this).is(':checked')){
	bus_travelname.push(travelnamevalue);
	$(this).parents().parents().addClass("checked");
		$(this).next().css("color","#fe4603");
	$(this).prop('checked',true);
	}else{
	bus_travelname = jQuery.grep(bus_travelname, function(value) {
	return value != travelnamevalue;
	});
	$(this).parents().parents().removeClass("checked");
	$(this).next().css("color","#565656");
	$(this).prop('checked',false);
	}	
});	

var bus_bustype=new Array();
 $('[atr-bustype-hit]').click(function(){		
	var bustypevalue=$(this).val();
	if($(this).is(':checked')){
	bus_bustype.push(bustypevalue);
	$(this).parents().parents().addClass("checked");
$(this).next().css("color","#fe4603");
	$(this).prop('checked',true);
	}else{
	bus_bustype = jQuery.grep(bus_bustype, function(value) {
	return value != bustypevalue;
	});
	$(this).parents().parents().removeClass("checked");
	$(this).next().css("color","#565656");
	$(this).prop('checked',false);
	}	
});	
	
/*----  Start Price filter --- */
  Array.prototype.max = function() {
	  return Math.max.apply(null, this);
	};
  Array.prototype.min = function() {
	  return Math.min.apply(null, this);
	};
	
  var price_min=priceArray.min();
  var price_max=priceArray.max();

  $(".price-range" ).slider({
	  range: true,
	  min:price_min,
	  max:price_max,
	  values: [price_min,price_max],
	  slide: function( event, ui ) {
      $( ".leftprice" ).val(ui.values[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
      $( ".rightprice" ).val(ui.values[1].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));	
	  },
	change: function( event, ui ) {	
	 	var mi = ui.values[ 0 ];
		var mx = ui.values[ 1 ];
		
		var filters = {};
		var ftypecount=bus_travelname.length;
		var bus_bustypecount=bus_bustype.length;
		var bus_depart_timecount=bus_depart_time.length;
		var bus_arrival_timecount=bus_arrival_time.length;

		if(ftypecount!==0)
		{
			filters['travelname']=bus_travelname;
		}
		if(bus_bustypecount!==0)
		{
			filters['bustype']=bus_bustype;
		}
		if(bus_depart_timecount!==0)
		{
			filters['depart_time']=bus_depart_time;
		}
		if(bus_arrival_timecount!==0)
		{
			filters['arrival_time']=bus_arrival_time;
		}
		
		var filtered = multiFilter(array, filters);

		$("[bus-sort]").hide();
		$.each(filtered, function (i, value) {
				
			 if(value.price <= mi || value.price >= mx)
			 {
		
				 $("#result_"+value.index).hide(); 
			 }
			 if(value.price >= mi && value.price <= mx)
			 { 
				 $("#result_"+value.index).show(); 
			 }  			 
		});
		countbus();

		
		
	 }	

	});
	
	$( ".leftprice" ).val($(".price-range" ).slider( "values", 0 ).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    $( ".rightprice" ).val($(".price-range" ).slider( "values", 1 ).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
	
  /*----  End Price filter --- */
  
  
  $(".aj_busfilter").click(function() {
	var filters = {};
	var ftypecount=bus_travelname.length;
	var bus_bustypecount=bus_bustype.length;
	var bus_depart_timecount=bus_depart_time.length;
		var bus_arrival_timecount=bus_arrival_time.length;

	var pattern = /[0-9]+/g;
	var min = $.trim($(".leftprice").val());
	var max = $.trim($(".rightprice").val());
	min = Number($.trim(min.replace(/[^0-9]+/g, '')).match(pattern));
	max = Number($.trim(max.replace(/[^0-9]+/g, '')).match(pattern));

	if(ftypecount!==0)
	{
		filters['travelname']=bus_travelname;
	}
	if(bus_bustypecount!==0)
	{
		filters['bustype']=bus_bustype;
	}
	if(bus_depart_timecount!==0)
		{
			filters['depart_time']=bus_depart_time;
		}
		if(bus_arrival_timecount!==0)
		{
			filters['arrival_time']=bus_arrival_time;
		}
	
	var filtered = multiFilter(array, filters);
	$(".aj_bs_fare").hide();
	$.each(filtered, function (i, value) { 
		        if(value.price <= min || value.price >= max)
				 {
			
					 $("#result_"+value.index).hide(); 
				 }
				 if(value.price >= min && value.price <= max)
				 { 
					 $("#result_"+value.index).show(); 
				 }			 
	});
	//$(".bs-waiting-modal-sm").modal('hide');
	
	countbus();
	
});



 $('[bus-clearfilter]').click(function(){
	  
	   $('[atr-travelname-hit]').prop('checked',false);
	   $('[atr-travelname-hit]').parents().parents().removeClass("checked");
	   
	   $('[atr-bustype-hit]').prop('checked',false);
	   $('[atr-bustype-hit]').parents().parents().removeClass("checked");
	   
	   
	   $('[atr-arrival_time-hit]').prop('checked',false);
	   $('[atr-arrival_time-hit]').parents().parents().removeClass("checked");
	   
	   
	   $('[atr-depart_time-hit]').prop('checked',false);
	   $('[atr-depart_time-hit]').parents().parents().removeClass("checked");
	   

	   $(".price-range").slider("values", 0, price_min);  
	   $(".price-range").slider("values", 1, price_max ); 
	   
	   $( ".leftprice" ).val(price_min);
       $( ".rightprice" ).val(price_max);
	   
	   bus_bustype=[];
	   bus_travelname=[];
	   bus_depart_time=[];
	   bus_arrival_time=[];
	 
	   
		$.each(array, function (i, value) {
			$("#result_"+value.index).show();       
		});
	   countbus();

	});


  
  
  
  
	
});
	
function countbus() {
	
	if(($('[bus-sort]:visible').length)==0){
	/* alert('No Result Left !!!'); */
	$('.nobus').show();
	}else{
	$('.nobus').hide();
	}
}

function multiFilter(array, filters) {
  var filterKeys = Object.keys(filters);
   return array.filter((item) => {
   return filterKeys.every(key => !!~filters[key].indexOf(item[key]));		 
  });
}


function showhidebuscnldiv(index)
{
	$("#showseatresult_"+index).hide();
	$("#showcancellationdiv_"+index).toggle();
	
}
function showhidebuscnldivseat(index)
{
	$("#showcancellationdiv_"+index).hide();
	$("#showseatresult_"+index).toggle();
	
	
}


/**
 *  Start oneway Top Sorting 
*/


$("#busSort_Operators").data("sortKey", "[id^='traveler_']");
$("#busSort_Depart").data("sortKey", "[id^='departure_']");
$("#busSort_Arrive").data("sortKey", "[id^='arrival_']");
$("#busSort_Duration").data("sortKey", "[id^='duration_']");
$("#busSort_Seats").data("sortKey", "[id^='seats_']");
$("#busSort_Price").data("sortKey", "[id^='busprice_']");

/* setup sortOrder default attributes */

var opeartorSortOrder = 'Desc';
var departueSortOrder = 'Desc';
var arrivalSortOrder = 'Desc';
var durationSortOrder = 'Desc';
var seatsSortOrder = 'Desc';
var pubPriceSortOrder = 'Desc';


 $('[id^="busSort_"]').on('click', function (e) {
	 
	
	e.preventDefault();

	$('[id^="busSort_"]').removeClass("selected");

	$("i", this).toggleClass("fa fa-sort-up fa fa-sort-down");
		
	var spanId = $(this).attr('id');
	var sortType = spanId.replace(/busSort_/, '');
	
	var sortOrder;
	if (sortType == "Price") {
		
		$("#busSort_Price").addClass("selected");
		sortOrder = pubPriceSortOrder;
		if (pubPriceSortOrder == 'Asc') {
			pubPriceSortOrder = 'Desc';
		} else {
			pubPriceSortOrder = 'Asc';
		}
	}else if (sortType == "Duration") {
		$("#busSort_Duration").addClass("selected");
		sortOrder = durationSortOrder;
		if (durationSortOrder == 'Asc') {
			durationSortOrder = 'Desc';
		} else {
			durationSortOrder = 'Asc';
		}
	}else if (sortType == "Depart") {
		$("#busSort_Depart").addClass("selected");
		sortOrder = departueSortOrder;
		if (departueSortOrder == 'Asc') {
			departueSortOrder = 'Desc';
		} else {
			departueSortOrder = 'Asc';
		}
	}else if (sortType == "Operators") {
		
		$("#busSort_Operators").addClass("selected");
		sortOrder = opeartorSortOrder;
		if (opeartorSortOrder == 'Asc') {
			opeartorSortOrder = 'Desc';
		} else {
			opeartorSortOrder = 'Asc';
		}
	}else if (sortType == "seats") {
		$("#busSort_seats").addClass("selected");
		sortOrder = seatsSortOrder;
		if (opeartorSortOrder == 'Asc') {
			seatsSortOrder = 'Desc';
		} else {
			seatsSortOrder = 'Asc';
		}
	} else {
		$("#busSort_Arrive").addClass("selected");
		sortOrder = arrivalSortOrder;
		if (arrivalSortOrder == 'Asc') {
			arrivalSortOrder = 'Desc';
		} else {
			arrivalSortOrder = 'Asc';

		}
	}
	sortUsingNestedText($(this).data("sortKey"), sortOrder,sortType);
});
/* End Sorting order by (Top Sorting ) */ 

var flightResult = $('#busResult');
var flightDiv = $('[busshorttop]');
/* setTimeout(function(){ 
	sortUsingNestedText($("#busSort_Price").data("sortKey"), "Asc","Price");
},100);
 */
function sortUsingNestedText(keySelector, sortOrder,sortType) {
	
	var items = flightDiv.sort(function (a, b) {
		
		
		if(sortType=="Operators")
		{
			var vA = $.trim($(keySelector, a).text());
			var vB = $.trim($(keySelector, b).text());
		} else {	
		var pattern = /[0-9]+/g;
		var vA = $.trim($(keySelector, a).text());
		var vB = $.trim($(keySelector, b).text());
		vA = Number($.trim(vA.replace(/[^0-9]+/g, '')).match(pattern));
		vB = Number($.trim(vB.replace(/[^0-9]+/g, '')).match(pattern));
		}
		//Apply sortOrder logic (sortOrder basis and order)
		if (sortOrder == 'Asc') {
			return (vA < vB) ? -1 : (vA > vB) ? 1 : 0;
		} else {
			return (vA > vB) ? -1 : (vA < vB) ? 1 : 0;
		}
		
	});
	
	
	flightResult.append(items);
	
}
function buscoanellationplolicy(id)
{
	
	
	$("#"+id).toggle('slow');
}