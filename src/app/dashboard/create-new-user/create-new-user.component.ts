import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../../utils/services/api.service';
import { DataUpdateService } from '../../utils/services/data-service.service';

@Component({
  selector: 'app-create-new-user',
  imports: [ReactiveFormsModule],
  templateUrl: './create-new-user.component.html',
  styleUrl: './create-new-user.component.css'
})
export class CreateNewUserComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private dialogRef: MatDialogRef<CreateNewUserComponent>, private dataService: DataUpdateService) {
    this.userForm = this.fb.group({
      username: [''],
      role: [''],
      password: ['']
    });
  }

  onSubmit() {
    this.apiService.createUser(this.userForm.value).subscribe({
      next: (res:any  ) => {
        alert('User Successfully created')
        this.dataService.triggerUpdate()
        this.dialogRef.close()
      },
      error: (error: any) => {
        alert(error.message)
        console.error('Error fetching machine data:', error);
      }
    })
  }
}
