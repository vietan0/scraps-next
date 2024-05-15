'use server';
import { revalidatePath } from 'next/cache';

import prisma from '../prisma';

export async function createTodo(formData: FormData) {
  await prisma.todo.create({
    data: {
      content: formData.get('content') as string,
    },
  });

  revalidatePath('/todos');
}

export async function getTodos() {
  const todos = await prisma.todo.findMany();

  return todos;
}
