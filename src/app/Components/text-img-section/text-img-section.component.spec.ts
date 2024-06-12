import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImgSectionComponent } from './text-img-section.component';

describe('TextImgSectionComponent', () => {
  let component: TextImgSectionComponent;
  let fixture: ComponentFixture<TextImgSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextImgSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextImgSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
