import { HStack } from '@chakra-ui/layout'
import { ImageLink } from 'components'

import Instagram from 'assets/images/instagram.svg'
import Twitter from 'assets/images/twitter.svg'
import Facebook from 'assets/images/facebook.svg'
import Pinterest from 'assets/images/pinterest.svg'

import InstagramWhite from 'assets/images/instagram-white.svg'
import TwitterWhite from 'assets/images/twitter-white.svg'
import FacebookWhite from 'assets/images/facebook-white.svg'
import PinterestWhite from 'assets/images/pinterest-white.svg'

type Props = {
  isWhite?: boolean
  size?: string | number
}

export const SocialLinks: React.FC<Props> = ({ isWhite, size }) => {
  return (
    <HStack>
      <ImageLink
        href='https://www.instagram.com'
        src={!isWhite ? Instagram : InstagramWhite}
        size={size}
      />
      <ImageLink
        href='https://twitter.com'
        src={!isWhite ? Twitter : TwitterWhite}
        size={size}
      />
      <ImageLink
        href='https://www.facebook.com'
        src={!isWhite ? Facebook : FacebookWhite}
        size={size}
      />
      <ImageLink
        href='https://pinterest.com'
        src={!isWhite ? Pinterest : PinterestWhite}
        size={size}
      />
    </HStack>
  )
}
