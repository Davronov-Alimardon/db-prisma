import { db } from "@/lib/db";

export default async function Home() {
  const tasks = await db.task.findMany({
    where: {
      title: {
        contains: "Dav"
      }
    }
  });

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
}
