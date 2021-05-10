import { Flex, Heading, Stack } from '@chakra-ui/layout'
import { NavLink, SocialLinks } from 'components'

export const Footer = () => {
  return (
    <Flex bg='base' px='24' py='16'>
      <Stack width='56' spacing='6'>
        <Heading size='md' fontWeight='medium' color='primary'>
          navigate
        </Heading>

        <Stack spacing='0'>
          <NavLink to='/new-arrivals'>new arrivals</NavLink>
          <NavLink to='/babies'>babies</NavLink>
          <NavLink to='/boys'>boys</NavLink>
          <NavLink to='/'>girls</NavLink>
          <NavLink to='/'>gifts</NavLink>
          <NavLink to='/'>sale</NavLink>
          <NavLink to='/'>blog</NavLink>
        </Stack>
      </Stack>

      <Stack width='56' spacing='6'>
        <Heading size='md' fontWeight='medium' color='primary'>
          customer care
        </Heading>

        <Stack spacing='0'>
          <NavLink to='/'>contact us</NavLink>
          <NavLink to='/'>my account</NavLink>
          <NavLink to='/'>sizing</NavLink>
          <NavLink to='/'>shiping & terms</NavLink>
          <NavLink to='/'>FAQs</NavLink>
        </Stack>
      </Stack>

      <Stack flex={1} align='flex-end'>
        <SocialLinks isWhite size='8' />
      </Stack>
    </Flex>
  )
}
