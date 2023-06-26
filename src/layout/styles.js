import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background-color: rgb(1, 3, 4);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 32px;
  padding-right: 32px;
`;

export const Button = styled.button`
  min-width: 120px;
  height: 40px;
  padding: 0px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 999px;
`;
