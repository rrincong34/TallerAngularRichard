/* 
    Este archivo se encargará de administrar los componentes
    de acuerdo a las rutas que se le especifiquen.
    Necesitamos importar el Modulo NgModule que nos dará el decorador
    Un módulo llamado RouterModule
*/

// Destructuring - el elemento declarado a la izquierda 
// pertenece o deriva del elemento declarado a la derecha
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Importar los componentes que se deben mostrar de acuerdo a la ruta
import { HomeComponent } from './components/home/home.component';

import { AcercaComponent } from './components/acerca/acerca.component';
import { ServiciosComponent } from './components/servicios/servicios.component';


import { Clase1Component } from './components/clase1/clase1.component';
import { Clase2Component } from './components/clase2/clase2.component';
import { Clase3Component } from './components/clase3/clase3.component';
import { Clase4Component } from './components/clase4/clase4.component';
import { Clase5Component } from './components/clase5/clase5.component';
import { Clase6Component } from './components/clase6/clase6.component';


import { ContactoComponent } from './components/contacto/contacto.component';

/* 
    Crearemos una constante de tipo Routes a través de typescript
    cuyo valor será un arreglo de json donde tendremos las rutas
    enlazados o relacionadas con los componentes que deseemos mostrar

    var nombre = 'Kevin' JS
    var nombre : String = 'Kevin' TS
*/

const routes : Routes = [
    {path: '', component: HomeComponent},

    {path: 'acerca', component: AcercaComponent},
    {path: 'servicios', component: ServiciosComponent},


    {path: 'clase1', component: Clase1Component},
    {path: 'clase2', component: Clase2Component},
    {path: 'clase3', component: Clase3Component},
    {path: 'clase4', component: Clase4Component},
    {path: 'clase5', component: Clase5Component},
    {path: 'clase6', component: Clase6Component},



    {path: 'contacto', component: ContactoComponent}
];


// Configuramos nuestro decorador NgModule
// añadimos la constante routes en la raíz del módulo RouterModule
//      esto para que cuando se exporte la clase app-routing y se
//      importe en el app.module, no tenga problemas con las rutas
//      a la hora de la navegación por parte del usuario en la aplicación
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}



