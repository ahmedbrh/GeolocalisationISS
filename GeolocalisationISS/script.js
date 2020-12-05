

//librarie leafleat.js


// add maps
const mymap = L.map('mapid').setView([0, 0], 1);
const attribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
   const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);


// icon sat

let myIcon = L.icon({
    iconUrl: 'satellite-icon-5558.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16],

   
});
const  marker = L.marker([0,0], {icon: myIcon}).addTo(mymap);


//pur data 
//API
let zoominorout= true ; 
const API_Url = "https://api.wheretheiss.at/v1/satellites/25544" ; 

 async function getData() {


const response = await fetch(API_Url) ; 
const data = await response.json() ; 

 console.log(data);

  //const laltitude = data.latitude;   
// const longitude = data.longitude ;
// ou bien 
// utiliser .textcontet // DOM 

const { latitude , longitude ,  visibility } = data
marker.setLatLng([latitude,longitude]); 
if(zoominorout) {
mymap.setView([latitude,longitude],3.5);
zoominorout=false
}
document.getElementById('log').textContent = longitude.toFixed(2); //  toFixed() permet de formater un nombre en notation à point-fixe ! 2,32332 => 2,32 
document.getElementById('lat').textContent = latitude.toFixed(2) ;
document.getElementById('vis').textContent  = visibility ; 

}
getData() ; 

setInterval (getData,1000) ;  // without reloading the page...1s achaque iteration  
