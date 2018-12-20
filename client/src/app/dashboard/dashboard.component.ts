import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  title = "scroll";
  add_post = false;
  user: any;
  errors = {};

  constructor(
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {

    this.thisUser();

    console.log('made it to dashboard')
      $(document).ready(function(){
        // $("html, body").animate({ scrollTop: 0 }, "slow");


        // Add post
        $('.fa-plus').mouseover(function() {
          $('.add_post_text').css("visibility","visible");
          $('.add_post_text').hide();
          $('.add_post_text').fadeIn(400);
        });

        $('.fa-plus').mouseout(function() {
          $('.add_post_text').fadeOut(400, function(){
            $('.add_post_text').css("visibility","hidden");
          });
        });
      });
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

  add_post_clicked() {
    if(this.add_post) {
      this.add_post = false;
    }
    else{
      this.add_post = true;
    }
  }
}
