import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private baseUrl = baseUrl

  constructor(private http: HttpClient) { }

  getUserData(){
    return JSON.parse(localStorage.getItem('user_data') || '')
  }
  getMachineData() {
    return  this.http.post<any>(`${this.baseUrl}/api/machines`, this.getUserData());
  }

  getTechnitianData(type: string = 'FT'){
    return this.http.post<any>(`${this.baseUrl}/api/user/${type}`, this.getUserData())
  }

  createAudit(data: any){
    return this.http.post<any>(`${this.baseUrl}/api/createAudit`, data)
  }

  getAudits(data:any){
    return this.http.post<any>(`${this.baseUrl}/api/getAudit/${data.username}`, data)
  }

  postMachineAnalysisData(data: any){
    return this.http.post<any>(`${baseUrl}/api/setAnalysis`, data)
  }

  createUser(data: any){
    return this.http.post<any>(`${baseUrl}/api/signUp`, data)
  }

  createMachine(data: any){
    return this.http.post<any>(`${baseUrl}/api/createMachine`, data)
  }

  getAnalysisData(){
    return this.http.post<any>(`${baseUrl}/api/getAllAnalysis`, this.getUserData())
  }

  readAllNotifications(){
    return this.http.post<any>(`${baseUrl}/api/markReadNotification`,this.getUserData())
  }

  readNotification(data: any){
    return this.http.post<any>(`${baseUrl}/api/markReadNotificationById`, data)
  }

  getDashBoardData(){
    return this.http.post<any>(`${baseUrl}/api/getDashboard`, this.getUserData())
  }

  getAllUsersData(){
    return this.http.post<any>(`${baseUrl}/api/getAllUsers`, this.getUserData())
  }
}

