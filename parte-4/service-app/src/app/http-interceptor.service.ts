import { Injectable, Injector } from '@angular/core';
import { Http, ConnectionBackend, RequestOptions, RequestOptionsArgs, Request, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { environment } from '../environments/environment';

@Injectable()
export class HttpInterceptor extends Http {

	constructor(
		backend: ConnectionBackend,
		defaultOptions: RequestOptions,
		private _router: Router,
		private _injector: Injector
	) {
		super(backend, defaultOptions);
	}

	get(url: string, options?: RequestOptionsArgs): Observable<Response> {
		return this.intercept(super.get(this.updateUrl(url), this.getRequestOptionArgs(options)));
	}

	post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
		return this.intercept(super.post(this.updateUrl(url), body, this.getRequestOptionArgs(options)));
	}

	put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
		return this.intercept(super.put(this.updateUrl(url), body, this.getRequestOptionArgs(options)));
	}

	delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
		return this.intercept(super.delete(this.updateUrl(url), this.getRequestOptionArgs(options)));
	}

	updateUrl(url: string) {
		if (_.startsWith(url, 'assets') || _.startsWith(url, './assets') || _.startsWith(url, environment.apiUrl)) {
			return url;
		}
		return environment.apiUrl + url;
	}

	getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
		if (!options) {
			options = new RequestOptions();
		}
		if (!options.headers) {
			const token = localStorage.getItem('token');
			options.headers = new Headers();
			options.headers.set('Content-Type', 'application/json');
		}
		return options;
	}

	intercept(observable: Observable<Response>): Observable<Response> {
		return observable
			.catch((err, source) => {
				return Observable.throw(err);
			});
	}
}
