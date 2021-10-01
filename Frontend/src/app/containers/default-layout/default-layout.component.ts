import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../views/serrvice/Auth.service';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})

export class DefaultLayoutComponent {
  constructor(private router:Router, private auth:AuthService){}
  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout(){
    this.auth.setLoggedIn(false);
    this.router.navigate(['/login']);
  }
}
