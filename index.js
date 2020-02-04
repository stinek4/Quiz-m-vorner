//********* MAP **********
mapboxgl.accessToken = 'pk.eyJ1Ijoic3RpbmVrNCIsImEiOiJjazUzbHVjcG0wYTE0M2xxdmoxcHZjMGxtIn0.l5vsPsDq82fSr15vLQH75g';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    center: [31.132512, 29.976530],
    zoom: 15,
    bearing: 40,
    pitch: 0
    });

//********* DESTINASJONER **********
const gizaSettings = {
    center: [31.132517, 29.977556],
        zoom: 16,
        duration: 8000,
        bearing: 40, 
        pitch: 0
}

const londonEyeSettings = {
    center: [-0.119564, 51.503491],
        zoom: 17,
        duration: 9000,
        bearing: 120,
        pitch: 130 
}

const atlantisSettings = {
    center: [-77.323522, 25.084886],
        zoom: 17,
        duration: 15000,
        bearing: 100,
        pitch: 2
}

const disneyWorldSettings = {
    center: [-81.549431, 28.375847],
        zoom: 15,
        duration: 7000,
        bearing: 130,
        pitch: 30
}

const rickAstleySettings = {
    center: [-2.635223, 53.454669],
        zoom: 13,
        duration: 8000,
        bearing: 90,
        pitch: 2
}

const ringerikeSettings = {
    center: [10.256245, 60.148564],
        zoom: 15,
        duration: 15000,
        bearing: 80,
        pitch: 20
}

// ************ FLY TO FUNCTIONS ****************

const locations = [gizaSettings,londonEyeSettings,atlantisSettings,disneyWorldSettings,rickAstleySettings,ringerikeSettings]
let i = 1;

document.querySelector("#next").addEventListener('click', function()  {
    const settings = locations[i];
    map.flyTo(settings);

    i++;
})

document.querySelector("#submit").addEventListener('click', function(){
    map.flyTo(ringerikeSettings);
});

// ************ INTRO ANIMASJON ****************

const course = document.querySelector("#course");
const p1h1 = document.querySelector("#p1-h1");

map.on("load", () => {

gsap.to("#p1-h1", {duration: 5,  y: 200, ease: "bounce"});
gsap.to("#course", {duration: 7, x: -30, y: -70});
gsap.to("#arrow", {duration: 30, y: -30, ease: "elastic"});
});