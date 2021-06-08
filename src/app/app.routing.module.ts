import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { InventoryComponent } from './inventory/inventory.component';
import { UserlistComponent } from './userlist/userlist.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [ 
    // LoginComponent, ProductslistComponent, InventoryComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'products', component: ProductslistComponent },
      { path: 'inventory', component: InventoryComponent },
      { path: 'users', component: UserlistComponent }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


