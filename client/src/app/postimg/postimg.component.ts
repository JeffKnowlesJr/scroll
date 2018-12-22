import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postimg',
  templateUrl: './postimg.component.html',
  styleUrls: ['./postimg.component.css']
})
export class PostimgComponent implements OnInit {

  user: any;
  post = {
    "title": "",
    "imageurl": "",
    "contents": "",
    "creator_id": "",
    "creator_name": "",
    "creator_icon": ""
  }
  errors = {};

  constructor(
    private _postService: PostService,
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.thisUser();
  }

  create(){
  console.log("CREATE EXECUTED");
  let observable = this._postService.createOne(this.post);
  observable.subscribe(data => {
    console.log(data);
    if (data['status'] == 'not ok'){
      this.errors = data['errors']['errors'];
    }
    else{
      this.post = {
        "title": "",
        "imageurl": "",
        "contents": "",
        "creator_id": "",
        "creator_name": "",
        "creator_icon": ""
      }
      this._router.navigate(['/dashboard']);
    }
  });
}

thisUser(){
  let observable = this._userService.getOneById();
  observable.subscribe(data => {
    if(data['status'] == "not ok"){
      this.errors = data['errors']['errors'];
      this._router.navigate(['/']);
    }
    else {
      this.user = data["user"]
      console.log(this.user);

      this.post = {
        "title": "",
        "imageurl": "",
        "contents": "",
        "creator_id": this.user._id,
        "creator_name": this.user.username,
        "creator_icon": this.user.icon
      }
      console.log(this.post);
    }
  });
}
}
