import { Injectable } from "@angular/core";


@Injectable(
  {providedIn:'root'}
)
export class DynamicTableService{
  arrangeArray(main: any, order: any) {
    return main.sort((a:any, b:any) => {
        const indexA = order.indexOf(a);
        const indexB = order.indexOf(b);

        if (indexA !== -1 && indexB !== -1) {
            return indexA - indexB;
        } else if (indexA !== -1) {
            return -1;
        } else if (indexB !== -1) {
            return 1;
        } else {
            return 0;
        }
    });
  }

  renameHeaderKeys(tableKeys:any, newKeys:any){
        const output = tableKeys.map((item:any) => {
            const modifiedItem = newKeys.find((replacement:any) => replacement.original === item);
            return modifiedItem ? modifiedItem.modify : item;
        });
        return output;
      }


  transformKeyIntoText(key:any){
    return key
      .replace(/^is([A-Z])/, '$1')
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (char: any) => char.toUpperCase());
  }

}