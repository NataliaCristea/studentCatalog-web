import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Subject} from '../model/Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private prefix = 'http://localhost:8081';
  constructor(
    private readonly http: HttpClient) { }

  public getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.prefix + '/subjects');
  }

  public getSubject(id: number): Observable<Subject> {
    return this.http.get<Subject>(this.prefix + '/subjects/' + id);
  }

  public deleteSubject(id: number): Observable<void> {
    return this.http.delete<void>(this.prefix + '/subjects/' + id);
  }

  public createSubject(subject: Subject): Observable<any> {
    return this.http.post<Subject>(this.prefix + '/subjects', subject);
  }

  public updateSubject(subject: Subject): Observable<any> {
    return this.http.put<Subject>(this.prefix + '/subjects', subject);
  }
}
