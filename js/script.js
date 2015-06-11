/**
	.? JavaScript Document
	custom decktop screen key board functionanal code 
	@author : naveen Kumar PG
	@version 1.0
	@created June 12, 2015
*/
$(document).ready(function(){
	

	// Global declaration of variables
	var textarea = $("#typingarea");

	// click event for all li's on the ".keysholder" container
	$(".keysholder li").click(function(){
		
		// checking if the li has "data-function" data attribute 
		// if true - determines that some functionality needs to happen
		// if false - determines that just need to append the text to the text area
		var isfunctional = $(this).attr("data-function");
		if(isfunctional){
			var keyfinder = $(this).attr("data-value");
			presshandler(keyfinder);
		}else{
			// removing existing blinker if exists
			textarea.find(".blinker").remove();
			var currentKey = $(this).attr("data-value");

			// checking if the container classed container has class of "tocaps" (or) "shifted"
			var capscheck = $(".container").hasClass("tocaps") || $(".container").hasClass("shifted");
			if(capscheck){
				currentKey = currentKey.toUpperCase();
			}
			textarea.append(currentKey);

			// appending blinker 
			textarea.append('<span class="blinker">|</span>');
		}
		if($(this).attr("data-value") != "shift"){
			$(".container").removeClass("shifted");
		}
	});


	// swith case for "delete", "caps lock" and shift
	function presshandler(dataValue){
		switch(dataValue)
		{
		    case "capslock":
		        $(".container").toggleClass("tocaps");
		        $(".capslock").toggle();
		        break;
		    case "delete":
		        textarea.find(".blinker").remove();
				textarea.html(textarea.html().slice(0,-1));
				textarea.append('<span class="blinker">|</span>');
		        break;
		    case "shift":
		        $(".container").addClass("shifted");
		        break;
		} 

	}

});

