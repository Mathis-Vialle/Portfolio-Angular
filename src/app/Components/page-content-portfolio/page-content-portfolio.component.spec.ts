import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContentPortfolioComponent } from './page-content-portfolio.component';

describe('PageContentPortfolioComponent', () => {
  let component: PageContentPortfolioComponent;
  let fixture: ComponentFixture<PageContentPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageContentPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageContentPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
