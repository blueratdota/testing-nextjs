import Link from "next/link";
import prisma from "@/db";
import { redirect } from "next/navigation";

const createTodo = async (data: FormData) => {
  "use server";
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid title");
  }

  await prisma.todo.create({
    data: { title: title, completed: false }
  });
  redirect("/");
};

const Page = () => {
  return (
    <>
      <header className="flex justify-between items-center py-4">
        <h2 className="text-2xl">New</h2>
        <Link href="/" className="text-2xl border py-2 px-4 rounded-md">
          Back
        </Link>
      </header>
      <form action={createTodo} className="flex flex-col gap-2">
        <input
          type="text"
          name="title"
          id=""
          className="bg-transparent border border-slate-300 rounded-md outline-none focus-within:border-slate-100 py-2 px-4"
        />
        <div className="flex justify-end gap-5">
          <Link href="/" className="text-xl border py-2 px-4 rounded-md">
            Cancel
          </Link>
          <button className="text-xl border py-2 px-4 rounded-md">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
export default Page;
