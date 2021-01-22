import { Component, Input, OnInit } from '@angular/core';
import { Marker, LatLng, latLng } from 'leaflet';;
import { Observable } from 'rxjs';
import { ApiService } from 'services/api.service';
import { LocationService } from 'services/location.service';
import { MarkersService } from '../../services/markers.service';
import { IBonus } from 'interfaces/index';

@Component({
  selector: 'leaflet-map-view',
  templateUrl: './leaflet-map-view.component.html',
  styleUrls: ['./leaflet-map-view.component.scss']
})
export class LeafletMapViewComponent implements OnInit {
  userLocation$: LatLng | null = null; 
  bonuses$: Observable<IBonus[]>;
  markers : Marker[];

  constructor(
    private api: ApiService,
    private markersService: MarkersService,
    private location: LocationService
  ) {}

  ngOnInit(): void {
    this.location.getUserLocation();
    this.userLocation$ = latLng(0.000000,0.000000);
    this.bonuses$ = this.api.getBonuses();
    this.bonuses$.subscribe((bonuss: IBonus[]) => {
      this.markers = this.markersService.createMarkersFromBonuses(bonuss);
    })
  }
}
