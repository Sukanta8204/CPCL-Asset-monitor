import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SubjectService{
    public isBackdrop = new BehaviorSubject<boolean>(false);
    public emitFields = new Subject<Object>();
    public isServiceApplicable = new Subject<Object>();
    public applicableOnAllActiveServices = new Subject<Object>();
    public sendRequestToGenericForm = new Subject<Object>();
    public sendResponseToComponent = new Subject<Object>();

    sendResponseToComp(sendRequestTo:any, formData:any){
        this.sendResponseToComponent.next({ sendRequestTo, formData });
    }
}