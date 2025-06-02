import { getUserList } from "@/actions";

export default async function Home() {
  const data = await getUserList();
  return (
    <div>
      <p className="text-3xl font-extrabold">List of name:</p>

      <ul className="p-6 bg-amber-200 font-medium">
        {data.map((user) => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
