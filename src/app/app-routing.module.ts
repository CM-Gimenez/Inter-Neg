import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './componenetes/edit-product/edit-product.component';
import { InicioComponent } from './componenetes/inicio/inicio.component';
import { LoginComponent } from './componenetes/login/login.component';
import { NewProductComponent } from './componenetes/new-product/new-product.component';
import { ProductoListComponent } from './componenetes/producto-list/producto-list.component';

//rutas
const routes: Routes = [
  {
    path: ``,
    component: LoginComponent,
  },
  {
    path: `home`,
    component: InicioComponent,
    children: [
      {
        path: ``,
        component: ProductoListComponent,
      },
      {
        path: `new`,
        component: NewProductComponent,
      },
      {
        path: `edit/:id`,
        component: EditProductComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
