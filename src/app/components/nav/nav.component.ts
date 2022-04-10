import { Component, HostListener, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @HostListener('document:scroll', ['$event'])
  onScroll(event:any) {
    this.isActive=true;
      if (this.document.documentElement.scrollTop==0){
        this.isActive=false
      }
  }
isActive:boolean=false;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }
 cambioColor(event:any){
  this.isActive=true;
 }
}
