import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ProductsdataService } from './productslist/productsdata.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductslistComponent, HeaderComponent, LoginComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductsdataService]
})
export class AppModule { }
