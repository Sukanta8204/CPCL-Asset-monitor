import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private http: HttpClient) {}

  getNotifications(){
    const name = JSON.parse(localStorage.getItem('user_data') || '{}').username;
    return this.http.post<any[]>(`${baseUrl}/api/getNotification/${name}`, {});
  }
}
