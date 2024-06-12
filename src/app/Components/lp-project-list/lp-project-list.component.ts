import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProjectListItem } from '../../models/project-list-item.model';
import { RouterModule } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { SanityService } from '../../services/sanity.service';

@Component({
  selector: 'app-lp-project-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lp-project-list.component.html',
  styleUrl: './lp-project-list.component.scss',
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('400ms', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      // transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class LpProjectListComponent implements OnInit {
  projects: ProjectListItem[] = [];

  openProject: { [key: string]: true | false } = {};

  constructor(
    private sanityService: SanityService,
    private cdref: ChangeDetectorRef
  ) {}

  async ngOnInit(): Promise<void> {
    await this.initProjects();
    this.initLoop();
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  async initProjects(): Promise<ProjectListItem[]> {
    this.projects = await this.sanityService.getProjectList();

    return this.projects;
  }

  initLoop() {
    for (let i = 0; i < this.projects.length; i++) {
      this.openProject[this.projects[i]._id] = false;
    }
  }

  onPlusMinusClick(projectId: string) {
    if (this.openProject[projectId] === true) {
      this.openProject[projectId] = false;
    } else {
      for (let i = 0; i < this.projects.length; i++) {
        this.openProject[this.projects[i]._id] = false;
      }
      this.openProject[projectId] = true;
    }
  }

  testLog(event: any) {
    console.log(event);
  }
}
