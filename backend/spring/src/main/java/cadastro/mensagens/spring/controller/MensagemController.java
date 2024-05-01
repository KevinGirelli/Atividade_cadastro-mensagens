package cadastro.mensagens.spring.controller;

import cadastro.mensagens.spring.entity.Mensagem;
import cadastro.mensagens.spring.service.MensagemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mensagens")
public class MensagemController {
    @Autowired
    private MensagemService mensagemService;

    @PostMapping("/enviar")
    public ResponseEntity<Mensagem> enviarMensagem(@RequestBody Mensagem mensagem) {
        Mensagem novaMensagem = mensagemService.criarMensagem(mensagem);
        return ResponseEntity.status(HttpStatus.CREATED).body(novaMensagem);
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Mensagem>> listarMensagens(){
        List<Mensagem> mensagens = mensagemService.listarMensagens();
        return ResponseEntity.ok().body(mensagens);
    }
}
