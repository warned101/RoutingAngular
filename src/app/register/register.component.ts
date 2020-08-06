import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  template: `
  
    <div class="card">
      <h2 style="text-align: center;">Register to explore amazing career opportunities</h2>
        <form>
          <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required>
        
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required>
        
            <label for="email"><b>Email Address</b></label>
            <input type="email" placeholder="Enter Email Address" name="email" required>
        
            <label for="city"><b>City</b></label>
            <input type="text" placeholder="Enter City" name="city" required>
        
            <label for="mobile"><b>Mobile No.</b></label>
            <input type="tel" placeholder="Enter Mobile Number" onkeypress="validate1();" id="mobile" required>
            <span id="mbError" style="color:red"></span>

            <button type="submit">Register</button>
          </div>
        </form>
    </div>

  `,
  styleUrls: ['../app.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
