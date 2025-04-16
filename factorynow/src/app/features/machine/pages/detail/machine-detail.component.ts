import { Component, inject, Input, Signal, effect, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalRService } from '../../../../core/services/signal-r.service';
import { MachineStatus } from '../../../../core/models/machine-status';
import { Router } from '@angular/router';

@Component({
  selector: 'app-machine-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './machine-detail.component.html',
})
export class MachineDetailComponent {
  private signalRService = inject(SignalRService);
  private router = inject(Router);

  status!: Signal<MachineStatus | undefined>;

  @Input({ required: true }) machineId!: string;

  constructor() {
    this.status = this.signalRService.getStatusById(this.machineId);

    effect(() => {
      console.log('Status:', this.status());
    });
  }
}
