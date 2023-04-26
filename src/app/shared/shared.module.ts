import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FootherComponent } from './foother/foother.component';



@NgModule({
  declarations: [
    SidebarComponent,
    FootherComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,
    FootherComponent,
  ]
})
export class SharedModule { }
