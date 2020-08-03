import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddCompanyComponent } from './components/admin/add-company/add-company.component';
import { AddCustomerComponent } from './components/admin/add-customer/add-customer.component';
import { AllCompaniesComponent } from './components/admin/all-companies/all-companies.component';
import { AllCustomersComponent } from './components/admin/all-customers/all-customers.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UpdateCompanyComponent } from './components/admin/update-company/update-company.component';
import { TestUpdateComponent } from './components/test-update/test-update.component';
import { UpdateCustomerComponent } from './components/admin/update-customer/update-customer.component';
import { AllComponent } from './components/company/all/all.component';
import { AddCouponComponent } from './components/company/add-coupon/add-coupon.component';
import { UpdateCouponComponent } from './components/company/update-coupon/update-coupon.component';
 import { CategoryPriceComponent } from './components/company/category-price/category-price.component';
import { MenuComponent } from './components/company/menu/menu.component';
import { CustCouponsComponent } from './components/customer/cust-coupons/cust-coupons.component';
import { AllCouponsComponent } from './components/admin/all-coupons/all-coupons.component';
import { CustomerMenuComponent } from './components/customer/customer-menu/customer-menu.component';
import { CustCategoryPriceComponent } from './components/customer/cust-category-price/cust-category-price.component';
import { CouponViewComponent } from './components/coupon-view/coupon-view.component';
import { CouponBuyComponent } from './components/customer/coupon-buy/coupon-buy.component';
import { AllCouponsViewComponent } from './components/customer/all-coupons-view/all-coupons-view.component';
import { PurchaseApproveComponent } from './components/customer/purchase-approve/purchase-approve.component';
import { CouponPreviewComponent } from './components/company/coupon-preview/coupon-preview.component';
import { ReadFileComponent } from './components/admin/read-file/read-file.component';
import { AdminBarComponent } from './components/admin/admin-bar/admin-bar.component';
import { CompanyBarComponent } from './components/company/company-bar/company-bar.component';
import { CustomerBarComponent } from './components/customer/customer-bar/customer-bar.component';
import { CategoryFilterBarComponent } from './components/category-filter-bar/category-filter-bar.component';
import { NoCouponsComponent } from './components/no-coupons/no-coupons.component';
 import { DataTablesModule} from 'angular-datatables';
import { ShoppingCartComponent } from './components/customer/shopping-cart/shopping-cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component' 
import { LocationStrategy, HashLocationStrategy } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddCompanyComponent,
    AddCustomerComponent,
    AllCompaniesComponent,
    AllCustomersComponent,
    LayoutComponent,
    DashboardComponent,
    NavBarComponent,
    UpdateCompanyComponent,
    TestUpdateComponent,
    UpdateCustomerComponent,
    AllComponent,
    AddCouponComponent,
    UpdateCouponComponent,
     CategoryPriceComponent,
    MenuComponent,
    CustCouponsComponent,
    AllCouponsComponent,
    CustomerMenuComponent,
    CustCategoryPriceComponent,
    CouponViewComponent,
    CouponBuyComponent,
    AllCouponsViewComponent,
    PurchaseApproveComponent,
    CouponPreviewComponent,
    ReadFileComponent,
    AdminBarComponent,
    CompanyBarComponent,
    CustomerBarComponent,
    CategoryFilterBarComponent,
    NoCouponsComponent,
    ShoppingCartComponent,
    NotFoundComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
     MatToolbarModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    MatIconModule,
    DataTablesModule,
    
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
