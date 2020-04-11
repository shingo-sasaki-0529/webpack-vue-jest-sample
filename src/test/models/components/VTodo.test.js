import { mount } from "@vue/test-utils";
import VTodo from "@/components/VTodo";
import Todo from "@/models/todo";

describe("<VTodo>", () => {
  it("is a Vue instance", () => {
    const wrapper = mount(VTodo, {
      propsData: {
        todo: new Todo("寝る")
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
