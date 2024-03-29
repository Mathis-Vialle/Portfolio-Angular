import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TitleScreenItem } from '../../models/titleScreenItem.model';

@Component({
  selector: 'app-title-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title-screen.component.html',
  styleUrl: './title-screen.component.scss',
})
export class TitleScreenComponent implements OnInit {
  @Input() titleScreen!: TitleScreenItem;

  ngOnInit(): void {}
}
