// dynamic-form.component.ts
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule, MatOptionModule],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() formConfig: any;
  @Input() formType: string = '';
  @Output() formAction = new EventEmitter<any>();

  dynamicForm: FormGroup;
  @Input() auditData: any;
  leftFields: any[] = [];
  bottomFields: any[] = [];

  constructor(private fb: FormBuilder) {
    this.dynamicForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.initForm();

  }

  initForm(): void {
    if (!this.formConfig || !this.formType) return;

    const formData = this.formConfig[this.formType];
    if (!formData) return;

    // Reset form
    this.dynamicForm = this.fb.group({});
    this.leftFields = formData[JSON.parse(localStorage.getItem('user_data')||'').role]
      this.bottomFields = formData.BOTTOM || [];
    // Add form controls for left fields
    this.leftFields.forEach(field => {
      if (field.type !== 'button') {
        this.dynamicForm.addControl(
          field.name,
          this.fb.control(
            field.value,
            field.isRequired ? [Validators.required] : []
          )
        );
      }
    });
  }

  onButtonClick(action: string): void {
    if (action === 'proceed' && this.dynamicForm.invalid) {
      this.markAllAsTouched();
      return;
    }


    let isHealthy = true

    this.leftFields.forEach(item => {
      const value = this.dynamicForm.value[item.name];

      if (item.name !== 'remarks') {
        const belowMin = item.thresholdMin !== null && value < item.thresholdMin;
        const aboveMax = item.thresholdMax !== null && value > item.thresholdMax;

        if (belowMin || aboveMax) {
          isHealthy = false;
        }
      }
    });

    this.formAction.emit({
      action,
      data: this.dynamicForm.value,
      isHealthy: isHealthy
    });
  }

  markAllAsTouched(): void {
    Object.keys(this.dynamicForm.controls).forEach(key => {
      this.dynamicForm.get(key)?.markAsTouched();
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.dynamicForm.get(fieldName);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  getFieldType(type: string): string {
    switch (type) {
      case 'number':
        return 'number';
      case 'textarea':
        return 'textarea';
      default:
        return 'text';
    }
  }
}