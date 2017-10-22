import { Component, OnInit, ElementRef } from '@angular/core';
import { AppService } from "../../service/app.service";
import { UploadService } from '../../service/upload.service';
import { DadoCadastral } from '../../model/dado-cadastral';
import { Jogo } from '../../model/jogo';
import { JogoService } from '../../service/jogo.service';
import { DadosCadastraisService } from '../../service/dados-cadastrais.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Modal } from '../../model/modal';

@Component({
  selector: 'app-meus-jogos',
  templateUrl: './meus-jogos.component.html',
  styleUrls: ['./meus-jogos.component.css']
})
export class MeusJogosComponent implements OnInit {
  
  createUpdate: boolean = false;
  user: DadoCadastral = new DadoCadastral();
  modalContent = new Modal();
  jogo: Jogo = new Jogo();
  jogos: Jogo[] = [];

  constructor(
    private appService: AppService,
    private dadosCadastraisService: DadosCadastraisService,
    private el: ElementRef,    
    private jogoService: JogoService,
    private activeModal: NgbModal
  ) { }

  ngOnInit() {
    this.appService.auth().subscribe(data => {
      if (!data.login) {
        this.appService.redirect('');
      }
      this.user = data;
      this.jogo.id_dono = data.id;
      this.getMeusJogos();
    });    
  }

  upload(jogo_id: number,modal: any) {
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) {
      formData.append('jogo', inputEl.files.item(0));      
      this.jogoService.upload(formData,jogo_id)
        .subscribe(data => {
          this.openSuccessModal(modal);
        });
    }
  }

  addNew(){
    this.createUpdate = !this.createUpdate;
  }

  save(modal: any){
    this.jogoService.create(this.jogo)
    .subscribe(d => {
      this.upload(d.id, modal);
    })
  }

  getMeusJogos(){
    this.dadosCadastraisService.getJogosByUserId(this.user.id)
    .subscribe(jogos => this.jogos = jogos);
  }

  openSuccessModal(modal: any) {
    this.modalContent.title = 'Jogo adicionado com sucesso!'
    this.modalContent.body = 'Seu jogo poderá ser visto em Meus jogos.';
    this.activeModal.open(modal).result
      .then(result => {
        this.jogo = new Jogo();
        this.jogo.id_dono = this.user.id;
        this.createUpdate = false;
        this.getMeusJogos();
      });
  }

  openFailModal(modal: any) {
    this.modalContent.title = 'Erro!'
    this.modalContent.body = 'ocorreu um problema ao salvar um novo jogo. Por favor, tente novamente.';
    this.activeModal.open(modal).result
      .then(result => {
        
      });
  }

}
