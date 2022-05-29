import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { ContactPerson } from 'src/models/ContactPerson';

@Component({
  selector: 'app-refresh-procces',
  templateUrl: './refresh-procces.component.html',
  styleUrls: ['./refresh-procces.component.css']
})
export class RefreshProccesComponent implements OnInit {
  contacts:ContactPerson[];
  refreshForm:Subject<void> = new Subject<void>();
  myForm:FormGroup;
  isValidForm:boolean=false
  insured:ContactPerson=new ContactPerson("אסף כהן",true,544566034,"asaf123@gmail.com","רשי 30 אלעד","מבוטח");
  contact1:ContactPerson=new ContactPerson("מנחם פלדמן",true,548405582,"men587@gmail.com","רשי 4 שהם","מבוטח");
  contact2:ContactPerson=new ContactPerson("ניקיטה ג'יין",false,548578598,"039320604@gmail.com","דרוק 8 ירושלים","סוכן");
  contactPersons:ContactPerson[]=[];
  numContactPersons:number=this.contactPersons.length
  ngOnInit(): void {
    this.contactPersons.push(this.contact1)
    this.contactPersons.push(this.contact2)
    console.log(this.contactPersons)
  }
  resetNotDelivery(){
    this.contacts=this.contactPersons.filter(item=>item.DeliveryFlag==true);
    this.contactPersons=[...this.contacts]
    this.numContactPersons=this.contactPersons.length
  }
  resetForm(){
    this.isValidForm=false
     this.refreshForm.next();
  }
  printFormToLog(){
    console.log(this.myForm)
  }
  addContact(e:ContactPerson){
    this.contactPersons.push(e)
    this.numContactPersons++;
  }
  resetContactArr(){
    this.contactPersons=[];
    this.numContactPersons=0;
  }
  updatePersons(e:ContactPerson[]){
    this.contactPersons=[...e]
    console.log(this.contactPersons)
  }
  validForm(f:FormGroup){
    this.myForm=f;
    this.isValidForm=true;
  }
  superClaim:any= {
    superClaimNum: 500040204,
    superClaimStatus: {
        code: 1,
        value: "פתוחה"
    },
    superClaimType : {
          code : null,
          value : null
    },
    eventDate: null,
    claimCause: {
            code : 2,
            value : "תאונה"
    },
    injuryType: {
            code : null,
            value : null
   },
    submitedBy: 1,
    submitionMethod: {
            code : null,
            value : null
    },
  }; 
}