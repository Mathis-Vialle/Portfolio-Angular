import { Component, OnInit } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ProjectListItem } from '../../models/project-list-item.model';
import { PagesServices } from '../../services/pages.service';
import { Techs } from '../../models/techs.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-content-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-content-portfolio.component.html',
  styleUrl: './page-content-portfolio.component.scss',
})
export class PageContentPortfolioComponent implements OnInit {
  projects$!: Observable<ProjectListItem[]>;
  techDetails: { [key: number]: { value: string; clicked: boolean } } = {};
  previousTech!: number;

  constructor(private pfServices: PagesServices) {}

  ngOnInit(): void {
    this.initObservables();

    for (let i = 1; i <= 5; i++) {
      this.techDetails[i] = { value: '', clicked: false };
    }
  }

  initObservables() {
    this.projects$ = this.pfServices.getProjectList();
  }

  getTechDetails(techId: number, projectId: number) {
    if (!this.techDetails[projectId].clicked) {
      switch (techId) {
        case 1:
          this.techDetails[projectId].value = 'Angular';
          this.techDetails[projectId].clicked = true;
          break;
        case 2:
          this.techDetails[projectId].value = 'React';
          this.techDetails[projectId].clicked = true;
          break;
        case 3:
          this.techDetails[projectId].value = 'NextJS';
          this.techDetails[projectId].clicked = true;
          break;
        case 4:
          this.techDetails[projectId].value = 'vueJS';
          this.techDetails[projectId].clicked = true;
          break;
        case 5:
          this.techDetails[projectId].value = 'tailwind';
          this.techDetails[projectId].clicked = true;
          break;
        case 6:
          this.techDetails[projectId].value = 'HTML5';
          this.techDetails[projectId].clicked = true;
          break;
        case 7:
          this.techDetails[projectId].value = 'CSS3';
          this.techDetails[projectId].clicked = true;
          break;
        case 8:
          this.techDetails[projectId].value = 'javascript';
          this.techDetails[projectId].clicked = true;
          break;
        case 9:
          this.techDetails[projectId].value = 'github';
          this.techDetails[projectId].clicked = true;
          break;
        case 10:
          this.techDetails[projectId].value = 'angular';
          this.techDetails[projectId].clicked = true;
          break;
        case 11:
          this.techDetails[projectId].value = 'VSCode';
          this.techDetails[projectId].clicked = true;
          break;
        case 12:
          this.techDetails[projectId].value = 'nodeJS';
          this.techDetails[projectId].clicked = true;
          break;
        case 13:
          this.techDetails[projectId].value = 'sanity';
          this.techDetails[projectId].clicked = true;
          break;
      }
    } else {
      this.techDetails[projectId].value = '';
      this.techDetails[projectId].clicked = false;
    }
    // Compare this value to current techID to check if it's the same
    this.previousTech = techId;
    console.log(this.techDetails);
  }
}
