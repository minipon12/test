import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { DashroadComponent } from './dashroad/dashroad.component';


@NgModule({
  declarations: [DashroadComponent],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
