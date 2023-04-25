import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Ng2EventsModule} from "ng2-events";
import { TechnologiesComponent } from './components/technologies/technologies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    FooterComponent,
    PortafolioComponent,
    ContactComponent,
    TechnologiesComponent,
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    Ng2EventsModule
  ],
  exports: [Ng2EventsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
