import { Component, OnInit } from '@angular/core';
import { Troca } from '../../model/troca';
import { DadoCadastral } from '../../model/dado-cadastral';
import { DadosCadastraisService } from '../../service/dados-cadastrais.service';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-minhas-trocas',
  templateUrl: './minhas-trocas.component.html',
  styleUrls: ['./minhas-trocas.component.css']
})
export class MinhasTrocasComponent implements OnInit {

  trocas: Troca[] = [];
  user: DadoCadastral = new DadoCadastral();
  
  constructor(    
    private dadosCadastraisService: DadosCadastraisService,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.auth().subscribe(data => {
      if (!data.login) {
        this.appService.redirect('');
      }
      this.user = data;       
    }); 
  }

}
