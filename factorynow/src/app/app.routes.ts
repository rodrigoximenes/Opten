import { Routes } from '@angular/router';
import { AppShellComponent } from './layout/app-shell.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: AppShellComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            {
                path: 'dashboard',
                loadChildren: () =>
                    import('./features/dashboard/pages/dashboard-page/dashboard.routes').then((m) => m.routes),
            },
            {
                path: 'machines',
                loadChildren: () =>
                    import('./features/machine/machine.routes').then((m) => m.routes),
            },
            { path: '', redirectTo: '/home', pathMatch: 'full' },
        ],
    },
];
