import Image from "next/image";
import Link from "next/link";
import prisma from "@/db";
import TodoItem from "../components/TodoItem";

const getTodos = () => {
  return prisma.todo.findMany();
};

const toggleCompletion = async (id: string, completed: boolean) => {
  "use server";
  await prisma.todo.update({
    where: { id: id },
    data: { completed: completed }
  });
};

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <header className="flex justify-between items-center py-4">
        <h2 className="text-2xl">Todos</h2>
        <Link href="/new" className="text-2xl border py-2 px-4 rounded-md">
          New
        </Link>
      </header>
      <ul>
        {todos.map((todo) => {
          console.log(todo);

          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleCompletion={toggleCompletion}
            />
          );
        })}
      </ul>
    </>
  );
}
