import { OnInit, ElementRef, Input, Component, ComponentFactory, Injectable } from '@angular/core';


@Component({
  selector: 'app-map-element',
  templateUrl: './map-element.component.html',
  styleUrls: ['./map-element.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class MapElementComponent {

  test: string = "hallo"


  constructor() {
  }

} 
