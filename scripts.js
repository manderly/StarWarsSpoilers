$(document).ready(function () {
	//select Episode I by default
	$(".nav li:first").addClass('tabSelected');
	$("#ep1").show();
	var episodeNum = 1;

	//attach the passcode prompt to each plot
	$('.passcodePrompt').insertAfter($(".plot"));

	//tab seletion and content showing/hiding logic
	$(".tab").click(function() {
		//highlight existing tab, unhighlight the rest
		$(".tab").removeClass('tabSelected');
		$(this).addClass('tabSelected');
		
		$(".contents").hide(); //hide all the contents divs
		episodeNum = $(this).val();
		$("#ep" + episodeNum).show(); //show just the selected film contents
	});

	//accept user passcode and reveal selected film's ending
	$(".reveal").click(function() {
		var input = $("input").val().toLowerCase();
		if (input == "jedi") {
			$("#ep" + episodeNum).find(".ending").show(1000);
			$("#ep" + episodeNum).find(".passcodePrompt").hide(1000);
		} else {
			$(".error").html("");
			$(".error").append("Enter the passcode.");
		}
	});

});