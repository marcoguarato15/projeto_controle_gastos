export function ResumoFinanceiro({
  transacoes,
}: any) {
  const receitas = transacoes
    .filter(
      (t: any) =>
        t.tipo === 'receita',
    )
    .reduce(
      (acc: number, t: any) =>
        acc + t.valor,
      0,
    )

  const despesas = transacoes
    .filter(
      (t: any) =>
        t.tipo === 'despesa',
    )
    .reduce(
      (acc: number, t: any) =>
        acc + t.valor,
      0,
    )

  const saldo =
    receitas - despesas

  const moeda =
    new Intl.NumberFormat(
      'pt-BR',
      {
        style: 'currency',
        currency: 'BRL',
      },
    )

  return (
    <div className="grid gap-4 sm:grid-cols-3">

      <div className="rounded-2xl bg-lime-50 p-6 text-center">
        <p>Receitas</p>

        <p className="mt-3 text-3xl font-bold text-lime-700">
          {moeda.format(receitas)}
        </p>
      </div>

      <div className="rounded-2xl bg-lime-50 p-6 text-center">
        <p>Despesas</p>

        <p className="mt-3 text-3xl font-bold text-red-600">
          {moeda.format(despesas)}
        </p>
      </div>

      <div className="rounded-2xl bg-lime-50 p-6 text-center">
        <p>Saldo</p>

        <p className="mt-3 text-3xl font-bold text-lime-800">
          {moeda.format(saldo)}
        </p>
      </div>

    </div>
  )
}