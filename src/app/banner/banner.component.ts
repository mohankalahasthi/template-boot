import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  banContent: any = [
    {
      heading: 'Hi. This is Transit.',
      para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      button: 'Lorem ipsum dolor'
    }
  ]
}