import { Component } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact-page-content',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact-page-content.component.html',
  styleUrl: './contact-page-content.component.scss',
})
export class ContactPageContentComponent {}
