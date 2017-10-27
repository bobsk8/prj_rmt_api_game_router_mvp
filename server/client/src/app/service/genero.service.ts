import { Injectable } from '@angular/core';
import { ServiceModel } from '../model/service-model';
import { Http } from '@angular/http';
import { Genero } from '../model/genero';

@Injectable()
export class GeneroService extends ServiceModel<Genero> {

  constructor(
    http: Http
  ) {
    super('v1/generos', http);
  }

}
