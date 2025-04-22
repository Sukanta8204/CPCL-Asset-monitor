import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { baseUrl } from '../utils/environment/environment';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private apiUrl = baseUrl

  constructor(private http: HttpClient,private router: Router) {}

  loginUser(data: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/api/login`, data)
  }

  logout() {
    localStorage.removeItem('user_data');
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 10); // Usually not necessary, but safe in edge cases
  }
}

