import styled from "styled-components";

export const Label = styled.label`
  color: rgb(1, 3, 4);
  font-weight: 600;
  font-size: 24px;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #f2f2f2;
  padding: 12px;
  border-radius: 3px;
  width: 250px;
  font-size: 14px;
  display: block;
`;

export const Container = styled.div`
  height: 104px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(230, 230, 230);
  padding-left: 32px;
  padding-right: 32px;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0px;
  color: rgb(1, 3, 4);
  font-weight: 500;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  min-width: 120px;
  height: 40px;
  padding: 0px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 999px;
`;

export const Heading = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-top: 10px;
`;
