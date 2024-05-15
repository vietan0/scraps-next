import NewTodoForm from '@/components/NewTodoForm';
import TodoList from '@/components/TodoList';
import { getTodos } from '@/utils/actions/crud';

export default async function Todos() {
  const todos = await getTodos();

  return (
    <>
      <NewTodoForm />
      <TodoList todos={todos} />
    </>
  );
}
