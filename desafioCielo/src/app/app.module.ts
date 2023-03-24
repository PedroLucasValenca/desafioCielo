import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './shared/components/menu/menu.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ExtractComponent } from './pages/extract/extract.component';
import { CommonModule } from '@angular/common';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { SummaryPeriodComponent } from './shared/components/summary-period/summary-period.component';
import { HomeComponent } from './pages/home/home.component';

registerLocaleData(ptBr);


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    ExtractComponent,
    SummaryPeriodComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt' },
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
