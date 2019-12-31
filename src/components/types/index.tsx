export interface ISidekickCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  success: boolean;
}

export interface IForm extends React.HTMLAttributes<HTMLFormElement> {
  color: string;
}

export interface IContainer extends React.HTMLAttributes<HTMLDivElement> {
  color: string;
}

export interface ITransactionList {
  name: string;
  email: string;
  amount: number;
}

export interface ITransactions {
  list: ITransactionList[];
}

export interface ITransferForm {
  onSubmit: Function;
}

export interface IErrorFormValidation {
  name: boolean;
  email: boolean;
  amount: boolean;
}
