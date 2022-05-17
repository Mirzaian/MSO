import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScaleAlert, ScaleIconAlertSuccess, ScaleNotificationBanner, ScaleToast } from '@telekom/scale-components-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  constructor() { }

  ngOnInit() {
  }

  login(){
    if(this.email == "miniplan" && this.password == "123456")
    {
      window.location.href = "/index"
    }
    else {
    }
  }
}
