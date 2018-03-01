// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();


})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
 	initCamera();
 	initGestures();
 	initRSVPForm();
}

// init jQuery gestures  
function initGestures() {
	// add gestures listener here
	$(function() {
  	$(".judge-img").bind("taphold", tapholdHandler);

  	function tapholdHandler(event){
  		var targetIDPrefix = event.target.id;
  		//$(event.target).addClass("taphold");
  		$("#"+targetIDPrefix + "-bio").show();
  	}
  });
}

// init RSVP form submit listener
function initRSVPForm() {
  // add your code here
  $('#rsvpForm').submit(function(e) {

  	// Prevent default submit + reload (we only want the submit part)
  	e.preventDefault();
  	console.log("submitting form...");
  	var rsvpEmail = $('#rsvpEmail').val();
  	//send the POST request
  	$.post('addRSVP', {rsvpEmail: rsvpEmail}, postCallback);

  	function postCallback(res) {
  		alert("RSVP form sucessfully submitted");
  		$('#rsvpEmail').val(''); //clear form
  	}
  });
}
