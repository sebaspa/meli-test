import './Pagination.scss'

interface PaginationProps {
  actualPage: number
  totalPages: number
  onChangePage: (page: number) => void
}

const Pagination = ({ actualPage, totalPages, onChangePage }: PaginationProps): JSX.Element => {
  const handleChangePage = (page: number): void => {
    if (page < 1 || page > totalPages) return
    onChangePage(page)
  }
  return (
    <>
    <p>Página {actualPage} de {totalPages}</p>
    <div className="pagination">
      <button className="pagination__button pagination__button--prev" onClick={() => { handleChangePage(actualPage - 1) }}>Anterior</button>
      <button className="pagination__button pagination__button--next" onClick={() => { handleChangePage(actualPage + 1) }}>Siguiente</button>
    </div>
    </>
  )
}

export default Pagination
