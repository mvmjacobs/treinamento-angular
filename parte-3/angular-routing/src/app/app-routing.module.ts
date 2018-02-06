import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardErrorComponent } from './dashboard-error/dashboard-error.component';
import { Home2Component } from './home2/home2.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
	{
		path: 'home', component: HomeComponent, canLoad: [AuthGuard], canActivate: [AuthGuard], children: [
			{ path: 'dashboard', component: DashboardComponent },
			{ path: ':identifier', component: Home2Component },

			// { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
			// { path: '**', component: DashboardErrorComponent }
		]
	},

	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
