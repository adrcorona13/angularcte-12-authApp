import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  get Usuario(){
    return this.authService.Usuario;
  }

  constructor(private router: Router,
              private authService: AuthService) {}

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }
}
