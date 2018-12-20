import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = "scroll";

  newUser = {
    username:"",
    email:"",
    password:""
  }
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  create_user() {
    console.log(this.newUser);
    this._router.navigate(['/dashboard']);
  }

}
