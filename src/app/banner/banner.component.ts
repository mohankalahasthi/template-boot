import { Component, OnInit } from '@angular/core';

import { CommonService } from '../services/common/common.service'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  arrayOfElements : any ;

  constructor(private commonService :CommonService) { }

  ngOnInit() {
    this.arrayOfElements = [[1,2,3,4,5,6],
                            [6,7,8,9,11,12],
                            [11,12,13,14,15,16,17,18,91,20],
                            [26,27,28,[29,30]],
                            [31,32,33]];

  }
  banContent: any = [
    {
      heading: 'Hi. This is Transit.',
      para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      button: 'Lorem ipsum dolor'
    }
  ]
  getName(){
    console.log(this.commonService.fullName);
  }
  

}