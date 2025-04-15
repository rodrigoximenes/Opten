import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'machine-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './machine-list.component.html',
  styleUrl: './machine-list.component.scss'
})
export class MachineListComponent {
  machines = [
    { id: 1, name: 'Máquina A' },
    { id: 2, name: 'Máquina B' },
  ];
}
