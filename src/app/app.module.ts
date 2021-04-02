import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Componentes
import { AppComponent } from './app.component';

// Modulo personalizado
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//  Cambiar el locale de la app a chile -----------------
import localeEsCl from '@angular/common/locales/es-CL';
import localeFr from '@angular/common/locales/fr';
import localeJa from '@angular/common/locales/ja';

import { registerLocaleData } from '@angular/common';
registerLocaleData( localeEsCl );
registerLocaleData( localeFr );
registerLocaleData( localeJa );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    VentasModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue:'es-CL' } // cambian monedas, fechas
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
