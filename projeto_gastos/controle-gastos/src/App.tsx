import { useState } from 'react'

import { FormTransacao } from './components/FormTransacao'
import { Filtros } from './components/Filtros'
import { ListaTransacoes } from './components/ListaTransacoes'
import { ResumoFinanceiro } from './components/ResumoFinanceiro'

type Categoria =
  | 'Todas'
  | 'Transporte'
  | 'Lanche'
  | 'Games'

type Transacao = {
  id: string
  descricao: string
  valor: number
  tipo: 'receita' | 'despesa'
  categoria: Categoria
  paga: boolean
}

function App() {
  const [transacoes, setTransacoes] = useState<Transacao[]>([])

  const [filtro, setFiltro] = useState('Todas')

  const adicionar = (transacao: Transacao) =>
    setTransacoes((t) => [...t, transacao])

  const remover = (id: string) =>
    setTransacoes((t) =>
      t.filter((item) => item.id !== id),
    )

  const alternar = (id: string) =>
    setTransacoes((t) =>
      t.map((item) =>
        item.id === id
          ? { ...item, paga: !item.paga }
          : item,
      ),
    )

  const filtradas =
    filtro === 'Todas'
      ? transacoes
      : transacoes.filter(
          (t) => t.categoria === filtro,
        )

  return (
    <main className="mx-auto max-w-7xl p-6">
      <div className="flex flex-col gap-6 lg:flex-row">

        <div className="lg:w-[320px]">
          <FormTransacao onAdicionar={adicionar} />
        </div>

        <div className="flex-1 space-y-6">

          <ResumoFinanceiro
            transacoes={transacoes}
          />

          <Filtros
            filtro={filtro}
            setFiltro={setFiltro}
          />

          <ListaTransacoes
            transacoes={filtradas}
            remover={remover}
            alternar={alternar}
          />

        </div>

      </div>
    </main>
  )
}

export default App