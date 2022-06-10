class Cliente {
    constructor(idCliente, tipoCliente, dataCriacao, codBanco, agencia, conta, saldo) {
        this.idCliente   = idCliente
        this.tipoCliente = tipoCliente
        this.dataCriacao = dataCriacao
        this.codBanco    = codBanco
        this.agencia     = agencia
        this.conta       = conta
        this.saldo       = saldo
        this.historico   = []
    }
}