import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'camelcaseToSentence'})
export class CamelcaseToSentencePipe implements PipeTransform {
  transform(str: any): string {
    if(!str) return 'N/A';
    return str.toString().replace(/^is([A-Z])/, '$1')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (char: any) => char.toUpperCase());
  }
}