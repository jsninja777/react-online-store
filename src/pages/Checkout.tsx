import { Divider, Flex, HStack, Stack, Text } from '@chakra-ui/layout'
import {
  Layout,
  OrderSummary,
  PageTitle,
  Radio,
  Receipt,
  SuccessModal,
} from 'components'
import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Select } from '@chakra-ui/select'
import { RadioGroup } from '@chakra-ui/radio'
import { useDisclosure } from '@chakra-ui/hooks'
import { useFirestore, useFirestoreCollectionData } from 'reactfire'
import { CartItemType } from 'types'

export const Checkout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
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

  return (
    <Layout>
      <PageTitle>checkout</PageTitle>

      <Stack direction='row' mt='16' spacing='12'>
        <Stack flex='1' spacing='8'>
          <Stack spacing='2'>
            <Flex justify='space-between'>
              <Text fontWeight='medium'>1. customer</Text>
              <Text color='primary'>edit</Text>
            </Flex>
            <Divider variant='dashed' borderColor='base' />
          </Stack>

          <Stack spacing='2'>
            <Flex justify='space-between'>
              <Text fontWeight='medium'>2. shipping</Text>
            </Flex>
            <Divider variant='dashed' borderColor='base' />
            <Stack spacing='4'>
              <Text fontWeight='medium' mt='6'>
                shipping address
              </Text>

              <FormControl>
                <FormLabel m='0'>country</FormLabel>
                <Select>
                  <option>United States</option>
                </Select>
              </FormControl>

              <HStack>
                <FormControl>
                  <FormLabel m='0'>first name</FormLabel>
                  <Input />
                </FormControl>

                <FormControl>
                  <FormLabel m='0'>last name</FormLabel>
                  <Input />
                </FormControl>
              </HStack>

              <FormControl>
                <FormLabel m='0'>address line 1</FormLabel>
                <Input />
              </FormControl>

              <FormControl>
                <FormLabel m='0'>address line 2</FormLabel>
                <Input />
              </FormControl>

              <HStack>
                <FormControl>
                  <FormLabel m='0'>city</FormLabel>
                  <Input />
                </FormControl>

                <FormControl>
                  <FormLabel m='0'>state</FormLabel>
                  <Select>
                    {STATES.map(state => (
                      <option key={state}>{state}</option>
                    ))}
                  </Select>
                </FormControl>
              </HStack>

              <HStack>
                <FormControl>
                  <FormLabel m='0'>postal code</FormLabel>
                  <Input />
                </FormControl>

                <FormControl>
                  <FormLabel m='0'>phone number</FormLabel>
                  <Input />
                </FormControl>
              </HStack>

              <Text fontWeight='medium'>shipping method</Text>

              <RadioGroup>
                <Stack spacing='5'>
                  <Radio value='1'>free</Radio>
                  <Radio value='2'>expedite</Radio>
                </Stack>
              </RadioGroup>

              <Button colorScheme='main'>submit</Button>
            </Stack>
          </Stack>

          <Stack spacing='2'>
            <Flex justify='space-between'>
              <Text fontWeight='medium'>3. billing</Text>
            </Flex>
            <Divider variant='dashed' borderColor='base' />
          </Stack>

          <Stack spacing='2'>
            <Flex justify='space-between'>
              <Text fontWeight='medium'>4. payment</Text>
            </Flex>
            <Divider variant='dashed' borderColor='base' />
          </Stack>
        </Stack>

        <Stack align='flex-end' mt='24'>
          <OrderSummary items={items} />
          <Receipt total={total} />
          <Button colorScheme='main' mt='12' onClick={onOpen}>
            checkout
          </Button>
        </Stack>
      </Stack>

      <SuccessModal isOpen={isOpen} onClose={onClose} />
    </Layout>
  )
}
const STATES = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Idaho',
  'Hawaii',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
