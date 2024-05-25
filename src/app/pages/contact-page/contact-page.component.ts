import { Component } from '@angular/core';
import { ContactPageContentComponent } from '../../Components/page-content-contact/contact-page-content.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactPageContentComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
})
export class ContactPageComponent {}
