import type { Filters } from '../../types/product'
import './Breadcrumb.scss'

interface BreadcrumbProps {
  filters: Filters[]
}

const Breadcrumb = ({ filters }: BreadcrumbProps): JSX.Element => {
  return (
    <div id="breadcrumb">
      <ul>
        {filters.map((filter, index) => (
          <li key={filter.id} className={index === filters.length - 1 ? 'active' : ''} >
            {filter.values[0].name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Breadcrumb
