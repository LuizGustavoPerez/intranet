import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrstEmailComponent } from './frst-email.component';

describe('FrstEmailComponent', () => {
  let component: FrstEmailComponent;
  let fixture: ComponentFixture<FrstEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrstEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrstEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
