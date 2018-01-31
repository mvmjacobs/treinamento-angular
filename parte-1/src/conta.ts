import { ContaInterface } from './conta.interface';
import { ContaTipo } from './conta.enum';

export class Conta implements ContaInterface {

	private _titular: string;
	private _tipo: ContaTipo;

	constructor(titular: string, tipo?: ContaTipo) {
		this._titular = titular;
		this._tipo = tipo || ContaTipo.Corrente;
	}

	get titular(): string {
		return this._titular;
	}

	get tipo(): ContaTipo {
		return this._tipo;
	}

	// set titular(nome: string) {
	// 	this._titular = nome;
	// }

	saque(valor: number): string {
		throw new Error("Method not implemented.");
	}
	deposito(valor: number): string {
		throw new Error("Method not implemented.");
	}

}