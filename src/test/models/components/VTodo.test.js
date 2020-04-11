import { mount } from "@vue/test-utils";
import VTodo from "@/components/VTodo";
import Todo from "@/models/todo";

describe("<VTodo>", () => {
  const wrapper = mount(VTodo, {
    propsData: {
      todo: new Todo("寝る")
    }
  });
  it("Toggleボタンをクリックするとイベントが発火する", () => {
    wrapper.find("button.toggle").trigger("click");
    expect(wrapper.emitted().onClickToggleButton).toBeTruthy();
  });
  it("Deleteボタンをクリックするとイベントが発火する", () => {
    wrapper.find("button.delete").trigger("click");
    expect(wrapper.emitted().onClickDeleteButton).toBeTruthy();
  });
});
