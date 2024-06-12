// Deprecated file, kept if needed later / in other projects

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { environment } from '../../environments/environment.development';
// import { Observable, catchError, delay, map, of } from 'rxjs';
// import { ProjectListItem } from '../models/project-list-item.model';
// import { Email } from '../models/email.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class PagesServices {
//   constructor(private http: HttpClient) {}

//   getProjectList(): Observable<ProjectListItem[]> {
//     return this.http.get<ProjectListItem[]>(environment.API_PROJECTS);
//   }

//   // getProjectById(projectId: number): Observable<ProjectListItem> {
//   //   return this.getProjectList().pipe(
//   //     map(
//   //       (projects) => projects.filter((project) => project.id === projectId)[0]
//   //     )
//   //   );
//   // }

//   sendEmail(emailFormValue: Email): Observable<boolean> {
//     return this.http.post(`${environment.API_MAILS}`, emailFormValue).pipe(
//       map(() => true),
//       delay(1000),
//       catchError(() => of(false).pipe(delay(1000)))
//     );
//   }
// }
