import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Params, ActivatedRoute, Router } from '@angular/router';

import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';

@Component({
	selector: 'app-home2',
	templateUrl: './home2.component.html',
	styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit, OnDestroy {

	subscribe: Subscription;

	identifier: string;

	constructor(
		private activatedRoute: ActivatedRoute,
		private homeComponent: HomeComponent,
		private router: Router
	) { }

	ngOnInit() {
		console.log(this.router.url);

		this.subscribe = this.activatedRoute.params.subscribe((params: Params) => {
			this.identifier = params['identifier'];
		});
	}

	ngOnDestroy() {
		if (this.subscribe) {
			this.subscribe.unsubscribe();
		}
	}

	clicar() {
		this.homeComponent.title = 'novo titulo';
	}
}
