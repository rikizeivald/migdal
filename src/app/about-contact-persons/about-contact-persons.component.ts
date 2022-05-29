import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about-contact-persons',
  templateUrl: './about-contact-persons.component.html',
  styleUrls: ['./about-contact-persons.component.css']
})
export class AboutContactPersonsComponent implements OnInit {
  @Input()
  numPersons:number;
  @Output()
  onReset:EventEmitter<0>=new EventEmitter<0>();
  @Output()
  onDelivery:EventEmitter<0>=new EventEmitter<0>();
  @Output()
  onAdd:EventEmitter<0>=new EventEmitter<0>();
  resetContacts(){
    this.onReset.emit()
  }
  resetContactsNotDelivery(){
    this.onDelivery.emit()
  }
  ngOnInit(): void {
  }
  addInsured(){
    this.onAdd.emit();
  }
}
