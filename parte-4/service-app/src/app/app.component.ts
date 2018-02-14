import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	@ViewChild('username') username: ElementRef;
	users: any[] = [];
	title = 'app';

	constructor() { }

	ngOnInit(): void {
	}

	addUser(username: string): void {
		if (!username)
			return;
		this.users.push({ name: username, description: `Descrição do usuário ${username}` });
		this.username.nativeElement.value = '';
	}
}
