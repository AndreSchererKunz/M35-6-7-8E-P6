import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterStyle = styled.footer`
  background-color: ${cores.amareloClaro};
  text-align: center;
  height: 298px;
`
export const Branding = styled.img`
  width: 125px;
  height: 58px;
  margin-top: 40px;
`

export const SocialMedia = styled.div`
  margin-top: 32.5px;
  img {
    margin-right: 8px;
  }
`
export const Disclaimer = styled.p`
  margin: 80px auto;
  max-width: 480px;
  width: 100%;
  font-size: 10px;
  font-weight: regular;
`
