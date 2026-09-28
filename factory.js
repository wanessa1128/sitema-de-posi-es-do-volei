const Jogador = require("./posições/jogador")

class Levantador extends Jogador {
    constructor(nome) {
        super(
            nome,
            "Levantador",
            "Organizar as jogadas e preparar a bola para os atacantes.",
            70,  
            85,  
            65,  
            80,  
            100  
        )
    }
}

class Oposto extends Jogador {
    constructor(nome) {
        super(
            nome,
            "Oposto",
            "Ser uma das principais opções de ataque da equipe.",
            100,  
            60,   
            90,   
            75,   
            85   
        )
    }
}

class Ponteiro extends Jogador {
    constructor(nome) {
        super(
            nome,
            "Ponteiro",
            "Atacar pelas pontas e ajudar na recepção e defesa.",
            90,  
            90,  
            85,  
            90,  
            90   
        )
    }
}

class Central extends Jogador {
    constructor(nome) {
        super(
            nome,
            "Central",
            "Bloquear os ataques adversários e atacar pelo meio.",
            90, 
            65, 
            95, 
            70, 
            85  
        )
    }
}

class Libero extends Jogador {
    constructor(nome) {
        super(
            nome,
            "Líbero",
            "Especializar-se na defesa e recepção da equipe.",
            40,  
            100, 
            50,  
            95,  
            95   
        )
    }
}

function criarJogador(escolha, nome) {

    if (escolha === "1") {
        return new Levantador(nome)
    }

    else if (escolha === "2") {
        return new Oposto(nome)
    }

    else if (escolha === "3") {
        return new Ponteiro(nome)
    }

    else if (escolha === "4") {
        return new Central(nome)
    }

    else if (escolha === "5") {
        return new Libero(nome)
    }

    else {
        throw new Error("Posição inválida.")
    }
}

module.exports = criarJogador