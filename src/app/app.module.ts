import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { AppRoutingModule } from './app-routing.module';
import { PostSingleComponent } from './posts/post-single/post-single.component';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostSingleComponent
  ],
  imports: [
	BrowserModule,
	AppRoutingModule,
	HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
