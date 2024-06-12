import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from '../../models/navItem.model';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate(
          '500ms ease',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        animate(
          '500ms ease',
          style({ opacity: 0, transform: 'translateY(100%)' })
        ),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  navItems!: NavItem[];
  mobileToggle!: boolean;
  screenWidth!: any;

  ngOnInit(): void {
    this.navItems = [
      {
        id: 1,
        text: 'À propos',
        url: 'about',
      },
      {
        id: 2,
        text: 'Projets',
        url: 'projects',
      },
      {
        id: 3,
        text: 'Contact',
        url: 'contact',
      },
    ];

    this.screenWidth = window.outerWidth;

    this.mobileToggle = false;
  }

  onToggle() {
    this.mobileToggle = !this.mobileToggle;
  }

  close() {
    this.mobileToggle = false;
  }
}
