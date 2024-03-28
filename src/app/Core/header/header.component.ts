import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from '../models/navItem.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  navItems!: NavItem[];

  ngOnInit(): void {
    this.navItems = [
      {
        id: 1,
        text: 'About',
        url: 'about',
      },
      {
        id: 1,
        text: 'Portfolio',
        url: 'portfolio',
      },
      {
        id: 1,
        text: 'Contact',
        url: 'contact',
      },
    ];
  }
}
