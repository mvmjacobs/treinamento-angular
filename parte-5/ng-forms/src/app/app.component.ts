import { Component, OnInit } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'app';
	value = 100;

	subscribe: Subscription;
	isMobile = false;

	constructor(
		private media: ObservableMedia
	) { }

	ngOnInit() {
		this.subscribe = this.media.subscribe((change: MediaChange) => {
			this.isMobile = change.mqAlias === 'sm' || change.mqAlias === 'xs';
			console.log(this.isMobile);
		});
	}
}
