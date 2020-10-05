import styled from 'styled-components';

export const DivContainer = styled.div`
  display: block;
  width: 100%;
`;

export const DivSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-content
`;

export const DivRow = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  @media (min-width: 768px) {
    max-width: 750px;
  }

  &.end-space {
    height: 25px;
  }
`;

export const Hr = styled.hr`
  margin: 15px 0;
`;
