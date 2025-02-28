import styled from 'styled-components'
import fundo from '../../assets/images/fundoHero.png'
import { cores, breakpoints } from '../../styles'

export const HeaderStyle = styled.header`
  background-image: url(${fundo});
  align-items: center;
  text-align: center;

  .container {
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 39px 0;

    @media (max-width: ${breakpoints.mobile}) {
      display: inline-block;
    }
    @media (max-width: ${breakpoints.desktop}) {
      padding: 39px 10px;
    }
  }
`
export const Branding = styled.img`
  max-width: 125px;
  width: 100%;
  height: 58px;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 15px;
  }
`
export const LinkRestaurantes = styled.a`
  font-size: 18px;
  line-height: 21px;
  font-weight: 900;
  text-decoration: none;
  color: ${cores.vermelho};
  margin-top: 64px;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 0;
  }
`

export const TextCart = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 64px;
  cursor: pointer;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 0;
  }
`
