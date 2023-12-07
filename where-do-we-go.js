import { places } from "./where-do-we-go.data.js";

export function explore() {
  const orderedPlaces = places.sort(compareCoordinates);

  const compass = createCompass();

  let oldValue = 0;
  let newValue = 0;
  let scrolled = false;

  window.addEventListener('scroll', () => {
    newValue = window.pageYOffset;
    scrolled = true;

    compass.innerHTML = oldValue < newValue ? 'S' : 'N';

    oldValue = newValue;
  });

  const locationAnchor = createLocationAnchor(orderedPlaces[0]);
  document.body.append(locationAnchor);

  createSections(orderedPlaces);

  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting === true) {
        let val = Math.round(window.scrollY / window.innerHeight);
        updateLocationAnchor(locationAnchor, orderedPlaces[val]);
      }
    });
  }, { threshold: [0.5] });

  const sections = document.querySelectorAll('section');
  sections.forEach((section) => observer.observe(section));
}

function compareCoordinates(a, b) {
  let [aLat, aLon] = getDMS(a.coordinates);
  let [bLat, bLon] = getDMS(b.coordinates);

  return bLat - aLat || bLon - aLon;
}

function getDMS(coordinates) {
  let [lat, lon] = coordinates.split(' ');
  return [convertDMStoDecimal(lat), convertDMStoDecimal(lon)];
}

function convertDMStoDecimal(dms) {
  let [deg, min, sec] = dms.match(/[0-9]+/g).map(Number);
  return deg + min / 60 + sec / 3600;
}

function createCompass() {
  const compass = document.createElement('div');
  compass.className = 'direction';
  compass.innerHTML = 'N';
  document.body.append(compass);
  return compass;
}

function createLocationAnchor(place) {
  const locationAnchor = document.createElement('a');
  locationAnchor.className = 'location';
  locationAnchor.innerHTML = `${place.name}\n${place.coordinates}`;
  locationAnchor.style.color = place.color;
  locationAnchor.href = `https://www.google.com/maps/place/${place.coordinates}`;
  locationAnchor.target = '_blank';
  return locationAnchor;
}

function updateLocationAnchor(anchor, place) {
  anchor.innerHTML = `${place.name}\n${place.coordinates}`;
  anchor.style.color = place.color;
  anchor.href = `https://www.google.com/maps/place/${place.coordinates}`;
  console.log('TEST', anchor.href.split('%C2%B0').join('°').split('%22').join('"').split('%20').join(' '));
}

function createSections(places) {
  places.forEach((place, index) => {
    const newSection = document.createElement('section');
    newSection.id = index.toString();
    let imageLoc = place.name.toLowerCase().split(',')[0].split(' ').join('-');
    newSection.style.background = `URL('./where-do-we-go_images/${imageLoc}.jpg')`;
    document.body.append(newSection);
  });
}
