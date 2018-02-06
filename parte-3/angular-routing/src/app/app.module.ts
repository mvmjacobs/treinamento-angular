import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardErrorComponent } from './dashboard-error/dashboard-error.component';
import { Home2Component } from './home2/home2.component';
import { AuthGuard } from './auth.guard';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		PageNotFoundComponent,
		DashboardComponent,
		DashboardErrorComponent,
		Home2Component
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [
		AuthGuard
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
