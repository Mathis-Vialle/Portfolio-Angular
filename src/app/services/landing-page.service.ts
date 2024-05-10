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

  private _loading$ = new BehaviorSubject<boolean>(false);
  get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  private setLoadingStatus(loading: boolean) {
    return this._loading$.next(loading);
  }

  getProjectList(): Observable<ProjectListItem[]> {
    this.setLoadingStatus(true);

    return this.http.get<ProjectListItem[]>(environment.API_PROJECTS);
  }
}
