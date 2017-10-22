import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./routes/home/home.component";
import { LoginComponent } from "./routes/login/login.component";
import { JogosDisponiveisComponent } from './routes/jogos-disponiveis/jogos-disponiveis.component';
import { MeusJogosComponent } from './routes/meus-jogos/meus-jogos.component';
import { MinhasTrocasComponent } from './routes/minhas-trocas/minhas-trocas.component';
import { DadosCadastraisComponent } from './routes/dados-cadastrais/edit/dados-cadastrais.component';
import { UserCreateComponent } from './routes/dados-cadastrais/create/user-create.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'jogos-disponiveis', component: JogosDisponiveisComponent },
  { path: 'meus-jogos', component: MeusJogosComponent },
  { path: 'minhas-trocas', component: MinhasTrocasComponent },
  {
    path: 'dados-cadastrais',
    children: [
      { path: 'create', component: UserCreateComponent },
      { path: 'edit', component: DadosCadastraisComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
