import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { OptenAssessmentsAngularApiService } from '../../../../api-client/api/optenAssessmentsAngularApi.service';
import { ToastService } from '../../../../core/services/toast.service';
import { take } from 'rxjs/operators';

@Component({
  standalone: true,
  selector: 'machine-list',
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatPaginatorModule
  ],
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.scss'],
})
export class MachineListComponent implements OnInit {
  machines: any[] = [];
  filter: string = '';
  loading: boolean = true;

  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'name',
    'product',
    'producedParts',
    'operator',
    'location',
    'actions'
  ];

  constructor(
    private apiService: OptenAssessmentsAngularApiService,
    private router: Router,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.apiService.apiMachinesGet('body')
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          this.machines = response;
          this.dataSource.data = response;
          this.dataSource.paginator = this.paginator;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          this.toastService.showError('Failed to load machines.');
        }
      });
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  get filteredMachines(): any[] {
    return this.machines.filter(machine =>
      machine.name?.toLowerCase().includes(this.filter.toLowerCase())
    );
  }

  viewDetails(machineId: string): void {
    this.router.navigate([`/machines/details`, machineId]);
  }

  editMachine(machineId: string): void {
    this.router.navigate([`/machines/form`, machineId]);
  }

  deleteMachine(machineId: string): void {
    this.loading = true;
    this.apiService.apiMachinesIdDelete(machineId)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.machines = this.machines.filter(machine => machine.id !== machineId);
          this.loading = false;
          this.toastService.showSuccess('Machine deleted successfully.');
        },
        error: () => {
          this.loading = false;
          this.toastService.showError('Error removing machine.');
        }
      });
  }

  createMachine(): void {
    this.router.navigate(['/machines/form']);
  }
}
