import { Component, Input, OnInit } from '@angular/core';
import { Marker, LatLng, latLng } from 'leaflet';;
import { Observable } from 'rxjs';
import { ApiService } from 'services/api.service';
import { LocationService } from 'services/location.service';
import { MarkersService } from '../../services/markers.service';
import { IBonus, IOffice } from 'interfaces/index';
import { OfficeService } from '../../services/offices.service';

@Component({
  selector: 'leaflet-map-view',
  templateUrl: './leaflet-map-view.component.html',
  styleUrls: ['./leaflet-map-view.component.scss']
})
export class LeafletMapViewComponent implements OnInit {
  userLocation$: LatLng | null = null; 
  bonuses$: Observable<IBonus[]>;
  offices$: Observable<IOffice[]>;
  layers : Marker[] = [];

  constructor(
    private api: ApiService,
    private markersService: MarkersService,
    private officeService: OfficeService,
    private location: LocationService
  ) {}

  ngOnInit(): void {
    this.location.getUserLocation();
    this.userLocation$ = latLng(0.000000,0.000000);
    this.bonuses$ = this.api.getBonuses();
    this.offices$ = this.api.getOffices();
    this.bonuses$.subscribe((bonuses: IBonus[]) => {
      this.layers = [
        ...this.layers, 
        ...this.markersService.createMarkersFromBonuses(bonuses)
      ];
      console.log('markers: ',this.layers);
    });

    this.offices$.subscribe((offices: IOffice[]) => {
      this.layers = [
        ...this.layers,
        ...this.officeService.createMarkersOfficesMarkers(offices)
      ];
      console.log('offices: ',this.layers);
    });
  }
}
