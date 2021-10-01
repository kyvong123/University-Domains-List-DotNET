import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from '../moldels/User.class';
import { AuthService } from '../serrvice/Auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit { 
  public user = {
    username:'',
    password:''
  };

  myform: FormGroup;
  constructor(private authService:AuthService, private router:Router){}
  ngOnInit(): void{
    this.myform = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }

  get f(){
      return this.myform.controls;
  }

  loginUser(event)
  {
    // event.preventDefault();
    // const username = event.target.querySelector('#username').value;
    // const password = event.target.querySelector('#password').value;
    // console.log(username,password);
    // this.user ={
    //   username:username,
    //   password:password
    // }
    console.log(this.f.username.value,this.f.password.value);
    this.authService.getUser(this.f.username.value,this.f.password.value).pipe(first()).subscribe(
      data =>{
        this.router.navigate(['/dashboard'])
        console.log("thanh cong")
      }
    
    );
    }
}
