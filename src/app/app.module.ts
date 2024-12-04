import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SitioExterno } from './global';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CrearComponent } from './crear/crear.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CrearComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,   
    HttpModule, 
    FormsModule,
  ],
  providers: [SitioExterno,],
  bootstrap: [AppComponent]
})
export class AppModule { }
