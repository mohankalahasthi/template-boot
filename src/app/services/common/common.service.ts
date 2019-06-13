import {Injectable} from '@angular/core';


@Injectable()
export class CommonService {
  
    firstName : String;
    lastName : String;
    constructor() {
    
    }

    public get fullName(){
        return this.firstName + ' ' + this.lastName;
    }
    public set fullName(name:String){
        let words = name.toString().split(' ');
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
    }
}
