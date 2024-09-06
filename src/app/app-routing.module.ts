import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { ProductOpeningComponent } from './product_opening/product-opening/product-opening.component';
import { ProductSaveComponent } from './product/product-save/product-save.component';



const routes: Routes = [
  // {path: '', redirectTo: 'booking',pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path:'product-opening',component:ProductOpeningComponent},
  {path:'product-save',component:ProductSaveComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
export const routingComponents= [
  
]