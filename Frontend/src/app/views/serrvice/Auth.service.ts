import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Headers, Http, RequestOptions,Response } from "@angular/http";
import { Observable } from "rxjs";
import {map} from 'rxjs/operators';
import { User } from "../moldels/User.class";
import { Admin } from "../moldels/Admin.class";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type' : 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
  })
  


export class AuthService{
    private loggedInStatus = false

    authtoken: string = '';

    authname: string = '';

    api_url: string = 'http://localhost:8000/';

    constructor(private http:HttpClient){}

    setLoggedIn(value:boolean){
        this.loggedInStatus = value
    }

    get isLoggedIn(){
        return this.loggedInStatus
    }

    getUser(username:string,password:string) {
        return this.http.post<any>(this.api_url + `accounts/api/auth/`,
        {username, password},httpOptions).pipe(
            map(user=>{
                    if (user && user.token) {
                        this.loggedInStatus = true;
                        this.authtoken = user.token;
                        this.authname = user.username;
                        localStorage.setItem("currentUser", JSON.stringify(user))
                    }              
                    return user;
            }));
            
    }

    postAdmin(admin:Admin)
    {
        let httpOptions = {
            headers: new HttpHeaders({
                'Authorization' : ('token ' + this.authtoken) 
            })
        }
        return this.http.post<any>('http://localhost:8000/accounts/userlist/',admin,httpOptions)
        .pipe(map(
            res =>{}
        ))
    }
    
}