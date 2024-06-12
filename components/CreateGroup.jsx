import { Button } from "./ui/button";
import Link from "next/link";
import GroupForm from "./GroupForm";

export default function Form() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold">Create Group</h1>
        </div>
        <Link href="/">
          <Button>Go Back</Button>
        </Link>
      </div>

      {/* <div className="h-screen flex justify-center items-center"> */}
      <div>
        <GroupForm />
      </div>
    </div>
  );
}
