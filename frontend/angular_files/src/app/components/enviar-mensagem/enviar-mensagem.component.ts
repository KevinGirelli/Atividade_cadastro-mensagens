import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MensagemService } from '../../services/mensagem.service';

@Component({
  selector: 'app-enviar-mensagem',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './enviar-mensagem.component.html',
  styleUrl: './enviar-mensagem.component.scss'
})

export class EnviarMensagemComponent implements OnInit {

  nome!: string;
  email!: string;
  mensagem!: string;

  constructor(private envioMensagem: MensagemService) {}

  ngOnInit(): void {
    this.enviarMensagem();
  }
  
  enviarMensagem() {
    const dados = {
      nome: this.nome,
      email: this.email,
      mensagem: this.mensagem
    };

    this.envioMensagem.enviarMensagem(dados).subscribe(
      (res) => {
        console.log('Mensagem enviada com sucesso:', res);
        this.nome = '';
        this.email = '';
        this.mensagem = '';
      },
      (err) => {
        console.error('Erro ao enviar mensagem:', err);
      }
    );
  } 
}