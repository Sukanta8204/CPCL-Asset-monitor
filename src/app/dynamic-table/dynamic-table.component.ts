import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CONSTANTS } from '../utils/constants/constants';
import { CommonTitlecasePipe } from "../utils/pipes/common-titlecase.pipe";
import { SentenceCasePipe } from "../utils/pipes/sentence-case.pipe";
import { DynamicTableService } from '../utils/services/dynamic-table.service';


@Component({
  selector: 'app-dynamic-table',
  imports: [CommonModule, FormsModule,  SentenceCasePipe, CommonTitlecasePipe],
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.css'
})
export class DynamicTableComponent {
  @Input() databaseList: any[] = [];
    @Input() title = 'Machine Data';
    @Input() removeKeys: any[] = [];
    @Input() dateKeys: any[] = [];
    @Input() orderKeys: any[] = [];
    @Input() actionKeys :any[]=  [];
    @Input() renameHeaderKeys:any[] = [];
    @Input() actionButtonType = '';
    @Input() noPadding: boolean = false;
    @Output() openModal =  new EventEmitter();
    @Output() onSelectCheckbox = new EventEmitter();
    @Output() menuEmiter = new EventEmitter();
    @ViewChildren("menuButton") menuButtons!: QueryList<ElementRef>;

    public array = Array;
    public tableKeys!:any[];
    public tableHeadingKeys: any[] = [];
    public isCopied = false;
    public isHeader = false;

    public userRole = '';
    public allActionKeys = CONSTANTS.ALL_ACTION_OPTIONS;

    constructor(private readonly dynamicTableService:DynamicTableService, private readonly router: Router){}

    ngOnInit(){
      this.userRole = JSON.parse(localStorage.getItem('user_data') || '').role
    }

    ngOnChanges(){
      if(this.databaseList && this.databaseList.length){
          this.tableKeys = Object.keys(this.databaseList[0]);
          this.tableKeys = this.dynamicTableService.arrangeArray(this.tableKeys, this.orderKeys);
          this.transformKeyValue();
      }
  }

  removeItemsFromArray() {
    this.tableKeys = this.tableKeys.filter(item => !this.removeKeys.includes(item));
}


  transformKeyValue(){
    if(this.removeKeys.length) this.removeItemsFromArray();
      if(this.actionKeys.length) {
          this.actionKeys.forEach((action:any) => {
              if(action.addInLastCol) this.tableKeys.push(action.buttonType);
              else {
                  this.tableKeys.unshift(action.buttonType);
              }
          })
      }
      this.tableHeadingKeys = this.dynamicTableService.renameHeaderKeys(this.tableKeys, this.renameHeaderKeys);
      this.tableHeadingKeys = this.tableHeadingKeys.map(key => {
          return this.dynamicTableService.transformKeyIntoText(key)
      });
    }

    isString(val: any){
      return typeof val === CONSTANTS.TYPES.STRING;
  }

  navigate(item:any, action:any){
    if(action.isModal) this.openModal.emit({ ...item, action });
    else if(action.isNavigate) this.router.navigateByUrl(action.navigateUrl);
    else return;
}

// openMenu(item:any, index:any){
//   const action = this.actionKeys.find(action=> action.buttonType==commonKeys.ACTION.MENU);
//   if(action){
//       const menuButton = this.menuButtons.toArray()[index];
//       const dialogRef = this.modalService.menuFilter(menuButton, action.menus);
//       dialogRef.subscribe((buttonName: string) =>{
//           if(buttonName){
//               this.menuEmiter.emit({buttonName, item});
//           }
//       })
//   }

getStatusClass(value: any): string {
  const val = (value || '').toLowerCase();
  if (val === 'active') return 'action-status-for-stop';
  if (val === 'inactive') return 'inactive-status-for-stop';
  return '';
}

getActionKey(buttonType: string){
  return this.actionKeys.find(action => action.buttonType == buttonType);
}


}


