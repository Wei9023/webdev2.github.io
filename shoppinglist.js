/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-05-30 20:55:59
 * @version $Id$
 */

//check off specific todos by clicking
$("ul").on("click", "li" , function(){
/*	if($(this).css("color") === "rgb(128, 128, 128)"){
		$(this).css("color", "rgb(0,0,0)");
		$(this).css("text-decoration", "NONE");
	}
	else{
		$(this).css("color", "gray");
		$(this).css("text-decoration", "line-through");
	} */
	$(this).toggleClass("completed");	
})

$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if(event.which ===13){
//		grabbing new todo text from input
		var todoText = $(this).val();
		//$(this).val("");
		//creat a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
		console.log($("input[type='text']").val());
		$("#inp").val("");
	}
	
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
})