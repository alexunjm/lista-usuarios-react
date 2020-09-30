import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  & td {
    border: 1px solid #ddd;
    padding: 4px 8px;
  }

  & tr:nth-child(even){background-color: #f2f2f2;}

  & tr:hover {background-color: #ddd;}

  & th {
    padding: 6px 12px;
    background-color: #50af5b;
    color: white;
  }
`;