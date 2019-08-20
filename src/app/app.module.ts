import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { MapComponent } from './map/map.component';
import { MapElementComponent } from './map-element/map-element.component';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapElementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [MapElementComponent]
})
export class AppModule { }
