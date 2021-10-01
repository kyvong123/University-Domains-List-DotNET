import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../moldels/Admin.class';
import { AuthService } from '../serrvice/Auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  admin: Admin ={
    UserName:'',
    Email:'',
    Password:'',
    FirstName:'',
    LastName:'',

  }

  myform: FormGroup;

  constructor(private authService:AuthService, private router :Router) { }
  ngOnInit():void{
    this.myform = new FormGroup({
      UserName: new FormControl(''),
      Email: new FormControl(''),
      FirstName: new FormControl(''),
      LastName: new FormControl(''),
      Password: new FormControl(''),
    })
  }
  get f(){
    return this.myform.controls;
  }
  registerUser($event)
  {
      this.admin ={
        UserName:this.f.UserName.value,
        FirstName: this.f.FirstName.value,
        LastName: this.f.LastName.value,
        Email:this.f.Email.value,
        Password:this.f.Password.value,
      }
      this.authService.postAdmin(this.admin).subscribe(
        data=>{
          this.router.navigate(['/login']);
          console.log('dang ky thanh cong');
        }
      )
  }
}
