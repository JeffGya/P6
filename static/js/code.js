$(document).ready(function(){
	$('#submit').click(function(){
		var passCode = $('#pass').val();
		if(passCode =="passcode")
		{
			$('#dis').slideDown().html('<span>Please type Username</span>');
			return false;
		}
	});
});

