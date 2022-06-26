import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FooterComponent} from './components/footer/footer.component';
import {TeamSectionComponent} from './components/team-section/team-section.component';
import {ServiceSectionComponent} from './components/service-section/service-section.component';
import {BannerComponent} from "./components/banner/banner.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FooterComponent,
    TeamSectionComponent,
    ServiceSectionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
