import { Heading } from '@chakra-ui/layout'

export const PageTitle: React.FC = ({ children }) => (
  <Heading size='2xl' color='primary' fontWeight='medium' textAlign='center'>
    {children}
  </Heading>
)
