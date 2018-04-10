import { Injectable } from '@angular/core';
import { XfinityData } from './xfinity-data';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class XfinityServiceService {
  
  private _xfinityDataUrl = './assets/xfinity-data.json'; 
  constructor(private _http: Http) { }
  
  getAllData(): Observable<XfinityData[]> {
    return this._http.get(this._xfinityDataUrl )
    .map((response: Response) => <XfinityData[]> response.json())
    //.do(data => console.log('All: ' +  JSON.stringify(data)))
    .catch(this.handleError);
  }
  
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
