import { Component, OnInit } from '@angular/core';
import { AppService } from "../../../service/app.service";
import { Modal } from "../../../model/modal";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DadosCadastraisService } from '../../../service/dados-cadastrais.service';
import { DadoCadastral } from '../../../model/dado-cadastral';

@Component({
  selector: 'app-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: DadoCadastral = new DadoCadastral();
  modalContent = new Modal();
  constructor(    
    private DadosCadastraisService: DadosCadastraisService,
    private appService: AppService,
    private activeModal: NgbModal
  ) { }

  ngOnInit() {
  }

  submit(modal) {
    this.DadosCadastraisService.create(this.user)
      .subscribe(d => {
        if (d.success) {
          this.openSuccessModal(modal)
        } else {
          this.openFailModal(modal);
        }
      }, err => this.openFailModal(modal));
  }

  openSuccessModal(modal) {
    this.modalContent.title = 'Criado com sucesso!'
    this.modalContent.body = 'Você será redirecionado para tela de login.';
    this.activeModal.open(modal).result
      .then(result => {
        this.appService.redirect('');
      });
  }

  openFailModal(modal) {
    this.modalContent.title = 'Erro!'
    this.modalContent.body = 'ocorreu um problema ao salvar o usuário. Por favor, tente novamente.';
    this.activeModal.open(modal).result
      .then(result => {
        this.user = new DadoCadastral();
      });
  }
}
