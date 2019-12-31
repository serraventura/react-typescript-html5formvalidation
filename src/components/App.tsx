import React from "react";
import { GlobalStyles, Fonts } from "@zopauk/react-components";
import Transfers from "./Transfers";
import { TopContainer } from "./styled";

const App: React.FC = () => {
  return (
    <TopContainer>
      <GlobalStyles />
      <Fonts />
      <Transfers />
    </TopContainer>
  );
};

export default App;
