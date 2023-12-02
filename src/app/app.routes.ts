import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'depto1',
        loadComponent: () => import('./components/depto/depto1/depto1.component').then(m => m.Depto1Component)
    },
    {
        path: 'depto2',
        loadComponent: () => import('./components/depto/depto2/depto2.component').then(m => m.Depto2Component)
    }
];
