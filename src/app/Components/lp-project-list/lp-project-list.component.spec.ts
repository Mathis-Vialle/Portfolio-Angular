import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpProjectListComponent } from './lp-project-list.component';

describe('LpProjectListComponent', () => {
  let component: LpProjectListComponent;
  let fixture: ComponentFixture<LpProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LpProjectListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LpProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
