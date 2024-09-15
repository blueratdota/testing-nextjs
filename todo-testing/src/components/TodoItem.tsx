"use client";

type TodoItemProps = {
  id: string;
  title: string;
  completed: boolean;
  toggleCompletion: (id: string, completed: boolean) => void;
};

const TodoItem = ({
  id,
  title,
  completed,
  toggleCompletion
}: TodoItemProps) => {
  return (
    <li className="flex items-center gap-4 py-0.5">
      <input
        type="checkbox"
        className="peer"
        id={id}
        defaultChecked={completed}
        onChange={(e) => {
          toggleCompletion(id, e.target.checked);
        }}
      />
      <label htmlFor={id} className="peer-checked:line-through">
        {title}
      </label>
    </li>
  );
};

export default TodoItem;
