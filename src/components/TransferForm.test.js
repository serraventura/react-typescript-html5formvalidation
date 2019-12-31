import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TransferForm from "./TransferForm";

configure({ adapter: new Adapter() });

let onSubmit;

describe("<TransferForm />", () => {
  beforeEach(() => {
    onSubmit = jest.fn();
  });

  it("should render without crashing", () => {
    const wrapper = shallow(<TransferForm />);
    expect(wrapper).toBeTruthy();
  });

  it("should match snapshot", () => {
    const wrapper = mount(<TransferForm />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should handle onSubmit prop", () => {
    const wrapper = shallow(<TransferForm onSubmit={onSubmit} />);

    wrapper
      .find('*[data-test="transfer-form"]')
      .first()
      .simulate("submit", { preventDefault: () => {} });

    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledWith({ amount: 0, email: "", name: "" });
  });
});
