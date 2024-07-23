// src/app/service/sanity.service.ts

import { Injectable } from '@angular/core';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { Techs } from '../models/techs.model';
import { ProjectListItem } from '../models/project-list-item.model';
import { environment } from '../../environments/environment';
import groq from 'groq';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SanityService {
  constructor(private snackBar: MatSnackBar) {}

  sanityClientCredentials = {
    option: createClient({
      projectId: environment.PROJECT_ID,
      dataset: environment.DATASET_NAME,
      apiVersion: '2024-06-03',
      token: environment.DATASET_TOKEN,
      useCdn: true,
      ignoreBrowserTokenWarning: true,
    }),
  };

  urlFor = (source: any) =>
    imageUrlBuilder(this.sanityClientCredentials.option).image(source);

  async getTechs(): Promise<Techs[]> {
    return await this.sanityClientCredentials.option.fetch(
      groq`*[_type == "techs" && !(_id in path('drafts.**'))]`
    );
  }

  async getFrameworks(): Promise<Techs[]> {
    return await this.sanityClientCredentials.option.fetch(
      groq`*[_type == "techs" && type == "framework" && !(_id in path('drafts.**'))]`
    );
  }

  async getLanguages(): Promise<Techs[]> {
    return await this.sanityClientCredentials.option.fetch(
      groq`*[_type == "techs" && type == "language" && !(_id in path('drafts.**'))]`
    );
  }

  async getSoftwares(): Promise<Techs[]> {
    return await this.sanityClientCredentials.option.fetch(
      groq`*[_type == "techs" && type == "software" && !(_id in path('drafts.**'))]`
    );
  }

  async getProjectList(): Promise<ProjectListItem[]> {
    return await this.sanityClientCredentials.option.fetch(
      groq`*[_type == 'projects' && language == 'fr' && !(_id in path('drafts.**'))] {
            ...,
            "techsRef": techsUsed[].tech->
        }`
    );
  }

  async getProjectByName(projectName: string): Promise<ProjectListItem> {
    return await this.sanityClientCredentials.option.fetch(
      groq`*[_type == 'projects' && title == '${projectName}' && !(_id in path('drafts.**'))][0] {
            ...,
            "techsRef": techsUsed[].tech->
        }`
    );
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 2000,
    });
  }

  sendMail(e: Event) {
    emailjs
      .sendForm(
        environment.EMAIL_SERVICE_ID,
        environment.EMAIL_TEMPLATE_ID,
        e.target as HTMLFormElement,
        {
          publicKey: environment.EMAIL_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          this.openSnackBar('Email envoyé avec succés');
        },
        (error) => {
          console.log('ERROR', (error as EmailJSResponseStatus).text);
          this.openSnackBar(
            "Une erreur empèche l'envoi de votre message, merci de réessayer plus tard"
          );
        }
      );
  }
}
