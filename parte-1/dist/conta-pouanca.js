"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conta_1 = require("./conta");
const conta_enum_1 = require("./conta.enum");
class Poupanca extends conta_1.Conta {
    constructor(titular) {
        super(titular, conta_enum_1.ContaTipo.Poupanca);
    }
}
exports.Poupanca = Poupanca;
