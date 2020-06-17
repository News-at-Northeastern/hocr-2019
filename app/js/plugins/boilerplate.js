function mobilecheck() { return (window.innerWidth <= 768); }

mapboxgl.accessToken = 'pk.eyJ1IjoidG1hY2hhZG9udSIsImEiOiJjanVjdDFudDMwMDR4NGRtdGJ4NndiaW9pIn0.JS0ffUQym0L07752GAwMFg';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [-71.129700, 42.363347],
    zoom: 13,
    bearing: 0,
    pitch: 0,
    interactive: false
});

map.on('load', function() {


    map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-71.108619, 42.352574]
                        },
                        "properties": {
                            "title": "Start"
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-71.135380, 42.367429]
                        },
                        "properties": {
                            "title": "End"
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-71.109588, 42.356637]
                        },
                        "properties": {
                            "title": "Boston University Bridge"
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-71.116776, 42.361251]
                        },
                        "properties": {
                            "title": "River Street Bridge"
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-71.118484, 42.365177]
                        },
                        "properties": {
                            "title": "Western Avenue Bridge"
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-71.118221, 42.368415]
                        },
                        "properties": {
                            "title": "John W. Weeks Footbridge"
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-71.123179, 42.369028]
                        },
                        "properties": {
                            "title": "Anderson Memorial Bridge"
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-71.132737, 42.371789]
                        },
                        "properties": {
                            "title": "Eliot Bridge"
                        }
                    }
                ]
            }
        },
        "layout": {
            // "icon-image": "{icon}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 1.5],
            "text-anchor": "top",
        },
        "paint": {
            "text-color": "#ffffff"
        }
    });

    map.addLayer({
        "id": "route",
        "type": "line",
        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [-71.108619, 42.352574],
                        [-71.110219, 42.352659],
                        [-71.110601, 42.352667],
                        [-71.111726, 42.352734],
                        [-71.113015, 42.352969],
                        [-71.113968, 42.353410],
                        [-71.115865, 42.354306],
                        [-71.116416, 42.354713],
                        [-71.117055, 42.356493],
                        [-71.116733, 42.358466],
                        [-71.116741, 42.361225],
                        [-71.116862, 42.364230],
                        [-71.117282, 42.367379],
                        [-71.118120, 42.368537],
                        [-71.121695, 42.368643],
                        [-71.123147, 42.369094],
                        [-71.124771, 42.369894],
                        [-71.126291, 42.372248],
                        [-71.128384, 42.373685],
                        [-71.130293, 42.374025],
                        [-71.132979, 42.372978],
                        [-71.133244, 42.372199],
                        [-71.132781, 42.371771],
                        [-71.131795, 42.370321],
                        [-71.131866, 42.369520],
                        [-71.132977, 42.368520],
                        [-71.135380, 42.367429]

                    ]
                },

            }
        },
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#b22222",
            "line-width": 4
        }
    });

    map.addLayer({
        "id": "finish",
        "type": "line",
        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [-71.1357789, 42.367916],

                        // [-71.108619, 42.352574],
                        [-71.135, 42.367058]

                    ]
                },

            }
        },
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#ffffff",
            "line-width": 5
        }
    });

    map.addLayer({
        "id": "start",
        "type": "line",
        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {

                    "title": "Start"
                },
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [-71.108640, 42.353307],
                        [-71.108630, 42.352055]

                    ]
                },

            }
        },
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#ffffff",
            "line-width": 5
        }
    });
});

var chapters = {
    'overview': {
        center: [-71.129700, 42.363347],
        zoom: 13,
        bearing: 0,
        pitch: 0
    },
    'start': {
        center: [-71.107867, 42.352555],
        zoom: 18.5,
        bearing: -80,
        pitch: 70,
        speed: 0.75
    },
    'river': {
        center: [-71.117061, 42.361054],
        zoom: 18,
        bearing: 0,
        pitch: 90,
        speed: 0.75
    },
    'weeks': {
        center: [-71.117651, 42.368204],
        zoom: 16,
        bearing: -60,
        pitch: 60,
        speed: 0.5
    },
    'eliot': {
        center: [-71.133133, 42.372397],
        zoom: 17,
        bearing: 180,
        pitch: 80,
        speed: 0.5
    },
    'finish': {
        center: [-71.135933, 42.367181],
        zoom: 16,
        bearing: 0,
        pitch: 0,
        speed: 0.5
    }
};

var geojson = {
  type: 'FeatureCollection',
  features: [
      {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-71.1106, 42.3527]
    },
    properties: {
      title: 'Grand Junction Railroad',
      description: 'Washington, D.C.'
    }
},
{
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [-71.116648, 42.361392]
  },
  properties: {
    title: 'River Street Bridge'
  }
},
{
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [-71.116684, 42.364274]
  },
  properties: {
    title: 'Western Avenue Bridge'
  }
},
{
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [-71.118241, 42.368391]
  },
  properties: {
    title: 'John W. Weeks Footbridge'
  }
},
{
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [-71.123035, 42.369144]
  },
  properties: {
    title: 'Anderson Memorial Bridge',
  }
},
{
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [-71.132707, 42.371833]
  },
  properties: {
    title: 'Herter Park Finish Line'
  }
}
]
};
//
// add markers to map
geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  // var el = document.createElement('div');
  // el.className = 'marker';
  // var popup = new mapboxgl.Popup()
  //   .setText(marker.properties.title);


  // make a marker for each feature and add to the map
  new mapboxgl.Marker()
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);
    // new mapboxgl.Marker()
    //     .setLngLat(marker.geometry.coordinates)
    //
    //     .addTo(map);




});
//
//
var geojson = {
    "type": "FeatureCollection",
    "features": [{
            "type": "Feature",
            "properties": {
                "icon": "../interactive/2019/10/hocr/assets/start_flags_icon.png",
                "iconSize": [50, 50],
                "title": "Start"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-71.108619, 42.352574]
            }
        },
        {
            "type": "Feature",
            "properties": {

                "icon": "../interactive/2019/10/hocr/assets/finish_line_icon.png",
                "iconSize": [50, 50],
                "title": "End"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-71.135380, 42.367429]
            }
        }
    ],
        "layout": {

            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"

        },
        "paint": {
            "text-color": "#ffffff"
        }
};

// add markers to map
geojson.features.forEach(function(marker) {
// create a DOM element for the marker
var el = document.createElement('div');
el.className = 'marker';
el.style.backgroundImage = 'url(js/'+ marker.properties.icon+ ')';
el.style.width = marker.properties.iconSize[0] + 'px';
el.style.height = marker.properties.iconSize[1] + 'px';

// el.addEventListener('click', function() {
// window.alert(marker.properties.message);
// });

// add marker to map
new mapboxgl.Marker(el)
.setLngLat(marker.geometry.coordinates)
.addTo(map);
});

// On every scroll event, check which element is on screen
window.onscroll = function() {
    var mapelement = document.getElementById('map');
    // fix map if user scrolls to it
    if (!mapelement.classList.contains("mapfix") && isElementAtTop('map') && !isElementPassed('finish')) {
        mapelement.classList.add("mapfix");
    }
    // un-fix map if user scrolls to top, desktop
    else if (!mobilecheck() && mapelement.classList.contains("mapfix") && !isElementAtTop('overview')) {
        mapelement.classList.remove("mapfix");
    }
    // un-fix map if user scrolls to top, mobile
    else if (mobilecheck() && mapelement.classList.contains("mapfix") && (document.getElementById('overview').getBoundingClientRect().top > window.innerHeight*0.5)) {
        mapelement.classList.remove("mapfix");
    }
    // un-fix map if user scrolls past it
    else if (mapelement.classList.contains("mapfix") && isElementPassed('finish')) {
        mapelement.classList.remove("mapfix");
    }
    var chapterNames = Object.keys(chapters);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

var activeChapterName = 'overview';
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    if (window.innerWidth <= 768){
        chapters[chapterName].zoom = 16;
    }

    map.flyTo(chapters[chapterName]);

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    if (mobilecheck()) {
        return bounds.top < window.innerHeight && bounds.bottom > (window.innerWidth * 0.66);
    } else {
        return bounds.top < window.innerHeight && bounds.bottom > 160;
    }
}

function isElementAtTop(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top <= 60;
}

function isElementPassed(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    if (mobilecheck()) {
        return bounds.bottom <= (window.innerHeight * 0.5);
    } else {
        return bounds.bottom <= (window.innerHeight * 0.25);
    }
}
