$(document).ready(function(){
	$('#submit').click(function(){
		var passCode =$('#pass').val();
		if(passCode=="passcode")
		{
			$('#dis').slideDown().html('<span>Correct</span>');
			window.location.replace("page_2.html");
			return false;
		} else {
			$('#dis').slideDown().html('<span>Please type a correct password</span>');
			return false;
		}
	});
});

