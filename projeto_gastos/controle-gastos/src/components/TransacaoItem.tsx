export function TransacaoItem({
  transacao,
  remover,
}: any) {
  const moeda =
    new Intl.NumberFormat(
      'pt-BR',
      {
        style: 'currency',
        currency: 'BRL',
      },
    )

  return (
    <li className="flex items-center justify-between rounded-xl border border-lime-200 p-6">

      <div>
        <p className="text-lg">
          {transacao.descricao}
        </p>
      </div>

      <div className="flex items-center gap-10">

        <span className="text-slate-500">
          {transacao.categoria}
        </span>

        <span
          className={
            transacao.tipo ===
            'receita'
              ? 'font-bold text-lime-700'
              : 'font-bold text-red-600'
          }
        >
          {transacao.tipo ===
          'receita'
            ? '+ '
            : '- '}
          {moeda.format(
            transacao.valor,
          )}
        </span>

        <button
          onClick={() =>
            remover(transacao.id)
          }
          className="text-red-600"
        >
          ✕
        </button>

      </div>

    </li>
  )
}