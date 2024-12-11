import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInUser: string | null = null;

  login(username: string, password: string): boolean {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (storedUser.username === username && storedUser.password === password) {
      this.loggedInUser = username;
      sessionStorage.setItem('loggedInUser', username);
      return true;
    }
    return false;
  }

  signup(username: string, password: string): boolean {
    localStorage.setItem(
      'user',
      JSON.stringify({ username, password })
    );
    return true;
  }

  logout(): void {
    this.loggedInUser = null;
    sessionStorage.removeItem('loggedInUser');
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('loggedInUser');
  }
}
