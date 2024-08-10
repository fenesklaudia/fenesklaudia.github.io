import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleryComponent } from './pages/galery-component/galery-component.component';
import { PricesComponent } from './pages/prices-component/prices-component.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { ServicesComponent } from './pages/services/services.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'galery', component: GaleryComponent},
  {path: 'prices', component: PricesComponent},
  {path: 'contact-me', component: ContactMeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'services/:subpage', component: ServicesComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
