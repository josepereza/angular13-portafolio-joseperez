import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';

import { zoomIn } from 'ng-animate';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('zoom', [transition('* => *', useAnimation(zoomIn))])
  ],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
