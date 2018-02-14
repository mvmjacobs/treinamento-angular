import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, XHRBackend, RequestOptions, Http } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HttpInterceptor } from './http-interceptor.service';
import { AppRouting } from './app-routing.module';
import { UsersModule } from './users/users.module';

export function HttpInterceptorFactory(backend: XHRBackend, options: RequestOptions, router: Router, injector: Injector) {
	return new HttpInterceptor(backend, options, router, injector);
}

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		HttpModule,
		HttpClientModule,
		FormsModule,
		RouterModule,
		AppRouting,
		UsersModule
	],
	providers: [
		{ provide: Http, useFactory: HttpInterceptorFactory, deps: [XHRBackend, RequestOptions, Router, Injector] }
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
