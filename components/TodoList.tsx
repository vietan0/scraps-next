import TodoItem from './Todo';

import type { Todo } from '@prisma/client';

type Props = { todos: Array<Todo> };

export default function TodoList({ todos }: Props) {
  return (
    <ul>
      {todos.map(t => <TodoItem todo={t} key={t.id} />)}
    </ul>
  );
}
