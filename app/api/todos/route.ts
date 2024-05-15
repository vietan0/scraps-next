import prisma from '@/utils/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  return NextResponse.json({ message: 'hello obi wan' });
}

export async function POST(req: Request) {
  const data = await req.json();
  const newTodo = await prisma.todo.create({ data });

  return NextResponse.json({ newTodo });
}
