import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  endpoint = 'http://localhost:8080/api/usuarios';
  constructor(private  httpClient: HttpClient) { }
  getUsuarios(){
    return this.httpClient.get(this.endpoint);
  }
  addUsuario(usuario: any) {
    return this.httpClient.post(this.endpoint, usuario);
  }

  // Editar un usuario existente
  updateUsuario(id: number, usuario: any) {
    return this.httpClient.put(`${this.endpoint}/${id}`, usuario);
  }

  // Eliminar un usuario
  deleteUsuario(id: number) {
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }
}
