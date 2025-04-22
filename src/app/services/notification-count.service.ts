import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationCountService {

  private dataSource = new BehaviorSubject<number>(0)
  private dataArray = new BehaviorSubject<any>([])
  constructor() { }

  currentData = this.dataSource.asObservable()
  currentArray = this.dataArray.asObservable()

  updateCount(data: number, arr: any){
    this.dataSource.next(data)
    this.dataArray.next(arr)
  }
}
