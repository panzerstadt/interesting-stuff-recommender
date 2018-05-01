// List of supported languages - Pulled February 8, 2018
// https://developers.google.com/maps/faq#languagesupport
var FULL_SUPPORTED_LANGUAGES = {
    'ar': 'ARABIC',
    'eu': 'BASQUE',
    'bg': 'BULGARIAN',
    'bn': 'BENGALI',
    'ca': 'CATALAN',
    'cs': 'CZECH',
    'da': 'DANISH',
    'de': 'GERMAN',
    'el': 'GREEK',
    'en': 'ENGLISH',
    'en-AU': 'ENGLISH (AUSTRALIAN)',
    'en-GB': 'ENGLISH (GREAT BRITAIN)',
    'es': 'SPANISH',
    'eu': 'BASQUE',
    'fa': 'FARSI',
    'fi': 'FINNISH',
    'fil': 'FILIPINO',
    'fr': 'FRENCH',
    'gl': 'GALICIAN',
    'gu': 'GUJARATI',
    'hi': 'HINDI',
    'hr': 'CROATIAN',
    'hu': 'HUNGARIAN',
    'id': 'INDONESIAN',
    'it': 'ITALIAN',
    'iw': 'HEBREW',
    'ja': 'JAPANESE',
    'kn': 'KANNADA',
    'ko': 'KOREAN',
    'lt': 'LITHUANIAN',
    'lv': 'LATVIAN',
    'ml': 'MALAYALAM',
    'mr': 'MARATHI',
    'nl': 'DUTCH',
    'no': 'NORWEGIAN',
    'pl': 'POLISH',
    'pt': 'PORTUGUESE',
    'pt-BR': 'PORTUGUESE (BRAZIL)',
    'pt-PT': 'PORTUGUESE (PORTUGAL)',
    'ro': 'ROMANIAN',
    'ru': 'RUSSIAN',
    'sk': 'SLOVAK',
    'sl': 'SLOVENIAN',
    'sr': 'SERBIAN',
    'sv': 'SWEDISH',
    'tl': 'TAGALOG',
    'ta': 'TAMIL',
    'te': 'TELUGU',
    'th': 'THAI',
    'tr': 'TURKISH',
    'uk': 'UKRAINIAN',
    'vi': 'VIETNAMESE',
    'zh-CN': 'CHINESE (SIMPLIFIED)',
    'zh-TW': 'CHINESE (TRADITIONAL)',
};
// ISO 3166-1 alpha-2 codes - Pulled February 8, 2018
// https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
var REGIONS = {
  AF: "Afghanistan",
  AX: "Åland Islands",
  AL: "Albania",
  DZ: "Algeria",
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctica",
  AG: "Antigua and Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BS: "Bahamas",
  BH: "Bahrain",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Belarus",
  BE: "Belgium",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermuda",
  BT: "Bhutan",
  BO: "Bolivia, Plurinational State of",
  BQ: "Bonaire, Sint Eustatius and Saba",
  BA: "Bosnia and Herzegovina",
  BW: "Botswana",
  BV: "Bouvet Island",
  BR: "Brazil",
  IO: "British Indian Ocean Territory",
  BN: "Brunei Darussalam",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BI: "Burundi",
  KH: "Cambodia",
  CM: "Cameroon",
  CA: "Canada",
  CV: "Cape Verde",
  KY: "Cayman Islands",
  CF: "Central African Republic",
  TD: "Chad",
  CL: "Chile",
  CN: "China",
  CX: "Christmas Island",
  CC: "Cocos (Keeling) Islands",
  CO: "Colombia",
  KM: "Comoros",
  CG: "Congo",
  CD: "Congo, the Democratic Republic of the",
  CK: "Cook Islands",
  CR: "Costa Rica",
  CI: "Côte d'Ivoire",
  HR: "Croatia",
  CU: "Cuba",
  CW: "Curaçao",
  CY: "Cyprus",
  CZ: "Czech Republic",
  DK: "Denmark",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic",
  EC: "Ecuador",
  EG: "Egypt",
  SV: "El Salvador",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  ET: "Ethiopia",
  FK: "Falkland Islands (Malvinas)",
  FO: "Faroe Islands",
  FJ: "Fiji",
  FI: "Finland",
  FR: "France",
  GF: "French Guiana",
  PF: "French Polynesia",
  TF: "French Southern Territories",
  GA: "Gabon",
  GM: "Gambia",
  GE: "Georgia",
  DE: "Germany",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Greece",
  GL: "Greenland",
  GD: "Grenada",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernsey",
  GN: "Guinea",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HT: "Haiti",
  HM: "Heard Island and McDonald Mcdonald Islands",
  VA: "Holy See (Vatican City State)",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran, Islamic Republic of",
  IQ: "Iraq",
  IE: "Ireland",
  IM: "Isle of Man",
  IL: "Israel",
  IT: "Italy",
  JM: "Jamaica",
  JP: "Japan",
  JE: "Jersey",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KP: "Korea, Democratic People's Republic of",
  KR: "Korea, Republic of",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: "Lao People's Democratic Republic",
  LV: "Latvia",
  LB: "Lebanon",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libya",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MO: "Macao",
  MK: "Macedonia, the Former Yugoslav Republic of",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall Islands",
  MQ: "Martinique",
  MR: "Mauritania",
  MU: "Mauritius",
  YT: "Mayotte",
  MX: "Mexico",
  FM: "Micronesia, Federated States of",
  MD: "Moldova, Republic of",
  MC: "Monaco",
  MN: "Mongolia",
  ME: "Montenegro",
  MS: "Montserrat",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Netherlands",
  NC: "New Caledonia",
  NZ: "New Zealand",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigeria",
  NU: "Niue",
  NF: "Norfolk Island",
  MP: "Northern Mariana Islands",
  NO: "Norway",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Palestine, State of",
  PA: "Panama",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippines",
  PN: "Pitcairn",
  PL: "Poland",
  PT: "Portugal",
  PR: "Puerto Rico",
  QA: "Qatar",
  RE: "Réunion",
  RO: "Romania",
  RU: "Russian Federation",
  RW: "Rwanda",
  BL: "Saint Barthélemy",
  SH: "Saint Helena, Ascension and Tristan da Cunha",
  KN: "Saint Kitts and Nevis",
  LC: "Saint Lucia",
  MF: "Saint Martin (French part)",
  PM: "Saint Pierre and Miquelon",
  VC: "Saint Vincent and the Grenadines",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Sao Tome and Principe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  RS: "Serbia",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SX: "Sint Maarten (Dutch part)",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  GS: "South Georgia and the South Sandwich Islands",
  SS: "South Sudan",
  ES: "Spain",
  LK: "Sri Lanka",
  SD: "Sudan",
  SR: "Suriname",
  SJ: "Svalbard and Jan Mayen",
  SZ: "Swaziland",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syrian Arab Republic",
  TW: "Taiwan",
  TJ: "Tajikistan",
  TZ: "Tanzania, United Republic of",
  TH: "Thailand",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad and Tobago",
  TN: "Tunisia",
  TR: "Turkey",
  TM: "Turkmenistan",
  TC: "Turks and Caicos Islands",
  TV: "Tuvalu",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates",
  GB: "United Kingdom",
  US: "United States",
  UM: "United States Minor Outlying Islands",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VE: "Venezuela, Bolivarian Republic of",
  VN: "Vietnam",
  VG: "Virgin Islands, British",
  VI: "Virgin Islands, U.S.",
  WF: "Wallis and Futuna",
  EH: "Western Sahara",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe",
};

var SUPPORTED_LANGUAGES = {
  'en': 'ENGLISH',
  'ja': 'JAPANESE',
  'zh-CN': 'CHINESE (SIMPLIFIED)',
  'zh-TW': 'CHINESE (TRADITIONAL)',
};



// The language/region dropdown listener.
function cbSelectChange(type) {
  if (type !== 'language' && type !== 'region') return;
  var code = this.options[this.selectedIndex].value;
  if (!code) return;
  var querystring = '';
  if (getUrlParameter(type)) {
    location.search = replaceUrlParameter(type, code);
  } else {
    if (!location.search) {
      querystring = '?' + type + '=' + code;
    } else {
      querystring = location.search + '&' + type + '=' + code;
    }
    location.href = location.origin + location.pathname + querystring;
  }
}

function initialize() {
  var langCode = getUrlParameter('language');
  // Try to be generous with accepting upper/lower case.
  if (langCode.length === 2) {
    langCode = langCode.toLowerCase();
  }
  var regionCode = getUrlParameter('region').toUpperCase();

  // Populate the language dropdown.
  var selectLanguage = document.getElementById('language');
  selectLanguage.options[0] =
      new Option('language', '', true, true);

  var fragment = document.createDocumentFragment();
  var language;
  var code;
  for (code in SUPPORTED_LANGUAGES) {
    language = SUPPORTED_LANGUAGES[code];
    fragment.append(new Option(language, code, false, false));
  }
  selectLanguage.appendChild(fragment);
  if (langCode) {
    selectLanguage.value = langCode;
  }

  // // Populate the region dropdown.
  // var selectRegion = document.getElementById('region');
  // selectRegion.options[0] =
  //     new Option('Change map region bias', '', true, true);

  // fragment = document.createDocumentFragment();
  // var region;
  // for (code in REGIONS) {
  //   region = REGIONS[code];
  //   fragment.append(new Option(region, code, false, false));
  // }
  // selectRegion.appendChild(fragment);
  // if (regionCode) {
  //   selectRegion.value = regionCode;
  // }

  // Set dropdown listeners.
  selectLanguage.onchange = function() {
    cbSelectChange.call(selectLanguage, 'language');
  };
  selectRegion.onchange = function() {
    cbSelectChange.call(selectRegion, 'region');
  };
}

let map;
let infoWindow;

// The callback for Maps JS API request.
function mapsLoaded() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var geocoder = new google.maps.Geocoder();
  infoWindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById('map-canvas'), {
      zoom: 16,
      center: {lat: 34.678395, lng: 135.4601304},
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_RIGHT,
      },
  });

  directionsDisplay.setMap(map);

      // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };

    // set center of map
    infoWindow.setPosition(pos);
    infoWindow.setContent('You are Here!');
    infoWindow.open(map);
    map.setCenter(pos);

    // do places search
    // pos has the updated latitude and longitude
    let service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: pos,
      radius: 1000,
    }, callback);

    function callback(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
      }
      else {
        window.alert(status);
        window.alert(results);
      }
    }
    
    function createMarker(place) {
      var placeLoc = place.geometry.location;
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });
    
      google.maps.event.addListener(marker, 'click', function() {
        infoWindow.setContent(place.name);
        infoWindow.open(map, this);
        calculateAndDisplayRoute(directionsService, directionsDisplay);
      });
    
      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
          directionsService.route({
          origin: pos,
          destination: place.geometry.location,
          travelMode: 'WALKING'
          }, function(response, status) {
          if (status === 'OK') {
              directionsDisplay.setDirections(response);
              var distance = 0;
              var duration = 0;
              for(i = 0; i < response.routes[0].legs.length; i++){
                 distance += parseFloat(response.routes[0].legs[i].distance.value);
                 duration += parseFloat(response.routes[0].legs[i].duration.value);
                     //for each 'leg'(route between two waypoints) we get the distance and add it to the total
              }   
              //console.log(distance + 'meters');
              //console.log(duration + 'seconds');
              //console.log((duration/60.0).toFixed(2) + 'minutes');

              var minutes_left = (duration/60.0).toFixed(2);
              infoWindow.setContent(place.name + " : " + minutes_left + "min");
              

          } else {
              window.alert('Directions request failed due to ' + status);
          }
          });
      }
    }



    // PROBABLY ALL CODE SHOULD BE INSIDE HERE
    }, function() {
    handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
  }






  // Add selection box to map controls.
  var control = document.getElementById('selection-box');
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(control);
  // Due to the time between when the map is loaded and the control div is
  // added to the page it creates a jarring effect. This is a best effort
  // to minimize that.
  google.maps.event.addListenerOnce(map, 'tilesloaded', function(e) {
    control.style.display = 'block';
  });
  google.maps.event.addListener(map, 'click', function(e) {
    geocoder.geocode({'latLng': e.latLng}, function(results, status) {
      var message = '';
      var errorDiv = document.getElementById('geocoding-error');
      if (status !== 'OK') {
        message = 'Geocoder failed. Please, try your request again.';
        errorDiv.innerText = message;
        errorDiv.style.display = 'block';
        return;
      }
      if (!results[0]) {
        message =
            'Geocoding found zero results. Please, try a different location.';
        errorDiv.innerText = message;
        errorDiv.style.display = 'block';
        return;
      }
      var marker = new google.maps.Marker({
        position: e.latLng,
        map: map,
      });
      infoWindow.setContent(results[0].formatted_address);
      infoWindow.open(map, marker);
    });
  });
  showDirections();
}

function showDirections() {
  // Remove directions list to prevent multiple directions listings.
  var directionsDisplay = new google.maps.DirectionsRenderer({
    map: map,
    preserveViewport: true,
    draggable: true,
  });
  directionsDisplay.setPanel(document.getElementById('directions-box'));
  var sampleRequest = {
    origin: 'Warsaw, Poland',
    destination: 'Berlin, Germany',
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC,
  };
  var directionsService = new google.maps.DirectionsService();
  directionsService.route(sampleRequest, function(response, status) {
    var message = '';
    var errorDiv;
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      message =
          'Something went wrong getting directions. ' +
          'Please, try your request again.';
      errorDiv = document.getElementById('directions-error');
      errorDiv.innerText = message;
      errorDiv.style.display = 'block';
    }
  });
}

// Utility to grab a parameter values.
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ?
      '' :
      decodeURIComponent(results[1].replace(/\+/g, ' '));
}
// Utility to change a parameter value.
function replaceUrlParameter(key, value) {
  var oldValue = getUrlParameter(key);
  var term = key + '=' + oldValue;
  var newTerm = key + '=' + value;
  return location.search.replace(term, newTerm);
}

