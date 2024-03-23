import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { Depto1Component, Depto2Component } from './depto';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: '', component: ModalComponent },
   
];
