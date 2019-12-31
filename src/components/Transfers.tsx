import React, { useState, useContext } from "react";
import { Header1, Header3 } from "@zopauk/react-components";
import TransferForm from "./TransferForm";
import Transactions from "./Transactions";
import { ThemeContext } from "./ThemeContext";
import { Messenger, TransfersContainer } from "./styled";
import { ITransactionList } from "./types";

const Transfers: React.FC = () => {
  const context = useContext(ThemeContext);
  const [transactions, setTransactions] = useState<ITransactionList[]>([]);
  const [success, setSuccess] = useState<boolean>(false);
  return (
    <div>
      <Header1 style={{ color: context.base.white }}>
        Zopa Money Transfers
      </Header1>
      <Messenger success={success} type="triumph">
        <Header3>The money has been sent!</Header3>
      </Messenger>
      <TransfersContainer backgroundColor={context.neutral.neutral50}>
        <TransferForm
          onSubmit={(formData: ITransactionList) => {
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 5000);
            setTransactions([...transactions, formData]);
          }}
        />

        <Transactions list={transactions} />
      </TransfersContainer>
    </div>
  );
};

export default Transfers;
