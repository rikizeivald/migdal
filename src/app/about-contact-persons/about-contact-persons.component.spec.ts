import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutContactPersonsComponent } from './about-contact-persons.component';

describe('AboutContactPersonsComponent', () => {
  let component: AboutContactPersonsComponent;
  let fixture: ComponentFixture<AboutContactPersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutContactPersonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutContactPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
