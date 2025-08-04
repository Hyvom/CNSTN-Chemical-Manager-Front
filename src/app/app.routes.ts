import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { UserDashboardComponent } from './user/dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin/dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { CreateComponent } from './demande/create/create.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';


export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user/dashboard', component: UserDashboardComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'login' },  // wildcard route for 404 redirect
  { path: 'demande/create', component: CreateComponent },
  { path: 'admin/products', component: ProductListComponent },
  { path: 'admin/edit-product/:id', component: EditProductComponent },



];
