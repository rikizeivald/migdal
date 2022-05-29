import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshProccesComponent } from './refresh-procces.component';

describe('RefreshProccesComponent', () => {
  let component: RefreshProccesComponent;
  let fixture: ComponentFixture<RefreshProccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefreshProccesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshProccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
