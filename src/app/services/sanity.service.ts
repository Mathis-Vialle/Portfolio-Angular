// src/app/service/sanity.service.ts

import { Injectable } from '@angular/core';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { Techs } from '../models/techs.model';
import { ProjectListItem } from '../models/project-list-item.model';
import { environment } from '../../environments/environment';
import groq from 'groq';

@Injectable({
  providedIn: 'root',
})
export class SanityService {
  constructor() {}

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
      groq`*[_type == "techs"]`
    );
  }

  async getFrameworks(): Promise<Techs[]> {
    return await this.sanityClientCredentials.option.fetch(
      groq`*[_type == "techs" && type == "framework"]`
    );
  }

  async getLanguages(): Promise<Techs[]> {
    return await this.sanityClientCredentials.option.fetch(
      groq`*[_type == "techs" && type == "language"]`
    );
  }

  async getSoftwares(): Promise<Techs[]> {
    return await this.sanityClientCredentials.option.fetch(
      groq`*[_type == "techs" && type == "software"]`
    );
  }

  async getProjectList(): Promise<ProjectListItem[]> {
    return await this.sanityClientCredentials.option.fetch(
      groq`*[_type == 'projects' && language == 'fr'] {
            ...,
            "techsRef": techsUsed[].tech->
        }`
    );
  }

  async getProjectByName(projectName: string): Promise<ProjectListItem> {
    return await this.sanityClientCredentials.option.fetch(
      groq`*[_type == 'projects' && title == '${projectName}'][0] {
            ...,
            "techsRef": techsUsed[].tech->
        }`
    );
  }
}
