import { USUARIO_ROUTES } from './components/usuario/usuario.routes';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'usuario/:id',
        component: UsuarioComponent,
        children: USUARIO_ROUTES
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
