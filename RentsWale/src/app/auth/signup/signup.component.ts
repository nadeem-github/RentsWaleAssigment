import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm: FormGroup;
  successMessage = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signup(): void {
    if (this.signupForm.valid) {
      const { username, password } = this.signupForm.value;

      if (!localStorage.getItem(username)) {
        localStorage.setItem(username, JSON.stringify({ password }));
        this.successMessage = 'Signup successful! Redirecting to login...';
        setTimeout(() => this.router.navigate(['/login']), 2000);
      } else {
        this.successMessage = 'Username already exists. Please login.';
      }
    }
  }
}
