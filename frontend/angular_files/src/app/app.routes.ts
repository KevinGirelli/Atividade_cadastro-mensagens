import { Routes } from '@angular/router';
import { EnviarMensagemComponent } from './components/enviar-mensagem/enviar-mensagem.component';
import { ListarMensagemComponent } from './components/listar-mensagem/listar-mensagem.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "enviar",
    component: EnviarMensagemComponent
  },
  {
    path: "listar",
    component: ListarMensagemComponent
  }
];
