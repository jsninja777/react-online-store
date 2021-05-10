import { Radio as BaseRadio } from '@chakra-ui/radio'
import styled from '@emotion/styled'

export const Radio = styled(BaseRadio)<{ color?: string }>(
  ({ theme, color }) => ({
    borderWidth: 1,
    backgroundColor: color || 'white',
    borderColor: theme.colors.text,
    '&[data-checked]': {
      borderColor: theme.colors.text,
    },
    '&[data-checked]:hover': {
      borderColor: theme.colors.text,
    },
    '&[data-checked]::before': {
      border: '1px solid white',
      color: color || theme.colors.primary,
      width: '100%',
      height: '100%',
    },
  })
)
