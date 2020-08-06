import { Component, OnInit } from '@angular/core';
import { Post } from "./post"
import { MyApiService } from "../services/myapi.service"
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  template: `
    <div class="card">
<h2 style="text-align: center;">Login to a world of opportunities!</h2>
      <form>
          <div class="container">
            <label for="uname"><b>Username</b></label>
              <input type="password" placeholder="Enter Password" name="psw">
        
            <button type="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember"> Remember me
            </label>
          </div>
        
          <div class="container" style="background-color:#f1f1f1">
            <button type="button" class="cancelbtn">Cancel</button>
            <span class="psw">Forgot <a href="#">password?</a></span>
          </div>
        </form>
    </div>

  `,
  styleUrls: ['../app.component.css']
})
export class LoginComponent implements OnInit {

  
  comment:Comment[];
  usrData:Comment[];

  userid:string;

  retPost = new Post();

  constructor(private myApi:MyApiService){}

  title = 'ServiceDemoApp';

  ngOnInit() {
    
  }


  userIdData() {
    this.myApi.getCommentsByUserId(this.userid).subscribe(
      idData=>{
        console.log(idData);
        this.usrData = idData;
      }
    );
  }

  loginCheck() {
    this.myApi
  }

}
