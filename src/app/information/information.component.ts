import { Component, OnInit, Output ,Input,EventEmitter} from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { Observable, Subscription ,BehaviorSubject} from 'rxjs';
import { ContactPerson } from 'src/models/ContactPerson';
import { SubmitionValidation } from 'src/Validators/SubmitionValidation';
 import {  filter } from 'rxjs/operators';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  superClaim:string
  dateEvent:Date
  cause=''
  injury:string
  submition:string
  identity:string
  myForm:FormGroup;
  isClaimCauseSelected:boolean;
  eventsSubscription1:Subscription;
  eventsSubscription2:Subscription;
  onChangeClaimCause(){
    this.isClaimCauseSelected=false;
  }
  @Input()
  persons:ContactPerson[];
  ngOnInit(): void { 
    this.eventsSubscription1 = this.reset.subscribe(() => this.deleteForm1());
    this.isClaimCauseSelected=true;
    this.myForm=new FormGroup({
      superClaimType:new FormControl("",Validators.required), 
      eventDate:new FormControl("",Validators.required),
      claimCause:new FormControl("",Validators.required),
      submitionMethod:new FormControl( "",SubmitionValidation.check(this.persons)),
      identityType:new FormControl("",Validators.required)
    });
    this.myForm.statusChanges.pipe(filter((status: string) => 
    {console.log(status); return this.myForm.valid}))
    .subscribe(() => this.isValidFo());
  }
  @Input()
  reset:Observable<void>
  @Input()
  print:Observable<void>
  @Input()
  validF:Observable<void>;
  @Output()
  onValid:EventEmitter<FormGroup>=new EventEmitter<FormGroup>();
  constructor() { 
  }
  isValidFo(){
   console.log("valid form"+this.myForm.valid)
   this.onValid.emit(this.myForm);
  }
  deleteForm1(){
    console.log("from delete")
    this.isClaimCauseSelected=true
    this.myForm.reset()
    
  }
  @Input()
  insuredPerson:ContactPerson
  superClaimTypes:any[]= [
    { code: 1, value: "התביעה אושרה" },
    { code: 2, value: "התביעה נדחתה" },
    { code: 4, value: "טרם התקבלה החלטה" }
  ]
  claimCauses:any[]= [
    { code: 1, value: "תאונה" },
    { code: 2, value: "מחלה" },
    { code: 5, value: "תאונת עבודה" },
    { code: 6, value: "אחר" },
  ]
  injuryTypes:any[]= [
    { code: 1, value: "אגן" }, 
    { code: 2, value: "גפיים" },
    { code: 5, value: "ראש" },
    { code: 6, value: "גב" },
    { code: 7, value: "לב" },
    { code: 9, value: "נפש" },
  ]
  submitionMethods:any[]=[
    { code: 1, value: 'ת.ז.' },
    { code: 2, value: 'דרכון' },
    { code: 3, value: 'מבוטח' },
    { code: 4, value: 'מפעל' }
  ] 
  identityTypes:any[]= [
    { code: 1, value: 'דואר' },
    { code: 2, value: 'דיגיטל' },
    { code: 3, value: 'פקס' },
  ]
}
