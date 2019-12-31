import React, { useState, useContext } from "react";
import { TextField, Button, Header3 } from "@zopauk/react-components";
import { ThemeContext } from "./ThemeContext";
import { Form, Lead } from "./styled";
import { ITransferForm, IErrorFormValidation } from "./types";

const initialErrorFormValidation: IErrorFormValidation = {
  name: false,
  email: false,
  amount: false
};

const TransferForm: React.FC<ITransferForm> = ({ onSubmit }) => {
  const context = useContext(ThemeContext);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState<IErrorFormValidation>(
    initialErrorFormValidation
  );

  return (
    <Form
      data-test="transfer-form" 
      color={context.base.white}
      onSubmit={e => {
        onSubmit({ name, email, amount });
        e.preventDefault();
        setName("");
        setEmail("");
        setAmount(0);
        setError(initialErrorFormValidation);
        return;
      }}
    >
      <Header3>Enter details</Header3>
      <Lead>
        <TextField
          label="Name"
          errorMessage={error.name ? "This field is required" : ""}
          inputProps={{
            name: "name",
            required: true,
            type: "text",
            value: name,
            onChange: e => {
              const { target } = e;
              setName(target.value);
              setError({ ...error, name: !target.checkValidity() });
            }
          }}
        />
      </Lead>
      <Lead>
        <TextField
          label="E-mail"
          errorMessage={
            error.email ? "Provide a valid e-mail. This field is required" : ""
          }
          inputProps={{
            name: "email",
            required: true,
            type: "email",
            value: email,
            onChange: e => {
              const { target } = e;
              setEmail(target.value);
              setError({ ...error, email: target.validity.typeMismatch });
            }
          }}
        />
      </Lead>
      <Lead>
        <TextField
          label="Amount"
          errorMessage={
            error.amount ? "Invalid value. This field is required" : ""
          }
          inputProps={{
            name: "amount",
            required: true,
            type: "number",
            step: "any",
            value: amount,
            onChange: e => {
              const { target } = e;
              setAmount(+target.value);
              setError({ ...error, amount: !target.checkValidity() });
            }
          }}
          prefix={"£"}
        />
      </Lead>

      <Button type="submit">Send</Button>
    </Form>
  );
};

export default TransferForm;
