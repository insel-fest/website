import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LageplanComponent } from './lageplan.component';

describe('LageplanComponent', () => {
  let component: LageplanComponent;
  let fixture: ComponentFixture<LageplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LageplanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LageplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
