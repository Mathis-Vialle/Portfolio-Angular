// Deprecated file, kept if needed later / in other projects

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, filter, map } from 'rxjs';
// import { environment } from '../../environments/environment.development';
// import { Techs } from '../models/techs.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class TechsService {
//   constructor(private http: HttpClient) {}

//   getTechs(): Observable<Techs[]> {
//     return this.http.get<Techs[]>(environment.API_TECHS);
//   }

//   getFrameworks(): Observable<Techs[]> {
//     return this.getTechs().pipe(
//       map((techs) => techs.filter((tech) => tech.type === 'framework'))
//     );
//   }

//   getLanguages(): Observable<Techs[]> {
//     return this.getTechs().pipe(
//       map((techs) => techs.filter((tech) => tech.type === 'language'))
//     );
//   }

//   getSoftwares(): Observable<Techs[]> {
//     return this.getTechs().pipe(
//       map((techs) => techs.filter((tech) => tech.type === 'software'))
//     );
//   }
// }
