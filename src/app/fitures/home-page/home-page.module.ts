import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { LocationService } from "src/app/core/services/location.service";
import { MarkersService } from "src/app/core/services/markers.service";
import { LeafletMapContainerComponent } from "./components/leaflet-map-container/leaflet-map-container.component";
import { LeafletMapViewComponent } from "./components/leaflet-map-view/leaflet-map-view.component";

@NgModule({
    imports: [
        CommonModule,
        LeafletModule
    ],
    declarations: [
        LeafletMapContainerComponent, 
        LeafletMapViewComponent,
    ],
    exports: [LeafletMapViewComponent],
    providers: [MarkersService,LocationService],
})
export class HomePageModule{}