import { Conta } from './conta';
import { ContaTipo } from './conta.enum';

class Main {

	public static abrirConta(titular: string, tipo: ContaTipo): void {
		const conta = new Conta(titular, tipo);
		this.exibirMensagem('Conta aberta com sucesso');
	}

	public static exibirMensagem(mensagem?: string): void {
		mensagem = mensagem || 'Nenhuma mensagem a ser exibida';
		console.log(mensagem);
	}
}

Main.abrirConta('Marcos', ContaTipo.Corrente);
