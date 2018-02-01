import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	variavel = 'exibir';
	contactList: any[] = [
		{ name: 'Marcos', email: 'm@m.com' },
		{ name: 'Marcos1', email: 'm1@m.com' },
		{ name: 'Marcos2', email: 'm2@m.com' },
		{ name: 'Marcos3', email: 'm3@m.com' }
	];

}
