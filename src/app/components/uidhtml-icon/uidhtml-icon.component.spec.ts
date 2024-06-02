import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UidhtmlIconComponent } from './uidhtml-icon.component';

describe('UidhtmlIconComponent', () => {
  let component: UidhtmlIconComponent;
  let fixture: ComponentFixture<UidhtmlIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UidhtmlIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UidhtmlIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
