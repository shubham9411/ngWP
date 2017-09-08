import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { SiteInfoService } from './site-info.service';

import { SiteInfo } from './site-info';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [SiteInfoService, Title]
})
export class AppComponent implements OnInit {
	siteinfo: SiteInfo = {
		name: 'WordPress',
		description: 'Just Another WordPress Site',
		url: ''
	};

	constructor(private siteInfoService: SiteInfoService, private title: Title) { }

	getInfo() {
		this.siteInfoService
			.getInfo()
			.subscribe(res => {
				this.siteinfo = res;
				this.title.setTitle(this.siteinfo.name + ' - ' + this.siteinfo.description);
			}
			)
	};
	ngOnInit() {
		this.getInfo();
		this.title.setTitle(this.siteinfo.name + ' - ' + this.siteinfo.description);
	}
}
