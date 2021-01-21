import { Injectable } from "@angular/core";
import { icon, latLng, Marker, marker, tileLayer } from 'leaflet';
import { IBonuse, ILocation } from "../interfaces";

@Injectable()
export class MarkersService{
    markerIco = icon({
        iconUrl: '/assets/icons/marker.ico',
        iconSize:     [32, 32],
        iconAnchor:   [32, 32],
        popupAnchor:  [-3, -76]
    });    

    bonuseLocationsMarkersGenerator(bonuse: IBonuse): Marker[]{
        const markers: Marker[] = bonuse.locations.map( location =>{
            const newMarker: Marker = marker([location.latitude, location.longitude],{icon: this.markerIco});
            newMarker.bindPopup(`<p>${bonuse.description}</p><p>${bonuse.discount}%</p>`).openPopup();
            return newMarker;
        }) 
        return markers;
    }

    createMarkersFromBonuses(bonuses: IBonuse[]): Marker[]{
        let markers: Marker[] = [];
        bonuses.map((bonuse: IBonuse) => {
            let bonuseLocationsMarkers = this.bonuseLocationsMarkersGenerator(bonuse);
            markers = [...markers, ...bonuseLocationsMarkers];
        });
        return markers;
    }
}