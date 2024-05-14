import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProjectListItem } from '../../models/project-list-item.model';
import { LandingPageServices } from '../../services/landing-page.service';
import { RouterModule } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Techs } from '../../models/techs.model';

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
  projects$!: Observable<ProjectListItem[]>;

  openProject: { [key: number]: true | false } = {};

  constructor(private lpService: LandingPageServices) {}

  ngOnInit(): void {
    this.projects$ = this.lpService.getProjectList();

    for (let i = 1; i <= 5; i++) {
      this.openProject[i] = false;
    }
  }

  onPlusMinusClick(projectId: number) {
    if (this.openProject[projectId] === true) {
      this.openProject[projectId] = false;
    } else {
      for (let i = 1; i <= 5; i++) {
        this.openProject[i] = false;
      }
      this.openProject[projectId] = true;
    }
  }
}
