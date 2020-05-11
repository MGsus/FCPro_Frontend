import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tweet } from '../shared/models/tweet.model';
import { Observable } from 'rxjs';

@Injectable()
export class TweetService {
  constructor(private http: HttpClient) {}

  searchTweets(hashtag: String): Observable<Tweet> {
    return this.http.get<Tweet>(`184.172.229.135:30836/api/tweets/${hashtag}`);
  }
}
