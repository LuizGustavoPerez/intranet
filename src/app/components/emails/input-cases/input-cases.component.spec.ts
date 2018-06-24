import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCasesComponent } from './input-cases.component';

describe('InputCasesComponent', () => {
  let component: InputCasesComponent;
  let fixture: ComponentFixture<InputCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
