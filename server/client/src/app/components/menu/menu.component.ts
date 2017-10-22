import { Component, OnInit } from '@angular/core';
import { AppService } from "../../service/app.service";
import { DadosCadastraisService } from '../../service/dados-cadastrais.service';
import { DadoCadastral } from '../../model/dado-cadastral';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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

  logout(){
    this.dadosCadastraisService.logout()
    .subscribe(d => {
      if(d.success){
        this.appService.redirect('');
      }
    })
  }

}
