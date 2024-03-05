import { Link } from 'react-router-dom'

interface LogoProps {
  className?: string
  size: 'small' | 'large'
}

const Logo = ({ className, size = 'small' }: LogoProps): JSX.Element => {
  const srcImg = `https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.15/mercadolibre/logo__${size}@2x.png`
  return (
    <>
      <Link to='/'>
        <div id="logo" className={className}>
          <img src={srcImg} alt="logo meli" />
        </div>
      </Link>
    </>
  )
}

export default Logo
