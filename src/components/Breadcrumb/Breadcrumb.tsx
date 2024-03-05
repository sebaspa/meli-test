import './Breadcrumb.scss'

const Breadcrumb = (): JSX.Element => {
  return (
    <div id="breadcrumb">
      <ul>
        <li>Electrónica audio y video</li>
        <li>IPod</li>
        <li>Reproductores</li>
        <li>IPod mini</li>
        <li className='active'>32 GB</li>
      </ul>
    </div>
  )
}

export default Breadcrumb
