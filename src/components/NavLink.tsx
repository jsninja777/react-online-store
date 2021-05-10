import { Link } from '@chakra-ui/layout'
import { NavLink as RouterNavLink, NavLinkProps } from 'react-router-dom'

export const NavLink: React.FC<NavLinkProps> = ({ children, ...props }) => (
  <Link as={RouterNavLink} {...props}>
    {children}
  </Link>
)
