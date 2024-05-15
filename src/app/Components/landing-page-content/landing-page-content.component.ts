import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LpProjectListComponent } from '../lp-project-list/lp-project-list.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-landing-page-content',
  standalone: true,
  imports: [CommonModule, LpProjectListComponent, ContactFormComponent],
  templateUrl: './landing-page-content.component.html',
  styleUrl: './landing-page-content.component.scss',
})
export class LandingPageContentComponent implements OnInit {
  lpSideTitle!: string;
  lpSideTitleTwo!: string;

  ngOnInit(): void {
    this.initTitles();
  }

  private initTitles() {
    this.lpSideTitle = 'Recent projects';
    this.lpSideTitleTwo = "Let's work together";
  }
}
