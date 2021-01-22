import { CommonModule } from "@angular/common";
import { Injector, NgModule } from "@angular/core";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { LocationService } from "services/location.service";
import { MarkersService } from "./services/markers.service";
import { LeafletMapContainerComponent } from "./components/leaflet-map-container/leaflet-map-container.component";
import { LeafletMapViewComponent } from "./components/leaflet-map-view/leaflet-map-view.component";
import { PopupComponent } from "./components/popup-component/popup.component";
import { createCustomElement } from "@angular/elements";
import { ModalComponent } from './components/modal-component/modal.component'
import { MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        LeafletModule,
        MatDialogModule,
    ],
    declarations: [
        LeafletMapContainerComponent, 
        LeafletMapViewComponent,
        PopupComponent,
        ModalComponent
    ],
    exports: [LeafletMapViewComponent],
    providers: [
        MarkersService,
        LocationService,
    ],
    entryComponents: [PopupComponent]
})
export class HomePageModule{
    constructor(private injector: Injector) {
        const PopupElement = createCustomElement(PopupComponent, {injector});
        customElements.define('popup-element', PopupElement);
      }
}