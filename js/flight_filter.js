 /* ===== Start Fight Shorting ============= */
$(function(){
var currency_icon = '<i class="fa fa-inr"></i>';
var obj={}
var array=new Array();
var priceArray = new Array();	
var stopArray = new Array();
var airline_name=new Array();
var flighttypeArray = new Array();
var jtype=$("#get_jtype").val();

$("[air-sort]").each(function(index,element){
priceArray.push($(this).find("[air-price]").attr('air-price'));
stopArray.push($(this).find("[air-stops]").attr('air-stops'));
airline_name.push($(this).find("[air-airlinename]").attr('air-airlinename'));	
flighttypeArray.push($(this).find("[air-faretype]").attr('air-faretype')); 

	obj = {
			index 		 : $(this).find("[air-index]").attr('air-index'),
			AirlineName  : $(this).find("[air-airlinename]").attr('air-airlinename'),
			price        : $(this).find("[air-price]").attr('air-price'),
			stop         : $(this).find("[air-stops]").attr('air-stops'),
			fare_type    : $(this).find("[air-faretype]").attr('air-faretype'),
			logo         : $(this).find("[air-airline-logo]").attr('air-airline-logo'),
			depart_time  : $(this).find("[air-departtime]").attr('air-departtime'),
			depart_time_return  : $(this).find("[air-departtime_return]").attr('air-departtime_return'),
		  };
	array.push(obj);

});
/* console.log(array)    */

/**
 *  Start oneway Top Sorting 
*/


$("#OBSort_Airline").data("sortKey", "[id^='airlinename_']");
$("#OBSort_Departure").data("sortKey", "[id^='departure_']");
$("#OBSort_Arrival").data("sortKey", "[id^='arrival_']");
$("#OBSort_Duration").data("sortKey", "[id^='duration_']");
$("#OBSort_PubPrice").data("sortKey", "[id^='PubPrice_']");

/* setup sortOrder default attributes */

var airlineSortOrder = 'Desc';
var departueSortOrder = 'Desc';
var arrivalSortOrder = 'Desc';
var durationSortOrder = 'Desc';
var pubPriceSortOrder = 'Desc';


 $('[id^="OBSort_"]').on('click', function (e) {
	e.preventDefault();

	$('[id^="OBSort_"]').removeClass("selected");

	$("i", this).toggleClass("fa fa-sort-up fa fa-sort-down");
		
	var spanId = $(this).attr('id');
	var sortType = spanId.replace(/OBSort_/, '');
	
	var sortOrder;
	if (sortType == "PubPrice") {
		$("#OBSort_PubPrice").addClass("selected");
		sortOrder = pubPriceSortOrder;
		if (pubPriceSortOrder == 'Asc') {
			pubPriceSortOrder = 'Desc';
		} else {
			pubPriceSortOrder = 'Asc';
		}
	}else if (sortType == "Duration") {
		$("#OBSort_Duration").addClass("selected");
		sortOrder = durationSortOrder;
		if (durationSortOrder == 'Asc') {
			durationSortOrder = 'Desc';
		} else {
			durationSortOrder = 'Asc';
		}
	}else if (sortType == "Departure") {
		$("#OBSort_Departure").addClass("selected");
		sortOrder = departueSortOrder;
		if (departueSortOrder == 'Asc') {
			departueSortOrder = 'Desc';
		} else {
			departueSortOrder = 'Asc';
		}
	}else if (sortType == "Airline") {
		$("#OBSort_Airline").addClass("selected");
		sortOrder = airlineSortOrder;
		if (airlineSortOrder == 'Asc') {
			airlineSortOrder = 'Desc';
		} else {
			airlineSortOrder = 'Asc';
		}
	} else {
		$("#OBSort_Arrival").addClass("selected");
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


/**
 *  Start Round trip IB Top Sorting 
*/


$("#IBSort_Airlineib").data("sortKey", "[id^='airlinenameib_']");
$("#IBSort_Departureib").data("sortKey", "[id^='departureib_']");
$("#IBSort_Arrivalib").data("sortKey", "[id^='arrivalib_']");
$("#IBSort_Durationib").data("sortKey", "[id^='durationib_']");
$("#IBSort_PubPriceib").data("sortKey", "[id^='PubPriceib_']");

/* setup sortOrder default attributes */

var airlineSortOrderib = 'Desc';
var departueSortOrderib = 'Desc';
var arrivalSortOrderib = 'Desc';
var durationSortOrderib = 'Desc';
var pubPriceSortOrderib = 'Desc';


 $('[id^="IBSort_"]').on('click', function (e) {
	e.preventDefault();

	$('[id^="IBSort_"]').removeClass("selected");

	$("i", this).toggleClass("fa fa-sort-up fa fa-sort-down");
		
	var spanId = $(this).attr('id');
	var sortType = spanId.replace(/IBSort_/, '');
	
	var sortOrder;
	if (sortType == "PubPriceib") {
		$("#IBSort_PubPriceib").addClass("selected");
		sortOrder = pubPriceSortOrderib;
		if (pubPriceSortOrderib == 'Asc') {
			pubPriceSortOrderib = 'Desc';
		} else {
			pubPriceSortOrderib = 'Asc';
		}
	}else if (sortType == "Durationib") {
		$("#IBSort_Durationib").addClass("selected");
		sortOrder = durationSortOrderib;
		if (durationSortOrderib == 'Asc') {
			durationSortOrderib = 'Desc';
		} else {
			durationSortOrderib = 'Asc';
		}
	}else if (sortType == "Departureib") {
		$("#IBSort_Departureib").addClass("selected");
		sortOrder = departueSortOrderib;
		if (departueSortOrderib == 'Asc') {
			departueSortOrderib = 'Desc';
		} else {
			departueSortOrderib = 'Asc';
		}
	}else if (sortType == "Airlineib") {
		$("#IBSort_Airlineib").addClass("selected");
		sortOrder = airlineSortOrderib;
		if (airlineSortOrderib == 'Asc') {
			airlineSortOrderib = 'Desc';
		} else {
			airlineSortOrderib = 'Asc';
		}
	} else {
		$("#IBSort_Arrivalib").addClass("selected");
		sortOrder = arrivalSortOrderib;
		if (arrivalSortOrderib == 'Asc') {
			arrivalSortOrderib = 'Desc';
		} else {
			arrivalSortOrderib = 'Asc';

		}
	}
	sortUsingNestedTextib($(this).data("sortKey"), sortOrder,sortType);
});
/* End Sorting order by (Top Sorting ) */ 




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
		var ftypecount=flighttype.length;
		var airlinecount=airline.length;
		var stopcount=stop.length;
		var departtimecount=departtime.length;
		var departtimereturncount=departtimereturn.length;
		
		if(ftypecount!==0)
		{
			filters['fare_type']=flighttype;
		}
		if(airlinecount!==0)
		{
			filters['AirlineName']=airline;
		}
		if(stopcount!==0)
		{
			filters['stop']=stop;
		}
		if(departtimecount!==0)
		{
			filters['depart_time']=departtime;
		}
		if(departtimereturncount!==0)
		{
			filters['depart_time_return']=departtimereturn;
		}

		var filtered = multiFilter(array, filters);

		$("[air-sort]").hide();
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
		countflight();
		//$(".bs-waiting-modal-sm").modal('hide');
		
	 }	

	});
	
	$( ".leftprice" ).val($(".price-range" ).slider( "values", 0 ).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    $( ".rightprice" ).val($(".price-range" ).slider( "values", 1 ).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
	
  /*----  End Price filter --- */
  
  
  /*----  Start Stop filter --- */
  
  stopArray = stopArray.filter(function (e, i, stopArray) {
	return stopArray.lastIndexOf(e) === i;
  });
  stopArray.sort();

  var stophtml="";
  for (i = 0; i < stopArray.length; i++) { 
	if(stopArray[i]==0) {
	 stophtml+='<li><label class="checkboxlabel"><input type="checkbox" atr-stop-hit class="aj_filter" value="0"><samp class="samp">Non Stop</samp> </label></li>';	
	} else {
	 stophtml+='<li class="middlehr"></li><li><label class="checkboxlabel"><input type="checkbox" atr-stop-hit class="aj_filter" value="'+stopArray[i]+'"><samp class="samp">'+stopArray[i]+' Stop</samp> </label></li>';	
	}		
	}
  $('[atr-stop-html-data]').html(stophtml);
  
  /*----  End Stop filter --- */
  
   /*----  Start Fare Type filter --- */
	 
  flighttypeArray = flighttypeArray.filter(function (e, i, flighttypeArray) {
		return flighttypeArray.lastIndexOf(e) === i;
  });
 
  var flighttypehtml="";
  for (i = 0; i < flighttypeArray.length; i++) { 
	
	 flighttypehtml+=' <li><label class="checkboxlabel"><input type="checkbox" atr-faretype-hit class="aj_filter" value="'+flighttypeArray[i]+'"><samp class="samp">'+flighttypeArray[i]+' </samp> </label></li>';
	 				
	}
  $('[atr-faretype-html-data]').html(flighttypehtml);
  
 /*----  End Fare Type filter --- */
  
  /*----  Start Airline filter --- */
  
  var result = groupBy(array, function(item){
					  return [item.AirlineName, item.logo];
			});
		var counters = {};
        var matrixarray=new Array();  
		result.forEach(function (v1, k1) { 
			var matrix=min_value(v1);
			matrixarray.push(matrix);
			var itemAirlineName = matrix.AirlineName;
			if(!counters[itemAirlineName]) 
			{
				counters[itemAirlineName] = matrix.logo;
			}
		});
	
	  var airlinedata="";
	  Object.keys(counters)
      .sort()
      .forEach(function(v, i) {
		   airlinedata+='<li><label class="checkboxlabel"><img src='+counters[v]+' class="float-left mr5"> <input type="checkbox" atr-airline-name-hit  value="'+v+'" class="aj_filter"><samp class="samp">'+v+'</samp> </label> </li><li class="middlehr"></li>';
		   
       });
  
   $('[atr-airline-html-data]').html(airlinedata);
  
   /*----  End Airline filter --- */
     
 var flighttype = new Array();
 $('[atr-faretype-hit]').click(function(){
		var faretypevalue=$(this).val();
		if($(this).is(':checked')){
			flighttype.push(faretypevalue);
			$(this).parents().parents().addClass("checked");
			$(this).prop('checked',true);
		}
		else{
		    flighttype = jQuery.grep(flighttype, function(value) {
					return value != faretypevalue;
					});
			$(this).parents().parents().removeClass("checked");
			$(this).prop('checked',false);
		}
	 
 });
 
var airline=new Array();
 $('[atr-airline-name-hit]').click(function(){
	var airlinename=$(this).val();
	if($(this).is(':checked')){
	airline.push(airlinename);
	$(this).parents().parents().addClass("checked");
	$(this).prop('checked',true);
	}else {
	airline = jQuery.grep(airline, function(value) {
	return value != airlinename;
	});
	$(this).parents().parents().removeClass("checked");
	$(this).prop('checked',false);
	}
 });
  
var stop=new Array();
 $('[atr-stop-hit]').click(function(){		
	var stopvalue=$(this).val();
	if($(this).is(':checked')){
	stop.push(stopvalue);
	$(this).parents().parents().addClass("checked");
	$(this).prop('checked',true);
	}else{
	stop = jQuery.grep(stop, function(value) {
	return value != stopvalue;
	});
	$(this).parents().parents().removeClass("checked");
	$(this).prop('checked',false);
	}	
});

var departtime=new Array();
 $('[atr-departtime-hit]').click(function(){		
	var stopvalue=$(this).val();
	if($(this).is(':checked')){
	departtime.push(stopvalue);
	$(this).parents().parents().addClass("checked");
	$(this).prop('checked',true);
	}else{
	departtime = jQuery.grep(departtime, function(value) {
	return value != stopvalue;
	});
	$(this).parents().parents().removeClass("checked");
	$(this).prop('checked',false);
	}	
});

var departtimereturn=new Array();
 $('[atr-departtimereturn-hit]').click(function(){		
	var stopvalue=$(this).val();
	if($(this).is(':checked')){
	departtimereturn.push(stopvalue);
	$(this).parents().parents().addClass("checked");
	$(this).prop('checked',true);
	}else{
	departtimereturn = jQuery.grep(departtimereturn, function(value) {
	return value != stopvalue;
	});
	$(this).parents().parents().removeClass("checked");
	$(this).prop('checked',false);
	}	
});


$(".aj_filter").click(function() {
	//$(".bs-waiting-modal-sm").modal('show');
	var filters = {};
	var ftypecount=flighttype.length;
	var airlinecount=airline.length;
	var stopcount=stop.length;
	var departtimecount=departtime.length;
	var departtimereturncount=departtimereturn.length;

	var pattern = /[0-9]+/g;
	var min = $.trim($(".leftprice").val());
	var max = $.trim($(".rightprice").val());
	min = Number($.trim(min.replace(/[^0-9]+/g, '')).match(pattern));
	max = Number($.trim(max.replace(/[^0-9]+/g, '')).match(pattern));

	if(ftypecount!==0)
	{
		filters['fare_type']=flighttype;
	}
	if(airlinecount!==0)
	{
		filters['AirlineName']=airline;
	}
	if(stopcount!==0)
	{
		filters['stop']=stop;
	}
	if(departtimecount!==0)
	{
		filters['depart_time']=departtime;
	}
	if(departtimereturncount!==0)
	{
		filters['depart_time_return']=departtimereturn;
	}
	var filtered = multiFilter(array, filters);
	$(".aj_o_fare").hide();
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
	
	countflight();
	
});


 $('[air-clearfilter]').click(function(){
	  
	   $('[atr-airline-name-hit]').prop('checked',false);
	   $('[atr-airline-name-hit]').parents().parents().removeClass("checked");
	   
	   $('[atr-departtime-hit]').prop('checked',false);
	   $('[atr-departtime-hit]').parents().parents().removeClass("checked");
	   
	   $('[atr-stop-hit]').prop('checked',false);
	   $('[atr-stop-hit]').parents().parents().removeClass("checked");
	   $('[atr-faretype-hit]').prop('checked',false);
	   $('[atr-faretype-hit]').parents().parents().removeClass("checked");

	   $(".price-range").slider("values", 0, price_min);  
	   $(".price-range").slider("values", 1, price_max ); 
	   
	   $( ".leftprice" ).val(price_min);
       $( ".rightprice" ).val(price_max);
	   
	   flighttype=[];
	   airline=[];
	   stop=[];
	   departtime=[];
	   
		$.each(array, function (i, value) {
			$("#result_"+value.index).show();       
		});
	   countflight();

	});

});

var flightResult = $('#flightResult');
var flightDiv = $('#flightResult div.aj_o_fare');
setTimeout(function(){ 
	sortUsingNestedText($("#OBSort_PubPrice").data("sortKey"), "Asc","Price");
},100);

function sortUsingNestedText(keySelector, sortOrder,sortType) {
	var items = flightDiv.sort(function (a, b) {
		if(sortType=="Airline")
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

/* 	for roundtrip  */

var flightResultib = $('#flightResultib');
var flightDivib = $('#flightResultib div.aj_o_fare');

setTimeout(function(){ 
	sortUsingNestedTextib($("#IBSort_PubPriceib").data("sortKey"), "Asc","Price");
}, 2000);

function sortUsingNestedTextib(keySelector, sortOrder,sortType) {
	var items = flightDivib.sort(function (a, b) {
		if(sortType=="Airlineib")
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
	flightResultib.append(items);
}

/* 	for roundtrip  End*/


function multiFilter(array, filters) {
  var filterKeys = Object.keys(filters);
   return array.filter((item) => {
   return filterKeys.every(key => !!~filters[key].indexOf(item[key]));		 
  });
}

function groupBy( array , f )
{
  var groups = {};
  array.forEach( function( o )
  {
    var group = JSON.stringify( f(o) );
    groups[group] = groups[group] || [];
    groups[group].push( o );  
  });
  return Object.keys(groups).map( function( group )
  {
    return groups[group]; 
  })
}

function min_value(dataset)
{
	
	var min = Infinity,
	key;  
	dataset.forEach(function (v, k) { 
		if (min > +v.price) { 
			min = +v.price; 
			key = k; 
		}
	});
	
 return dataset[key];
	
}

/* --------- Start Count Flights For Filter --------------------*/
function countflight() {
/* $('[atr-flightcount]').html($('[air-sort]:visible').length+' of '+ $('[air-sort]').length); */

var jtype=$("#get_jtype").val();

if(($('[air-sort]:visible').length)==0){
	/* alert('No Result Left !!!'); */
	$('.nofligh').show();
	}else{
	$('.nofligh').hide();
	}
	
if(jtype=="roundtrip") 
{
	
	if($("#flightResult .aj_o_fare:visible").length==0)
	{
			$('.noflighob').show();
			$(".noflighround").hide();
	} else {
			$('.noflighob').hide();
			$(".noflighround").hide();
	}
	if($("#flightResultib .aj_o_fare:visible").length==0)
	{
			$('.noflighib').show();
			$(".noflighround").hide();
	} else {
			$('.noflighib').hide();
			$(".noflighround").hide();
	}

	if($("#flightResult .aj_o_fare:visible").length==0 && $("#flightResultib .aj_o_fare:visible").length==0)
	{
		   $('.noflighob').hide();
		   $('.noflighib').hide();
		   $(".noflighround").show();
	} else {
		
		   $(".noflighround").hide();
	}
		
}
	
}
/* --------- End Count Flights For Filter --------------------*/  

/* ===== End Fight Shorting ============= */
 


 