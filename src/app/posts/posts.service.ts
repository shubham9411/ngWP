import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Post } from './post';
import { environment } from '../../environments/environment';

@Injectable()
export class PostsService {
	private postsUrl = environment.wpApiLink;

	constructor(private http: Http) { }

	getPosts(): Observable<Post[]> {

		return this.http
			.get(this.postsUrl + 'posts')
			.map((res: Response) => res.json());

	}

	getSinglePost(slug: string): Observable<Post> {
		return this.http
				.get(this.postsUrl + `posts?slug=${slug}`)
				.map((res: Response) => res.json());
	}

}
