import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { IsabelacurrencyComponent } from './isabelacurrency/isabelacurrency.component';
import { IsabelawalletComponent } from './isabelawallet/isabelawallet.component';

import { IsabelawalletService } from './isabelawallet.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    IsabelacurrencyComponent,
    IsabelawalletComponent,
  ],
  bootstrap: [AppComponent],

  providers: [IsabelawalletService],
})
export class AppModule {}
