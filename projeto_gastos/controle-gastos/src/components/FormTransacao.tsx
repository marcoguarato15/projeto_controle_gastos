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

type Props = {
  onAdicionar: (transacao: Transacao) => void
}

import { useState, type FormEvent } from 'react'

export function FormTransacao({ onAdicionar }: Props) {
  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState('')
  const [tipo, setTipo] = useState<'receita' | 'despesa'>('despesa')
  const [categoria, setCategoria] = useState<Categoria>('Todas')

  const descricaoInvalida = descricao.trim().length < 3
  const valorInvalido = Number(valor) <= 0

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (descricaoInvalida || valorInvalido) return

    onAdicionar({
      id: crypto.randomUUID(),
      descricao,
      valor: Number(valor),
      tipo,
      categoria,
      paga: false,
    })

    setDescricao('')
    setValor('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl bg-slate-100 p-4"
    >
      <h2 className="mb-4 text-xl font-bold">
        Nova transação
      </h2>

      <input
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Descrição"
        className="mb-2 w-full rounded border p-2"
      />

      {descricaoInvalida && (
        <p className="mb-2 text-sm text-red-600">
          Mínimo de 3 letras.
        </p>
      )}

      <input
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder="Valor"
        className="mb-2 w-full rounded border p-2"
      />

      {valorInvalido && (
        <p className="mb-2 text-sm text-red-600">
          Valor deve ser maior que zero.
        </p>
      )}

      <select
        value={categoria}
        onChange={(e) =>
          setCategoria(e.target.value as Categoria)
        }
        className="mb-2 w-full rounded border p-2"
      >
        <option>Todas</option>
        <option>Transporte</option>
        <option>Lanche</option>
        <option>Games</option>
        
      </select>

      <select
        value={tipo}
        onChange={(e) =>
          setTipo(e.target.value as 'receita' | 'despesa')
        }
        className="mb-4 w-full rounded border p-2"
      >
        <option value="receita">Receita</option>
        <option value="despesa">Despesa</option>
      </select>

      <button
        disabled={descricaoInvalida || valorInvalido}
        className="w-full rounded bg-emerald-600 py-2 text-white disabled:opacity-40"
      >
        Adicionar
      </button>
    </form>
  )
}