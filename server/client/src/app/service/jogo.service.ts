import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ServiceModel } from "../model/service-model";
import { Jogo } from '../model/jogo';

@Injectable()
export class JogoService extends ServiceModel<Jogo>  {
  
  constructor(
    http: Http
  ) {
    super('v1/jogos', http);
  }

  upload(formdata: FormData, jogo_id: number): Observable<any> {
    return this.http.post(this.apiEndpoint + '/upload/'+ jogo_id, formdata)
      .catch(err => Observable.throw(err));
  }

  getJogosDisponiveis(): Observable<Jogo[]> {
    return this.http.get(this.apiEndpoint + '/disponiveis', this.options)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }
}
