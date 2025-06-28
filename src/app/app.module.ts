import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { GaleryComponent } from './pages/galery-component/galery-component.component';
import { PricesComponent } from './pages/prices-component/prices-component.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NavbarComponent } from './basic-components/navbar/navbar.component';
import { FooterComponent } from './basic-components/footer/footer.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { SocialMediaComponent } from './basic-components/social-media/social-media.component';
import { ImageLoadDirective } from './directives/image-load.directive';
import { ServicesComponent } from './pages/services/services.component';
import { OneServiceComponent } from './pages/services/one-service/one-service.component';
import { PriceDetailsComponent } from './basic-components/price-details/price-details/price-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AdminComponent } from './pages/admin/admin.component';
import { RibbonComponent } from './basic-components/ribbon/ribbon.component';
import { ServicesSimpleComponent } from './pages/services-simple/services-simple.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    GaleryComponent,
    PricesComponent,
    MainPageComponent,
    NavbarComponent,
    FooterComponent,
    ContactMeComponent,
    SocialMediaComponent,
    ImageLoadDirective,
    ServicesComponent,
    OneServiceComponent,
    PriceDetailsComponent,
    PageNotFoundComponent,
    AdminComponent,
    RibbonComponent,
    ServicesSimpleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    NgbModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
