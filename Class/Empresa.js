class Empresa extends Cliente {
    constructor(idCliente, tipoCliente, dataCriacao, codBanco, agencia, conta, saldo, nomeFantasia, cnpj, email, telefone, dataDeFundacao ) {
        super(idCliente, tipoCliente, dataCriacao, codBanco, agencia, conta, saldo)
        this.nomeFantasia   = nomeFantasia
        this.cnpj           = cnpj
        this.email          = email
        this.telefone       = telefone
        this.dataDeFundacao = dataDeFundacao
    }
}