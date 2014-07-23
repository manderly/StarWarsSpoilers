$(document).ready(function () {
	//select Episode I by default
	$(".nav li:first").addClass('tabSelected');
	$("#ep1").show();
	var episodeNum = 1;

	var passcode = $("#ep1").data("passcode");
	$(".printPasscode").html(passcode);

	//attach the passcode prompt to each plot
	$('.passcodePrompt').insertAfter($(".plot"));

	//tab seletion and content showing/hiding logic
	$(".tab").click(function() {
		episodeNum = $(this).val();
		passcode = $("#ep"+episodeNum).data("passcode");
		//highlight existing tab, unhighlight the rest
		$(".tab").removeClass('tabSelected');
		$(this).addClass('tabSelected');
		
		$(".contents").hide(); //hide all the contents divs
		$("#ep" + episodeNum).fadeIn(); //show just the selected film contents
		$("#ep" + episodeNum).find(".printPasscode").html(passcode);
	});

	//accept user passcode and reveal selected film's ending
	$(".reveal").click(function() {
		var input = $("#ep"+episodeNum).find(".passcodeInput").val();
		if (input.toLowerCase() == passcode.toLowerCase()) {
			$("#ep" + episodeNum).find(".ending").fadeIn(500);
			$("#ep" + episodeNum).find(".passcodePrompt").hide();
		} else {
			alert(input);
			$(".error").html("");
			$(".error").append("Enter the passcode.");
		}
	});
});