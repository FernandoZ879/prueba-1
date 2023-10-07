import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss']
})
export class RegistroPage {
  usuario = {
    ci: '',
    nombreCompleto: '',
    fechaNacimiento: '',
    sexo: '',
    correo: '',
    contrasena: '',
    contrasenaRepetida: ''
  };

  constructor(private alertController: AlertController, private navController: NavController) {}

  async registrar() {
    // Validación de los nombres y apellidos
    if (!/^[a-zA-Z]+$/.test(this.usuario.nombreCompleto)) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Los nombres y apellidos solo deben contener letras.',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }

    // Validación de la contraseña
    if (this.usuario.contrasena !== this.usuario.contrasenaRepetida) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden.',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }

    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(this.usuario.contrasena)) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'La contraseña debe tener al menos 8 caracteres, incluyendo al menos 1 número, 1 letra mayúscula, 1 letra minúscula y 1 caracter especial.',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }

    // Si todo está bien, navegamos a otra página
    this.navController.navigateForward('/otra-pagina');
  }
}
