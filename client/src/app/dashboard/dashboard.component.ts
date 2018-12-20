import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = "scroll";
  user: any;
  errors = {};

  constructor(
    private _userService: UserService, 
    private _router: Router
  ) { }

  ngOnInit() {
    this.thisUser();
    console.log('made it to dashboard')

  }
  thisUser(){
    let observable = this._userService.getOneById();
    observable.subscribe(data => {
      if(data['status'] == "not ok"){
        this.errors = data['errors']['errors'];
        this._router.navigate(['/']);
      } else {
        this.user = data["user"]
      }
    });
  }
  logout(){
    let observable = this._userService.signOff();
    observable.subscribe(data => {
      if(data['status'] == "not ok"){
        this.errors = data['errors']['errors'];
      } else {
        this._router.navigate(['/']);
      }
    });
  }
}
