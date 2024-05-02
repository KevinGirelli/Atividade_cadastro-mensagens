import { Component, OnInit } from '@angular/core';
import { MensagemService } from '../../services/mensagem.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-listar-mensagem',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './listar-mensagem.component.html',
  styleUrl: './listar-mensagem.component.scss'
})

export class ListarMensagemComponent implements OnInit {
  mensagens: any[] = [];

  constructor(private mensagemService: MensagemService) { }

  ngOnInit(): void {
    this.carregarMensagens();
  }

  carregarMensagens() {
    this.mensagemService.getMensagens().subscribe(
      (res: any[]) => {
        this.mensagens = res;
      },
      (err) => {
        console.error('Erro ao carregar mensagens:', err);
      }
    );
  }
}