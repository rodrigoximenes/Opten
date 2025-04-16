import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'machine-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './machine-detail.component.html',
  styleUrl: './machine-detail.component.scss'
})
export class MachineDetailComponent {
  private route = inject(ActivatedRoute);

  private idSignal = signal(this.route.snapshot.paramMap.get('id'));
  machineId = computed(() => this.idSignal());

  machine = computed(() => ({
    id: this.machineId(),
    name: 'Máquina Exemplo',
    status: 'Ativa',
    producedParts: 1234,
  }));
}
