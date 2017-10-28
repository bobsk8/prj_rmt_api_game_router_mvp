import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LoadingModule } from 'ngx-loading';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileUploadModule, FileSelectDirective } from 'ng2-file-upload/';
import { FacebookModule } from 'ngx-facebook';

import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './routes/login/login.component';
import { AppService } from "./service/app.service";
import { UploadService } from './service/upload.service';
import { JogosDisponiveisComponent } from './routes/jogos-disponiveis/jogos-disponiveis.component';
import { MeusJogosComponent } from './routes/meus-jogos/meus-jogos.component';
import { MinhasTrocasComponent } from './routes/minhas-trocas/minhas-trocas.component';
import { DadosCadastraisService } from './service/dados-cadastrais.service';
import { UserCreateComponent } from './routes/dados-cadastrais/create/user-create.component';
import { DadosCadastraisComponent } from './routes/dados-cadastrais/edit/dados-cadastrais.component';
import { JogoService } from './service/jogo.service';
import { SolicitarTrocaService } from './service/solicitar-troca.service';
import { ConsoleService } from './service/console.service';
import { GeneroService } from './service/genero.service';
import { SolicitacoesComponent } from './routes/solicitacoes/solicitacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    UserCreateComponent,
    JogosDisponiveisComponent,
    MeusJogosComponent,
    MinhasTrocasComponent,
    DadosCadastraisComponent,
    SolicitacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    LoadingModule,
    FileUploadModule,
    NgbModule.forRoot(),
    FacebookModule.forRoot()
  ],
  providers: [ AppService, UploadService, DadosCadastraisService, JogoService, SolicitarTrocaService, ConsoleService,GeneroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
