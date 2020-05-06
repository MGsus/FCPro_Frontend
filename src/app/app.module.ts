import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { MaterialModule } from './material-module.module';
import { NavbarComponent } from './navbar/navbar.component';
import { TweetService } from './services/tweet.service';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HistoryComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    SharedModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [TweetService],
  bootstrap: [AppComponent],
})
export class AppModule {}
