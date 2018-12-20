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
  // user = {
  //   "_id": req.session.user_id
  // }
  errors = {};

  constructor(
    private _userService: UserService, 
    private _router: Router
  ) { }

  ngOnInit() {
    // this.thisUser(id);
    console.log('made it to dashboard')

  }
  // thisUser(){
  //   let observable = this._userService.getOneById(session.user_id);
  //   observable.subscribe(data => {
  //     if(data['status'] == "not ok"){
  //       this.errors = data['errors']['errors'];
  //     } else {
  //       this._router.navigate(['/dashboard']);
  //     }
  //   });
  // }
}
