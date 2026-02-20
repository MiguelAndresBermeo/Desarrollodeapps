import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1Component } from '../componente1/componente1.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Componente1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly title = signal('holamundo');
}
