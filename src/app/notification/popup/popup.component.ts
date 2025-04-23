import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationCountService } from '../../services/notification-count.service';
import { ApiService } from '../../utils/services/api.service';

@Component({
  selector: 'app-popup',
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  notifications :any[] = []
  dispNotifications: any[] = []

  constructor(private apiService: ApiService, private notificationCount: NotificationCountService,@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef:MatDialogRef<PopupComponent>){}


    ngOnInit(): void {
      this.notifications = this.data.notifications
      this.dispNotifications = [...this.data.notifications]
    }

    onClickNotificationItem(item: any){
      item.is_read = true
    }

    onClickClose(item:any){
      this.notifications = this.notifications.filter(i => i.id !== item.id)
      item.is_read = true
      this.apiService.readNotification(item).subscribe({
        next: (res) =>{},
        error: (e) => console.error(e)
      })
      this.notificationCount.updateCount(this.notifications.length,this.notifications)
      if(this.notifications.length === 0) this.dialogRef.close();
    }


    onClickCloseAll(){
      this.notifications.map(item => item.is_read = true)
      this.notifications = []
      this.notificationCount.updateCount(0,[])
      this.dialogRef.close()
      this.apiService.readAllNotifications().subscribe({
        next: (res) => {},
        error: (e) => console.error(e)})
    }
}
