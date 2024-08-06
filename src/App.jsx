import { flex } from "../styled/styled";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import styled from "styled-components"; 
import GlobalStyle from "./GlobalStyle";
const StyledSection = styled.section`
  ${flex(undefined, "center", "center", "20px", "wrap")}
  padding: 20px 40px;
`;


function App() {
  return (
    <main>
      <GlobalStyle />
      <Header />
      <StyledSection>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </StyledSection>
    </main>
  );
}

export default App;
