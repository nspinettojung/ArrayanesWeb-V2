import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'depto1',
        loadChildren: () => import('./components/depto/depto1/depto1.module').then(m => m.Depto1Module)
    },
    {
        path: 'depto2',
        loadChildren: () => import('./components/depto/depto2/depto2.module').then(m => m.Depto2Module)
    }
];
