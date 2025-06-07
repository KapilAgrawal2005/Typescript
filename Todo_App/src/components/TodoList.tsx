import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle } from "./ui/card";

type TodoListProps = {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({ items, onDeleteTodo }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 my-6">
      {items.map((todo) => (
        <Card key={todo.id} className="min-w-[500px] flex items-center">
          <CardHeader className="flex items-center gap-12 justify-between">
            <CardTitle>{todo.text}</CardTitle>
            <Button
              variant={"destructive"}
              onClick={() => onDeleteTodo(todo.id)}
            >
              <Trash2 />
            </Button>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
