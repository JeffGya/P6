$(document).ready(function(){
	$('#submit').click(function(){
		var passCode =$('#pass').val();
		if(passCode=="passcode")
		{
			window.location.replace("page_2.html");
			return false;
		} else {
			$('#dis').slideDown().html('<span class="red">Please type a correct password</span>');
			return false;
		}
	});
});

