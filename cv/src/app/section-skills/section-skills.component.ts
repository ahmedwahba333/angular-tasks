import { Component } from '@angular/core';
@Component({
  selector: 'app-section-skills',
  templateUrl: './section-skills.component.html',
  styleUrls: ['./section-skills.component.css']
})
export class SectionSkillsComponent {
  skillnames: string[];
  width: string[];
  constructor() {
    this.skillnames = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'JQuery', 'Angular', 'PHP', 'Laravel'];
    this.width = ['98%', '98%', '90%', '93%', '80%', '95%', '85%', '88%']
  }
  ngOnInit(): void {

  }
}