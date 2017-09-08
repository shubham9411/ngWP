import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Title } from "@angular/platform-browser";

@Component({
	selector: 'app-post-single',
	templateUrl: './post-single.component.html',
	styleUrls: ['./post-single.component.css'],
	providers: [PostsService, Title]
})
export class PostSingleComponent implements OnInit {

	post: Post = new Post();
	constructor(private postsService: PostsService, private route: ActivatedRoute, private title: Title) { }

	ngOnInit() {
		this.route.paramMap
			.switchMap((params: ParamMap) =>
				this.postsService.getSinglePost(params.get('slug')))
			.subscribe(
			(post: Post) => {
				this.post = post[0];
				this.title.setTitle(this.post.title.rendered);
			},
		)

	}
}
