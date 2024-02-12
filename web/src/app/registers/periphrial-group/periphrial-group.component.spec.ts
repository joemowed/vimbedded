import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriphrialGroupComponent } from './periphrial-group.component';

describe('PeriphrialGroupComponent', () => {
  let component: PeriphrialGroupComponent;
  let fixture: ComponentFixture<PeriphrialGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeriphrialGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeriphrialGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
