import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeltenparkenComponent } from './zeltenparken.component';

describe('ZeltenparkenComponent', () => {
  let component: ZeltenparkenComponent;
  let fixture: ComponentFixture<ZeltenparkenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZeltenparkenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZeltenparkenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
