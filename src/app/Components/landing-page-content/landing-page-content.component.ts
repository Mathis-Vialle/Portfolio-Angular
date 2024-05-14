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
import { MatSnackBar } from '@angular/material/snack-bar';
import { LpProjectListComponent } from '../lp-project-list/lp-project-list.component';

@Component({
  selector: 'app-landing-page-content',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LpProjectListComponent],
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
    private lpService: LandingPageServices,
    private snackBar: MatSnackBar
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

  openSnackBar(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 2000,
    });
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
            this.openSnackBar('Email sent successfully');
          } else {
            console.error("Echec de l'enregistrement");
            this.openSnackBar(
              'There was an error while sending, please try later'
            );
          }
        })
      )
      .subscribe();
  }
}
