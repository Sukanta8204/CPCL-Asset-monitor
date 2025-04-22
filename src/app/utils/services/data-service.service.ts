// data-update.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataUpdateService {
  private updateDataSubject = new Subject<void>();

  updateData$ = this.updateDataSubject.asObservable();

  triggerUpdate() {
    this.updateDataSubject.next();
  }
}