import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  bannerNav: any = [
    {
      a1: 'Home',
      a2: 'Generic',
      a3: 'Elements',
      btn: 'SignUp'
    }
  ]

}
