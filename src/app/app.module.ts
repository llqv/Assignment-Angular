import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartpageComponent } from './pages/cartpage/cartpage.component';
import { RouterLink, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminheaderComponent } from './components/adminheader/adminheader.component';
import { AddProComponent } from './components/add-pro/add-pro.component';
import { EditProComponent } from './components/edit-pro/edit-pro.component';
import { AdminSiderBarComponent } from './components/admin-sider-bar/admin-sider-bar.component';
import { ListProComponent } from './components/list-pro/list-pro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    CartpageComponent,
    DetailProductComponent,
    SigninComponent,
    SignupComponent,
    NotFoundComponent,
    AdminDashboardComponent,
    AdminheaderComponent,
    AddProComponent,
    EditProComponent,
    AdminSiderBarComponent,
    ListProComponent,
    ProductComponent,
    ContactComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
