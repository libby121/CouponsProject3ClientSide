import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AddCompanyComponent } from './components/admin/add-company/add-company.component';
import { AddCustomerComponent } from './components/admin/add-customer/add-customer.component';
import { AllCompaniesComponent } from './components/admin/all-companies/all-companies.component';
import { AllCustomersComponent } from './components/admin/all-customers/all-customers.component';
import { AllComponent } from './components/company/all/all.component';
import { AddCouponComponent } from './components/company/add-coupon/add-coupon.component';
import { MenuComponent } from './components/company/menu/menu.component';
import { CategoryPriceComponent } from './components/company/category-price/category-price.component';
import { HomeComponent } from './components/home/home.component';
import { CustomerMenuComponent } from './components/customer/customer-menu/customer-menu.component';
import { CustCategoryPriceComponent } from './components/customer/cust-category-price/cust-category-price.component';
import { CustCouponsComponent } from './components/customer/cust-coupons/cust-coupons.component';
import { AllCouponsComponent } from './components/admin/all-coupons/all-coupons.component';
import { CouponViewComponent } from './components/coupon-view/coupon-view.component';
import { CouponBuyComponent } from './components/customer/coupon-buy/coupon-buy.component';
import { AllCouponsViewComponent } from './components/customer/all-coupons-view/all-coupons-view.component';
import { CouponPreviewComponent } from './components/company/coupon-preview/coupon-preview.component';
import { ReadFileComponent } from './components/admin/read-file/read-file.component';
import { NoCouponsComponent } from './components/no-coupons/no-coupons.component';
import { ShoppingCartComponent } from './components/customer/shopping-cart/shopping-cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
 

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"home", component:HomeComponent},
  {path:"admin/dashboard", component:DashboardComponent},
  {path:"admin/addCompany", component:AddCompanyComponent},
  {path:"admin/addCustomer", component:AddCustomerComponent},
{path:"admin/allCompanies", component:AllCompaniesComponent},
{path:"admin/allCustomers", component:AllCustomersComponent},
{path:"company/allCoupons", component:AllComponent},
{path:"company/addCoupon",component:AddCouponComponent},
{path:"company/updateCoupon/:id",component:AddCouponComponent},
 {path:"company/menu", component:MenuComponent},
 {path:"company/couponsBy", component:CategoryPriceComponent},
 {path:'customer/menu',component:CustomerMenuComponent},
 {path:"customer/couponsBy",component:CustCategoryPriceComponent },
 {path:"customer/allPurchases", component:CustCouponsComponent},
 {path:"customer/cart",component:ShoppingCartComponent},
 {path:"all/coupons",component:AllCouponsComponent},
 {path:"coupon/:id",component:CouponViewComponent},
 {path:"coupon/buy/:id",component:CouponBuyComponent},
 {path:"cupons/allView",component:AllCouponsViewComponent},
 {path:"preview/:id",component:CouponPreviewComponent},
 {path:"admin/deletion-file",component:ReadFileComponent},
 {path:"noContent",component:NoCouponsComponent},
  {path:'', redirectTo:"login", pathMatch:"full"},
  {path:"**",component:NotFoundComponent,pathMatch:'full'}
   
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
