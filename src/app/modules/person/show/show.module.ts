import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowRoutingModule } from './show-routing.module';
import { ShowComponent } from '../../../components/person/show/show.component';

import { MaterialModule } from '../../shared/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShowComponent],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    ShowRoutingModule
  ],
  exports:[ShowComponent]
})
export class ShowModule { }
