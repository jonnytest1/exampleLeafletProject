import { Component, OnInit, ViewChildren, ComponentFactoryResolver, Injectable, Injector, createInjector, ApplicationRef } from '@angular/core';
//import L = require('leaflet');
import { MapElementComponent } from '../map-element/map-element.component';
import * as L from 'leaflet';
import { createCustomElement, NgElementConstructor } from "@angular/elements"
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  popupComponentRef: any;

  constructor(private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver) {

  }

  ngOnInit() {

    var mymap = L.map('map').setView([51.505, -0.09], 13);

    var marker = L.marker([51.5, -0.09]).addTo(mymap);

    const element = document.createElement('app-map-element');
    const factory = this.componentFactoryResolver.resolveComponentFactory(MapElementComponent);
    this.popupComponentRef = factory.create(this.injector, [], element);
    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(this.popupComponentRef.hostView);

    // Listen to the close event
    this.popupComponentRef.instance.test = "a";

    marker.bindPopup(element);

  }

  increase() {
    this.popupComponentRef.instance.test += "1"
  }


}
