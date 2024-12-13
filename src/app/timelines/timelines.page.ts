import { Component, OnInit } from '@angular/core';
import {TimelinesService} from '../service/timelines.service';
import {NavController} from "@ionic/angular";
import {UsuariosService} from "../service/usuarios.service";
@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.page.html',
  styleUrls: ['./timelines.page.scss'],
})
export class TimelinesPage implements OnInit {
  timelines: any = [];
  timelinesForm: any = {
    id: '',
    titulo: '',
    descripcion: '',
    nombre_creador:''
  };
  usuarios: any = [];
  isEditing: boolean = false;
  constructor(private timelinesService: TimelinesService,    private usuariosService: UsuariosService
    ,  private navCtrl: NavController ) { }

  ngOnInit() {
    this.getAllTimelines();
    this.getAllUsuarios();
  }
  getAllTimelines(){
    this.timelinesService.getTimelines().subscribe(response => {
      this.timelines = response;
    });
  }

  getAllUsuarios() {
    this.usuariosService.getUsuarios().subscribe(response => {
      this.usuarios = response; // Guardar la lista de usuarios
    });
  }

  addTimelines() {
    this.timelinesService.addTimelines(this.timelinesForm).subscribe(response => {
      this.getAllTimelines();
      this.resetForm();
    });
  }

  // Editar timelines
  editTimelines(timelines: any) {
    this.timelinesForm = { ...timelines }; // Rellenar el formulario con los datos del timelines seleccionado
    this.isEditing = true;
  }

  // Actualizar timelines
  updateTimelines() {
    this.timelinesService.updateTimelines(this.timelinesForm.id, this.timelinesForm).subscribe(response => {
      this.getAllTimelines();
      this.resetForm();
    });
  }

  // Eliminar timelines
  deleteTimelines(id: number) {
    this.timelinesService.deleteTimelines(id).subscribe(response => {
      console.log('timelines eliminado', id);
    });
  }
  volverAtras() {
    this.navCtrl.back(); // Volver a la página anterior
  }
  // Resetear el formulario
  resetForm() {
    this.timelinesForm = { id: null, nombre: '', email: '' };
    this.isEditing = false;
  }
}
