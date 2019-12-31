import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Transactions from "./Transactions";

configure({ adapter: new Adapter() });

const transactions = {
  name: "john",
  email: "john@mail",
  amount: 0
};

describe("<Transactions />", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Transactions />);
    expect(wrapper).toBeTruthy();
  });

  it("should match snapshot", () => {
    const wrapper = mount(<Transactions />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render with data without crashing", () => {
    const wrapper = mount(<Transactions list={transactions} />);
    expect(wrapper).toBeTruthy();
  });

  it("should match snapshot with data", () => {
    const wrapper = mount(<Transactions list={transactions} />);
    expect(wrapper).toMatchSnapshot();
  });
});
