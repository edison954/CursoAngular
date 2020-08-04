import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { GraficoBarraHorizontalComponent } from './grafico-barra-horizontal/grafico-barra-horizontal.component';


import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [NavbarComponent, GraficoBarraHorizontalComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxChartsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    NavbarComponent,
    GraficoBarraHorizontalComponent
  ]
})
export class ComponentsModule { }
