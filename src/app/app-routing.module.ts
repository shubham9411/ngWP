import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';

const routes: Routes = [
	{
		path: '',
		component: PostListComponent,
		pathMatch: 'full'
	},
	{
		path: ':slug',
		component: PostListComponent,
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }
