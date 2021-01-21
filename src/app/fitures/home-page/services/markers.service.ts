import { Injectable } from "@angular/core";
import { icon, latLng, Marker, marker, Point, tileLayer } from 'leaflet';
import { IBonuse, ILocation } from "../../../core/interfaces";
import { NgElement, WithProperties } from '@angular/elements';
import { PopupComponent } from '../components/popup-component/popup.component'

@Injectable()
export class MarkersService{
    markerIco = icon({
        iconUrl: '/assets/icons/marker.ico',
        iconSize:     [32, 32],
        iconAnchor:   [32, 32],
        popupAnchor:  [-15, -35]
    });    

    bonuseLocationsMarkersGenerator(bonuse: IBonuse): Marker[]{
        const markers: Marker[] = bonuse.locations.map( location =>{
            const newMarker: Marker = marker([location.latitude, location.longitude],{icon: this.markerIco});
            newMarker.bindPopup((layer) => { 
                const popupEl: NgElement & WithProperties<PopupComponent> = document.createElement('popup-element') as any; 
                popupEl.description = bonuse.description;
                popupEl.title = bonuse.type; 
                return popupEl; }, {maxWidth: 100});
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