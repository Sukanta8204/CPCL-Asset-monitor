import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../../utils/services/api.service';

@Component({
  selector: 'app-create-new-machine',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-new-machine.component.html',
  styleUrl: './create-new-machine.component.css'
})
export class CreateNewMachineComponent {
  machineForm!: FormGroup;

  areaOptions = ['SS1', 'EURO-4'];
  machineTypeOptions = ['compressor', 'transformer'];

  constructor(private fb: FormBuilder , private apiService: ApiService, private dialogRef: MatDialogRef<CreateNewMachineComponent>) {}

  ngOnInit(): void {
    this.machineForm = this.fb.group({
      area: [''],
      machine_type: [{ value: '', disabled: true }],
      frequency: [{ value: '', disabled: true }],
      name: ['']
    });

    // Enable machine_type when area is selected
    this.machineForm.get('area')?.valueChanges.subscribe((val:any) => {
      if (val) {
        this.machineForm.get('machine_type')?.enable();
      } else {
        this.machineForm.get('machine_type')?.reset();
        this.machineForm.get('machine_type')?.disable();
        this.machineForm.get('frequency')?.reset();
        this.machineForm.get('frequency')?.disable();
      }
    });

    // Enable frequency when machine_type is selected
    this.machineForm.get('machine_type')?.valueChanges.subscribe((val:any) => {
      if (val) {
        this.machineForm.get('frequency')?.enable();
      } else {
        this.machineForm.get('frequency')?.reset();
        this.machineForm.get('frequency')?.disable();
      }
    });
  }

  onSubmit() {
    this.apiService.createMachine(this.machineForm.value).subscribe({
      next: (res:any  ) => {
        alert('Machine Successfully created')
        this.dialogRef.close()
      },
      error: (error: any) => {
        alert(error)
        console.error('Error fetching machine data:', error);
      }
    })
  }
}
