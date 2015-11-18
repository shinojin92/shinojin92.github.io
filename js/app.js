/**
 * Created by hojin on 2015-08-31.
 */


// Scrolls to the selected menu item on the page
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

/* google maps */
function initialize() {
    var locations=[
        ['Áý', 36.354347, 127.395424],
        ['ÇÐ±³', 36.764030, 127.281634]
    ];
    var map=new google.maps.Map(document.getElementById('map_view'), {
        zoom:9,
        center: new google.maps.LatLng(36.559186, 127.338529),
        mapTypeId: google.maps.MapTypeId.ROADMAP

    });
    var infowindow=new google.maps.InfoWindow();
    var marker, i;
    for(i=0; i<locations.length; i++) {
        marker=new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
};