import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Injectable, Type } from '@angular/core';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
