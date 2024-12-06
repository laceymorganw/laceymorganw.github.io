var api_key = "Secret Key";

var map = L.map('map').setView([40.69371, -73.98596], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var locationMarker = L.icon({
    iconUrl: './images/icon-location.svg',
    iconSize:     [35, 45], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
});


updateMap = (updateMap = [40.69371, -73.98596]) => {
    map.setView(updateMap, 13);
    L.marker((updateMap),{icon: locationMarker}).addTo(map);
}

function getIP() {
    const ip = document.getElementById('userIP').value;
    $(function () {
        $.ajax({
            url: "https://geo.ipify.org/api/v1",
            data: { apiKey: api_key, ipAddress: ip },
            success: function (data) {
                //$("body").append("<pre>" + JSON.stringify(data, "", 2) + "</pre>");
                $("#currentIP").html(data.ip);
                $("#city").html(data.location.city);
                $("#zip").html(data.location.postalCode);
                $("#time").html("UTC " + data.location.timezone);
                $("#isp").html(data.isp);
                updateMap([data.location.lat, data.location.lng]);
            }
        });
    });
}
