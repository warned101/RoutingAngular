import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="card">
      <p>
        LTI (NSE: LTI) is a global technology consulting and digital solutions company 
        helping more than 420 clients succeed in a converging world. With operations 
        in 32 countries, we go the extra mile for our clients and accelerate their digital
         transformation with LTI’s Mosaic platform enabling their mobile, social, analytics,
          IoT and cloud journeys.
      </p>
      <p>
        Founded 20 years ago as the information technology arm of the Larsen & Toubro group, 
        our unique heritage gives us unrivaled real-world expertise to solve the most complex 
        challenges of enterprises across all industries.
      </p>
      <p>
        Each day, our team of more than 30,000 LTItes enable our clients to improve the effectiveness 
        of their business and technology operations and deliver value to their customers, employees 
        and shareholders.
      </p>
    </div>
      <div class="card">
        <h1 style="text-align: center">Our Beliefs</h1>
        <div class="cc">
          <img src="assets/extra-mile-237x300.png">
          <p>Go the Extra Mile</p>
        </div>
        <div class="cc">
          <img src="assets/Be-agile-237x300.png">
          <p>Be Agile</p>
        </div>
        <div class="cc">
          <img src="assets/push-frontiers-of-innovation-237x300_robo.jpg">
          <p>Push Frontiers </p>
        </div>
        <div class="cc">
          <img src="assets/keep-learning-237x300.png">
          <p>Keep Learning</p>
        </div>
        <div class="cc">
          <img src="assets/solve-for-society-237x300_new-237x300.png">
          <p>Solve For Society</p>
        </div>
      </div>
  `,
  styleUrls: ['../app.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
