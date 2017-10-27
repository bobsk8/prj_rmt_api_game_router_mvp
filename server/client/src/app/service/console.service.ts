import { Injectable } from '@angular/core';
import { ServiceModel } from '../model/service-model';
import { Http } from '@angular/http';
import { Console } from '../model/console';

@Injectable()
export class ConsoleService extends ServiceModel<Console> {

  constructor(
    http: Http
  ) {
    super('v1/consoles', http);
  }

}
