import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

	title = 'app';

	constructor() { }

	ngOnInit(): void {
	}

	ngOnDestroy(): void {
	}
}
