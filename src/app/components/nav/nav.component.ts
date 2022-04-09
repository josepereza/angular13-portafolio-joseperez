import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  onScroll(event:any) {
    this.isActive=true;
      if (window.pageYOffset==0){
        this.isActive=false
      }
  }
isActive:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
 cambioColor(event:any){
  this.isActive=true;
 }
}
