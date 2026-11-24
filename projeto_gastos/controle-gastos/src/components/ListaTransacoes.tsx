import { TransacaoItem } from './TransacaoItem'

type Props = {
  transacoes: any[]
  remover: (id: string) => void
  alternar: (id: string) => void
}

export function ListaTransacoes({
  transacoes,
  remover,
  alternar,
}: Props) {
  if (transacoes.length === 0) {
    return (
      <p className="text-slate-500">
        Nenhuma transação encontrada.
      </p>
    )
  }

  return (
    <ul className="space-y-2">
      {transacoes.map((transacao) => (
        <TransacaoItem
          key={transacao.id}
          transacao={transacao}
          remover={remover}
          alternar={alternar}
        />
      ))}
    </ul>
  )
}