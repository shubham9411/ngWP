import { Component, OnInit } from '@angular/core';
import { SiteInfoService } from './site-info.service';

import { SiteInfo } from './site-info';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [SiteInfoService]
})
export class AppComponent implements OnInit {
	siteinfo:SiteInfo = {
		name: 'WordPress',
		description: 'Just Another WordPress Sitesss',
		url: ''
	};

	constructor(private siteInfoService: SiteInfoService) { }

	getInfo() {
		this.siteInfoService
			.getInfo()
			.subscribe(res =>
				this.siteinfo = res,
		)};
	ngOnInit() {
		this.getInfo();
	}
}
