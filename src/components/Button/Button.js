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
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  /* box-shadow: 0 1px 30px -10px hsla(0, 0%, 0%, 0.15); */
  font-size: ${({ theme }) => theme.fontSize.xs};
  cursor: pointer;

  ${({ blue }) =>
    blue &&
    css`
      background-color: ${({ theme }) => theme.blue};
    `}

  ${({ dark2 }) =>
    dark2 &&
    css`
      background-color: ${({ theme }) => theme.dark2};
    `}
`

export default Button
