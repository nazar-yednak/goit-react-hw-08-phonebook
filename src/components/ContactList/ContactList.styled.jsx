import styled from 'styled-components';

export const ContactList = styled.ul`
  background-color: #e5f107;
  padding: 15px;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 5px solid blue;
  border-radius: 5px;
  margin-top: 5px;
  padding: 5px;
`;
export const ContastText = styled.p`
  color: black;
  font-size: 15px;
  font-weight: 700;
`;
export const DeleteButton = styled.button`
  width: 60px;
  height: 30px;
  background-color: red;
  border-radius: 10%;
  cursor: pointer;
`;
