import { NgModule } from "@angular/core";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,



    ],

    exports: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent

    ],
    imports: [
        SharedModule

    ]


})

export class PagesModule {


}