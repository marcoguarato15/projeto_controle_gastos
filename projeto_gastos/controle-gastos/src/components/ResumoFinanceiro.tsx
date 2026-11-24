type Transacao = {
  id: string
  descricao: string
  valor: number
  tipo: 'receita' | 'despesa'
  categoria: string
  paga: boolean
}

type Props = {
  transacoes: Transacao[]
}

export function ResumoFinanceiro({
  transacoes,
}: Props) {
  const receitas = transacoes
    .filter((t) => t.tipo === 'receita')
    .reduce((acc, t) => acc + t.valor, 0)

  const despesas = transacoes
    .filter((t) => t.tipo === 'despesa')
    .reduce((acc, t) => acc + t.valor, 0)

  const saldo = receitas - despesas

  const moeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <div className="rounded bg-slate-100 p-4 text-center">
        <p>Receitas</p>
        <p className="font-bold text-green-600">
          {moeda.format(receitas)}
        </p>
      </div>

      <div className="rounded bg-slate-100 p-4 text-center">
        <p>Despesas</p>
        <p className="font-bold text-red-600">
          {moeda.format(despesas)}
        </p>
      </div>

      <div className="rounded bg-slate-100 p-4 text-center">
        <p>Saldo</p>

        <p
          className={
            saldo < 0
              ? 'font-bold text-red-600'
              : 'font-bold text-green-600'
          }
        >
          {moeda.format(saldo)}
        </p>
      </div>
    </div>
  )
}