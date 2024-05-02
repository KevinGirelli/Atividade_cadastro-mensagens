import { Routes } from '@angular/router';
import { EnviarMensagemComponent } from './components/enviar-mensagem/enviar-mensagem.component';
import { ListarMensagemComponent } from './components/listar-mensagem/listar-mensagem.component';

export const routes: Routes = [
  {
    path: "enviar",
    component: EnviarMensagemComponent
  },
  {
    path: "listar",
    component: ListarMensagemComponent
  }
];
