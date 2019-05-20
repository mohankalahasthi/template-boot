import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';    

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  menus:any = []
  constructor(private router: Router,private activeRoute : ActivatedRoute) { 
    this.menus = ["home", "generics", "elements"];
  }

  ngOnInit() {
    // console.log(this.activeRoute.snapshot.url)  // array of states
    // console.log(this.activeRoute.snapshot.url[0].path) 
  }
  

}
