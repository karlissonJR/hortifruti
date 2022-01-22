import styled, { css } from 'styled-components'

export const ProductListLink = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 25px;

    ${props => props.menu === '1' && css`
        background-color: #DC7633;
  `}
`

export const ShoppingCartLink = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 25px;

    ${props => props.menu === '2' && css`
        background-color: #DC7633;
  `}
`