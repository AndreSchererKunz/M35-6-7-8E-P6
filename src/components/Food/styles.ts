import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.rosaClaro};
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 8px;
`

export const Photo = styled.img`
  max-height: 160px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: ${breakpoints.tablet}) {
    object-fit: fill;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin: 8px 0;
  line-height: 18px;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px;
  line-height: 22px;
`

export const AddCartButton = styled(Link)`
  background-color: ${cores.amareloClaro};
  color: ${cores.vermelho};
  border: none;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
`
