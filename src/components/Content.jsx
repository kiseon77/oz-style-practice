import styled from "styled-components";
import { flex } from "../../styled/styled";
import { font } from "../../styled/font";
import { gray, tagColor } from "../../styled/color";

const StyledContent = styled.div`
  ${flex("column", undefined, "flex-start", "5px")}
  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }
  span {
    ${font("12px")}
    color: ${tagColor};
    border: 1px solid ${tagColor};
    padding: 4px 5px;
    border-radius: 3px;
  }
  div {
    ${font("18px", 600)}
  }
  p {
    ${font("12px")}
    color: ${gray};
  }
`;
 


export default function Content({ content }) {
  return (
    <StyledContent>
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </StyledContent>
  );
}
