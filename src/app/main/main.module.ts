import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenericModule } from '../generic/generic.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    MainComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GenericModule,
    MainRoutingModule
  ],
  exports:[
    MainComponent,
    UsersComponent
  ]
})
export class MainModule { }
