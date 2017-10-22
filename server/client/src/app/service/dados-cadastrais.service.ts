import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ServiceModel } from "../model/service-model";
import { DadoCadastral } from '../model/dado-cadastral';
import { Jogo } from '../model/jogo';
import { SolicitarTroca } from '../model/solicitar-troca';

@Injectable()
export class DadosCadastraisService extends ServiceModel<DadoCadastral> {

  constructor(
    http: Http
  ) {
    super('v1/dado-cadastrais', http);
  }

  getUserSession(): Observable<DadoCadastral> {
    return this.http.get(this.apiEndpoint + '/user-session', this.options)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }

  logout(): Observable<any> {
    return this.http.get(this.apiEndpoint + '/user-logout', this.options)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }

  login(Object): Observable<DadoCadastral> {
    return this.http.post(this.apiEndpoint + '/login', Object, this.options)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }

  create(Object): Observable<any> {
    return this.http.post(this.apiEndpoint, Object, this.options)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }

  getJogosByUserId(user_id: number): Observable<Jogo[]> {
    return this.http.get(this.apiEndpoint + '/' + user_id +  '/jogos', this.options)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }

  getSolicitacoes(user_id: number): Observable<SolicitarTroca[]> {
    return this.http.get(this.apiEndpoint + '/' + user_id +  '/solicitacoes', this.options)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }

  upload(formdata: FormData, user_id: number): Observable<any> {
    return this.http.post(this.apiEndpoint + '/' + user_id + '/upload', formdata)
      .catch(err => Observable.throw(err));
  }
  
}
