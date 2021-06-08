import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userservice: UserService) { }

  ngOnInit() {
  }

  postForm(userObj:any){
    //HTTP Post request 
    this.userservice.addUser(userObj).subscribe(response=>{
      console.log(response);
      alert('Form is posted successfully');
    })
  }
}