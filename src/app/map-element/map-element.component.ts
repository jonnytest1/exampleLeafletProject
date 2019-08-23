import { OnInit, ElementRef, Input, Component, ComponentFactory, Injectable, ChangeDetectorRef } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Popup } from 'leaflet';
import { popupBase as PopupBase } from '../map/map.component';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data-service';


@Component({
  selector: 'app-map-element',
  templateUrl: './map-element.component.html',
  styleUrls: ['./map-element.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class MapElementComponent implements PopupBase,OnInit {
  subscribe(observable: Subject<string>) {
    this.test=observable;
  }
  ngOnInit(): void {
    console.log('init')
    this.data=this.dService.getID(this.id);

  }
  refresh(){
    this.change.detectChanges();
  };
  
  data:Observable<any>
  id:number;

  test: Observable<string>;

  testData:string;
  setId(id: number){
    this.id=id;
  };

  constructor(
      private change:ChangeDetectorRef,
      private dService:DataService
  ) {
  }

} 
