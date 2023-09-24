import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeDasboardComponent } from './employe-dasboard.component';

describe('EmployeDasboardComponent', () => {
  let component: EmployeDasboardComponent;
  let fixture: ComponentFixture<EmployeDasboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeDasboardComponent]
    });
    fixture = TestBed.createComponent(EmployeDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
