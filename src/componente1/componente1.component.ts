import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  imports: [],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.scss'
})
export class Componente1Component {
  nombre: string = 'Santiago';
  
  cambiarNombre() {
    if (this.nombre === 'Santiago') {
      this.nombre = 'Pedro';
    } else {
      this.nombre = 'Santiago';
    }
  }
}
