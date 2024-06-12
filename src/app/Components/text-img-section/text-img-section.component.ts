import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-img-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-img-section.component.html',
  styleUrl: './text-img-section.component.scss',
})
export class TextImgSectionComponent implements OnInit {
  @Input() imgData!: { imgUrl: string; imgAlt: string };
  @Input() imgPos?: 'inverted';
  showMore!: boolean;
  screenWidth!: number;

  ngOnInit(): void {
    this.showMore = false;
    this.screenWidth = window.innerWidth;
  }

  showMoreFn() {
    this.showMore = !this.showMore;
    document.getElementById('clamped-text')!.style.display = 'block';
  }
}
