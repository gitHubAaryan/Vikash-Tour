$(function() {

	$("[train-jourmey-date]").datepicker({
		defaultDate: "",
		dateFormat: "dd-mm-yy",
		minDate: 0,
		changeMonth: false,
		numberOfMonths: 2,
		beforeShow: function() {
			$(".ui-datepicker").addClass('raj_datepicker');
		}
		
	});
	



});

$(document).ready(function(){
   $("#train_form").submit(function(){
		
	
/* $(".c_guest_hotel").click(function() { */
	$(".custformerror").replaceWith("");
	var hiturl = $("#site_url").val();
	var form = $("#train_form");
	

	$.ajax({
			type : "POST",
			url : hiturl + "train/query_train_ajax",
			data : $("#train_form").serialize(),
			cache : false,
				beforeSend : function() {
				$("#trinquery").modal('show');								
		        },	
			success : function(data) {
				
				var fdata=JSON.parse(data);
				 if (fdata.status_code == 1) {
					 
					 $.each(fdata.error_message, function(key, val) {
					$("#trinquery").modal('hide');
							$('[name="'+ key +'"]', form).after(val);
					  });
				 } else if(fdata.status_code == 0){
					 $('#train_form')[0].reset();
				   $("#trinquery").modal('hide');
				   
				        swal.fire({
  title: '<span style  =  "font-size:14px; color:red">Thanks,Our sales executive team Contact to shortaly</span>',
  type: 'info',
  animation: true,
  customClass: {
    popup: 'animated tada'
  }
	  }); 
					
				 }
			}
		});
		
		
		
		  return false;
});
});









 




			
			
			
			
			
			
			