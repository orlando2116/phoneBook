import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from '../../components/person/person.component';
import { ShowComponent } from '../../components/person/show/show.component';

/*material*/
import { MaterialModule } from '../shared/material.module';
import { ShowModule } from './show/show.module';

@NgModule({
  declarations: [PersonComponent],
  imports: [
    ShowModule,
    MaterialModule,
    CommonModule,
    PersonRoutingModule
  ],
  entryComponents:[ShowComponent],
  exports:[PersonComponent]
})
export class PersonModule { }
