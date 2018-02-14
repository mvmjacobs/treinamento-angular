import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { GithubService } from '../github.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

	@ViewChild('username') username: ElementRef;
	users: any[] = [];
	title = 'app';

	subscribe: Subscription;

	constructor(
		private githubService: GithubService
	) { }

	ngOnInit(): void {
	}

	ngOnDestroy(): void {
		if (this.subscribe) this.subscribe.unsubscribe();
	}

	addUser(username: string): void {
		if (!username)
			return;

		this.subscribe = this.githubService.getUser(username).subscribe((res) => {
			console.log(res);
			this.users.push({ name: res.login, description: res.bio });
			this.username.nativeElement.value = '';
		});
		console.log('fim do metodo');
	}
}
