import { Component, Input, OnInit } from '@angular/core';
import { LatLng, latLng } from 'leaflet';
import { mapOptions } from '../../../../core/constants/leaflet-map.constants';

@Component({
  selector: 'leaflet-map-container',
  templateUrl: './leaflet-map-container.component.html',
  styleUrls: ['./leaflet-map-container.component.scss']
})
export class LeafletMapContainerComponent implements OnInit {
  @Input() center: LatLng = latLng(0.0000,0.0000);
  @Input() layers: any = [];
  
  options ={ ...mapOptions, center: this.center };

  ngOnInit(): void {
  }

}
