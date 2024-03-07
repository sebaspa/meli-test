import { Link } from 'react-router-dom'
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
            <Link to={`/items?search=${filter.values[0].name}`} target='_self'>{filter.values[0].name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Breadcrumb
