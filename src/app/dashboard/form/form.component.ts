import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DYNAMIC_FORM } from '../../utils/constants/common';
import { CONSTANTS } from '../../utils/constants/constants';
import { ApiService } from '../../utils/services/api.service';
import { DataUpdateService } from '../../utils/services/data-service.service';
import { DynamicFormComponent } from "../dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-form',
  imports: [DynamicFormComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  formConfig = DYNAMIC_FORM;
  currentFormType = 'TRANSFORMER';

  constructor(private apiService: ApiService,private dataUpdateService: DataUpdateService,@Inject(MAT_DIALOG_DATA) public data: any,private dialogRef: MatDialogRef<FormComponent>){}

  ngOnInit(){
    this.currentFormType = this.data.machine_type.toUpperCase()
  }

  setFormType(type: string): void {
    this.currentFormType = type;
  }

  handleFormAction(event: any): void {
    let formData = {
      tested_by: JSON.parse(localStorage.getItem('user_data')|| '').username,
      analysis_data: {...event.data},
      remark:event.data.remarks,
      ...this.data,
      audit_id: this.data.id,
      is_health: JSON.parse(localStorage.getItem('user_data')|| '').role === 'ET'? true:event.isHealthy
    }

    if (event.action === CONSTANTS.ACTION.PROCEED) {
      // Handle form submission
      delete formData.action
      delete formData.id
      this.submitForm(formData);
    } else if (event.action === CONSTANTS.ACTION.CANCEL_POPUP) {
      // Handle cancellation
      this.cancelForm();
    }
  }

  submitForm(data: any): void {
    // Implement your form submission logic here
    this.apiService.postMachineAnalysisData(data).subscribe({
      next: (res:any  ) => {
        this.dataUpdateService.triggerUpdate();
        alert('Uploaded Successfully')
      },
      error: (error: any) => {
        alert(error.message)
        console.error('Error fetching machine data:', error);
      }
    });

    this.dialogRef.close();

  }

  cancelForm(): void {
    // Implement your cancellation logic here
    this.dialogRef.close()
  }
}
