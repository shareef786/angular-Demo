import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  declarations: [ 
    LoginComponent, ProductslistComponent, InventoryComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'products', component: ProductslistComponent },
      { path: 'inventory', component: InventoryComponent }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


