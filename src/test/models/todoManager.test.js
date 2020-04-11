import TodoManager from "@/models/TodoManager";

describe("TodoManager", () => {
  describe("New", () => {
    it("コンストラクタ引数を渡さないと、空のTodoリストが作成される", () => {
      const todoManager = new TodoManager();
      expect(todoManager.list.length).toBe(0);
    });
    it("コンストラクタ引数にタスクを渡した数だけTodoリストが生成される", () => {
      const todoManager = new TodoManager("食う", "寝る", "遊ぶ");
      expect(todoManager.list.length).toBe(3);
    });
  });

  describe("#find(id)", () => {
    const todoManager = new TodoManager("食う", "寝る", "遊ぶ");
    const todo = todoManager.list[1];

    it("idを指定してtodoを取得できる", () => {
      expect(todoManager.find(todo.id)).toBe(todo);
    });
    it("todoが存在しない場合はfalseが戻る", () => {
      expect(todoManager.find("hoge")).toBe(false);
    });
  });

  describe("#findIndex(id)", () => {
    const todoManager = new TodoManager("食う", "寝る", "遊ぶ");
    const todo = todoManager.list[1];

    it("idを指定してtodoのインデックスを取得できる", () => {
      expect(todoManager.findIndex(todo.id)).toBe(1);
    });
    it("todoが存在しない場合-1が戻る", () => {
      expect(todoManager.findIndex("hoge")).toBe(-1);
    });
  });

  describe("#add(taskName)", () => {
    const todoManager = new TodoManager();

    it("空文字を渡した場合、todoは追加されない", () => {
      todoManager.add("");
      expect(todoManager.list.length).toBe(0);
    });
    it("文字列を渡すとtodoが追加される", () => {
      todoManager.add("寝る");
      expect(todoManager.list[0].task).toBe("寝る");
    });
  });

  describe("#toggle(id)", () => {
    const todoManager = new TodoManager("食う", "寝る", "遊ぶ");
    const todo = todoManager.list[1];

    it("todoが存在しない場合falseが戻る", () => {
      expect(todoManager.toggle("hoge")).toBe(false);
      expect(todo.done).toBe(false);
    });
    it("todoが存在する場合trueが戻り、状態が変わっている", () => {
      expect(todoManager.toggle(todo.id)).toBe(true);
      expect(todo.done).toBe(true);
    });
  });

  describe("#delete(id)", () => {
    const todoManager = new TodoManager("食う", "寝る", "遊ぶ");
    const todo = todoManager.list[1];

    it("todoが存在しない場合falseが戻る", () => {
      expect(todoManager.delete("hoge")).toBe(false);
      expect(todoManager.list.length).toBe(3);
    });
    it("todoが存在する場合trueが戻り、状態が変わっている", () => {
      expect(todoManager.delete(todo.id)).toBe(true);
      expect(todoManager.list.length).toBe(2);
    });
  });
});
