import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UidhtmlButtonComponent } from './uidhtml-button.component';

describe('UidhtmlButtonComponent', () => {
  let component: UidhtmlButtonComponent;
  let fixture: ComponentFixture<UidhtmlButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UidhtmlButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UidhtmlButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
