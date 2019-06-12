import { RouterModule, Routes } from '@angular/router'
// revisar que se importen los conponentes respectivos 
import { PagesComponent } from './pages/pages.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { NopagefoundComponent } from './shared/breadcrumbs/nopagefound/nopagefound.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { RegisterComponent } from './login/register.component';



const appRoutes: Routes = [
    {path: '', component: PagesComponent,
    //sub rutas
    children:[
        {path: '', component: DashboardComponent },
        {path: 'progress', component: ProgressComponent },
        {path: 'graficas1', component: Graficas1Component },
        {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ] 
    
    },
    
    {path: 'login', component: LoginComponent,},
    {path: 'register', component: RegisterComponent },
    
 
    // ruta erronea redireccionar
    
    // cualquier error re
    {path: '**', component: NopagefoundComponent },
];


export const APP_ROUTES = RouterModule.forRoot ( appRoutes, {useHash: true} );