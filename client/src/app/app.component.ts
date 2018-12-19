import { Component } from '@angular/core';
import { UserService } from './user.service';
import { RouterModule, Routes } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scrollett';
  users = [];
  newUser = {
    "name": ""
  }

  constructor(private _userService:UserService){}

  ngOnInit(){

    // JQuery Function Integrations
    $(document).ready(function(){
      $("html, body").animate({ scrollTop: 0 }, "slow");
      $('div.hidden').fadeIn(1500).removeClass('hidden');

      $("#info_head_1").hide();
      $(".icons").hide();

      //--------->> Picture Functions
      $('.arrow1').click(function(){
        $("html, body").animate({ scrollTop: 910 }, "slower");

        $("#info_head_1").fadeIn(1500, function(){});
      });

      //--------->> About Section Functions
      $('.arrow2').click(function(){
        var about = $(document.getElementById("about"));

        $("html, body").animate({ scrollTop: 1990 }, "slower");

        about.animate({fontSize: '50px'}, 1000);

        $(".icons").fadeIn(3500, function(){});
      });
    });
  }

  andGetUsers(){
    let observable = this._userService.getUsers();
    observable.subscribe( (data) => {
      console.log(data);
      this.users = data['users'];
    });
  }

  destroyUser(user_id){
    let observable = this._userService.removeUser(user_id);
    observable.subscribe( (data) => {
      console.log(data);
      this.andGetUsers();
    });
  }

  makeUser(){
    let observable = this._userService.createUser(this.newUser);
    observable.subscribe( data => {
      console.log(data);
      this.andGetUsers();
      this.newUser = {
        "name": ""
      };
    });
  }
}
