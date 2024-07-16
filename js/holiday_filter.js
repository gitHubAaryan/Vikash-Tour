 /* ===== Start Fight Shorting ============= */
 
$(function(){
var currency_icon = '<i class="fa fa-inr"></i>';
var obj={}
var array=new Array();
var airline_name=new Array();
var priceArray = new Array();	
var durationArray = new Array();
var starArray=new Array();
var packageArray = new Array();
var dataflightArray = new Array();

$("[holiday-sort]").each(function(index,element) {

	priceArray.push($(this).find("[data-price]").attr('data-price'));
	airline_name.push($(this).find("[holiday-airlinename]").attr('holiday-airlinename'));
	durationArray.push($(this).find("[data-duration]").attr('data-duration'));
	starArray.push($(this).find("[data-star]").attr('data-star'));
	packageArray.push($(this).find("[data-package]").attr('data-package'));
      dataflightArray.push($(this).find("[data-flight]").attr('data-flight'));
	obj = {
		    AirlineName      : $(this).find("[holiday-airlinename]").attr('holiday-airlinename'),
			index 		 : $(this).find("[data-index]").attr('data-index'),
			duration     : $(this).find("[data-duration]").attr('data-duration'),
			price        : $(this).find("[data-price]").attr('data-price'),
			star         : $(this).find("[data-star]").attr('data-star'),
			package_type : $(this).find("[data-package]").attr('data-package'),
			flightno_type : $(this).find("[data-flight]").attr('data-flight')
		  };
	array.push(obj);

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
  $(".price-range-package" ).slider({
	  range: true,
	  min:price_min,
	  max:price_max,
	  values: [price_min,price_max],
	  slide: function( event, ui ) {
      $( ".leftprice_package" ).val(ui.values[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
      $( ".rightprice_package" ).val(ui.values[1].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));	
	  },
	change: function( event, ui ) {	
	 	var mi = ui.values[ 0 ];
		var mx = ui.values[ 1 ];
		
		
		var filters = {};
		var startypecount=startype.length;
		var durationcount=durationtype.length;

		if(startypecount!==0)
		{
			filters['star']=startype;
		}
		if(durationcount!==0)
		{
			filters['duration']=durationtype;
		}
	
		var filtered = multiFilter(array, filters);
		

		$("[holiday-sort]").hide();
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
		
		
	 }	

	});
	
	$( ".leftprice_package" ).val($(".price-range-package" ).slider( "values", 0 ).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    $( ".rightprice_package" ).val($(".price-range-package" ).slider( "values", 1 ).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
	
  /*----  End Price filter --- */
  /*----  Start Airline filter --- */
   /* var result = groupBy(array, function(item){
					  return [item.airline, item.logo];
			});
			
		var counters = {};
        var matrixarray=new Array();  
		result.forEach(function (v1, k1) { 
			var matrix=min_value(v1);
			matrixarray.push(matrix);
			var itemAirlineName = matrix.airline;
			if(!counters[itemAirlineName]) 
			{
				counters[itemAirlineName] = matrix.logo;
			}
		});
	
	  var airlinedata="";
	  Object.keys(counters)
      .sort()
      .forEach(function(v, i) {
		  console.log(v);
		   airlinedata+='<li><label class="checkboxlabel d-flex align-items-center"><img src='+counters[v]+' class="float-left mr-2"> <input type="checkbox" atr-airline-name-hit  value="'+v+'" class="aj_filter"><samp class="samp">'+v+'</samp><i class="checkmark"></i> </label> </li>';
		   
       });
   */
/*   airline_name = airline_name.filter(function (e, i, airline_name) {
		return airline_name.lastIndexOf(e) === i;
	});
  airline_name.sort();
  
  var airlinedata="";
  for (q = 0; q < airline_name.length; q++) {
    airlinedata+='<li><label class="checkboxlabel"><input type="checkbox" atr-airline-name-hit  value="'+airline_name[q]+'" class="aj_filter"><samp class="samp">'+airline_name[q]+'</samp><i class="checkmark"></i> </label> </li><li class="middlehr"></li>';
	}	
  */
  
  /*  $('[atr-airline-html-data]').html(airlinedata); */
   /*----  End Airline filter --- */
  
var startype = new Array();
 $('[data-star-hit]').click(function(){
	 
	var starvalue=$(this).val();
	if($(this).is(':checked')){
	var id=($(this).val());
	$('starratings'+id).addClass("abc");
		$(this).next().css("color","#fe4603");
$(this).prop('checked',true);

	startype.push(starvalue);
	$(this).parents().parents().addClass("checked");
	$(this).prop('checked',true);
	}else{
	startype = jQuery.grep(startype, function(value) {
	return value != starvalue;
	});
	$(this).parents().parents().removeClass("checked");
		$(this).next().css("color","#565656");
	$(this).prop('checked',false);
	}	
 });
 
   /*----  Start Duration filter --- */
  
  durationArray = durationArray.filter(function (e, i, durationArray) {
		return durationArray.lastIndexOf(e) === i;
	}); 

	dataflightArray = dataflightArray.filter(function (e, i, dataflightArray) {
		return dataflightArray.lastIndexOf(e) === i;
	});
  durationArray.sort();
  
  var durationdata="";
  for (q = 0; q < durationArray.length; q++) {
    durationdata+='<li><label class="checkboxlabel"><input type="checkbox" data-duration-hit value="'+durationArray[q]+'" class="aj_filter"><samp class="samp">'+durationArray[q]+'</samp><i class="checkmark"></i> </label> </li><li class="middlehr"></li>';
	}	
  $('[data-duration-html-data]').html(durationdata);
    var nonflightdata="";
  for (q = 0; q < dataflightArray.length; q++) {
    nonflightdata+='<li><label class="checkboxlabel"><input type="checkbox" data-flight-hit value="'+dataflightArray[q]+'" class="aj_filter"><samp class="samp">'+dataflightArray[q]+'</samp><i class="checkmark"></i> </label> </li><li class="middlehr"></li>';
	}	
  $('[data-flight-html-data]').html(nonflightdata);
  var durationtype = new Array();
 $('[data-duration-hit]').click(function(){
	 
	var durationvalue=$(this).val();
	if($(this).is(':checked')){
	durationtype.push(durationvalue);
	$(this).parents().parents().addClass("checked");
	$(this).next().css("color","#fe4603");
	$(this).prop('checked',true);
	}else{
	durationtype = jQuery.grep(durationtype, function(value) {
	return value != durationvalue;
	});
	$(this).parents().parents().removeClass("checked");
	$(this).next().css("color","#565656");
	$(this).prop('checked',false);
	}	
 });
 
   var flightdurationtype = new Array();
 $('[data-flight-hit]').click(function(){
	 
	var nflightvalue=$(this).val();
	if($(this).is(':checked')){
	flightdurationtype.push(nflightvalue);
	$(this).parents().parents().addClass("checked");
	$(this).next().css("color","#fe4603");
	$(this).prop('checked',true);
	}else{
	flightdurationtype = jQuery.grep(flightdurationtype, function(value) {
	return value != nflightvalue;
	});
	$(this).parents().parents().removeClass("checked");
	$(this).next().css("color","#565656");
	$(this).prop('checked',false);
	}	
 });
  
   /*----  End Durations filter --- */
   
   var airline=new Array();
   $(".aj_filter").on("change" ,function() {
/* 	 var x = $("[holiday-airlinename]").val();
	
	   var airlinename=$(this).val();
	   airline.push(airlinename); */
	//$(".bs-waiting-modal-sm").modal('show');
	var filters = {};
	var startypecount=startype.length;
	var durationcount=durationtype.length;
	var flightcount=flightdurationtype.length;
	/* var airlinecount=airline.length; */
	

	var pattern = /[0-9]+/g;
	var min = $.trim($(".leftprice_package").val());
	var max = $.trim($(".rightprice_package").val());
	min = Number($.trim(min.replace(/[^0-9]+/g, '')).match(pattern));
	max = Number($.trim(max.replace(/[^0-9]+/g, '')).match(pattern));

	if(startypecount!==0)
	{
		filters['star']=startype;
	}
	if(durationcount!==0)
	{
		filters['duration']=durationtype;
	}
	
	if(flightcount!==0)
	{
		filters['flightno_type']=flightdurationtype;
	}
	/* if(airlinecount!==0)
	{
		filters['AirlineName']=airline;
		
	} */
	/* console.log(filtered); */
	var filtered = multiFilter(array, filters);

	$("[holiday-sort]").hide();
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
	countpackage();
	//$(".bs-waiting-modal-sm").modal('hide');
	
});


$(".reset_holiday").click(function() {
	
	   $('[data-star-hit]').prop('checked',false);
	   $('[data-duration-hit]').prop('checked',false);
	   $('[data-flight-hit]').prop('checked',false);
	   $(".price-range-package").slider("values", 0, price_min);  
	   $(".price-range-package").slider("values", 1, price_max ); 
	   $( ".leftprice_package" ).val(price_min );
       $( ".rightprice_package" ).val(price_max);
	   $('.samp').css("color","#212529");

	   startype=[];
	   durationtype=[];
	   flightcount=[];
	   
	   	$.each(array, function (i, value) {
			$("#result_"+value.index).show();       
		});	
		countpackage();
});

 
});

function multiFilter(array, filters) {
	
  var filterKeys = Object.keys(filters);
    
  return array.filter((item) => {
   return filterKeys.every(key => !!~filters[key].indexOf(item[key]));		 
  });
}



$(document).ready(function(){
setTimeout(function(){ 

$('.aj_shadow').sort(function (a, b) {
  return $(a).find('.pbprice').data('price') - $(b).find('.pbprice').data('price');
}).each(function (_, aj_shadow) {
  $(aj_shadow).parent().append(aj_shadow);
});

}, 2000);
});
$("#airlinh").on("change",function(){
	var airline=$(this).val();
	
});
function countpackage() {
/* $('[atr-flightcount]').html($('[air-sort]:visible').length+' of '+ $('[air-sort]').length); */

var jtype=$("#get_jtype").val();



if(($('[holiday-sort]:visible').length)==0){
	/* alert('No Result Left !!!'); */

	$('.nofligh').show();
	}else{
	$('.nofligh').hide();
}}
