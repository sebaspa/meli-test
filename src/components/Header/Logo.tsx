interface LogoProps {
  className?: string
  size: 'small' | 'large'
}

const Logo = ({ className, size = 'small' }: LogoProps): JSX.Element => {
  const srcImg = `https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.15/mercadolibre/logo__${size}@2x.png`
  return (
    <>
      <div id="logo" className={className}>
        <img src={srcImg} alt="logo meli" />
      </div>
    </>
  )
}

export default Logo
