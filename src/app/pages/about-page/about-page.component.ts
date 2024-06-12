import { Component, OnInit } from '@angular/core';
import { TitleScreenComponent } from '../../Components/title-screen/title-screen.component';
import { TitleScreenItem } from '../../models/titleScreenItem.model';
import { AboutPageContentComponent } from '../../Components/page-content-about/about-page-content.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [TitleScreenComponent, AboutPageContentComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
})
export class AboutPageComponent implements OnInit {
  aboutPageTitle!: TitleScreenItem;

  ngOnInit(): void {
    this.aboutPageTitle = {
      title: 'À Propos',
      subtitle: 'Apprenez-en plus sur moi',
    };
  }
}
