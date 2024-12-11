import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  endpoint = 'http://localhost:8100/usuarios';
  constructor(private  httpClient: HttpClient) { }
  getUsuarios(){
    return this.httpClient.get(this.endpoint);
  }
}
