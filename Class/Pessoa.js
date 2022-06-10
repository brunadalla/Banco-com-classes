class Pessoa extends Cliente {
    constructor(idCliente, tipoCliente, dataCriacao, codBanco, agencia, conta, saldo, nome, cpf, email, telefone, dataDeNascimento) {
        super(idCliente, tipoCliente, dataCriacao, codBanco, agencia, conta, saldo)
        this.nome             = nome
        this.cpf              = cpf
        this.email            = email
        this.telefone         = telefone
        this.dataDeNascimento = dataDeNascimento
    }
}