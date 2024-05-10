import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProjectListItem } from '../models/project-list-item.model';

@Injectable({
  providedIn: 'root',
})
export class LandingPageServices {
  constructor(private http: HttpClient) {}

  getProjectList(): Observable<ProjectListItem[]> {
    return this.http.get<ProjectListItem[]>(environment.API_PROJECTS);
  }
}
