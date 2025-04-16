import { Routes } from '@angular/router';
import { MachineFormComponent } from './pages/form/machine-form.component';
import { MachineListComponent } from './pages/list/machine-list.component';

export const routes: Routes = [
    {
        path: '',
        component: MachineListComponent,
    },
    {
        path: 'form',
        component: MachineFormComponent,
    },
    {
        path: 'form/:id',
        component: MachineFormComponent,
    },
    {
        path: 'details/:id',
        loadComponent: () =>
            import('./pages/detail/machine-detail.component').then(m => m.MachineDetailComponent),
    },
];
