import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Depto1Component } from './depto1.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Depto1Component
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class Depto1RoutingModule { }
