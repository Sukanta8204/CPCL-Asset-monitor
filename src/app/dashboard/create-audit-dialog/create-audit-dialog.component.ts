import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { CommonModule } from '@angular/common';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { ApiService } from '../../utils/services/api.service';
import { DataUpdateService } from '../../utils/services/data-service.service';


@Component({
  selector: 'app-create-audit-dialog',
  templateUrl: './create-audit-dialog.component.html',
  styleUrls: ['./create-audit-dialog.component.css'],
  imports: [MatDialogModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
  ReactiveFormsModule,
  CommonModule]
})
export class CreateAuditDialogComponent {
  form: FormGroup;
  users: { username: string }[] = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateAuditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService,
    private router : Router,
    private dataUpdateService: DataUpdateService
  ) {
    this.form = this.fb.group({
      assignedTo: ['', Validators.required]
    });

    this.form.valueChanges.subscribe(value => {
      console.log('Form value changed:', value, this.form) ;
    });

    this.loadUsers();
  }

  private loadUsers(): void {

    this.apiService.getTechnitianData().subscribe({
      next: (res:any  ) => {
        this.users = res
      },
      error: (error: any) => {
        alert(error.message)
        console.error('Error fetching machine data:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      let requestData = {machine_id :this.data.name, assigned_to: this.form.value.assignedTo, assigned_by: JSON.parse(localStorage.getItem('user_data') || '').username};
      this.apiService.createAudit(requestData).subscribe({
        next: (res:any  ) => {
          if(res.message) alert(res.message)
          else this.dataUpdateService.triggerUpdate();
        },
        error: (error: any) => {
          alert(error.message)
          console.error('Error fetching machine data:', error);
        }
      })
      this.dialogRef.close(this.form.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
