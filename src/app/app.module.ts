import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { InformationComponent } from './information/information.component';
import { RefreshProccesComponent } from './refresh-procces/refresh-procces.component';
import { ContactPersonsComponent } from './contact-persons/contact-persons.component';
import { AboutContactPersonsComponent } from './about-contact-persons/about-contact-persons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CorrectPhonePipe } from './correct-phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    InformationComponent,
    RefreshProccesComponent,
    ContactPersonsComponent,
    AboutContactPersonsComponent,
    CorrectPhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
