import { tileLayer } from "leaflet"

const mapOptions =  {
    layers: [ 
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }) 
    ],
    zoom: 5
}

export { mapOptions } 