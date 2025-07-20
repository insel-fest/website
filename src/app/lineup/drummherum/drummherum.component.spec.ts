import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrummherumComponent } from './drummherum.component';

describe('DrummherumComponent', () => {
  let component: DrummherumComponent;
  let fixture: ComponentFixture<DrummherumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrummherumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrummherumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
