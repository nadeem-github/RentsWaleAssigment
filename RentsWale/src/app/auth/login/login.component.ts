import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      const storedUser = JSON.parse(localStorage.getItem(username) || '{}');
      
      if (storedUser && storedUser.password === password) {
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = 'Invalid username or password. Please signup.';
      }
    }
  }
}
