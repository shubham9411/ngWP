import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { AppRoutingModule } from './app-routing.module';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdButtonModule, MdCardModule, MdMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { animation } from '@angular/animations'

@NgModule({
	declarations: [
		AppComponent,
		PostListComponent,
		PostSingleComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpModule,
		BrowserAnimationsModule,
		MdToolbarModule,
		MdButtonModule,
		MdCardModule,
		FlexLayoutModule,
		MdMenuModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
