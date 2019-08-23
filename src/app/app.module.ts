import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { MapComponent } from './map/map.component';
import { MapElementComponent } from './map-element/map-element.component';
import { CustomPipe } from './custom-pipe';
import { DataService } from './data-service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CustomPipe,
    MapElementComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],exports:[
    CustomPipe,
  ],providers:[
DataService
  ],
  bootstrap: [AppComponent],
  entryComponents: [MapElementComponent]
})
export class AppModule { }
