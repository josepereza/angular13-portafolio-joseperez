import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor() { }

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
