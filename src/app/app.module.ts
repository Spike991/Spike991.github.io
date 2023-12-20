import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CurriculumvitaeComponent } from './curriculumvitae/curriculumvitae.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { HobbyComponent } from './hobby/hobby.component';
import {TranslateModule} from '@ngx-translate/core';
import {} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    CurriculumvitaeComponent,
    SkillsComponent,
    ContactComponent,
    HobbyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    TopBarComponent,
    TranslateModule,
    HttpClientModule
  ],
  exports: [MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
