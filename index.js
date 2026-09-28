const prompt = require("prompt-sync")()
const criarJogador = require("./factory/jogadorFactory")

const nome = prompt("Digite o nome do jogador: ")

const escolha = prompt(`
Escolha a posição:

1 - Levantador
2 - Oposto
3 - Ponteiro
4 - Central
5 - Líbero

Digite sua escolha: 
`)

const jogador = criarJogador(escolha, nome)

jogador.mostrarStatus()