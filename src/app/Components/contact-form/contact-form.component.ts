import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SanityService } from '../../services/sanity.service';

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

  constructor(private fb: FormBuilder, private sanityService: SanityService) {}

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
      return 'Ce champ est requis';
    } else if (ctrl.hasError('email') || ctrl.hasError('pattern')) {
      return 'Veuillez entrer une adresse mail valide';
    } else {
      return 'Ce champ contient une erreur';
    }
  }

  onSubmitForm(e: Event) {
    this.sanityService.sendMail(e);
    this.resetForm();
  }
}
