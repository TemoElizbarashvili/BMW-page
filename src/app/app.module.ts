import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutCarComponent } from './components/about-car/about-car.component';
import { FeaturesComponent } from './components/features/features.component';
import { SpecsComponent } from './components/specs/specs.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    NavigationComponent,
    AboutCarComponent,
    FeaturesComponent,
    SpecsComponent,
    GalleryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
