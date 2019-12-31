import styled from "styled-components";
import { SidekickCard, Card } from "@zopauk/react-components";
import mediaQueries from "../../mediaQueries";
import { ISidekickCardProps, IForm, IContainer } from "../types";

export const TopContainer = styled.div`
  margin: 50px;
  ${mediaQueries.mobile`
    margin: 20px;
  `};
`;

export const Messenger = styled(SidekickCard)<ISidekickCardProps>`
  display: ${({ success }) => (success ? "inherit" : "none")};
  padding-bottom: 10px;
  padding-top: 20px;
  margin-bottom: 20px;
  ${mediaQueries.mobile`
      padding-top: 35px;
      border-radius: 20px 20px 4px 20px;
    `};
`;

export const TransfersContainer = styled(Card)`
  display: flex;
  justify-content: space-between;
  padding: 0;
  border: 0;
  ${mediaQueries.mobile`
      display: unset;
      justify-content: unset;
    `};
`;

export const Form = styled.form<IForm>`
  border-radius: 4px 20px 20px 4px;
  width: 48%;
  background-color: ${({ color }) => `${color}`};
  padding: 8px 45px 35px 45px;
  ${mediaQueries.mobile`
      width: 100%;
      padding: 8px 25px 35px 25px;
      border-radius: 20px 20px 4px 20px;
    `};
`;

export const Lead = styled.div`
  margin-bottom: 20px;
`;

export const Container = styled.div<IContainer>`
  width: 50%;
  padding: 0 35px 0 0;
  padding: 8px 24px 35px 0;
  ${mediaQueries.mobile`
    background-color: ${(props: IContainer) => `${props.color}`};
      width: 100%;
      margin-top: 20px;
      padding: 8px 25px 35px 25px;
      border-radius: 20px 20px 4px 20px;
    `};
`;

export const CardFlex = styled(Card)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  ${mediaQueries.mobile`
      display: block;
    `};
`;

export const Scrollable = styled.div`
  height: 355px;
  overflow-x: scroll;
  ${mediaQueries.mobile`
      height: unset;
      overflow-x: unset;
    `};
`;
