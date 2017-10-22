import { Component, OnInit } from '@angular/core';
import { AppService } from "../../service/app.service";
import { FacebookService, LoginResponse, InitParams } from 'ngx-facebook';
import { DadosCadastraisService } from '../../service/dados-cadastrais.service';
import { DadoCadastral } from '../../model/dado-cadastral';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: DadoCadastral = new DadoCadastral();
  public loading = false;

  constructor(    
    private dadosCadastraisService: DadosCadastraisService,
    private appService: AppService,
    private fb: FacebookService
  ) { 
    const 
      params: InitParams = {
        appId: '793589874146791',
        xfbml: true,
        version: 'v2.10'
        };
      
        fb.init(params);
  }

  ngOnInit() {
    this.appService.auth().subscribe(data => {
      if (data.login) {
        this.appService.redirect('/home');
      }
    });
  }

  loginWithFacebook(): void {
    this.fb.login({scope: 'public_profile,email,user_about_me,user_birthday'})
      .then((response: LoginResponse) => {
        console.log(response);
        //this.getProfile();
      } )
      .catch((error: any) => console.error(error));
  }

  checkLoginState(): void {
    this.fb.getLoginStatus()
    .then(res => console.log(res));
  }

  getProfile() {
    this.fb.api('/me?fields=id,name,email,birthday,location')
      .then((res: any) => {
        console.log('Got the users profile', res);
      })
      .catch((error: any) => console.error(error));
  }

  logout() :void {
    this.fb.logout().then(() => console.log('Logged out!'));
  }

  login() {
    this.loading = true;
    this.dadosCadastraisService.login(this.user)
      .subscribe(d => {
        if (d.login) {
          this.appService.redirect('/home')
        } else {
          alert('Login inválido')
        }
        this.loading = false;
      });
  }
}
