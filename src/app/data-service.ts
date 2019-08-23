import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DataService{
 

    baseOffset=location.href;

    constructor(private http:HttpClient){}

    getMarkers():Observable<Array<number>>{
        return this.http.get(this.baseOffset+'/assets/test.json')
            .pipe(map((obj:any)=>obj.ids));
    }

    getID(id: number):Observable<any> {
        return this.http.get(this.baseOffset+'/assets/test.json')
        .pipe(
            map((obj:any)=>obj.data),
            map((dataArray:Array<any>)=>dataArray.find(el=>el.id==id)),
            map(obj=>JSON.stringify(obj))
        );
    }
}