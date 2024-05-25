import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { ProjectListItem } from '../models/project-list-item.model';
import { Techs } from '../models/techs.model';
import { Email } from '../models/email.model';

@Injectable({
  providedIn: 'root',
})
export class PagesServices {
  constructor(private http: HttpClient) {}

  getProjectList(): Observable<ProjectListItem[]> {
    return this.http.get<ProjectListItem[]>(environment.API_PROJECTS);
  }

  sendEmail(emailFormValue: Email): Observable<boolean> {
    return this.http.post(`${environment.API_MAILS}`, emailFormValue).pipe(
      map(() => true),
      delay(1000),
      catchError(() => of(false).pipe(delay(1000)))
    );
  }
}
