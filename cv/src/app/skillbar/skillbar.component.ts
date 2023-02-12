import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-skillbar',
  templateUrl: './skillbar.component.html',
  styleUrls: ['./skillbar.component.css']
})
export class SkillbarComponent {
@Input() wid='';
constructor(){

}
OnInit(){
  this.wid;
}

}
