import { Injectable } from "@angular/core";
import { LatLng, latLng } from 'leaflet';
import { ApiService } from "src/app/api/api.service";
import { IBonuse, ILocation } from "../interfaces";

@Injectable()
export class LocationService{
    constructor(private api: ApiService){}
    getUserLocation(): void{
        if(!navigator.geolocation){
            navigator.permissions.query({ name: 'geolocation' }).then((data: any) => {
                console.log(data);
            })
        }
        else{
            navigator.geolocation.getCurrentPosition(position => {
                const city$ = this.api.getCity(position.coords.latitude,position.coords.longitude);
                city$.subscribe(data => {
                    console.log(`city: ${data.city} \nprincipalSubdivision: ${data.principalSubdivision} \nlocality: ${data.locality}`);
                })
            });
        }
    }
}