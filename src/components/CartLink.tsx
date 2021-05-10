import { Box, HStack, LinkBox, LinkOverlay, Text } from '@chakra-ui/layout'
import { useFirestore, useFirestoreCollectionData } from 'reactfire'
import { Link as RouterLink } from 'react-router-dom'
import { CartItemType } from 'types'
import { useMemo } from 'react'
import { ReactComponent as Cart } from 'assets/images/cart.svg'

export const CartLink = () => {
  const db = useFirestore()
  const cartItemsRef = db.collection('cartItems')

  const { status, data: items } = useFirestoreCollectionData<CartItemType>(
    cartItemsRef,
    { idField: 'id' }
  )

  const numItems = useMemo(() => {
    if (status === 'success') {
      return items
        .reduce((prev, current) => prev + current.quantity, 0)
        .toString()
    }

    return ''
  }, [status, items])

  return (
    <LinkBox>
      <HStack>
        <LinkOverlay
          as={RouterLink}
          to='/cart'
          color='accent'
          _hover={{ color: 'primary' }}>
          cart
        </LinkOverlay>
        <Box>
          <Box as={Cart} boxSize='6' />
          <Text
            width='11px'
            fontSize='8px'
            lineHeight='11px'
            textAlign='center'
            position='absolute'
            top='0'
            right='0'>
            {numItems}
          </Text>
        </Box>
      </HStack>
    </LinkBox>
  )
}
