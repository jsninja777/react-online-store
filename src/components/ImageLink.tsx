import { Image } from '@chakra-ui/image'
import { LinkBox, LinkOverlay } from '@chakra-ui/layout'

type Props = {
  href: string
  src: string
  size?: string | number
}

export const ImageLink: React.FC<Props> = ({ href, src, size }) => (
  <LinkBox>
    <LinkOverlay href={href} isExternal>
      <Image src={src} boxSize={size || 6} />
    </LinkOverlay>
  </LinkBox>
)
