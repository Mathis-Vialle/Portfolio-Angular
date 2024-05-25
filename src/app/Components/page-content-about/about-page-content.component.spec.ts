import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageContentComponent } from './about-page-content.component';

describe('AboutPageContentComponent', () => {
  let component: AboutPageContentComponent;
  let fixture: ComponentFixture<AboutPageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPageContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
