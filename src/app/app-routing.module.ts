import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleryComponent } from './pages/galery-component/galery-component.component';
import { PricesComponent } from './pages/prices-component/prices-component.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'galery', component: GaleryComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'contact-me', component: ContactMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
