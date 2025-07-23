import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitbringenComponent } from './mitbringen.component';

describe('MitbringenComponent', () => {
  let component: MitbringenComponent;
  let fixture: ComponentFixture<MitbringenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MitbringenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MitbringenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
