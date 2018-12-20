import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  title = "scroll";
  cards = [];
  errors = {};
  user: any;

  constructor(
    private _postService: PostService,
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.thisUser();

    $(document).ready(function(){
      // $("html, body").animate({ scrollTop: 0 }, "slow");

      // Add post
    });
  }

  getAllCards(){
    let observable = this._postService.getAll();
    observable.subscribe( data => {
      this.cards = data['posts'];
      console.log(data);
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

}
