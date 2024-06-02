import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UidhtmlInputComponent } from './uidhtml-input.component';

describe('UidhtmlInputComponent', () => {
  let component: UidhtmlInputComponent;
  let fixture: ComponentFixture<UidhtmlInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UidhtmlInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UidhtmlInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
