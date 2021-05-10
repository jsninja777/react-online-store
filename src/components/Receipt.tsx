import { Divider, Flex, Text } from '@chakra-ui/layout'

type Props = {
  total: number
}

export const Receipt: React.FC<Props> = ({ total }) => {
  return (
    <Flex direction='column' width='96'>
      <Flex justify='space-between'>
        <Text fontWeight='medium'>subtotal</Text>
        <Text>${total.toFixed(2)}</Text>
      </Flex>
      <Divider variant='dashed' mt='2' borderColor='base' />

      <Flex justify='space-between' mt='6'>
        <Text fontWeight='medium'>shipping</Text>
        <Text>enter zip</Text>
      </Flex>
      <Divider variant='dashed' mt='2' borderColor='base' />

      <Flex justify='space-between' mt='6'>
        <Text fontWeight='medium'>coupon code</Text>
        <Text>enter code</Text>
      </Flex>
      <Divider variant='dashed' mt='2' borderColor='base' />

      <Flex justify='space-between' mt='12'>
        <Text fontWeight='medium'>total</Text>
        <Text>${total.toFixed(2)}</Text>
      </Flex>
      <Divider variant='dashed' mt='2' mb='6' borderColor='base' />
    </Flex>
  )
}
