import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  technologies:Array<string>=
  [
   "../../../assets/technologies/angular.png",
   "../../../assets/technologies/typescript.png",
   "../../../assets/technologies/Bootstrap.png",
   "../../../assets/technologies/css.png",
   "../../../assets/technologies/html.png",
   "../../../assets/technologies/mysql.png",
   "../../../assets/technologies/node.png",
   "../../../assets/technologies/js.png",
   "../../../assets/technologies/nestjs.png",
   "../../../assets/technologies/angular3.png",

];
  constructor( ) { }

  ngOnInit(): void {
  }
  isActive:boolean=false;
  activate(){
    console.log('activate')
    this.isActive=true
}
deactivate(){
  this.isActive=false
}
}
