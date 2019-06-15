import { NgModule } from "@angular/core";
// RUTAS
import { PAGES_ROUTES } from './pages.routes';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from "@angular/forms"

// COMPOMENTES
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
// MODULOS

import { IncrementaComponent } from '../componentes/incrementa/incrementa.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

//import { GraficoDonaComponent } from '../componentes/grafico-dona/grafico-dona.component';





@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementaComponent,
        //GraficoDonaComponent,
        AccountSettingsComponent
    
    ],

    exports: [
      
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES, 
        FormsModule,
       
        

    ]


})

export class PagesModule {}