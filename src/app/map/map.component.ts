import { Component, OnInit, ViewChildren, ComponentFactoryResolver, Injectable, Injector, createInjector, ApplicationRef, ComponentRef, Type } from '@angular/core';
//import L = require('leaflet');
import { MapElementComponent } from '../map-element/map-element.component';
import * as L from 'leaflet';
import { createCustomElement, NgElementConstructor } from "@angular/elements"
import { of, Observable, Observer, Subscriber, Subject } from 'rxjs';
import { DataService } from '../data-service';
import { MulticastOperator, multicast } from 'rxjs/internal/operators/multicast';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {


  observer:Subject<any>;
  constructor(private injector: Injector,
    private applicationRef: ApplicationRef,
    private data:DataService,
    private componentFactoryResolver: ComponentFactoryResolver) {

  }

  ngOnInit() {

    var mymap = L.map('map').setView([51.505, -0.09], 13).addLayer(L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'));

   
    console.log('observable set');
    this.observer = new Subject<string>();

    //marker.bindPopup(element);

    let count=0;
    this.data.getMarkers().subscribe(markers=>{
      markers.forEach(markerId=>{
        const marker = L.marker([51.5+(count++/40), -0.09]).addTo(mymap);
        const myComponent=this.addPopup(MapElementComponent,marker);
        myComponent.subscribe(this.observer);
        myComponent.setId(markerId);
      })
    })
  }

  increase() {
    this.observer.next(Date.now());
  }


  addPopup<T extends popupBase>(component:Type<T>,marker:L.Marker):T{
    const element = document.createElement('app-map-element');
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    const popupComponentRef = factory.create(this.injector, [], element);
    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(popupComponentRef.hostView);
    const comp= popupComponentRef.instance;
    // Listen to the close event
  
    comp.refresh();
    marker.bindPopup(()=>element);

    return comp;
  }


}

export interface popupBase{

  setId:(id:number)=>void
  test:Observable<string>
  refresh:()=>void;
}
