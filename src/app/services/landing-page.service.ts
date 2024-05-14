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
export class LandingPageServices {
  constructor(private http: HttpClient) {}

  getProjectList(): Observable<ProjectListItem[]> {
    return this.http.get<ProjectListItem[]>(environment.API_PROJECTS);
  }

  getTechsUsed(url: string): Observable<Techs> {
    return this.http.get<Techs>(url);

    /*Use this syntax to use the method :
      1.  (click)="getTechsUsed(project.techUsed)" ** On the parent div after the loop of the projects **

      2.  @for (tech$ of techs; track $index) { @if (tech$ | async; as tech) {  } } ** Where you want the techs **

      3.  techs: Observable<Techs>[] = [];
          getTechsUsed(url: string[]) {
            for (let i = 0; i < url.length; i++) {
              this.techs.push(this.lpService.getTechsUsed(url[i]));
            }
          } ** In the component.ts file **
    */
  }

  sendEmail(emailFormValue: Email): Observable<boolean> {
    return this.http.post(`${environment.API_MAILS}`, emailFormValue).pipe(
      map(() => true),
      delay(1000),
      catchError(() => of(false).pipe(delay(1000)))
    );
  }
}
