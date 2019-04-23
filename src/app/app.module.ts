import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/*shared*/
import { OpcionesHttp } from './services/shared/opciones-http';

/*modules*/
import { PersonModule } from './modules/person/person.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,HttpModule,
    BrowserModule,
    AppRoutingModule,
    PersonModule
  ],
  providers: [
    { provide: 'IOpcionesHttp', useClass: OpcionesHttp }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
