import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  //Valor por defecto que quiero establecer en el formulario
  nuevo: Personaje = {
    nombre: 'Maestro',
    poder: 3534
  }

  /*
  get personajes():Personaje[]{
    return this.dbzService.personajes;
  }
  */

  constructor() {

  }


}
