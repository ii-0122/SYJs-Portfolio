import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  background-color: black;
  color: white;
  padding: 20px 30px;
`;

export const LogoStyle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 36px;
  gap: 24px;
`;

export const NavLink = styled.a`
  color: gray;
  text-decoration: none; /* 밑줄 제거 */
  font-size: 18px;
  font-weight: bold;
  display: flex; /* Flexbox 사용 */
  align-items: center;
  &:hover {
    font-size: 21px;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.6),
      0 0 10px rgba(255, 255, 255, 0.4);
    color: #ffcc00; /* 텍스트 색상 변경 */
  }
`;
