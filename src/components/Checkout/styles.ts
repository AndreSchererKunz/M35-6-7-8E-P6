import styled from 'styled-components'
import { AddCartButton, SubmitCartButton } from '../Cart/styles'
import { cores, breakpoints } from '../../styles'

export const DeliverContainer = styled.div`
  display: none;
  &.show {
    display: block;
  }
  .CEPNumber {
    display: flex;
    column-gap: 34px;
  }
  .buttomContainer {
    margin-top: 24px;
  }
  color: ${cores.amareloClaro};
  h2 {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }
  label {
    font-weight: 700;
    font-size: 14px;
  }
  &.show {
    display: block;
  }
  ${AddCartButton} {
    margin-top: 8px;
  }
`

export const Field = styled.div`
  display: block;
  width: 100%;
  input {
    width: 100%;
    padding: 8px;
    background-color: ${cores.amareloClaro};
    border: 1px solid ${cores.amareloClaro};
    margin: 8px 0;
  }
`

export const PaymentContainer = styled.div`
  color: ${cores.amareloClaro};
  display: none;

  p {
    font-size: 16px;
    font-weight: 700;
  }

  label {
    font-weight: 700;
    font-size: 14px;
  }

  &.show {
    display: block;
  }

  .buttomContainer {
    margin-top: 24px;
    ${SubmitCartButton} {
      margin-bottom: 8px;
    }
  }
  .fieldContainer {
    display: flex;
    column-gap: 34px;
    #cardNumber {
      width: 228px;
    }
    #mesVencimento {
      width: 155px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    .fieldContainer {
      display: block;
      column-gap: 34px;
      #cardNumber {
        width: 100%;
      }
      #mesVencimento {
        width: 100%;
      }
    }
  }
`

export const ConfirmedContainer = styled.div`
  color: ${cores.amareloClaro};
  display: none;
  &.show {
    display: block;
  }
  .buttomContainer {
    margin-top: 24px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
  h2 {
    font-size: 16px;
    font-weight: 700;
    line-height: 18.75px;
    margin-bottom: 8px;
  }
`
