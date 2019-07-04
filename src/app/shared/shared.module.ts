import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { NopagefoundComponent } from './breadcrumbs/nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';
// Pipes module
import { PipesModule } from '../pipes/pipes.module';



@NgModule({

imports:[
    RouterModule,
    CommonModule,
    PipesModule
],

    declarations:[
       
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    FooterComponent,
    NopagefoundComponent,
 

    ],

    exports: [

    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    FooterComponent,
    NopagefoundComponent    
   
    ]



})

export class SharedModule {


}