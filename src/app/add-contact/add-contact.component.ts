import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { FavoriteValidation } from 'src/Validators/FavoriteValidation';
import { ContactPerson } from 'src/models/ContactPerson';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
 contact:ContactPerson=new ContactPerson("",false,0,"","",'');
 myForm:FormGroup
 constructor() { }
 onlyHebrewPattern = new RegExp(/^[\u0590-\u05FF ,.'-]+$/i);
  ngOnInit(): void {
    this.myForm=new FormGroup({
      name:new FormControl("",Validators.compose([Validators.required,Validators.pattern(this.onlyHebrewPattern)])), 
      phoneNumber:new FormControl("",Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]*$")])),
      address:new FormControl(),
      email:new FormControl("", Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")),
      type:new FormControl(),
      deliveryFlag:new FormControl("",FavoriteValidation.check(this.contactPersons))
    });
  }
  @Input()
  contactPersons:ContactPerson[];
  @Output()
  onAdd:EventEmitter<ContactPerson>=new EventEmitter<ContactPerson>();
  addContact(){
    this.onAdd.emit(this.contact)
  }
  contactPersonType:any[]= [
    { code: 1, value: 'מבוטח' },
    { code: 2, value: 'סוכן' },
    { code: 3, value: 'בן/בת זוג' }
  ]
}
