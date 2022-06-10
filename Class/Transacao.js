class Transacao {
    static transferencia(contaOrigem, contaDestino, idTransacao, dataDeTransacao, valorDaTransferencia) {
        if (contaOrigem.saldo >= valorDaTransferencia){
            let objetoContaOrigem  = {
                                        idTransacao: idTransacao,
                                        dataDeTransacao: dataDeTransacao,
                                        valorDaTransferencia: valorDaTransferencia,
                                        tipo: 'pagamento',
                                     }

            let objetoContaDestino = {
                                        idTransacao: idTransacao,
                                        dataDeTransacao: dataDeTransacao,
                                        valorDaTransferencia: valorDaTransferencia,
                                        tipo: 'recebimento',
                                     }
            
            contaOrigem.saldo  -= valorDaTransferencia
            contaDestino.saldo += valorDaTransferencia
            
            contaOrigem.historico.push(objetoContaOrigem)
            contaDestino.historico.push(objetoContaDestino)

            return 'Transferência realizada com sucesso!'
        } 
        else {
            return 'Saldo insuficiente para transferência!'
        }
    }

    static deposito(contaDestino, idDeposito, dataDoDeposito, valorDoDeposito) {
        let objetoContaDestino = {
                                    idDeposito: idDeposito,
                                    dataDoDeposito: dataDoDeposito,
                                    valorDoDeposito: valorDoDeposito,
                                    tipo: "recebimento",
                                 }

        contaDestino.saldo += valorDoDeposito
        contaDestino.historico.push(objetoContaDestino)

        return 'Depósito realizado com sucesso!'
    }

    static pagamentoSalario(contaOrigem, contaDestino, idPagamento, dataDoPagamento, valorDoSalario) {
        if(contaOrigem.constructor.name == 'Pessoa') {
            if(valorDoSalario > 1000){
                return 'Seu limite máximo para este tipo de operação é de 1000, entre em contato com o banco!'
            } 
            else {
                if(contaOrigem.saldo >= valorDoSalario) {
                    let objetoContaDestino = {
                                                idPagamento: idPagamento,
                                                dataDoPagamento: dataDoPagamento,
                                                valorDoSalario: valorDoSalario,
                                                tipo: "recebimento",
                                             }

                    let objetoContaOrigem  = {
                                                idPagamento: idPagamento,
                                                dataDoPagamento: dataDoPagamento,
                                                valorDoSalario: valorDoSalario,
                                                tipo: "pagamento",
                                             }

                    contaDestino.saldo += valorDoSalario
                    contaOrigem.saldo  -= valorDoSalario

                    contaDestino.historico.push(objetoContaDestino)                        
                    contaOrigem.historico.push(objetoContaOrigem)

                    return 'Pagamento realizado com sucesso!'
                }
                else {
                    return 'Saldo insuficiente para realizar o pagamento!'
                }
            }
        }

    }
}
