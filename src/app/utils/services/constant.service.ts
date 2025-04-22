import { Injectable } from "@angular/core";
import { CONSTANTS } from "../constants/constants";
import { CamelcaseToSentencePipe } from "../pipes/camelcase-to-sentence.pipe";

@Injectable()
export class ConstantService{
    constructor(private readonly camelcaseToSentencePipe: CamelcaseToSentencePipe){}

    separateCamcelCase(value:any){
        return this.sentenceCase(this.camelcaseToSentencePipe.transform(value));
    }

    sentenceCase(value: any=''): string {
        if (!value) return value;
        if(typeof value == CONSTANTS.TYPES.BOOLEAN) value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
}
