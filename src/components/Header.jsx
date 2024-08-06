import styled from "styled-components";
import { flex } from "../../styled/styled";
import { font } from "../../styled/font";

const StyledHeader = styled.header`
  ${flex(undefined, "space-between", "center")}
  padding: 20px 20px;
  background-color: black;
  ul {
    ${flex(undefined, "center", "center", "20px")}
    li {
      ${font(undefined, 400)}
      list-style: none;
    }
  }
`;   

export default function Header() {

  return (
    <StyledHeader>
      <h1>OZ코딩스쿨</h1>
      <ul className="menu-container">
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </StyledHeader>
  );
}
