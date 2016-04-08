
$(document).ready(function () {

    var url = "http://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&sensor=true";

    $.getJSON(url, function (json) {

        var address = json.results[0].formatted_address;
        console.log('Address : ', address);

        var latitude = json.results[0].geometry.location.lat;
        console.log('Latitude : ', latitude);

        var longitude = json.results[0].geometry.location.lng;
        console.log('Longitude : ', longitude);

        // Set the table td text
        $('#address').text(address);
        $('#latitude').text(latitude);
        $('#longitude').text(longitude);
    });

    var $myLink = $('a.myLink');

    $myLink.prop({
        href: url,
        title: 'Proveri ako ne radi. (Klikni me)'
    }).click(function (e) {
        e.preventDefault();
        window.open(this.href, '_blank');
    });


});