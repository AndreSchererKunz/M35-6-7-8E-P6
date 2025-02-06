import { ButtonContainer } from './styles'

export type Props = {
  type?: 'tag' | 'link'
  title?: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type = 'tag', to, children }: Props) => {
  return (
    <ButtonContainer type={type} to={to as string}>
      {children}
    </ButtonContainer>
  )
}

export default Button
