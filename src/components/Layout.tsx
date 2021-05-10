import { Container } from '@chakra-ui/layout'
import { Header, Footer } from 'components'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxW='container.lg' py='16'>
        {children}
      </Container>
      <Footer />
    </>
  )
}
