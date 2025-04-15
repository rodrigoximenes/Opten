import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-machine-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./machine-page.component.html",
  styleUrl: "./machine-page.component.scss"
})
export class MachinePageComponent {
  counter = signal(0);

  increment() {
    this.counter.update(value => value + 1);
  }
}
