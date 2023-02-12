import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionAboutUsComponent } from './section-about-us/section-about-us.component';
import { SectionSkillsComponent } from './section-skills/section-skills.component';
import { SectionPortfolioComponent } from './section-portfolio/section-portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { SkillbarComponent } from './skillbar/skillbar.component';
import { SkillNameComponent } from './skill-name/skill-name.component';
import { PortfolioContentComponent } from './portfolio-content/portfolio-content.component';
//...

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionAboutUsComponent,
    SectionSkillsComponent,
    SectionPortfolioComponent,
    FooterComponent,
    SkillbarComponent,
    SkillNameComponent,
    PortfolioContentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
