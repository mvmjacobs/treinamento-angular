import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-contact-list',
	templateUrl: './contact-list.component.html',
	styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {

	// tslint:disable-next-line:no-input-rename
	@Input() contactList: any[];

	campoTexto: string;

	varBool = true;
	nome = 'Marcos';

	constructor() {
		const x = '';
	}

	metodo() {
		this.varBool = !this.varBool;
		this.campoTexto = 'limpou!';
	}

	ngOnInit() {
		this.contactList = JSON.parse(localStorage.getItem('lista'));
		console.log(this.contactList);
	}

	ngOnDestroy() {
	}

}
