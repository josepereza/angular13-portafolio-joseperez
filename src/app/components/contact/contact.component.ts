import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
