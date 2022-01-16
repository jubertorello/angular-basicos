import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Superman', 'Capitan América', 'Hulk', 'Thor'];
  heroeDeleted: string = '';

  borrarHeroe() {
    this.heroeDeleted = this.heroes.shift() || '';
  }
}
