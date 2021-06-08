import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users = new Array<any>(); // Reafctor to use User class later
  constructor(private userservice: UserService) { }

  ngOnInit() { //Lifecycle Hook
  this.userservice.getUsers().subscribe(userdata=>{
      this.users = userdata;
    })
  }

}