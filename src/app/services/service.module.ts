import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  } from './service.index';


import {
  SettingsService,
  SidebarService,
  SharedService
 } from './service.index';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService
  ],
  declarations: []
})
export class ServiceModule { }
