import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page-content.component.html',
  styleUrl: './landing-page-content.component.scss',
})
export class LandingPageContentComponent implements OnInit {
  lpLeftTitle!: string;

  ngOnInit(): void {
    this.lpLeftTitle = 'Recent projects';
  }
}
