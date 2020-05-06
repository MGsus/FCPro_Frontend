import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TweetService } from './services/tweet.service';
import { LoadingComponent } from './shared/loading/loading.component';
import { Tweet } from './shared/models/tweet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  searchTweetsForm: FormGroup;
  hashtag = new FormControl('', Validators.required);
  tweets: Tweet;
  isLoading: boolean = false;
  showData: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private tweetService: TweetService,
    public loadingComponent: LoadingComponent
  ) {}

  ngOnInit(): void {
    this.searchTweetsForm = this.formBuilder.group({
      hashtag: this.hashtag,
    });
  }

  searchTweet() {
    this.isLoading = true;
    console.log(`Disparo`);
    this.tweetService
      .searchTweets(this.searchTweetsForm.value.hashtag)
      .subscribe(
        (data) => {
          this.tweets = data;
          this.showData = true;
        },
        (error) => console.log(error),
        () => (this.isLoading = false)
      );
  }

  setClassTweet() {
    return { 'has-danger': !this.hashtag.pristine && !this.hashtag.valid };
  }
}
