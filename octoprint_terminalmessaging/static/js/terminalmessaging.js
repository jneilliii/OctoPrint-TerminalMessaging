/*
 * View model for Terminal Messaging
 *
 * Author: jneilliii
 * License: MIT
 */
$(function() {
	function TerminalmessagingViewModel(parameters) {
		var self = this;

		self.terminalViewModel = parameters[0];

		self.terminalViewModel.log.subscribe(function(){
		    $('#terminal-output span:contains("Recv:")').addClass('received').text(function(){return $(this).text().replace('Recv: ','');});
            $('#terminal-output span:contains("Send:")').addClass('sent').text(function(){return $(this).text().replace('Send: ','');});
        })
	}

	OCTOPRINT_VIEWMODELS.push({
		construct: TerminalmessagingViewModel,
		dependencies: [ "terminalViewModel" ],
		elements: []
	});
});
