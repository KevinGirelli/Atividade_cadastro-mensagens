import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private httpClient: HttpClient) { }

  enviarMensagem(enviarMensagem: any): Observable<any>{
    const httpOptions = {headers: new HttpHeaders({
      "Content-type": "application/json"
    })}
    return this.httpClient.post("http://localhost:8080/enviar", enviarMensagem, httpOptions);
  }

}
