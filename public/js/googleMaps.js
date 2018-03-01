function initMap() {
	// add your code here
	var ucsd_ltlng = {lat:32.878742, lng:-117.235932};

	//create a map object and spcify the DOM element for display
	var map = new google.maps.Map(document.getElementById('map'), {
		center: ucsd_ltlng,
		zoom: 15
	});

	var marker = new google.maps.Marker({
		position: ucsd_ltlng,
		map: map,
		title: "UCSD"
	});
}