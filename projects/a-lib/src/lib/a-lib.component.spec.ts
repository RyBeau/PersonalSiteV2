import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALibComponent } from './a-lib.component';

describe('ALibComponent', () => {
  let component: ALibComponent;
  let fixture: ComponentFixture<ALibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ALibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ALibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
