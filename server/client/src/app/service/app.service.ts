import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Rx"
import { DadosCadastraisService } from './dados-cadastrais.service';
import { DadoCadastral } from '../model/dado-cadastral';

@Injectable()
export class AppService {
  
  user: DadoCadastral;
  router: Router;

  constructor(
    router: Router,
    private dadosCadastraisService: DadosCadastraisService,
  ) {
    this.router = router;
  }

  auth(): Observable<DadoCadastral> {
    return this.dadosCadastraisService.getUserSession();
  }

  redirect(path: string) {
    this.router.navigate([path]);
  }

  isAdm(){
    if(this.user.role_id===1){
      return true;
    }
    return false;
  }

}
