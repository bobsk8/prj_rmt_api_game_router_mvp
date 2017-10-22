import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ServiceModel } from "../model/service-model";
import { SolicitarTroca } from '../model/solicitar-troca';

@Injectable()
export class SolicitarTrocaService extends ServiceModel<any> {

  constructor(
    http: Http
  ) {
    super('v1/solicitar-trocas', http);
  }

  solicitarTroca(solicitarTroca: SolicitarTroca): Observable<SolicitarTroca> {
    return this.http.post(this.apiEndpoint, solicitarTroca, this.options)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }

}
