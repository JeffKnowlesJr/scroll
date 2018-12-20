import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
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

  add_post_clicked() {
    if(this.add_post) {
      this.add_post = false;
    }
    else{
      this.add_post = true;
    }
  }



}
