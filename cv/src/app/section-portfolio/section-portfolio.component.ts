import { Component } from '@angular/core';

@Component({
  selector: 'app-section-portfolio',
  templateUrl: './section-portfolio.component.html',
  styleUrls: ['./section-portfolio.component.css']
})
export class SectionPortfolioComponent {
  content : Array<string>;
  constructor() {
    this.content = ["WEB DESIGN","MOBILE DESIGN","LOGO DESIGN","WEB APPLICATION DEVELOPMENT","MOBLIE APPLICATION DEVELOPMENT","PWA DEVELOPMENT"];
  }
}
