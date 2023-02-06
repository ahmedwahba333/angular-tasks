import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionAboutUsComponent } from './section-about-us/section-about-us.component';
import { SectionSkillsComponent } from './section-skills/section-skills.component';
import { SectionPortfolioComponent } from './section-portfolio/section-portfolio.component';
import { FooterComponent } from './footer/footer.component';
//...

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionAboutUsComponent,
    SectionSkillsComponent,
    SectionPortfolioComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
