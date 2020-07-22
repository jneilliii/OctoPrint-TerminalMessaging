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
		    $('#terminal-output span:contains("Recv:")').addClass('received');
            $('#terminal-output span:contains("Send:")').addClass('sent');
        })
	}

	OCTOPRINT_VIEWMODELS.push({
		construct: TerminalmessagingViewModel,
		dependencies: [ "terminalViewModel" ],
		elements: []
	});
});
