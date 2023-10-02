import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-login-resto',
  templateUrl: './login-resto.component.html',
  styleUrls: ['./login-resto.component.css']
})
export class LoginRestoComponent implements OnInit {

  alert:boolean=false
  login = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private resto: RestoService) { }

  ngOnInit(): void {

  }
  collection() {
    console.warn(this.login.value)
    this.resto.loginUser(this.login.value).subscribe((result: any) => {
      console.warn(result);
      this.alert=true
    })
  }
  closeAlert()
  {
    this.alert=false
  }
}




