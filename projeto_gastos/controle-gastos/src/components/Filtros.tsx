type Props = {
  filtro: string
  setFiltro: (f: string) => void
}

export function Filtros({
  filtro,
  setFiltro,
}: Props) {
  const categorias = [
    'Todas',
    'Transporte',
    'Lanche',
    'Games',
  ]

  return (
    <div className="flex flex-wrap gap-3">

      {categorias.map((categoria) => (
        <button
          key={categoria}
          onClick={() =>
            setFiltro(categoria)
          }
          className={`rounded-full px-8 py-3 font-semibold ${
            filtro === categoria
              ? 'bg-lime-700 text-white'
              : 'bg-lime-100 text-lime-900'
          }`}
        >
          {categoria}
        </button>
      ))}

    </div>
  )
}