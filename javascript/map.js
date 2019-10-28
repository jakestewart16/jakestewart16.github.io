
  var mymap = L.map('mapid');
  var options = {
    key: geocoder_api_key,
    limit: 10
  };
  var control = L.Control.openCageSearch(options).addTo(mymap);
  /*
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox.mapbox-traffic-v1',
    accessToken: mapbox_access_token
  }).addTo(mymap);
  */
  L.tileLayer('https://tile.memomaps.de/tilegen/{z}/{x}/{y}.png', {
  }).addTo(mymap);
  /*
  var marker = L.marker([51.5, -0.09]).addTo(mymap);
  var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
  }).addTo(mymap);
  var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
  ]).addTo(mymap);
  var polyline = L.polyline([
    [51.506, -0.08],
    [51.502, -0.06],
    [51.507, -0.047]
  ]).addTo(mymap);
  marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
  circle.bindPopup("I am a circle.");
  polygon.bindPopup("I am a polygon.");

  marker.on('click', function(e){
    mymap.setView(e.latlng, 14);
  });

  circle.on('click', function(e){
    mymap.setView(e.latlng, 13);
  });

  polygon.on('click', function(e){
    mymap.setView(e.latlng, 13);
  });

  var ZoomViewer = L.Control.extend({
    onAdd: function(){
      var gauge = L.DomUtil.create('div');
      gauge.style.width = '200px';
      gauge.style.background = 'rgba(255,255,255,0.5)';
      gauge.style.textAlign = 'left';
      mymap.on('zoomstart zoom zoomend', function(ev){
        gauge.innerHTML = 'Zoom level: ' + mymap.getZoom();
      })
      return gauge;
    }
  });

  (new ZoomViewer).addTo(mymap);
  */
  mymap.setView([0, 0], 1);

  var tajmahal = L.marker([27.174961, 78.042385]).addTo(mymap);
    tajmahal.bindPopup("<b>Taj Mahal</b><br>The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.").openPopup();
  //var tajImg = '<href ="https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-0-20151104113424.jpg"/>';
    //tajImg.bindPopup("<br>https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-0-20151104113424.jpg.").openPopup();
  var wallofchina = L.marker([40.334245, 116.477652]).addTo(mymap);
    wallofchina.bindPopup("<b>The Great Wall of China</b><br>The Great Wall of China is the collective name of a series of fortification systems generally built across the historical northern borders of China to protect and consolidate territories of Chinese states and empires against various nomadic groups of the steppe and their polities.").openPopup();

  var petra = L.marker([30.328611, 35.441944]).addTo(mymap);
    petra.bindPopup("<b>The Petra</b><br>The Petra, originally known to its inhabitants as Raqmu, is a historical and archaeological city in southern Jordan.").openPopup();

  var jesus = L.marker([-22.951389, -43.2108334]).addTo(mymap);
    jesus.bindPopup("<b>Christ the Redeemer</b><br>Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot.").openPopup();

  var machu = L.marker([-13.163056, -72.545556]).addTo(mymap);
    machu.bindPopup("<b>Machu Picchu</b><br>Machu Picchu is a 15th-century Inca citadel, located in the Eastern Cordillera of southern Peru, on a 2,430-metre mountain ridge.").openPopup();

  var itza = L.marker([20.682778, -88.569167]).addTo(mymap);
    itza.bindPopup("<b>Chichen Itza</b><br>Chichen Itza was a large pre-Columbian city built by the Maya people of the Terminal Classic period. The archaeological site is located in Tinúm Municipality, Yucatán State, Mexico.").openPopup();

  var rome = L.marker([41.890169, 12.492269]).addTo(mymap);
    rome.bindPopup("<b>Roman Colosseum</b><br>The Colosseum, also known as the Flavian Ampitheatre, is an oval amphitheatre in the centre of the city of Rome, Italy.").openPopup();

    var roads = L.mapkitMutant({
    	type: 'hybrid',

    	authorizationCallback: function(done) {
    		done("Your authorization token goes here")
    	},
    	language: 'en',
    	debugRectangle: false
    }).addTo(mymap);
