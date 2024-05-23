import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LandingPageServices } from '../../services/landing-page.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  isLoading = false;
  contactMainForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private lpService: LandingPageServices,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
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
          validators: [
            Validators.required,
            Validators.email,
            Validators.pattern(
              '^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'
            ),
          ],
          updateOn: 'blur',
        },
      ],
      subject: ['', { validators: [Validators.required], updateOn: 'blur' }],
      message: ['', { validators: [Validators.required], updateOn: 'blur' }],
    });
  }

  private resetForm() {
    this.contactMainForm.reset();
  }

  getFormCtrlErrorText(ctrl: AbstractControl) {
    if (ctrl.hasError('required')) {
      return 'This field is required';
    } else if (ctrl.hasError('email') || ctrl.hasError('pattern')) {
      return 'Please enter a valid email address';
    } else {
      return 'This field contains an error';
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
