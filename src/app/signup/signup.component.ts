import { Component, OnInit } from '@angular/core';

import { CommonService } from '../services/common/common.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  name:String
  constructor(private commonService :CommonService ) { }

  ngOnInit() {
  }
  setName(){
    this.commonService.fullName = this.name;
  }


}
