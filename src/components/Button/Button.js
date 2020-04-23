import styled, { css } from "styled-components"

const Button = styled.button`
  background-color: ${({ theme }) => theme.yellow};
  text-align: center;
  border-radius: 5px;
  width: 150px;
  height: 45px;
  border: none;
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.xs};
  cursor: pointer;

  ${({ blue }) =>
    blue &&
    css`
      background-color: ${({ theme }) => theme.blue};
    `}
`

export default Button
