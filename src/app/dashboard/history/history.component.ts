import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DynamicTableComponent } from '../../dynamic-table/dynamic-table.component';
import { DYNAMIC_TABLE } from '../../utils/constants/common';

@Component({
  selector: 'app-history',
  imports: [DynamicTableComponent, CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  actableConfig: any;
  fieldAnalysis: any;
  labAnalysis: any;
  engineerAnalysis: any
  constructor( private dialogRef: MatDialogRef<HistoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){}


    ngOnInit(){
    this.actableConfig  = DYNAMIC_TABLE.DASHBOARD3
    console.log(this.actableConfig)
    this.fieldAnalysis = this.data.field_analysis || 'NA'
    this.labAnalysis = this.data.lab_analysis || 'NA'
    this.engineerAnalysis = this.data.engg_analysis || 'NA'
    console.log(this.fieldAnalysis,this.labAnalysis,this.engineerAnalysis)
  }

  onClose(){
    this.dialogRef.close();
  }
}
