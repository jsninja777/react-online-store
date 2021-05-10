import { Link as RouterLink } from 'react-router-dom'
import { HStack, Link, Stack, Text } from '@chakra-ui/layout'
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table'
import { Layout, PageTitle, Receipt } from 'components'
import { Image } from '@chakra-ui/image'
import { Button } from '@chakra-ui/button'
import { useFirestore, useFirestoreCollectionData } from 'reactfire'
import { CartItemType } from 'types'
import Close from 'assets/images/close.svg'

export const Cart = () => {
  const db = useFirestore()
  const cartItemsRef = db.collection('cartItems')

  const { status, data: items } = useFirestoreCollectionData<CartItemType>(
    cartItemsRef,
    { idField: 'id' }
  )

  if (status === 'loading') return null

  const total = items.reduce(
    (prev, current) => prev + current.quantity * current.product.price,
    0
  )

  const removeCartItem = (id: string) => {
    cartItemsRef.doc(id).delete();
  }
  const setQuantity = async (id: string, quantity: number) => {
    const editItem = items.find((item)=> item.id===id) as CartItemType;
    editItem.quantity = quantity;
    cartItemsRef.doc(id).set({
      product: editItem.product,
      color: editItem.color,
      size: editItem.size,
      quantity: editItem.quantity
    });
  }
  return (
    <Layout>
      <PageTitle>your cart</PageTitle>

      <Table mt='16'>
        <Thead>
          <Tr>
            <Th textTransform='none'>item</Th>
            <Th textTransform='none'>price</Th>
            <Th textTransform='none'>quantity</Th>
            <Th textTransform='none'>total</Th>
            <Th textTransform='none'></Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map(item => (
            <Tr key={item.id}>
              <Td>
                <HStack>
                  <Image
                    src={item.product.picture}
                    boxSize='28'
                    objectFit='contain'
                  />
                  <Stack>
                    <Text>{item.product.title}</Text>
                    <Text>size: {item.size}</Text>
                    <Text>color: {item.color}</Text>
                    <Link as={RouterLink} to='/'>
                      change
                    </Link>
                  </Stack>
                </HStack>
              </Td>
              <Td>${item.product.price.toFixed(2)}</Td>
              <Td>
                <Button
                  variant='ghost'
                  width='6'
                  color='accent'
                  onClick={() => setQuantity(item.id, Math.max(item.quantity - 1, 1))}>
                  -
                </Button>
                {item.quantity}
                <Button
                  variant='ghost'
                  width='6'
                  color='accent'
                  onClick={() => setQuantity(item.id, Math.max(item.quantity + 1, 1))}>
                  +
                </Button>
              </Td>
              <Td>${(item.quantity * item.product.price).toFixed(2)}</Td>
              <Td><Link onClick={() => removeCartItem(item.id)}><Image src={Close} boxSize='5' /></Link></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Stack align='flex-end' mt='36'>
        <Receipt total={total} />
        <Button as={RouterLink} to='/checkout' colorScheme='main' mt='12'>
          checkout
        </Button>
      </Stack>
    </Layout>
  )
}
