import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TextImgSectionComponent } from '../text-img-section/text-img-section.component';
import { Techs } from '../../models/techs.model';
import { SanityService } from '../../services/sanity.service';

@Component({
  selector: 'app-about-page-content',
  standalone: true,
  imports: [CommonModule, TextImgSectionComponent],
  templateUrl: './about-page-content.component.html',
  styleUrl: './about-page-content.component.scss',
})
export class AboutPageContentComponent implements OnInit {
  imgData = { imgUrl: '../../../assets/about.jpg', imgAlt: 'aboutImg' };

  frameworks: Techs[] = [];
  languages: Techs[] = [];
  softwares: Techs[] = [];

  constructor(private sanityService: SanityService) {}

  ngOnInit(): void {
    this.initFrameworks();
    this.initLanguages();
    this.initSoftwares();
  }

  async initFrameworks(): Promise<Techs[]> {
    return (this.frameworks = await this.sanityService.getFrameworks());
  }
  async initLanguages(): Promise<Techs[]> {
    return (this.languages = await this.sanityService.getLanguages());
  }
  async initSoftwares(): Promise<Techs[]> {
    return (this.softwares = await this.sanityService.getSoftwares());
  }

  imageUrl(source: any) {
    return this.sanityService.urlFor(source);
  }
}
