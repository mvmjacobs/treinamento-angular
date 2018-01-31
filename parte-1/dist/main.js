"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conta_1 = require("./conta");
const conta_enum_1 = require("./conta.enum");
class Main {
    static abrirConta(titular, tipo) {
        const conta = new conta_1.Conta(titular, tipo);
        this.exibirMensagem('Conta aberta com sucesso');
    }
    static exibirMensagem(mensagem) {
        mensagem = mensagem || 'Nenhuma mensagem a ser exibida';
        console.log(mensagem);
    }
}
Main.abrirConta('Marcos', conta_enum_1.ContaTipo.Corrente);
