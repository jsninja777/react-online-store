import { Image } from '@chakra-ui/image'
import { Divider, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/layout'
import { Layout, PageTitle, Radio } from 'components'
import { RadioGroup } from '@chakra-ui/radio'
import { useState } from 'react'
import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import Jumper from 'assets/images/jumper-tnook.png'
import { useFirestore, useFirestoreDocData } from 'reactfire'
import { ProductType } from 'types'

export const Product = () => {
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const db = useFirestore()

  const productRef = db.collection('products').doc('RU0K9Dyhn9FhN3TCcaKw')
  const cartItemsRef = db.collection('cartItems')

  const { status, data: product } = useFirestoreDocData<ProductType>(
    productRef,
    { idField: 'id' }
  )

  if (status === 'loading') return null

  const addToCart = async () => {
    const sizeVal = size || product.sizes[0];
    const colorVal = color || product.colors[0].name;
    const existingCartItem = await cartItemsRef.where('product.id', '==', product.id).where('size', '==', sizeVal).where('color', '==', colorVal).get();
    if (existingCartItem.size > 0) {
      existingCartItem.forEach((doc) => {
        const existItem = doc.data();
        existItem.quantity = existItem.quantity + quantity;
        cartItemsRef.doc(doc.id).set(existItem);
      });
    } else {
      cartItemsRef.add({
        product: {
          id: product.id,
          title: product.title,
          picture: product.picture,
          price: product.price,
        },
        size: size || product.sizes[0],
        color: color || product.colors[0].name,
        quantity,
      })
    }
  }

  return (
    <Layout>
      <PageTitle>boys</PageTitle>

      <HStack mt='24' spacing='10' justify='center'>
        <Image src={product.picture} />
        <Flex direction='column' width='96'>
          <Heading size='lg' fontWeight='medium' mb='4'>
            {product.title}
          </Heading>
          <Text fontSize='xl'>${product.price.toFixed(2)}</Text>
          <Divider variant='dashed' my='6' borderColor='base' />

          <Flex>
            <RadioGroup onChange={setSize} value={size} flex='1'>
              <HStack>
                <Text color='accent' fontFamily='PT Serif' lineHeight='25px'>
                  size :
                </Text>
                <Text color='primary'>size chart</Text>
              </HStack>
              <Stack mt='6'>
                {product.sizes.map(size => (
                  <Radio key={size} value={size}>
                    <Text color='accent'>{size}</Text>
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>

            <RadioGroup onChange={setColor} value={color} flex='1'>
              <HStack>
                <Text color='accent' fontFamily='PT Serif' lineHeight='25px'>
                  color :
                </Text>
                <Text color='primary'>required</Text>
              </HStack>
              <Stack mt='6'>
                {product.colors.map(color => (
                  <Radio key={color.name} value={color.name} color={color.code}>
                    <Text color='accent'>{color.name}</Text>
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
          </Flex>

          <HStack my='6'>
            <Text color='accent' fontFamily='PT Serif' lineHeight='25px'>
              quantity :
            </Text>
            <Button
              variant='ghost'
              width='6'
              color='accent'
              onClick={() => setQuantity(Math.max(quantity - 1, 1))}>
              -
            </Button>
            <Input
              border='none'
              width='12'
              textAlign='center'
              color='accent'
              value={quantity}
              onChange={({ target }) => setQuantity(Number(target.value))}
            />
            <Button
              variant='ghost'
              width='6'
              color='accent'
              onClick={() => setQuantity(quantity + 1)}>
              +
            </Button>
          </HStack>

          <Button colorScheme='main' size='lg' onClick={addToCart}>
            add to cart
          </Button>
        </Flex>
      </HStack>

      <Divider variant='dashed' mt='24' mb='12' borderColor='base' />

      <Stack>
        <Heading size='md' fontWeight='medium'>
          Description
        </Heading>
        <Text whiteSpace='break-spaces'>{product.description}</Text>
      </Stack>

      <Divider variant='dashed' mt='24' mb='12' borderColor='base' />

      <RelatedProducts />
    </Layout>
  )
}

const RelatedProducts = () => {
  return (
    <Stack spacing='12'>
      <Heading size='md' fontWeight='medium'>
        Related Products
      </Heading>
      <HStack>
        <Stack width='48'>
          <Image src={Jumper} boxSize='48' objectFit='contain' />
          <Text color='accent'>Zip Romper, Woodland Animals</Text>
          <Text>$32.00</Text>
        </Stack>
        <Stack width='48'>
          <Image src={Jumper} boxSize='48' objectFit='contain' />
          <Text color='accent'>Zip Romper, Woodland Animals</Text>
          <Text>$32.00</Text>
        </Stack>
      </HStack>
    </Stack>
  )
}
