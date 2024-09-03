import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { ProductOpeningComponent } from './product_opening/product-opening/product-opening.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';



const routes: Routes = [
  // {path: '', redirectTo: 'booking',pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path:'product-opening',component:ProductOpeningComponent},
  {path:'product-details',component:ProductDetailsComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
export const routingComponents= [
  
]