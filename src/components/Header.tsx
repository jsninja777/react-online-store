import { Image } from '@chakra-ui/image'
import { Flex, HStack, Stack } from '@chakra-ui/layout'
import { NavLink, SocialLinks } from 'components'
import Logo from 'assets/images/tnooklogo.svg'
import { CartLink } from './CartLink'

export const Header = () => {
  return (
    <Flex direction='column' p='4' shadow='header'>
      <HStack spacing='8' position='absolute' right='4'>
        <SocialLinks />
        <CartLink />
      </HStack>

      <Stack spacing='4' align='center'>
        <Image src={Logo} boxSize='24' />
        <Links />
      </Stack>
    </Flex>
  )
}

const Links = () => {
  return (
    <HStack spacing={12} justify='center'>
      <NavLink to='/'>new arrivals</NavLink>
      <NavLink to='/'>babies</NavLink>
      <NavLink to='/'>girls</NavLink>
      <NavLink to='/'>boys</NavLink>
      <NavLink to='/'>gifts</NavLink>
      <NavLink to='/'>sale</NavLink>
    </HStack>
  )
}
