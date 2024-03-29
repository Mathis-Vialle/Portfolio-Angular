import { Component, OnInit } from '@angular/core';
import { TitleScreenComponent } from '../../Components/title-screen/title-screen.component';
import { TitleScreenItem } from '../../models/titleScreenItem.model';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TitleScreenComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit {
  landingScreenTitle!: TitleScreenItem;

  ngOnInit(): void {
    this.landingScreenTitle = {
      title: 'Welcome',
      subtitle: "I'm Mathis, a junior front-end developper",
    };
  }
}
