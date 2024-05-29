import { TitleScreenItem } from './../../models/titleScreenItem.model';
import { PagesServices } from './../../services/pages.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, map, switchMap, take } from 'rxjs';
import { ProjectListItem } from '../../models/project-list-item.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TitleScreenComponent } from '../title-screen/title-screen.component';

@Component({
  selector: 'app-single-project-page',
  standalone: true,
  imports: [CommonModule, TitleScreenComponent],
  templateUrl: './single-project-page.component.html',
  styleUrl: './single-project-page.component.scss',
})
export class SingleProjectPageComponent implements OnInit {
  project$!: Observable<ProjectListItem>;
  techDetails: { [key: number]: { name: string; text: string } } = {};
  selectedImg: { [key: number]: number } = {};
  titleScreenItem!: TitleScreenItem;

  constructor(
    private pageService: PagesServices,
    private route: ActivatedRoute,
    private router: Router,
    private cdref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initObservables();
    this.initLoops();
  }

  initObservables() {
    this.project$ = this.route.params.pipe(
      switchMap((params) => this.pageService.getProjectById(+params['id']))
    );
  }

  initLoops() {
    for (let i = 1; i <= 5; i++) {
      this.techDetails[i] = { name: '', text: '' };
    }

    for (let i = 1; i <= 5; i++) {
      this.selectedImg[i] = 0;
    }
  }

  getTechDetails(techId: number, projectId: number) {
    switch (techId) {
      case 1:
        this.techDetails[projectId].name = 'Angular';
        this.techDetails[projectId].text = 'Sample text';
        break;
      case 2:
        this.techDetails[projectId].name = 'React';
        this.techDetails[projectId].text = 'Sample text';
        break;
      case 3:
        this.techDetails[projectId].name = 'NextJS';
        this.techDetails[projectId].text = 'Sample text';
        break;
      case 4:
        this.techDetails[projectId].name = 'VueJS';
        this.techDetails[projectId].text = 'Sample text';
        break;
      case 5:
        this.techDetails[projectId].name = 'Tailwind';
        this.techDetails[projectId].text = 'Sample text';
        break;
      case 6:
        this.techDetails[projectId].name = 'HTML5';
        this.techDetails[projectId].text = 'Sample text';
        break;
      case 7:
        this.techDetails[projectId].name = 'CSS3';
        this.techDetails[projectId].text = 'Sample text';
        break;
      case 8:
        this.techDetails[projectId].name = 'Javascript';
        this.techDetails[projectId].text = 'Sample text';
        break;
      case 9:
        this.techDetails[projectId].name = 'Github';
        this.techDetails[projectId].text = 'Sample text';
        break;
      case 10:
        this.techDetails[projectId].name = 'Figma';
        this.techDetails[projectId].text = 'Sample text';
        break;
      case 11:
        this.techDetails[projectId].name = 'VSCode';
        this.techDetails[projectId].text = 'Sample text';
        break;
      case 12:
        this.techDetails[projectId].name = 'NodeJS';
        this.techDetails[projectId].text = 'Sample text';
        break;
      case 13:
        this.techDetails[projectId].name = 'Sanity';
        this.techDetails[projectId].text = 'Sample text';
        break;
    }
  }

  getSelectedImage(imgIndex: number, projectId: number) {
    this.selectedImg[projectId] = imgIndex;
  }

  onGoBack() {
    this.router.navigateByUrl('/portfolio');
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
}
