import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-content',
  templateUrl: './portfolio-content.component.html',
  styleUrls: ['./portfolio-content.component.css']
})
export class PortfolioContentComponent implements OnInit {
  @Input() con = "";
constructor(){
}
ngOnInit(){
  this.con;
}
}
