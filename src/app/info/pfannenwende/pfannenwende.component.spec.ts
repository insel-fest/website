import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfannenwendeComponent } from './pfannenwende.component';

describe('PfannenwendeComponent', () => {
  let component: PfannenwendeComponent;
  let fixture: ComponentFixture<PfannenwendeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PfannenwendeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PfannenwendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
