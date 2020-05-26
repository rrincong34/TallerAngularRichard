import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { Clase1Component } from './components/clase1/clase1.component';
import { Clase2Component } from './components/clase2/clase2.component';
import { Clase3Component } from './components/clase3/clase3.component';
import { Clase4Component } from './components/clase4/clase4.component';
import { Clase5Component } from './components/clase5/clase5.component';
import { Clase6Component } from './components/clase6/clase6.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactoComponent,
    AcercaComponent,
    ServiciosComponent,
    Clase1Component,
    Clase2Component,
    Clase3Component,
    Clase4Component,
    Clase5Component,
    Clase6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
