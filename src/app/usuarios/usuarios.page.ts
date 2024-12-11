import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../service/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  usuarios: any = []
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.getAllUsuarios();
  }
  getAllUsuarios(){
    this.usuariosService.getUsuarios().subscribe(response => {
      this.usuarios = response;
    })
  }
}
