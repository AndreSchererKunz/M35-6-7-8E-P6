import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.rosaClaro};
  max-width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`

export const Photo = styled.img`
  margin: 8px;
  max-width: 300px;
  max-height: 160px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin: 0 8px;
  line-height: 18px;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 8px 8px 0px 8px;
  line-height: 22px;
`

export const AddCartButton = styled(Link)`
  background-color: ${cores.amareloClaro};
  color: ${cores.vermelho};
  border: none;
  padding: 4px 6px;
  margin: 8px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
`
