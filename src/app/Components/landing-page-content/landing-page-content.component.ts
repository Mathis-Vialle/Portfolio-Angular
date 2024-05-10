import { environment } from './../../../environments/environment.development';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-landing-page-content',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './landing-page-content.component.html',
  styleUrl: './landing-page-content.component.scss',
})
export class LandingPageContentComponent implements OnInit {
  lpSideTitle!: string;
  lpSideTitleTwo!: string;
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initTitles();
    this.initForm();
    console.log(
      environment.API_URL +
        ' | ' +
        environment.API_PROJECTS +
        ' | ' +
        environment.API_TECHS +
        ' | ' +
        environment.API_NAV
    );
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

  private initForm() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  private initTitles() {
    this.lpSideTitle = 'Recent projects';
    this.lpSideTitleTwo = "Let's work together";
  }
}
