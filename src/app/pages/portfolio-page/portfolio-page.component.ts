import { Component, OnInit } from '@angular/core';
import { TitleScreenComponent } from '../../Components/title-screen/title-screen.component';
import { TitleScreenItem } from '../../models/titleScreenItem.model';
import { PageContentPortfolioComponent } from '../../Components/page-content-portfolio/page-content-portfolio.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [TitleScreenComponent, PageContentPortfolioComponent],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss',
})
export class PortfolioPageComponent implements OnInit {
  portfolioScreenTitle!: TitleScreenItem;

  ngOnInit(): void {
    this.portfolioScreenTitle = {
      title: 'Portfolio',
      subtitle: 'Jetez un oeil à quelques un de mes projets',
    };
  }
}
