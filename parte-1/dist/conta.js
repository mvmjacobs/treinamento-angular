"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conta_enum_1 = require("./conta.enum");
class Conta {
    constructor(titular, tipo) {
        this._titular = titular;
        this._tipo = tipo || conta_enum_1.ContaTipo.Corrente;
    }
    get titular() {
        return this._titular;
    }
    get tipo() {
        return this._tipo;
    }
    // set titular(nome: string) {
    // 	this._titular = nome;
    // }
    saque(valor) {
        throw new Error("Method not implemented.");
    }
    deposito(valor) {
        throw new Error("Method not implemented.");
    }
}
exports.Conta = Conta;
