import GroupList from "@/components/GroupList";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="space-y-14">
      <div className="flex justify-between">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold">Group Management APP</h1>
          <p className="max-w-[900px] font-light">
            A simple group management interface with basic functionality like
            (create, view, update, and delete groups), created using (React.js,
            Tailwind css, shadcn UI)
          </p>
        </div>
        <Link href="/create-group">
          <Button>Add Group</Button>
        </Link>
      </div>
      <GroupList />
    </main>
  );
}
