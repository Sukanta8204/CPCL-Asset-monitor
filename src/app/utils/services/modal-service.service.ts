import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateAuditDialogComponent } from '../../dashboard/create-audit-dialog/create-audit-dialog.component';
import { CreateNewMachineComponent } from '../../dashboard/create-new-machine/create-new-machine.component';
import { CreateNewUserComponent } from '../../dashboard/create-new-user/create-new-user.component';
import { FormComponent } from '../../dashboard/form/form.component';
import { HistoryComponent } from '../../dashboard/history/history.component';
import { PopupComponent } from '../../notification/popup/popup.component';

interface AuditDialogData {
  machine_type: string; // Add more properties depending on the data you need to pass
  // other properties specific to your dialog
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private readonly dialog: MatDialog) { }

  // Open the dialog and pass data to it
  auditDialog(data: AuditDialogData) {
    const dialogRef = this.dialog.open(CreateAuditDialogComponent, {
      maxHeight: "720px",
      width: "fit-content",
      data,
      panelClass: "custom-dialog-container",
    });

    // You can handle the dialog result here, and return an observable
    return dialogRef.afterClosed();
  }

  dynamicForm(data: AuditDialogData) {
    console.log(data)
    const dialogRef1 = this.dialog.open(FormComponent, {
      maxWidth: '75vw',
      maxHeight: '75vh',
      minWidth: '300px',
      minHeight: '200px',
      data,
      panelClass: "custom-dialog-container",
    });

    // You can handle the dialog result here, and return an observable
    return dialogRef1.afterClosed();
  }

  createUser() {
    const dialogRef2 = this.dialog.open(CreateNewUserComponent, {
      maxWidth: '75vw',
      maxHeight: '75vh',
      minWidth: '300px',
      minHeight: '200px',
      panelClass: "custom-dialog-container-2",
    });

    // You can handle the dialog result here, and return an observable
    return dialogRef2.afterClosed();
  }

  createMachine() {
    const dialogRef2 = this.dialog.open(CreateNewMachineComponent, {
      maxWidth: '75vw',
      maxHeight: '80vh',
      minWidth: '300px',
      minHeight: '200px',
      panelClass: "custom-dialog-container-2",
    });

    // You can handle the dialog result here, and return an observable
    return dialogRef2.afterClosed();
  }

  openHistory(data:any) {
    const dialogRef2 = this.dialog.open(HistoryComponent, {
      maxWidth: '95vw',
      maxHeight: '95vh',
      minWidth: '800px',
      minHeight: '700px',
      data,
      panelClass: "custom-dialog-container",
    });

    // You can handle the dialog result here, and return an observable
    return dialogRef2.afterClosed();
  }

  showTagsPopup(field:any, rect:any,notifications: any){
    const dialogRef = this.dialog.open(PopupComponent, {
        hasBackdrop: true,
        position: {
            top: `${rect.bottom - window.scrollY + 30}px`,
            left: `${rect.left - window.scrollX - 600}px`
        },
        width: '200px',
        data: {field, notifications},
        panelClass: 'custom-dialog-container',
    });
    return dialogRef.afterClosed();
}
}

