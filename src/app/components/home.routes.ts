import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { InstalacionesComponent } from './depto/instalaciones/instalaciones.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { ContactoComponent } from './contacto/contacto.component';


export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: '', component: ModalComponent },
    { path: '', component: InstalacionesComponent },
    { path: '', component: UbicacionComponent },
    { path: '', component: ContactoComponent }
];
