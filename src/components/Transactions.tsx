import React, { useContext } from "react";
import { Text, Header3 } from "@zopauk/react-components";
import { Container, Scrollable, CardFlex } from "./styled";
import { ThemeContext } from "./ThemeContext";
import { ITransactions } from "./types";

const Transactions: React.FC<ITransactions> = ({ list = [] }) => {
  const context = useContext(ThemeContext);
  return (
    <Container color={context.neutral.neutral50}>
      <Header3>Transactions</Header3>
      <Scrollable>
        {!!list.length ? (
          list.map(i => (
            <CardFlex key={`${i.email}${i.name}`}>
              <div>
                <Text fw="bold" size="xl">
                  {i.name}
                </Text>
                <br />
                <Text size="s">{i.email}</Text>
              </div>
              <div>
                <Text fw="bold" size="xl">
                  £{i.amount}
                </Text>
              </div>
            </CardFlex>
          ))
        ) : (
          <CardFlex
            borderColor={context.neutral.neutral50}
            backgroundColor={context.neutral.neutral75}
          >
            No transactions
          </CardFlex>
        )}
      </Scrollable>
    </Container>
  );
};

export default Transactions;
