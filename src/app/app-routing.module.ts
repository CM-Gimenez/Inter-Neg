import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './componenetes/edit-product/edit-product.component';
import { InicioComponent } from './componenetes/inicio/inicio.component';
import { LoginComponent } from './componenetes/login/login.component';
import { NewProductComponent } from './componenetes/new-product/new-product.component';

//rutas
const routes: Routes = [
  {
    path: `login`,
    component: LoginComponent,
  },
  {
    path: ``,
    component: InicioComponent,
  },
  {
    path:`new`,
    component: NewProductComponent
  },
  {
    path:`edit/:id`,
    component: EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
