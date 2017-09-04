import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { SiteInfo } from './site-info';
import { environment } from '../environments/environment';

@Injectable()
export class SiteInfoService {
	private info = environment.wpBaseLink;
	constructor(private http: Http) { }

	getInfo(): Observable<SiteInfo> {
		return this.http
			.get(this.info)
			.map((res: Response) => res.json());
	}
}
