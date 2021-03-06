import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ArchiveService {
  constructor(private http: HttpClient) {}

  searchArchives(name: any): Observable<any> {
    return this.http.post<any>(`http://169.51.203.93:32553/file`, {
      bucket: 'fcproyecto-bucket-stg',
      name: name,
    });
  }

  getHistory(): Observable<any> {
    return this.http.post<any>(`http://169.51.203.93:32553/files`, {
      bucket: 'fcproyecto-bucket-stg',
    });
  }
}
