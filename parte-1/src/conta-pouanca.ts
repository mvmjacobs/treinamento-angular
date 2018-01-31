import { Conta } from './conta';
import { ContaTipo } from './conta.enum';

export class Poupanca extends Conta {
	constructor(titular: string) {
		super(titular, ContaTipo.Poupanca);
	}
}
