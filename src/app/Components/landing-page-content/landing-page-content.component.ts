import { environment } from './../../../environments/environment.development';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LandingPageServices } from '../../services/landing-page.service';
import { tap } from 'rxjs';

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

  isLoading = false;
  contactMainForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private lpService: LandingPageServices
  ) {}

  ngOnInit(): void {
    this.initTitles();
    this.initForm();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactMainForm.controls;
  }

  private initForm() {
    this.contactMainForm = this.fb.group({
      firstName: ['', { validators: [Validators.required], updateOn: 'blur' }],
      lastName: ['', { validators: [Validators.required], updateOn: 'blur' }],
      email: [
        '',
        {
          validators: [Validators.required, Validators.email],
          updateOn: 'blur',
        },
      ],
      subject: ['', { validators: [Validators.required], updateOn: 'blur' }],
      message: ['', { validators: [Validators.required], updateOn: 'blur' }],
    });
  }

  private initTitles() {
    this.lpSideTitle = 'Recent projects';
    this.lpSideTitleTwo = "Let's work together";
  }

  private resetForm() {
    this.contactMainForm.reset();
  }

  getFormCtrlErrorText(ctrl: AbstractControl) {
    if (ctrl.hasError('required')) {
      return 'Ce champ est requis';
    } else if (ctrl.hasError('email')) {
      return 'Veuillez saisir une adresse mail valide';
    } else {
      return 'Ce champ contient une erreur';
    }
  }

  onSubmitForm() {
    this.isLoading = true;
    this.lpService
      .sendEmail(this.contactMainForm.value)
      .pipe(
        tap((saved) => {
          this.isLoading = false;
          if (saved) {
            this.resetForm();
          } else {
            console.error("Echec de l'enregistrement");
          }
        })
      )
      .subscribe();
  }
}
