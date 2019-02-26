import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subscribe } from './subscribe';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  _url = "http://localhost:2000";

  constructor(private _http : HttpClient) {}
  subscribe(user: Subscribe){
    return this._http.post<any>(this._url,user);
}
}