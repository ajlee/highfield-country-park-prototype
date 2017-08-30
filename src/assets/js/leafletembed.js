$(document).ready(function() {

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

});
