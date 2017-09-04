import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'app-post-single',
	templateUrl: './post-single.component.html',
	styleUrls: ['./post-single.component.css'],
	providers: [PostsService]
})
export class PostSingleComponent implements OnInit {

	post: Post = {
		title: {
			rendered: '',
		},
		content: {
			rendered: ''
		}
	};
	constructor(private postsService: PostsService, private route: ActivatedRoute ) { }

	ngOnInit() {
		this.route.paramMap
		.switchMap((params: ParamMap) =>
		this.postsService.getSinglePost(params.get('slug')))
		.subscribe(
			(post:Post)=>this.post = post[0],
		)
	}
}
