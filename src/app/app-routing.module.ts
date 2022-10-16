import { ListProComponent } from './components/list-pro/list-pro.component';
import { EditProComponent } from './components/edit-pro/edit-pro.component';
import { AddProComponent } from './components/add-pro/add-pro.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartpageComponent } from './pages/cartpage/cartpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: "full" },
  { path: 'product', component: ProductsComponent },
  { path: 'cart', component: CartpageComponent },
  { path: 'product/:id', component: DetailProductComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'admin', component: AdminDashboardComponent, children: [
      { path: "", component: ListProComponent },
      { path: "product/add", component: AddProComponent },
      { path: "product/:id/edit", component: EditProComponent },
    ]
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
