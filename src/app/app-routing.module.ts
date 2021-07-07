import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from './guards/app.guard';
import { LoginComponent } from './login/login.component';
import { MainModule } from './main/main.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'webapp',
    pathMatch: 'full'
  },
  {
    path: "webapp",
    loadChildren: () => MainModule,
    canActivate: [AppGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
