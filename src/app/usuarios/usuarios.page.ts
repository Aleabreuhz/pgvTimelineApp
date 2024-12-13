import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {UsuariosService} from '../service/usuarios.service';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  usuarios: any = [];
  usuarioForm: any = {
    id: '',
    nombre: '',
    email: ''
  };
  formErrors: any = {
    nombre: false,
    apellidos: false,
    email: false,
    telefono: false,
    nombreUsuario: false,
    fechaDeNacimiento: false
  };
  isEditing: boolean = false;

  constructor(private usuariosService: UsuariosService,
              private cdr: ChangeDetectorRef,
              private navCtrl: NavController  // Inyección de NavController
  ) {
  }

  ngOnInit() {
    this.getAllUsuarios()
  }

  getAllUsuarios() {
    this.usuariosService.getUsuarios().subscribe(response => {
      this.usuarios = response;
    });
  }

  addUsuario() {
    this.usuariosService.addUsuario(this.usuarioForm).subscribe(response => {
      this.getAllUsuarios();
      this.resetForm();
    });
  }

  // Editar usuario
  editUsuario(usuario: any) {
    this.usuarioForm = {...usuario}; // Rellenar el formulario con los datos del usuario seleccionado
    this.isEditing = true;
  }

  // Actualizar usuario
  updateUsuario() {
    if (this.validarFormulario()) {
      if (this.isEditing) {
        this.usuariosService.updateUsuario(this.usuarioForm.id, this.usuarioForm).subscribe(response => {
          this.getAllUsuarios();
          this.resetForm();
          this.isEditing = false; // Actualiza solo una vez
        });
      }
    }
  }

  ngAfterViewChecked() {
    // Esto se ejecuta después de la vista haya sido completamente inicializada
    // Usamos esto para hacer las actualizaciones
    this.cdr.detectChanges(); // Detecta cambios manualmente
  }

  // Eliminar usuario
  deleteUsuario(id: number) {
    this.usuariosService.deleteUsuario(id).subscribe(response => {
      console.log('Usuario eliminado', id);
    });
  }

  // Resetear el formulario
  resetForm() {
    this.usuarioForm = {id: null, nombre: '', email: ''};
    this.isEditing = false;
  }

  validarFormulario(): boolean {
    let isValid = true;
    this.formErrors = {
      nombre: false,
      apellidos: false,
      email: false,
      telefono: false,
      nombreUsuario: false,
      fechaDeNacimiento: false
    };

    if (!this.usuarioForm.nombre || this.usuarioForm.nombre.trim() === '') {
      this.formErrors.nombre = true;
      isValid = false;
    }

    if (!this.usuarioForm.correoElectronico || !this.validarEmail(this.usuarioForm.correoElectronico)) {
      this.formErrors.email = true;
      isValid = false;
    }

    if (!this.usuarioForm.numeroTelefono || !this.validarTelefono(this.usuarioForm.numeroTelefono)) {
      this.formErrors.telefono = true;
      isValid = false;
    }

    if (!this.usuarioForm.nombreUsuario || this.usuarioForm.nombreUsuario.trim() === '') {
      this.formErrors.nombreUsuario = true;
      isValid = false;
    }

    if (!this.usuarioForm.fechaDeNacimiento) {
      this.formErrors.fechaDeNacimiento = true;
      isValid = false;
    }

    return isValid;
  }

  volverAtras() {
    this.navCtrl.back(); // Volver a la página anterior
  }

  validarEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  validarTelefono(telefono: string): boolean {
    const regex = /^[0-9]{10}$/;
    return regex.test(telefono);
  }

  protected readonly isNaN = isNaN;
}
