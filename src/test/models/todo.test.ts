import Todo from '@/models/todo';

describe("Todo", () => {
  describe("#toggle()", () => {
    const todo = new Todo("test");

    it("タスクは未完了状態で生成されている", () => {
      expect(todo.done).toBe(false);
    });
    it("未完了のタスクを完了済みにできる", () => {
      todo.toggle();
      expect(todo.done).toBe(true);
    });
    it("完了済みのタスクを未完了にできる", () => {
      todo.toggle();
      expect(todo.done).toBe(false);
    });
  });
});
