import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

// para que la ruta contenga el #
// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
