import { Routes } from '@angular/router';
import { MachineListComponent } from './pages/list/machine-list.component';
import { MachineFormComponent } from './pages/form/machine-form.component';
import { MachineDetailComponent } from './pages/detail/machine-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: MachineListComponent,
    },
    {
        path: 'new',
        component: MachineFormComponent,
    },
    {
        path: ':id/edit',
        component: MachineFormComponent,
    },
    {
        path: ':id',
        loadComponent: () =>
            import('./pages/detail/machine-detail.component').then(m => m.MachineDetailComponent),
    },
];
