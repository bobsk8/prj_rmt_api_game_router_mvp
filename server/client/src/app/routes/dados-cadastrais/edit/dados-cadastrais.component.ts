import { Component, OnInit, ElementRef } from '@angular/core';
import { DadoCadastral } from '../../../model/dado-cadastral';
import { DadosCadastraisService } from '../../../service/dados-cadastrais.service';
import { AppService } from '../../../service/app.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Modal } from '../../../model/modal';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-dados-cadastrais',
  templateUrl: './dados-cadastrais.component.html',
  styleUrls: ['./dados-cadastrais.component.css']
})
export class DadosCadastraisComponent implements OnInit {

  user: DadoCadastral = new DadoCadastral();
  modalContent = new Modal();
  apiImage = environment.uploadImage;
  
  constructor(
    private appService: AppService,
    private dadosCadastraisService: DadosCadastraisService,
    private activeModal: NgbModal,
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.appService.auth().subscribe(data => {
      if (!data.login) {
        this.appService.redirect('');
      }
      data.dt_nasc = this.formatDate(data.dt_nasc);
      this.user = data;
    });
  }

  save(modal: any) {
    this.dadosCadastraisService.update(this.user)
      .subscribe(d => this.upload(modal));
  }

  formatDate(date: string) {
    if (date) {
      return date = date.substr(0, 4) + date.substr(4, 6);
    }
    return '';
  }

  upload(modal: any) {
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) {
      formData.append('user', inputEl.files.item(0));      
      this.dadosCadastraisService.upload(formData, this.user.id)
        .subscribe(data => {
          this.openSuccessModal(modal);
        });
    }
  }

  openSuccessModal(modal: any) {
    this.modalContent.title = 'Dados editados com sucesso!'
    this.modalContent.body = 'Você poderá editar seus dados sempre que desejar!';
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
