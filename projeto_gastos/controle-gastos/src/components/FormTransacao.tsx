import { useState, type FormEvent } from 'react'

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

export function FormTransacao({
  onAdicionar,
}: Props) {
  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState('')
  const [tipo, setTipo] =
    useState<'receita' | 'despesa'>('despesa')

  const [categoria, setCategoria] =
    useState<Categoria>('Todas')

  const descricaoInvalida =
    descricao.trim().length < 3

  const valorInvalido =
    Number(valor) <= 0

  function handleSubmit(
    e: FormEvent<HTMLFormElement>,
  ) {
    e.preventDefault()

    if (
      descricaoInvalida ||
      valorInvalido
    )
      return

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
      className="rounded-[30px] bg-lime-50 p-8"
    >
      <h2 className="mb-6 text-2xl font-bold text-lime-900">
        Nova transação
      </h2>

      <input
        value={descricao}
        onChange={(e) =>
          setDescricao(e.target.value)
        }
        placeholder="Descrição"
        className="mb-4 w-full rounded-xl border border-lime-200 p-4"
      />

      <input
        type="number"
        value={valor}
        onChange={(e) =>
          setValor(e.target.value)
        }
        placeholder="Valor (R$)"
        className="mb-4 w-full rounded-xl border border-lime-200 p-4"
      />

      <select
        value={categoria}
        onChange={(e) =>
          setCategoria(
            e.target.value as Categoria,
          )
        }
        className="mb-4 w-full rounded-xl border border-lime-200 p-4"
      >
        <option>Todas</option>
        <option>Transporte</option>
        <option>Lanche</option>
        <option>Games</option>
      </select>

      <select
        value={tipo}
        onChange={(e) =>
          setTipo(
            e.target.value as
              | 'receita'
              | 'despesa',
          )
        }
        className="mb-6 w-full rounded-xl border border-lime-200 p-4"
      >
        <option value="receita">
          Receita
        </option>

        <option value="despesa">
          Despesa
        </option>
      </select>

      <button
        disabled={
          descricaoInvalida ||
          valorInvalido
        }
        className="w-full rounded-full bg-lime-700 py-4 text-lg font-bold text-white disabled:opacity-40"
      >
        Adicionar
      </button>
    </form>
  )
}