package cadastro.mensagens.spring.service;

import cadastro.mensagens.spring.entity.Mensagem;
import cadastro.mensagens.spring.repository.MensagemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class MensagemService {
    @Autowired
    private MensagemRepository mensagemRepository;
    public Mensagem criarMensagem(Mensagem mensagem) {
        mensagem.setDataCriacao(LocalDateTime.now());
        return mensagemRepository.save(mensagem);
    }
    public List<Mensagem> listarMensagens(){
        return mensagemRepository.findAll();
    }
}
