import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: '',
        loadChildren: () => import('./components/home.routes').then((r) => r.routes)
    },

];
