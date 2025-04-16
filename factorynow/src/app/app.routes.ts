import { Routes } from '@angular/router';
import { AppShellComponent } from './layout/app-shell.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {
        path: '',
        component: AppShellComponent,
        children: [
            { path: 'about', component: AboutComponent },
            {
                path: 'machines',
                loadChildren: () =>
                    import('./features/machine/machine.routes').then((m) => m.routes),
            },
            { path: 'home', redirectTo: '/machines', pathMatch: 'full' },
            { path: '**', redirectTo: '/machines', pathMatch: 'full' },
        ],
    },
];
