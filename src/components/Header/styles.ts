import styled from 'styled-components'
import fundo from '../../assets/images/fundoHero.png'
import { cores } from '../../styles'

export const HeaderStyle = styled.header`
  background-image: url(${fundo});
  height: 164px;
  align-items: center;

  .container {
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
`
export const Branding = styled.img`
  width: 125px;
  height: 58px;
  margin-top: 48px;
`
export const LinkRestaurantes = styled.a`
  font-size: 18px;
  line-height: 21px;
  font-weight: 900;
  text-decoration: none;
  color: ${cores.vermelho};
  margin-top: 64px;
`

export const TextCart = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 64px;
`
