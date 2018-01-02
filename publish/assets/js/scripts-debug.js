$(document).ready(function(){
    $("a").tooltip();
});



/*
 * Prevent the contact form from reloading the page and replace with confirmation
 * TODO: Get submit working when hosting on bitballoon
 */
$(document).ready(function() {
    if ($('contactForm').length) {
        $('#contactForm').validator().on('submit', function (e) {
            if (!e.isDefaultPrevented()) {
                msg = "<p>" +
                    "<span id='thankyou'>Thank you for contacting us. We will be in touch shortly.</span>" +
                    "</p>" +
                    "<hr/>" +
                    "<a href='#' class='btn' data-dismiss='modal'>OK</a>";
                e.preventDefault(); //Prevents default submit
                var form = $(this);
                $(form).fadeOut(500, function(){
                    form.html(msg).fadeIn();
                });
            }
        })
    }
});


$(document).ready(function() {

  // if there is a map element on this page then initiate the map
  //
  if ($('#map').length) {

    var map;
    var ajaxRequest;
    var plotlist;
    var plotlayers=[];

    function initmap() {

      var greenIcon = L.icon({
          iconUrl: 'assets/images/map/leaf-green.png',
          shadowUrl: 'assets/images/map/leaf-shadow.png',

          iconSize:     [38, 95], // size of the icon
          shadowSize:   [50, 64], // size of the shadow
          iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
          shadowAnchor: [4, 62],  // the same for the shadow
          popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      });

      // set up the map
      map = new L.Map('map');

      // create the tile layer with correct attribution
      var osmUrl='https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=e42bf3699b784300b9c79352c44ca46a';
      var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
      var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib, layers: ['C']});

      L.marker([53.4391,-2.1770], {icon: greenIcon}).addTo(map).bindPopup("Highfield Country Park");
      L.marker([53.44151,-2.18138], {icon: greenIcon}).addTo(map).bindPopup("Fallowfield Loop Cycle Route");
      L.marker([53.43862,-2.18654], {icon: greenIcon}).addTo(map).bindPopup("192 Bus Stop to Manchester & Stockport");
      L.marker([53.44243,-2.19058], {icon: greenIcon}).addTo(map).bindPopup("Tesco Car Park");
      L.marker([53.4449,-2.1929], {icon: greenIcon}).addTo(map).bindPopup("Levenshulme Train Station");

      map.setView(new L.LatLng(53.4391,-2.1770),15);
      map.addLayer(osm);
    }

    initmap();
  }

});

$(document).ready(function() {

  // If there is a news list and sort filter on this page
  // use the filter buttons to filter by event or news type
  if ($('#news-events-list').length && $('.sort-filter').length) {

    // options to use in filter and sort - matches class names
    var options = {
      valueNames: [ 'name', 'description', 'category' ]
    };

    // define button IDs
    var featureList = new List('news-events-list', options);
    var filterNewsButton = $("#filter-news");
    var filterEventsButton = $("#filter-events");
    var filterResetButton = $("#filter-reset");


    // filter by news items
    filterNewsButton.click(function(){
      featureList.filter(function(item) {

        if (item.values().category == "News") {
          return true;
        } else {
          return false;
        }
      });
      return false;
    });

    // filter by event items
    filterEventsButton.click(function(){
      featureList.filter(function(item) {

        if (item.values().category == "Event") {
          return true;
        } else {
          return false;
        }
      });
      return false;
    });

    // reset filter
    filterResetButton.click(function(){
      featureList.filter(function(item) {
        return true;
      });
      return false;
    });
  }
});
