import { style } from '@angular/animations';
import { TitleScreenItem } from './../../models/titleScreenItem.model';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, map, switchMap, take } from 'rxjs';
import { ProjectListItem } from '../../models/project-list-item.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TitleScreenComponent } from '../title-screen/title-screen.component';
import { SanityService } from '../../services/sanity.service';
import { Techs } from '../../models/techs.model';

@Component({
  selector: 'app-single-project-page',
  standalone: true,
  imports: [CommonModule, TitleScreenComponent],
  templateUrl: './single-project-page.component.html',
  styleUrl: './single-project-page.component.scss',
})
export class SingleProjectPageComponent implements OnInit {
  project$!: Observable<ProjectListItem>;
  techDetails!: { name: string; text: string };
  selectedImg!: number;
  titleScreenItem!: TitleScreenItem;
  modalImg!: string;

  constructor(
    private sanityService: SanityService,
    private route: ActivatedRoute,
    private router: Router,
    private cdref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initProject();
    this.initStates();
  }

  initProject(): Observable<ProjectListItem> {
    return (this.project$ = this.route.params.pipe(
      switchMap((params) =>
        this.sanityService.getProjectByName(params['title'])
      )
    ));
  }

  initStates() {
    this.techDetails = { name: '', text: '' };

    this.selectedImg = 0;
  }

  getTechDetails(project: ProjectListItem, techIndex: number) {
    this.techDetails = {
      name: project.techsRef[techIndex].title,
      text: project.techsUsed[techIndex].techUsage,
    };
  }

  getSelectedImage(imgIndex: number) {
    this.selectedImg = imgIndex;
  }

  onGoBack() {
    this.router.navigateByUrl('/projects');
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  imageUrl(source: any) {
    return this.sanityService.urlFor(source);
  }

  testLog(event: any) {
    console.log(event);
  }

  checkLink(url: string): string {
    if (url.includes('https://') || url.includes('http://')) {
      return url;
    } else {
      return `https://${url}`;
    }
  }

  showModal(imgSrc: string) {
    document.body.style.overflow = 'hidden';
    document.getElementById('img-modal')!.style.display = 'flex';
    this.modalImg = imgSrc;
  }

  closeModal() {
    document.body.style.overflow = 'unset';
    document.getElementById('img-modal')!.style.display = 'none';
  }
}
