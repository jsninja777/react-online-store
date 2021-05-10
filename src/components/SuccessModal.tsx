import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Text,
  Flex,
  Image,
  Stack,
  Heading,
  Divider,
} from '@chakra-ui/react'
import { PageTitle } from './PageTitle'
import { useFirestore, useFirestoreCollectionData } from 'reactfire'
import { CartItemType } from 'types'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const SuccessModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const db = useFirestore()
  const cartItemsRef = db.collection('cartItems')

  const { status, data: items } = useFirestoreCollectionData<CartItemType>(
    cartItemsRef,
    { idField: 'id' }
  )

  if (status === 'loading') return null

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='4xl'>
      <ModalOverlay />
      <ModalContent borderRadius='0'>
        <ModalCloseButton />
        <ModalBody py='16'>
          <PageTitle>thank you!</PageTitle>

          <Text textAlign='center' my='12'>
            Order #327462 is being processed.
          </Text>

          {items.map(item => (
            <Flex key={item.id} justify='center'>
              <Image
                src={item.product.picture}
                boxSize='80'
                objectFit='contain'
              />
              <Stack pt='10' width='80'>
                <Heading size='lg' fontWeight='medium'>
                  {item.product.title}
                </Heading>
                <Text fontSize='lg' pb='4'>
                  ${item.product.price.toFixed(2)}
                </Text>
                <Divider variant='dashed' borderColor='base' />
                <Flex flexWrap='wrap' pt='4'>
                  <Text mr='10'>size : {item.size}</Text>
                  <Text mr='10'>color : {item.color}</Text>
                  <Text>quantity : {item.quantity}</Text>
                </Flex>
              </Stack>
            </Flex>
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
