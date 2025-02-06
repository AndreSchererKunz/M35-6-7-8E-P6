import styled from 'styled-components'
import banner from '../../assets/images/fundoHero.png'

export const HeroContainer = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${banner});
`

export const Branding = styled.img`
  width: 125px;
  height: 58px;
  margin-top: 40px;
`
export const Slogan = styled.h4`
  font-weight: bold;
  font-size: 36px;
  max-width: 540px;
  text-align: center;
  margin-bottom: 40px;
`
