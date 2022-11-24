import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  form:FormGroup;

  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:'',
      password:''
    })
  }

  submit():void{
    console.log(this.form.getRawValue())
    const headers = { 'content-type': 'text/plain'}  
    this.http.post("http://35.172.27.182:8080/login", this.form.getRawValue(), {'headers':headers, withCredentials: true}).subscribe(
        () => this.router.navigate(["/"])
    );
  }
}
