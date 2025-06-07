import { useState, type FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type AddTodoProps = {
  onAddTodo: (text: string) => void;
};
const AddTodo = ({ onAddTodo }: AddTodoProps) => {
  const [text, setText] = useState<string>("");

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    onAddTodo(text);
    setText("");
  };
  return (
    <div>
      <form className="flex items-center gap-5" onSubmit={onSubmitHandler}>
        <Input
          type="text"
          placeholder="Write a new Todo"
          className="w-[700px]"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></Input>
        <Button type="submit">Add Todo</Button>
      </form>
    </div>
  );
};

export default AddTodo;
