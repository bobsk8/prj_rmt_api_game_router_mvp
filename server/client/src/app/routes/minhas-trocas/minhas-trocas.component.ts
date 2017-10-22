import { Component, OnInit } from '@angular/core';
import { SolicitarTrocaService } from '../../service/solicitar-troca.service';
import { AppService } from '../../service/app.service';
import { DadoCadastral } from '../../model/dado-cadastral';
import { DadosCadastraisService } from '../../service/dados-cadastrais.service';
import { SolicitarTroca } from '../../model/solicitar-troca';

@Component({
  selector: 'app-minhas-trocas',
  templateUrl: './minhas-trocas.component.html',
  styleUrls: ['./minhas-trocas.component.css']
})
export class MinhasTrocasComponent implements OnInit {

  solicitacoes: SolicitarTroca[] = [];
  user: DadoCadastral = new DadoCadastral();
  
  constructor(
    private solicitarTrocaService: SolicitarTrocaService,
    private dadosCadastraisService: DadosCadastraisService,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.auth().subscribe(data => {
      if (!data.login) {
        this.appService.redirect('');
      }
      this.user = data;
      this.getSolicitacoes();      
    }); 
  }

  getSolicitacoes(){
    this.dadosCadastraisService.getSolicitacoes(this.user.id)
    .subscribe(solicitacoes => this.solicitacoes = solicitacoes);
  }

}
