import { Component, OnInit } from '@angular/core';
import { Jogo } from '../../model/jogo';
import { JogoService } from '../../service/jogo.service';
import { SolicitarTrocaService } from '../../service/solicitar-troca.service';
import { SolicitarTroca } from '../../model/solicitar-troca';
import { AppService } from '../../service/app.service';
import { DadoCadastral } from '../../model/dado-cadastral';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Modal } from '../../model/modal';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-jogos-disponiveis',
  templateUrl: './jogos-disponiveis.component.html',
  styleUrls: ['./jogos-disponiveis.component.css']
})
export class JogosDisponiveisComponent implements OnInit {

  jogos: Jogo[] = [];
  user: DadoCadastral = new DadoCadastral();
  solicitarTroca: SolicitarTroca = new SolicitarTroca();
  modalContent = new Modal();
  apiImage = environment.uploadImage;

  constructor(
    private activeModal: NgbModal,
    private jogoService: JogoService,
    private solicitarTrocaService: SolicitarTrocaService,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.auth().subscribe(data => {
      if (!data.login) {
        this.appService.redirect('');
      }
      this.user = data;
      this.solicitarTroca.id_solicitante = this.user.id;
      this.getGames();
    }); 
  }

  getGames(){
    this.jogoService.getJogosDisponiveis()
    .subscribe(jogos => {
      this.jogos = jogos;        
    });
  }

  solicitar(jogo: Jogo,modal: any){
    this.solicitarTroca.id_jogo = jogo.id;
    this.solicitarTroca.id_dono = jogo.id_dono;
    this.solicitarTrocaService.solicitarTroca(this.solicitarTroca)
    .subscribe(d => {      
      this.openSuccessModal(modal)
    });
  }

  openSuccessModal(modal: any) {
    this.modalContent.title = 'Jogo solicitado com sucesso!'
    this.modalContent.body = 'Você agora deverá esperar o dono aceitar a troca!';
    this.activeModal.open(modal).result
      .then(result => {        
        this.ngOnInit();
      });
  }

  openFailModal(modal: any) {
    this.modalContent.title = 'Erro!'
    this.modalContent.body = 'ocorreu um problema ao editar seus dados. Por favor, tente novamente.';
    this.activeModal.open(modal).result
      .then(result => {
        
      });
  }
}
