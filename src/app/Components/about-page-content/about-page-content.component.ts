import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TextImgSectionComponent } from '../text-img-section/text-img-section.component';
import { TechsService } from '../../services/techs.service';
import { Observable } from 'rxjs';
import { Techs } from '../../models/techs.model';

@Component({
  selector: 'app-about-page-content',
  standalone: true,
  imports: [CommonModule, TextImgSectionComponent],
  templateUrl: './about-page-content.component.html',
  styleUrl: './about-page-content.component.scss',
})
export class AboutPageContentComponent implements OnInit {
  imgData = { imgUrl: '../../../assets/about.jpg', imgAlt: 'aboutImg' };
  frameworks$!: Observable<Techs[]>;
  languages$!: Observable<Techs[]>;
  softwares$!: Observable<Techs[]>;

  constructor(private techsService: TechsService) {}

  ngOnInit(): void {
    this.initObservables();
  }

  initObservables() {
    this.frameworks$ = this.techsService.getFrameworks();
    this.languages$ = this.techsService.getLanguages();
    this.softwares$ = this.techsService.getSoftwares();
  }
}
