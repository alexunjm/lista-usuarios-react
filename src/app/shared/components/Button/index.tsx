import styled from 'styled-components';

export const Button = styled.button`
  background: #2d6133;
  cursor: pointer;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  text-align: center;
  padding: 5px 10px;
  &[disabled] {
    opacity: 0.3;
  }
`;
