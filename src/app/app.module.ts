import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ConsultarPerfilComponent } from './consultar-perfil/consultar-perfil.component';
import { StatusAssinaturaComponent } from './status-assinatura/status-assinatura.component';
import { AutorizadosModuloComponent } from './autorizados-modulo/autorizados-modulo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ConsultarPerfilComponent,
    StatusAssinaturaComponent,
    AutorizadosModuloComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
