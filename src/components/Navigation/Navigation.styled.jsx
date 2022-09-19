import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-size: 35px;
  font-weight: 700;
  color: #000507;

  &.active {
    color: #e84a5f;
  }
`;
