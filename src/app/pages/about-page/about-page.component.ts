import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TitleScreenComponent } from '../../Components/title-screen/title-screen.component';
import { TitleScreenItem } from '../../models/titleScreenItem.model';
import { AboutPageContentComponent } from '../../Components/page-content-about/about-page-content.component';
import { Techs } from '../../models/techs.model';
import { TechsService } from '../../services/techs.service';
import { Observable } from 'rxjs';

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
      title: 'About',
      subtitle: 'Learn a bit more about me',
    };
  }
}
