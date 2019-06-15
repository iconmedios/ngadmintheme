import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { NopagefoundComponent } from './breadcrumbs/nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';



@NgModule({

imports:[
    RouterModule,
    CommonModule
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