import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.rosaClaro};
  max-width: 100%;
  display: flex;
  flex-direction: column;
`

export const Photo = styled.img`
  margin: 8px;
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

export const AddCartButton = styled.button`
  background-color: ${cores.amareloClaro};
  color: ${cores.vermelho};
  border: none;
  padding: 4px 0;
  margin: 8px;
  font-weight: bold;
`
