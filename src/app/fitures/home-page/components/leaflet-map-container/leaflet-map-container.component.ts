import { Component, Input, OnInit } from '@angular/core';
import { LatLng, latLng } from 'leaflet';
import { mapOptions } from 'constants/leaflet-map.constants';

@Component({
  selector: 'leaflet-map-container',
  templateUrl: './leaflet-map-container.component.html',
  styleUrls: ['./leaflet-map-container.component.scss']
})
export class LeafletMapContainerComponent implements OnInit {
  @Input() center: LatLng = latLng(48.6473728,29.7402368);
  @Input() layers: any = [];

  options ={ ...mapOptions, center: this.center };

  ngOnInit(): void {
  }

}
