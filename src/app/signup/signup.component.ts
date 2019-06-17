import { Component, OnInit } from '@angular/core';

import { CommonService } from '../services/common/common.service';
import {SigninService } from  '../signup/signin.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  name:String
  obj:any = {}
  constructor(private commonService :CommonService, private signInService: SigninService) { }

  ngOnInit() {
  }
  setName(){
    this.commonService.fullName = this.obj.username;
  }
  submit(){
   console.log(this.obj)
  }


}
