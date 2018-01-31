# Treinamento: Angular - Parte 1
Conteúdo da primeira parte do treinamento de Angular.

## Introdução ao Angular

- [http://angular.io](http://angular.io)
- Não é a continuação do Angular 1.x (AngularJS)
- Passou a ser chamado somente de `Angular` a partir da versão 2
- Atualmente está na versão 5.2.2 (30/01/2018)
- Facilita o desenvolvimento de aplicações web, principalmente SPAs
- Possibilita a criação de apps para web e mobile

## Ambiente de Desenvolvimento
Configuração inicial do ambiente para iniciar o desenvolvimento com `Angular`.

### Node.js
- [https://nodejs.org](https://nodejs.org)

### Angular CLI
```bash
npm install -g @angular/cli
```

### Typescript
```
npm install -g typescript
```

## Typescript
- [http://www.typescriptlang.org](http://www.typescriptlang.org)
- Linguagem open source desenvolvida pela Microsoft
- É uma linguagem tipada
- *"Potencializa"* a escrita de código Javascript
- Recursos da linguagem
  - Interfaces
  - Classes
  - Enum
  - Herança
  - Objetos
- Transpiler *"nativo"*

## Atividade
- Escrever uma classe representando um contato
- A classe deve conter os seguintes atributos:
	- Nome completo: string
	- Email: string
	- Data de Nascimento: date
	- Sexo: enum
	- Favorito: boolean
- Implemente um metodo que calcule a idade do contato
- Em um arquivo externo importe a classe
- Crie um objeto dessa
- Exiba o objeto no console
