import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactResolverService } from './services/contact/contact-resolver.service';
import { ContactDetailsPageComponent } from "./pages/contact-details-page/contact-details-page.component";
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { CoinAppComponent } from './pages/coin-app/coin-app.component';
import { LoginComponent } from "./pages/login/login.component";
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'contact/details/:id', component: ContactDetailsPageComponent, canActivate: [AuthGuard] },
  {
    path: 'contact', component: ContactPageComponent, canActivate: [AuthGuard], children: [
      { path: 'edit/:id', component: ContactEditPageComponent, resolve: { contact: ContactResolverService } },
      { path: 'edit', component: ContactEditPageComponent },
    ]
  },
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
