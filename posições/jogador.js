class Jogador {
    constructor(nome, posicao, objetivo, ataque, recepcao, salto, velocidade, tecnica) {
        this.nome = nome
        this.posicao = posicao
        this.objetivo = objetivo
        this.ataque = ataque
        this.recepcao = recepcao
        this.salto = salto
        this.velocidade = velocidade
        this.tecnica = tecnica

        this.overall = this.calcularOverall()
    }

    calcularOverall() {
        return Math.round(
            (
                this.ataque +
                this.recepcao +
                this.salto +
                this.velocidade +
                this.tecnica
            ) / 5
        )
    }

    mostrarStatus() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Posição: ${this.posicao}`)
        console.log(`Objetivo: ${this.objetivo}`)
        console.log(`Ataque: ${this.ataque}`)
        console.log(`Recepção: ${this.recepcao}`)
        console.log(`Salto: ${this.salto}`)
        console.log(`Velocidade: ${this.velocidade}`)
        console.log(`Técnica: ${this.tecnica}`)
        console.log(`Overall: ${this.overall}`)
    }
}

module.exports = Jogador