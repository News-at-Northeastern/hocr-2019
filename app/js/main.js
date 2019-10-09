function mobilecheck() { return (window.innerWidth <= 768); }

mapboxgl.accessToken = 'pk.eyJ1IjoidG1hY2hhZG9udSIsImEiOiJjanVjdDFudDMwMDR4NGRtdGJ4NndiaW9pIn0.JS0ffUQym0L07752GAwMFg';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [-71.129700, 42.363347],
    zoom: 13,
    bearing: 0,
    pitch: 0
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

// On every scroll event, check which element is on screen
window.onscroll = function() {
    var mapelement = document.getElementById('map');
    if (!mapelement.classList.contains("mapfix") && isElementAtTop('map') && !isElementPassed('finish')) {
        mapelement.classList.add("mapfix");
    }
    else if (mapelement.classList.contains("mapfix") && !isElementAtTop('overview') && !mobilecheck()) {
        mapelement.classList.remove("mapfix");
    }
    else if (mobilecheck() && mapelement.classList.contains("mapfix") && (document.getElementById('overview').getBoundingClientRect().top > window.innerHeight*0.5)) {
        mapelement.classList.remove("mapfix");
    }
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
        return bounds.bottom <= 0;
    }
}
