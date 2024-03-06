import { Helmet } from 'react-helmet-async'

interface SeoProps {
  title: string
  description: string
  name: string
  type: string
  href: string
}

const Seo = ({ title, description, name, type, href }: SeoProps): JSX.Element => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name={name} content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <link rel="canonical" href={href} />
    </Helmet>
  )
}

export default Seo
