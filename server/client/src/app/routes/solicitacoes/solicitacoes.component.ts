import { Component, OnInit } from '@angular/core';
import { SolicitarTrocaService } from '../../service/solicitar-troca.service';
import { AppService } from '../../service/app.service';
import { DadoCadastral } from '../../model/dado-cadastral';
import { DadosCadastraisService } from '../../service/dados-cadastrais.service';
import { SolicitarTroca } from '../../model/solicitar-troca';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Modal } from '../../model/modal';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.css']
})
export class SolicitacoesComponent implements OnInit {

  solicitacao: SolicitarTroca = new SolicitarTroca();
  solicitacoes: SolicitarTroca[] = [];
  solicitacoesAprovadas: SolicitarTroca[] = [];
  user: DadoCadastral = new DadoCadastral();
  modalContent = new Modal();
  
  constructor(
    private activeModal: NgbModal,
    private solicitarTrocaService: SolicitarTrocaService,
    private dadosCadastraisService: DadosCadastraisService,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.auth().subscribe(data => {
      if (!data.login) {
        this.appService.redirect('');
      }
      this.solicitacao = new SolicitarTroca()
      this.user = data;
      this.getSolicitacoes();
      this.getAprovadas();      
    }); 
  }

  getSolicitacoes(){
    this.dadosCadastraisService.getSolicitacoes(this.user.id)
    .subscribe(solicitacoes => this.solicitacoes = solicitacoes);
  }

  getAprovadas(){
    this.dadosCadastraisService.getSolicitacoesAprovadas(this.user.id)
    .subscribe(solicitacoes => this.solicitacoesAprovadas = solicitacoes);
  }

  aprovar(solicitacao: SolicitarTroca, modal: any){
    this.solicitacao = solicitacao;
    this.modalContent.title = 'Deseja Aprovar?'
    this.modalContent.body = 'Caso aceite, você deverá confirmar com o dono do jogo essa troca.';
    this.activeModal.open(modal).result
      .then(result => { });
  }

  salvar(aprova: boolean){
    if(aprova){
      this.solicitacao.aceite = true;
      this.solicitarTrocaService.aprovar(this.solicitacao)
      .subscribe(d => this.ngOnInit())
    }else{
      this.solicitacao = new SolicitarTroca();
      
    }
  }

}
