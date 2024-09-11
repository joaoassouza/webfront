import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcularMediaComponent,
    CalculadoraComponent,
    CadastroClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
