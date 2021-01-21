import { Component, Input, OnInit } from '@angular/core';
import { Marker, LatLng, latLng } from 'leaflet';;
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';
import { LocationService } from '../../../../core/services/location.service';
import { IBonuse } from '../../../../core/interfaces';
import { MarkersService } from '../../../../core/services/markers.service';

@Component({
  selector: 'leaflet-map-view',
  templateUrl: './leaflet-map-view.component.html',
  styleUrls: ['./leaflet-map-view.component.scss']
})
export class LeafletMapViewComponent implements OnInit {
  userLocation$: LatLng | null = null; 
  bonuses$: Observable<IBonuse[]>;
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
    this.bonuses$.subscribe((bonuses: IBonuse[]) => {
      this.markers = this.markersService.createMarkersFromBonuses(bonuses);
    })
  }
}
