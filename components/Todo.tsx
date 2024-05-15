import type { Todo } from '@prisma/client';

type Props = { todo: Todo };

export default function TodoItem({ todo }: Props) {
  return (
    <li key={todo.id}>
      <div>{todo.id}</div>
      <div>{todo.content}</div>
      <div>{todo.completed.toString()}</div>
    </li>
  );
}
