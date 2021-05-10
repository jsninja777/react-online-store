import { Image } from '@chakra-ui/image'
import { Divider, Flex, Link, Stack, Text } from '@chakra-ui/layout'
import { Link as RouterLink } from 'react-router-dom'
import { CartItemType } from 'types'

type Props = {
  items: CartItemType[]
}

export const OrderSummary: React.FC<Props> = ({ items }) => {
  return (
    <Flex direction='column' width='96'>
      <Flex justify='space-between'>
        <Text fontWeight='medium'>order summary</Text>
        <Link as={RouterLink} to='/cart'>
          edit cart
        </Link>
      </Flex>
      <Divider variant='dashed' mt='2' borderColor='base' />

      {items.map(item => (
        <Flex key={item.id} py='12'>
          <Image src={item.product.picture} boxSize='20' objectFit='contain' />
          <Stack spacing='0' flex='1'>
            <Text fontSize='sm'>{item.product.title}</Text>
            <Text fontSize='sm'>size: {item.size}</Text>
            <Text fontSize='sm'>color: {item.color}</Text>
            <Link as={RouterLink} to='/' fontSize='sm'>
              change
            </Link>
          </Stack>
          <Text fontSize='sm'>${item.product.price.toFixed(2)}</Text>
        </Flex>
      ))}
    </Flex>
  )
}
