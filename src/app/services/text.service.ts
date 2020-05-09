import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TextService {
  constructor(private http: HttpClient) {}

  sendText(text: any): Observable<any> {
    console.log(text);

    return this.http.post(`http://localhost:3000/api/upload-text`, {
      text: text,
    });
  }
}
