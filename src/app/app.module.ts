import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { GenericModule } from './generic/generic.module';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from './app.config';
import { HeaderComponent } from './header/header.component';
import { MainModule } from './main/main.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    GenericModule,
    MainModule
  ],
  providers: [
    AppConfig,
    Location,
    {
      provide: LocationStrategy, 
      useClass: HashLocationStrategy
    },
    {
      provide: APP_INITIALIZER,
      useFactory: InitApp,
      deps: [AppConfig], multi: true
    }    
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

export function InitApp(appConfig: AppConfig) { return () => appConfig.load() }
