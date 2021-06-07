import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ProductsdataService } from './productslist/productsdata.service';
import { InventoryComponent } from './inventory/inventory.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app.routing.module';
import { PriceupdaterComponent } from './priceupdater/priceupdater.component';
import { AuthService } from './auth.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductslistComponent, HeaderComponent, LoginComponent, InventoryComponent, MenuComponent, CartComponent, PriceupdaterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductsdataService, AuthService]
})
export class AppModule { }
