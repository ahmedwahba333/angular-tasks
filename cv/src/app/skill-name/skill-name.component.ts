import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-name',
  templateUrl: './skill-name.component.html',
  styleUrls: ['./skill-name.component.css']
})
export class SkillNameComponent implements OnInit {
  @Input() skillname = "";
constructor(){
}
ngOnInit():void{
    this.skillname;
}
}
