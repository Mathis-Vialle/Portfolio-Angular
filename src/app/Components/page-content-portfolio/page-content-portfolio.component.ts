import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectListItem } from '../../models/project-list-item.model';
import { CommonModule } from '@angular/common';
import { SanityService } from '../../services/sanity.service';

@Component({
  selector: 'app-page-content-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-content-portfolio.component.html',
  styleUrl: './page-content-portfolio.component.scss',
})
export class PageContentPortfolioComponent implements OnInit {
  projects$!: Observable<ProjectListItem[]>;
  projects: ProjectListItem[] = [];
  techDetails: { [key: string]: { name: string; text: string } } = {};
  selectedImg: { [key: string]: number } = {};
  modalImg!: string;

  constructor(
    private cdref: ChangeDetectorRef,
    private sanityService: SanityService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.initProjects();
    await this.initLoops();
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  async initProjects(): Promise<ProjectListItem[]> {
    this.projects = await this.sanityService.getProjectList();

    return this.projects;
  }

  async initLoops() {
    for (let i = 0; i < this.projects.length; i++) {
      this.techDetails[this.projects[i]._id] = { name: '', text: '' };
    }
    for (let i = 0; i < this.projects.length; i++) {
      this.selectedImg[this.projects[i]._id] = 0;
    }
  }

  getTechDetails(project: ProjectListItem, techIndex: number) {
    this.techDetails[project._id] = {
      name: project.techsRef[techIndex].title,
      text: project.techsUsed[techIndex].techUsage,
    };
  }

  getSelectedImage(imgIndex: number, projectId: string) {
    this.selectedImg[projectId] = imgIndex;
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
