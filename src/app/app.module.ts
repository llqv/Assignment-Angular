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
import { RouterLink } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminheaderComponent } from './components/adminheader/adminheader.component';
import { AdminproduclistComponent } from './pages/adminproduclist/adminproduclist.component';

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
    AdminproduclistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
