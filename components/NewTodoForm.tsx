import { createTodo } from '@/utils/actions/crud';

export default function NewTodoForm() {
  return (
    <form action={createTodo}>
      <input name="content" type="text" defaultValue="Content" className="rounded p-2 outline outline-blue-400" />
      <button className="rounded-md outline">Submit</button>
    </form>
  );
}
