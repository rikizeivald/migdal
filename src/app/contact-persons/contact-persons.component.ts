import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ContactPerson } from 'src/models/ContactPerson';

@Component({
  selector: 'app-contact-persons',
  templateUrl: './contact-persons.component.html',
  styleUrls: ['./contact-persons.component.css']
})
export class ContactPersonsComponent implements OnInit {
  addPerson:boolean=false;
  @Output()
  onAddContact:EventEmitter<ContactPerson>=new EventEmitter<ContactPerson>();
  @Output()
  onUpdateContact:EventEmitter<ContactPerson[]>=new EventEmitter<ContactPerson[]>();
  @Input()
  persons:ContactPerson[];
  ngOnInit(): void {
  }
  startToAddPerson(){
    this.addPerson=true;
  }
  addContact(e:ContactPerson){
    this.addPerson=false
    this.onAddContact.emit(e)
  }
  updateDeliveryFlag(name:string)
  {
    for( let i=0;i<this.persons.length;i++){
        if (this.persons[i].Name==name){
          this.persons[i].DeliveryFlag=true;
        }
    }
    this.onUpdateContact.emit(this.persons)
  }
  updateDeliveryFlagFalse(name:string){
    for( let i=0;i<this.persons.length;i++){
      if (this.persons[i].Name==name){
        this.persons[i].DeliveryFlag=false;
      }
    }
    this.onUpdateContact.emit(this.persons)
  }
  @Input()
    insuredPerson:ContactPerson
  }
