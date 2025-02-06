import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#E66767',
  dourado: '#FFB930',
  branco: '#FFFFFF',
  rosaClaro: '#FFF8F2',
  amareloClaro: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body{
  background-color: ${cores.rosaClaro};
  color: ${cores.vermelho};
}

`
