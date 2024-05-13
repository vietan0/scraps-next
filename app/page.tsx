import NewTodoForm from '@/components/NewTodoForm';

async function getData() {
  await new Promise<void>(res => setTimeout(() => {
    res();
  }, 1000));

  return [1, 2, 3];
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="">
      <h1>Home</h1>
      <p>{JSON.stringify(data)}</p>
      <NewTodoForm />
    </main>
  );
}
