import { Injectable, Inject } from '@angular/core';

import { map } from 'rxjs/operators';

import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

//interfaces
import { IService } from '../interfaces/iservice';
import { IOpcionesHttp } from '../interfaces/iopciones-http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private _url = environment.apiUrl ;

  constructor(@Inject('IOpcionesHttp') private _opcionesHttp: IOpcionesHttp,
  private _http: Http) { }

  get(){
    return this._http
    .get(`${this._url}persona`,this._opcionesHttp.getOptions()).pipe(
      map(res => {
        return { ok: res.ok, code: res.status, message: res.json() };
      }))    
  }
}
