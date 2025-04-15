import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'machine-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './machine-detail.component.html',
  styleUrl: './machine-detail.component.scss'
})
export class MachineDetailComponent {
  id: string | null;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}