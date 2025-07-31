import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AdminService } from '../../services/admin.service';
import { User } from '../../models/user';
import { Admin } from '../../models/admin';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true, // ✅ since it's a standalone component
  imports: [FormsModule], // ✅ import FormsModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  role = '';
  constructor(
    private userService: UserService,
    private adminService: AdminService,
    private router: Router
  ) {}

  login() {
    if (this.role === 'USER') {
      this.userService.login(this.email, this.password).subscribe({
        next: (user: User) => {
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/user/dashboard']);
        },
        error: () => alert('User login failed')
      });
    } else if (this.role === 'ADMIN') {
      this.adminService.login(this.email, this.password).subscribe({
        next: (admin: Admin) => {
          localStorage.setItem('admin', JSON.stringify(admin));
          this.router.navigate(['/admin/dashboard']);
        },
        error: () => alert('Admin login failed')
      });
    }
  }
}
